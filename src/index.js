import { connectDB } from './config/db.js'
import express from 'express'
import { completeUpdate, getById, index, remove, store } from './controllers/productos.controller.js'
import { PORT } from './config/config.js'
import { validateData, validateId } from './middlewares/productos.middleware.js'

const app = express()

connectDB()

app.use(express.json())
app.get('/productos', index)
app.get('/productos/:id', validateId, getById)
app.post('/productos', validateData, store)
app.put('/productos/:id', validateId, validateData, completeUpdate)
app.delete('/productos/:id', validateId, remove)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
