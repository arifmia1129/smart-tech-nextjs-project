const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const productsCollection = await client
      .db("newsPortal")
      .collection("products");

    if (req.method === "GET") {
      if (req.query.id) {
        // Retrieve a product by _id
        const product = await productsCollection.findOne({
          _id: new ObjectId(req.query.id),
        });

        if (product) {
          res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Successfully retrieved product",
            data: product,
          });
        } else {
          res.status(404).json({
            success: false,
            statusCode: 404,
            message: "Product not found",
          });
        }
      } else {
        const products = await productsCollection.find().toArray();
        res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Successfully retrieved all products",
          data: products,
        });
      }
    }

    if (req.method === "POST") {
      console.log("hello2");
      await productsCollection.insertMany(req.body);
      res.send("ok");
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default run;
