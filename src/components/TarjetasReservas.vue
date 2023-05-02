<script>
export default {
    props: {
        habitacion: String,
        precio: String,
        estado: Boolean,
    },
    data: () => ({
        Mostrar: false
    })
}
</script>
<template>
    <div class="card h-60" >
        <!-- Product image-->
        <img class="card-img-top" src="https://i.imgur.com/lg0Vhr6.jpg" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{ habitacion }} </h5>
                <!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">

                </div>
                <!-- Product price-->
                {{ precio }} p/noche
            </div>
            <div class="text-center">
                <!-- Product name-->
                <button type="button" class="btn btn-dark" > Haz tu Reserva</button>
            </div>
        </div>
    </div>

</template>