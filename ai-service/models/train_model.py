import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pickle

# Sample dataset (replace with actual data)
def load_data():
    data = pd.DataFrame({
        'payment_history': np.random.randint(0, 12, 100),  # Number of on-time payments
        'late_days': np.random.randint(0, 30, 100),  # Late days in the last 12 months
        'income': np.random.randint(2000, 8000, 100),  # Monthly income
        'risk_score': np.random.randint(0, 2, 100)  # 0 = low risk, 1 = high risk
    })
    return data

# Train model
def train_model():
    data = load_data()
    X = data[['payment_history', 'late_days', 'income']]
    y = data['risk_score']

    scaler = StandardScaler()
    X = scaler.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Save model and scaler
    with open("models/tenant_risk_model.pkl", "wb") as f:
        pickle.dump(model, f)

    with open("models/scaler.pkl", "wb") as f:
        pickle.dump(scaler, f)

    print("Model training complete and saved!")

if __name__ == "__main__":
    train_model()
