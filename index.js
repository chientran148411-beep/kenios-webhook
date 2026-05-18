const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("KENIOS WEBHOOK ONLINE");
});

app.post("/sepay-webhook", async (req, res) => {

    try {

        console.log(req.body);

        return res.json({
            success: true
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false
        });

    }

});

const PORT =
process.env.PORT || 10000;

app.listen(PORT, () => {

    console.log(`Webhook Running ${PORT}`);

});
