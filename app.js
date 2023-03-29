const code = 'moncode'
const leurCode = document.getElementById('code_input').value;

if (code === leurCode){
    window.location.href = 'bravo.html'
}else{
    alert("le code n'est pas correct");
}