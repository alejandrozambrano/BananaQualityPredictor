# 🍌 Banana Quality Predictor

### 🇪🇸 Español | 🇬🇧 English | 🇫🇷 Français

---

## 🇪🇸 Español

Una aplicación web que predice la **calidad de un plátano** en función de sus características físicas, desarrollada como parte del *Laboratoire 2 - Intelligence Artificielle* en el Collège.

### 🧠 Tecnologías utilizadas
- 🧪 **Python** con **Flask**: backend y modelo de IA.
- 🎯 **Scikit-learn**: entrenamiento del modelo `LogisticRegression`.
- 🌍 **Flask-CORS**: permite conexión frontend-backend.
- 🥭 **MongoDB**: guarda las predicciones.
- ⚛️ **React.js**: interfaz de usuario interactiva.
- 🎨 **CSS**: diseño visual.

### ✨ Funcionalidades
| Funcionalidad                  | Descripción |
|-------------------------------|-------------|
| 📥 Formulario                 | El usuario ingresa datos físicos del plátano. |
| 🤖 Predicción con IA          | Backend devuelve predicción y probabilidades. |
| 🧾 Historial de predicciones  | Se muestra gracias a MongoDB y `useEffect`. |
| 🔄 Comunicación API REST      | Mediante `fetch` hacia Flask. |
| 📦 Persistencia de datos      | MongoDB mantiene el historial. |

---

## 🇬🇧 English

A web app that predicts **banana quality** based on physical attributes. Built as part of *Lab 2 – Artificial Intelligence* at college.

### 🧠 Technologies Used
- 🧪 **Python** with **Flask**: backend and model API.
- 🎯 **Scikit-learn**: used for training and loading `LogisticRegression`.
- 🌍 **Flask-CORS**: allows frontend-backend communication.
- 🥭 **MongoDB**: stores predictions.
- ⚛️ **React.js**: interactive frontend UI.
- 🎨 **CSS**: visual design.

### ✨ Features
| Feature              | Description |
|----------------------|-------------|
| 📥 Input Form        | User enters banana data. |
| 🤖 AI Prediction     | Flask returns prediction and probabilities. |
| 🧾 History Display   | Saved in MongoDB and shown in frontend. |
| 🔄 RESTful API       | Communication via `fetch`. |
| 📦 Data Persistence  | MongoDB keeps prediction history. |

---

## 🇫🇷 Français

Une application web qui prédit la **qualité d’une banane** en fonction de ses caractéristiques physiques, développée pour le *Labo 2 - Intelligence Artificielle* au collège.

### 🧠 Technologies utilisées
- 🧪 **Python** avec **Flask** : pour le backend et le modèle.
- 🎯 **Scikit-learn** : pour l’entraînement du modèle `LogisticRegression`.
- 🌍 **Flask-CORS** : pour autoriser la connexion entre React et Flask.
- 🥭 **MongoDB** : pour sauvegarder les prédictions.
- ⚛️ **React.js** : interface moderne et dynamique.
- 🎨 **CSS** : stylisation de l’application.

### ✨ Fonctionnalités
| Fonctionnalité                | Description |
|------------------------------|-------------|
| 📥 Formulaire de saisie       | L’utilisateur entre les données de la banane. |
| 🤖 Prédiction IA              | Le backend retourne une prédiction et probabilités. |
| 🧾 Historique des prédictions | Affiché grâce à MongoDB et `useEffect`. |
| 🔄 API REST                   | Communication via `fetch`. |
| 📦 Persistance des données    | Historique enregistré dans MongoDB. |

---

## 🖼️ Capturas / Screenshots

### 📝 Formulario / Form / Formulaire
> El usuario llena los campos con los valores del plátano.

### 📊 Resultado / Result / Résultat
> La predicción `Good` o `Bad` aparece con sus probabilidades.

### 📚 Historial / History / Historique
> Se actualiza automáticamente cada vez que se genera una nueva predicción.

---

## 🚀 Ejecución / Run Locally / Exécution locale

```bash
# 1. Clonar repositorio / Clone repo
git clone https://github.com/tu_usuario/BananaQualityPredictor.git
cd BananaQualityPredictor

# 2. Instalar dependencias / Install requirements
# Backend:
pip install flask flask-cors joblib numpy pymongo

# Frontend:
npm install
npm start
👨‍💻 Autor / Author / Auteur
Alejandro Zambrano
📍 Montréal, Canada
🎓 Étudiant / Student in Web & Mobile Programming
💬 Merci / Thanks for visiting my project!





