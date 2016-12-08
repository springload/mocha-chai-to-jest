import { animalCompatibility } from '../things-to-test/utils';
import assert from 'assert';

describe('animalCompatibility', function() {
  describe('dogs & cats', function() {
    it('should return incompatible', function() {
      assert.equal('incompatible', animalCompatibility('dogs', 'cats'));
    });
  });

  describe('dogs & dogs', function() {
    it('should return compatible', function() {
      assert.equal('compatible', animalCompatibility('dogs', 'dogs'));
    });
  });

  describe('dogs & undefined', function() {
    it('should return incompatible', function() {
      assert.equal('incompatible', animalCompatibility('dogs', undefined));
    });
  });

  describe('undefined & cats', function() {
    it('should return incompatible', function() {
      assert.equal('incompatible', animalCompatibility(undefined, 'cats'));
    });
  });
});

