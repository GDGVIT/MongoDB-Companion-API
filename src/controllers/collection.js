const { MongoClient } = require('mongodb');
const mongodbUri = 'mongodb://test:test123@ds145563.mlab.com:45563/moneyledger';

module.exports.listCollections = async () => {

    try {

        const client = await MongoClient.connect(mongodbUri,{ useNewUrlParser: true });
        const dbase = client.db("moneyledger");
        const collections = await dbase.collections();

        const collectionNames = collections.map(collection => {
            return {
                name: collection.collectionName
            }
        })

        console.log(collectionNames);
        return collectionNames;

    } catch(e) {
        console.error(e);
        return `Error: displaying collections`;
    }
    
}

module.exports.createCollection = async (collectionName) => {

    try {

        const client = await MongoClient.connect(mongodbUri,{ useNewUrlParser: true });
        const dbase = client.db("moneyledger");
        await dbase.createCollection(collectionName);

        console.log(`${collectionName} collection created`);
        return `${collectionName} collection created`;

    } catch(e) {
        console.error(e)
        return `Error: creating ${collectionName} collection`;
    }
}