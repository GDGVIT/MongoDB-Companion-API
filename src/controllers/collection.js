const { MongoClient } = require('mongodb');
const mongodbUri = 'mongodb://test:test123@ds145563.mlab.com:45563/moneyledger';

module.exports.getCollection = async (database, collectionName) => {

    try {
        return {
            name: await database.collection(collectionName).collectionName
        };

    } catch(e) {
        console.error(e);
        return `Error: displaying collections`;
    }
    
}

module.exports.listCollections = async (database) => {

    try {
        const collections = await database.collections();

        const collectionNames = collections.map(collection => {
            return {
                name: collection.collectionName
            }
        });

        return collectionNames;

    } catch(e) {
        console.error(e);
        return `Error: displaying collections`;
    }
    
}

module.exports.createCollection = async (database, collectionName) => {

    try {
        await database.createCollection(collectionName);
        console.log(`${collectionName} collection created`);
        return {
            name: await database.collection(collectionName).collectionName
        };

    } catch(e) {
        console.error(e)
        return `Error: creating ${collectionName} collection`;
    }
}