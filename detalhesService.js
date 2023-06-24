 // Serviço de Detalhes (Detalhes Service)

 const detalhesService = {
    mostrarDetalhes: function(item) {
      const modalTitulo = document.getElementById('details-modal-label');
      const modalContent = document.getElementById('details-content');
  
      modalTitulo.textContent = item.name || item.title;
      modalContent.innerHTML = '';
  
      const listaDetalhes = document.createElement('ul');
      Object.entries(item).forEach(([key, value]) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        listaDetalhes.appendChild(listItem);
      });
  
      modalContent.appendChild(listaDetalhes);
  
      $('#details-modal').modal('show');
    },
  };
  
  export default detalhesService ;