const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())

app.get("/size", (req, res) => {
  res.send([
    { label: "Mini (4 pedaços)", value: "mini", id: 1 },
    { label: "Pequena (6 pedaços)", value: "pequena", id: 2 },
    { label: "Média (8 pedaços)", value: "media", id: 3 },
    { label: "Grande (10 pedaços)", value: "grande", id: 4 },
  ]);
});
app.get("/border", (req, res) => {
  res.send([
    { label: "Sem recheio", value: "sem recheio", id: 1 },
    { label: "Recheio de chocolate", value: "chocolate", id: 2 },
    { label: "Recheio de catupiry", value: "catupiry", id: 3 },
    { label: "Recheio de cream cheese", value: "cream cheese", id: 4 },
  ]);
});
app.get("/taste", (req, res) => {
  res.send([
    { label: "Frango", value: "frango", id: 1 },
    { label: "Carne", value: "carne", id: 2 },
    { label: "Mussarela", value: "mussarela", id: 3 },
    { label: "Calabresa", value: "calabresa", id: 4 },
  ]);
});
app.get("/day", (req, res) => {
  res.send({
    size: { label: "Grande (10 pedaços)", value: "grande" },
    border: { label: "Recheio de chocolate", value: "chocolate" },
    taste: { label: "Frango", value: "frango" },
    points: 100,
  });
});

app.listen(8000, () => console.log("listening at 8000"));
