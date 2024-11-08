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
  },
  {
    id: 2,
    name: "Steve Rogers",
    status: "On Vacation",
    img: `${baseURL}/assets/images/steve-rogers.png`,
  },
  {
    id: 3,
    name: "Thor Odinson",
    status: "LunchTime",
    img: `${baseURL}/assets/images/thor-odinson.png`,
  },

  {
    id: 4,
    name: "Wanda Maximoff",
    status: "On Vacation",
    img: `${baseURL}/assets/images/wanda-maximoff.png`,
  },
  {
    id: 5,
    name: "Peter Parker",
    status: "LunchTime",
    img: `${baseURL}/assets/images/peter-parker.png`,
  },
  {
    id: 6,
    name: "Stephen Strange",
    status: "Business Trip",
    img: `${baseURL}/assets/images/stephen-strange.png`,
  },
  {
    id: 7,
    name: "Carol Danvers",
    status: "On Vacation",
    img: `${baseURL}/assets/images/carol-danvers.png`,
  },
  {
    id: 8,
    name: "God Of Thunder",
    status: "On Vacation",
    img: `${baseURL}/assets/images/my-thor.png`,
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
