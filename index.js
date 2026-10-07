function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


function numPointsScored(playerName) {
    const game = gameObject();

    for (const team of [game.home, game.away]) {
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();

    for (const team of [game.home, game.away]) {
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
}

console.log(numPointsScored("Alan Anderson"));

console.log(shoeSize("Alan Anderson"));

function teamColors(teamName){
    const game = gameObject();
     for(let team in game){
        if (game[team].teamName === teamName){
            return game[team].colors;
        }
     }
}

function teamNames() {
    const game = gameObject();
    const names = [];

    for (let team in game) {
        names.push(game[team].teamName);
    }

    return names;
}
console.log(teamColors("Brooklyn Nets"));

console.log(teamColors("Charlotte Hornets"));

console.log(teamNames());

function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];

    for (let team in game) {
        if (game[team].teamName === teamName) {
            for (let player in game[team].players) {
                numbers.push(game[team].players[player].number);
            }
        }
    }

    return numbers;
}

console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    const game = gameObject();

    for (let team in game) {
        for (let player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player];
            }
        }
    }
}

console.log(playerStats("Brook Lopez"));

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;

    for (let team in game) {
        for (let player in game[team].players) {
            let currentPlayer = game[team].players[player];

            if (currentPlayer.shoe > biggestShoe) {
                biggestShoe = currentPlayer.shoe;
                rebounds = currentPlayer.rebounds;
            }
        }
    }

    return rebounds;
}
console.log(bigShoeRebounds());

function mostPointsScored() {
    const game = gameObject();
    let highestPoints = 0;
    let bestPlayer = "";

    for (let team in game) {
        for (let player in game[team].players) {
            let currentPlayer = game[team].players[player];

            if (currentPlayer.points > highestPoints) {
                highestPoints = currentPlayer.points;
                bestPlayer = player;
            }
        }
    }

    return bestPlayer;
}
console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();

    let highestScore = 0;
    let winner = "";

    for (let team in game) {
        let totalPoints = 0;

        for (let player in game[team].players) {
            totalPoints += game[team].players[player].points;
        }

        if (totalPoints > highestScore) {
            highestScore = totalPoints;
            winner = game[team].teamName;
        }
    }

    return winner;
}
console.log(winningTeam());

function playerWithLongestName() {
    const game = gameObject();

    let longestName = "";

    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}
console.log(playerWithLongestName());



function doesLongNameStealATon() {
    const game = gameObject();

    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (let team in game) {
        for (let player in game[team].players) {
            let currentPlayer = game[team].players[player];

            // Find player with longest name
            if (player.length > longestName.length) {
                longestName = player;
            }

            // Find player with most steals
            if (currentPlayer.steals > mostSteals) {
                mostSteals = currentPlayer.steals;
                playerWithMostSteals = player;
            }
        }
    }

    return longestName === playerWithMostSteals;
}

console.log(doesLongNameStealATon());


