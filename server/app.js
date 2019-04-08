const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Todo {
    id: String!
    item: String!
    date: String!
  }
  type Query {
    todos: [Todo]!
  }
`;

const resolvers = {
  Query: {
    todos: () => {
      return [
        {
          id: '1',
          item: 'Get Milk',
          date: new Date().toDateString()
        },
        {
          id: '2',
          item: 'Go Shopping',
          date: new Date().toDateString()
        },
        {
          id: '3',
          item: 'Get Christmas Presents',
          date: new Date().toDateString()
        }
      ];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server listening on port ${url}`);
});
