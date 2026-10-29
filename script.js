// ==================================================
// ETAPA 01 — MANIPULAÇÃO DO DOM
// ==================================================

// DESAFIO 01 — Título que muda
document.getElementById("titulo-dinamico").textContent =
    "Bem-vindo ao NEVER LAND!";


// DESAFIO 02 — Botão que muda a mensagem
document.getElementById("btn-mensagem").addEventListener("click", function () {
    document.getElementById("mensagem").textContent =
        "Mensagem alterada com JavaScript!";
});


// DESAFIO 03 — Troca de cor
document.getElementById("btn-cor").addEventListener("click", function () {
    const aviso = document.getElementById("aviso-cor");

    if (aviso.style.color === "rgb(37, 99, 235)") {
        aviso.style.color = "#dc2626";
    } else {
        aviso.style.color = "#2563eb";
    }
});


// DESAFIO 04 — Esconder e mostrar
document.getElementById("btn-informacao").addEventListener("click", function () {
    const informacao = document.getElementById("informacao-extra");
    const botao = document.getElementById("btn-informacao");

    informacao.hidden = !informacao.hidden;

    botao.textContent = informacao.hidden
        ? "Mostrar informação"
        : "Esconder informação";
});


// DESAFIO 05 — Destaque com classe CSS
document.getElementById("btn-destaque").addEventListener("click", function () {
    document.getElementById("texto-destaque").classList.toggle("destaque");
});


// ==================================================
// ETAPA 02 — INTERAÇÃO COM O USUÁRIO
// ==================================================

// DESAFIO 06 — Boas-vindas personalizadas
document.getElementById("btn-saudacao").addEventListener("click", function () {
    const nome = document.getElementById("nome-usuario").value.trim();
    const resultado = document.getElementById("resultado-saudacao");
    const erro = document.getElementById("erro-nome");

    // DESAFIO 07 — Não deixe em branco
    if (nome === "") {
        resultado.textContent = "";
        erro.textContent = "Por favor, digite seu nome.";
    } else {
        resultado.textContent = `Olá, ${nome}! Seja bem-vindo ao NEVER LAND.`;
        erro.textContent = "";
    }
});


// DESAFIO 08 — Adicionar recados
document.getElementById("btn-recado").addEventListener("click", function () {
    const campo = document.getElementById("texto-recado");
    const texto = campo.value.trim();

    if (texto === "") {
        campo.focus();
        return;
    }

    const recado = document.createElement("div");
    recado.className = "recado";

    const mensagem = document.createElement("span");
    mensagem.textContent = texto;

    recado.append(mensagem);
    document.getElementById("lista-recados").append(recado);

    campo.value = "";
    campo.focus();
});


// DESAFIO 09 — Remover o aviso
document.getElementById("btn-fechar-aviso").addEventListener("click", function () {
    document.getElementById("aviso-fechavel").remove();
});


// DESAFIO 10 — Modo claro e escuro
document.getElementById("btn-tema").addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    this.textContent = document.body.classList.contains("tema-escuro")
        ? "Ativar tema claro"
        : "Ativar tema escuro";
});


// ==================================================
// ETAPA 03 — LÓGICA DE PROGRAMAÇÃO
// ==================================================

// DESAFIO 11 — Contador de cliques
let contador = 0;

function atualizarContador() {
    document.getElementById("valor-contador").textContent = contador;
}

document.getElementById("btn-somar").addEventListener("click", function () {
    contador++;
    atualizarContador();
});

document.getElementById("btn-subtrair").addEventListener("click", function () {
    if (contador > 0) {
        contador--;
    }

    atualizarContador();
});


// DESAFIO 12 — Verificação de idade
document.getElementById("btn-idade").addEventListener("click", function () {
    const campo = document.getElementById("idade");
    const resultado = document.getElementById("resultado-idade");
    const idade = Number(campo.value);

    if (campo.value.trim() === "" || !Number.isInteger(idade) || idade < 0) {
        resultado.textContent = "Digite uma idade inteira válida.";
    } else if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
    } else {
        resultado.textContent = "Você é menor de idade.";
    }
});


// DESAFIO 13 — Par ou ímpar
document.getElementById("btn-par").addEventListener("click", function () {
    const campo = document.getElementById("numero-par");
    const resultado = document.getElementById("resultado-par");
    const numero = Number(campo.value);

    if (campo.value.trim() === "" || !Number.isInteger(numero)) {
        resultado.textContent = "Digite um número inteiro válido.";
    } else if (numero % 2 === 0) {
        resultado.textContent = `${numero} é um número par.`;
    } else {
        resultado.textContent = `${numero} é um número ímpar.`;
    }
});


// DESAFIO 14 — Calculadora de desconto
document.getElementById("btn-desconto").addEventListener("click", function () {
    const campoPreco = document.getElementById("preco");
    const campoDesconto = document.getElementById("desconto");
    const resultado = document.getElementById("resultado-desconto");

    const preco = Number(campoPreco.value);
    const desconto = Number(campoDesconto.value);

    if (
        campoPreco.value.trim() === "" ||
        campoDesconto.value.trim() === "" ||
        !Number.isFinite(preco) ||
        !Number.isFinite(desconto) ||
        preco < 0 ||
        desconto < 0 ||
        desconto > 100
    ) {
        resultado.textContent =
            "Informe um preço válido e um desconto entre 0% e 100%.";
        return;
    }

    const valorFinal = preco - (preco * desconto / 100);

    resultado.textContent = `Valor final: ${valorFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}`;
});


// DESAFIO 15 — Cards criados em repetição
const areaRepeticao = document.getElementById("cards-repeticao");

for (let i = 1; i <= 5; i++) {
    const card = document.createElement("div");

    card.className = "card-repeticao";
    card.textContent = `Card ${i}`;

    areaRepeticao.append(card);
}


// ==================================================
// ETAPA 04 — LISTAS, BUSCAS E ORGANIZAÇÃO
// ==================================================

// DESAFIO 16 — Lista personalizada
const formularioLista = document.getElementById("form-lista");
const campoNovoItem = document.getElementById("novo-item");
const listaItens = document.getElementById("lista-itens");
const erroLista = document.getElementById("erro-lista");
const buscaLista = document.getElementById("busca-lista");
const totalLista = document.getElementById("total-lista");

let itensLista = [];

function renderizarLista() {
    listaItens.innerHTML = "";

    const pesquisa = buscaLista.value.trim().toLowerCase();

    itensLista.forEach(function (item, indice) {
        // DESAFIO 19 — Busca instantânea
        if (!item.toLowerCase().includes(pesquisa)) {
            return;
        }

        const li = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = item;

        // DESAFIO 17 — Excluir o item certo
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "botao-secundario";

        botaoExcluir.addEventListener("click", function () {
            itensLista.splice(indice, 1);
            renderizarLista();
        });

        li.append(texto, botaoExcluir);
        listaItens.append(li);
    });

    // DESAFIO 18 — Total em tempo real
    totalLista.textContent = itensLista.length;
}

formularioLista.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const item = campoNovoItem.value.trim();

    if (item === "") {
        erroLista.textContent = "Digite um item antes de adicionar.";
        return;
    }

    itensLista.push(item);
    campoNovoItem.value = "";
    erroLista.textContent = "";

    renderizarLista();
    campoNovoItem.focus();
});

buscaLista.addEventListener("input", renderizarLista);


// DESAFIO 20 — Ordem alfabética
document.getElementById("btn-ordenar").addEventListener("click", function () {
    itensLista.sort(function (a, b) {
        return a.localeCompare(b, "pt-BR", { sensitivity: "base" });
    });

    renderizarLista();
});


// ==================================================
// ETAPA 05 — SEU MINIAPLICATIVO
// ==================================================

// DESAFIO 21 — Cards a partir de objetos
const catalogo = [
    { id: 1, nome: "HTML e CSS", categoria: "Programação" },
    { id: 2, nome: "JavaScript", categoria: "Programação" },
    { id: 3, nome: "Design de Interfaces", categoria: "Design" },
    { id: 4, nome: "Banco de Dados", categoria: "Tecnologia" },
    { id: 5, nome: "Desenvolvimento Web", categoria: "Programação" },
    { id: 6, nome: "Identidade Visual", categoria: "Design" }
];

const areaCatalogo = document.getElementById("catalogo");
const totalFavoritos = document.getElementById("total-favoritos");


// DESAFIO 22 — Filtro por categoria
document.getElementById("filtro-categoria").addEventListener("change", function () {
    renderizarCatalogo();
});


// DESAFIO 23 — Meus favoritos
// Os favoritos são identificados pelo ID de cada cartão.
let favoritos = new Set();

function atualizarTotalFavoritos() {
    totalFavoritos.textContent = favoritos.size;
}

function renderizarCatalogo() {
    const categoria = document.getElementById("filtro-categoria").value;

    areaCatalogo.innerHTML = "";

    const catalogoFiltrado = catalogo.filter(function (item) {
        return categoria === "Todos" || item.categoria === categoria;
    });

    catalogoFiltrado.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "card-catalogo";

        const titulo = document.createElement("h4");
        titulo.textContent = item.nome;

        const textoCategoria = document.createElement("p");
        textoCategoria.textContent = item.categoria;

        const botaoFavorito = document.createElement("button");
        const estaFavorito = favoritos.has(item.id);

        botaoFavorito.textContent = estaFavorito
            ? "★ Favorito"
            : "☆ Favoritar";

        if (estaFavorito) {
            botaoFavorito.classList.add("favorito-ativo");
        }

        botaoFavorito.addEventListener("click", function () {
            if (favoritos.has(item.id)) {
                favoritos.delete(item.id);
            } else {
                favoritos.add(item.id);
            }

            // DESAFIO 24 — Não perder as escolhas
            salvarFavoritos();
            renderizarCatalogo();
            atualizarTotalFavoritos();
        });

        card.append(titulo, textoCategoria, botaoFavorito);
        areaCatalogo.append(card);
    });

    atualizarTotalFavoritos();
}


// DESAFIO 24 — Salvar e recuperar favoritos
function salvarFavoritos() {
    localStorage.setItem(
        "neverLandFavoritos",
        JSON.stringify(Array.from(favoritos))
    );
}

function carregarFavoritos() {
    try {
        const dados = JSON.parse(
            localStorage.getItem("neverLandFavoritos")
        );

        if (Array.isArray(dados)) {
            favoritos = new Set(
                dados.filter(function (id) {
                    return catalogo.some(function (item) {
                        return item.id === id;
                    });
                })
            );
        }
    } catch (erro) {
        favoritos = new Set();
    }
}

carregarFavoritos();
renderizarCatalogo();


// DESAFIO 25 — Painel completo
const formularioPainel = document.getElementById("form-painel");
const campoNomePainel = document.getElementById("nome-painel");
const campoCategoriaPainel = document.getElementById("categoria-painel");
const buscaPainel = document.getElementById("busca-painel");
const filtroPainel = document.getElementById("filtro-painel");
const listaPainel = document.getElementById("lista-painel");
const totalPainel = document.getElementById("total-painel");
const erroPainel = document.getElementById("erro-painel");

let itensPainel = [];
let proximoIdPainel = 1;

function salvarPainel() {
    localStorage.setItem("neverLandPainel", JSON.stringify(itensPainel));
    localStorage.setItem("neverLandProximoId", String(proximoIdPainel));
}

function carregarPainel() {
    try {
        const dados = JSON.parse(localStorage.getItem("neverLandPainel"));

        if (Array.isArray(dados)) {
            itensPainel = dados.filter(function (item) {
                return item &&
                    Number.isInteger(item.id) &&
                    typeof item.nome === "string" &&
                    typeof item.categoria === "string";
            });
        }

        const idSalvo = Number(localStorage.getItem("neverLandProximoId"));
        const maiorId = itensPainel.reduce(function (maior, item) {
            return Math.max(maior, item.id);
        }, 0);

        proximoIdPainel = Number.isInteger(idSalvo) && idSalvo > maiorId
            ? idSalvo
            : maiorId + 1;
    } catch (erro) {
        itensPainel = [];
        proximoIdPainel = 1;
    }
}

function renderizarPainel() {
    listaPainel.innerHTML = "";

    const pesquisa = buscaPainel.value.trim().toLowerCase();
    const categoriaEscolhida = filtroPainel.value;

    const itensFiltrados = itensPainel.filter(function (item) {
        const correspondeNome = item.nome.toLowerCase().includes(pesquisa);
        const correspondeCategoria =
            categoriaEscolhida === "Todos" ||
            item.categoria === categoriaEscolhida;

        return correspondeNome && correspondeCategoria;
    });

    itensFiltrados.forEach(function (item) {
        const linha = document.createElement("div");
        linha.className = "item-painel";

        const informacao = document.createElement("span");
        informacao.textContent = `${item.nome} — ${item.categoria}`;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "botao-secundario";

        botaoExcluir.addEventListener("click", function () {
            itensPainel = itensPainel.filter(function (outroItem) {
                return outroItem.id !== item.id;
            });

            salvarPainel();
            renderizarPainel();
        });

        linha.append(informacao, botaoExcluir);
        listaPainel.append(linha);
    });

    totalPainel.textContent = itensPainel.length;
}

formularioPainel.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = campoNomePainel.value.trim();
    const categoria = campoCategoriaPainel.value;

    if (nome === "") {
        erroPainel.textContent = "Digite um nome para adicionar o item.";
        return;
    }

    itensPainel.push({
        id: proximoIdPainel,
        nome: nome,
        categoria: categoria
    });

    proximoIdPainel++;

    salvarPainel();

    campoNomePainel.value = "";
    erroPainel.textContent = "";

    renderizarPainel();
    campoNomePainel.focus();
});

buscaPainel.addEventListener("input", renderizarPainel);
filtroPainel.addEventListener("change", renderizarPainel);

carregarPainel();
renderizarPainel();