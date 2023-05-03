

<template>
    
    <div class="bg-image" id="portada">
        <div id="caja_Adentro">
            <img src="../assets/logohotel.png" id="imagen_Adentro" onclick="location.href='./';" >
            <h3 id="texto_Crear">Creación de Cuenta</h3>
            <form id ="Todos" @submit.prevent="agregarDatos">
                <form id="formulario_Arriba">  
                <input type="text" id="nombre_Completo" name="nombre_Completo" placeholder="Nombre Completo" v-model="Nombre_Apellido">
                    
               <input type="text" id="ingresar_Rut" name="ingresar_Rut" placeholder="Rut" v-model="Rut">
                </form>
                <form id="formulario_Medio">
                    <input type="password" id="ingresar_Contraseña" name="Contraseña" placeholder="Contraseña" v-model="Contraseña">
                    <input type="password" id="repetir_Contraseña" name="repetir_Contraseña" placeholder="Repetir Contraseña" >
                </form>
                <form id="formulario_Abajo">
                    <input type="text" id="ingreso_Correo_Crear" name="ingreso_Correo" placeholder="Correo electronico" v-model="Correo_Electronico">
                    <input type="text" id="numero_Telefono" name="numero_Telefono" placeholder="Número de Telefono" v-model="Telefono">
                </form>
                <br>
                <div hre id="Registro"><button type="submit" id="registro_boton"  onclick="location.href='./Iniciar_sesion';"> Registrarse</button></div>
            </form>
            
        </div>
    </div>
</template>


<script>
    import db from '../main'

    export default {
    data() {
        return {
        Correo_Electronico: '',
        Nombre_Apellido: '',
        Rol:'',
        Rut:'',
        Telefono:'',
        Contraseña:''
    }
  },
  methods: {
    agregarDatos() {
      // Agrega los datos a la base de datos
      db.ref('Cuenta').push({
        Correo_Electronico: this.Correo_Electronico,
        Nombre_Apellido: this.Nombre_Apellido,
        Rol:this.rol,
        Rut:this.rut,
        Telefono:this.Telefono,
        Contraseña:this.Contraseña
      })
      
      /*
      
      db.ref('Reservas').push({
        titulo: this.titulo,
        descripcion: this.descripcion
      })

      db.ref('Servicios Adicionales').push({
        titulo: this.titulo,
        descripcion: this.descripcion
      })

      

      // Limpia los campos del formulario
      this.titulo = ''
      this.descripcion = ''
      */
    }
  }
}
</script>

<style>
#portada {
    background-image: url('../assets/Fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    max-width: 100%;
    height: 100vh;
    opacity: 0.9;
    justify-content: center;
    align-items: center;
    display: flex;
}

#caja_Adentro {
    height: 60%;
    width: 25%;
    background-color: white;
    opacity: 75%;
}

#imagen_Adentro {

    display: block;
    margin: 0%auto;
}

#ingreso_Correo_Crear {
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 35%;
    background-color: white;
    color: rgb(0, 0, 0);
}

#repetir_Contraseña {
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 35%;
    background-color: white;
    color: rgb(0, 0, 0);
}
#ingresar_Contraseña {
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 35%;
    background-color: white;
    color: rgb(0, 0, 0);
}
#nombre_Completo{
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 35%;
    background-color: white;
    color: rgb(0, 0, 0);
}
#ingresar_Rut{
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 35%;
    background-color: white;
    color: rgb(0, 0, 0);
    
}
#numero_Telefono{
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 35%;
    background-color: white;
    color: rgb(0, 0, 0);
}

#formulario_Arriba {
    width: 100%;
    max-width: 100% auto;
    margin: 2% auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 2%;
}
#formulario_Medio {
    width: 100%;
    max-width: 100% auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 2%;
}
#formulario_Abajo {
    width: 100%;
    max-width: 100% auto;
    display: flex;
    margin: 2% auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 2%;
}

#registro_boton {
    width: 25%;
    height: 8%;
    background-color: #5E95E7;
    border-radius: 0%;
    border: 1px solid #000000;
    color: black;
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
}

#Registro {
    display: flex;
    justify-content: center;
}

#texto_Crear {
    display: flex;
    justify-content: center;
    text-decoration: underline black;
}

</style>