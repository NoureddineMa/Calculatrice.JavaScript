
    // checking Link :

// alert('js running');

                // declaration of variables : 
                // -------- Variables ------------ //
                var screen = document.getElementById("screen");

                var numbChar; // le total des numeros tapés
                var currentChar , previousChar; 
                var operations = ['+','-','*','/'];
                const buttns = document.querySelectorAll("[value-number]");
                

            // declaration of functions : 



                // -------- Functions ------------ //

            // creation d'une fonction pour effacer le screen :
            function clearScreen(){
                screen.value = "";
            }
            document.querySelector(".clear").addEventListener("click", clearScreen);


            // creation d'une fonction affichier le contenu d'une button :

            function display(c){
            screen.value += c;
            numbChar = screen.value.length;
            currentChar = c;
            getPreviouschar();
            }
                buttns.forEach((btn) => {
                number = btn.addEventListener('click', () => display(btn.textContent));
});
            // creation d'une fonction pour calculer le contenu
            //      d'ecran et affichier le resultat aussi dans l'ecran :
            function calculate(){
                screen.value = eval(screen.value);
                    // eval fonction de calcul (Js)
            }
            document.querySelector(".calculate").addEventListener("click",calculate);


            function getPreviouschar(){
                previousChar = screen.value.substring(numbChar-2,numbChar-1);
                checkSyntax();
            }

            function checkSyntax()
                    {
                    if(operations.includes(previousChar) && operations.includes(currentChar))
                    {
                    if(previousChar == currentChar){
                        removeChar();
                    }
                    else
                    {
                        overwrite();
                    }      
                    }
                    }

                    // fonction pour le modifier l'opérateur par le dernier tapé

                    function overwrite(){
                        screen.value = screen.value.slice(0,numbChar-2)+screen.value.slice(numbChar-1);
                    }

                    
            function removeChar(){
                screen.value =  screen.value.substring(0,numbChar-1);
            }            

