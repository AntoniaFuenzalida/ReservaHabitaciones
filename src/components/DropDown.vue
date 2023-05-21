<script>
export default {
    props: {
        reserva: Object,
    },
    data: () => ({
        Mostrar: false
    }),
    methods: {
        Desplegar() {
            this.Mostrar = !this.Mostrar;
        },
        Borrar() {
            console.log("Eliminar");
        }
    }
}
</script>
<template>
    <div class="DropDown" v-if="reserva.estadoReserva === 'Lista'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/verde.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click.stop="Borrar()">
                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
        <!--         <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Cancelada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/rojo.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click.stop="Borrar()">
                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
        <!--         <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
    <div class="dropdown" v-else-if="reserva.estadoReserva === 'pendiente'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/amarillo.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click.stop="Borrar()">
                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
        <!--         <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Utilizada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/azul.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click.stop="Borrar()">
                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
        <!--         <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        Falta agregar los datos de la reserva aqui
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
</template>
<style>
.trash-container {
    display: inline-block;
    margin-left: auto;
    padding-left: 2%;
}

.trash-icon {
    vertical-align: middle;
}
</style>