const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi i m running in the docker")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is good running on port ${PORT}`);
});