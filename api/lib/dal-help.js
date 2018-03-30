require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const db = new PouchDB(`${process.env.COUCH_URL}`)
const { pluck } = require('ramda')
const allDocs = options => {
  return db.allDocs(options).then(result => pluck('doc', result.rows))
}
const getDoc = id => db.get(id)
const addDoc = doc => db.put(doc)
module.exports = {
  allDocs,
  getDoc,
  addDoc
}
