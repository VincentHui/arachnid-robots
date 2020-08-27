// import { Delays, greeter } from '../src/main';
import { Robot } from '../src/botLogic/bot';
import { Vector3 } from '../src/botLogic/navigation';

describe('Robot Navigation', () => {
  it('FFLRB cmd at position (0,0)', () => {
    const Bot = new Robot(new Vector3(0, 0), 'FFLRB'.split(''));
    console.log(Bot);
    expect(true).toBe(true);
  });
});

// describe('greeter function', () => {
//   // Read more about fake timers
//   // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
//   jest.useFakeTimers();

//   const name = 'John';
//   let hello: string;

//   // Act before assertions
//   beforeAll(async () => {
//     const p: Promise<string> = greeter(name);
//     jest.runOnlyPendingTimers();
//     hello = await p;
//   });

//   // Assert if setTimeout was called properly
//   it('delays the greeting by 2 seconds', () => {
//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(
//       expect.any(Function),
//       Delays.Long,
//     );
//   });

//   // Assert greeter result
//   it('greets a user with `Hello, {name}` message', () => {
//     expect(hello).toBe(`Hello, ${name}`);
//   });
// });
