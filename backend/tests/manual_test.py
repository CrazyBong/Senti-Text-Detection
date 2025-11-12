# backend/tests/manual_test.py

import sys
import os
import importlib.util

# Add parent directory to path to import Text-model
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

# Import Text-model dynamically (because of hyphen)
spec = importlib.util.spec_from_file_location("Text_model", os.path.join(os.path.dirname(__file__), "..", "Text-model.py"))
if spec is None or spec.loader is None:
    raise ImportError("Could not load Text-model.py")

Text_model = importlib.util.module_from_spec(spec)
spec.loader.exec_module(Text_model)
predict_emotion = Text_model.predict_emotion

def main():
    print("🤖 Senti Emotion Detection - Manual Test")
    print("=" * 55)

    while True:
        text = input("\nEnter text to analyze (or 'quit' to exit):\n> ").strip()
        if text.lower() == "quit":
            print("👋 Goodbye!")
            break

        if not text:
            print("⚠️  Please enter some text.")
            continue

        print("🔍 Analyzing...")
        try:
            result = predict_emotion(text)
            print(f"💡 Primary Emotion: {result['primary_emotion']} ({result['primary_confidence']}%)")
            print(f"✨ Secondary Emotion: {result['secondary_emotion']} ({result['secondary_confidence']}%)")
        except Exception as e:
            print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    main()
