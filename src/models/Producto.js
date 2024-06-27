import { Schema, model } from 'mongoose'

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  vendedor: {
    type: String,
    required: true
  },
  descuento: {
    type: Boolean,
    default: false
  },
  descontinuado: {
    type: Boolean,
    default: false
  }
})

export const Producto = model('Producto', ProductoSchema)
