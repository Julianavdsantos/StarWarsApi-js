 

import tabelaService from './tabelaService.js';


const apiService = {
     buscarNaApi: function(url, headers) {
        fetch(url)
          .then(response => response.json())
          .then(data => {
           document.getElementById('loading-indicator').style.display = 'none';
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
     document.getElementById('loading-indicator').style.display = 'block';
      apiService.buscarNaApi(url, headers);

     
    });
  
    document.getElementById('people-link').addEventListener('click', function() {
        debugger
      const url = 'https://swapi.dev/api/people/';
      const headers = ['Name', 'Height', 'Mass'];
     document.getElementById('loading-indicator').style.display = 'block';
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('planets-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/planets/';
      const headers = ['Name', 'Population', 'Gravity'];
     document.getElementById('loading-indicator').style.display = 'block';
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('species-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/species/';
      const headers = ['Name', 'Classification', 'Designation'];
     document.getElementById('loading-indicator').style.display = 'block';
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('starships-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/starships/';
      const headers = ['Name', 'Model', 'Passengers'];
     document.getElementById('loading-indicator').style.display = 'block';
      apiService.buscarNaApi(url, headers);

    });
  
    document.getElementById('vehicles-link').addEventListener('click', function() {
      const url = 'https://swapi.dev/api/vehicles/';
      const headers = ['Name', 'Model', 'Passengers'];
     document.getElementById('loading-indicator').style.display = 'block';
      apiService.buscarNaApi(url, headers);

    });
  });
  
