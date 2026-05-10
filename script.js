// Pegando os elementos da página
const inputTarefa = document.getElementById('input-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// Função que adiciona uma nova tarefa
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();
    
    // Se o campo estiver vazio, não faz nada
    if (textoTarefa === '') {
        alert('Digite uma tarefa antes de adicionar!');
        return;
    }
    
    // Cria o item da lista
    const novoItem = document.createElement('li');
    
    // Cria o texto da tarefa
    const spanTexto = document.createElement('span');
    spanTexto.className = 'texto-tarefa';
    spanTexto.textContent = textoTarefa;
    
    // Quando clicar no texto, marca como concluída
    spanTexto.addEventListener('click', function() {
        novoItem.classList.toggle('concluida');
    });
    
    // Cria o botão de apagar
    const botaoApagar = document.createElement('button');
    botaoApagar.className = 'botao-apagar';
    botaoApagar.textContent = 'Apagar';
    
    // Quando clicar no botão, apaga a tarefa
    botaoApagar.addEventListener('click', function() {
        novoItem.remove();
    });
    
    // Junta tudo no item da lista
    novoItem.appendChild(spanTexto);
    novoItem.appendChild(botaoApagar);
    
    // Adiciona o item na lista
    listaTarefas.appendChild(novoItem);
    
    // Limpa o campo de digitar
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Quando clicar no botão Adicionar, chama a função
botaoAdicionar.addEventListener('click', adicionarTarefa);

// Quando apertar Enter no campo, também adiciona
inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});