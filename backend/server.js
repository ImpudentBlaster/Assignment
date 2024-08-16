const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 5000
const userRoutes = require('./Routes/user-routes')
const eventRoutes = require('./Routes/event-routes')

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,
  };
  app.use(cors(corsOptions));

app.use(express.json())
app.use('/' , userRoutes)
app.use('/' , eventRoutes)

app.get('/', (req, res) => {
    res.send("home")
})
mongoose.connect('mongodb+srv://sagarsharmatechies:sagarsharmatechies@democluster.dlxyrkz.mongodb.net/Assignment')
    .then(
        app.listen(port, (req, res) => {
            console.log('server is live at http://localhost:5000')
        })
    ).catch(err => console.log(err))
