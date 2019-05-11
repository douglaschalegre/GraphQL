var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    array: [String]
    float: Float
    int: Int
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },

  array: () => {
      return ['this','is','a','test','!'];
  },

  float: () => {
    return false;
  },

  int: () => {
    return 20;
},

};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello },', root).then((response) => {
  console.log(response);
});

graphql(schema, '{ array }', root).then((response) => {
    console.log(response);
});

graphql(schema, '{ float },', root).then((response) => {
    console.log(response);
});

graphql(schema, '{ int },', root).then((response) => {
    console.log(response);
});