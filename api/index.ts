import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const apiUrl = "https://saipulanuar.eu.org/api/api.php/ffstalk?id=1821481021&apikey=bear";
        const response = await axios.get(apiUrl);
        
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data dari API." });
    }
}
