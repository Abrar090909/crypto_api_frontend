document.getElementById("trainBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("https://crypto-api-2-4l3m.onrender.com/train?episodes=10", {
      method: "POST"
    });
    const result = await response.json();
    alert(`Training complete. Total reward: ${result.total_reward}`);
  } catch (err) {
    console.error("Training error:", err);
    alert("Training failed.");
  }
});

document.getElementById("predictBtn").addEventListener("click", async () => {
  const date = document.getElementById("dateInput").value;
  if (!date) {
    alert("Please select a date");
    return;
  }
  try {
    const response = await fetch(`https://crypto-api-2-4l3m.onrender.com/predict?date=${date}`, {
      method: "POST"
    });
    const result = await response.json();
    alert(`Prediction for ${date}: ${result.action}`);
  } catch (err) {
    console.error("Prediction error:", err);
    alert("Prediction failed.");
  }
});

document.getElementById("metricsBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("https://crypto-api-2-4l3m.onrender.com/metrics");
    const result = await response.json();
    alert(
      `Sharpe Ratio: ${result.sharpe_ratio}\n` +
      `Win Ratio: ${result.win_ratio}\n` +
      `Profit %: ${result.profit_percent}\n` +
      `Max Drawdown: ${result.max_drawdown}`
    );
  } catch (err) {
    console.error("Metrics error:", err);
    alert("Could not fetch metrics.");
  }
});
