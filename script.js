
async function kirim() {
    const input = document.getElementById("pesan");
    const chatbox = document.getElementById("chatbox");

    const message = input.value.trim();
    if (!message) return;

    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.textContent = message;
    chatbox.appendChild(userDiv);

    input.value = "";

    const loading = document.createElement("div");
    loading.className = "bot";
    loading.textContent = "AI sedang berpikir...";
    chatbox.appendChild(loading);

    chatbox.scrollTop = chatbox.scrollHeight;

    try {
        const response = await fetch(
            "https://GANTI-URL-WORKER-ANDA.workers.dev",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Permintaan AI gagal");
        }

        loading.textContent = data.reply || "AI tidak memberikan jawaban.";

    } catch (error) {
        loading.textContent = "Gagal terhubung ke AI: " + error.message;
    }

    chatbox.scrollTop = chatbox.scrollHeight;
}
