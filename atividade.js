// Questão 1
function nomesMaiusculos(nomes) {

    const nomes_maiusculos = [];
    
    nomes.forEach(function (nome) {nomes_maiusculos.push(nome.toUpperCase());});

    return nomes_maiusculos;
}

const Nomes = [
    "ana", "bruno", "carla"
];

console.log(nomesMaiusculos(Nomes));

// Questão 2

function apresentarAluno(aluno) {
    return `${aluno.nome} (${aluno.curso})`;
}

const aluno1 = {
    nome: "maria",
    curso: "ADS"
}

console.log(apresentarAluno(aluno1));

// Questão 3

function cadastraProduto(lista, nome, preco) {
    lista.push({nome: nome, preco: preco});

    return lista.length;
}

const Lista = [];

console.log(cadastraProduto(Lista, "Caderno", 15));

// Questão 4

function contarVogais(palavra) {
    let vogais = 0;

    palavra.split("").forEach(function(letra) {
        if ("aeiou".includes(letra)) {
            vogais++;
        }
    });

    return vogais;
}

console.log(contarVogais("Javascript"));

// Questao 5

function buscarAluno(lista, nomeBuscado) {
    let alunoBuscado;
    lista.forEach(function (aluno) {
        if (aluno.nome.toLowerCase() === nomeBuscado.toLowerCase()) {
            alunoBuscado = aluno;
        }
    });

    return alunoBuscado;
}

const Lista2 = [
    {nome: "Ana", idade: 20},
    {nome: "Bruno", idade: 22}
];

let NomeBuscado = "BRUNO";

console.log(buscarAluno(Lista2, NomeBuscado));
