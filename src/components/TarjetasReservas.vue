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
          <button type="button" class="btn btn-primary" style="margin: 5px;"
            @click="$router.push('/servicios-adicionales')">
            Ir a Servicios Adicionales
          </button>
          <div class="modal fade" :id="'MenuComida-' + reserva.numero" tabindex="-1"
            :aria-labelledby="'exampleModalLabel-' + reserva.numero" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-4" :id="'exampleModalLabel-' + reserva.numero">
                    Habitación N° {{ selectedRoom }}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Ir a Servicios
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
export default {
  props: {
    reserva: Object
  },
  data() {
    return {
      selectedRoom: ''
    }
  }
}
</script>