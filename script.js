document.addEventListener("DOMContentLoaded", () => {
    fetch('cards.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-container');
            
            data.forEach(carta => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                
                cardDiv.innerHTML = `
                    <img src="${carta.imagem}" alt="Carta Pokémon">
                    <h3>${carta.nome}</h3>
                    <p>Valor: ${carta.valor}</p>
                `;
                
                cardsContainer.appendChild(cardDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar as cartas:', error));
});
