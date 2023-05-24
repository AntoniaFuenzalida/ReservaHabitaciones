<script setup>
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../main.js";
import { query, where, updateDoc } from "firebase/firestore";
</script>

<script>
export default {
    props: {
        reserva: Object,
    },
    data: () => ({
        Mostrar: false,
        selecionada: '',
        validarBorrar: false
    }),
    methods: {
        Desplegar() {
            this.Mostrar = !this.Mostrar;
        },
        async Borrar() {
            console.log(this.selecionada);

            const querySnapshot = await getDocs(query(collection(db, "Reservas"), where("idReserva", "==", this.selecionada)));
            for (const doc of querySnapshot.docs) {
                // Accede a los datos del documento
                const data = doc.data();
                console.log(data);

                // Actualiza el campo "estadoReserva" a "Cancelado"
                const docRef = doc.ref;
                await updateDoc(docRef, { estadoReserva: "Cancelada" })
                    .then(() => {
                        console.log("Reserva actualizada correctamente");
                    })
                    .catch((error) => {
                        console.error("Error al actualizar la reserva:", error);
                    });
                }
                this.ocultarModalBorrar()
                location.href = "/Consulta_Vistas"
            },
            mostrarModalBorrar() {
                // Mostrar el modal
                this.$refs.modalBorrar.classList.add('show');
                this.$refs.modalBorrar.style.display = 'block';
                document.body.classList.add('modal-open');
                document.body.appendChild(this.$refs.modalBorrar);
            },
            ocultarModalBorrar() {
                // Ocultar el modal
                this.$refs.modalBorrar.classList.remove('show');
                this.$refs.modalBorrar.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        }
    }
</script>

<template>
    <div class="modal fade" id="Borrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        ref="modalBorrar">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">Ayuda</h1>
                    <button type="button" class="btn-close" @click="this.ocultarModalBorrar" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5>Estas seguro de que deseas eliminar la reserva {{ this.selecionada }}</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="this.ocultarModalBorrar">Cerrar</button>
                    <button type="button" class="btn btn-primary" @click="this.Borrar()">Borrar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="DropDown" v-if="reserva.estadoReserva === 'Lista'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/verde.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click="this.selecionada = reserva.idReserva" @click.stop="mostrarModalBorrar()">
                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
    </div>


    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Cancelada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/rojo.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
        </div>
    </div>


    <div class="dropdown" v-else-if="reserva.estadoReserva === 'pendiente'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/amarillo.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click="this.selecionada = reserva.idReserva;" @click.stop="mostrarModalBorrar()">


                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
    </div>


    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Utilizada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/azul.ico" class="dropdown-icon">
            Desde: {{ reserva.fechaIngreso }} Hasta: {{ reserva.fechaSalida }} // habitacion: {{ reserva.numeroHabitacion }}
            <div class="trash-container" @click="this.selecionada = reserva.idReserva" @click.stop="mostrarModalBorrar()">
                <img src="/trash.ico" class="trash-icon">
            </div>
        </div>
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