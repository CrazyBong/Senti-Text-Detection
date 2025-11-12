# Senti-Text-Detection

A powerful emotion detection application that analyzes text to identify emotions using machine learning. Built with a React frontend and Flask backend, this application leverages state-of-the-art transformer models for accurate emotion classification.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🎯 **Real-time Emotion Detection**: Analyze text and detect emotions with confidence scores
- 🧠 **Advanced ML Models**: Uses Hugging Face transformer models for high accuracy
- 🌈 **Beautiful UI**: Modern, responsive interface with emotion-specific visual feedback
- 🔧 **RESTful API**: Clean API design for easy integration
- 📱 **Responsive Design**: Works on all device sizes
- ⚡ **Fast Processing**: Quick analysis with loading states
- 🛡️ **Error Handling**: Comprehensive error handling and user feedback

## Architecture

The application follows a client-server architecture:

```
┌─────────────────┐    HTTP    ┌─────────────────┐
│   React Frontend│───────────▶│  Flask Backend  │
│   (Vite + TS)   │            │   (Python)      │
└─────────────────┘            └─────────────────┘
                                        │
                                ┌─────────────────┐
                                │  Hugging Face   │
                                │Transformer Model│
                                └─────────────────┘
```

### Frontend
- Built with React and TypeScript
- Uses Vite for fast development and building
- Styled with Tailwind CSS
- Component-based architecture
- Makes API calls to the backend for emotion detection

### Backend
- Flask REST API
- Hugging Face transformer model for emotion detection
- CORS enabled for frontend communication
- Returns primary and secondary emotions with confidence scores

## Technology Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons

### Backend
- **Flask** - Lightweight Python web framework
- **Transformers** - Hugging Face library for state-of-the-art NLP
- **PyTorch** - Machine learning framework
- **Python** - Programming language

### Development Tools
- **npm** - Package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Project Structure

```
senti-text-detection/
├── backend/
│   ├── app.py              # Flask API server
│   ├── Text-model.py       # Emotion detection model implementation
│   └── tests/
│       └── manual_test.py  # Manual testing script
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Demo.tsx        # Main demo/emotion detection component
│   │   ├── Features.tsx    # Features showcase
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Hero.tsx        # Hero section
│   │   └── Index.tsx       # Main page component
│   ├── hooks/
│   │   └── use-toast.ts    # Toast notification hook
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── index.css           # Global CSS styles
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Frontend dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package installer)

## Installation

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd senti-text-detection
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install flask flask-cors transformers torch
   ```

## Usage

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   python app.py
   ```
   The backend will be available at `http://127.0.0.1:5000`

2. In a new terminal, start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

3. Open your browser and navigate to `http://localhost:5173` to use the application

### Using the Emotion Detection

1. Navigate to the "Live Sentiment Analysis" section
2. Enter text in the text area (e.g., "I'm so happy today!")
3. Click "Analyze Sentiment"
4. View the detected emotion with confidence percentage

## API Endpoints

### GET `/`
Health check endpoint

**Response:**
```json
{
  "message": "Senti Emotion Detection API is running!"
}
```

### POST `/predict`
Emotion detection endpoint

**Request:**
```json
{
  "text": "Your text here"
}
```

**Response:**
```json
{
  "primary_emotion": "joy",
  "primary_confidence": 95.24,
  "secondary_emotion": "surprise",
  "secondary_confidence": 3.6
}
```

**Supported Emotions:**
- joy
- sadness
- anger
- fear
- love
- surprise

## Testing

### Backend Testing

Manual testing script is available in the backend tests directory:

```bash
cd backend
python tests/manual_test.py
```

This script allows you to manually enter text and see emotion detection results in the terminal.

### API Testing

You can test the API using curl:

```bash
curl -X POST http://127.0.0.1:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"text": "I am feeling great today!"}'
```

## Deployment

### Frontend Deployment

To build the frontend for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Backend Deployment

For production deployment, consider using a WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Environment Variables

Create a `.env` file in the backend directory for configuration:

```env
FLASK_ENV=production
FLASK_DEBUG=False
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React, Flask, and Hugging Face Transformers