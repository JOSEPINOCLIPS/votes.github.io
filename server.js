import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/votos", async (req, res) => {
    try {
        const r = await fetch("https://app.rankedvote.co/api/settings/rv/lamansiondia4");
        const data = await r.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "error" });
    }
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));
