const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.boton');
const btmodo = document.querySelector('#modo');

/*funcion de cambio de colores*/
btmodo.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btmodo.classList.toggle('active');
})

/*funcion de botones y resultados*/
botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const presionado = boton.textContent;

        if(boton.id === 'limpiar') {
            pantalla.textContent = '0';
            return;
        }

        if(boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);

            }
            return;
        }

        if(boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'ERROR';
            }
            return;
        }

        if(pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
            pantalla.textContent = presionado;
        } else {
            pantalla.textContent += presionado;
        }

    })
})