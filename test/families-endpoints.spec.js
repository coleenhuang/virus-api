const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const { makeVirusesArray } = require('./viruses.fixtures.js')

describe('Families Endpoints', function() {
  let db;
  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db.raw('TRUNCATE TABLE viruses CASCADE'))
  afterEach('cleanup', () => db.raw('TRUNCATE TABLE viruses CASCADE'))

  describe('GET /families without family', ()=>{
    context('Given no viruses', () => {
      it('responds with 200 and an empty list', ()=>{
        return supertest(app)
          .get('/families')
          .expect(200, [])
      })
    })
  })
})
