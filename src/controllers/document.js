const { MongoClient } = require('mongodb');
const mongodbUri = 'mongodb://test:test123@ds145563.mlab.com:45563/moneyledger';

module.exports.listDocuments = async (collectionName) => {

    try {

        const client = await MongoClient.connect(mongodbUri,{ useNewUrlParser: true });
        const dbase = client.db("moneyledger");

        const documentCursor = dbase.collection(collectionName).find();

        const documentArray = await documentCursor.toArray();

        return documentArray.map((document) => {
            return {
                data: JSON.stringify(document)
            };
        });

    } catch(e) {
        console.error(e);
        return `Error: displaying collections`;
    }
    
}