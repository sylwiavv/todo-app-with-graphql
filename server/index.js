const express = require('express');
const app = express();
const PORT = 9090;
const { graphqlHTTP } = require('express-graphql');
const schema = require("./Schemas")
const cors = require('cors')

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log('server running');
})
