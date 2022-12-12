const currentUrl = document.querySelector('#currentUrl');
currentUrl.onclick = function(event){
const newUrl = prompt('Введите новый текст');
currentUrl.textContent = newUrl;
event.preventDefault()}