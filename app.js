document.addEventListener("DOMContentLoaded", function() {

    // Selecionar os elementos
    const titulo = document.getElementById("titulo-principal");
    const paragrafo = document.getElementById("paragrafo-boas-vindas");
    const botao = document.getElementById("btn-alterar-texto");

    // Verificar se os elementos foram encontrados
    console.log(titulo);
    console.log(paragrafo);
    console.log(botao);

    // Ler os conteúdos originais
    console.log(titulo.textContent);
    console.log(paragrafo.textContent);

    // Evento de clique
    botao.addEventListener("click", function() {

        titulo.textContent = "DOM Manipulado com Sucesso!";

        paragrafo.textContent = "Parabéns! O JavaScript está a funcionar e o DOM foi manipulado com sucesso!";

    });

});

// EXERCÍCIO 2 - SOMAR VALORES

// Selecionar os elementos
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const botaoSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado-soma");

// Adicionar evento de clique ao botão
botaoSomar.addEventListener("click", function() {

    // Capturar os valores dos inputs e converter para números
    const numero1 = parseFloat(valor1.value);
    const numero2 = parseFloat(valor2.value);

    // Realizar a soma
    const soma = numero1 + numero2;

    // Exibir o resultado
    resultado.textContent = soma;

});


// EXERCÍCIO 3 - CRIAÇÃO E REMOÇÃO DE AVISOS

// Selecionar os elementos
const botaoCriarAviso = document.getElementById("btn-criar-aviso");
const containerAvisos = document.getElementById("container-avisos");

// Adicionar evento de clique ao botão
botaoCriarAviso.addEventListener("click", function() {

    // Criar uma div
    const aviso = document.createElement("div");

    // Adicionar a classe aviso-item
    aviso.classList.add("aviso-item");

    // Criar o texto do aviso
    const texto = document.createElement("span");
    texto.textContent = "Atenção! Novo aviso criado com sucesso!";

    // Criar o botão de fechar
    const botaoFechar = document.createElement("button");
    botaoFechar.textContent = "X";

    // Adicionar evento para fechar o aviso
    botaoFechar.addEventListener("click", function() {
        aviso.remove();
    });

    // Adicionar texto e botão dentro da div
    aviso.appendChild(texto);
    aviso.appendChild(botaoFechar);

    // Inserir o aviso no container
    containerAvisos.appendChild(aviso);

});

// EXERCÍCIO 4 - ALTERNAR TEMA

// Selecionar o botão e o card
const botaoTema = document.getElementById("btn-toggle-tema");
const modulo4 = document.getElementById("modulo-4");

// Adicionar evento de clique
botaoTema.addEventListener("click", function() {

    // Alternar a classe dark-theme
    modulo4.classList.toggle("dark-theme");

});

// EXERCÍCIO 5 - ESTILIZAÇÃO DAS SITUAÇÕES

// Selecionar todas as células com a classe situacao
const situacoes = document.getElementsByClassName("situacao");

// Percorrer todas as células utilizando for...of
for (const celula of situacoes) {

    // Verificar o texto de cada célula
    if (celula.textContent === "Concluído") {

        // Aplicar a cor verde
        celula.style.color = "#22c55e";

    } else if (celula.textContent === "Pendente") {

        // Aplicar a cor vermelha
        celula.style.color = "#ef4444";

    }

}

// EXERCÍCIO 6 - DELEGAÇÃO DE EVENTOS

// Selecionar o painel de botões
const painelBotoes = document.getElementById("painel-botoes");

// Selecionar o elemento que mostrará o resultado
const logBotao = document.getElementById("log-botao");

// Adicionar um único evento de clique ao elemento pai
painelBotoes.addEventListener("click", function(e) {

    // Verificar se o elemento clicado é um botão
    if (e.target.nodeName === "BUTTON") {

        // Mostrar o ID ou texto do botão clicado
        logBotao.textContent = e.target.id;

    }

});

// EXERCÍCIO 7 - MANIPULAÇÃO DE ATRIBUTOS

// Selecionar os elementos
const caixaDestaque = document.getElementById("caixa-destaque");

const botaoAlta = document.getElementById("btn-prioridade-alta");
const botaoBaixa = document.getElementById("btn-prioridade-baixa");
const botaoLimpar = document.getElementById("btn-limpar-atributo");

const infoAtributo = document.getElementById("info-atributo");

// Função para atualizar a informação do atributo
function atualizarInfo() {

    const prioridade = caixaDestaque.getAttribute("data-prioridade");

    infoAtributo.textContent = prioridade !== null ? prioridade : "Nenhum";

}

// Prioridade alta
botaoAlta.addEventListener("click", function() {

    caixaDestaque.setAttribute("data-prioridade", "alta");

    atualizarInfo();

});

// Prioridade baixa
botaoBaixa.addEventListener("click", function() {

    caixaDestaque.setAttribute("data-prioridade", "baixa");

    atualizarInfo();

});

// Remover prioridade
botaoLimpar.addEventListener("click", function() {

    caixaDestaque.removeAttribute("data-prioridade");

    atualizarInfo();

});

// EXERCÍCIO 8 - GESTOR DE TAREFAS

// 1. Criar um array global para armazenar as tarefas
const tarefas = [];

// 2. Selecionar os elementos HTML
const formTarefa = document.getElementById("form-tarefa");

const inputTarefa = document.getElementById("input-tarefa-titulo");

const listaTarefas = document.getElementById("lista-tarefas");

// 3. Criar a função render()
function render() {

    // Limpar a lista antes de atualizar
    listaTarefas.innerHTML = "";

    // Percorrer o array de tarefas
    tarefas.forEach(function(tarefa) {

        // Criar um elemento li
        const item = document.createElement("li");

        // Adicionar o título da tarefa
        item.textContent = tarefa.titulo;

        // Inserir o item na lista
        listaTarefas.appendChild(item);

    });

}

// 4. Escutar o envio do formulário
formTarefa.addEventListener("submit", function(event) {

    // Impedir o recarregamento da página
    event.preventDefault();

    // Capturar o título digitado
    const titulo = inputTarefa.value.trim();

    // Verificar se o campo não está vazio
    if (titulo === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Adicionar a nova tarefa ao array
    tarefas.push({
        titulo: titulo
    });

    // Atualizar a lista visual
    render();

    // Limpar o campo de texto
    inputTarefa.value = "";

});
