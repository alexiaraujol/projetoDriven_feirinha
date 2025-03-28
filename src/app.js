import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const itemCompras = [
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
]

app.get("/feirinha", (req, res) => {

    res.send(itemCompras);

})

app.get("/feirinha/:id", (req, res) => {
    const id = req.params.id;
    const buscarItem = itemCompras.find(item => {
        return item.id == Number(id);
    })
    res.send(buscarItem);
});

app.post("/feirinha", (req, res) => {
    const itemAdicionado = req.body;
    const { name, quantity, type } = itemAdicionado;

    if (!name || !quantity || !type) {
        return res.status(422).send("Preencha todos os campos!!")
    }
    if (typeof name !== "string" || typeof type !== "string") {
        return res.status(400).send("Nome e tipo devem ser do tipo string!!")
    }
    if (quantity <= 0) {
        return res.status(400).send("Quantidade deve ser maior que zero!!")
    }
    if (itemCompras.find(item => item.name === name)) {
        return res.status(409 ).send("Esse item já existe na lista!!")
    }    
    itemCompras.push({
        id: itemCompras.length + 1,
        ...itemAdicionado
    });

    res.status(201).send("Seu item foi adicionado com sucesso!!")
})

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
});