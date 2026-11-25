'use strict';

// Game Catalogue

function createGameCard(game) {
    const card = document.createElement('article');

    card.classList.add('game-card');

    card.innerHTML = `
        <div class="game-card-image">
            <img
                src="../images/gaming/${game.image}"
                alt="${game.title} game cover"
            >
        </div>

        <div class="game-card-content">
            <h3>${game.title}</h3>
            <p class="game-card-details">
                ${game.year} · ${game.condition}
            </p>
            <p class="game-card-price">
                $${game.price.toFixed(2)}
            </p>
        </div>
    `;

    return card;
}

// Render Game Collections

const snesContainer = document.getElementById('snes-games');
const genesisContainer = document.getElementById('genesis-games');
const playstationContainer = document.getElementById('playstation-games');

games.forEach(game => {
    const card = createGameCard(game);

    if (game.system === 'snes') {
        snesContainer.appendChild(card);
    } else if (game.system === 'genesis') {
        genesisContainer.appendChild(card);
    } else if (game.system === 'playstation') {
        playstationContainer.appendChild(card);
    }
});