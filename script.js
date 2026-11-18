
function kirim() {
    const input = document.getElementById("pesan");
    const chatbox = document.getElementById("chatbox");

    const pertanyaan = input.value.trim().toLowerCase();

    if (pertanyaan === "") return;

    // Menampilkan pesan pengguna
    const pesanUser = document.createElement("div");
    pesanUser.className = "user";
    pesanUser.textContent = input.value;
    chatbox.appendChild(pesanUser);

    let jawaban = "";

    if (pertanyaan.includes("halo") || pertanyaan.includes("hai")) {
        jawaban = "Halo juga! Selamat datang di Chatbot TKJ.";
    }
    else if (pertanyaan.includes("tkj")) {
        jawaban = "TKJ adalah Teknik Komputer dan Jaringan.";
    }
    else if (pertanyaan.includes("komputer")) {
        jawaban = "Komputer merupakan perangkat elektronik untuk mengolah data.";
    }
    else if (pertanyaan.includes("ip address") || pertanyaan.includes("ip")) {
        jawaban = "IP Address adalah alamat identitas perangkat pada jaringan.";
    }
    else if (pertanyaan.includes("router")) {
        jawaban = "Router berfungsi menghubungkan beberapa jaringan.";
    }
    else if (pertanyaan.includes("switch")) {
        jawaban = "Switch menghubungkan beberapa perangkat dalam jaringan LAN.";
    }
    else if (pertanyaan.includes("terima kasih")) {
        jawaban = "Sama-sama. Semangat belajar TKJ!";
    }
    else {
        jawaban = "Maaf, saya belum memahami pertanyaan Anda.";
    }

    // Menampilkan jawaban bot
    const pesanBot = document.createElement("div");
    pesanBot.className = "bot";
    pesanBot.textContent = jawaban;
    chatbox.appendChild(pesanBot);

    chatbox.scrollTop = chatbox.scrollHeight;
    input.value = "";
    input.focus();
}

// Mengirim pesan dengan tombol Enter
document.getElementById("pesan").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        kirim();
    }
});
