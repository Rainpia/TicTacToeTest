import React from 'react';
import SomeFunction from './Func';

it('type array can get best position', ()=>{
  expect(JSON.stringify(SomeFunction('x', [
      ['x', 'o', 'o'],
      ['x', 'x', 'e'],
      ['e', 'o', 'e']]))).toBe(JSON.stringify([[1,2],[2,0],[2,2]]));
});