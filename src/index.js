import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
const { Schema } = mongoose;

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
        pet: {
          name: faker.name.fullName(),
          specie: faker.animal.type(),
        },
        createdOn: Date(),
      });
    }
    console.log(`Inserting 1000 customers... OK`);

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
    const CustomerSchema = new Schema({
      name: String,
      lastname: String,
      address: String,
      pet: {
        name: String,
        specie: String,
      },
      createdOn: {
        type: Date,
        default: Date.now(),
      },
    });

    const Customer = mongoose.model("Customer", CustomerSchema);

    mongoose.connect(url);

    for (let index = 0; index < 1000; index++) {
      const customer = new Customer({
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        address: faker.address.streetAddress(),
        pet: {
          name: faker.name.fullName(),
          specie: faker.animal.type(),
        },
      });
      await customer.save();
    }

    const query = await Customer.find({ name: /^[Aa]/ });
    console.log(query)

    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

mongoDriverTraining();
//mongooseTraining();
