
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

    try {
        const response = await fetch(
            "https://chatbot-tkj-online3.rahmangaucho1.workers.dev",
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

        // Baca respons sebagai teks terlebih dahulu
        const raw = await response.text();

        if (!raw.trim()) {
            throw new Error(
                "Server mengirim respons kosong. Periksa Cloudflare Worker."
            );
        }

        let data;

        try {
            data = JSON.parse(raw);
        } catch {
            throw new Error(
                "Server bukan mengirim JSON. Respons: " +
                raw.substring(0, 200)
            );
        }

        if (!response.ok) {
            throw new Error(
                data.error || "Server error: " + response.status
            );
        }

        if (!data.reply) {
            throw new Error(
                data.error || "Jawaban AI tidak ditemukan."
            );
        }

        loading.textContent = data.reply;

    } catch (error) {
        loading.textContent = "Gagal terhubung ke AI: " +
            error.message;
        console.error("Chatbot error:", error);
    }

    chatbox.scrollTop = chatbox.scrollHeight;
}
