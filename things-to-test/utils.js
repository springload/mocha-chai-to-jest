export const animalCompatibility = (a, b) => {
    return a === b ? 'compatible' : 'incompatible';
};

export const areIdenticalAnimals = (a, b) => {
    return a === b;
};

export const getSpecie = (animal) => {
    return animal.specie;
};

export const debounce = (func, wait) => {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};
