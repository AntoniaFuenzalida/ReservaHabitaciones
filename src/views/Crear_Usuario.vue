<template>
  <div class="bg-image" id="pagina">
    <div id="caja_Adentro">
      <img src="../assets/logohotel.png"  id="imagen_Adentro">
      <br>
      <br>
      <form id="formulario" @submit.prevent="validar_Datos">
        <label for="Email"> </label>
        <input type="text" id="ingreso_Correo" name="ingreso_Correo" placeholder="Correo electronico" v-model="ingreso_Correo">
        <label for="contraseña"> </label>
        <input type="password" id="ingreso_Contraseña" name="ingreso_Contraseña" placeholder="Contraseña" v-model="ingreso_Contraseña">
      </form>
      <br>
      <div id="div_Botón" ><button id="inicio_Sesión" @click="validar_Datos" type="submit" class="btn btn-dark mt-auto"> Iniciar sesión</button></div>
      <br>
      <a id="olvidaste" href='./menuAdmin'>¿Olvidaste tu contraseña?</a>
      <br>
      <div id="div_Botón"><button id="inicio_Sesión" onclick="location.href='./Creacion_Gente';" class="btn btn-dark mt-auto"> Crear cuenta</button></div>
     

     
      


    </div>

  </div>
</template>


<script>
</script>
  
<style>
#pagina {
  background-image:url('../assets/Fondo.jpg');
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
  width: 20%;
  background-color: white;
  opacity: 75%;
}

#imagen_Adentro {
  
  display: block;
  margin: 0%auto;
}

#ingreso_Correo {
  border: 1px solid #000000;
  border-radius: 0%;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  width: 75%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: white;
  color: rgb(0, 0, 0);
}

#ingreso_Contraseña {
  border: 1px solid #000000;
  border-radius: 0%;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  padding: 10px;
  width: 75%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: black;
  background-color: white;
  color: rgb(0, 0, 0);
}

#formulario {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



#div_Botón {
  display: flex;
  justify-content: center;
}

#olvidaste {
  display: flex;
  justify-content: center;
}

#crear {
  display: flex;
  justify-content: center;
  text-decoration: underline black;
}</style>