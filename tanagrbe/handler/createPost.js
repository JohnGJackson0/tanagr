const AWS = require("aws-sdk");

const POSTS_TABLE = process.env.POSTS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const { v1: uuidv1 } = require("uuid");

/*
  Example: 

  curl --location --request POST 'https://pj8vd70mli.execute-api.us-east-1.amazonaws.com/dev/posts' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "post": "Example of a post"
  }'
*/

module.exports.createPost = async (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data?.post !== "string") {
    console.error("Validation failed");
    return;
  }

  const params = {
    TableName: POSTS_TABLE,
    Item: {
      post: data?.post,
      id: uuidv1(),
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
  } catch (e) {
    callback(new Error("Database Error", params));
  }

  const response = {
    statusCode: 200,
    body: "Success",
  };

  callback(null, response);
};
