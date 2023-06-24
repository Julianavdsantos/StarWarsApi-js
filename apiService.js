 

import tabelaService from './tabelaService.js';


const apiService = {
     buscarNaApi: function(url, headers) {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            tabelaService.atualizarTable(data.results, headers);
            
          })
          .catch(error => {
            console.log('Erro ao obter os dados da API:', error);
          });
      }

};
export default apiService;


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('films-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/films/';
      const headers = ['Title', 'Director', 'Producer'];
      apiService.buscarNaApi(url, headers);

     
    });
    setTimeout(function() {
      document.getElementById('films-link').click();
    }, 100);
    document.getElementById('films-link').click();
  
    document.getElementById('people-link').addEventListener('click', function() {
        debugger
      const url = 'https://swapi.dev/api/people/';
      const headers = ['Name', 'Height', 'Mass'];
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('planets-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/planets/';
      const headers = ['Name', 'Population', 'Gravity'];
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('species-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/species/';
      const headers = ['Name', 'Classification', 'Designation'];
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('starships-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/starships/';
      const headers = ['Name', 'Model', 'Passengers'];
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('vehicles-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/vehicles/';
      const headers = ['Name', 'Model', 'Passengers'];
  
      apiService.buscarNaApi(url, headers);

    });
  });
  
