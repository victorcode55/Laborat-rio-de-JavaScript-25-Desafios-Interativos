
"use strict";

/* ATIVIDADE 1 - Alterar o titulo usando DOM */

const botaoTitulo = document.getElementById("btn-titulo");
const resultadoTitulo = document.getElementById("resultado-titulo");

botaoTitulo.addEventListener("click", function () {
    resultadoTitulo.textContent = "Sistema ativado! Bem-vindo ao NEVER LAND.";
    document.title = "NEVER LAND | Sistema ativado";
});


/* ATIVIDADE 2 - Contador interativo */

let contador = 0;

const valorContador = document.getElementById("valor-contador");

function atualizarContador() {
    valorContador.textContent = contador;
}

document.getElementById("aumentar").addEventListener("click", function () {
    contador++;
    atualizarContador();
});

document.getElementById("diminuir").addEventListener("click", function () {
    contador--;
    atualizarContador();
});

document.getElementById("zerar-contador").addEventListener("click", function () {
    contador = 0;
    atualizarContador();
});


/* ATIVIDADE 3 - Alternar aparencia de um elemento */

const cartaoTema = document.querySelector(".destaque-desafio");
const resultadoTema = document.getElementById("resultado-tema");

document.getElementById("btn-tema").addEventListener("click", function () {
    cartaoTema.classList.toggle("tema-alternativo");

    const temaAtivo = cartaoTema.classList.contains("tema-alternativo");

    resultadoTema.textContent = temaAtivo
        ? "Modo azul-noturno ativado."
        : "Tema claro ativado.";
});


/* ATIVIDADE 4 - Verificar se um numero e par ou impar */

document.getElementById("btn-par").addEventListener("click", function () {
    const campo = document.getElementById("numero-par");
    const resultado = document.getElementById("resultado-par");

    if (campo.value.trim() === "") {
        resultado.textContent = "Digite um numero primeiro.";
        return;
    }

    const numero = Number(campo.value);

    resultado.textContent = numero % 2 === 0
        ? `${numero} e um numero par.`
        : `${numero} e um numero impar.`;
});


/* ATIVIDADE 5 - Mensagem personalizada */

document.getElementById("btn-nome").addEventListener("click", function () {
    const nome = document.getElementById("nome-usuario").value.trim();
    const resultado = document.getElementById("resultado-nome");

    if (nome === "") {
        resultado.textContent = "Digite seu nome para continuar.";
        return;
    }

    resultado.textContent = `Bem-vindo ao NEVER LAND, ${nome}!`;
});


/* ATIVIDADE 6 - Calculadora de soma */

document.getElementById("btn-somar").addEventListener("click", function () {
    const campoA = document.getElementById("soma-a");
    const campoB = document.getElementById("soma-b");
    const resultado = document.getElementById("resultado-soma");

    if (campoA.value.trim() === "" || campoB.value.trim() === "") {
        resultado.textContent = "Preencha os dois numeros.";
        return;
    }

    const a = Number(campoA.value);
    const b = Number(campoB.value);

    resultado.textContent = `Resultado: ${a + b}`;
});


/* ATIVIDADE 7 - Contar caracteres */

const textoCaracteres = document.getElementById("texto-caracteres");
const quantidadeCaracteres = document.getElementById("quantidade-caracteres");

textoCaracteres.addEventListener("input", function () {
    quantidadeCaracteres.textContent = textoCaracteres.value.length;
});


/* ATIVIDADE 8 - Gerar numero aleatorio */

document.getElementById("btn-aleatorio").addEventListener("click", function () {
    const numero = Math.floor(Math.random() * 100) + 1;

    document.getElementById("resultado-aleatorio").textContent = numero;
});


/* ATIVIDADE 9 - Verificar faixa etaria */

document.getElementById("btn-idade").addEventListener("click", function () {
    const campo = document.getElementById("idade-usuario");
    const resultado = document.getElementById("resultado-idade");

    if (campo.value.trim() === "") {
        resultado.textContent = "Digite uma idade.";
        return;
    }

    const idade = Number(campo.value);

    if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
        resultado.textContent = "Digite uma idade valida.";
    } else if (idade < 13) {
        resultado.textContent = "Faixa: crianca.";
    } else if (idade < 18) {
        resultado.textContent = "Faixa: adolescente.";
    } else if (idade < 60) {
        resultado.textContent = "Faixa: adulto.";
    } else {
        resultado.textContent = "Faixa: idoso.";
    }
});


/* ATIVIDADE 10 - Transformar texto em maiusculas */

document.getElementById("btn-maiusculo").addEventListener("click", function () {
    const texto = document.getElementById("texto-maiusculo").value.trim();
    const resultado = document.getElementById("resultado-maiusculo");

    resultado.textContent = texto
        ? texto.toLocaleUpperCase("pt-BR")
        : "Digite uma frase para transformar.";
});


/* ATIVIDADE 11 - Lista de tarefas */

const campoTarefa = document.getElementById("nova-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa() {
    const texto = campoTarefa.value.trim();

    if (texto === "") {
        campoTarefa.focus();
        return;
    }

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const descricao = document.createElement("span");
    const botaoExcluir = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Marcar tarefa como concluida");

    descricao.textContent = texto;

    botaoExcluir.type = "button";
    botaoExcluir.textContent = "×";
    botaoExcluir.setAttribute("aria-label", "Excluir tarefa");

    checkbox.addEventListener("change", function () {
        item.classList.toggle("concluida", checkbox.checked);
    });

    botaoExcluir.addEventListener("click", function () {
        item.remove();
    });

    item.append(checkbox, descricao, botaoExcluir);
    listaTarefas.appendChild(item);

    campoTarefa.value = "";
    campoTarefa.focus();
}

document.getElementById("btn-tarefa").addEventListener("click", adicionarTarefa);

campoTarefa.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});


/* ATIVIDADE 12 - Relogio digital */

function atualizarRelogio() {
    const agora = new Date();

    document.getElementById("relogio").textContent =
        agora.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);


/* ATIVIDADE 13 - Comparar dois numeros */

document.getElementById("btn-maior").addEventListener("click", function () {
    const campoA = document.getElementById("maior-a");
    const campoB = document.getElementById("maior-b");
    const resultado = document.getElementById("resultado-maior");

    if (campoA.value.trim() === "" || campoB.value.trim() === "") {
        resultado.textContent = "Preencha os dois valores.";
        return;
    }

    const a = Number(campoA.value);
    const b = Number(campoB.value);

    if (a > b) {
        resultado.textContent = `${a} e maior que ${b}.`;
    } else if (b > a) {
        resultado.textContent = `${b} e maior que ${a}.`;
    } else {
        resultado.textContent = "Os dois valores sao iguais.";
    }
});


/* ATIVIDADE 14 - Escolha surpresa */

const surpresas = [
    "Hoje e um bom dia para aprender algo novo.",
    "Uma grande ideia pode comecar com uma linha de codigo.",
    "Continue tentando: cada erro ensina alguma coisa.",
    "Seu proximo projeto pode ser o melhor ate agora.",
    "Explore, teste e descubra novas possibilidades.",
    "O segredo e transformar curiosidade em pratica."
];

document.getElementById("btn-surpresa").addEventListener("click", function () {
    const indice = Math.floor(Math.random() * surpresas.length);

    document.getElementById("resultado-surpresa").textContent = surpresas[indice];
});


/* ATIVIDADE 15 - Validar tamanho de senha */

document.getElementById("btn-senha").addEventListener("click", function () {
    const senha = document.getElementById("senha-teste").value;
    const resultado = document.getElementById("resultado-senha");

    if (senha.length >= 8) {
        resultado.textContent = "Senha aprovada no teste de tamanho.";
    } else {
        resultado.textContent = "A senha precisa ter pelo menos 8 caracteres.";
    }
});


/* ATIVIDADE 16 - Gerar tabuada */

document.getElementById("btn-tabuada").addEventListener("click", function () {
    const campo = document.getElementById("numero-tabuada");
    const resultado = document.getElementById("resultado-tabuada");

    if (campo.value.trim() === "") {
        resultado.textContent = "Digite um numero para gerar a tabuada.";
        return;
    }

    const numero = Number(campo.value);

    if (!Number.isInteger(numero) || Math.abs(numero) > 1000000) {
        resultado.textContent = "Digite um numero inteiro valido.";
        return;
    }

    const linhas = [];

    for (let i = 1; i <= 10; i++) {
        linhas.push(`${numero} x ${i} = ${numero * i}`);
    }

    resultado.replaceChildren();

    linhas.forEach(function (linha) {
        const elemento = document.createElement("div");
        elemento.textContent = linha;
        resultado.appendChild(elemento);
    });
});


/* ATIVIDADE 17 - Mudar cor do painel */

const coresPainel = [
    { fundo: "#eaf1ff", texto: "#071426", nome: "Azul claro" },
    { fundo: "#dceafe", texto: "#17375d", nome: "Azul gelo" },
    { fundo: "#d7e6ff", texto: "#102b50", nome: "Azul suave" },
    { fundo: "#c4d8ff", texto: "#071426", nome: "Azul celeste" },
    { fundo: "#f0f5ff", texto: "#2864f0", nome: "Branco azulado" }
];

let indiceCor = 0;

document.getElementById("btn-cor").addEventListener("click", function () {
    const painel = document.getElementById("painel-cor");

    indiceCor = (indiceCor + 1) % coresPainel.length;

    const cor = coresPainel[indiceCor];

    painel.style.backgroundColor = cor.fundo;
    painel.style.color = cor.texto;
    painel.textContent = `Cor atual: ${cor.nome}`;
});


/* ATIVIDADE 18 - Inverter texto */

document.getElementById("btn-inverter").addEventListener("click", function () {
    const texto = document.getElementById("texto-inverter").value;
    const resultado = document.getElementById("resultado-inverter");

    if (texto.trim() === "") {
        resultado.textContent = "Digite uma palavra ou frase.";
        return;
    }

    resultado.textContent = Array.from(texto).reverse().join("");
});


/* ATIVIDADE 19 - Contagem regressiva */

let intervaloRegressiva = null;

document.getElementById("btn-regressiva").addEventListener("click", function () {
    const botao = this;
    const resultado = document.getElementById("resultado-regressiva");

    if (intervaloRegressiva !== null) {
        clearInterval(intervaloRegressiva);
    }

    let numero = 10;

    resultado.textContent = numero;
    botao.disabled = true;
    botao.textContent = "Contagem em andamento...";

    intervaloRegressiva = setInterval(function () {
        numero--;

        resultado.textContent = numero;

        if (numero <= 0) {
            clearInterval(intervaloRegressiva);
            intervaloRegressiva = null;

            resultado.textContent = "Fim!";
            botao.disabled = false;
            botao.textContent = "Iniciar novamente";
        }
    }, 1000);
});


/* ATIVIDADE 20 - Bloco de notas com localStorage */

const campoNota = document.getElementById("nota");
const resultadoNota = document.getElementById("resultado-nota");
const CHAVE_NOTA = "neverland-nota";

try {
    const notaSalva = localStorage.getItem(CHAVE_NOTA);

    if (notaSalva !== null) {
        campoNota.value = notaSalva;
        resultadoNota.textContent = "Nota recuperada do navegador.";
    }
} catch (erro) {
    resultadoNota.textContent = "O armazenamento nao esta disponivel.";
}

document.getElementById("btn-nota").addEventListener("click", function () {
    try {
        localStorage.setItem(CHAVE_NOTA, campoNota.value);
        resultadoNota.textContent = "Nota salva com sucesso neste navegador.";
    } catch (erro) {
        resultadoNota.textContent = "Nao foi possivel salvar a nota.";
    }
});


/* ATIVIDADE 21 - Criar biblioteca de jogos */

const jogosIniciais = [
    {
        id: 1,
        nome: "Minecraft",
        categoria: "Aventura",
        icone: "▦",
        descricao: "Explore mundos, construa estruturas e use a criatividade.",
        plataforma: "PC / Console",
        cor: "jogo-cor-1"
    },
    {
        id: 2,
        nome: "Spider-Man",
        categoria: "Ação",
        icone: "✦",
        descricao: "Balance pela cidade e viva uma aventura de super-heroi.",
        plataforma: "Console",
        cor: "jogo-cor-2"
    },
    {
        id: 3,
        nome: "The Witcher",
        categoria: "RPG",
        icone: "⚔",
        descricao: "Uma jornada de fantasia, escolhas e exploracao.",
        plataforma: "PC / Console",
        cor: "jogo-cor-3"
    },
    {
        id: 4,
        nome: "Forza Horizon",
        categoria: "Corrida",
        icone: "➤",
        descricao: "Velocidade, carros e desafios em pistas abertas.",
        plataforma: "PC / Console",
        cor: "jogo-cor-4"
    },
    {
        id: 5,
        nome: "Cyberpunk 2077",
        categoria: "RPG",
        icone: "⌘",
        descricao: "Descubra uma metropole futurista cheia de escolhas.",
        plataforma: "PC / Console",
        cor: "jogo-cor-5"
    },
    {
        id: 6,
        nome: "Call of Duty",
        categoria: "Ação",
        icone: "◎",
        descricao: "Desafios de combate e missoes de alta intensidade.",
        plataforma: "PC / Console",
        cor: "jogo-cor-6"
    }
];

const gradeJogos = document.getElementById("grade-jogos");
const campoBuscaJogos = document.getElementById("busca-jogos");
const botoesFiltros = document.querySelectorAll(".filtro");
const totalJogos = document.getElementById("total-jogos");
const colecaoLista = document.getElementById("colecao-lista");

let categoriaAtual = "Todos";
let favoritos = [];
let meusJogos = [];

const CHAVE_FAVORITOS = "neverland-favoritos";
const CHAVE_COLECAO = "neverland-meus-jogos";

function carregarLista(chave) {
    try {
        const dados = JSON.parse(localStorage.getItem(chave) || "[]");

        if (!Array.isArray(dados)) {
            return [];
        }

        return dados.filter(function (id) {
            return Number.isInteger(id) &&
                jogosIniciais.some(function (jogo) {
                    return jogo.id === id;
                });
        });
    } catch (erro) {
        return [];
    }
}

favoritos = carregarLista(CHAVE_FAVORITOS);
meusJogos = carregarLista(CHAVE_COLECAO);


/* ATIVIDADE 22 - Renderizar cartoes dinamicamente */

function criarCartaoJogo(jogo) {
    const cartao = document.createElement("article");
    cartao.className = "jogo";

    const arte = document.createElement("div");
    arte.className = `jogo-arte ${jogo.cor}`;

    const icone = document.createElement("span");
    icone.className = "jogo-icone";
    icone.textContent = jogo.icone;
    icone.setAttribute("aria-hidden", "true");

    const etiqueta = document.createElement("span");
    etiqueta.className = "jogo-tag";
    etiqueta.textContent = "NEVER LAND COLLECTION";

    const botaoFavorito = document.createElement("button");
    botaoFavorito.type = "button";
    botaoFavorito.className = "jogo-coracao";
    botaoFavorito.textContent = favoritos.includes(jogo.id) ? "★" : "☆";
    botaoFavorito.classList.toggle("favorito", favoritos.includes(jogo.id));

    botaoFavorito.setAttribute(
        "aria-label",
        favoritos.includes(jogo.id)
            ? `Remover ${jogo.nome} dos favoritos`
            : `Adicionar ${jogo.nome} aos favoritos`
    );

    botaoFavorito.addEventListener("click", function () {
        alternarFavorito(jogo.id);
    });

    arte.append(icone, etiqueta, botaoFavorito);

    const informacoes = document.createElement("div");
    informacoes.className = "jogo-info";

    const titulo = document.createElement("h3");
    titulo.textContent = jogo.nome;

    const descricao = document.createElement("p");
    descricao.textContent = jogo.descricao;

    const meta = document.createElement("div");
    meta.className = "jogo-meta";

    const categoria = document.createElement("span");
    categoria.textContent = jogo.categoria;

    const plataforma = document.createElement("span");
    plataforma.textContent = jogo.plataforma;

    meta.append(categoria, plataforma);

    const botaoColecao = document.createElement("button");
    botaoColecao.type = "button";
    botaoColecao.className = "botao botao-escuro";
    botaoColecao.textContent = meusJogos.includes(jogo.id)
        ? "Adicionado a minha colecao ✓"
        : "Adicionar a minha colecao +";

    botaoColecao.addEventListener("click", function () {
        alternarColecao(jogo.id);
    });

    informacoes.append(titulo, descricao, meta, botaoColecao);
    cartao.append(arte, informacoes);

    return cartao;
}

function renderizarJogos() {
    const busca = campoBuscaJogos.value.trim().toLocaleLowerCase("pt-BR");

    const jogosFiltrados = jogosIniciais.filter(function (jogo) {
        const combinaCategoria =
            categoriaAtual === "Todos" || jogo.categoria === categoriaAtual;

        const combinaBusca =
            jogo.nome.toLocaleLowerCase("pt-BR").includes(busca) ||
            jogo.categoria.toLocaleLowerCase("pt-BR").includes(busca) ||
            jogo.descricao.toLocaleLowerCase("pt-BR").includes(busca);

        return combinaCategoria && combinaBusca;
    });

    gradeJogos.replaceChildren();

    if (jogosFiltrados.length === 0) {
        const mensagem = document.createElement("div");
        mensagem.className = "sem-resultados";
        mensagem.textContent = "Nenhum jogo encontrado. Tente outra busca.";
        gradeJogos.appendChild(mensagem);
    } else {
        jogosFiltrados.forEach(function (jogo) {
            gradeJogos.appendChild(criarCartaoJogo(jogo));
        });
    }

    totalJogos.textContent = String(jogosFiltrados.length).padStart(2, "0");
}


/* ATIVIDADE 23 - Busca e filtros por categoria */

botoesFiltros.forEach(function (botao) {
    botao.addEventListener("click", function () {
        categoriaAtual = botao.dataset.categoria;

        botoesFiltros.forEach(function (item) {
            item.classList.toggle("ativo", item === botao);
        });

        renderizarJogos();
    });
});

campoBuscaJogos.addEventListener("input", renderizarJogos);


/* ATIVIDADE 24 - Sistema de favoritos */

function salvarFavoritos() {
    try {
        localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
        return true;
    } catch (erro) {
        return false;
    }
}

function alternarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(function (favorito) {
            return favorito !== id;
        });
    } else {
        favoritos.push(id);
    }

    if (!salvarFavoritos()) {
        alert("O navegador nao permitiu salvar os favoritos.");
    }

    renderizarJogos();
    renderizarColecao();
}


/* ATIVIDADE 25 - Colecao pessoal e armazenamento local */

function salvarColecao() {
    try {
        localStorage.setItem(CHAVE_COLECAO, JSON.stringify(meusJogos));
        return true;
    } catch (erro) {
        return false;
    }
}

function alternarColecao(id) {
    if (meusJogos.includes(id)) {
        meusJogos = meusJogos.filter(function (jogoId) {
            return jogoId !== id;
        });
    } else {
        meusJogos.push(id);
    }

    if (!salvarColecao()) {
        alert("O navegador nao permitiu salvar sua colecao.");
    }

    renderizarJogos();
    renderizarColecao();
}

function renderizarColecao() {
    colecaoLista.replaceChildren();

    const jogosSalvos = jogosIniciais.filter(function (jogo) {
        return meusJogos.includes(jogo.id);
    });

    if (jogosSalvos.length === 0) {
        const mensagem = document.createElement("span");
        mensagem.className = "colecao-vazia";
        mensagem.textContent = "Adicione jogos para montar sua colecao.";
        colecaoLista.appendChild(mensagem);
        return;
    }

    jogosSalvos.forEach(function (jogo) {
        const item = document.createElement("div");
        item.className = "colecao-item";

        const icone = document.createElement("span");
        icone.textContent = "★";

        const nome = document.createElement("span");
        nome.textContent = jogo.nome;

        item.append(icone, nome);
        colecaoLista.appendChild(item);
    });
}

document.getElementById("limpar-colecao").addEventListener("click", function () {
    meusJogos = [];

    if (!salvarColecao()) {
        alert("Nao foi possivel atualizar a colecao salva.");
    }

    renderizarJogos();
    renderizarColecao();
});

// Inicializa a biblioteca e a colecao ao abrir a pagina.
renderizarJogos();
renderizarColecao();
