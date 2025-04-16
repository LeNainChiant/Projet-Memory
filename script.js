// lien vers le formulaire de connexion au clic sur le bouton "login"

document.querySelector('#login').addEventListener('click', function(){
  // ID, mdp  lien vers la page de connexion
    window.location.href = "connexion.html";
})

// lien vers le formulaire d'inscription pour un nouveau joueur
document.querySelector('#signin').addEventListener('click', function(){
    window.location.href="inscription.html"
})



