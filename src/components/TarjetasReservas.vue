<template>
  <div class="card h-60">
    <!-- Product image-->
    <img class="card-img-top" src="https://i.imgur.com/lg0Vhr6.jpg" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder"> Habitación N°{{ reserva.numero }} </h5>
        <!-- Product reviews-->
        <div class="d-flex justify-content-center small text-warning mb-2">
        </div>
        <!-- Product price-->
        {{ reserva.precio }} p/noche
      </div>
      <div class="text-center">
        <!-- Product name-->
        <div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
            :data-bs-target="'#MenuComida-' + reserva.numero" style="margin: 5px;" @click="selectedRoom = reserva.numero">
            Reservar
          </button>
          <div class="modal fade" :id="'MenuComida-' + reserva.numero" tabindex="-1"
            :aria-labelledby="'exampleModalLabel-' + reserva.numero" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-4" :id="'exampleModalLabel-' + reserva.numero">
                    Habitación N° {{ selectedRoom }}</h1>
                    fecha: {{ this.fechaFin  }}
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h3>se realizo la reserva para las fechas</h3>
                  <h5>fecha inicio: {{ this.fechaInicio  }} y fecha Fin: {{ this.fechaFin }}</h5>
                </div>
                <div class="modal-footer">
                  <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button @click="guardarReserva(this.selectedRoom )" type="button" class="btn btn-primary" data-bs-dismiss="modal">Ir a Servicios
                    Adicionales</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import router from '@/router';
import app from '../main'
    import { doc, getFirestore, setDoc,getDocs,collection} from "firebase/firestore";


export default {
  props: {
    reserva: Object,
    fechaFin: {
      type: Date,
      default: null
    },
    fechaInicio: {
      type: Date,
      default: null
    }
  },
  data() {
    return {
      selectedRoom: ''
    }
  },
  methods: {  
  async guardarReserva(numeroHabitacion) {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Reservas"));  







    const reser = {
      cantidadCamas: "test",
      cantidadPersonas: "test",
      estadoReserva: "pendiente",
      fechaIngreso: String(this.fechaInicio),
      fechaSalida: String(this.fechaFin),
      idReserva: "n"+querySnapshot.size,
      nombreCliente: "usuario prueba",
      numeroHabitacion: String(numeroHabitacion),
      rut: "test rut"
    };

    const variable="n"+String(querySnapshot.size);
    // Guardar reserva en Firebase
    await setDoc(doc(db, "Reservas",variable), reser);
   // console.log("se registro:" + reser)
    router.push({ name: 'Servicios_Adicionales', query: { variable } })

  }
}

}


</script>
