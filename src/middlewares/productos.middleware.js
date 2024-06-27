import { Producto } from '../models/Producto.js'

export const validateData = (req, res, next) => {
  const { nombre, categoria, precio, vendedor } = req.body
  if (!nombre || !categoria || !precio || !vendedor) return res.status(400).json({ message: 'Faltan datos' })

  next()
}

export const validateId = async (req, res, next) => {
  const { id } = req.params
  const producto = await Producto.findById(id)
  if (!producto) return res.status(400).json({ message: 'ID inválido' })

  next()
}
