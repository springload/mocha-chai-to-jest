import { sum } from '../things-to-test/utils';
import assert from 'assert';

describe('Sum', function() {
  describe('3 + 2', function() {
    it('should return 5', function() {
      assert.equal(5, sum(3, 2));
    });
  });

  describe('3 + -7', function() {
    it('should return -4', function() {
      assert.equal(-4, sum(3, -7));
    });
  });

  describe('3 + undefined', function() {
    it('should return -1', function() {
      assert.equal(-1, sum(3));
    });
  });

  describe('undefined + 2', function() {
    it('should return -1', function() {
      assert.equal(-1, sum(undefined, 2));
    });
  });
});

