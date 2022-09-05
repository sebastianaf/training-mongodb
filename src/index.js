import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

require("dotenv").config();
const url = process.env.DB_MONGO_URL;

const mongoDriverTraining = async () => {
  try {
    const client = new MongoClient(url);
    const db = client.db("mydb");
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

    console.log(`Finding names`);
    const cursor = await customers.find({ name: /^[Aa]/ }, {});

    await cursor.forEach((customer) => {
      //console.log(customer);
    });

    client.close();
  } catch (error) {
    console.log(error);
  }
};

const mongooseTraining = async () => {
  try {
    mongoose.connect(url);

    const Cat = mongoose.model("Cat", { name: String });

    const kitty = new Cat({ name: "Zildjian" });
    const res = await kitty.save();
    console.log(res);

    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

//mongoDriverTraining();
mongooseTraining();
