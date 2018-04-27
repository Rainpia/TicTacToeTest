import React from 'react';
import GetBestPosition from './Func';

it('type array [\n' +
    '      [\'o\', \'e\', \'e\'],\n' +
    '      [\'o\', \'x\', \'o\'],\n' +
    '      [\'x\', \'x\', \'e\']]  can get best position [[0,1],[0,2],[2,2]]', ()=>{
    expect(JSON.stringify(GetBestPosition('x', [
        ['o', 'e', 'e'],
        ['o', 'x', 'o'],
        ['x', 'x', 'e']]))).toBe(JSON.stringify([[0,1],[0,2],[2,2]]));
});


it('type array [\'x\', \'o\', \'o\'],\n' +
    '      [\'x\', \'x\', \'e\'],\n' +
    '      [\'e\', \'o\', \'e\']] can get best position [[1,2],[2,0],[2,2]]', ()=>{
    expect(JSON.stringify(GetBestPosition('x', [
        ['x', 'o', 'o'],
        ['x', 'x', 'e'],
        ['e', 'o', 'e']]))).toBe(JSON.stringify([[1,2],[2,0],[2,2]]));
});