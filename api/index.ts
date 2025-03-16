import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // Panggil API eksternal
        const apiUrl = "https://saipulanuar.eu.org/api/api.php/ffstalk?id=1821481021&apikey=bear";
        const response = await axios.get(apiUrl, { timeout: 5000 });

        // Periksa jika response tidak valid
        if (!response.data) {
            throw new Error("Data tidak ditemukan");
        }

        // Kirim hasil ke client
        res.status(200).json(response.data);
    } catch (error: any) {
        console.error("Error saat fetching:", error.message);
        res.status(500).json({ error: "Terjadi kesalahan pada server", message: error.message });
    }
}
