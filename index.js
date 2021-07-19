const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const authRouter = require('./routes/admin/auth')
const adminProductsRouter = require('./routes/admin/products')
const productsRouter = require('./routes/products')
const cartsRouter = require('./routes/carts')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    keys: ['abcde']
}))
app.use(authRouter, adminProductsRouter, productsRouter, cartsRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})