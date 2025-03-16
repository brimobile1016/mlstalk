const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ffstalk", async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: "Parameter ID diperlukan" });
        }

        const apiUrl = `https://saipulanuar.eu.org/api/api.php/ffstalk?id=${id}&apikey=bear`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data" });
    }
});

// Default route
app.get("/", (req, res) => {
    res.json({ message: "API berjalan dengan baik!" });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
