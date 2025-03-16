import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/ffstalk", async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: "Parameter ID diperlukan" });

        const apiUrl = `https://saipulanuar.eu.org/api/api.php/ffstalk?id=${id}&apikey=bear`;
        const response = await axios.get(apiUrl);

        // Kirim JSON yang sudah diformat
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.status(200).send(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Gagal mengambil data dari API eksternal" });
    }
});


export default router;
