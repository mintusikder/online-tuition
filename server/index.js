const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
//onlinetuition
//XsyFEpuTGyzSS9nW
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rmmjiwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const tuitionCollection = client.db("tuitionDb").collection("tuitions");
    const userCollection = client.db("tuitionDb").collection("users");

    app.get("/tuitions", async (req, res) => {
      const cursor = tuitionCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/tuitions", async (req, res) => {
      const newUser = req.body;
      const result = await tuitionCollection.insertOne(newUser);
      res.send(result);
    });

    //single data
    app.get("/tuitions/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tuitionCollection.findOne(query);
      res.send(result);
    });
    app.put("/tuitions/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateTuition = req.body;
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateTuition,
        },
      };
      const result = await tuitionCollection.updateOne(
        query,
        updateDoc,
        options
      );
      res.send(result);
    });
    app.delete("/tuitions/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tuitionCollection.deleteOne(query);
      res.send(result);
    });

    //user related api
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const userProfile = req.body;
      const result = await userCollection.insertOne(userProfile);
      res.send(result);
      console.log(userProfile);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("online tuition is running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
