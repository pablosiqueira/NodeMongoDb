const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://pablo:R5zA29LqqGhAM2Hm@cluster0.1gr6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected')
    _db = client.db()
    callback(client)
  })
  .catch(err => {
    console.log(err)
    throw err
  })
}

const getDb = () => {
  if (_db){
    return _db
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb