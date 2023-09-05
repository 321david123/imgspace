apikey = "AYgAckDdXEWu3ibWFXfbgsY9wNrnLCsy3iG7EAmz"
count=2;
$(document).ready(function () {
    //escuchar evento
    
    
        $("#boton").click(function () {
          console.log("VIENDO SI EXISTE")
          const element2 = document.getElementById("this2")
          const element = document.getElementById("this");
          if (element !== null){
            console.log("si existe")
            element.remove();
            element2.remove();
          }
          else{
            console.log("aca llegamos")
          }
          let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=${count}`;  
          //peticion
          $.ajax({
            url: apiUrl,
            type: "GET",
            dataType: "json", //depende el tipo que sea la api
            success: function (data) {
            //success then:
                const primera = data[0];
                const segunda = data[1];
                console.log(data);
                const image1 = document.createElement("img");
                image1.src = primera.url;
                image1.alt = "img1";
                image1.id = "this"
                console.log(segunda.url)
                const image2 = document.createElement("img");
                image2.src = segunda.url;
                image2.alt = "img2";
                image2.id = "this2"
                //console.log(data.url)
                const contenedor = document.getElementById("image");
                contenedor.appendChild(image1);
                contenedor.appendChild(image2);
                const date1 = primera.date 
                const date2 = segunda.date 
                if (date1>date2){
                    console.log("img1 es mayor")
                    mayor = 1
                } else{
                    console.log("img2 es mayor")
                    mayor = 2
                }
            
                const bot1 = document.getElementById("1");
                const bot2 = document.getElementById("2");
                const respuesta = document.getElementById('resultado');
                let presionado;
                bot1.addEventListener('click', function() {
                    presionado = 1;
                    console.log("a");
                    if (mayor==presionado){
                        respuesta.innerHTML = `Incorrecto!, la imagen ${mayor} es mas nueva`
                    }else if(mayor!==presionado){
                        respuesta.innerHTML = `Correcto!, la imagen seleccionada es mas vieja`
                    }
                  });
                  
                  // Agregar escuchador de eventos al botón 2
                bot2.addEventListener('click', function() {
                    presionado = 2;
                    console.log("b");
                    if (mayor==presionado){
                        respuesta.innerHTML = `Incorrecto!, la imagen ${mayor} es mas nueva`
                    }else if(mayor!==presionado){
                        respuesta.innerHTML = `Correcto!, la imagen seleccionada es mas vieja`
                    }
                });

            },
            error: function (error) {
            //fail then:
              console.error("Error en la solicitud:", error);
            },
          });
        });
      });
    console.log("hi, contact me 4111771675");


// if (bot1.addEventListener('click') !== null){
//     console.log("se presiono el boton1")
// }
// else if (bot1.addEventListener('click')){
//     console.log("se presiono el boton2")
// }