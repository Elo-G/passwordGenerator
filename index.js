//----------------------DECLARATION DES VARIABLES

/*je crée les const contenant les différents types de caractères 
à utiliser pr générer le mdp:*/
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
 const dataUppercase = dataLowercase.toUpperCase() 
 const dataNumbers = "0123456789";
 const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
 /*je sélectionne l'input de type range( le curseur, et le stoque ds
 une variable pr pouvoir m'en servir ds le code js:*/
 const rangeValue = document.getElementById("password-length");
 //je fais pareil avec l'input passwordOutput:
 const passwordOutput = document.getElementById("password-output");




 //---------------------CREATION DE LA FONCTION QUI GENERERA LES MDP
 function generatePassword() {
   /*il faut une variable pr  stoquer les  types de caractères qui 
   seront sélectionnés com critère par le client:*/
   let data = [];
   //il faut une variable pr stoqué le mdp qd il sera  généré
   let password = "";


   /*on défini ds des if quels caractères seront stoqué ds data[] en
   fonction de ce que le client à checké */
   if (lowercase.checked) data.push(...dataLowercase);   
   
   if (uppercase.checked) data.push(...dataUppercase);
   if (numbers.checked) data.push(...dataNumbers);
   if (symbols.checked) data.push(...dataSymbols);

   //alerte générée si la longueur de data ===0 (<=> si data [] est vide)
   if (data.length === 0) {
     alert("Veuillez sélectionner des critères");
     return;
   }
   /*stockage ds la variable password d'un caractères généré 
   aléatoirement par js  avec random */
   /*opération qui sera répétée pr généré plrs carcatères, grâce à la 
   boucle for  jusqu'à ce que i = la valeur de rangeValue (<=> valeur du curseur
   qui correspond au nbre de carcatère du mdp qu' à sélectionné le client)*/
   for (i = 0; i < rangeValue.value; i++) {
     password += data[Math.floor(Math.random() * data.length)];
   }

   //affichage du mdp généré, dans l'input passwordOutput 
   passwordOutput.value = password;  

   //selection du password ( il sera surligné côté front)
   passwordOutput.select();    
   //copie du password
   navigator.clipboard.writeText(passwordOutput.value);
   //affichage du texte "copié" dans l'élement generateButton
   generateButton.textContent = "Copié !";

   /*affichage du texte "Générer mot de passe" dans l'élément 
   generateButton au bout de 2 secondes*/
   setTimeout(() => {
     generateButton.textContent = "Générer mot de passe";
   }, 2000);
 }
 
 //-------------------JOUER LA FONCTION AU CLICK DE generateButton
 generateButton.addEventListener("click", generatePassword);