if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const { MongoClient } = require('mongodb');

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const context = async ({req}) => {

    try {
        const mongodbUri = (req.headers && req.headers['mongodburi']) || '';
        const mongodbDatabase = (req.headers && req.headers['database']) || '';

        const mongodbUriWithDatabase = `${mongodbUri}/${mongodbDatabase}`;
    
        const client = await MongoClient.connect(mongodbUriWithDatabase,{ useNewUrlParser: true });
        const database = client.db(mongodbDatabase);

        return {database};

    } catch (error) {
        return {};
    }

};

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context,
});

server
.listen({ port: process.env.PORT })
.then(({ url }) => console.log(`MongoDB Companion GraphQL API running at ${url}`));