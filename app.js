/**
 * Created by Alejandro on 13/07/17.
 */

/**
 *
 * @type {HTMLCanvasElement}
 */
const eCanvas = document.querySelector('#canvas');
const contexto = eCanvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
eCanvas.width = width;
eCanvas.height = height;

const viaLactea = new Galaxia(contexto, width, height);
const sol = new Planeta({color: 'rgba(255,255,0,1)'});
viaLactea.planetas.push(sol);

const mercurio = new Planeta({
    orbita: [50, 40],
    desplazamiento: 0.04,
    color: 'brown'
});

const venus = new Planeta({
    orbita: [100, 90],
    desplazamiento: 0.033,
    color: '#1dddb5'
});

const tierra = new Planeta({
    orbita: [150, 140],
    desplazamiento: 0.02,
    color: 'blue'
});

const luna = new Satelite({
    desplazamiento: 0.1,
    orbita: [20, 20],
    radio: 4,
    color: 'rgba(220,220,220,.3)'
});

tierra.satelites.push(luna);

const marte = new Planeta({
    orbita: [200, 190],
    desplazamiento: 0.047,
    color: 'red'
});

for (let i = 0; i < 200; i++) {
    const randomY = (Math.random() * 30) + 230;
    const randomX = (Math.random() * 30) + 230;
    const asteroide = new Asteroide({
        orbita: [randomX, randomY],
        desplazamiento: Math.random() * .02,
        color: 'gray',
        radio: 3,
    });
    sol.satelites.push(asteroide);
}

function toRadians(x) {
    return (x * Math.PI) / 180;
}

function toDegrees(x) {
    return (180 * x) / Math.PI;
}

const jupiter = new Planeta({
    orbita: [300, 300],
    desplazamiento: 0.04,
    color: '#dd8873'
});

const saturno = new Planeta({
    orbita: [350, 350],
    desplazamiento: 0.034,
    color: '#dd9131'
});

const urano = new Planeta({
    orbita: [400, 400],
    desplazamiento: 0.03,
    color: '#5e9ddd'
});

const neptuno = new Planeta({
    orbita: [450, 450],
    desplazamiento: 0.022,
    color: '#5461dd'
});

sol.satelites.push(mercurio);
sol.satelites.push(venus);
sol.satelites.push(tierra);
sol.satelites.push(marte);
sol.satelites.push(jupiter);
sol.satelites.push(saturno);
sol.satelites.push(urano);
sol.satelites.push(neptuno);

window.requestAnimationFrame(viaLactea.mostrar.bind(viaLactea));