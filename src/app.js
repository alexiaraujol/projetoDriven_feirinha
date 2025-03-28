import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get("/feirinha", (req, res) => {
    const feirinha = [
        {
            id: 1, 
            name: "Maçã",
            quantity: 1,
            type: "Fruta",
        },
        {
            id: 2, 
            name: "Uva",
            quantity: 4,
            type: "Fruta",
        },
        {
            id: 1, 
            name: "Banana",
            quantity: 5,
            type: "Fruta",
        },
    ]

    res.send(feirinha);

})

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
})