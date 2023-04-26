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
          style="margin-top: -1px;"
        /></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menú
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Perfil</a></li>
                  <li><a class="dropdown-item" href="/">Cerrar sesión</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
</nav>
   <!--                   final de template                      -->




    <!-- -------------  carusel  ------------ -->
    <div class="container">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style="height: 300px; margin-top: 100px;">
          <div class="carousel-item active">
            <img src="https://i.imgur.com/zHFuSEf.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/Igg1mOK.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/E1ezhig.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/EpdTxpu.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/RElaegS.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/cAc26bb.jpg" class="d-block w-100">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!--                   final de template                      -->



    <!--botones-->
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-3">
                        <div class="card h-60">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <div class="text-center" onclick="location.href='/Reservar_Vista';"><a class="btn btn-outline-dark mt-auto" href="#">Has tu Reserva</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="card h-60">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Promociones</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="card h-60">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="./Consulta_Vistas">Tus Reservas</a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
                <!-- Footer-->
                <footer class="py-5 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">Gralord.18 &copy; Prueba hotel</p></div>
      </footer>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
