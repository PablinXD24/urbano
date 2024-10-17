// Variável global para o mapa
let map;

// Função para alternar entre camadas
function goToLayer(layerNumber) {
    // Esconder todas as camadas
    document.querySelectorAll('.layer').forEach(layer => {
        layer.classList.add('hidden');
    });
    
    // Mostrar a camada selecionada
    document.getElementById('layer' + layerNumber).classList.remove('hidden');

    // Inicializar o mapa se estivermos na camada 4
    if (layerNumber === 4) {
        initMap();
    }
}

// Inicializar o mapa na quarta camada
function initMap() {
    map = new L.Map('map', {
        center: [-23.55052, -46.633308], // Posição central do mapa
        zoom: 12
    });

    // Adicionar a camada de mapa OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
}

// Função para adicionar marcadores no mapa
function addMarker() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    // Para fins de demonstração, vamos usar coordenadas fixas
    // Você pode substituir isso por uma chamada de geocoding para obter as coordenadas reais
    const departureCoords = [-23.55052, -46.633308]; // Exemplo: São Paulo
    const destinationCoords = [-23.5489, -46.6388]; // Exemplo: Centro de São Paulo

    // Adiciona o marcador de partida
    L.marker(departureCoords).addTo(map)
        .bindPopup('Partida: ' + departure)
        .openPopup();

    // Adiciona o marcador de destino
    L.marker(destinationCoords).addTo(map)
        .bindPopup('Destino: ' + destination)
        .openPopup();

    // Centraliza o mapa para mostrar ambos os marcadores
    map.setView(departureCoords, 12); // Ajuste o zoom se necessário
}

// Inicializar o mapa ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    goToLayer(1); // Iniciar na primeira camada
});
