import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

// Parse application/json content.
app.use(express.json());
// Parse application/x-www-form-urlencoded content.
app.use(express.urlencoded({ extended: false }));

let db;

async function connectToDB() {
  const uri = 'mongodb://localhost:27017/';

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  db = client.db('test');
}

// Get all articles.
app.get('/api/v1/articles', async (req, res) => {
  const articles = await db.collection('articles').find({});
  res.json(await articles.toArray());
});

// Get a single article, by name.
app.get('/api/v1/articles/:name', async (req, res) => {
  const { name } = req.params;
  const article = await db.collection('articles').findOne({ name });
  res.json(await article);
});

// Update the upvotes of an article, by name.
app.post('/api/v1/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  const updatedArticle = await db
    .collection('articles')
    .findOneAndUpdate(
      { name },
      { $inc: { upvotes: 1 } },
      { returnDocument: 'after' }
    );
  res.json(await updatedArticle);
});

// Update the comments of an article, by name.
app.post('/api/v1/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const updatedArticle = await db
    .collection('articles')
    .findOneAndUpdate(
      { name },
      { $push: { comments: { postedBy, text } } },
      { returnDocument: 'after' }
    );

  res.json(await updatedArticle);
});

// Services to start.
async function start() {
  await connectToDB();
  app.listen(8000, function () {
    console.log('Server is listening on port 8000');
  });
}

// Start the services.
start();
