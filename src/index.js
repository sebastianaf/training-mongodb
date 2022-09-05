import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";

require("dotenv").config();
const url = process.env.DB_MONGO_URL;

(async () => {
  try {
    const client = new MongoClient(url)
    const db = client.db("mydb")
    const customers = db.collection("customers");
    

    console.log(`Inserting 1000 customers...`);
    for (let index = 0; index < 1000; index++) {
      await customers.insertOne({
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        address: faker.address.streetAddress(),
      });
    }
    console.log(`Inserting 1000 customers... OK`);

    client.close();
  } catch (error) {
    console.log(error);
  }
})();

/* const mongoose = require("mongoose");

require("dotenv").config();
const url = process.env.DB_MONGO_URL;

console.log(url);

mongoose.connect(url);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
 */
