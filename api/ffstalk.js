import axios from "axios";

export default async function handler(req, res) {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "Parameter ID diperlukan" });
        }

        // URL API target
        const apiUrl = `https://saipulanuar.eu.org/api/api.php/ffstalk?id=${id}&apikey=bear`;

        // Fetch data dari API eksternal menggunakan Axios
        const response = await axios.get(apiUrl);
        
        // Kirim hasil JSON ke response
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Gagal mengambil data dari API eksternal" });
    }
}
