const AWS = require("aws-sdk");
const POSTS_TABLE = process.env.POSTS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

/*
  Example:
  curl --location --request GET 'https://pj8vd70mli.execute-api.us-east-1.amazonaws.com/dev/posts'
*/

module.exports.getPosts = (event, context, callback) => {
  const params = {
    TableName: POSTS_TABLE,
    Select: "ALL_ATTRIBUTES",
  };

  dynamoDbClient.scan(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };

    callback(null, response);
  });
};
