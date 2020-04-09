const express = require('express')
// Create the server
const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Running On: ${PORT}`)
})