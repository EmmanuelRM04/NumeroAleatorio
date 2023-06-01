var numAl
function adivinaAleatorio()
			{
				numAl = Math.floor((Math.random()*(101-1))+1);
				var contador = 1;
				var respuesta = prompt('Introduzca un numero del 1 al 100');
				while(Number(respuesta)!==numAl && contador<30){
					if(respuesta<numAl){
						respuesta = prompt('El número es mayor que el introducido. Inténtelo de nuevo');
					}else{
						respuesta = prompt('El número es menor que el introducido. Inténtelo de nuevo');
					}
					contador++;

				}
				if(contador==30){
					alert('Has superado el número máximo de intentos. Se acabó');
				}else{
					alert('Enhorabuena. Ha acertado');
				}
				document.getElementById().innerHTML = alert('Intentos = ' + contador);

				
			}
	function resultado()
			{
				alert('Número aleatorio = ' + numAl);
			}
