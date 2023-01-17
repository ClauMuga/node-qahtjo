const vsnSM = 'GMH | ScriptMain_v6 | 2022.08.17.01'


// const modalDetail = new bootstrap.Modal(document.getElementById("modalDetail"), {}); // DefiniciÃ³n de funciÃ³n global para obtener detalle de un registro vÃ­a AOD onDemand "getDetail", definido en documento de vista.
  
// async function verConsumos(IdRegistro) {

  // var values = JSON.stringify({IdRegistro:IdRegistro.value});
  // console.log(IdRegistro);
  // let {data} = await functionOnDemand('verConsumos', {data: values});
  // console.log(values, data);

  // if (data) {
    // // AcÃ¡ se convierte el objeto de la data en un arreglo key/value
    // Object.entries(data).forEach(([key, value]) => {
      // // Con key se obtiene el elemento con el mismo nombre
      // const elemento = document.getElementById(key); // Si se encuentra el elemento, se le asigna el valor.
      // if (elemento) {
        // elemento.value = value;
      // }
    // });
    // modalDetail.show();
  // }
// } // DefiniciÃ³n de funciÃ³n global para guardar los cambios vÃ­a AOD onDemand "save", definido en ducumento de vista.


// async function editarRegistro(IdRegistro) {

//   console.log(IdRegistro);
  // window.location="https://smartview.masterbase.com/v1/6290f22aa238c20018a13190/"

  // var values = JSON.stringify({_id:IdRegistro.value});
  // console.log(values);
  // let {data} = await functionOnDemand('editarRegistro', {data: values});
  // console.log(values, data);

  // if (data) {
  //   // AcÃ¡ se convierte el objeto de la data en un arreglo key/value
  //   Object.entries(data).forEach(([key, value]) => {
  //     // Con key se obtiene el elemento con el mismo nombre
  //     const elemento = document.getElementById(key); // Si se encuentra el elemento, se le asigna el valor.
  //     if (elemento) {
  //       elemento.value = value;
  //     }
  //   });
  //   modalDetail.show();
  // }
// }

// Muestra / Oculta botones EdiciÃ³n
// function muestra_oculta(id){
  // // console.log(id);
    // if (document.getElementById){ //se obtiene el id
      // var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
      // el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    // }
  // }
  // window.onload = function(){/*hace que se cargue la funciÃ³n lo que predetermina que div estarÃ¡ oculto hasta llamar a la funciÃ³n nuevamente*/
    // muestra_oculta(id);/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
  // }


document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      $('.load_image').fadeOut(300);
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


// ---------onload---------------
window.onload = function(){
  console.log(vsnSM);
};