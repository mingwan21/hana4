import express from "express";

const app = express();

app.get("/hello/:id", (req, res) => {
  const { id } = req.params;
  const { q } = req.query;

  res.send({ message: "server ok", id, q });
});

const Users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Hong" },
];

app.get("/users", (req, res) => {
  res.send(Users);
});
app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = Math.max(Users.map(({ id }) => id)) + 1;
  res.status(200).setDef({ id });
});

app.patch("/users/:userId", (req, res) => {
  const [userid] = req.params;
  const user = Users.find(({ id }) => id === +userId);
  res.re;
});
app.delete("/users/:userId", (req, res) => {});

app.listen(3500, () => {
  console.log("server started 3500 port ... ");
});
