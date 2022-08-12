let contadorHoras = 0;
let contadorSegundos = 0;
let contadorMinutos = 0;
let Parrafocronometro = document.querySelector("#cronometro");
Parrafocronometro.innerHTML = `${contadorHoras} hs :${contadorMinutos} min :${contadorSegundos} seg`;
function cronometro() {
  if (contadorSegundos == 60) {
    contadorSegundos = 0;
    contadorMinutos++;
    if (contadorMinutos == 60) {
      contadorMinutos = 0;
      contadorHoras++;
    }
  }
  contadorSegundos++;
  Parrafocronometro.innerHTML = `${contadorHoras} hs :${contadorMinutos} min :${contadorSegundos} seg`;
}

function iniciar() {
  identificador = setInterval(cronometro, 1000);
}
function parar() {
  clearInterval(identificador);
}
function reset() {
  clearInterval(identificador);
  contadorHoras = 0;
  contadorMinutos = 0;
  contadorSegundos = 0;
  Parrafocronometro.innerHTML = `${contadorHoras} hs :${contadorMinutos} min :${contadorSegundos} seg`;
}
