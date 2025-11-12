# backend/Text-model.py

from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# Load improved emotion classification model
MODEL_NAME = "j-hartmann/emotion-english-distilroberta-base"

print("🔄 Loading model and tokenizer...")
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)
print("✅ Model loaded successfully!")

# Dynamically load label order from model config
EMOTION_LABELS = [model.config.id2label[i] for i in range(len(model.config.id2label))]

def predict_emotion(text: str):
    """
    Predict the primary and secondary emotions of input text.
    Returns both emotion labels and their confidence scores.
    """
    # Tokenize text
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)

    # Get model outputs
    with torch.no_grad():
        outputs = model(**inputs)

    # Softmax to get probabilities
    probs = torch.nn.functional.softmax(outputs.logits, dim=-1).flatten()

    # Get top 2 predictions
    top2 = torch.topk(probs, 2)
    emotions = [EMOTION_LABELS[i] for i in top2.indices.tolist()]
    confidences = [round(float(p) * 100, 2) for p in top2.values.tolist()]

    return {
        "primary_emotion": emotions[0],
        "primary_confidence": confidences[0],
        "secondary_emotion": emotions[1],
        "secondary_confidence": confidences[1]
    }

# Manual quick test
if __name__ == "__main__":
    text = "I'm so happy today!"
    print(predict_emotion(text))
