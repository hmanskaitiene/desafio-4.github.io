class Servicio {
    constructor(nombre,tarifa){
        this.nombre = nombre;
        this.tarifa = tarifa;
    }

    getNombre = () => this.nombre.toUpperCase()
}

const mostrarResumen = (servicios) => {
    let container = document.querySelector('.container');

    if (servicios.length > 0){
        let title = document.createElement('h3');
        title.appendChild(document.createTextNode("Sus consumos son:"));
        container.appendChild(title);

        let ul = document.createElement('ul');
        ul.classList.add('list-group');

        let acumulador_gastos = 0;
        servicios.forEach(servicio => {
            let li = document.createElement('li');
            li.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
            li.innerHTML = `${servicio.getNombre()}<span class="badge bg-primary rounded-pill">$ ${servicio.tarifa}</span>`;
            ul.appendChild(li);

            acumulador_gastos += parseFloat(servicio.tarifa);
        });
        container.appendChild(ul);

        let div_h3 = document.createElement('div');
        div_h3.classList.add('pt-3');
        div_h3.innerHTML = `<h3>El total de gastos es $ ${acumulador_gastos.toFixed(2)}</h3>`;
        container.appendChild(div_h3);

        const ultimo_servicio = servicios.pop()
        let div_h4 = document.createElement('div');
        div_h4.classList.add('pt-3');
        div_h4.innerHTML = `<h4>Si quitamos el último servicio el total sería $ ${ (acumulador_gastos - ultimo_servicio.tarifa).toFixed(2) }</h4>`;
        container.appendChild(div_h4);
    } else {
        let div_sin_consumos = document.createElement('div');
        div_sin_consumos.classList.add('pt-3');
        div_sin_consumos.innerHTML = `<h3>No tiene consumos</h3>`;
        container.appendChild(div_sin_consumos);
    }
}

alert("Bienvenidx. Vamos a calcular cuanto gasta en total por sus servicios.\nPrimero se le pedira el nombre del servicio y a continuacion la tarifa.\n\nPara finalizar ingrese TERMINAR");
let servicio_nombre = prompt("Ingrese el nombre del servicio");
let servicios = [];
if (servicio_nombre !== null){
    while (servicio_nombre.toUpperCase() != "TERMINAR") {
        if (servicio_nombre.length > 0) {
            let servicio_tarifa;
            do {
                servicio_tarifa = prompt("Ingrese la tarifa del servicio. Ingrese sólo valores numericos.");
            } while (isNaN(servicio_tarifa));
            
            servicios.push(new Servicio(servicio_nombre,servicio_tarifa));
        }
        servicio_nombre = prompt("Ingrese el nombre del servicio");
    }
    mostrarResumen(servicios);
}
