import db from './main'

// Lee los datos de la base de datos
db.ref('Cuenta').on('value', (snapshot) => {
  const data = snapshot.val()
  console.log(data)
})

db.ref('Reservas').on('value', (snapshot) => {
  const data = snapshot.val()
  console.log(data)
})

db.ref('Servicios Adicionales').on('value', (snapshot) => {
  const data = snapshot.val()
  console.log(data)
})

// Escribe datos en la base de datos
db.ref('Cuenta').push({
  Correo: 'Producto 1',
  Nombre_Apellido: 10
})