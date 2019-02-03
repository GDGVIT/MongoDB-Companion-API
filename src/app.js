if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const context = async ({req}) => {


    
    return {};
};

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context,
});

server
.listen({ port: process.env.PORT })
.then(({ url }) => console.log(`MongoDB Companion GraphQL API running at ${url}`));