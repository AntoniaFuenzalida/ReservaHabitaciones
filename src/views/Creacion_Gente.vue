<!DOCTYPE html>
<template>
    <div class="bg-image" id="portada">
        <div id="caja_Adentro">
            <img src="../assets/logohotel.png" id="imagen_Adentro">
            <h3 id="texto_Crear">Creación de Cuenta</h3>
            <form id="formulario_Arriba">

                <input type="text" id="nombre_Completo" name="nombre_Completo" placeholder="Nombre Completo">
                
                <input type="text" id="ingresar_Rut" name="ingresar_Rut" placeholder="Rut">
            </form>
            <form id="formulario_Medio">
                <input type="text" id="ingresar_Contraseña" name="Contraseña" placeholder="Contraseña">
                <input type="text" id="repetir_Contraseña" name="repetir_Contraseña" placeholder="Contraseña">
            </form>
            <form id="formulario_Abajo">
                <input type="text" id="ingreso_Correo_Crear" name="ingreso_Correo" placeholder="Correo electronico">
                <input type="text" id="numero_Telefono" name="numero_Telefono" placeholder="Número de Telefono">
            </form>
            <br>
            <div onclick="location.href='./';" hre id="Registro"><button id="registro_boton"> Registrarse</button></div>
        </div>

    </div>
</template>


<script>
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
    width: 20%;
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