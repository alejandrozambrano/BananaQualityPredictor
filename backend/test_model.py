import joblib
import numpy as np

# Carga el modelo entrenado
model = joblib.load('bananaQualityModel.pkl')


# Datos ficticios para prueba (ajusta al número exacto de características que espera el modelo)
sample_data = np.array([[5.5, 3.2, 1.2, 0.3]])  # Ajusta esto según tu dataset original


# Realiza una predicción rápida
prediccion = model.predict(sample_data)
proba = model.predict_proba(sample_data)

print("Prediccion: ", prediccion)
print("Probabilidades: ",proba)