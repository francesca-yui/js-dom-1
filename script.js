const button = document.querySelector('#button');
const lamp = document.querySelector('#lamp')

button.addEventListener('click', () => {
    
    if (button.textContent.includes('Accendi')) {
        lamp.src="assets/img/yellow_lamp.png";
        button.textContent = "Spegni";
        
    } else {
         lamp.src="assets/img/white_lamp.png";
         button.textContent = "Accendi";
    }
    });