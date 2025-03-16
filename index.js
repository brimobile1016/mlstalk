import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Konversi path agar sesuai dengan ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware untuk JSON
app.use(express.json());

// Routing API
app.use("/api", apiRoutes);

// Menyajikan halaman home.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Menjalankan server (untuk pengujian lokal)
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

export default app;
