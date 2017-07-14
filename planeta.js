/**
 * Created by Alejandro on 14/07/17.
 */

const PI2 = 2 * Math.PI;

/**
 *
 * @param opciones
 * @constructor
 * @property {Planeta[]} satelites
 */
function Planeta(opciones) {
    opciones = opciones || {};
    this.satelites = [];
    this.radio = opciones.radio || 10;
    this.desplazamiento = opciones.desplazamiento || .1;
    this.orbita = opciones.orbita || [0, 0];
    this.origen = opciones.origen || [width * .5, height * .5];
    this.color = opciones.color || 'blue';
    const angulo = opciones.angulo || Math.random() * 360;
    this.posX = toRadians(angulo);
    this.posY = toRadians(angulo);
    this._x = 0;
    this._y = 0;
}

const Asteroide = Satelite = Planeta;

/**
 *
 * @param {CanvasRenderingContext2D} contexto
 * @return {void}
 */
Planeta.prototype.mostrar = function (contexto) {
    const self = this;
    this._mover();
    contexto.beginPath();
    contexto.fillStyle = this.color;
    contexto.arc(this.ubicacionX(), this.ubicacionY(), this.radio, 0, PI2);
    contexto.fill();
    contexto.closePath();
    this.satelites.forEach(function (satelite) {
        satelite.origen = [self.ubicacionX(), self.ubicacionY()];
        satelite.mostrar(contexto);
    })
};

/**
 *
 * @return {Number}
 */
Planeta.prototype.ubicacionX = function () {
    return this._x + this.origen[0];
};

/**
 *
 * @return {Number}
 */
Planeta.prototype.ubicacionY = function () {
    return this._y + this.origen[1];
};

Planeta.prototype._mover = function () {
    this._x = Math.cos(this.posX += this.desplazamiento) * this.orbita[0];
    this._y = Math.sin(this.posY += this.desplazamiento) * this.orbita[1];
};