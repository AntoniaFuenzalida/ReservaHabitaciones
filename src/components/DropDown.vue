<script>
export default{
    props:{
        fecha: String,
        habitacion: String,
        estado:String
    },
    data: () => ({
        Mostrar:false
    }),
    methods: {
        Desplegar(){
            this.Mostrar = !this.Mostrar;
        },
        Borrar(){
            console.log("Eliminar");
        }
    }
}
</script>
<template>
    <div class="DropDown"  v-if="estado==='Lista'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/verde.ico" class="dropdown-icon">
            {{ fecha }}  // habitacion: {{ habitacion }}<button type="button" @click.stop="Borrar()"> <img src="/trash.ico"></button>
        </div>
        <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="dropdown"  v-else-if="estado==='Cancelada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/rojo.ico" class="dropdown-icon">
            {{ fecha }}  // habitacion: {{ habitacion }}<button type="button" @click.stop="Borrar()"> <img src="/trash.ico"></button>
        </div>
        <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="dropdown"  v-else-if="estado==='PorConfirmar'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/amarillo.ico" class="dropdown-icon">
            {{ fecha }}  // habitacion: {{ habitacion }}<button type="button" @click.stop="Borrar()"> <img src="/trash.ico"> </button>
        </div>
        <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="dropdown"  v-else-if="estado==='Utilizada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/azul.ico" class="dropdown-icon">
            {{ fecha }}  // habitacion: {{ habitacion }}<button type="button" @click.stop="Borrar()"> <img src="/trash.ico"></button>
        </div>
        <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>