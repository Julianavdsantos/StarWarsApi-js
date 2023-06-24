// Serviço de Tabela (Table Service)
import detalhesService from './detalhesService.js';


const tabelaService = {
    atualizarTable: function(data, menu) {
      const corpoTabela = document.querySelector('#data-table tbody');
      const tableHeader = document.querySelector('#data-table thead tr');
  
      corpoTabela.innerHTML = '';
      tableHeader.innerHTML = '';
  
      if (data.length === 0) {
        const row = corpoTabela.insertRow();
        const cell = row.insertCell();
        cell.textContent = 'Nenhum resultado encontrado.';
      } else {
        menu.forEach(header => {
          const th = document.createElement('th');
          th.textContent = header;
          tableHeader.appendChild(th);
        });
  
        data.forEach(item => {
          const row = corpoTabela.insertRow();
  
          menu.forEach(header => {
            const cell = row.insertCell();
            cell.textContent = item[header.toLowerCase()];
          });
  
          row.addEventListener('click', function() {
            detalhesService.mostrarDetalhes(item);
          });
        });
      }
    },
    
  };
  
  export default tabelaService ;