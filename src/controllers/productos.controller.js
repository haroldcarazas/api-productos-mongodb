import { sendMessageErrorInterno } from '../helpers.js'
import { Producto } from '../models/Producto.js'

export const index = async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
}

export const getById = async (req, res) => {
  try {
    const { id } = req.params
    const producto = await Producto.findById(id)
    res.json(producto)
  } catch (error) {
    sendMessageErrorInterno(res, error)
  }
}

export const store = async (req, res) => {
  try {
    const { nombre, categoria, precio, vendedor, stock } = req.body
    const producto = await Producto.create({
      nombre,
      categoria,
      precio,
      vendedor,
      stock: stock ?? 0
    })
    res.status(201).json({ message: 'Producto creado', data: producto })
  } catch (error) {
    sendMessageErrorInterno(res, error)
  }
}

export const completeUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, categoria, precio, vendedor, stock, descontinuado, descuento } = req.body

    const producto = await Producto.findById(id)
    if (!producto) return res.status(400).json({ message: 'ID inválido' })

    producto.nombre = nombre
    producto.categoria = categoria
    producto.precio = precio
    producto.vendedor = vendedor
    producto.stock = stock ?? 0
    producto.descontinuado = descontinuado ?? false
    producto.descuento = descuento ?? false

    await producto.save()
    res.json({ message: 'Producto actualizado', data: producto })
  } catch (error) {
    sendMessageErrorInterno(res, error)
  }
}

export const remove = async (req, res) => {
  try {
    const { id } = req.params
    const producto = await Producto.findByIdAndDelete(id)

    res.json({ message: ' Producto eliminado', data: producto })
  } catch (error) {
    sendMessageErrorInterno(res, error)
  }
}
