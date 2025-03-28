import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

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

app.get("/feirinha", (req, res) => {

    res.send(feirinha);

})

app.get("/feirinha/:id", (req, res) => {
    const  id  = req.params.id;
    const feirinhaItem = feirinha.find(item => {
        return item.id == Number(id);
    })
    res.send(feirinhaItem);



});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
});