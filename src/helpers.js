export const sendMessageErrorInterno = (res, error) => {
  res.status(500).json({ message: 'Error interno', detail: error.message })
}
