const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://news:123abc@cluster0.scte0by.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    const categoriesCollection = await client
      .db("newsPortal")
      .collection("categories");
    if (req.method === "GET") {
      const categories = await categoriesCollection.find().toArray();
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Successfully retrieved all categories",
        data: categories,
      });
    }

    if (req.method === "POST") {
      await categoriesCollection.insertMany(req.body);
      res.send("ok");
    }
  } catch (error) {
    // console.log(error.message);
  }
}

export default run;
