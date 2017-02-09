'use strict';

import { chai } from 'chai';
import { Board } from '../../src/models/board';

describe('Board', function() {
  const board = new Board();

  it('must have 8 columns', function() {
    assert.equal(8, board.cols);
  });

  it('must have 8 rows', function() {
    assert.equal(8, board.rows);
  });

  it('must have 64 squares', function() {
    assert.equal(64, board.squares.length);
  });
});
