import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

let userinfo = [];

app.get("/userinfo", (req, res) => {
  res.json(userinfo);
});

app.post("/userinfo", (req, res) => {
  const name = req.body.name;
  const title = req.body.title;
  const description = req.body.description;
  const user = { name, title, description };
  userinfo.push(user);
  res.json(user);
});

app.patch("/userinfo/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, title, description } = req.body;
  const user = userinfo[userId];
  user.name = name || user.name;
  user.title = title || user.title;
  user.description = description || user.description;

  res.json(user);
});

app.delete("/userinfo/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  if (userId < 0 || userId >= userinfo.length) {
  }

  userinfo.splice(userId, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
