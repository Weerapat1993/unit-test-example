import { multiplyer, first } from '../multiplyer';

// jest.mock('lodash', () => ({
//   get: jest.fn().mockImplementation((obj, path) => ({ id: 1 })),
// }))

describe('multiplyer.js', () => {
  it('calculate 5 * 4 It sholud be 20', () => {
    const received = multiplyer(5, 4);
    const expected = 20;
    expect(received).toEqual(expected);
  })

  it('first function', () => {
    const recieved = first([{ id: 1}]);
    const expected = { id: 1 };
    expect(recieved).toEqual(expected);
  })
})