const button = document.querySelector('#button');
const lamp = document.querySelector('#lamp')

button.addEventListener('click', () => {
    
   if (button.classList.contains('spegni')) {
        lamp.src = "assets/img/white_lamp.png";
        button.textContent = "Accendi";
        button.classList.remove('spegni');
    } else {
        lamp.src = "assets/img/yellow_lamp.png";
        button.textContent = "Spegni";
        button.classList.add('spegni');
    }
    });
    

    /*button.addEventListener('click', () => {
    
    if (button.textContent.includes('Accendi')) {
        lamp.src="assets/img/yellow_lamp.png";
        button.textContent = "Spegni";
        button.classList.add('spegni');
    } else {
        lamp.src="assets/img/white_lamp.png";
        button.textContent = "Accendi";
        button.classList.remove('spegni');
    }
    });*/