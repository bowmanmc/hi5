
const ACCEPTABLE_GIFS = [
    'https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif', // sponge bob
    'https://media.giphy.com/media/4QFAH0qZ0LQnIwVYKT/giphy.gif', // schitt's creek - johnny
    'https://media.giphy.com/media/3og0IEX0hhzgZtO6Eo/giphy.gif', // schitt's creek - alexis
    'https://media.giphy.com/media/xUPGcEbn96EMoL9UyY/giphy.gif', // schitt's creek - stevie
    'https://media.giphy.com/media/5wWf7GW1AzV6pF3MaVW/giphy.gif', // office - pam/jim
    'https://media.giphy.com/media/o8LYOPJKPsYhmNgiuD/giphy.gif', // office
    'https://media.giphy.com/media/sfxlOSTXORjOobH2QG/giphy.gif', // office - dwight
    'https://media.giphy.com/media/l0ErFafpUCQTQFMSk/giphy.gif', // borat
    'https://media.giphy.com/media/26ufgSwMRqauQWqL6/giphy.gif', // adam sandler & chris farley
    'https://media.giphy.com/media/HX3lSnGXZnaWk/giphy.gif', // fresh prince
    'https://media.giphy.com/media/wrzf9P70YWLJK/giphy.gif', // top gun
    'https://media.giphy.com/media/WKdPOVCG5LPaM/giphy.gif', // snl
    'https://media.giphy.com/media/P9AcFvOP8zByE/giphy.gif', // tina fey & amy poehler
    'https://media.giphy.com/media/r2BtghAUTmpP2/giphy.gif', // jumping high five
    'https://media.giphy.com/media/3oz8xFT5JkOhZhCWDC/giphy.gif', // mail chimp?
    'https://media.giphy.com/media/3o6Zt7hngn9xwnN7lC/giphy.gif', // mail chimp 2
    'https://media.giphy.com/media/fLK0eUlYZoB6E/giphy.gif', // breaking bad
    'https://media.giphy.com/media/4SS0kfzRqfBf2/giphy.gif', // community 1
    'https://media.giphy.com/media/GY5X9VkFU8gpi/giphy.gif', // community 2
    'https://media.giphy.com/media/RLn2w2fLpcwTu/giphy.gif', // community 3
    'https://media.giphy.com/media/rM9Cl7MZphBqU/giphy.gif', // 30 rock
    'https://media.giphy.com/media/l1ug5sWBCJOOGzN84/giphy.gif', // step brothers 1
    'https://media.giphy.com/media/xTiIzxuqyaxqTb4vAs/giphy.gif', // step brothers 2
    'https://media.giphy.com/media/qNbZIIdTXLTHy/giphy.gif', // scooby doo
    'https://media.giphy.com/media/10LNj580n9OmiI/giphy.gif', // ninja turtles
    'https://media.giphy.com/media/13zazU4zSlJCiA/giphy.gif', // snl
    'https://media.giphy.com/media/1HPzxMBCTvjMs/giphy.gif', // saved by the bell
    'https://media.giphy.com/media/l0HlNcircjaT2VT2M/giphy.gif', // family guy
    'https://media.giphy.com/media/MhitpKESU1fRS/giphy.gif', // ncis
    'https://media.giphy.com/media/3o7TKuJ309O5mnscQE/giphy.gif', // fallon
    'https://media.giphy.com/media/26ybwxj9hrLCtt7qM/giphy.gif', // jeopardy
    'https://media.giphy.com/media/diKF8kxuomAxy/giphy.gif', // t swift
    'https://media.giphy.com/media/3ofT5J5ESXh8NTDcpG/giphy.gif', // clueless
];

const getRandom = () => {
    return ACCEPTABLE_GIFS[Math.floor(Math.random() * ACCEPTABLE_GIFS.length)];
};

export default getRandom;
