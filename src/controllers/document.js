const { MongoClient } = require('mongodb');
const mongodbUri = 'mongodb://test:test123@ds145563.mlab.com:45563/moneyledger';

module.exports.listDocuments = async (collectionName) => {

    try {

        const client = await MongoClient.connect(mongodbUri,{ useNewUrlParser: true });
        const dbase = client.db("moneyledger");

        const documentCursor = dbase.collection(collectionName).find();

        return JSON.stringify(await documentCursor.toArray());

    } catch(e) {
        console.error(e);
        return `Error: displaying collections`;
    }
    
}