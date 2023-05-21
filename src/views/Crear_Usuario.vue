<template>
  <div class="bg-image" id="pagina_ini">
    <div id="caja_Adentro">
      <div id="div_BotonRegreso">
      <button id="regreso_Boton" @click="$router.go(-1)"> <img id="imagen_regreso_Boton" src="../icons/atras.jpg" /></button>
      </div>
      <img src="../assets/logohotel.png"  id="imagen_Adentro">  
      <br>
      <br>
      <p v-if="errors.length">
            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
            <ul>
            <li v-for="error in errors" v-bind:key="error.id" >{{ error }}</li>
            </ul>
            </p>      
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
  import app from '../main'
  import {getFirestore, collection, where,query, getDocs} from "firebase/firestore";
  export default {
  name: 'validar_Datos',
  data() {
    return {
      errors: [],
      ingreso_Correo: '',
      ingreso_Contraseña: '',
    }
  },
  methods: {
    async validar_Datos() {
      const db = getFirestore(app); //Se crea la instancia de FireBase
      const cuentasRef = collection(db, 'Cuentas'); //Se accede a la colección de Cuentas con la instancia de la base de datos y se crea una instancia de eso
      this.errors = [];
      if (this.validateEmail(this.ingreso_Correo)) {
        const q = query(cuentasRef, where("Correo_Electronico", "==", this.ingreso_Correo), where("Contraseña", "==", this.ingreso_Contraseña)); //Se crea la petición a la base de datos
        //Y se busca dentro de toda la información una persona que tenga el correo ingresado y la contraseña
        const querySnapshot = await getDocs(q); //La petición se solicita y se crea una "petición general"
        if (querySnapshot.empty) { //Se verifica que la petición retorne algo o no, si la petición esta vacia, significa que no se encontró un login valido 
          this.errors.push("Datos invalidos");
        } else { //Si no está vacia se ve la base de datos y solicita toda la información del usuario
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              console.log("Rol:" + doc.data)
              if(doc.data.name("Rol") === 'Predeterminado'){
                console.log(doc.id, "=>", doc.data());//Debug
                setCookie('usuarioRegistrado',this.ingreso_Correo,1)
                console.log(getCookie('usuarioRegistrado'));
                //location.href = './menu_Usuario'; //Se lleva al menú usuario 
              }
              console.log("Es acmin");
              setCookie('usuarioRegistrado',this.ingreso_Correo,1)
              console.log(getCookie('usuarioRegistrado'));
              //location.href = './menu_Usuario'; //Se lleva al menú usuario 
              //AUN NO SE IMPLEMENTA QUE EL INICIO DE SESIÓN PERDURE ENTRE CAMBIOS DE PAGINA
            }
          });
        }
      }

    
      
    },
       async validateEmail(email) {
      const res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return res.test(String(email).toLowerCase());
    },


        },
  }

  

function setCookie(nombre, valor, expiracion) {
      var fechaExpiracion = new Date();
      fechaExpiracion.setTime(fechaExpiracion.getTime() + expiracion * 24 * 60 * 60 * 1000);
      var cookie = nombre + '=' + encodeURIComponent(valor) + '; expires=' + fechaExpiracion.toUTCString() + '; path=/';
     document.cookie = cookie;
    }
  
function getCookie(nombre) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(nombre + '=')) {
      return decodeURIComponent(cookie.substring(nombre.length + 1));
    }
  }
  return null;
}
    
    

</script>
  
<style>
#pagina_ini {
  background-image:url('../assets/Fondo.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  height: 100vh;
  opacity: 0.9;
  justify-content: center;
  align-items: center;
  display: flex;
  margin:0px;
  position: absolute;
}

#caja_Adentro {
  height: 100%;
  width: 20%;
  background-color: white;
  opacity: 75%;
  position: absolute;
}

#imagen_Adentro {
  height: 25%;
  width: 100%;
  
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
}
#regreso_Boton{
  width: 15%;
  height: 15%;
}
#imagen_regreso_Boton{
  width: 100%;
  height: 100%;
}
</style>