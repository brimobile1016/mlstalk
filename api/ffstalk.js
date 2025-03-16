const fetch = require("node-fetch");

module.exports = async (req, res) => {
    try {
        // Ambil parameter ID dari query
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "Parameter ID diperlukan" });
        }

        // URL API target
        const apiUrl = `https://saipulanuar.eu.org/api/api.php/ffstalk?id=${id}&apikey=bear`;

        // Fetch data dari API eksternal
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Kirim hasil JSON ke response
        res.status(200).json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Gagal mengambil data dari API eksternal" });
    }
};
