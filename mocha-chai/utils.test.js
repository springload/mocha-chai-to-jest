/* eslint no-unused-expressions: 0 */

import { expect } from 'chai';
import sinon from 'sinon';
import { animalCompatibility, areIdenticalAnimals, getSpecie, debounce } from '../things-to-test/utils';

describe('animalCompatibility', () => {
    describe('dogs & cats', () => {
        it('should return incompatible', () => {
            expect(animalCompatibility('dogs', 'cats')).to.equal('incompatible');
        });
    });

    describe('dogs & dogs', () => {
        it('should return compatible', () => {
            expect(animalCompatibility('dogs', 'dogs')).to.equal('compatible');
        });
    });

    describe('dogs & undefined', () => {
        it('should return incompatible', () => {
            expect(animalCompatibility('dogs', undefined)).to.equal('incompatible');
        });
    });

    describe('undefined & cats', () => {
        it('should return incompatible', () => {
            expect(animalCompatibility(undefined, 'cats')).to.equal('incompatible');
        });
    });
});

describe('areIdenticalAnimals', () => {
    describe('dogs & cats', () => {
        it('should return false', () => {
            expect(areIdenticalAnimals('dogs', 'cats')).to.be.false;
        });
    });

    describe('dogs & dogs', () => {
        it('should return true', () => {
            expect(areIdenticalAnimals('dogs', 'dogs')).to.be.true;
        });
    });

    describe('dogs & undefined', () => {
        it('should return false', () => {
            expect(areIdenticalAnimals('dogs', undefined)).to.be.false;
        });
    });

    describe('undefined & cats', () => {
        it('should return false', () => {
            expect(areIdenticalAnimals(undefined, 'dogs')).to.be.false;
        });
    });

    describe('undefined & undefined', () => {
        it('should return true', () => {
            expect(areIdenticalAnimals()).to.be.true;
        });
    });
});

describe('getSpecie', () => {
    describe('undefined specie', () => {
        it('should return undefined', () => {
            expect(getSpecie({})).to.be.undefined;
        });
    });

    describe('bird specie', () => {
        it('should return bird', () => {
            expect(getSpecie({ specie: 'bird' })).to.equal('bird');
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
