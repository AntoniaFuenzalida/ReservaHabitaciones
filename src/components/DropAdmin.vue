<script setup>
import {
    collection,
    getDocs,
    query,
    updateDoc,
    where,
    getFirestore,
} from "firebase/firestore";
import { db } from "../main.js";
import app from "../main";
</script>

<script>
export default {
    props: {
        reserva: Object,
    },
    data: () => ({
        Mostrar: false,
        selecionada: "",
        validarBorrar: false,
    }),
    methods: {
        Desplegar() {
            this.Mostrar = !this.Mostrar;
        },
        async Validar() {
            const querySnapshot = await getDocs(
                query(
                    collection(db, "Reservas"),
                    where("idReserva", "==", this.selecionada)
                )
            );
            for (const doc of querySnapshot.docs) {
                // Accede a los datos del documento
                const data = doc.data();

                // Actualiza el campo "estadoReserva" a "lista"
                const docRef = doc.ref;
                await updateDoc(docRef, { estadoReserva: "Lista" })
                    .then(() => {
                        console.log("Reserva actualizada correctamente");
                    })
                    .catch((error) => {
                        console.error("Error al actualizar la reserva:", error);
                    });
            }
            this.ocultarModalValidar();
            location.href = "/MenuAdmin";
        },
        mostrarModalValidar() {
            // Mostrar el modal
            this.$refs.modalValidar.classList.add("show");
            this.$refs.modalValidar.style.display = "block";
            document.body.classList.add("modal-open");
            document.body.appendChild(this.$refs.modalValidar);
        },
        ocultarModalValidar() {
            // Ocultar el modal
            this.$refs.modalValidar.classList.remove("show");
            this.$refs.modalValidar.style.display = "none";
            document.body.classList.remove("modal-open");
        },
        mostrarModalBorrar() {
            // Mostrar el modal
            this.$refs.modalBorrar.classList.add("show");
            this.$refs.modalBorrar.style.display = "block";
            document.body.classList.add("modal-open");
            document.body.appendChild(this.$refs.modalBorrar);
        },
        ocultarModalBorrar() {
            // Ocultar el modal
            this.$refs.modalBorrar.classList.remove("show");
            this.$refs.modalBorrar.style.display = "none";
            document.body.classList.remove("modal-open");
        },
        async Borrar() {
            const querySnapshot = await getDocs(
                query(
                    collection(db, "Reservas"),
                    where("idReserva", "==", this.selecionada)
                )
            );
            for (const doc of querySnapshot.docs) {
                // Accede a los datos del documento
                const data = doc.data();

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
            this.ocultarModalBorrar();
            location.href = "/MenuAdmin";
        }
    },
};
</script>

<template>
    <div class="modal fade" id="Validar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        ref="modalValidar">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">
                        Ayuda
                    </h1>
                    <button type="button" class="btn-close" @click="this.ocultarModalValidar" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5>
                        ¿Estas seguro de que deseas Aprobar la reserva?
                        <br>
                        Reserva:
                        {{ this.selecionada }}
                    </h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="this.ocultarModalValidar">
                        Cerrar
                    </button>
                    <button type="button" class="btn btn-primary" style="cursor: pointer;" @click="this.Validar()">
                        Aprobar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="Borrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        ref="modalBorrar">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">
                        Ayuda
                    </h1>
                    <button type="button" class="btn-close" @click="this.ocultarModalBorrar" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5>
                        ¿Estas seguro de que deseas eliminar la reserva?
                        <br>
                        Reserva:
                        {{ this.selecionada }}
                    </h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" style="cursor: pointer;" @click="this.ocultarModalBorrar">
                        Cerrar
                    </button>
                    <button type="button" class="btn btn-primary" style="cursor: pointer;" @click="this.Borrar()">
                        Borrar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="DropDown" v-if="reserva.estadoReserva === 'Lista'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/verde.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitación:
            {{ reserva.numeroHabitacion }}
        </div>
    </div>

    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Cancelada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/rojo.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitación:
            {{ reserva.numeroHabitacion }}
        </div>
    </div>

    <div class="dropdown" v-else-if="reserva.estadoReserva === 'pendiente'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/amarillo.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitación:
            {{ reserva.numeroHabitacion }}
        </div>
        <div class="dropdown-wraper" v-if="Mostrar">
            <ul class="dropdown-list list-group">
                <li class="dropdown-list-item list-group-item">
                    <div>
                        <img src="/verde.ico" class="icon" style="cursor: pointer;"
                            @click="this.selecionada = reserva.idReserva" @click.stop="mostrarModalValidar()" />
                        <span> Aprobar Reserva</span>
                        <p></p>
                    </div>
                    <div>
                        <img src="/trash.ico" class="trash-icon" style="cursor: pointer;"
                            @click="this.selecionada = reserva.idReserva" @click.stop="mostrarModalBorrar()" />
                        <span>Borrar</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Utilizada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/azul.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitacion:
            {{ reserva.numeroHabitacion }}
        </div>
    </div>
</template>

<style></style>