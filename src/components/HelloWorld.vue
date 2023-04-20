<template>
    <header >
    </header>
    <body>
      
    <div  class="class">
        <h1>{{ msg }}</h1>
        <div style="display: inline-block;border: 1px solid black; border-radius: 10px; padding: 20px; position: relative; width: 35%; text-align: left; top: -20px; left: 5px;"  >
          
          <p>
            <img src="https://blog.ciberdescans.com/wp-content/uploads/2014/12/s%C3%A1banas.jpg" style="display: inline-block;position: relative;left: 200px;top: 30px; width: 100px; height: 80px; ">
            <br>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Recambio de sábanas  </label>
            
            <b style="border: 1px solid gray; border-radius: 10px;float: right;left: 8px;top: -50px; position: relative;padding: 8px;">Usted puede pedir comida,<br> y el cargo se le aplica al final</b>
            
            <br>
            <img src="https://blogdelhotel.files.wordpress.com/2015/07/562-gal-servicios-habitaciones-gt-1.jpg" style="display: inline-block;position: relative;left: 200px;top: 50px; width: 100px; height: 80px; ">
            <br>
            <br>
            <input type="checkbox" id="sam" value="sam" v-model="checkedNames">
            <label for="sam">Servicio al cuarto </label>
            <b style="border: 1px solid gray; border-radius: 10px;float: right;left: 8px;top: -50px; position: relative;padding: 8px;"> Puede optar a  que le realicen<br> cambios de sabanas</b>
            <br>
            <br>  
            <textarea id="cosa" cols="50">Comentarios adicionales</textarea>

            <button style="position: relative; left: 80px;"> Guardar cambios</button>
          </p>
        </div>
      </div>
  
    </body>
    
  </template>
  
  
  <script>
  
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
  
  .arrow-left {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid black;
    position: relative;
    cursor: pointer
  }
  
  
  </style>
  