const cendi = document.getElementById("cendi")
const img0 = document.getElementById("img0")
const boleta = document.getElementById("boleta")
const grupo = document.getElementById("grupo")
const ape1 = document.getElementById("ape1")
const ape2 = document.getElementById("ape2")
const nombres = document.getElementById("nombres")
const nacimiento = document.getElementById("nacimiento")
const curp = document.getElementById("curp")

const dape1 = document.getElementById("dape1")
const dape2 = document.getElementById("dape2")
const dnombres = document.getElementById("dnombres")
const dcalle = document.getElementById("dcalle")
const dcolonia = document.getElementById("dcolonia")
const dext = document.getElementById("dext")
const dint = document.getElementById("dint")
const dalcaldia = document.getElementById("dalcaldia")
const dcp = document.getElementById("dcp")
const dtelfijo = document.getElementById("dtelfijo")
const dtelcel = document.getElementById("dtelcel")
const dcorreo = document.getElementById("dcorreo")
const estado = document.getElementById("estado")
const docupacion = document.getElementById("docupacion")
const dcurp = document.getElementById("dcurp")
const dplaza = document.getElementById("dplaza")
const dsueldo = document.getElementById("dsueldo")
const dnumempleado = document.getElementById("dnumempleado")
const dadscripcion = document.getElementById("dadscripcion")
const dhorariotrabajo = document.getElementById("dhorariotrabajo")
const dnombre_cargo = document.getElementById("dnombre_cargo")
const dextension = document.getElementById("dextension")

const cape1 = document.getElementById("cape1")
const cape2 = document.getElementById("cape2")
const cnombres = document.getElementById("cnombres")
const ccalle = document.getElementById("ccalle")
const cext = document.getElementById("cext")
const cint = document.getElementById("cint")
const ccolonia = document.getElementById("ccolonia")
const calcaldia = document.getElementById("calcaldia")
const cestado = document.getElementById("cestado")
const ccp = document.getElementById("ccp")
const ctelfijo = document.getElementById("ctelfijo")
const ctelcel = document.getElementById("ctelcel")
const clugartrabajo = document.getElementById("clugartrabajo")
const cocupacion = document.getElementById("cocupacion")
const comtrabajo = document.getElementById("comtrabajo")
const cteltrabajo = document.getElementById("cteltrabajo")
const cextension = document.getElementById("cextension")
const creligion = document.getElementById("creligion")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const firma = document.getElementById("firma")
const fechaarch = document.getElementById("fechaarch")

const radioButtons = document.querySelectorAll('input[name="respuesta-conyuge"]')

const parrafo = document.getElementById("warnings")

const fecha = new Date();
const hoy = fecha.toLocaleDateString()
document.getElementById("fechaarch").value = hoy

function diasFin(anio, mes) {
    var anionAux = anio;
    if (anio < 12) {
        var mesSig = parseInt(mes) + 1;
    }
    else {
        var mesSig = 1;
        anionAux = anio + 1;
    }

    var fecha = anionAux + "-" + mesSig + "-01";

    ms = Date.parse(fecha);
    fechaD = new Date(ms);
    fechaD.setDate(fechaD.getDate() - 1);
    var diaH = fechaD.getDate();
    return diaH;
}

form.addEventListener("submit", e => {
    e.preventDefault()
    var nacimiento1 = document.querySelector('input[name="nacimiento"]')
    var hoy = new Date();
    var cumpleanos = new Date(nacimiento1.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    var mesF = cumpleanos.getMonth() + 1
    var anioF = cumpleanos.getFullYear()
    var diaF = cumpleanos.getDate()

    var fechaAct = new Date()
    var mesH = fechaAct.getMonth() + 1
    var anioH = fechaAct.getFullYear()
    var diaH = fechaAct.getDate()
    var diasSum = diasFin(anioF, mesF)
    var mesAdicional = 0

    if (diaF > diaH) {
        diaH = parseInt(diaH) + parseInt(diasSum)
        mesAdicional = 1
    }

    var dias = parseInt(diaH) - parseInt(diaF)

    var anioAdicional = 0
    if (mesF > mesH) {
        mesH = parseInt(mesH) + 12
        anioAdicional = 1
    }

    var meses = parseInt(mesH) - (parseInt(mesF) + parseInt(mesAdicional))

    var anios = parseInt(anioH) - (parseInt(anioF) + parseInt(anioAdicional))

    document.getElementById("edad_anos").value = anios
    document.getElementById("edad_meses").value = meses

    let warnings = ""
    let regexBoleta = /[P|0-9][P|E|0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g
    let regexsoloTexto = /[a-zA-Z ]{1,100}/
    let regexcurp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
    let regexnumintext = /[0-9]{1,3}/
    let regexcorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let entrar = false
    parrafo.innerHTML = ""
    if (cendi.value.length != 1) {
        warnings += `El cendi esta mal <br>`
        entrar = true
    }
    if (anios > 6) {
        warnings += `No puede ser mayor a 6 años <br>`
        entrar = true
    }
    if (img0.value.length < 1) {
        warnings += `Falta cargar imagen niño <br>`
        entrar = true
    }
    if (boleta.value.length > 10 || boleta.value.length < 10) {
        warnings += `La boleta debe tener solo 10 caracteres<br>`
        entrar = true
    }
    if (!regexBoleta.test(boleta.value)) {
        warnings += `La boleta debe tener el formato adecuado <br>`
        entrar = true
    }
    if (grupo.value.length < 1) {
        warnings += `El grupo esta vacio <br>`
        entrar = true
    }
    if (ape1.value.length < 1 || !regexsoloTexto.test(ape1.value)) {
        warnings += `El apellido paterno no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (ape2.value.length < 1 || !regexsoloTexto.test(ape2.value)) {
        warnings += `El apellido materno no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (nombres.value.length < 1 || !regexsoloTexto.test(nombres.value)) {
        warnings += `El nombre no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (nacimiento.value.length < 1) {
        warnings += `Ingrese fecha valida <br>`
        entrar = true
    }
    if (!regexcurp.test(curp.value)) {
        warnings += `Curp no valido <br>`
        entrar = true
    }
    if (dape1.value.length < 1 || !regexsoloTexto.test(dape1.value)) {
        warnings += `El apellido paterno del derechohabiente no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dape2.value.length < 1 || !regexsoloTexto.test(dape2.value)) {
        warnings += `El apellido materno del derechohabiente no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dnombres.value.length < 1 || !regexsoloTexto.test(dnombres.value)) {
        warnings += `El nombre del derechohabiente no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dcalle.value.length < 1 || !regexsoloTexto.test(dcalle.value)) {
        warnings += `La calle derechohabiente no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dcolonia.value.length < 1 || !regexsoloTexto.test(dcolonia.value)) {
        warnings += `La colonia del derechohabiente no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }

    if (dint.value.length < 1 || !regexnumintext.test(dint.value)) {
        warnings += `El numInt del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }

    if (dext.value.length < 1 || !regexnumintext.test(dext.value)) {
        warnings += `El numExt del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    if (dalcaldia.value.length < 1 || !regexsoloTexto.test(dalcaldia.value)) {
        warnings += `La alcaldia del derechohabiente no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dcp.value.length < 1 || !regexnumintext.test(dcp.value)) {
        warnings += `El C.P. del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    if (dtelfijo.value.length < 1 || !regexnumintext.test(dtelfijo.value)) {
        warnings += `El telefono fijo del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    if (dtelcel.value.length < 1 || !regexnumintext.test(dtelcel.value)) {
        warnings += `El telefono celular del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    if (dcorreo.value.length < 1 || !regexcorreo.test(dcorreo.value)) {
        warnings += `El correo del derechohabiente debe cumplir el formato <br>`
        entrar = true
    }
    if (estado.value.length < 2) {
        warnings += `El estado del derechohabiente no se selecciono <br>`
        entrar = true
    }
    if (docupacion.value.length < 2) {
        warnings += `La ocupacion del derechohabiente no se selecciono <br>`
        entrar = true
    }
    if (!regexcurp.test(dcurp.value)) {
        warnings += `Curp derechohabiente no valido <br>`
        entrar = true
    }
    if (dplaza.value.length < 1 || !regexsoloTexto.test(dplaza.value)) {
        warnings += `El nombre de la plaza o puesto no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dsueldo.value.length < 1 || !regexnumintext.test(dsueldo.value)) {
        warnings += `El sueldo del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    if (dnumempleado.value.length < 1 || !regexnumintext.test(dnumempleado.value)) {
        warnings += `El numero de empleado del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    if (dadscripcion.value.length < 2) {
        warnings += `La adscripcion no se selecciono <br>`
        entrar = true
    }
    if (dhorariotrabajo.value.length < 2) {
        warnings += `El horario de trabajo no se selecciono <br>`
        entrar = true
    }
    if (dnombre_cargo.value.length < 1 || !regexsoloTexto.test(dnombre_cargo.value)) {
        warnings += `El nombre y cargo de tu jefe o jefa no debe estar vacio y solo debe ser texto <br>`
        entrar = true
    }
    if (dextension.value.length < 1 || !regexnumintext.test(dextension.value)) {
        warnings += `La extension del derechohabiente no debe estar vacio y solo debe ser numeros <br>`
        entrar = true
    }
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    if (selectedSize === "si") {
        if (cape1.value.length < 1 || !regexsoloTexto.test(cape1.value)) {
            warnings += `El apellido paterno de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (cape2.value.length < 1 || !regexsoloTexto.test(cape2.value)) {
            warnings += `El apellido materno de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (cnombres.value.length < 1 || !regexsoloTexto.test(cnombres.value)) {
            warnings += `El nombre de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (ccalle.value.length < 1 || !regexsoloTexto.test(ccalle.value)) {
            warnings += `La calle de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (cint.value.length < 1 || !regexnumintext.test(cint.value)) {
            warnings += `El numInt del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }

        if (cext.value.length < 1 || !regexnumintext.test(cext.value)) {
            warnings += `El numExt del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }
        if (ccolonia.value.length < 1 || !regexsoloTexto.test(ccolonia.value)) {
            warnings += `La colonia de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (calcaldia.value.length < 1 || !regexsoloTexto.test(calcaldia.value)) {
            warnings += `La alcaldia de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (cestado.value.length < 2) {
            warnings += `El estado del conyuge no se selecciono <br>`
            entrar = true
        }
        if (ccp.value.length < 1 || !regexnumintext.test(ccp.value)) {
            warnings += `El C.P. del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }
        if (ctelfijo.value.length < 1 || !regexnumintext.test(ctelfijo.value)) {
            warnings += `El telefono fijo del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }
        if (ctelcel.value.length < 1 || !regexnumintext.test(ctelcel.value)) {
            warnings += `El telefono celular del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }
        if (clugartrabajo.value.length < 1 || !regexsoloTexto.test(clugartrabajo.value)) {
            warnings += `El lugar de trabajo de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (cocupacion.value.length < 1 || !regexsoloTexto.test(cocupacion.value)) {
            warnings += `La ocupacion de trabajo de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (comtrabajo.value.length < 1 || !regexsoloTexto.test(comtrabajo.value)) {
            warnings += `El domicilio de trabajo de conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
        if (cteltrabajo.value.length < 1 || !regexnumintext.test(cteltrabajo.value)) {
            warnings += `El telefono de trabajo del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }
        if (cextension.value.length < 1 || !regexnumintext.test(cextension.value)) {
            warnings += `La extension del conyuge no debe estar vacio y solo debe ser numeros <br>`
            entrar = true
        }
        if (creligion.value.length < 1 || !regexsoloTexto.test(creligion.value)) {
            warnings += `La religion del conyuge no debe estar vacio y solo debe ser texto <br>`
            entrar = true
        }
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})