/**
 * JavaScript Document 
 * Created by levinojunior on 07/09/15.
 * 5 ADS FATEC - MANHÃ - JOSÉ LEVINO DA COSTA JUNIOR
 * Implementação funcional do Padrao de projeto Observer:
 */


function construtorObservador() {
    var lstDeOuvintes = [];
    var evento = {somador: 1}
    var objeto = {
        contar: function () {
            lstDeOuvintes.forEach(function (valor) {
                valor(evento);
            });
            evento.somador++;
        }
    };
    function adicionarOuvinte(funcao) {
        lstDeOuvintes.push(funcao);
    }
    objeto.adicionarOuvinte = adicionarOuvinte;
    return objeto;
}

function observador(evento) {
    console.log('Somando...' + evento.somador);
}

function observador2(evento) {
    console.log('Somando novamente...' + evento.somador);
}

var contadorObservador = construtorObservador();
console.log(contadorObservador);

contadorObservador.adicionarOuvinte(observador);
contadorObservador.adicionarOuvinte(observador2);

contadorObservador.contar();
contadorObservador.contar();
