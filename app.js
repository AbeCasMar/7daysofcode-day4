//Declaración de variables
var numSecreto = "";
var numUsuario = "";
var intentos = 3;
var t = true ;

//Inicia el juego hasta que adivine el numero secreto o agote los intentos
while(t == true){



    //Generar numero aleatoria en el rango del 1 al 10
    numSecreto = (Math.floor(Math.random() * (10)+1));
    console.log(numSecreto);


    //Intentar adivinar hasta que agote los intentos
    while(intentos >= 1){

        intentos = intentos - 1;

        numUsuario = prompt("Ingresa un numero del 1 y 10");
        if(numSecreto == numUsuario){

            alert(`¡Felicidades adivinaste ${numSecreto} es el número secreto`);
            intentos = 3
            break
        }
        else if(intentos > 0){

            alert(`Fallaste, te quedan ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);

        }
        else{

            alert(`Perdiste llegaste a ${intentos} intentos. El numero secreto es: ${numSecreto}`)
        }    
        
    }
    
    //Jugar otra vez o salir
    t = prompt("Para un nuevo juego presiona 1 o presiona 2 para salir"); 

    //Reinicia intentos
    intentos = 3;


}

alert("gracias por jugar, vuelve pronto a un nuevo juego");