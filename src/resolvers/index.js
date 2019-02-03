const { listCollections, createCollection } = require('../controllers/connection');

module.exports = {
    Query: {
        listCollections: async(_, {}, context) => {
            return await listCollections();
        },
    },
    Mutation: {
        createCollection: async(_, {collectionName}, context) => {
            return await createCollection(collectionName);
        },
    }
}