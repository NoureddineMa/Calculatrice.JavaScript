
    // checking Link :

// alert('js running');

                // declaration of variables : 
                // -------- Variables ------------ //
                var screen = document.getElementById("screen");
                var numbChar; // le total des numeros tapés
                var currentChar , previousChar; 
                var operations = ['+','-','*','/'];


            // declaration of functions : 
                // -------- Functions ------------ //

            // creation d'une fonction pour effacer le screen :
            function clearScreen(){
                screen.value = "";
            }
            // creation d'une fonction affichier le contenu d'une button :
            function display(c){
                screen.value += c;
                numbChar = screen.value.length;
                currentChar = c;
                getPreviouschar();
            }
            // creation d'une fonction pour calculer le contenu
            //      d'ecran et affichier le resultat aussi dans l'ecran :
            function calculate(){
                screen.value = eval(screen.value);
                    // eval fonction de calcul (Js)
            }

            function getPreviouschar(){
                previousChar = screen.value.substring(numbChar-2,numbChar-1);
                checkSyntax();
            }

            function checkSyntax()
                    {
                    if(operations.includes(previousChar) && operations.includes(currentChar))
                    {
                        alert("Double Opération");
                    }
                    }

                    // remplace l'operateur si error 
            function removeChar(){
                screen.value = previousChar = screen.value.substring(numbChar-2,numbChar-1);
            }            
