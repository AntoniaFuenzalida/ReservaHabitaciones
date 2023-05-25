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
        codigo: "",
        devolucion: "",
    }),
    created() {
        this.CargarCodigo();
    },
    methods: {
        Desplegar() {
            this.Mostrar = !this.Mostrar;
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
            location.href = "/Consulta_Vistas";
        },
        mostrarModalBorrar() {
            // calcular devolucion
            let fechaInicio = new Date(this.reserva.fechaIngreso);
            let fechaHoy = new Date();
            let diff = fechaInicio - fechaHoy;
            diff = diff / (1000 * 60 * 60 * 24);
            if (diff > 7) {
                this.devolucion = this.reserva.pagado;
            } else {
                if (this.reserva.valor == this.reserva.pagado) {
                    this.devolucion = Number(this.reserva.pagado) / 2;
                } else {
                    this.devolucion =
                        Number(this.reserva.valor) -
                        Number(this.reserva.pagado);
                }
            }
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
        async CargarCodigo() {
            const db = getFirestore(app);
            const querySnapshot = await getDocs(
                collection(db, "Servicios_Adicionales")
            );
            querySnapshot.forEach((doc) => {
                if (doc.data().idReserva == this.reserva.idReserva) {
                    if (doc.data().codigo) {
                        this.codigo = "// codigo: " + doc.data().codigo;
                    }
                }
            });
        },
    },
};
</script>

<template>
    <div
        class="modal fade"
        id="Borrar"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="modalBorrar"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">
                        Confirmacion
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        @click="this.ocultarModalBorrar"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <h5>
                        Estas seguro de que deseas eliminar la reserva
                        {{ this.selecionada }}

                        Recibiras una devolucion de {{ this.devolucion }}
                    </h5>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="this.ocultarModalBorrar"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="this.Borrar()"
                    >
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
            {{ reserva.fechaSalida }} // habitacion:
            {{ reserva.numeroHabitacion }} // valor:
            {{ reserva.valor }}
            {{ this.codigo }}
            <div
                class="trash-container"
                @click="this.selecionada = reserva.idReserva"
                @click.stop="mostrarModalBorrar()"
            >
                <img src="/trash.ico" class="trash-icon" />
            </div>
        </div>
    </div>

    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Cancelada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/rojo.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitacion:
            {{ reserva.numeroHabitacion }} // valor:
            {{ reserva.valor }}
            {{ this.codigo }}
        </div>
    </div>

    <div class="dropdown" v-else-if="reserva.estadoReserva === 'pendiente'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/amarillo.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitacion:
            {{ reserva.numeroHabitacion }} // valor:
            {{ reserva.valor }}
            {{ this.codigo }}
            <div
                class="trash-container"
                @click="this.selecionada = reserva.idReserva"
                @click.stop="mostrarModalBorrar()"
            >
                <img src="/trash.ico" class="trash-icon" />
            </div>
        </div>
    </div>

    <div class="dropdown" v-else-if="reserva.estadoReserva === 'Utilizada'">
        <div class="dropdown-header" @click="Desplegar">
            <img src="/azul.ico" class="dropdown-icon" />
            Desde: {{ reserva.fechaIngreso }} Hasta:
            {{ reserva.fechaSalida }} // habitacion:
            {{ reserva.numeroHabitacion }} // valor:
            {{ reserva.valor }}
            {{ this.codigo }}
            <div
                class="trash-container"
                @click="this.selecionada = reserva.idReserva"
                @click.stop="mostrarModalBorrar()"
            >
                <img src="/trash.ico" class="trash-icon" />
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
