const express = require('express')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000



app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

