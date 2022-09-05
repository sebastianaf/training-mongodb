const mongoose = require("mongoose");

require("dotenv").config();
const url = process.env.DB_MONGO_URL;

console.log(url);

mongoose.connect(url);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
