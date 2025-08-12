let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.org', '.io', '.info'];

function domainGenerator(pronoun, adj, noun, extension) {
    let names = [];
    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                for (let e = 0; e < extension.length; e++) {
                    names.push(pronoun[p] + adj[a] + noun[n] + extension[e]);
                }
            }
        }
    }
    return names;
}
let arrDomain = domainGenerator(pronoun, adj, noun, extension);

function listDomain(arrDomain) {
    for (let i = 0; i < arrDomain.length; i++) {
        console.log(arrDomain[i]);
    }
}
listDomain(arrDomain);


//Patri lo de las "domain hacks" se me va de las manos. No he sabido ni por donde empezar. (-_-U) Sorry!! <3