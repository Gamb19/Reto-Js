const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  tableInsert();
});

function tableInsert() {
  let nombre = form.querySelector("#nombre").value;
  let salario = Number.parseFloat(form.querySelector("#salario").value);
  let ht = form.querySelector("#ht").value;

  if (nombre != String && salario != parseFloat(salario) && ht != parseInt(ht)) {
    alert("Ninguno de los valores es valido");
  } else {
    if (ht > 35 && ht==parseInt(ht)) {
      let extra = ht - 35;
      extra = extra * 1.5;
      salario = Number.parseFloat(salario) * extra;

      if (salario > 100000) {
        let impuesto;
        impuesto = salario * 0.2;
        salario = salario - impuesto;
      }
    }
    let tableContainer = document.getElementById("table-container");
    let newTableContainerRow = tableContainer.insertRow(-1);
    //Poner datos al final de la tabla actual

    //datos de nombre
    let newTableContainerCell = newTableContainerRow.insertCell(0);
    if (nombre == parseFloat(nombre) || nombre == parseInt(nombre)) {
      alert("Solo se permiten letras en el campo Nombre");
    } else {
      newTableContainerCell.textContent = nombre;
    }

    //datos de salario
    newTableContainerCell = newTableContainerRow.insertCell(1);
    if (isNaN(salario)) {
      alert("Solo se permiten valores numericos, en el campo salario");
    }
    if (salario == parseFloat(salario)) {
      newTableContainerCell.textContent = Math.ceil(salario);
    }
    //datos de horas
    newTableContainerCell = newTableContainerRow.insertCell(2);
    if (ht != parseInt(ht)) {
      alert("solo se permiten valores numericos enteros en el capo de horas");
    } else {
      newTableContainerCell.textContent = ht;
    }
    //boton eliminar
    let newDeletecell = newTableContainerRow.insertCell(3);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "eliminar";
    newDeletecell.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
      event.target.parentNode.parentNode.remove();
    });
  }
}
//fin