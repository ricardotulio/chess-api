'use strict';

const assert = require('assert');
import { Board } from '../../src/models/board';

describe('Board', function() {
  const board = new Board();

  it('must have 8 columns', function() {
    assert.equal(8, board.cols);
  });

  it('must have 8 rows', function() {
    assert.equal(8, board.rows);
  });
});
