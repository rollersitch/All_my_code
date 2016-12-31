let animal = {
	name: "bobo",
	species: "dog",
	getName: () => name,
	sound: (str) => {console.log(str + " barking");},
	getInfo: () => [name,species]
};


let {name, species, getInfo} = animal;
console.log(name,species);

let [n,s] = getInfo();
console.log(n,s);
