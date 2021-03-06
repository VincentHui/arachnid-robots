import { MK1, MK2, MK3 } from '../src/botLogic/bot';
import { Vector3 } from '../src/botLogic/Vector3';

describe('Robot Navigation', () => {
  it('boundry test for MK2', () => {
    const Bot = new MK2(new Vector3(0, 0), 'LLR');
    expect(Bot.position).toStrictEqual(new Vector3(1, 0, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(1, 0, 0));
  });

  it('FFLRB cmd at position (0,0) for MK2', () => {
    const Bot = new MK2(new Vector3(0, 0), 'FFLRB');
    expect(Bot.position).toStrictEqual(new Vector3(1, 1, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, -1, 0));
  });

  it('BBLL cmd at position (0,0) with no boundry checks for MK1', () => {
    const Bot = new MK1(new Vector3(0, 0), 'BBLL');
    expect(Bot.position).toStrictEqual(new Vector3(-2, -2, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(-1, 0, 0));
  });

  it('Bot should rotate correctly for MK1', () => {
    const Bot = new MK1();
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

  it('MK3 propulsion', () => {
    const Bot = new MK3(new Vector3(0, 0), 'FFF3L');
    expect(Bot.position).toStrictEqual(new Vector3(-1, 5, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(-1, 0, 0));
    expect(Bot.fuel).toStrictEqual(24);
  });

  it('MK3 propulsion with boost overheat', () => {
    const Bot = new MK3(new Vector3(0, 0), 'FFF7L');
    expect(Bot.position).toStrictEqual(new Vector3(-1, 2, 0));
    expect(Bot.fuel).toStrictEqual(27);
  });
});

describe('Use Cases from emails from lab boys', () => {
  it('MK1 test 0,0 FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF', () => {
    const Bot = new MK2(new Vector3(0, 0), 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
    expect(Bot.position).toStrictEqual(new Vector3(2, 21, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, 1, 0));
  });

  it('MK1 test 3,6 FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF', () => {
    const Bot = new MK2(
      new Vector3(3, 6),
      'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF',
    );
    expect(Bot.position).toStrictEqual(new Vector3(4, 19, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, 1, 0));
  });

  it('MK1 test 0,7, RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR', () => {
    const Bot = new MK2(
      new Vector3(0, 7),
      'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR',
    );
    expect(Bot.position).toStrictEqual(new Vector3(3, 15, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(1, 0, 0));
  });

  it('MK3 test 0,0 FFFFFF3FLFFFFFFR5FL', () => {
    const Bot = new MK2(new Vector3(0, 0), 'FFFFFF3FLFFFFFFR5FL');
    expect(Bot.position).toStrictEqual(new Vector3(4, 16, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(-1, 0, 0));
  });
  it('MK3 test 4,3 FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF', () => {
    const Bot = new MK2(
      new Vector3(4, 59),
      'FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF',
    );
    expect(Bot.position).toStrictEqual(new Vector3(4, 115, 0));
    expect(Bot.rotation).toStrictEqual(new Vector3(0, 1, 0));
  });
});
