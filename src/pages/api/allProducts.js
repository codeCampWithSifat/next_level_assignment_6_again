const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://NEXT_LEVEL_ASSIGNMENT_6:6ltf6cF7muoWbg4Z@cluster0.qulzvkz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run1(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const allProducts = client
      .db("NEXT_LEVEL_ASSIGNMENT_6")
      .collection("allProducts");

    if (req.method === "GET") {
      const news = await allProducts.find({}).toArray();
      res.send(news);
    }
  } finally {
  }
}
export default run1;
