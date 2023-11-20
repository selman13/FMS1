let modalIlk = document.getElementById('modalilk');
let modalbody = document.getElementById('modalilkbody');

if (modalbody.style.display = 'block') {
    modalIlk.addEventListener('click', () => {
        modalbody.style.display = 'none';
    }); 
} 
if (modalbody.style.display = 'none') {
    modalIlk.addEventListener('click', () => {
        modalbody.style.display = 'block';
    }); 
}