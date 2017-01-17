import { animalCompatibility, areIdenticalAnimals, getSpecie, debounce } from '../things-to-test/utils';
import assert from 'assert';

describe('animalCompatibility', function() {
  describe('dogs & cats', function() {
    it('should return incompatible', function() {
      expect(animalCompatibility('dogs', 'cats')).toBe('incompatible');
    });
  });

  describe('dogs & dogs', function() {
    it('should return compatible', function() {
      expect(animalCompatibility('dogs', 'dogs')).toBe('compatible');
    });
  });

  describe('dogs & undefined', function() {
    it('should return incompatible', function() {
      expect(animalCompatibility('dogs', undefined)).toBe('incompatible');
    });
  });

  describe('undefined & cats', function() {
    it('should return incompatible', function() {
      expect(animalCompatibility(undefined, 'cats')).toBe('incompatible');
    });
  });
});

describe('areIdenticalAnimals', function() {
  describe('dogs & cats', function() {
    it('should return false', function() {
      expect(areIdenticalAnimals('dogs', 'cats')).toBeFalsy();
    });
  });

  describe('dogs & dogs', function() {
    it('should return true', function() {
      expect(areIdenticalAnimals('dogs', 'dogs')).toBeTruthy();
    });
  });

  describe('dogs & undefined', function() {
    it('should return false', function() {
      expect(areIdenticalAnimals('dogs', undefined)).toBeFalsy();
    });
  });

  describe('undefined & cats', function() {
    it('should return false', function() {
      expect(areIdenticalAnimals(undefined, 'dogs')).toBeFalsy();
    });
  });

  describe('undefined & undefined', function() {
    it('should return true', function() {
      expect(areIdenticalAnimals()).toBeTruthy();
    });
  });
});

describe('getSpecie', function() {
  describe('undefined specie', function() {
    it('should return undefined', function() {
      expect(getSpecie({})).toBeUndefined();
    });
  });

  describe('bird specie', function() {
    it('should return bird', function() {
      expect(getSpecie({ specie: 'bird'})).toBe('bird');
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
