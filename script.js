 // fonctions de test du mot de passe
 // 0 : récupération de l'input newUserPwd
const userPwd = document.querySelector('#newUserPwd').value
console.log(userPwd.value)

// 0.1 : fonction de colorisation/validation des chaînes de caractère
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

// 5 test des symboles
function checkSymbol(userPwd) {
   let ok = /[^a-zA-Z0-9]/.test(userPwd);
   if (ok){
    colorTxtGrn('#symbole')
   }
   else{
    colorTxtRed('#symbole')
   }
}
// 6 : contrôle de toutes les variables et validation du mot de passe

let length = checkPwdLength(userPwd)
let pwdNum= checkPwdNumber(userPwd)
let pwdLower = checkLowerCase(userPwd)
let pwdUpper = checkUpperCase(userPwd)
let symbol = checkSymbol(userPwd)