'use strict';

const games = [
    {
        "id": 1,
        "title": "Sonic the Hedgehog 3",
        "system": "genesis",
        "developer": "Sonic Team",
        "year": 1994,
        "genre": ["Platformer"],
        "price": 49.95,
        "condition": "Excellent",
        "image": "sonic-the-hedgehog-3.jpg"
    },
    {
        "id": 2,
        "title": "Herzog Zwei",
        "system": "genesis",
        "developer": "Technosoft",
        "year": 1989,
        "genre": ["Strategy", "Action"],
        "price": 59.95,
        "condition": "Good",
        "image": "herzog-zwei.jpg"
    },
    {
        "id": 3,
        "title": "Cannon Fodder",
        "system": "genesis",
        "developer": "Sensible Software",
        "year": 1994,
        "genre": ["Strategy", "Action"],
        "price": 44.95,
        "condition": "Good",
        "image": "cannon-fodder.jpg"
    },
    {
        "id": 4,
        "title": "Earthworm Jim",
        "system": "genesis",
        "developer": "Shiny Entertainment",
        "year": 1994,
        "genre": ["Platformer", "Action"],
        "price": 54.95,
        "condition": "Excellent",
        "image": "earthworm-jim.jpg"
    },
    {
        "id": 5,
        "title": "Streets of Rage 2",
        "system": "genesis",
        "developer": "Sega",
        "year": 1992,
        "genre": ["Beat 'em up", "Action"],
        "price": 64.95,
        "condition": "Excellent",
        "image": "streets-of-rage-2.jpg"
    },
    {
        "id": 6,
        "title": "Gunstar Heroes",
        "system": "genesis",
        "developer": "Treasure",
        "year": 1993,
        "genre": ["Run and gun", "Action"],
        "price": 69.95,
        "condition": "Excellent",
        "image": "gunstar-heroes.jpg"
    },
    {
        "id": 7,
        "title": "Road Rash II",
        "system": "genesis",
        "developer": "Electronic Arts",
        "year": 1992,
        "genre": ["Racing", "Action"],
        "price": 39.95,
        "condition": "Good",
        "image": "road-rash-ii.jpg"
    },
    {
        "id": 8,
        "title": "Phantasy Star IV",
        "system": "genesis",
        "developer": "Sega",
        "year": 1993,
        "genre": ["RPG"],
        "price": 89.95,
        "condition": "Excellent",
        "image": "phantasy-star-iv.jpg"
    },
    {
        "id": 9,
        "title": "Super Mario World",
        "system": "snes",
        "developer": "Nintendo",
        "year": 1990,
        "genre": ["Platformer"],
        "price": 59.95,
        "condition": "Excellent",
        "image": "super-mario-world.jpg"
    },
    {
        "id": 10,
        "title": "Donkey Kong Country",
        "system": "snes",
        "developer": "Rare",
        "year": 1994,
        "genre": ["Platformer"],
        "price": 54.95,
        "condition": "Good",
        "image": "donkey-kong-country.jpg"
    },
    {
        "id": 11,
        "title": "The Legend of Zelda: A Link to the Past",
        "system": "snes",
        "developer": "Nintendo",
        "year": 1991,
        "genre": ["Adventure", "RPG"],
        "price": 79.95,
        "condition": "Excellent",
        "image": "a-link-to-the-past.jpg"
    },
    {
        "id": 12,
        "title": "Super Metroid",
        "system": "snes",
        "developer": "Nintendo R&D1",
        "year": 1994,
        "genre": ["Action", "Adventure"],
        "price": 69.95,
        "condition": "Excellent",
        "image": "super-metroid-sale.jpg"
    },
    {
        "id": 13,
        "title": "EarthBound",
        "system": "snes",
        "developer": "Ape Inc.",
        "year": 1994,
        "genre": ["RPG"],
        "price": 129.95,
        "condition": "Good",
        "image": "earthbound.jpg"
    },
    {
        "id": 14,
        "title": "SimCity",
        "system": "snes",
        "developer": "Nintendo",
        "year": 1991,
        "genre": ["Simulation", "Strategy"],
        "price": 34.95,
        "condition": "Good",
        "image": "simcity.jpg"
    },
    {
        "id": 15,
        "title": "ActRaiser",
        "system": "snes",
        "developer": "Quintet",
        "year": 1990,
        "genre": ["Action", "Simulation"],
        "price": 49.95,
        "condition": "Excellent",
        "image": "actraiser.jpg"
    },
    {
        "id": 16,
        "title": "Chrono Trigger",
        "system": "snes",
        "developer": "Square",
        "year": 1995,
        "genre": ["RPG"],
        "price": 149.95,
        "condition": "Excellent",
        "image": "chrono-trigger.jpg"
    },
    {
        "id": 17,
        "title": "Final Fantasy VII",
        "system": "playstation",
        "developer": "Square",
        "year": 1997,
        "genre": ["RPG"],
        "price": 39.95,
        "condition": "Good",
        "image": "final-fantasy-vii.jpg"
    },
    {
        "id": 18,
        "title": "Gran Turismo",
        "system": "playstation",
        "developer": "Polyphony Digital",
        "year": 1997,
        "genre": ["Racing", "Simulation"],
        "price": 24.95,
        "condition": "Excellent",
        "image": "gran-turismo.jpg"
    },
    {
        "id": 19,
        "title": "Crash Bandicoot",
        "system": "playstation",
        "developer": "Naughty Dog",
        "year": 1996,
        "genre": ["Platformer"],
        "price": 34.95,
        "condition": "Good",
        "image": "crash-bandicoot.jpg"
    },
    {
        "id": 20,
        "title": "Point Blank",
        "system": "playstation",
        "developer": "Namco",
        "year": 1997,
        "genre": ["Shooter", "Party"],
        "price": 44.95,
        "condition": "Excellent",
        "image": "point-blank.jpg"
    },
    {
        "id": 21,
        "title": "Crash Team Racing",
        "system": "playstation",
        "developer": "Naughty Dog",
        "year": 1999,
        "genre": ["Racing", "Party"],
        "price": 39.95,
        "condition": "Excellent",
        "image": "crash-team-racing.jpg"
    },
    {
        "id": 22,
        "title": "Colin McRae Rally",
        "system": "playstation",
        "developer": "Codemasters",
        "year": 1998,
        "genre": ["Racing"],
        "price": 29.95,
        "condition": "Good",
        "image": "colin-mcrae-rally.jpg"
    },
    {
        "id": 23,
        "title": "Air Combat",
        "system": "playstation",
        "developer": "Namco",
        "year": 1995,
        "genre": ["Flight Simulator", "Action"],
        "price": 34.95,
        "condition": "Good",
        "image": "air-combat.jpg"
    },
    {
        "id": 24,
        "title": "Tekken 3",
        "system": "playstation",
        "developer": "Namco",
        "year": 1998,
        "genre": ["Fighting"],
        "price": 49.95,
        "condition": "Excellent",
        "image": "tekken-3.jpg"
    }
]
