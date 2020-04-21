const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const { makeFamiliesArray } = require('./families.baltimore.js')

describe.only('Classification Endpoints', function() {
  let db;
  const validTypes = ['I','II','III','IV','V','VI','VII'];
  before('make knex instance', ()=>{
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db('classification').truncate())
  afterEach('cleanup', () => db('classification').truncate())

  describe('GET /family with valid type', () => {
    context(`Given no families`, () => {
     it(`responds with 200 and an empty list`, () => {
       return supertest(app)
         .get('/baltimore?type=I')
         .expect(200, [])
     })
   })
    context('Given that there are entries in classification table', () =>{
      const testFamilies = makeFamiliesArray()
      beforeEach('insert entries', () => {
        return db
          .into('classification')
          .insert(testFamilies)
      })
      it('responds with 200 and correct entries(match exists)', ()=>{
        let expectedFamilies = testFamilies.filter(family=> family.virus_type === 'I');
        return supertest(app)
          .get('/baltimore?type=I')
          .expect(200, expectedFamilies)
      })
      it(`responds with 200 and an empty list(match doesn't exist)`, () => {
        return supertest(app)
          .get('/baltimore?type=VI')
          .expect(200, [])
      })
    })
  })

  describe(`GET /family with no type`, () =>{
    context(`Given no families`, () => {
     it(`responds with 400`, () => {
       return supertest(app)
         .get('/baltimore')
         .expect(400)
     })
    })
    context(`Given there are entries in classification table`, ()=>{
      const testFamilies = makeFamiliesArray()
      beforeEach('insert entries', () => {
        return db
          .into('classification')
          .insert(testFamilies)
      })
      it(`responds with 400`, () => {
        return supertest(app)
          .get('/baltimore')
          .expect(400)
      })
    })
  })
  describe(`GET /family with invalid type`, () =>{
    context(`Given no families`, () => {
     it(`responds with 400`, () => {
       return supertest(app)
         .get('/baltimore?type=X')
         .expect(400)
     })
    })
    context(`Given there are entries in classification table`, ()=>{
      const testFamilies = makeFamiliesArray()
      beforeEach('insert entries', () => {
        return db
          .into('classification')
          .insert(testFamilies)
      })
      it(`responds with 400`, () => {
        return supertest(app)
          .get('/baltimore?type=X')
          .expect(400)
      })
    })
  })
})
