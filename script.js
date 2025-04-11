
async function trainModel() {
    const response = await fetch("https://crypto-api-2-4l3m.onrender.com/train", { method: "POST" });
    const data = await response.json();
    document.getElementById("output").innerText = data.message || JSON.stringify(data);
}

async function predict() {
    const date = document.getElementById("dateInput").value;
    const response = await fetch("https://crypto-api-2-4l3m.onrender.com/predict?date=" + date);
    const data = await response.json();
    document.getElementById("output").innerText = "Prediction: " + data.action;
}

async function showMetrics() {
    const response = await fetch("https://crypto-api-2-4l3m.onrender.com/metrics");
    const data = await response.json();
    let output = "Metrics:\n";
    for (let key in data) {
        output += key + ": " + data[key] + "\n";
    }
    document.getElementById("output").innerText = output;
}
