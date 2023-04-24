<template>
  <!-- -------------          header               ------------ -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">
        <img src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg" height="50" alt="hotel logo"
          loading="lazy" style="margin-top: -1px;" /></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
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
                menu
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
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
  <!-- Header-->
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-white">

        <h1 class="display-4 fw-bolder text-center">Servicios adicionales</h1>

        <form>


        </form>

      </div>
    </div>
  </header>


  <header class="bg-light py-2" style="margin-top: 2%;">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-black">

        <h2 class="text-center">Seleccione sus servicios</h2>

        <form>
          <div class="row">
            <div class="col-6">
              <div class="col">

                <div class="card h-100">
                  <!-- Product details-->
                  <img class="card-img-top"
                    src="https://blogdelhotel.files.wordpress.com/2015/07/562-gal-servicios-habitaciones-gt-1.jpg"
                    alt="..." />
                  <div class="card-body p-4">
                    <div class="text-center">
                      <!-- Product name-->
                      <h5 class="fw-bolder">Servicio de comidas</h5>
                      <!-- Product price-->
                      Usted
                      puede pedir comida,<b> y el cargo se le aplica al final</b>
                    </div>
                  </div>
                  <!-- Product actions-->

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div> <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#MenuComida" style="margin: 5px;">
                        Pedir
                      </button>
                      <div class="modal fade" id="MenuComida" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-4" id="exampleModalLabel">Comida</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">agregar comida
                                    </label>
                                  </div>
                                </li>
                                <li class="list-group-item">
                                  <p>comentarios o requerimiento especial</p>
                                </li>
                                <li class="list-group-item">
                                  <div class="input-group">
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div class="col">

              <div class="col">
                <!-- Product details-->
                <div class="card h-100">
                  <img class="card-img-top"
                    src="https://blog.ciberdescans.com/wp-content/uploads/2014/12/s%C3%A1banas.jpg" alt="..."
                    style="height: 80%;" />
                  <div class="card-body p-4">
                    <div class="text-center">
                      <!-- Product name-->
                      <h5 class="fw-bolder">Servicio de lavanderia</h5>
                      <!-- Product price-->
                      Puede optar a que le realicen<b> cambios de sabanas</b>
                    </div>
                  </div>
                  <!-- Product actions-->

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MenuAyuda"
                      style="margin: 5px;">
                      Pedir
                    </button>
                    <div class="modal fade" id="MenuAyuda" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-4" id="exampleModalLabel">Lavanderia</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <ul class="list-group">
                              <li class="list-group-item">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Agregar Servicio Lavanderia
                                    </label>
                                  </div>
                              </li>
                              <li class="list-group-item"> 
                                <p>comentarios o requerimiento especial</p>
                              </li>
                              <li class="list-group-item">
                                <div class="input-group">
                                  <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>

          <div class="CONTINUAR" style="margin-top: 3%;">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Continuar</a></div>
          </div>



        </form>

      </div>
    </div>
  </header>

  <!-- Footer-->
  <footer class="py-5 bg-dark" style="margin-top: 2%;">
    <div class="container">
      <p class="m-0 text-center text-white">Gralord.18 &copy; Prueba hotel</p>
    </div>
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
}</style>
