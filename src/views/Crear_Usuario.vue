<!DOCTYPE html>
<template>
  <div class="bg-image" id="pagina">
    <div id="caja_Adentro">
      <img src="../assets/logohotel.png"  id="imagen_Adentro" onclick="location.href='./';" >
      <br>
      <br>
      <form id="formulario">
        <label for="Email"> </label>
        <input type="text" id="ingreso_Correo" name="ingreso_Correo" placeholder="Correo electronico">
        <label for="contraseña"> </label>
        <input type="text" id="ingreso_Contraseña" name="ingreso_Contraseña" placeholder="Contraseña">
      </form>
      <br>
      <div id="div_Botón" onclick="location.href='./menu_Usuario';" ><button id="inicio_Sesión"> Iniciar sesión</button></div>

      <p id="olvidaste">¿Olvidaste tu contraseña?</p>
      <a id="crear" href="./Creacion_Gente"> Crear Cuenta </a>


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

#inicio_Sesión {
  width: 45%;
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