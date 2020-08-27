import { Robot } from '../src/botLogic/bot';
import { Vector3 } from '../src/botLogic/Vector3';

describe('Robot Navigation', () => {
  it('boundry test', () => {
    const Bot = new Robot(new Vector3(0, 0), 'LLR'.split(''));
    expect(Bot.position).toStrictEqual(new Vector3(1, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(1, 0, 0));
  });
  it('FFLRB cmd at position (0,0)', () => {
    const Bot = new Robot(new Vector3(0, 0), 'FFLRB'.split(''));
    expect(Bot.position).toStrictEqual(new Vector3(1, 1, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, -1, 0));
  });
  it('BBLL cmd at position (0,0) with no boundry checks', () => {
    const Bot = new Robot(new Vector3(0, 0), 'BBLL'.split(''), false);
    expect(Bot.position).toStrictEqual(new Vector3(-2, -2, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(-1, 0, 0));
  });
  it('Bot should rotate correctly', () => {
    const Bot = new Robot();
    const nav: Vector3 = new Vector3(0, 1, 0);
    Bot.navigate(nav);
    nav.add(new Vector3(0, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, 1, 0));
    Bot.navigate(new Vector3(1, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(1, 0, 0));
    Bot.navigate(new Vector3(-1, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(-1, 0, 0));
    Bot.navigate(new Vector3(0, -1, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, -1, 0));
  });
});
