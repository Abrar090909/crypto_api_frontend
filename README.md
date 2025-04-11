# Crypto API Frontend

🚀 A modern, minimal frontend interface for a Deep Reinforcement Learning-based Crypto Trading Bot (A2C + LSTM).

## 🖥️ Features

- Clean UI with Binance / CoinSwitch-style vibes
- Buttons to:
  - Train model
  - Predict Buy/Sell/Hold on specific dates
  - View live portfolio performance
- Animations & responsive layout
- API integrated with FastAPI backend

## 🧠 Tech Stack

- HTML, CSS, JavaScript
- FastAPI (Backend)
- Netlify (Deployment)

## 📦 Project Structure

```
crypto_api_frontend/
├── index.html       # Main HTML file
├── style.css        # Styling and layout
├── script.js        # JS logic for buttons, API calls
├── README.md        # You're here!
```

## 🔧 Setup Instructions

1. Clone the repo  
   ```bash
   git clone https://github.com/YOUR_USERNAME/crypto_api_frontend.git
   ```

2. Open `index.html` in your browser (for local testing)

3. Update `script.js` with your deployed FastAPI URL:
   ```javascript
   const API_BASE_URL = "https://your-fastapi-url.onrender.com";
   ```

4. Deploy to Netlify or your favorite static host!

## 🌐 Deploy on Netlify

- Drag-and-drop these files on [Netlify Drop](https://app.netlify.com/drop), or
- Link this repo to Netlify for auto-deploys on git push.

## 📬 Contact

DM on GitHub or Discord if you want to collaborate!

---

Happy trading! 🧠📈💰