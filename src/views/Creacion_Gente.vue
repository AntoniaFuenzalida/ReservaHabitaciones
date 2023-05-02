<template>
    <div class="bg-image" id="portada">
        <div id="caja_Adentro">
            <img src="../assets/logohotel.png" id="imagen_Adentro" onclick="location.href='./';" >
            <h7 id="texto_Crear">Creación de Cuenta</h7>
            <form id="Todos" @submit.prevent="crear_Cuenta" >
                <form id="formulario_Arriba">

                    <input type="text" id="nombre_Completo" name="nombre_Completo" placeholder="Nombre Completo" v-model="nombre_completo">
                    
                    <input type="text" id="ingresar_Rut" name="ingresar_Rut" placeholder="Rut" v-model="rut">
                </form>
                <form id="formulario_Medio">
                    <input type="password" id="ingresar_Contraseña" name="Contraseña" placeholder="Contraseña" v-model="contraseña">
                    <input type="password" id="repetir_Contraseña" name="repetir_Contraseña" placeholder="Repetir Contraseña">
                </form>
                <form id="formulario_Abajo">
                    <input type="text" id="ingreso_Correo_Crear" name="ingreso_Correo" placeholder="Correo electronico" v-model="correo">
                    <input type="text" id="numero_Telefono" name="numero_Telefono" placeholder="Número de Telefono" v-model="numero">
                </form>
                <br>
                <div hre id="Registro"><button type="submit" id="registro_boton"> Registrarse</button></div>
            </form>
        </div>

    </div>
    <div class="row">
        <thead>
            <tr>
                <th>Nombre </th>
                <th>Rut </th>
                <th>Contraseña</th>
                <th>Correo</th>
                <th>Numero</th>
            </tr>
        </thead>
        <body>
            <tbody>
                <tr v-for="usuario in usuarios" v-bind:key="usuario">
                    <td>{{usuario.nombre_completo}}</td>
                    <td>{{usuario.rut}}</td>
                    <td>{{usuario.contraseña}}</td>
                    <td>{{usuario.correo}}</td>
                    <td>{{usuario.numero}}</td>
                    <td> <a href="#!"><i class="material-icons">create</i></a></td>
                    <td> <a href="#!"><i class="material-icons">delete</i></a></td>
                </tr>
            </tbody>
        </body>
    </div>
</template>


<script>
import M from 'materialize-css'
export default {
    name: 'Creacion_Gente',
    data() {
        return {
            nombre_completo: '',
            rut: '',
            contraseña: '',
            correo: '',
            numero: '',
            usuarios:[],
            select_instances: []
        }
    },
    mounted()
    {
        var elems = document.querySelectorAll('select');
        this.select_instances = M.FormSelect.init(elems, null);
    },
    methods: {
        crear_Cuenta()
        {
            var data = {
                nombre_completo: this.nombre_completo,
                rut: this.rut,
                contraseña: this.contraseña,
                correo: this.correo,
                numero: this.numero,

            };
            this.usuarios.push(data);
            this.nombre_completo= '';
            this.rut= '';
            this.contraseña= '';
            this.correo= '';
            this.numero= '';
        }
    },
};
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