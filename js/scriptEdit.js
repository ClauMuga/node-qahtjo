const vsn = 'GMH | ScriptEdit_v7 | 2022.12.27.03',
      $minPro = 1,
      $maxPro = 9999,
      $minBusi = 10,
      $maxBusi = 9999,
      $minCorp = 50,
      $maxCorp = 9999,
      modalConfirmPlan = new bootstrap.Modal(document.getElementById("modalConfirmPlan"), {}),
      modalConfirmUserAdmin = new bootstrap.Modal(document.getElementById("modalConfirmUserAdmin"), {}),
      modalDeleteUserAdmin = new bootstrap.Modal(document.getElementById("modalDeleteUserAdmin"), {});
      
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
    hideLoader();
  }
}

function hideLoader() {
  $('.load_image').fadeOut(300);
}

function showLoader() {
  // $('body, html').animate({scrollTop: '0px'}, 0);
  window.scrollTo(0, 0)
  $('.load_image').fadeIn(300);
}

//Boton realizar cambio plan
$(document).ready(function () {
  $('#privacidad').on('input change', function () {
    var $privacidad = document.getElementById('privacidad');
      if (!($privacidad.checked == true)) {
        $('#btnGuardaCambioPlan').prop('disabled', true);
      }
      else {
        $('#btnGuardaCambioPlan').prop('disabled', false);
      }
  });
})

async function regresarEditar() {
  document.getElementById('btnEditaPlan').disabled = false;
  document.getElementById('btnEditaDatosPersonales').disabled = false;
  document.getElementById('btnEditaDatosFacturacion').disabled = false;
  document.getElementById('btnEditaMetodoPago').disabled = false;
  document.getElementById('secDatosPlanSuscrito').style.display = 'revert';
  document.getElementById('secModDatosPlanSuscrito').style.display = 'none';
  document.getElementById('usuariosAdmin').style.display = 'revert';
  document.getElementById('secModUsuariosAdmin').style.display = 'none';
  document.getElementById('secDatosPersonales').style.display = 'revert';
  document.getElementById('secModDatosPersonales').style.display = 'none';
  document.getElementById('secDatosFacturacion').style.display = 'revert';
  document.getElementById('secModDatosFacturacion').style.display = 'none';
  document.getElementById('secMetodoPago').style.display = 'revert';
  document.getElementById('secModMetodoPago').style.display = 'none';
  document.getElementById('historialCambios').style.display = 'revert';
  document.getElementById('mostarConsumos').style.display = 'revert';
  document.getElementById('mostrarInvoices').style.display = 'revert';
  document.getElementById('btnDesuscribe').style.display = 'revert';
  document.getElementById('btnAgregarAdmin').style.display = 'none';
  document.getElementById('RegUserAdm').style.display = 'revert';
  document.getElementById('btnRegUserAdm').style.display = 'none';
    var todosDeleteUser = document.getElementsByClassName("deleteUser");
    for(classDeleteUser in todosDeleteUser){
      if(typeof todosDeleteUser[classDeleteUser].textContent == 'string'){
      document.getElementsByClassName("deleteUser")[classDeleteUser].style.display = 'none'
      }
    };  
}

async function modificaPlan() {
  document.getElementById('btnEditaPlan').disabled = true;

  if (document.getElementById('footerModModDatosPlan') != null) {
    document.getElementById('btnGuardaCambioPlan').disabled = true;
  }
  
  document.getElementById('secModDatosPlanSuscrito').style.display = 'revert';
  document.getElementById('usuariosAdmin').style.display = 'none';
  document.getElementById('secDatosPersonales').style.display = 'none';
  document.getElementById('secDatosFacturacion').style.display = 'none';
  document.getElementById('secMetodoPago').style.display = 'none';
  document.getElementById('historialCambios').style.display = 'none';
  document.getElementById('mostarConsumos').style.display = 'none';
  document.getElementById('mostrarInvoices').style.display = 'none';
  document.getElementById('btnDesuscribe').style.display = 'none';
}

async function editarUserAdmin() {
  // document.getElementById('btnEditaDatosPersonales').disabled = true;
  document.getElementById('secDatosPlanSuscrito').style.display = 'none';
  document.getElementById('usuariosAdmin').style.display = 'revert';
  document.getElementById('secDatosPersonales').style.display = 'none';
  document.getElementById('secDatosFacturacion').style.display = 'none';
  document.getElementById('secMetodoPago').style.display = 'none';
  document.getElementById('historialCambios').style.display = 'none';
  document.getElementById('mostarConsumos').style.display = 'none';
  document.getElementById('mostrarInvoices').style.display = 'none';
  document.getElementById('btnDesuscribe').style.display = 'none';
    var todosDeleteUser = document.getElementsByClassName("deleteUser");
    for(classDeleteUser in todosDeleteUser){
      if(typeof todosDeleteUser[classDeleteUser].textContent == 'string'){
      document.getElementsByClassName("deleteUser")[classDeleteUser].style.display = 'revert'
      }
    };
  document.getElementById('btnAgregarAdmin').style.display = 'revert';
  document.getElementById('RegUserAdm').style.display = 'none';
  document.getElementById('btnRegUserAdm').style.display = 'revert';
}

async function btnAgregarUserAdmin(){
  document.getElementById('btnAgregarAdmin').style.display = 'none';
  document.getElementById('secModUsuariosAdmin').style.display = 'revert';
}

// async function showEditUserAdmin(idx, name, lastName, email, phone){
//   btnAgregarUserAdmin();
//   document.getElementById('DIV_btnAddUser').style.display = 'none';
//   document.getElementById('DIV_btnEditUser').style.display = 'revert';

//   console.log(idx);
//   console.log(name);
//   console.log(lastName);
//   console.log(email);
//   console.log(phone);

//   document.getElementById('nameUserAdminX').value = name
//   document.getElementById('lastNameUserAdminX').value = lastName
//   document.getElementById('emailUserAdminX').value = email
//   document.getElementById('phoneUserAdminX').value = phone
// }

async function showDeleteUserAdmin(idx, name, email) {
  // console.log(idx);
  // console.log(name);
  // console.log(email);
  // console.log(idx);
  document.getElementById('deleteIdx').innerText = idx;
  document.getElementById('deleteNameUser').innerText = name;
  document.getElementById('deleteEmailUser').innerText = email;
  modalDeleteUserAdmin.show(idx);
}

async function deleteUserAdmin() {
  // console.log();
  showLoader();
  let action = 'delete',
      idx = document.getElementById('deleteIdx').innerText,
      values = JSON.stringify({type: 'onDemand',
                               action: action,
                               idx: idx
                              });
  console.log(values);
  let {data} = await functionOnDemand('userAdmin', {data: values});
  location.reload();
}

async function showDatosUserAdmin() {
  let nameUserAdmin = document.getElementById('nameUserAdminX').value,
      lastNameUserAdmin = document.getElementById('lastNameUserAdminX').value,
      emailUserAdmin = document.getElementById('emailUserAdminX').value,
      phoneUserAdmin = document.getElementById('phoneUserAdminX').value;

  if(nameUserAdmin.length > 0 && lastNameUserAdmin.length > 0 && emailUserAdmin.length > 0 && phoneUserAdmin.length > 0){
    document.getElementById('confirmNameUser').innerHTML = nameUserAdmin;
    document.getElementById('confirmlastNameUser').innerHTML = lastNameUserAdmin;
    document.getElementById('confirmEmailUser').innerHTML = emailUserAdmin;
    document.getElementById('confirmPhoneUser').innerHTML = phoneUserAdmin;
    modalConfirmUserAdmin.show();
  }else{
    console.log('Falta ingresar datos');
  }
}

async function saveUserAdmin() {
  modalConfirmUserAdmin.hide();
  showLoader();

  let action = 'insert',
      idx = document.getElementById('_modRP_idRegistro').innerHTML,
      bACC = document.getElementById('_modRP_billingAccount').innerHTML,
      nameUserAdmin = document.getElementById('nameUserAdminX').value,
      lastNameUserAdmin = document.getElementById('lastNameUserAdminX').value,
      emailUserAdmin = document.getElementById('emailUserAdminX').value,
      phoneUserAdmin = document.getElementById('phoneUserAdminX').value,
      fecha = new Date,
      values = JSON.stringify({type: 'onDemand',
                               action: action,
                               idx: idx,
                               billingAccount: bACC,
                               name: nameUserAdmin,
                               lastName: lastNameUserAdmin,
                               email: emailUserAdmin,
                               phone: phoneUserAdmin,
                               created: fecha
                              });
  console.log(values);
  let {data} = await functionOnDemand('userAdmin', {data: values});  
  location.reload();
}

async function editarDatosPersonales() {
  document.getElementById('btnEditaDatosPersonales').disabled = true;
  document.getElementById('secDatosPlanSuscrito').style.display = 'none';
  document.getElementById('usuariosAdmin').style.display = 'none';
  document.getElementById('secModDatosPersonales').style.display = 'revert';
  document.getElementById('secDatosFacturacion').style.display = 'none';
  document.getElementById('secMetodoPago').style.display = 'none';
  document.getElementById('historialCambios').style.display = 'none';
  document.getElementById('mostarConsumos').style.display = 'none';
  document.getElementById('mostrarInvoices').style.display = 'none';
  document.getElementById('btnDesuscribe').style.display = 'none';
}

async function guardarDatosPersonales() {
  showLoader();
  let datoPhoneUser = document.getElementById('phoneContact').value,
      idRegistroBACC = document.getElementById('_modRP_idRegistro').innerHTML,
      values = JSON.stringify({idRegistro:idRegistroBACC,
                               cambioPhoneUser:datoPhoneUser
                              });

  let {data} = await functionOnDemand('editarDatosPersonales', {data: values});
  location.reload()
}

async function editarDatosFacturacion() {
  document.getElementById('btnEditaDatosFacturacion').disabled = true;
  document.getElementById('secDatosPlanSuscrito').style.display = 'none';
  document.getElementById('usuariosAdmin').style.display = 'none';
  document.getElementById('secDatosPersonales').style.display = 'none';
  document.getElementById('secModDatosFacturacion').style.display = 'revert';
  document.getElementById('secMetodoPago').style.display = 'none';
  document.getElementById('historialCambios').style.display = 'none';
  document.getElementById('mostarConsumos').style.display = 'none';
  document.getElementById('mostrarInvoices').style.display = 'none';
  document.getElementById('btnDesuscribe').style.display = 'none';
}

async function guardarDatosFacturacion() {
  
  showLoader();

  let idRegistroBACC = document.getElementById('_modRP_idRegistro').innerHTML,
      datoVatId = document.getElementById('taxId').value,
      datoNombre = document.getElementById('name').value,
      datoContacto = document.getElementById('attention').value,
      datoDireccion = document.getElementById('address').value,
      datoCiudad = document.getElementById('city').value,
      datoZipCode = document.getElementById('zipCode').value,
      datoEmail1 = document.getElementById('email1').value,
      datoEmail2 = document.getElementById('email2').value,
      datoEmail3 = document.getElementById('email3').value,
      datoEmail4 = document.getElementById('email4').value,
      datoCodAgente = document.getElementById('codSell').value,
      values = JSON.stringify({idRegistro: idRegistroBACC,
                               cambioVatId: datoVatId,
                               cambioNombre: datoNombre,
                               cambioContacto: datoContacto,
                               cambioDireccion: datoDireccion,
                               cambioCiudad: datoCiudad,
                               cambioZipCode: datoZipCode,
                               cambioEmail1: datoEmail1,
                               cambioEmail2: datoEmail2,
                               cambioEmail3: datoEmail3,
                               cambioEmail4: datoEmail4,
                               cambioCodAgente: datoCodAgente
                              });

      // console.log(datoVatId);
      // console.log(datoNombre);
      // console.log(datoContacto);
      // console.log(datoDireccion);
      // console.log(datoCiudad);
      // console.log(datoZipCode);
      // console.log(datoEmail1);
      // console.log(datoEmail2);
      // console.log(datoEmail3);
      // console.log(datoEmail4);
      // console.log(datoCodAgente);

  let {data} = await functionOnDemand('editarDatosFacturacion', {data: values});
  location.reload()
}

function verificaDatosFacturacion(){

  let ctaError = 0;
  console.log(ctaError);

  let v_DF_TaxId = document.getElementById('taxId'),
      v_DF_Name = document.getElementById('name'),
      v_DF_Attention = document.getElementById('attention'),
      v_DF_Address = document.getElementById('address'),
      v_DF_City = document.getElementById('city'),
      v_DF_ZipCode = document.getElementById('zipCode'),
      v_DF_Email_C1 = document.getElementById('email1'),
      v_DF_Email_C2 = document.getElementById('email2'),
      v_DF_Email_C3 = document.getElementById('email3'),
      v_DF_Email_C4 = document.getElementById('email4')

      if (v_DF_TaxId.value.length != 0){
        if (v_DF_TaxId.validity.typeMismatch) {
          ctaError = ctaError + 1
        } 
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_DF_Name.value.length != 0){
        if (v_DF_Name.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
          ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_DF_Attention.value.length != 0){
        if (v_DF_Attention.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
          ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_DF_Address.value.length != 0){
        if (v_DF_Address.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
          ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_DF_City.value.length != 0){
        if (v_DF_City.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_DF_ZipCode.value.length != 0){
        if (v_DF_ZipCode.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_DF_Email_C1.value.length != 0){
        if (v_DF_Email_C1.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      }
      console.log(ctaError);

      if (v_DF_Email_C2.value.length !=0){
        if (v_DF_Email_C2.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      }
      console.log(ctaError);
      
      if (v_DF_Email_C3.value.length != 0){
        if (v_DF_Email_C3.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      }
      console.log(ctaError);
      
      if (v_DF_Email_C4.value.length != 0){
        if (v_DF_Email_C4.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      }
      console.log(ctaError);

    if (ctaError > 0){
      alert('Favor revisar los valores ingresados');
    } else {
      guardarDatosFacturacion();
    }

}

async function editarMetodoPago() {
  document.getElementById('btnEditaMetodoPago').disabled = true;
  document.getElementById('secDatosPlanSuscrito').style.display = 'none';
  document.getElementById('usuariosAdmin').style.display = 'none';
  document.getElementById('secDatosPersonales').style.display = 'none';
  document.getElementById('secDatosFacturacion').style.display = 'none';
  document.getElementById('secModMetodoPago').style.display = 'revert';
  document.getElementById('historialCambios').style.display = 'none';
  document.getElementById('mostarConsumos').style.display = 'none';
  document.getElementById('mostrarInvoices').style.display = 'none';
  document.getElementById('btnDesuscribe').style.display = 'none';
}

async function guardarMetodoPago() {

  showLoader();  
  
  let idRegistroBACC = document.getElementById('_modRP_idRegistro').innerHTML,
      datoFormaPagoCC = document.getElementById('paymentMethod').value,
      datoNroCC = document.getElementById('creditCardNumber').value,
      datoFechaCC = document.getElementById('dueDate').value,
      datoCVV = document.getElementById('cvv').value,
      datoNombreCC = document.getElementById('ccName').value,
      datoDireccionCC = document.getElementById('ccAddress').value,
      datoCiudadCC = document.getElementById('ccCity').value;
      values = JSON.stringify({idRegistro:idRegistroBACC,
                              cambioFormaPagoCC:datoFormaPagoCC,
                              cambioNroCC:datoNroCC,
                              cambioFechaCC:datoFechaCC,
                              cambioCVV:datoCVV,
                              cambioNombreCC:datoNombreCC,
                              cambioDireccionCC:datoDireccionCC,
                              cambioCiudadCC:datoCiudadCC});

  // console.log(datoFormaPagoCC);
  // console.log(datoNroCC);
  // console.log(datoFechaCC);
  // console.log(datoCVV);
  // console.log(datoNombreCC);
  // console.log(datoDireccionCC);
  // console.log(datoCiudadCC);

  console.log(values);

  let {data} = await functionOnDemand('editarMetodoPago', {data: values});
  console.log(values, data);
  location.reload()

}

function verificaMetodoPago(){

  let ctaError = 0;
  // console.log(ctaError);

  let v_MP_FormaPago = document.getElementById('paymentMethod'),
      v_MP_NroTC = document.getElementById('creditCardNumber'),
      v_MP_FVcto = document.getElementById('dueDate'),
      v_MP_CVV = document.getElementById('cvv'),
      v_MP_Nombre = document.getElementById('ccName'),
      v_MP_Direccion = document.getElementById('ccAddress'),
      v_MP_City = document.getElementById('ccCity')

      if (v_MP_FormaPago.value.length != 0){
        if (v_MP_FormaPago.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      // console.log(ctaError);

      if (v_MP_NroTC.value.length != 0){
        if (v_MP_NroTC.validity.typeMismatch) {
          ctaError = ctaError + 1
        } else if (validaCCnumber(v_MP_NroTC.value)) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_MP_FVcto.value.length != 0){
        if (v_MP_FVcto.validity.typeMismatch) {
          ctaError = ctaError + 1
        } else if (validaDueDateCC(v_MP_FVcto.value)) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_MP_CVV.value.length != 0){
        if (v_MP_CVV.validity.typeMismatch) {
          ctaError = ctaError + 1
        } else if (validaCVV(v_MP_CVV.value)) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_MP_Nombre.value.length != 0){
        if (v_MP_Nombre.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_MP_Direccion.value.length != 0){
        if (v_MP_Direccion.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

      if (v_MP_City.value.length != 0){
        if (v_MP_City.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
        ctaError = ctaError + 1
      }
      console.log(ctaError);

    if (ctaError > 0){
      alert('Favor revisar los valores ingresados');
    } else {
      guardarMetodoPago();
    }

}

async function traeVendedor(){
  var $vendedor = document.getElementById('codSell').value

  try {
    var values = JSON.stringify({codigo:$vendedor});
    // console.log(values);
    let {data} = await functionOnDemand('traeVendedor', {data: values});
    console.log(values, data);
    if (data.vendedor != ''){
      document.getElementById('_sellerName').style.display = 'block';
      document.getElementById('_lblSell').value = data.vendedor;
    } else {
      document.getElementById('_sellerName').style.display = 'none';
      document.getElementById('_lblSell').value = '';
      document.getElementById('codSell').value = '';
      alert('Agente no vÃ¡lido');
    }
  } catch (error) {
    console.log(error);
  }
};

function validaCCnumber(ccNumber) { 
  // var m = document.getElementById("matricula").value;
  var expreg = /^\d{16}$/gm;

  if(expreg.test(ccNumber)){
    // alert("La matrÃ­cula es correcta");
    return false
  } else {
    // alert("Formato 'Fecha de Vencimiento' no es correcto");
    return true
  }
};

function validaCVV(ccCVV) { 
  // var m = document.getElementById("matricula").value;
  var expreg = /^\D*\d{3}$/

  if(expreg.test(ccCVV)){
    // alert("La matrÃ­cula es correcta");
    return false
  } else {
    // alert("Revisar cÃ³digo de verificaciÃ³n");
    return true
  }
};

function validaDueDateCC(ccDueDate) { 
  // var m = document.getElementById("matricula").value;
  var expreg = /[\d][\d][\x2F][\d][\d]/;
  
  if(expreg.test(ccDueDate)){
    // alert("La matrÃ­cula es correcta");
  } else {
    alert("Formato 'Fecha de Vencimiento' no es correcto");
    return true
  }
};

// Validaciones de Cards
//Validar min/max 
$('#numAutomatas').on('input change keyup paste', function() {
  if (this.min) this.value = Math.max(parseInt(this.min), parseInt(this.value));
  if (this.max) this.value = Math.min(parseInt(this.max), parseInt(this.value));
})

//Seleccionar Card2 (Pro)
$(document).ready(function () {
  $('#flexRadioDefault2').on('input change', function () {
    var $selectCard2 = document.getElementById('flexRadioDefault2'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard2.value == 'on'){
        $campoNumAutomatas.disabled = false;
        $campoNumAutomatas.value = $minPro;
        document.getElementById('card2').classList.add('bordercolor');
        document.getElementById('card3').classList.remove('bordercolor');
        document.getElementById('card4').classList.remove('bordercolor');
        document.getElementById('_precioAutomata').value = parseFloat(document.getElementById('precioPro').value).toFixed(2);
        document.getElementById('_horasAutomata').value = document.getElementById('horasPro').value;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanPro').innerHTML;
        document.getElementById('_precioPlan').value = parseFloat(document.getElementById('precioPro').value).toFixed(2);
        document.getElementById('numAutomatas').min = $minPro;
        document.getElementById('numAutomatas').max = $maxPro;
        $('#privacidad').prop('disabled', false);
        cal();
      }
  });
})

//Seleccionar Card3 (Business)
$(document).ready(function () {
  $('#flexRadioDefault3').on('input change', function () {
    var $selectCard3 = document.getElementById('flexRadioDefault3'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard3.value == 'on'){
        $campoNumAutomatas.disabled = false;
        $campoNumAutomatas.value = $minBusi;
        document.getElementById('card2').classList.remove('bordercolor');
        document.getElementById('card3').classList.add('bordercolor');
        document.getElementById('card4').classList.remove('bordercolor');
        document.getElementById('_precioAutomata').value = parseFloat(document.getElementById('precioBusi').value).toFixed(2);
        document.getElementById('_horasAutomata').value = document.getElementById('horasBusi').value;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanBusi').innerHTML;
        document.getElementById('_precioPlan').value = parseFloat(document.getElementById('precioBusi').value).toFixed(2);
        document.getElementById('numAutomatas').min = $minBusi;
        document.getElementById('numAutomatas').max = $maxBusi;
        $('#privacidad').prop('disabled', false);
        cal();
      }
  });
})

//Seleccionar Card4 (Corporate)
$(document).ready(function () {
  $('#flexRadioDefault4').on('input change', function () {
    var $selectCard4 = document.getElementById('flexRadioDefault4'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard4.value == 'on'){
        $campoNumAutomatas.disabled = false;
        $campoNumAutomatas.value = $minCorp;
        document.getElementById('card2').classList.remove('bordercolor');
        document.getElementById('card3').classList.remove('bordercolor');
        document.getElementById('card4').classList.add('bordercolor');
        document.getElementById('_precioAutomata').value = parseFloat(document.getElementById('precioCorp').value).toFixed(2);
        document.getElementById('_horasAutomata').value = document.getElementById('horasCorp').value;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanCorp').innerHTML;
        document.getElementById('_precioPlan').value = parseFloat(document.getElementById('precioCorp').value).toFixed(2);
        document.getElementById('numAutomatas').min = $minCorp;
        document.getElementById('numAutomatas').max = $maxCorp;
        $('#privacidad').prop('disabled', false);
        cal();
      }
  });
})

function cal() {
  let cantidad = parseInt(document.getElementById('numAutomatas').value),
      cantidadPlan = parseInt(document.getElementById('_modRP_NroAutomatas').innerText),
      planNew = document.getElementById('_planSelect').value,
      plan = document.getElementById('_modRP_TipoPlan').innerText,
      moneda = document.getElementById('_modRP_Moneda').innerText,
      nroCC = document.getElementById('_modMP_NroCC').innerText,
      nroTarjeta = nroCC.replace(/[^\d]/gi, ''),
      montoUnitario = parseFloat(document.getElementById('valorAutomata').innerText).toFixed(2) / 30,
      diasRestantes = parseInt(document.getElementById('diasRestantes').innerText),
      horasPlan = parseInt(document.getElementById('horasPlan').innerText) / 30,

      montoTotalPlan = parseFloat(document.getElementById('_modRP_MontoTotal').innerText),
      montoTotalNewPlan = parseFloat(parseFloat(document.getElementById('_precioPlan').value) * cantidad).toFixed(2),

      horasTotalPlan = parseInt(document.getElementById('horasPlan').innerText) * cantidadPlan,
      horasTotalNewPlan = parseInt(document.getElementById('_horasAutomata').value) * cantidad,

      diaFact = document.getElementById('diaProxFact').innerText,
      monto = parseFloat(diasRestantes * montoUnitario * Math.abs(cantidad - cantidadPlan)).toFixed(2),
      montoNew = parseFloat(parseFloat(document.getElementById('_precioPlan').value) / 30 * diasRestantes * cantidad).toFixed(2),
      horasProp = diasRestantes * horasPlan * Math.abs(cantidad - cantidadPlan),
      horasPropNew = diasRestantes * parseInt(document.getElementById('_horasAutomata').value) / 30 * cantidad,
      uc = document.getElementById('userConnected').innerText;

      // console.log("cantidad: " + cantidad);
      // console.log("cantidadPlan: " + cantidadPlan);
      // console.log("planNew: " + planNew);
      // console.log("plan: " + plan);
      // console.log("moneda: " + moneda);
      // console.log("nroCC: " + nroCC);
      // console.log("nroTarjeta: " + nroTarjeta);
      // console.log("montoUnitario: " + montoUnitario);
      // console.log("diasRestantes: " + diasRestantes);
      // console.log("horasPlan: " + horasPlan);

      // console.log("montoTotalPlan: " + montoTotalPlan);
      // console.log("montoTotalNewPlan: " + montoTotalNewPlan);

      // console.log("horasTotalPlan: " + horasTotalPlan);
      // console.log("horasTotalNewPlan: " + horasTotalNewPlan);

      // console.log("diaFact: " + diaFact);
      // console.log("monto: " + monto);
      // console.log("montoNew: " + montoNew);
      // console.log("horasProp: " + horasProp);
      // console.log("horasPropNew: " + horasPropNew);
      // console.log("uc: " + uc);
      // console.log("*******************************************");
    
  
  try {

    if (isNaN(cantidad)){

    }
    else{
      var precio_unitario = parseFloat(document.getElementById('_precioAutomata').value).toFixed(2);
      
      var montoTotal = parseFloat(cantidad) * parseFloat(precio_unitario);
      // console.log(parseFloat(cantidad).toFixed(2));
      // console.log(parseFloat(precio_unitario).toFixed(2));
      // console.log(montoTotal);
      document.getElementById('_numAutomata').value = document.getElementById('numAutomatas').value;
      document.getElementById('_horasTotales').value = cantidad * document.getElementById('_horasAutomata').value;
      document.getElementById('_montoNeto').value = parseFloat(montoTotal).toFixed(2);

      if (cantidad > cantidadPlan && planNew == plan){
        if (Math.abs(cantidad - cantidadPlan) == 1){
          document.getElementById("newResultado").innerHTML = 
            uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad - cantidadPlan) + '</strong>' + ' autÃ³mata mÃ¡s del mismo ' + '<strong>' + planNew + '</strong>' + '.\n\n'
            + 'El nuevo valor mensual del ' + '<strong>' + planNew + '</strong>' + ', para la prÃ³xima facturaciÃ³n serÃ¡ de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
            + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.\n\n'
            + 'Ahora bien, para que este cambio se efectue, se realizarÃ¡ un cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta  + '</strong>' + ' '
            + 'por un monto proporcional de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + monto + '</strong>' + '.-\n\n'
            + 'Al verificarse este pago, se reflejara la actualizaciÃ³n del ' + '<strong>' + planNew + '</strong>' + ', con un aumento de '
            + '<strong>' + horasProp + '</strong>' + ' horas para el mes en curso.';
        } else {
          document.getElementById("newResultado").innerHTML = 
          uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad - cantidadPlan) + '</strong>' + ' autÃ³matas mÃ¡s del mismo ' + '<strong>' + planNew + '</strong>' + '.\n\n'
          + 'El nuevo valor mensual del ' + '<strong>' + planNew + '</strong>' + ', para la prÃ³xima facturaciÃ³n serÃ¡ de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
          + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.\n\n'
          + 'Ahora bien, para que este cambio se efectue, se realizarÃ¡ un cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta  + '</strong>' + ' '
          + 'por un monto proporcional de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + monto + '</strong>' + '.-\n\n'
          + 'Al verificarse este pago, se reflejara la actualizaciÃ³n del ' + '<strong>' + planNew + '</strong>' + ', con un aumento de '
          + '<strong>' + horasProp + '</strong>' + ' horas para el mes en curso.';
        };
      } else if (cantidad < cantidadPlan && planNew == plan) {

        if (Math.abs(cantidad - cantidadPlan) == 1 && planNew == plan){
          document.getElementById("newResultado").innerHTML = 
            uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad - cantidadPlan) + '</strong>' + ' autÃ³mata menos del mismo ' + '<strong>' + planNew + '</strong>' + '.\n\n'
            + 'El nuevo valor mensual del ' + '<strong>' + planNew + '</strong>' + ', para la prÃ³xima facturaciÃ³n serÃ¡ de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
            + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + ', con cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta + '</strong>' + '.\n\n';
        } else {
          document.getElementById("newResultado").innerHTML = 
            uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad - cantidadPlan) + '</strong>' + ' autÃ³matas menos del mismo ' + '<strong>' + planNew + '</strong>' + '.\n\n'
            + 'El nuevo valor mensual del ' + '<strong>' + planNew + '</strong>' + ', para la prÃ³xima facturaciÃ³n serÃ¡ de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
            + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + ', con cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta + '</strong>' + '.\n\n';
        };
      } else if (cantidad == cantidadPlan && planNew == plan) {
          document.getElementById("newResultado").innerHTML = 
            uc + ', el plan mantiene las mismas condiciones' + '.';

      } else if (planNew != plan && montoTotalPlan < montoTotalNewPlan && horasTotalPlan < horasTotalNewPlan) {
        if (Math.abs(cantidad) == 1){
          document.getElementById("newResultado").innerHTML =
            uc + ', seleccionaste un nuevo plan llamado ' + '<strong>' + planNew + '</strong>' + ' con ' + '<strong>' + cantidad + '</strong>' + ' autÃ³mata.' + '\n\n'
            + 'El valor mensual de este nuevo ' + '<strong>' + planNew + '</strong>' + ', se verÃ¡ reflejado en la prÃ³xima facturaciÃ³n por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
            + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.\n\n'
            + 'Ahora bien, para que este cambio se efectue, se realizarÃ¡ un cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta  + '</strong>' + ' '
            + 'por un monto proporcional de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + montoNew + '</strong>' + '.-\n\n'
            + 'Al verificarse este pago, se reflejara la actualizaciÃ³n del ' + '<strong>' + planNew + '</strong>' + ', con un aumento de '
            + '<strong>' + horasPropNew + '</strong>' + ' horas para el mes en curso.';
        } else {
          document.getElementById("newResultado").innerHTML = 
          uc + ', seleccionaste un nuevo plan llamado ' + '<strong>' + planNew + '</strong>' + ' con ' + '<strong>' + cantidad + '</strong>' + ' autÃ³matas.' + '\n\n'
          + 'El valor mensual de este nuevo ' + '<strong>' + planNew + '</strong>' + ', se verÃ¡ reflejado en la prÃ³xima facturaciÃ³n por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
          + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.\n\n'
          + 'Ahora bien, para que este cambio se efectue, se realizarÃ¡ un cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta  + '</strong>' + ' '
          + 'por un monto proporcional de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + montoNew + '</strong>' + '.-\n\n'
          + 'Al verificarse este pago, se reflejara la actualizaciÃ³n del ' + '<strong>' + planNew + '</strong>' + ', con un aumento de '
          + '<strong>' + horasPropNew + '</strong>' + ' horas para el mes en curso.';    
        }
      } else if (planNew != plan && montoTotalPlan >= montoTotalNewPlan || horasTotalPlan >= horasTotalNewPlan) {
        if (Math.abs(cantidad) == 1){
          document.getElementById("newResultado").innerHTML = 
            uc + ', seleccionaste un nuevo plan llamado ' + '<strong>' + planNew + '</strong>' + ' con ' + '<strong>' + cantidad + '</strong>' + ' autÃ³mata.' + '\n\n'
            + 'El valor mensual de este nuevo ' + '<strong>' + planNew + '</strong>' + ', se verÃ¡ reflejado en la prÃ³xima facturaciÃ³n por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
            + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + ', con cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta + '</strong>' + '.';
        } else {
          document.getElementById("newResultado").innerHTML = 
          uc + ', seleccionaste un nuevo plan llamado ' + '<strong>' + planNew + '</strong>' + ' con ' + '<strong>' + cantidad + '</strong>' + ' autÃ³matas.' + '\n\n'
          + 'El valor mensual de este nuevo ' + '<strong>' + planNew + '</strong>' + ', se verÃ¡ reflejado en la prÃ³xima facturaciÃ³n por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + '.- '
          + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + ', con cargo en la tarjeta de crÃ©dito terminada en ' + '<strong>' + nroTarjeta + '</strong>' + '.';       
        }
      }
    }
      }catch (e) {
    }
};

async function showDatosPlan() {
  document.getElementById('newResultadoModal').innerHTML = (document.getElementById('newResultado').innerHTML).replace(/(\n)/g,'<br>');
  modalConfirmPlan.show();
}

async function saveDatosPlan() {
  
  modalConfirmPlan.hide();
  showLoader();

  let idRegistroBACC = document.getElementById('_modRP_idRegistro').innerHTML,
      datoPlan = document.getElementById('_planSelect').value,
      datoPaisUser = document.getElementById('_modRP_PaisUser').innerHTML,
      datoEmailUser = document.getElementById('_modDP_EmailUser').innerHTML,
      datoTipoEntidad = document.getElementById('_modRP_TipoEntidad').innerHTML,
      datoPrecioPlan = parseFloat(document.getElementById('_precioPlan').value),
      datoNroBots = parseInt(document.getElementById('_numAutomata').value),
      datoHorasBots = parseInt(document.getElementById('_horasAutomata').value),
      values = JSON.stringify({idRegistro: idRegistroBACC,
                               cambioPais: datoPaisUser,
                               cambioEmail: datoEmailUser,
                               cambioPlan: datoPlan,
                               cambioTipoEntidad: datoTipoEntidad,
                               cambioPrecioPlan: datoPrecioPlan,
                               cambioNroBots: datoNroBots,
                               cambioHorasBots: datoHorasBots
                              });

  // console.log(datoVatId);
  // console.log(datoNombre);
  // console.log(datoContacto);
  // console.log(datoDireccion);
  // console.log(datoCiudad);
  // console.log(datoZipCode);
  // console.log(datoEmail1);
  // console.log(datoEmail2);
  // console.log(datoEmail3);
  // console.log(datoEmail4);
  // console.log(datoCodAgente);

  // console.log(values);  
  let {data} = await functionOnDemand('cambiaPlan', {data: values});
  location.reload()

}

async function bajaServicio() {
  
  modalConfirmPlan.hide();
  showLoader();

  let idRegistroBACC = document.getElementById('_modRP_idRegistro').innerHTML,
      correoUser = document.getElementById('_modDP_EmailUser').value,
      values = JSON.stringify({idRegistro: idRegistroBACC,
                               correoUser: correoUser
                              });

  // console.log(values);  
  let {data} = await functionOnDemand('bajaServicio', {data: values});
  console.log(values, data);
  location.reload()

}

//---------Tooltip---------------
tippy('#nameBACC', {
  content: 'Ingrese un nombre para identificar su Billing Account. Ejemplo: la empresa o Ã¡rea que lo usara, el uso que se le darÃ¡ o algÃºn concepto que le permita diferenciarlo al momento de tener mÃ¡s de un Billing Account.',
})
tippy('#dueDate', {
  content: 'Ingrese en formato "mm/yy"',
})
tippy('#cvv', {
  content: 'CÃ³digo verificaciÃ³n Tarjeta de CrÃ©dito.',
})
tippy('#ccName', {
  content: 'Ingrese su nombre tal como aparece en su Tarjeta de CrÃ©dito.',
})

//---------onload---------------
window.onload = function(){
  console.log(vsn);
  $('#privacidad').prop('disabled', true);
  // loaderTest();
};