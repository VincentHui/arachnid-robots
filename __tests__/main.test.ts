import { Robot } from '../src/botLogic/bot';
import { Vector3 } from '../src/botLogic/navigation';

describe('Robot Navigation', () => {
  it('FFLRB cmd at position (0,0)', () => {
    const Bot = new Robot(new Vector3(0, 0), 'FFLRB'.split(''));
    expect(Bot.position).toStrictEqual(new Vector3(0, 1, 0));
  });
});
