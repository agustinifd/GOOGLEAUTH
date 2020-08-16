//// REGISTRO USUARIO /////

const Registroform = document.querySelector("#Registro-form");
Registroform.addEventListener("submit", (e) => {
    e.preventDefault();
    const Registropassword = document.querySelector("#Registro-password").value;
    const Registroemail = document.querySelector("#Registro-email").value;
    auth
    .createUserWithEmailAndPassword(Registroemail, Registropassword)
    .then(userCredential => {
    Registroform.reset();
    $('#RegistroModal').modal('hide');
    })
})

///// ACCESO USUARIO /////
const Accesoform = document.querySelector("#Acceso-form");
Accesoform.addEventListener("submit", e => {
    e.preventDefault();  
    const Accesopassword = document.querySelector("#Acceso-password").value;
    const Accesoemail = document.querySelector("#Acceso-email").value;
    
    auth
    .signInWithEmailAndPassword(Accesoemail, Accesopassword)
    .then(userCredential => {
    Accesoform.reset();
    $('#AccesoModal').modal('hide');
    console.log("LOGEADO")
    })
    .catch(function(error) {
        alert("ATENCION EMAIL O PASSWORD NO VALIDOS")
    });
    
})

//////////SALIR/////////////////
const Salir = document.querySelector("#Salir");
Salir.addEventListener("click", e => {
    e.preventDefault();  
    auth.signOut().then(() => {
        alert("Has salido con exito")
        console.log("DESLOGEADO")
    })
})

////////  ESTADO DE AUTH //////
auth.onAuthStateChanged(user =>
    {
        if (user)
        {console.log("LOOOOOOOOGEEEEEEEAAAAAAAAADOOOOO")}
        else {
            console.log("NO LOGEADO")}
    })

///////// GOOGLE LOGIN ///////
const goglebtn = document.querySelector("#gogle");
goglebtn.addEventListener("click", e => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
    .then(result => {
    console.log("GOOGLE LOGEADOOO")
    })
})
  