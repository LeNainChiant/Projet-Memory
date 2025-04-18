 //fonctions de test du mot de passe
// 0 : récupération de l'input newUserPwd
const userPwd = document.querySelector('#newUserPwd')
userPwd.addEventListener("change", checkPwd)

function checkPwd(){
  let length = checkPwdLength(userPwd.value) 
  let pwdNum= checkPwdNumber(userPwd.value)
  let pwdLower = checkLowerCase(userPwd.value)
  let pwdUpper = checkUpperCase(userPwd.value)
  let symbol = checkSymbol(userPwd.value)
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
function checkUpperCase(userPwd){
  let ok = /[A-Z]+/.test(userPwd)
  if (ok){
    colorTxtGrn('#upperCase')
  }
  else{
    colorTxtRed('#upperCase')
  }
}

// 5 test des symboles
function checkSymbol(userPwd) {
   let ok = /[^a-zA-Z0-9]+/.test(userPwd);
   if (ok){
    colorTxtGrn('#symbole')
   }
   else{
    colorTxtRed('#symbole')
   }
}


// 0.1 : fonction de colorisation/validation des chaînes de caractère
function colorTxtGrn(id){
  document.querySelector(id).style.color="green" /*validation correcte */
}
function colorTxtRed(id){
  document.querySelector(id).style.color="red" /*validation incorrecte*/
}

// // Analyse de l'ID

const userID= document.querySelector('#userID')
userID.addEventListener("change", checkID)

function checkID(){
  let idLength=checkIDLength(userID.value)
  let idLower = checkIDLowerCase(userID.value)
  let idUpper = checkIDUpperCase(userID.value)
}
// Check longueur ID

function checkIDLength(userID) {
  let ok = userID.length >=3
  if (ok){
    colorTxtGrn('#userIDLength')
  }
  else {
    colorTxtRed('#userIDLength')
  }  
  return ok
}

// Check lowerCase ID
function checkIDLowerCase(userID){
  let ok = /[a-z]+/.test(userID)
  if(ok){
    colorTxtGrn('#userIDLowerCase')
  }
  else {
    colorTxtRed('#userIDLowerCase')
  }
  return ok
}

// Check upperCase ID

function checkIDUpperCase(userID){
  let ok = /[A-Z]+/.test(userID)
  if (ok){
    colorTxtGrn('#userIDUpperCase')
  }
  else{
    colorTxtRed('#userIDUpperCase')
  }
}
// Sauvegarde des données et renvoi vers la page de connexion.

document.querySelector("#submit").addEventListener('click', function(){
const email = document.querySelector("#userMail").value
  localStorage.setItem("Joueur", email)
})
// Renvoi vers la page de connexion une fois inscrit
document.querySelector('#login').addEventListener('click', function(){
  // ID, mdp  lien vers la page de connexion
    window.location.href = "connexion.html";
})