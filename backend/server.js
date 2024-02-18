const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/api/pirates", (req, res) => {
    const pirates = [
        {
            id: 1,
            name: "Luffy",
            title: "Captain",
        },
        {
            id: 2,
            name: "Zoro",
            title: "First Mate",
        },
        {
            id: 3,
            name: "Sanji",
            title: "Cook",
        },
        {
            id: 4,
            name: "Nami",
            title: "Navigator",
        },
        {
            id: 5,
            name: "Usopp",
            title: "Sniper",
        },
    ];
    res.send(pirates);
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
