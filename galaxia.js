/**
 * Created by Alejandro on 14/07/17.
 */

/**
 *
 * @param {(CanvasRenderingContext2D)} contexto
 * @param ancho
 * @param alto
 * @constructor
 * @property {Planeta[]} planetas
 * @property {(CanvasRenderingContext2D)} contexto
 */
function Galaxia(contexto, ancho, alto) {
    this.planetas = [];
    this.contexto = contexto;
    this.ancho = ancho;
    this.alto = alto;
}

/**
 * @return {void}
 */
Galaxia.prototype.mostrar = function () {
    const self = this;
    this.contexto.beginPath();
    this.contexto.fillStyle = "rgba(44,44,44,.7)";
    this.contexto.fillRect(0, 0, this.ancho, this.alto);
    this.contexto.closePath();
    this.contexto.fillStyle = '#555555';
    for (let i = 0; i < this.ancho; i += this.alto * .05) {
        this.contexto.beginPath();
        this.contexto.fillRect(i, 0, .1, this.alto);
    }
    for (let i = 0; i < this.alto; i += this.alto * .05) {
        this.contexto.beginPath();
        this.contexto.fillRect(0, i, this.ancho, .1);
    }
    this.planetas.forEach(function (planeta) {
        planeta.mostrar(self.contexto);
    });
    requestAnimationFrame(this.mostrar.bind(this));
};