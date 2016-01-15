$(document).ready(init);

  function init()
  {
    $("#myForm").submit(enviarformulario);
    Parse.initialize("oOIPqooE2OGTzvqXvGlB45RiDydaph8pvRt7EYci", "MYKsH9t0qEL2RNPoOWoZFP2kf84IR6rwvjrf3CRJ");
  }
  function enviarformulario(evt)
  {



    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    //testObject.save({foo: "bar"}).then(function(object) {
    //alert("yay! it worked");
    // });
    var cliente=Parse.Object.extend("cliente");

    var instancia = new cliente();
    instancia.save({
      nombre:$("#nombre").val(""),
      apellido:$("#apellido").val("")

    }).then(function(){
      $("#nombre")
    alert("registro guardado");
    });
  } 

	var opciones = {
		rules:{
			nombre:{
				required:true,
				minlength:6
			},
			telefono:"required"
			ciudad:"required"
			placa:"required"
			apellidos:"required"
			correo:{
				required:true
			},
			vehiculo:
			{
				required:true
			}
		},
		messages:{
			nombre:"Por favor ingresa tu nombre",
			telefono:"Ingresa tu telefono",
			ciudad:"Lugar donde resides",
			placa:"Número de placa de tu vehiculo",
			apellidos:"Ingresa tu apellido",
			correo:{
				required:"Necesito tu correo"			},
			vehiculo:
			{
				required:"Pon la marca de tu vehículo",
			}
		},
		submitHandler: function()
		{
			swal("Es válido", "Todo ok", "success");
		},
		invalidHandler: function()
		{
			swal("Error", "Verifica el fomulario", "warning");
		}
	};


	$("#myForm").validate(opciones);
}