export const animalCompatibility = (animalA, animalB) => {
    return animalA === animalB ? 'compatible' : 'incompatible';
};

export const areIdenticalAnimals = (animalA, animalB) => {
    return animalA === animalB;
};

export const getSpecie = (animal) => {
    return animal.specie;
};

export const debounce = (func, wait) => {
    let timeout;
    return () => {
        const context = this;
        const args = arguments;
        const later = () => {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
