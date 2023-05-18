
<template>
    <div class="bg-image" id="portada">
        <div id="caja_Adentro_Crea">
            <img src="../assets/logohotel.png" id="imagen_Adentro" onclick="location.href='./';" >
            <h3 id="texto_Crear">Creación de Cuenta</h3>
            <p v-if="errors.length">
            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
            <ul>
            <li v-for="error in errors" v-bind:key="error.id" >{{ error }}</li>
            </ul>
            </p>
            <form id ="Todos" @submit.prevent="guardarDatos">
                <form id="formulario_Arriba">  
                <input type="text" id="nombre_Completo" name="nombre_Completo" placeholder="Nombre Completo" v-model="Nombre_Apellido">
                    
               <input type="text" id="ingresar_Rut" name="ingresar_Rut" placeholder="Rut (Sin digito verificador)" v-model="Rut">
                </form>
                <form id="formulario_Medio">
                    <input type="password" id="ingresar_Contraseña" name="Contraseña" placeholder="Contraseña" v-model="Contraseña">
                    <input type="password" id="repetir_Contraseña" name="repetir_Contraseña" placeholder="Repetir Contraseña" v-model="repetir_Contra">
                </form>
                <form id="formulario_Abajo">
                    <input type="text" id="ingreso_Correo_Crear" name="ingreso_Correo" placeholder="Correo electronico" v-model="Correo_Electronico">
                    <input type="text" id="numero_Telefono" name="numero_Telefono" placeholder="Número de Telefono" v-model="Telefono">
                </form>
                <br>
                <div  hre id="Registro"><button type="submit" id="registro_boton"  class="btn btn-dark mt-auto" @click="guardarDatos" > Registrarse</button></div>
            </form>
        </div>
    </div>
</template>


<script>
import app from '../main'
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default {
    name: 'guardarDatos',

    data() {
        return {
            errors: [],
            Correo_Electronico: '',
            Nombre_Apellido: '',
            Rol:'',
            Rut:'',
            Telefono:'',
            Contraseña:''
        }
    },

    methods: {
        async guardarDatos(e) {
            const db = getFirestore(app);
            await setDoc(doc(db, "Cuentas", this.Rut), {
            Nombre_Apellido: this.Nombre_Apellido,
            Correo_Electronico: this.Correo_Electronico,
            Contraseña: this.Contraseña,
            Telefono: this.Telefono,
            Rol: 'Predeterminado',
            Rut:this.Rut
        })
        location.href='./Iniciar_sesion';
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
    width: 45%;
    background-color: white;
    color: rgb(0, 0, 0);
}

#repetir_Contraseña {
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 45%;
    background-color: white;
    color: rgb(0, 0, 0);
}
#ingresar_Contraseña {
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 45%;
    background-color: white;
    color: rgb(0, 0, 0);
}
#nombre_Completo{
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 45%;
    background-color: white;
    color: rgb(0, 0, 0);
}
#ingresar_Rut{
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 45%;
    background-color: white;
    color: rgb(0, 0, 0);
    
}
#numero_Telefono{
    border: 1px solid #000000;
    border-radius: 0%;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    width: 45%;
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



#Registro {
    display: flex;
    justify-content: center;
}

#texto_Crear {
    display: flex;
    justify-content: center;
    text-decoration: underline black;
    font-size: 16px;
    margin: 0 auto;
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