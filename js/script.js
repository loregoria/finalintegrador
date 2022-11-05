function fnCalcular() {
    var categoria = document.getElementById("selectCategoria").value;
    var inpCantidad = document.getElementById("inputCantidad");
    var cantidad = inpCantidad.value;
    cantidad = parseInt(cantidad);
    var importeB = 0;

    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var mail = document.getElementById("inputCorreo").value;

 function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}

    console.log("La categoría elegida es: "+categoria+", y la cantidad es "+cantidad+", con un importe neto de $ "+importe+".");

    if (nombre === "") {
        alert("Ingrese el nombre...");
    } else if (apellido === "" ) {
        alert("Ingrese el apellido...");
    } else if (mail === "") {
        alert("Ingrese el correo...");


    } else if (isNaN(cantidad)) {
        alert("Ingrese la cantidad correctamente...");
    } else {
        var importe = 200*cantidad;
        if (categoria == "Estudiante") {
            importeB = importe-(importe*.80);
        } else if (categoria == "Trainee") {
            importeB = importe-(importe*.50);
        } else if (categoria == "Junior") {
            importeB = importe-(importe*.15);
        }
        var totalAPagarTxt = document.getElementById("totalAPagar");
        totalAPagarTxt.innerHTML = "Total a pagar: $ "+importeB;

        inpCantidad.value = cantidad;

    }
}

function fnBorrarForm() {
    var totalAPagarTxt = document.getElementById("totalAPagar");
    // var texto = totalAPagarTxt.innerHTML;
    totalAPagarTxt.innerHTML = "Total a pagar: $ ";
}
