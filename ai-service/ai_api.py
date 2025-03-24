from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load model & scaler
with open("models/tenant_risk_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("models/scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array([[data['payment_history'], data['late_days'], data['income']]])
    features_scaled = scaler.transform(features)
    
    prediction = model.predict(features_scaled)
    
    return jsonify({"risk_score": int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
