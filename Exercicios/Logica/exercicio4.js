"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Televisao {
    constructor(VolumeMaximo, Canais) {
        this.VolumeMaximo = VolumeMaximo;
        this.Canais = Canais;
        this.volume = 0;
        this.volumeMaximo = 0;
        this.canais = [];
        this.volumeMaximo = VolumeMaximo;
        this.canais = Canais;
    }
    aumentarVolume() {
        return this.volume = this.volume + 1;
    }
    diminuirVolume() {
        return this.volume -= 1;
    }
    mudarProximoCanal() {
        if (this.canalAtual) {
            return this.canalAtual = this.canais[0];
        }
        else {
            const idenatual = this.canais.indexOf(this.canalAtual);
            console.log(idenatual);
            return this.canalAtual = this.canais[idenatual + 1];
        }
    }
    mudaCanalExpecifico(numero) {
        const canalProcurado = this.Canais.find((element) => {
            element.numero === numero;
        });
        if (canalProcurado) {
            this.canalAtual = canalProcurado;
        }
        else {
            throw new Error('Canal não ecnotrado');
        }
    }
}
class Controle {
    constructor(Televisao) {
        this.Televisao = Televisao;
        this.televisao = Televisao;
    }
    aumentarVolume() {
        return this.televisao.aumentarVolume();
    }
    diminuirVolume() {
        return this.televisao.diminuirVolume();
    }
    mudarProximoCanal() {
        return this.televisao.mudarProximoCanal();
    }
    procurarCanalExpecifico(numero) {
        this.procurarCanalExpecifico(numero);
    }
}
const listaCanal = [{ numero: 1, descricao: 'band' }, { numero: 2, descricao: 'record' }, { numero: 3, descricao: 'globo' }, { numero: 4, descricao: 'redeTV' }];
const tv = new Televisao(100, listaCanal);
const controle = new Controle(tv);
console.log(controle.aumentarVolume());
console.log(controle.aumentarVolume());
console.log(controle.mudarProximoCanal());
