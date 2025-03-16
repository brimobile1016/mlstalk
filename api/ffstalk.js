import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Metode tidak diizinkan" });
    }

    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: "Parameter ID diperlukan" });

        const apiUrl = `https://saipulanuar.eu.org/api/api.php/ffstalk?id=${id}&apikey=bear`;
        const response = await axios.get(apiUrl);

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Gagal mengambil data dari API eksternal" });
    }
}
