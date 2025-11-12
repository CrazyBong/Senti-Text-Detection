# backend/app.py

import sys
import os
import importlib.util
from flask import Flask, request, jsonify
from flask_cors import CORS

# Add parent directory to path to import Text-model
sys.path.append(os.path.join(os.path.dirname(__file__)))

# Import Text-model dynamically (because of hyphen)
spec = importlib.util.spec_from_file_location("Text_model", os.path.join(os.path.dirname(__file__), "Text-model.py"))
if spec is None or spec.loader is None:
    raise ImportError("Could not load Text-model.py")

Text_model = importlib.util.module_from_spec(spec)
spec.loader.exec_module(Text_model)
predict_emotion = Text_model.predict_emotion

app = Flask(__name__)
CORS(app)  # Allow React frontend to access the backend

@app.route("/")
def home():
    return jsonify({"message": "Senti Emotion Detection API is running!"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        user_text = data.get("text", "")

        if not user_text.strip():
            return jsonify({"error": "Text input is empty."}), 400

        # Run prediction using your model
        result = predict_emotion(user_text)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)