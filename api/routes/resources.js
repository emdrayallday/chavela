const { getResources, getResource } = require('../dal')

module.exports = app => {
  app.get('/resources', (req, res) => {
    getResources({
      include_docs: true,
      startkey: 'resource_',
      endkey: 'resource_\ufff0'
    }).then(result => res.send(result))
  })
  app.get('/resources/:id', (req, res) => {
    getResource(req.params.id).then(result => res.send(result))
  })
}
