<template>
    <!-- -------------          header               ------------ -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">
                <img
                    src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg"
                    height="50"
                    alt="hotel logo"
                    loading="lazy"
                    style="margin-top: -1px"
            /></a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menú
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="./menu_Usuario"
                                        >Perfil</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/"
                                        >Cerrar sesión</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!--                   final de template                      -->
    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-white">
                <h1 class="display-4 fw-bolder text-center">
                    Servicios adicionales
                </h1>

                <form></form>
            </div>
        </div>
    </header>

    <header class="bg-light py-2" style="margin-top: 2%">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-black">
                <h2 class="text-center">Seleccione sus servicios</h2>

                <form>
                    <div class="row">
                        <div class="col-6">
                            <div class="col">
                                <div class="card h-100">
                                    <!-- Product details-->
                                    <img
                                        class="card-img-top"
                                        src="https://blogdelhotel.files.wordpress.com/2015/07/562-gal-servicios-habitaciones-gt-1.jpg"
                                        alt="..."
                                    />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <!-- Product name-->
                                            <h5 class="fw-bolder">
                                                Servicio de comidas
                                            </h5>
                                            <!-- Product price-->
                                            Menus del dia, desayuno, almuerzon y
                                            cena. se aplica cargo adicional por
                                            comida
                                        </div>
                                    </div>
                                    <!-- Product actions-->

                                    <div
                                        class="card-footer p-4 pt-0 border-top-0 bg-transparent"
                                    >
                                        <div>
                                            <button
                                                type="button"
                                                class="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#MenuComida"
                                                style="margin: 5px"
                                            >
                                                Pedir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="col">
                                <!-- Product details-->
                                <div class="card h-100">
                                    <img
                                        class="card-img-top"
                                        src="https://blog.ciberdescans.com/wp-content/uploads/2014/12/s%C3%A1banas.jpg"
                                        alt="..."
                                        style="height: 80%"
                                    />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <!-- Product name-->
                                            <h5 class="fw-bolder">
                                                Servicio de Limpieza
                                            </h5>
                                            <!-- Product price-->
                                            Opciones sin cargo adicional
                                        </div>
                                    </div>
                                    <!-- Product actions-->

                                    <div
                                        class="card-footer p-4 pt-0 border-top-0 bg-transparent"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#limpieza"
                                            style="margin: 5px"
                                        >
                                            Pedir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CONTINUAR" style="margin-top: 3%">
                        <div class="text-center">
                            <a
                                class="btn btn-outline-dark mt-auto"
                                @click="Guardar()"
                                >Continuar</a
                            >
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </header>

    <!-- Pop ups -->

    <!-- labanderia-->
    <div
        class="modal fade"
        id="limpieza"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">
                        Servicio de limpieza
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label>
                                la frecuencia de los servicios de limpieza
                            </label>
                        </li>

                        <li class="list-group-item">
                            <div class="input-group mb-3">
                                <label
                                    class="input-group-text"
                                    for="inputGroupSelect01"
                                    >cambio de sabanas</label
                                >
                                <select
                                    class="form-select"
                                    id="inputGroupSelect01"
                                    v-model="cambioSabanas"
                                >
                                    <option value="1">Diario</option>
                                    <option value="2">Dia por medio</option>
                                    <option value="3">Cada 3 dias</option>
                                    <option value="4">Cada 4 dias</option>
                                    <option value="5">Cada 5 dias</option>
                                    <option value="6">Cada 6 dias</option>
                                    <option value="7">Semanalmente</option>
                                </select>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <div class="input-group mb-3">
                                <label
                                    class="input-group-text"
                                    for="inputGroupSelect01"
                                    >Limpieza en la habitacion</label
                                >
                                <select
                                    class="form-select"
                                    id="inputGroupSelect01"
                                    v-model="limpiezaHabitacion"
                                >
                                    <option value="1">Diario</option>
                                    <option value="2">Dia por medio</option>
                                    <option value="3">Cada 3 dias</option>
                                    <option value="4">Cada 4 dias</option>
                                    <option value="5">Cada 5 dias</option>
                                    <option value="6">Cada 6 dias</option>
                                    <option value="7">Semanalmente</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Comida -->
    <div
        class="modal fade"
        id="MenuComida"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">
                        Comida
                    </h1>

                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>

                <!-- body -->
                <div class="modal-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="container">
                                <div class="row">
                                    <div class="col-5">
                                        <label
                                            >Selecciona Comidas deseadas</label
                                        >
                                    </div>

                                    <div class="col-1"></div>

                                    <div class="col-5">
                                        <label>Menu del dia</label>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <div class="form-check form-switch">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-5">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="desayunoInput"
                                                v-model="checkDesayuno"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="desayunoInput"
                                                >Desayuno</label
                                            >
                                        </div>
                                        <div class="col-7">
                                            <p>
                                                huevos, pan, queque, jamon,
                                                queso, te o cafe
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <div class="form-check form-switch">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-5">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="almuerzoInput"
                                                v-model="checkAlmuerzo"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="almuerzoInput"
                                                >Almuerzo</label
                                            >
                                        </div>
                                        <div class="col-7">
                                            <p>
                                                Arroz, pollo, cerdo al jugo,
                                                tallarines
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <div class="form-check form-switch">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-5">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="cenaInput"
                                                v-model="checkCena"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="cenaInput"
                                                >Cena</label
                                            >
                                        </div>
                                        <div class="col-7">
                                            <p>
                                                Arroz, pan, salchichas,
                                                sopaipillas, carne al jugo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer-->
    <footer class="py-5 bg-dark" style="margin-top: 2%">
        <div class="container">
            <p class="m-0 text-center text-white">
                &copy; Hotel Cordillera, 2023 {{ variable }}
            </p>
        </div>
    </footer>
</template>

<script>
import app from "../main";
import { doc, getFirestore, setDoc } from "firebase/firestore";
export default {
    name: "servicioAdicional",
    data() {
        return {
            variable: "",
            comida: null,
            lavanderia: null,
            limpiezaHabitacion: "2",
            cambioSabanas: "2",
            codigo: "",
        };
    },
    mounted() {
        this.variable = this.$route.query.variable;
    },
    methods: {
        async Guardar() {
            const db = getFirestore(app);
            if (isNaN(this.checkDesayuno)) {
                this.checkDesayuno = false;
            }
            if (isNaN(this.checkAlmuerzo)) {
                this.checkAlmuerzo = false;
            }
            if (isNaN(this.checkCena)) {
                this.checkCena = false;
            }
            const Servicio = {
                Desayuno: this.checkDesayuno,
                Almuerzo: this.checkAlmuerzo,
                Cena: this.checkCena,
                Limpieza: this.limpiezaHabitacion,
                Sabanas: this.cambioSabanas,
                idReserva: this.variable,
                codigo: NaN,
            };
            if (this.checkDesayuno || this.checkAlmuerzo || this.checkCena) {
                Servicio.codigo = this.variable.replace("n", "") + "-";
                if (this.checkDesayuno) {
                    Servicio.codigo += "1";
                }
                if (this.checkAlmuerzo) {
                    Servicio.codigo += "2";
                }
                if (this.checkCena) {
                    Servicio.codigo += "3";
                }
            }

            // Guardar reserva en Firebase
            await setDoc(
                doc(db, "Servicios_Adicionales", this.variable),
                Servicio
            );
            location.href = "menu_Usuario";
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
