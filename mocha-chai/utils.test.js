import { animalCompatibility, areIdenticalAnimals, getSpecie, debounce } from '../things-to-test/utils';
import assert from 'assert';
import { expect } from 'chai';
import sinon from 'sinon';

describe('animalCompatibility', function() {
  describe('dogs & cats', function() {
    it('should return incompatible', function() {
      expect(animalCompatibility('dogs', 'cats')).to.equal('incompatible');
    });
  });

  describe('dogs & dogs', function() {
    it('should return compatible', function() {
      expect(animalCompatibility('dogs', 'dogs')).to.equal('compatible');
    });
  });

  describe('dogs & undefined', function() {
    it('should return incompatible', function() {
      expect(animalCompatibility('dogs', undefined)).to.equal('incompatible');
    });
  });

  describe('undefined & cats', function() {
    it('should return incompatible', function() {
      expect(animalCompatibility(undefined, 'cats')).to.equal('incompatible');
    });
  });
});

describe('areIdenticalAnimals', function() {
  describe('dogs & cats', function() {
    it('should return false', function() {
      expect(areIdenticalAnimals('dogs', 'cats')).to.be.false;
    });
  });

  describe('dogs & dogs', function() {
    it('should return true', function() {
      expect(areIdenticalAnimals('dogs', 'dogs')).to.be.true;
    });
  });

  describe('dogs & undefined', function() {
    it('should return false', function() {
      expect(areIdenticalAnimals('dogs', undefined)).to.be.false;
    });
  });

  describe('undefined & cats', function() {
    it('should return false', function() {
      expect(areIdenticalAnimals(undefined, 'dogs')).to.be.false;
    });
  });

  describe('undefined & undefined', function() {
    it('should return true', function() {
      expect(areIdenticalAnimals()).to.be.true;
    });
  });
});

describe('getSpecie', function() {
  describe('undefined specie', function() {
    it('should return undefined', function() {
      expect(getSpecie({})).to.be.undefined;
    });
  });

  describe('bird specie', function() {
    it('should return bird', function() {
      expect(getSpecie({ specie: 'bird'})).to.equal('bird');
    });
  });
});


describe('Debounce', () => {
    it('debounce calls its callback', () => {
        const clock = sinon.useFakeTimers();
        const callback = sinon.spy();
        const proxy = debounce(callback, 5000);

        proxy();

        // Move the sinon clock to 5001ms.
        clock.tick(5001);

        expect(callback.called).to.equal(true);
        expect(callback.calledOnce).to.equal(true);
    });
});
