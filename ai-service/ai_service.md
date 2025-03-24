# AI Service for Automated Reconciliation

## Overview

This AI service predicts the financial reliability of tenants based on their payment history, late payments, and income. It consists of:

* A **machine learning model** trained to assess risk scores.
* A **Flask API** for serving predictions.
* A **standalone script** to make manual predictions
* 

## Installation

### **1. Set Up the Virtual Environment**

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### **2. Install Dependencies**

```bash
pip install -r requirements.txt
```

---

## Training the Model

The model predicts tenant payment risk based on:

* **Payment history** (number of on-time payments)
* **Late days** (delayed payments in the last year)
* **Income** (monthly income level)

### **Run the training script:**

```bash
python models/train_model.py
```

This will generate two files inside the `models/` folder:

* `tenant_risk_model.pkl` (Trained model)
* `scaler.pkl` (Feature scaler for normalization)

---

## Running the AI API

### **Start the Flask API**

```bash
python ai_api.py
```

### **Make a Prediction via API**

```bash
curl -X POST "http://127.0.0.1:5001/predict" -H "Content-Type: application/json" \
-d '{"payment_history": 10, "late_days": 5, "income": 4000}'
```

Expected Response:

```json
{"risk_score": 0}  # 0 = Low Risk, 1 = High Risk
```

---

## Using the Standalone Prediction Script

You can also predict without running the API using `predict.py`:

```bash
python predict.py
```

Example output:

```bash
Predicted Risk Score: 1
```

---

## File Structure

```
ai-service/
│── models/
│   ├── train_model.py      # Trains the model
│   ├── tenant_risk_model.pkl # Saved ML model
│   ├── scaler.pkl         # Data scaler
│── ai_api.py              # Flask API for predictions
│── predict.py             # Standalone prediction script
│── requirements.txt       # Dependencies
```

---

## Next Steps

Now that the AI service is ready, integrate it with the backend to automate reconciliation.
