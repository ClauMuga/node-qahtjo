const vsnS = 'GMH | ScriptNew_v7 | 2022.11.03.02',
      $minFree = 1,
      $maxFree = 1,
      $minPro = 1,
      $maxPro = 10,
      $minBusi = 10,
      $maxBusi = 50,
      $minCorp = 50,
      $maxCorp = 100000000

//Boton siguiente1
$(document).ready(function () {
  $('#pais').on('input change', function () {
    var $pais = document.getElementById('pais');
      if ($pais.value.length != 0) {
        $('#btnSiguiente1').prop('disabled', false);
      }
      else {
        $('#btnSiguiente1').prop('disabled', true);
      }

      var value = $(this).val();
      $("#clonPais").val(value);
  });
});

function revisaPais(){
  let _pais = document.getElementById('pais');
  if (_pais != null){
    if ( document.getElementById('pais').value.length != 0 ) {
      $('#btnSiguiente1').prop('disabled', false);
      $("#clonPais").val(_pais.value);
    } 
    else {
      $('#btnSiguiente1').prop('disabled', true);
    }
  }
};

//Boton siguiente2
$(document).ready(function () {
  $('#entityType').on('input change', function () {
    var $entityType = document.getElementById('entityType');
      if ($entityType.value.length != 0) {
        $('#btnSiguiente2').prop('disabled', false);
      }
      else {
        $('#btnSiguiente2').prop('disabled', true);
      }
  });
});

//Boton Contratar
$(document).ready(function () {
  $('#privacidad').on('input change', function () {
    var $privacidad = document.getElementById('privacidad');
      if (!($privacidad.checked == true)) {
        $('#btnGuardar').prop('disabled', true);
      }
      else {
        $('#btnGuardar').prop('disabled', false);
      }
  });
});

//SelecciÃ³n Metodo de Pago
$(document).ready(function () {
  $('#_metodoPago').on('input change', function () {
    console.log("Evaluando Metodo de Pago: " + document.getElementById('paymentMethod').value);
    var metodoPago = document.getElementById('paymentMethod');
      if (metodoPago.value.length != 0) {
          if(metodoPago.value == 'TC'){
            console.log("Aqui entra si es TC");
            document.getElementById('_camposTRX').style.display = 'none';
            document.getElementById('_camposTC').style.display = 'flex';
            document.getElementById('info_save').style.display = 'block';
            window.scrollTo(0, document.body.scrollHeight);
          } else if (metodoPago.value == 'TRX'){
            console.log("Aqui entra si es TRX");
            document.getElementById('_camposTC').style.display = 'none';
            document.getElementById('_camposTRX').style.display = 'flex';
            document.getElementById('info_save').style.display = 'block';
            window.scrollTo(0, document.body.scrollHeight);
          } else {
            console.log("Aqui entra si es no hay nada seleccionado");
            document.getElementById('_camposTC').style.display = 'none';
            document.getElementById('_camposTRX').style.display = 'none';
            document.getElementById('info_save').style.display = 'none';
            // document.getElementById('_camposTRX').style.display = 'none';
          };
      }
      else {
        console.log("Aqui entra si esta vacio el campo de seleccion");
        document.getElementById('_camposTC').style.display = 'none';
        document.getElementById('_camposTRX').style.display = 'none';
        document.getElementById('info_save').style.display = 'none';
      }

      // var value = $(this).val();
      // $("#clonPais").val(value);
  });
});

//Boton billingAccount
$(document).ready(function () {
  $('#billingAccount').on('input change', function () {
    var $pais = document.getElementById('billingAccount');
    // console.log($pais.value.length);
      if ($pais.value.length != 0) {
          $('#btnEditaFacturacion').prop('disabled', false);
          // $('#btnEditaMetodoPago').prop('disabled', false);
          $('#btnVerConsumoSA').prop('disabled', false);
          $('#btnVerInvoices').prop('disabled', false);
          $('#btnDatosPlan').prop('disabled', false);
          $('#btnModificaPlan').prop('disabled', false);
          $('#btnTraeDatosBACC').prop('disabled', false);
      }
      else {
          $('#btnEditaFacturacion').prop('disabled', true);
          // $('#btnEditaMetodoPago').prop('disabled', true);
          $('#btnVerConsumoSA').prop('disabled', true);
          $('#btnVerInvoices').prop('disabled', true);
          $('#btnDatosPlan').prop('disabled', true);
          $('#btnModificaPlan').prop('disabled', true);
          $('#btnTraeDatosBACC').prop('disabled', true);
      }
  });
});

//Seleccionar Card1 (Free)
$(document).ready(function () {
  $('#flexRadioDefault1').on('input change', function () {
    var $selectCard1 = document.getElementById('flexRadioDefault1'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard1.value == 'on'){
        $campoNumAutomatas.disabled = true;
        $campoNumAutomatas.value = 1;
        document.getElementById('card1').classList.add('bordercolor');
        document.getElementById('card2').classList.remove('bordercolor');
        document.getElementById('card3').classList.remove('bordercolor');
        document.getElementById('card4').classList.remove('bordercolor');
        document.getElementById('_precioAutomata').value = 0;
        // document.getElementById('numAutomata').value = 1;
        document.getElementById('_montoNeto').value = 0;
        // document.getElementById('_montoIVA').value = 0;
        // document.getElementById('_montoRetencion').value = 0;
        // document.getElementById('_montoTotal').value = 0;
        document.getElementById('_horasAutomata').value = document.getElementById('horasFree').innerText;
        document.getElementById('numAutomatas').min = $minFree;
        document.getElementById('numAutomatas').max = $maxFree;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanTrial').innerHTML;
        window.scrollTo(0, document.body.scrollHeight);
        // $campoNumAutomatas.value = 1;
        // $campoNumAutomatas.disabled = true;
        cal();        
        $('#btnSiguiente3').prop('disabled', false);
      }
  });
});

//Seleccionar Card2 (Pro)
$(document).ready(function () {
  $('#flexRadioDefault2').on('input change', function () {
    var $selectCard2 = document.getElementById('flexRadioDefault2'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard2.value == 'on'){
        $campoNumAutomatas.disabled = false;
        $campoNumAutomatas.value = 1;
        document.getElementById('card1').classList.remove('bordercolor');
        document.getElementById('card2').classList.add('bordercolor');
        document.getElementById('card3').classList.remove('bordercolor');
        document.getElementById('card4').classList.remove('bordercolor');  
        // document.getElementById('_precioAutomata').value = nroDecimal.format(document.getElementById('precioPro').innerText);
        document.getElementById('_precioAutomata').value = parseFloat(document.getElementById('precioPro').innerText).toFixed(2);
        document.getElementById('_horasAutomata').value = document.getElementById('horasPro').innerText;
        document.getElementById('_numAutomata').value = document.getElementById('numAutomatas').value;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanPro').innerHTML;
        document.getElementById('_precioPlan').value = parseFloat(document.getElementById('precioPro').innerText).toFixed(2);
        document.getElementById('numAutomatas').min = $minPro;
        document.getElementById('numAutomatas').max = $maxPro;
        cal();
        $('#btnSiguiente3').prop('disabled', false);
        window.scrollTo(0, document.body.scrollHeight);
      }
  });
});

//Seleccionar Card3 (Business)
$(document).ready(function () {
  $('#flexRadioDefault3').on('input change', function () {
    var $selectCard3 = document.getElementById('flexRadioDefault3'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard3.value == 'on'){
        $campoNumAutomatas.disabled = false;
        $campoNumAutomatas.value = 10;
        document.getElementById('card1').classList.remove('bordercolor');
        document.getElementById('card2').classList.remove('bordercolor');
        document.getElementById('card3').classList.add('bordercolor');
        document.getElementById('card4').classList.remove('bordercolor');
        // document.getElementById('_precioAutomata').value = nroDecimal.format(document.getElementById('precioBusi').innerText);
        document.getElementById('_precioAutomata').value = parseFloat(document.getElementById('precioBusi').innerText).toFixed(2);
        document.getElementById('_horasAutomata').value = document.getElementById('horasBusi').innerText;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanBusi').innerHTML;
        document.getElementById('_precioPlan').value = parseFloat(document.getElementById('precioBusi').innerText).toFixed(2);
        // document.getElementById('_numAutomata').value = document.getElementById('numAutomatas').value;
        document.getElementById('numAutomatas').min = $minBusi;
        document.getElementById('numAutomatas').max = $maxBusi;
        cal();
        $('#btnSiguiente3').prop('disabled', false);
        window.scrollTo(0, document.body.scrollHeight);
      }
  });
});

//Seleccionar Card4 (Corporate)
$(document).ready(function () {
  $('#flexRadioDefault4').on('input change', function () {
    var $selectCard4 = document.getElementById('flexRadioDefault4'),
        $campoNumAutomatas = document.getElementById('numAutomatas');
      if ($selectCard4.value == 'on'){
        $campoNumAutomatas.disabled = false;
        $campoNumAutomatas.value = 50;
        document.getElementById('card1').classList.remove('bordercolor');
        document.getElementById('card2').classList.remove('bordercolor');
        document.getElementById('card3').classList.remove('bordercolor');
        document.getElementById('card4').classList.add('bordercolor');
        // document.getElementById('_precioAutomata').value = nroDecimal.format(document.getElementById('precioCorp').innerText));
        document.getElementById('_precioAutomata').value = parseFloat(document.getElementById('precioCorp').innerText).toFixed(2);
        document.getElementById('_horasAutomata').value = document.getElementById('horasCorp').innerText;
        document.getElementById('_planSelect').value = document.getElementById('_nombrePlanCorp').innerHTML;
        document.getElementById('_precioPlan').value = parseFloat(document.getElementById('precioCorp').innerText).toFixed(2);
        // document.getElementById('_numAutomata').value = document.getElementById('numAutomatas').value;
        document.getElementById('numAutomatas').min = $minCorp;
        document.getElementById('numAutomatas').max = $maxCorp;
        cal();
        $('#btnSiguiente3').prop('disabled', false);
        window.scrollTo(0, document.body.scrollHeight);
      }
  });
});

//Validar min/max 
$('#numAutomatas').on('input change keyup paste', function() {
  if (this.min) this.value = Math.max(parseInt(this.min), parseInt(this.value));
  if (this.max) this.value = Math.min(parseInt(this.max), parseInt(this.value));
});

// ---------async functions---------------
async function autorizado(){
  showLoader();

  var $uc = document.getElementById('userConnected').innerText,
      $btnAutorizado = document.getElementById('btnSiguiente1'),
      $campoPais = document.getElementById('pais'),
      $lblPais = document.getElementById('lblPais'),
      $selectSaludo = document.getElementById('selectSaludo'),
      $selectPais = document.getElementById('selectPais')
  
      $('#btnSiguiente1').prop('disabled', true);

  try {
    var values = JSON.stringify({pais:$campoPais.value});
    // console.log(values);
    let {data} = await functionOnDemand('autorizado', {data: values});
    console.log(values, data);

    const autorizadoId = document.getElementById('autorizado2');
    if (data.autorizado == 'No Autorizado'){
      $campoPais.style.display = 'none';
      $btnAutorizado.style.display = 'none';
      $lblPais.style.display = 'none';
      $selectSaludo.style.display = 'none';
      $selectPais.style.display = 'none';
      autorizadoId.innerText = data.autorizado == 'No Autorizado'? ($uc + ', lo lamentamos pero por el momento no prestamos servicios en su paÃ­s.'): '';
    }else if (data.autorizado == ''){
      $campoPais.style.display = 'none';
      $btnAutorizado.style.display = 'none';
      $lblPais.style.display = 'none';
      $selectSaludo.style.display = 'none';
      $selectPais.style.display = 'none';
      autorizadoId.innerText = data.autorizado == ''? ($uc + ', debe seleccionar un paÃ­s vÃ¡lido para continuar.'): '';
    }
    else {
      $campoPais.disabled = true;
      $selectPais.style.display = 'none';
      $btnAutorizado.style.display = 'none';
      document.getElementById('partTipoPersona').style.display = 'block';
    }
  
  } catch (error) {
    console.log(error);
  }
  hideLoader();
};

async function traePrecios(){
  showLoader();
  var $campoTipoPersona = document.getElementById('entityType'),
      $selectTipoPersona = document.getElementById('selectTipoPersona'),  
      $btnTipoPersona = document.getElementById('btnSiguiente2'),
      $campoPais = document.getElementById('pais');

  $('#btnSiguiente2').prop('disabled', true);

  try {
    var values = JSON.stringify({pais:$campoPais.value, 
                                 tipoPersona:$campoTipoPersona.value,
                                 idioma:MB.locale});
    let {data} = await functionOnDemand('traePrecios', {data: values});
    console.log(values, data);

    document.getElementById('clonPaisPersona').style.display = 'block';
    document.getElementById('partSelectPais').style.display = 'none';
    document.getElementById('partTipoPersona').style.display = 'none';

    $selectTipoPersona.style.display = 'none';
    $campoTipoPersona.disabled = true;
    $btnTipoPersona.style.display = 'none';
    document.getElementById('partSelectPlan').style.display = 'block';
    document.getElementById('partNumAutomata').style.display = 'block';
    
    document.getElementById('precioFree2').innerText = data.precioFree;
    document.getElementById('precioPro').innerText = data.precioPro;
    document.getElementById('precioPro2').innerText = data.precioPro;
    document.getElementById('precioBusi').innerText = data.precioBusi;
    document.getElementById('precioBusi2').innerText = data.precioBusi;
    document.getElementById('precioCorp').innerText = data.precioCorp;
    document.getElementById('precioCorp2').innerText = data.precioCorp;
    document.getElementById('monedaFree2').innerText = data.monedaFree;
    document.getElementById('monedaPro2').innerText = data.monedaPro;
    document.getElementById('monedaBusi2').innerText = data.monedaBusi;
    document.getElementById('monedaCorp2').innerText = data.monedaCorp;
    document.getElementById('periodicidadFree2').innerText = data.periodicidadFree;
    document.getElementById('periodicidadPro2').innerText = data.periodicidadPro;
    document.getElementById('periodicidadBusi2').innerText = data.periodicidadBusi;
    document.getElementById('periodicidadCorp2').innerText = data.periodicidadCorp;
    document.getElementById('horasFree2').innerText = data.horasFree;
    document.getElementById('horasPro2').innerText = data.horasPro;
    document.getElementById('horasBusi2').innerText = data.horasBusi;
    document.getElementById('horasCorp2').innerText = data.horasCorp;
    document.getElementById('horasFree').innerText = data.horasFree;
    document.getElementById('horasPro').innerText = data.horasPro;
    document.getElementById('horasBusi').innerText = data.horasBusi;
    document.getElementById('horasCorp').innerText = data.horasCorp;    
    document.getElementById('numAutoMinFree2').innerText = data.numAutoMinFree;
    document.getElementById('numAutoMaxFree2').innerText = data.numAutoMaxFree;
    document.getElementById('numAutoMinPro2').innerText = data.numAutoMinPro;
    document.getElementById('numAutoMaxPro2').innerText = data.numAutoMaxPro;
    document.getElementById('numAutoMinBusi2').innerText = data.numAutoMinBusi;
    document.getElementById('numAutoMaxBusi2').innerText = data.numAutoMaxBusi;
    document.getElementById('numAutoMinCorp2').innerText = data.numAutoMinCorp;
    document.getElementById('numAutoMaxCorp2').innerText = data.numAutoMaxCorp;

    document.getElementById('mesCurso').innerText = data.mesCurso;
    document.getElementById('diasRestantes').innerText = data.diasRestantes;
    document.getElementById('diasMes').innerText = data.diasMes;
    document.getElementById('diaProxFact').innerText = data.diaProxFact;
    document.getElementById('monedaPlan').innerText = data.monedaPlan;
    document.getElementById('dias30Mas').innerText = data.dias30Mas;
    
    document.getElementById('_lblMontoNeto').innerText = data.txt_lblMontoFinal;
    // document.getElementById('clonPais').innerText = data.txt_lblMontoFinal;
    document.getElementById('clonPersona').value = data.txt_tipoEntidadValor;
    
  } catch (error) {
    console.log(error);
  }
  hideLoader();
};

async function aceptaPlan(){
  console.log('proceso: AceptaPlan')
  showLoader();
  $('#btnSiguiente3').prop('disabled', true);
  var $campoPais = document.getElementById('pais'),

      $datosPlan = document.getElementById('datosPlan'),
      $selectTipoPersona = document.getElementById('entityType'),
      $selectSaludo = document.getElementById('selectSaludo'),
      $textInicio = document.getElementById('partTextInicio'),

      noContinuar = '',
      $tipoPlan = '',
      $numAutomatas = parseInt(document.getElementById('numAutomatas').value),
      $planFree = document.getElementById('flexRadioDefault1').checked,
      $planPro = document.getElementById('flexRadioDefault2').checked,
      $planBusi = document.getElementById('flexRadioDefault3').checked,
      $planCorp = document.getElementById('flexRadioDefault4').checked
      
      console.log('Comienza revisiÃ³n');
      console.log($numAutomatas);

      if ($planFree == true){
        $tipoPlan = 'planFree';
        console.log($tipoPlan);
        if($numAutomatas >= $minFree && $numAutomatas <= $maxFree){
        } else{
          console.log('No continuar: ' + $tipoPlan);
          noContinuar = true;          
        };
      } else if ($planPro == true){
        $tipoPlan = 'planPro';
        console.log($tipoPlan);
        if($numAutomatas >= $minPro && $numAutomatas <= $maxPro){
        } else{
          console.log('No continuar: ' + $tipoPlan);
          noContinuar = true;          
        };
      } else if ($planBusi == true){
        $tipoPlan = 'planBusi';
        console.log($tipoPlan);
        if($numAutomatas >= $minBusi && $numAutomatas <= $maxBusi){
        } else{
          console.log('No continuar: ' + $tipoPlan);
          noContinuar = true;          
        };
      } else if ($planCorp == true){
        $tipoPlan = 'planCorp';
        console.log($tipoPlan);
        if($numAutomatas >= $minCorp && $numAutomatas <= $maxCorp){
        } else{
          console.log('No continuar: ' + $tipoPlan);
          noContinuar = true;          
        };
      };

        if(noContinuar){
          console.log('sale del proceso');
          hideLoader();
          $('#btnSiguiente3').prop('disabled', false);
          return false
        };

  try {
    var values = JSON.stringify({pais:$campoPais.value, 
                                 tipoPersona:$selectTipoPersona.value, 
                                 tipoPlan:$tipoPlan, 
                                 numAutomatas:$numAutomatas, 
                                 idioma:MB.locale});
    let {data} = await functionOnDemand('aceptaPlan', {data: values});
    console.log(values, data);

    $selectSaludo.style.display = 'none';
    $textInicio.style.display = 'none';
    $datosPlan.style.display = 'none';
      document.getElementById('_datosPlanSelect').style.display = 'block';
      document.getElementById('_nombreBACC').style.display = 'block';
      document.getElementById('_datosPersonales').style.display = 'block';
      document.getElementById('_datosFacturacion').style.display = 'block';
      document.getElementById('_metodoPago').style.display = 'block';

    if (data.tipoEntidad == 'PJ' || data.tipoEntidad == 'Empresa'){
      document.getElementById('inputAttentionDIV').style.display = 'block'
      // document.getElementById('_lblValorTotal').innerText = data.txt_tipoMontoFinal;
      $('#vatName').attr('placeholder','Ingrese ' + data.vatName);
      $('#name').attr('placeholder','Ingrese RazÃ³n Social');
    }else{
      document.getElementById('inputAttentionDIV').style.display = 'none';
      $('#vatName').attr('placeholder','Ingrese ' + data.vatName);
      $('#name').attr('placeholder','Ingrese Nombre');
    }

      if(data.CE == true){
        document.getElementById('divVatNumber').style.display = 'revert';
        document.getElementById('_lblVatNumber').innerText = data.grid_DF_vatNumber + ':';
      }

      document.getElementById('_lblName').innerText = data.txt_lblNombre;
      document.getElementById('_lblAddress').innerText = data.txt_lblDireccion;
      document.getElementById('_lblCity').innerText = data.grid_DF_Ciudad;
      document.getElementById('_lblZipCode').innerText = data.grid_DF_ZipCode;
      document.getElementById('_lblEmail1').innerText = data.grid_DF_EmailContacto1;
      document.getElementById('_lblEmail2').innerText = data.grid_DF_EmailContacto2;
      document.getElementById('_lblEmail3').innerText = data.grid_DF_EmailContacto3;
      document.getElementById('_lblEmail4').innerText = data.grid_DF_EmailContacto4;
      document.getElementById('_lblCodSell').innerText = data.grid_DF_codAgente;

      document.getElementById('_lblValorTotal').innerText = data.txt_tipoMontoFinal;
      
      document.getElementById('_country').value = data.pais;
      document.getElementById('_entityType').value = data.tipoEntidad //=='PJ'?'Empresa':'Persona';
      document.getElementById('_plan').value = data.tipoPlan;
      document.getElementById('_moneda').value = data.moneda //txt_moneda =='US'?'USD':'EUR';
      document.getElementById('_numeroAutomatas').value = data.numAutomatas;
      // document.getElementById('_precioNeto').value = data.precioNeto;
      // document.getElementById('_valorIVA').value = data.iva;
      // document.getElementById('_valorRetencion').value = data.retencion;
      document.getElementById('_valorTotal').value = data.precio;
      document.querySelector('#_lblVatName').innerText = data.vatName + ':';
    
  } catch (error) {
    console.log(error);
  }
  hideLoader();
};

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

async function saveSuscriptor(){
  showLoader();
  $('#btnGuardar').prop('disabled', true);

  let DPlan_Pais = document.getElementById('_country').value,
      DPlan_TipoPer = document.getElementById('_entityType').value =='Empresa'?'PJ':'PN',
      DPlan_TipoPlan = '',
      DPlan_NroAuto = document.getElementById('_numeroAutomatas').value,
      DPlan_Moneda = document.getElementById('_moneda').value,
      nombreBACC = document.getElementById('nameBACC').value,
      DPers_Nombre = document.getElementById('nameContact').value,
      DPers_Apellido = document.getElementById('lastName').value,
      DPers_Email = document.getElementById('email').value,
      DPers_Phone = document.getElementById('phoneContact').value,
      DFact_TaxId = document.getElementById('taxId').value,
      DFact_VatPercent = document.getElementById('porcIVA2').value,
      DFact_WithholdingPercent = document.getElementById('porcRetencion2').value,
      DFact_Name = document.getElementById('name').value,
      DFact_Attention = document.getElementById('attention').value,
      DFact_Address = document.getElementById('address').value,
      DFact_City = document.getElementById('city').value,
      DFact_ZipCode = document.getElementById('zipCode').value,
      DFact_Email_C1 = document.getElementById('email1').value,
      DFact_Email_C2 = document.getElementById('email2').value,
      DFact_Email_C3 = document.getElementById('email3').value,
      DFact_Email_C4 = document.getElementById('email4').value,
      DFact_codAgente = document.getElementById('codSell').value,
      MPago_FormaPago = document.getElementById('paymentMethod').value,
      MPago_NroTC = document.getElementById('creditCardNumber').value,
      MPago_FVcto = document.getElementById('dueDate').value,
      MPago_CVV = document.getElementById('cvv').value,
      MPago_Nombre = document.getElementById('ccName').value,
      MPago_Direccion = document.getElementById('ccAddress').value,
      MPago_City = document.getElementById('ccCity').value,
      MPago_Country = document.getElementById('_country').value,
      OTprivacidad = document.getElementById('privacidad').checked,
      OTinfoComercial = document.getElementById('infoComercial').checked

      // console.log(document.getElementById('_lblVatName').value)
      console.log((document.getElementById('_plan').value));
      if (document.getElementById('_plan').value == 'Plan Trial'){
        DPlan_TipoPlan = 'planFree';
      } else if (document.getElementById('_plan').value == 'Plan Pro'){
        DPlan_TipoPlan = 'planPro';
      } else if (document.getElementById('_plan').value == 'Plan Business'){
        DPlan_TipoPlan = 'planBusi';
      } else if (document.getElementById('_plan').value == 'Plan Corporate'){
        DPlan_TipoPlan = 'planCorp';
      }      
      // v_tipoPersona = document.getElementById('_entityType').value
      // console.log(document.getElementById('_entityType').value =='Empresa'?'PJ':'PN');

  var values = JSON.stringify({nameBACC:nombreBACC, status:'Inactivo', sendMailCreatedBA:'xEnviar', country:DPlan_Pais, entityType:DPlan_TipoPer, tipoPlan:DPlan_TipoPlan, 
                               numAutomatas:DPlan_NroAuto, moneda:DPlan_Moneda, nameContact:DPers_Nombre, lastName:DPers_Apellido, 
                               email:DPers_Email, phone:DPers_Phone, taxId:DFact_TaxId, VatPercent:DFact_VatPercent, 
                               WithholdingPercent:DFact_WithholdingPercent, name:DFact_Name, attention:DFact_Attention, address:DFact_Address,
                               city:DFact_City, zipCode:DFact_ZipCode, email1:DFact_Email_C1, email2:DFact_Email_C2, email3:DFact_Email_C3, 
                               email4:DFact_Email_C4, cogAgente: DFact_codAgente, paymentMethod:MPago_FormaPago, creditCardNumber:MPago_NroTC, 
                               dueDate:MPago_FVcto, cvv:MPago_CVV, ccName:MPago_Nombre, ccAddress:MPago_Direccion, ccCity:MPago_City, 
                               ccCountry:MPago_Country, aceptaPoliticas:OTprivacidad, aceptaInfoComercial:OTinfoComercial});
  console.log(values);
  try {
  let {data} = await functionOnDemand('saveSuscriptor', {data: values});
  console.log(values, data);

  document.getElementById('_nombreBACC').style.display = 'none';
  document.getElementById('_datosPlanSelect').style.display = 'none';
  document.getElementById('_datosPersonales').style.display = 'none';
  document.getElementById('_datosFacturacion').style.display = 'none';
  document.getElementById('_metodoPago').style.display = 'none';
  document.getElementById('_resumenFinal').style.display = 'block';

  //Mensaje cliente autorizado
  $('#_respBL').html(data.respOt_bl);

  //Datos Resumen Plan Contratado
  $('#_respRP_PaisUser').html(data.respRP_paisUser);
  $('#_respRP_TipoEntidad').html(data.respRP_tipoEntidad);
  $('#_respRP_TipoPlan').html(data.respRP_tipoPlan);
  $('#_respRP_NombreBACC').html(data.respRP_nombreBACC);
  $('#_respRP_NroAutomatas').html(data.respRP_nroAutomatas);
  $('#_respRP_Moneda').html(data.respRP_Moneda);
  $('#_respRP_MontoTotal').html(data.respRP_montoTotal);

  //Datos Personales
  $('#_respDP_NombreUser').html(data.respDP_nombreUser);
  $('#_respDP_ApellidoUser').html(data.respDP_apellidoUser);
  $('#_respDP_EmailUser').html(data.respDP_emailUser);
  $('#_respDP_PhonelUser').html(data.respDP_phoneUser);

  //Datos Datos FacturaciÃ³n
  $('#_respDF_VatName').html(data.respDF_vatName);
  $('#_respDF_VatId').html(data.respDF_vatId);
  $('#_respDF_Name').html(data.respDF_name);
  
  if (data.respDF_nameContact.length != 0){
    document.getElementById('_respDF_NameContact_0').style.display = 'block';
    document.getElementById('_respDF_NameContact_1').style.display = 'revert';
    $('#_respDF_NameContact_1').html(data.respDF_nameContact);
  };  
  
  $('#_respDF_Address').html(data.respDF_address);
  $('#_respDF_City').html(data.respDF_city);
  $('#_respDF_ZipCode').html(data.respDF_zipCode);

  if (data.respDF_email1.length != 0){
    document.getElementById('_respDF_Email1_0').style.display = 'block';
    document.getElementById('_respDF_Email1_1').style.display = 'revert';
    $('#_respDF_Email1_1').html(data.respDF_email1);
  };
  
  if (data.respDF_email2.length != 0){
    document.getElementById('_respDF_Email2_0').style.display = 'block';
    document.getElementById('_respDF_Email2_1').style.display = 'revert';
    $('#_respDF_Email2_1').html(data.respDF_email2);
  };

  if (data.respDF_email3.length != 0){
    document.getElementById('_respDF_Email3_0').style.display = 'block';
    document.getElementById('_respDF_Email3_1').style.display = 'revert';
    $('#_respDF_Email3_1').html(data.respDF_email3);
  };
  
  if (data.respDF_email4.length != 0){
    document.getElementById('_respDF_Email4_0').style.display = 'block';
    document.getElementById('_respDF_Email4_1').style.display = 'revert';
    $('#_respDF_Email4_1').html(data.respDF_email4);
  };
  
  $('#_respDF_CodAgente').html(data.respDF_codAgente);

  //Datos MÃ©todo Pago
  $('#_respMP_FormaPago').html(data.respMP_formaPago);
  $('#_respMP_NroCC').html(data.respMP_nroCC);
  $('#_respMP_FechaVcto').html(data.respMP_fechaVctoCC);
  $('#_respMP_CodVerificacion').html(data.respMP_codVerificacionCC);
  $('#_respMP_NameCC').html(data.respMP_nameCC);
  $('#_respMP_AddressCC').html(data.respMP_addressCC);
  $('#_respMP_CityCC').html(data.respMP_cityCC);
  $('#_respMP_CountryCC').html(data.respMP_countryCC);

  //Otros
  // $('#_respOt_InfoComercial').html(data.respOt_infoComercial);
  if (data.respOt_infoComercial == true){
    $('#_respOt_InfoComercial').html('Si');
  } else {
    $('#_respOt_InfoComercial').html('No');
  };
  
  if (data.respOt_politicaPrivacidad == true){
    $('#_respOt_PoliticaPrivacidad').html('Si');
  } else {
    $('#_respOt_PoliticaPrivacidad').html('No');
  };

  } catch (error) {
    console.log(error);
  }
  hideLoader();
};

// ---------functions---------------
function verificar(){
  let ctaError = 0;
  console.log(ctaError);

  // verificaDatosFacturacion();
  // console.log(ctaError);

  // verificaMetodoPago();
  // console.log(ctaError);


    let v_DP_NombreBACC = document.getElementById('nameBACC'),
        v_DP_Nombre = document.getElementById('nameContact').value,
        v_DP_Apellido = document.getElementById('lastName').value,
        v_DP_email = document.getElementById('email').value,
        v_DP_phone = document.getElementById('phoneContact'),
        v_DF_TaxId = document.getElementById('taxId'),
        v_DF_Name = document.getElementById('name'),
        v_DF_Attention = document.getElementById('attention'),
        v_DF_Address = document.getElementById('address'),
        v_DF_City = document.getElementById('city'),
        v_DF_ZipCode = document.getElementById('zipCode'),
        v_DF_Email_C1 = document.getElementById('email1'),
        v_DF_Email_C2 = document.getElementById('email2'),
        v_DF_Email_C3 = document.getElementById('email3'),
        v_DF_Email_C4 = document.getElementById('email4'),
        v_MP_FormaPago = document.getElementById('paymentMethod'),
        v_MP_NroTC = document.getElementById('creditCardNumber'),
        v_MP_FVcto = document.getElementById('dueDate'),
        v_MP_CVV = document.getElementById('cvv'),
        v_MP_Nombre = document.getElementById('ccName'),
        v_MP_Direccion = document.getElementById('ccAddress'),
        v_MP_City = document.getElementById('ccCity')
        v_tipoPersona = document.getElementById('_entityType').value

    // let v_MP_FormaPago = document.getElementById('paymentMethod'),
    // v_MP_NroTC = document.getElementById('creditCardNumber'),
    // v_MP_FVcto = document.getElementById('dueDate'),
    // v_MP_CVV = document.getElementById('cvv'),
    // v_MP_Nombre = document.getElementById('ccName'),
    // v_MP_Direccion = document.getElementById('ccAddress'),
    // v_MP_City = document.getElementById('ccCity')

    // let v_DF_TaxId = document.getElementById('taxId'),
    // v_DF_Name = document.getElementById('name'),
    // v_DF_Attention = document.getElementById('attention'),
    // v_DF_Address = document.getElementById('address'),
    // v_DF_City = document.getElementById('city'),
    // v_DF_ZipCode = document.getElementById('zipCode'),
    // v_DF_Email_C1 = document.getElementById('email1'),
    // v_DF_Email_C2 = document.getElementById('email2'),
    // v_DF_Email_C3 = document.getElementById('email3'),
    // v_DF_Email_C4 = document.getElementById('email4')

    if (v_DP_NombreBACC.value.length != 0){
      if (v_DP_NombreBACC.validity.typeMismatch) {
        ctaError = ctaError + 1
      } 
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_DP_NombreBACC:' + ctaError);    

    if (v_DP_phone.value.length != 0){
      if (v_DP_phone.validity.typeMismatch) {
        ctaError = ctaError + 1
      } 
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_DP_phone:' + ctaError);

    if (v_DF_TaxId.value.length != 0){
      if (v_DF_TaxId.validity.typeMismatch) {
        ctaError = ctaError + 1
      } 
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_DF_TaxId:' + ctaError);

    if (v_DF_Name.value.length != 0){
      if (v_DF_Name.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
        ctaError = ctaError + 1
    };
    console.log('v_DF_Name:' + ctaError);

    if (v_tipoPersona == 'Empresa'){    
      if (v_DF_Attention.value.length != 0){
        if (v_DF_Attention.validity.typeMismatch) {
          ctaError = ctaError + 1
        }
      } else {
          ctaError = ctaError + 1
      };
      console.log('v_DF_Attention:' + ctaError);
    }

    if (v_DF_Address.value.length != 0){
      if (v_DF_Address.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
        ctaError = ctaError + 1
    };
    console.log('v_DF_Address:' + ctaError);

    if (v_DF_City.value.length != 0){
      if (v_DF_City.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_DF_City:' + ctaError);

    if (v_DF_ZipCode.value.length != 0){
      if (v_DF_ZipCode.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_DF_ZipCode:' + ctaError);

    if (v_DF_Email_C1.value.length != 0){
      if (v_DF_Email_C1.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    };
    console.log('v_DF_Email_C1:' + ctaError);

    if (v_DF_Email_C2.value.length !=0){
      if (v_DF_Email_C2.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    };
    console.log('v_DF_Email_C2:' + ctaError);
    
    if (v_DF_Email_C3.value.length != 0){
      if (v_DF_Email_C3.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    };
    console.log('v_DF_Email_C3:' + ctaError);
    
    if (v_DF_Email_C4.value.length != 0){
      if (v_DF_Email_C4.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    };
    console.log('v_DF_Email_C4:' + ctaError);

    if (v_MP_FormaPago.value.length != 0){
      if (v_MP_FormaPago.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_MP_FormaPago:' + ctaError);

    if (v_MP_NroTC.value.length != 0){
      if (v_MP_NroTC.validity.typeMismatch) {
        ctaError = ctaError + 1
      } else if (validaCCnumber(v_MP_NroTC.value)){
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_MP_NroTC:' + ctaError);

    if (v_MP_FVcto.value.length != 0){
      if (v_MP_FVcto.validity.typeMismatch) {
        ctaError = ctaError + 1
      } else if (validaDueDateCC(v_MP_FVcto.value)) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_MP_FVcto:' + ctaError);

    if (v_MP_CVV.value.length != 0){
      if (v_MP_CVV.validity.typeMismatch) {
        ctaError = ctaError + 1
      } else if (validaCVV(v_MP_CVV.value)) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_MP_CVV:' + ctaError);

    if (v_MP_Nombre.value.length != 0){
      if (v_MP_Nombre.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_MP_Nombre:' + ctaError);
    
    if (v_MP_Direccion.value.length != 0){
      if (v_MP_Direccion.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    };
    console.log('v_MP_Direccion:' + ctaError);

    if (v_MP_City.value.length != 0){
      if (v_MP_City.validity.typeMismatch) {
        ctaError = ctaError + 1
      }
    } else {
      ctaError = ctaError + 1
    }
    console.log('v_MP_City:' + ctaError);
    

    if (ctaError > 0){
      alert('Favor revisar campos destacados');
    } else {

      if (v_tipoPersona == 'Empresa'){
        if (!(v_DP_NombreBACC.value && v_DP_Nombre && v_DP_Apellido && v_DP_email && v_DP_phone.value && 
              v_DF_TaxId.value && v_DF_Name.value && v_DF_Attention.value && v_DF_Address.value && v_DF_City.value && v_DF_ZipCode.value && v_DF_Email_C1.value && 
              v_MP_FormaPago.value && v_MP_NroTC.value && v_MP_FVcto.value && v_MP_CVV.value && v_MP_Nombre.value && v_MP_Direccion.value && v_MP_City.value)){
          alert('Por favor complete el formulario Empresa');

          console.log(v_DP_NombreBACC.value);
          console.log(v_DP_Nombre);
          console.log(v_DP_Apellido);
          console.log(v_DP_email);
          console.log(v_DP_phone.value);

          console.log(v_DF_TaxId.value);
          console.log(v_DF_Name.value);
          console.log(v_DF_Attention.value);
          console.log(v_DF_Address.value);
          console.log(v_DF_City.value);
          console.log(v_DF_ZipCode.value);
          console.log(v_DF_Email_C1.value);
          
          console.log(v_MP_FormaPago.value);
          console.log(v_MP_NroTC.value);
          console.log(v_MP_FVcto.value);
          console.log(v_MP_CVV.value);
          console.log(v_MP_Nombre.value);
          console.log(v_MP_Direccion.value);
          console.log(v_MP_City.value);

        }else{
          // alert('Guardando Datos Empresa');
          saveSuscriptor();
          // control.classList.toggle('saving');
          // setTimeout(() => {
          //     location.href=`https://publicsmartview.masterbase.com${redirigir}`;
          // }, 3500);
        }
      }else{
        if (!(v_DP_NombreBACC.value && v_DP_Nombre && v_DP_Apellido && v_DP_email && v_DP_phone.value && 
              v_DF_TaxId.value && v_DF_Name.value && v_DF_Address.value && v_DF_City.value && v_DF_ZipCode.value && v_DF_Email_C1.value && 
              v_MP_FormaPago.value && v_MP_NroTC.value && v_MP_FVcto.value && v_MP_CVV.value && v_MP_Nombre.value && v_MP_Direccion.value && v_MP_City.value)){
          alert('Por favor complete el formulario Persona');
        }else{
          // alert('Guardando Datos Persona');
          saveSuscriptor();
          // control.classList.toggle('saving');
          // setTimeout(() => {
          //     location.href=`https://publicsmartview.masterbase.com${redirigir}`;
          // }, 3500);
        }
      }
    }


};

  function validaCCnumber(ccNumber) { 
    // var m = document.getElementById("matricula").value;
    var expreg = /^\d{16}$/gm;
    
  // console.log(ccDueDate)

    if(expreg.test(ccNumber)){
      // alert("La matrÃ­cula es correcta");
      return false
    } else {
      // alert("Formato 'Fecha de Vencimiento' no es correcto");
      return true
    }
  };

  function validaDueDateCC(ccDueDate) { 
    // var m = document.getElementById("matricula").value;
    var expreg = /[\d][\d][\x2F][\d][\d]/;
    
  // console.log(ccDueDate)

    if(expreg.test(ccDueDate)){
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
    // console.log(ccCVV);
    // console.log(ccCVV.charCode);
    // console.log(ccCVV.length);
    // if(ccCVV.charCode >= 48 && ccCVV.charCode <= 57 && ccCVV.length == 3){
    if(expreg.test(ccCVV)){
      // alert("La matrÃ­cula es correcta");
      return false
    } else {
      // alert("Revisar cÃ³digo de verificaciÃ³n");
      return true
    }
  };

  function cal() {
    var cantidad = parseInt(document.getElementById('numAutomatas').value),
        moneda = document.getElementById('monedaPlan').innerText,
        planNew = document.getElementById('_planSelect').value,
        montoUnitario = parseFloat(document.getElementById('_precioAutomata').value).toFixed(2) / 30,
        diasRestantes = parseInt(document.getElementById('diasRestantes').innerText),
        precioPro = parseFloat(document.getElementById('precioPro2').innerText),
        // montoTotalNewPlan = parseFloat(parseFloat(document.getElementById('_precioPlan').value) * cantidad).toFixed(2),
        dias30Mas = document.getElementById('dias30Mas').innerText,
        diaFact = document.getElementById('diaProxFact').innerText,
        monto = parseFloat(diasRestantes * montoUnitario * Math.abs(cantidad)).toFixed(2),
        horasPropNew = diasRestantes * parseInt(document.getElementById('_horasAutomata').value) / 30 * cantidad,
        uc = document.getElementById('userConnected').innerText;  

    try {

      if (isNaN(cantidad)){

      }
      else{
        var precio_unitario = parseFloat(document.getElementById('_precioAutomata').value).toFixed(2);
        
        var montoTotal = parseFloat(cantidad) * parseFloat(precio_unitario);

        document.getElementById('_numAutomata').value = document.getElementById('numAutomatas').value;
        document.getElementById('_horasTotales').value = cantidad * document.getElementById('_horasAutomata').value;
        document.getElementById('_montoNeto').value = parseFloat(montoTotal).toFixed(2);

        // if (cantidad > cantidadPlan && planNew == plan){
          if (planNew == 'Plan Trial'){
            // if (diasRestantes == 1){
              document.getElementById("newResultado").innerHTML = 
              uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad) + '</strong>' + ' autÃ³mata del ' + '<strong>' + planNew + '</strong>' + '.\n\n'
              + 'La contrataciÃ³n se harÃ¡ efectiva cuando finalice el proceso de creaciÃ³n de su Billing Account' + '.\n'
              + 'Este plan tiene una gratuidad por el primer mes, por lo que a contar del dÃ­a ' + '<strong>' + dias30Mas + '</strong>' + ', se pasarÃ¡ al '
              + '<strong>' + 'Plan Pro' + '</strong>' + ', el que tiene un costo mensual de ' + '<strong>' + moneda + '</strong>' + ' ' 
              + '<strong>' + precioPro + '</strong>' + '.';
            // } else {
            //   document.getElementById("newResultado").innerHTML = 
            //   uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad) + '</strong>' + ' autÃ³mata del ' + '<strong>' + planNew + '</strong>' + '.\n\n';

            
          } else if (Math.abs(cantidad) == 1){
            if (diasRestantes == 1){
              document.getElementById("newResultado").innerHTML = 
              uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad) + '</strong>' + ' autÃ³mata del ' + '<strong>' + planNew + '</strong>' + '.\n\n'
              + 'Para que esta contrataciÃ³n se haga efectiva, se efectuarÃ¡ un cobro proporcional de ' + '<strong>' + diasRestantes + '</strong>' + ' dÃ­a equivalente a un monto de '
              + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + monto + '</strong>' + ', '
              + 'considerando ' + '<strong>' + horasPropNew + '</strong>' + ' horas de uso para el mes en curso' + '.\n\n'
              + 'El prÃ³ximo cobro del ' + '<strong>' + planNew + '</strong>' + ', serÃ¡ por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + ', '
              + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.';
            } else {
              document.getElementById("newResultado").innerHTML = 
              uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad) + '</strong>' + ' autÃ³mata del ' + '<strong>' + planNew + '</strong>' + '.\n\n'
              + 'Para que esta contrataciÃ³n se haga efectiva, se efectuarÃ¡ un cobro proporcional de ' + '<strong>' + diasRestantes + '</strong>' + ' dÃ­as equivalentes a un monto de '
              + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + monto + '</strong>' + ', '
              + 'considerando ' + '<strong>' + horasPropNew + '</strong>' + ' horas de uso para el mes en curso' + '.\n\n'
              + 'El prÃ³ximo cobro del ' + '<strong>' + planNew + '</strong>' + ', serÃ¡ por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + ', '
              + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.';
            }
          } else {
            if (diasRestantes == 1){
              document.getElementById("newResultado").innerHTML = 
              uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad) + '</strong>' + ' autÃ³matas del ' + '<strong>' + planNew + '</strong>' + '.\n\n'
              + 'Para que esta contrataciÃ³n se haga efectiva, se efectuarÃ¡ un cobro proporcional de ' + '<strong>' + diasRestantes + '</strong>' + ' dÃ­a equivalente a un monto de '
              + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + monto + '</strong>' + ', '
              + 'considerando ' + '<strong>' + horasPropNew + '</strong>' + ' horas de uso para el mes en curso' + '.\n\n'
              + 'El prÃ³ximo cobro del ' + '<strong>' + planNew + '</strong>' + ', serÃ¡ por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + ', '
              + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.';            
            } else {
              document.getElementById("newResultado").innerHTML = 
              uc + ', seleccionaste ' + '<strong>' + Math.abs(cantidad) + '</strong>' + ' autÃ³matas del ' + '<strong>' + planNew + '</strong>' + '.\n\n'
              + 'Para que esta contrataciÃ³n se haga efectiva, se efectuarÃ¡ un cobro proporcional de ' + '<strong>' + diasRestantes + '</strong>' + ' dÃ­as equivalentes a un monto de '
              + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + monto + '</strong>' + ', '
              + 'considerando ' + '<strong>' + horasPropNew + '</strong>' + ' horas de uso para el mes en curso' + '.\n\n'
              + 'El prÃ³ximo cobro del ' + '<strong>' + planNew + '</strong>' + ', serÃ¡ por un monto de ' + '<strong>' + moneda + '</strong>' + ' ' + '<strong>' + (document.getElementById('_montoNeto').value) + '</strong>' + ', '
              + 'que se realizarÃ¡ el dÃ­a ' + '<strong>' + diaFact + '</strong>' + '.';
            }
          };   

      }
        }catch (e) {
      }
  };

  onload = function(){ 
    var ele = document.querySelectorAll('.validaNros')[0];
    ele.onkeypress = function(e) {
      if(isNaN(this.value+String.fromCharCode(e.charCode)))
          return false;
    }
    ele.onpaste = function(e){
      e.preventDefault();
    }
  };

// --------- tooltip ---------------  
  // $(function() {
  //   $('.ttDueDate').tooltip(
  //     {
  //     placement: "top",
  //     title: "Ingrese en formato mm/yy"
  //     }
  //   )
  //   }
  // );
  // $(function() {
  //   $('.ttCVV').tooltip(
  //     {
  //     placement: "top",
  //     title: "CÃ³digo verificaciÃ³n Tarjeta de CrÃ©dito"
  //     }
  //   )
  //   }
  // );
  // $(function() {
  //   $('.ttccName').tooltip(
  //     {
  //     placement: "top",
  //     title: "Ingrese su nombre tal como aparece en su Tarjeta de CrÃ©dito"
  //     }
  //   )
  //   }
  // );
  
  // Tooltip
  // document.querySelectorAll('.tooltip-demo')
  //   .forEach(tooltip => {
  //     new bootstrap.Tooltip(tooltip, {
  //       selector: '[data-bs-toggle='tooltip']'
  //     })
  //   });

  tippy('#nameBACC', {
    content: 'Ingrese un nombre para identificar su Billing Account. Ejemplo: la empresa o Ã¡rea que lo usara, el uso que se le darÃ¡ o algÃºn concepto que le permita diferenciarlo al momento de tener mÃ¡s de un Billing Account.',
  });
  tippy('#dueDate', {
    content: 'Ingrese en formato "mm/yy"',
  });
  tippy('#cvv', {
    content: 'CÃ³digo verificaciÃ³n Tarjeta de CrÃ©dito.',
  });
  tippy('#ccName', {
    content: 'Ingrese su nombre tal como aparece en su Tarjeta de CrÃ©dito.',
  });

// ---------onload---------------
  window.onload = function(){
    console.log(vsnS);
    revisaPais();
    // loaderTest();
  };

  document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        $('.load_image').fadeOut(300);
    }
  };

  function hideLoader() {
    $('.load_image').fadeOut(300);
  };

  function showLoader() {
    // $('body, html').animate({scrollTop: '0px'}, 0);
    window.scrollTo(0, 0)
    $('.load_image').fadeIn(300);
  };

  async function editaRegistroFacturacion(){
    showLoader();
    $('#btnEditaFacturacion').prop('disabled', true);
    var _BACC = document.getElementById('billingAccount').value

    try {
      var values = JSON.stringify({BACC:_BACC});
      console.log(values);
      let {data} = await functionOnDemand('editarRegistro', {data: values});
      console.log(values, data);

      if (data.entityType == 'PJ' || data.tipoEntidad == 'Empresa'){
        document.getElementById('inputAttentionDIV').style.display = 'block'
        document.getElementById('attention').value = data.nameContact;
      }else{
        document.getElementById('inputAttentionDIV').style.display = 'none';
      }
        document.querySelector('#_lblVatName').innerText = data.vatName;
        document.getElementById('taxId').value = data.vat;
        document.getElementById('name').value = data.name;
        document.getElementById('address').value = data.address;
        document.getElementById('city').value = data.city;
        document.getElementById('email1').value = data.email1;
        document.getElementById('email2').value = data.email2;
        document.getElementById('email3').value = data.email3;
        document.getElementById('email4').value = data.email4;
        document.getElementById('_datosFacturacion').style.display = 'block';  
      
    } catch (error) {
      console.log(error);
    }
    $('#btnEditaFacturacion').prop('disabled', false);
    hideLoader();
  };

  async function editaRegistroMetodoPago(){
    showLoader();
    $('#btnEditaMetodoPago').prop('disabled', true);
    var _BACC = document.getElementById('billingAccount').value

    try {
      var values = JSON.stringify({BACC:_BACC});
      console.log(values);
      let {data} = await functionOnDemand('editarRegistro', {data: values});
      console.log(values, data);

        if (data.paymentMethod == 'creditCard'){
          document.getElementById('paymentMethod').options.item(1).selected = 'selected';
        }else {
          document.getElementById('paymentMethod').options.item(2).selected = 'selected';
        }
        
        document.getElementById('creditCardNumber').value = data.creditCardNumber;
        document.getElementById('dueDate').value = data.dueDate;
        document.getElementById('cvv').value = data.cvv;
        document.getElementById('ccName').value = data.ccName;
        document.getElementById('ccAddress').value = data.ccAddress;
        document.getElementById('ccCity').value = data.ccCity;
        document.getElementById('_metodoPago').style.display = 'block';
      
    } catch (error) {
      console.log(error);
    }
    $('#btnEditaMetodoPago').prop('disabled', false);
    hideLoader();
  };

  async function verConsumoSA(){
    showLoader();
    $('#btnVerConsumoSA').prop('disabled', true);
    var _BACC = document.getElementById('billingAccount').value

    try {
      var values = JSON.stringify({BACC:_BACC});
      console.log(values);
      let {data} = await functionOnDemand('detalleHoras', {data: values});
      console.log(values, data);

        $('#_tipoPlan').html(data.tipoPlan);
        $('#_numAutomatas').html(data.numAutomatas);
        $('#_hrsAutomatas').html(data.hrsAutomatas);
        $('#_hrsMes').html(data.hrsMes);
        $('#_hrsAdicionales').html(data.hrsAdicionales);
        $('#_hrsConsumidas').html(data.hrsConsumidas);
        $('#_hrsDisponibles').html(data.hrsDisponibles);
        $('#_porcentaje').html(data.porcentaje);

    } catch (error) {
      console.log(error);
    }

    document.getElementById('_detalleHrsPlan').style.display = 'block';
    document.getElementById('_detalleSA').style.display = 'block';

    $('#btnVerConsumoSA').prop('disabled', false);
    hideLoader();
  };

  async function verInvoices(){
    showLoader();
    $('#btnVerInvoices').prop('disabled', true);
    var _BACC = document.getElementById('billingAccount').value

    document.getElementById('_detalleInvoice').style.display = 'block';
    // document.getElementById('_ConsumosFacturados').style.display = 'block';
    $('#btnVerInvoices').prop('disabled', false);
    hideLoader();
  };

  async function datosPlan(){
    showLoader();
    $('#btnDatosPlan').prop('disabled', true);
    var _BACC = document.getElementById('billingAccount').value;
    var tipoPlanX;

    try {
      var values = JSON.stringify({BACC:_BACC});
      console.log(values);
      let {data} = await functionOnDemand('detalleHoras', {data: values});
      console.log(values, data);

        tipoPlanX = data.tipoPlan;
        // console.log(tipoPlanX);

        $('#_tipoPlan').html(data.tipoPlan);
        $('#_numAutomatas').html(data.numAutomatas);
        $('#_hrsAutomatas').html(data.hrsAutomatas);
        $('#_hrsMes').html(data.hrsMes);


    } catch (error) {
      console.log(error);
    }

    $('#btnDatosPlan').prop('disabled', false);
    hideLoader();


    if (tipoPlanX == 'Trial'){
      document.getElementById('btnModificaPlan').style.display = 'none';
      alert('El Plan TRIAL, no puede ser moficado.');
    }


  };

  async function modificaPlan(){
    showLoader();
    $('#btnModificaPlan').prop('disabled', true);
    var _BACC = document.getElementById('billingAccount').value

    try {
      var values = JSON.stringify({BACC:_BACC});
      console.log(values);
      let {data} = await functionOnDemand('detalleHoras', {data: values});
      console.log(values, data);

        $('#_tipoPlan').html(data.tipoPlan);
        $('#_numAutomatas').html(data.numAutomatas);
        $('#_hrsAutomatas').html(data.hrsAutomatas);
        $('#_hrsMes').html(data.hrsMes);

    } catch (error) {
      console.log(error);
    }

    $('#btnModificaPlan').prop('disabled', false);
    hideLoader();
  };

  async function traeDatosBACC(){
    showLoader();
    $('#btnEditarMetodoPago').prop('disabled', true);
    // var _BACC = document.getElementById('billingAccount').value;
    var _BACC = document.getElementById('billingAccount').value

    try {
      var values = JSON.stringify({idRegistro:_BACC});
      // console.log(values);
      let {data} = await functionOnDemand('editarRegistro', {data: values});
      console.log(values, data);

      document.getElementById('_edicionDatos').style.display = 'block'
        
        //Datos Resumen Plan Contratado
        // $('#btnEditarMetodoPago').html(data.traeRP_idRegistro);
        $('#_modRP_idRegistro').html(data.traeRP_idRegistro);
        $('#_modRP_PaisUser').html(data.traeRP_paisUser);
        $('#_modRP_TipoEntidad').html(data.traeRP_tipoEntidad);
        $('#_modRP_TipoPlan').html(data.traeRP_tipoPlan);
        $('#_modRP_NombreBACC').html(data.traeRP_nombreBACC);
        $('#_modRP_NroAutomatas').html(data.traeRP_nroAutomatas);
        $('#_modRP_Moneda').html(data.traeRP_Moneda);
        $('#_modRP_MontoTotal').html(data.traeRP_montoTotal);

        //Datos Personales
        $('#_modDP_NombreUser').html(data.traeDP_nombreUser);
        $('#_modDP_ApellidoUser').html(data.traeDP_apellidoUser);
        $('#_modDP_EmailUser').html(data.traeDP_emailUser);
        $('#_modDP_PhonelUser').html(data.traeDP_phoneUser);

        //Datos Datos FacturaciÃ³n
        $('#_modDF_VatName').html(data.traeDF_vatName);
        $('#_modDF_VatId').html(data.traeDF_vatId);
        $('#_modDF_Name').html(data.traeDF_name);

        if (data.traeDF_nameContact.length != 0){
          document.getElementById('_modDF_NameContact_0').style.display = 'block';
          document.getElementById('_modDF_NameContact_1').style.display = 'revert';
          $('#_modDF_NameContact_1').html(data.traeDF_nameContact);
        } else {
          document.getElementById('_modDF_NameContact_0').style.display = 'none';
          document.getElementById('_modDF_NameContact_1').style.display = 'none';
        };

        $('#_modDF_Address').html(data.traeDF_address);
        $('#_modDF_City').html(data.traeDF_city);
        $('#_modDF_ZipCode').html(data.traeDF_zipCode);

        if (data.traeDF_email1.length != 0){
          document.getElementById('_modDF_Email1_0').style.display = 'block';
          document.getElementById('_modDF_Email1_1').style.display = 'revert';
          $('#_modDF_Email1_1').html(data.traeDF_email1);
        } else {
          document.getElementById('_modDF_Email1_0').style.display = 'none';
          document.getElementById('_modDF_Email1_1').style.display = 'none';
        };

        if (data.traeDF_email2.length != 0){
          document.getElementById('_modDF_Email2_0').style.display = 'block';
          document.getElementById('_modDF_Email2_1').style.display = 'revert';
          $('#_modDF_Email2_1').html(data.traeDF_email2);
        } else {
          document.getElementById('_modDF_Email2_0').style.display = 'none';
          document.getElementById('_modDF_Email2_1').style.display = 'none';
        };

        if (data.traeDF_email3.length != 0){
          document.getElementById('_modDF_Email3_0').style.display = 'block';
          document.getElementById('_modDF_Email3_1').style.display = 'revert';
          $('#_modDF_Email3_1').html(data.traeDF_email3);
        } else {
          document.getElementById('_modDF_Email3_0').style.display = 'none';
          document.getElementById('_modDF_Email3_1').style.display = 'none';
        };

        if (data.traeDF_email4.length != 0){
          document.getElementById('_modDF_Email4_0').style.display = 'block';
          document.getElementById('_modDF_Email4_1').style.display = 'revert';
          $('#_modDF_Email4_1').html(data.traeDF_email4);
        } else {
          document.getElementById('_modDF_Email4_0').style.display = 'none';
          document.getElementById('_modDF_Email4_1').style.display = 'none';
        };

        $('#_modDF_CodAgente').html(data.traeDF_codAgente);

        //Datos MÃ©todo Pago
        $('#_modMP_FormaPago').html(data.traeMP_formaPago);
        $('#_modMP_NroCC').html(data.traeMP_nroCC);
        $('#_modMP_FechaVcto').html(data.traeMP_fechaVctoCC);
        $('#_modMP_CodVerificacion').html(data.traeMP_codVerificacionCC);
        $('#_modMP_NameCC').html(data.traeMP_nameCC);
        $('#_modMP_AddressCC').html(data.traeMP_addressCC);
        $('#_modMP_CityCC').html(data.traeMP_cityCC);
        $('#_modMP_CountryCC').html(data.traeMP_countryCC);
      
    } catch (error) {
      console.log(error);
    }
    $('#btnEditarMetodoPago').prop('disabled', false);
    hideLoader();
  };