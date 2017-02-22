import { animalCompatibility, areIdenticalAnimals, getSpecie, debounce } from '../things-to-test/utils';

describe('animalCompatibility', () => {
    describe('dogs & cats', () => {
        it('should return incompatible', () => {
            expect(animalCompatibility('dogs', 'cats')).toBe('incompatible');
        });
    });

    describe('dogs & dogs', () => {
        it('should return compatible', () => {
            expect(animalCompatibility('dogs', 'dogs')).toBe('compatible');
        });
    });

    describe('dogs & undefined', () => {
        it('should return incompatible', () => {
            expect(animalCompatibility('dogs', undefined)).toBe('incompatible');
        });
    });

    describe('undefined & cats', () => {
        it('should return incompatible', () => {
            expect(animalCompatibility(undefined, 'cats')).toBe('incompatible');
        });
    });
});

describe('areIdenticalAnimals', () => {
    describe('dogs & cats', () => {
        it('should return false', () => {
            expect(areIdenticalAnimals('dogs', 'cats')).toBeFalsy();
        });
    });

    describe('dogs & dogs', () => {
        it('should return true', () => {
            expect(areIdenticalAnimals('dogs', 'dogs')).toBeTruthy();
        });
    });

    describe('dogs & undefined', () => {
        it('should return false', () => {
            expect(areIdenticalAnimals('dogs', undefined)).toBeFalsy();
        });
    });

    describe('undefined & cats', () => {
        it('should return false', () => {
            expect(areIdenticalAnimals(undefined, 'dogs')).toBeFalsy();
        });
    });

    describe('undefined & undefined', () => {
        it('should return true', () => {
            expect(areIdenticalAnimals()).toBeTruthy();
        });
    });
});

describe('getSpecie', () => {
    describe('undefined specie', () => {
        it('should return undefined', () => {
            expect(getSpecie({})).toBeUndefined();
        });
    });

    describe('bird specie', () => {
        it('should return bird', () => {
            expect(getSpecie({ specie: 'bird' })).toBe('bird');
        });
    });
});

jest.useFakeTimers();
describe('Debounce', () => {
    it('has a debounce function', () => {
        expect(debounce).toBeDefined();
    });

    it('debounce calls its callback', () => {
        const callback = jest.fn();
        const proxy = debounce(callback, 5000);

        proxy();

        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        jest.runOnlyPendingTimers();

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
