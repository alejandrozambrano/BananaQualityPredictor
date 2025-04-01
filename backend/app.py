from flask import Flask, request, jsonify
from flask_cors import CORS  # Importante
import joblib
import numpy as np
from pymongo import MongoClient

app = Flask(__name__)

# ✅ Habilitar CORS de forma global (muy importante)
CORS(app)

# Carga del modelo
model = joblib.load('bananaQualityModel.pkl')

# Conexión a MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["banana_db"]
collection = db["predictions"]

@app.route('/predictQuality', methods=['POST'])
def predict_quality():
    try:
        data = request.get_json(force=True)
        input_data = np.array([list(data.values())])

        prediction = model.predict(input_data)[0]
        proba = model.predict_proba(input_data)[0].tolist()

        record = {
            "input": data,
            "prediction": prediction,
            "probabilities": proba
        }
        collection.insert_one(record)

        return jsonify({
            "prediction": prediction,
            "probabilities": proba
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route('/getPredictions', methods=['GET'])
def get_predictions():
    try:
        records = list(collection.find({}, {"_id": 0}))
        return jsonify(records)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
