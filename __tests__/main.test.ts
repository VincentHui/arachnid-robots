import { Robot } from '../src/botLogic/bot';
import { Vector3 } from '../src/botLogic/Vector3';

describe('Robot Navigation', () => {
  it('FFLRB cmd at position (0,0)', () => {
    const Bot = new Robot(new Vector3(0, 0), 'FFLRB'.split(''));
    expect(Bot.position).toStrictEqual(new Vector3(0, 1, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, -1, 0));
    Bot.navigate(new Vector3(0, 1, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, 1, 0));
    Bot.navigate(new Vector3(1, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(1, 0, 0));
    Bot.navigate(new Vector3(-1, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(-1, 0, 0));
    Bot.navigate(new Vector3(0, -1, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, -1, 0));
  });
});
