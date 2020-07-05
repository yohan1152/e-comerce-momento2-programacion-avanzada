import MongoClient from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('tienda')
        return db;
    } catch(e) {
        console.log(e);
    }
    
}


