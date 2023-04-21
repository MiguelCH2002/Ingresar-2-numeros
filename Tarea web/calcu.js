function mostrarResultado() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado;
  
    // Realizar las operaciones con un ciclo for
    for (var i = 0; i < 5; i++) {
      switch (i) {
        case 0:
          resultado = num1 + num2;
          document.getElementById("resultado").innerHTML += "Resultado de suma: " + resultado + "<br>";
          break;
        case 1:
          resultado = num1 - num2;
          document.getElementById("resultado").innerHTML += "Resultado de resta: " + resultado + "<br>";
          break;
        case 2:
          resultado = num1 * num2;
          document.getElementById("resultado").innerHTML += "Resultado de multiplicación: " + resultado + "<br>";
          break;
        case 3:
          resultado = num1 / num2;
          document.getElementById("resultado").innerHTML += "Resultado de división: " + resultado + "<br>";
          break;
        case 4:
          resultado = num1 % num2;
          document.getElementById("resultado").innerHTML += "Resultado de módulo: " + resultado + "<br>";
          break;
        default:
          break;
      }
    }
  }
  