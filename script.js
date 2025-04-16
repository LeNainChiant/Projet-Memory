// lien vers le formulaire de connexion au clic sur le bouton "login"

document.querySelector('#login').addEventListener('click', function(){
  // ID, mdp  lien vers la page de connexion
    window.location.href = "connexion.html";
})

// lien vers le formulaire d'inscription pour un nouveau joueur
document.querySelector('#signin').addEventListener('click', function(){
    window.location.href="inscription.html";
})

//lien vers le choix de partie depuis le profil
document.querySelector("#gameLaunch").addEventListener('click', function(){
  window.location.href="jeu.html";
})


// fonctions de test du mot de passe
// 0 récupération de l'input newUserPwd
let userPwd = document.querySelector('#newUserPwd').value 


// 0.1 fonction de colorisation/validation des chaînes de caractère
function colorTxtGrn(id){
  document.querySelector(id).style.color="green" /*validation correcte */
}
function colorTxtRed(id){
  document.querySelector(id).style.color="red" /*validation incorrecte*/
}
// 1 : test longueur
function checkPwdLength(userPwd) {
  let ok = userPwd.length >=6
  if (ok){
    colorTxtGrn('#passLength')
  }
  else {
    colorTxtRed('#passLength')
  }  
  return ok
}

// 2 : test chiffre
function checkPwdNumber(userPwd){
  let ok = /[0-9]+/.test(userPwd)
  if (ok){
    colorTxtGrn('#num')
  }
  else{ 
  colorTxtRed('#num')
  }
  return ok
}

// 3 : test lettre minuscule
function checkLowerCase(userPwd){
  let ok = /[a-z]+/.test(userPwd)
  if(ok){
    colorTxtGrn('#lowerCase')
  }
  else {
    colorTxtRed('#lowerCase')
  }
  return ok
}

// 4 : test lettre majuscule
function checkUpperCase(){
  let ok = /[A-Z]+/.test(userPwd)
  if (ok){
    colorTxtGrn('#upperCase')
  }
  else{
    colorTxtRed('#upperCase')
  }
}





// 6 : contrôle de toutes les variables et validation du mot de passe

let length = checkPwdLength(userPwd)
let pwdNum= checkPwdNumber(userPwd)
let pwdLowerCase = checkLowerCase(userPwd)
