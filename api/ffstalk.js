import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Metode tidak diizinkan" });
    }

    const id = req.query.id;
    if (!id) {
        return res.status(400).json({ error: "Parameter ID diperlukan" });
    }

    try {
        const apiUrl = `https://saipulanuar.eu.org/api/api.php/ffstalk?id=${id}&apikey=bear`;
        const { data } = await axios.get(apiUrl);

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error saat fetch:", error.message);
        return res.status(500).json({ error: "Gagal mengambil data dari API eksternal" });
    }
}
