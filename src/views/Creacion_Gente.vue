
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
                    
               <input type="text" id="ingresar_Rut" name="ingresar_Rut" placeholder="Rut (sin puntos con guión)" v-model="Rut">
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
import { collection, doc, getFirestore, setDoc, where,query, getDocs } from "firebase/firestore";

export default {
    name: 'guardarDatos',

    data() {
        return {
            errors: [],
            Correo_Electronico: '',
            Nombre_Apellido: '',
            Rol: '',
            Rut: '',
            Telefono: '',
            Contraseña: '',
            repetir_Contra: ''
        }
    },

    methods: {
        async guardarDatos(e) {
            const db = getFirestore(app);
            const coleccion = collection(db,'Cuentas');
            let correoExiste = false;
            let rutExiste = false;

            const correoQuery = query(coleccion, where('Correo_Electronico', '==' , this.Correo_Electronico));
            const correoSnap = await getDocs(correoQuery);
            const rutQuery = query(coleccion, where('Rut', '==' , this.Rut));
            const rutSnap = await getDocs(rutQuery);

            correoSnap.forEach((doc) => {
                correoExiste = true;
            });

            rutSnap.forEach((doc) => {
                rutExiste = true;
            });
            if(!correoExiste && !rutExiste){
                if (this.checkForm(e)) {
                await setDoc(doc(db, "Cuentas", this.Rut), {
                    Nombre_Apellido: this.Nombre_Apellido,
                    Correo_Electronico: this.Correo_Electronico,
                    Contraseña: this.Contraseña,
                    Rol: 'Predeterminado',
                    Rut: Number(this.Rut),
                    Telefono: Number(this.Telefono),
                })
                location.href = './Iniciar_sesion';
                } else {
                    console.log('Datos no validos')
                }
            }else{
                if(correoExiste){
                    console.log('El correo ya esta en uso');
                }
                if(rutExiste){
                    console.log('El rut ya esta en uso');
                }
                
            }
            
        },

        async validateEmail(email) {
            const res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;  
            return res.test(String(email).toLowerCase())
        },

        async validateRut(rut){
            const rutValidate = /^[0-9]+-[0-9kK]{1}$/;
            if(rutValidate.test(String(rut).toLowerCase())){
                return true
            }else{
                return false
            }
            
        },

        async validateNum(num){
            const numValidate = /^(\+?56)?(\s?)(0?9)(\s?)[987654321]\d{7}$/;
            return numValidate.test(String(num))
        },

        checkForm: function (e) {
            console.log("ENTRO GENTE");
            if (this.Contraseña === this.repetir_Contra && this.validateEmail(this.Correo_Electronico)
                && this.validateRut(this.Rut) && this.validateNum(this.Telefono) && this.Rut.trim() != '' && this.Nombre_Apellido.trim() != '' && this.Contraseña.trim() != '' && this.Telefono.trim() != ''
                && this.repetir_Contra.trim() != '' && this.Nombre_Apellido.trim() != '' && this.Rut.length === 10 && this.Telefono.length <= 11 /*&& Number(this.Rut) && Number(this.Telefono)*/) 
                { 
                return true;
            }

            this.errors = [];
            if (this.Rut.trim() == '') {
                this.errors.push('El Rut es obligatorio ');
            }else{
                console.log(!this.validateRut(this.Rut)+ ' uwu')
                if (!this.validateRut(this.Rut) || String(this.Rut).length != 10) {
                    this.errors.push('Rut invalido ');
                    console.log('enter');
                }
            }
            if (this.Nombre_Apellido.trim() == '') {
                this.errors.push('Nombre y Apellido es obligatorio ');
            }
            if (this.Correo_Electronico.trim() == '') {
                this.errors.push('Correo electronico es obligatorio ');
            }else{
                if(!this.validateEmail(this.Correo_Electronico)){
                    this.errors.push('Correo invalido ');
                }
            }
            if (this.Contraseña.trim() == '') {
                this.errors.push('La Contraseña es obligatoria ');
            }
            if (this.Telefono.trim() == '') {
                this.errors.push('El número de telefono es obligatorio ');
            }else{
                if (!this.validateNum(this.Telefono) || String(this.Telefono).length != 11){
                    this.errors.push('Numero de teléfono invalido ');
            }
            }
            if (this.repetir_Contra.trim() == '') {
                this.errors.push('Repetir contraseña es obligatorio ');
            }
            if (this.Contraseña != this.repetir_Contra) {
                this.errors.push('Las contraseñas no coinciden ');
            }

            
            
            /*
            if (this.Telefono.length != 8) {
                this.errors.push('El número de telefono tiene que ser de 8 digitos ');
            }
            if (!Number(this.Telefono)) {
                this.errors.push('El telefono tiene que ser un número ');
            }*/
            e.preventDefault();
            console.log("Errores: "+ this.errors)
            return false;

        }

    },
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

#caja_Adentro_Crea {
    height: 70%;
    width: 40%;
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