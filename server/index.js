const express = require('express')
const colors = require('colors')
require('dotenv').config()
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const {set} = require('mongoose')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
set("strictQuery",false)
connectDB()

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))