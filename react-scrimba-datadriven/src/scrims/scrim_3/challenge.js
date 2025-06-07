const nums = [1, 2, 3, 4, 5];
const newNums = nums.map(x => x**2);
console.log(newNums);

const names = ["alice", "bob", "charlie", "danielle"];
const newNames = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(newNames);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const htmlPoke = pokemon.map(pokemon => `<p>${pokemon}</p>`)
console.log(htmlPoke);