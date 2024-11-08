const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(bodyParser.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));
const baseURL = process.env.BASE_URL || "";
const employees = [
  {
    id: 1,
    name: "Tony Stark",
    status: "Working",
    img: `${baseURL}/assets/images/tony-stark.png`,
    gif: "https://media1.tenor.com/m/a9K-9H5kVooAAAAd/tony-stark-iron-man.gif",
  },
  {
    id: 2,
    name: "Steve Rogers",
    status: "On Vacation",
    img: `${baseURL}/assets/images/steve-rogers.png`,
    gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnpvdjNxc2k0cHl6N2NiazRvbXBnNWZnamgxMXdjbXFncm9oYXZmeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dv01JuAyGK11zZKRv5/giphy.gif",
  },
  {
    id: 3,
    name: "Thor Odinson",
    status: "LunchTime",
    img: `${baseURL}/assets/images/thor-odinson.png`,
    gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXEwaG11NnV4MzE1bGY3NjRyamVlcGFnMGRhYmt3dm94b3VmZmJiNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vnih78ZeNTu3BOCrn/giphy.gif",
  },

  {
    id: 4,
    name: "Wanda Maximoff",
    status: "On Vacation",
    img: `${baseURL}/assets/images/wanda-maximoff.png`,
    gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2UzNWpkNTh5YXgycG1pZ2czdHZ3a296bzJzYWNia29saXVseXBxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GJpasPLzpAtGoMaN6O/giphy.gif",
  },
  {
    id: 5,
    name: "Peter Parker",
    status: "LunchTime",
    img: `${baseURL}/assets/images/peter-parker.png`,
    gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Y5ZjV3ZjhhZ2dsZDJ2aHRkcDVhaHV4OWpvdmQ3dmt6bjBucnk4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeneyP7vrrZOA9y/giphy.gif",
  },
  {
    id: 6,
    name: "Stephen Strange",
    status: "Business Trip",
    img: `${baseURL}/assets/images/stephen-strange.png`,
    gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDNsNHNtdWF4bmJkNWcyMDVhNnJ2ZWs3c251dWlubmV1dnprZTZ4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxHQrAmG6bd6RRh4s/giphy.gif",
  },
  {
    id: 7,
    name: "Carol Danvers",
    status: "On Vacation",
    img: `${baseURL}/assets/images/carol-danvers.png`,
    gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHE1NTNybzI0Y3JsdXd1ZXIwenRvM3VzZmxtaHFyZzc3cm1pMGl1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/521N9IQgJfxHz9k2DO/giphy.gif",
  },

];

app.get("/users", (req, res) => {
  res.send(employees);
});

app.post("/users/:id", (req, res) => {
  const index = employees.findIndex((obj) => obj.id === +req.params.id);
  employees[index].status = req.body.status;
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
