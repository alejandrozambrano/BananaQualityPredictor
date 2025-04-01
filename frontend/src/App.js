import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    Size: '',
    Weight: '',
    Sweetness: '',
    Softness: '',
    HarvestTime: '',
    Ripeness: '',
    Acidity: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  // 🔁 Cargar historial cada vez que cambia el resultado
  useEffect(() => {
    fetch('http://127.0.0.1:5000/getPredictions')
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error('Error al traer historial:', err));
  }, [result]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const numericForm = Object.fromEntries(
        Object.entries(form).map(([key, value]) => [key, parseFloat(value)])
      );

      const response = await fetch('http://127.0.0.1:5000/predictQuality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(numericForm),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('❌ Error al conectar con la API:', err);
      setError('Error al conectar con la API');
    }
  };

  return (
    <div className="container">
      <h1>🍌 Banana Quality Predictor</h1>

      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="number"
              name={key}
              value={form[key]}
              onChange={handleChange}
              step="any"
              required
            />
          </div>
        ))}
        <button type="submit">Prédire la qualité</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '20px' }}><strong>Error:</strong> {error}</p>}

      {result && (
        <div className="result">
          <h2>résultat:</h2>
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Probabilité:</strong> {result.probabilities.join(', ')}</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="history">
          <h2>Historique des prédictions</h2>
          {history.map((item, idx) => (
            <div key={idx} className="card">
              <pre>{JSON.stringify(item.input, null, 2)}</pre>
              <p><strong>Prediction:</strong> {item.prediction}</p>
              <p><strong>Probabilités:</strong> {item.probabilities.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
