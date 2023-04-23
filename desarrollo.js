// Importar json de objetos
const autos = require('./cars.json');

//Esta variable se instancia aquí para que el método obtenerStrings() pueda obtener esta variable
let autosMayor2010 = autos.filter(autoMayor2010 => autoMayor2010.year > 2010);

//Imprime la información de la cantidad de autos con el año mayor a 2010
function obtenerAutosMayor2010() {
    console.log("Autos de año 2010 en adelante: " + autosMayor2010.length);
}

//Obtiene solamente la cantidad de autos de color rojo mediente un filtro y los muestra
function obtenerAutosRojos() {
    const autosRojos = autos.filter(autoRojo => autoRojo.color === "Red");
    console.log("Autos de color rojo: " + autosRojos.length);
}

//Muestra los autos con año mayor a 2010 convirtiendo los objetos a string con el formato (BRAND - MODEL YEAR)
function obtenerStrings() {
    let strings = [];
    autosMayor2010.forEach(function (auto) {
        strings.push(`${auto.brand} - ${auto.model} ${auto.year}`);
    });
    console.log("Strings de autos con año mayor a 2010 (MARCA - MODELO AÑO)");
    console.log(strings);
}

//Filtra y muestra a los autos por marca Jaguar o Aston Martin y les agrega la variable luxuryTax en el arreglo original
function agregarImpuestoDeLujo() {
    autos.forEach(function (auto) {
        if (auto.brand === "Jaguar" || auto.brand === "Aston Martin") {
            auto.luxuryTax = true;
        }
    });
    const autosLujosos = autos.filter(autoLujoso => autoLujoso.luxuryTax === true);
    console.log("Autos con impuesto de lujo: " + autosLujosos.length);
}

//Filtra y muestra a los autos según el año ingresado en el formato (MODEL - YEAR)
function obtenerAutoPorAño(anio) {
    const autoAnio = autos.filter(auto => auto.year === anio);
    let stringAutos = [];
    autoAnio.forEach(function (auto) {
        stringAutos.push(`${auto.model} - ${auto.year}`);
    });
    console.log(`Todos los autos del año ${anio} son:`);
    console.log(stringAutos);
}

//Uso de métodos que hacen funcionar al programa
obtenerAutosMayor2010();
obtenerAutosRojos();
obtenerStrings();
agregarImpuestoDeLujo();
obtenerAutoPorAño(2011);
