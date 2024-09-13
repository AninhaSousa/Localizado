 // Função para buscar os estados
 async function getEstados() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const estados = await response.json();
    const estadoSelect = document.getElementById('estado');

    estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.id;
        option.textContent = estado.nome;
        estadoSelect.appendChild(option);
    });
}

// Função para buscar as cidades com base no estado selecionado
async function getCidades(estadoId) {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
    const cidades = await response.json();
    const cidadeSelect = document.getElementById('cidade');

    // Limpa as cidades anteriores
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';

    cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade.id;
        option.textContent = cidade.nome;
        cidadeSelect.appendChild(option);
    });
}

// Função chamada ao selecionar um estado
function estadoSelecionado() {
    const estadoId = document.getElementById('estado').value;
    if (estadoId) {
        getCidades(estadoId);
    } else {
        document.getElementById('cidade').innerHTML = '<option value="">Selecione uma cidade</option>';
    }
}

// Carregar os estados ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    getEstados();
});



  // Simulação de ação de busca
  const searchButton = document.getElementById('searchButton');
  const loading = document.getElementById('loading');

  searchButton.addEventListener('click', () => {
      loading.style.display = 'flex'; // Exibe a animação de carregamento
      setTimeout(() => {
          loading.style.display = 'none'; // Oculta a animação após 3 segundos
      }, 3000); 
  });