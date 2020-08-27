import { Vector3 } from './Vector3';
import { Check } from './boundaryCheck';

const DirectionDispatch = new Map<string, Vector3>([
  ['F', new Vector3(0, 1, 0)],
  ['B', new Vector3(0, -1, 0)],
  ['L', new Vector3(-1, 0, 0)],
  ['R', new Vector3(1, 0, 0)],
]);

const CheckPos = (newPos: Vector3, oldPos: Vector3) => {
  return Check(newPos) ? newPos : oldPos;
};

const translateDirection = (
  position: Vector3,
  rotation: Vector3,
  distance = 1,
) => position.add(rotation.scalarMultiply(distance));

export class Robot {
  position: Vector3 = new Vector3();
  rotation: Vector3 = new Vector3(0, 1, 0);

  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    this.position = translateDirection(this.position, this.rotation, distance);
  }
}

export class MK1 extends Robot {
  constructor(position: Vector3 = new Vector3(), cmds = '') {
    super();
    this.position = position;
    cmds.split('').forEach((cmd) => {
      const cmdDirection = DirectionDispatch.get(cmd);
      if (!cmdDirection) return console.log('invalid cmd!');
      this.navigate(cmdDirection);
    });
  }
}

export class MK2 extends Robot {
  constructor(position: Vector3 = new Vector3(), cmds = '') {
    super();
    this.position = position;
    cmds.split('').forEach((cmd) => {
      const cmdDirection = DirectionDispatch.get(cmd);
      if (!cmdDirection) return console.log('invalid cmd!');
      this.navigate(cmdDirection);
    });
  }
  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    const newPos = translateDirection(this.position, this.rotation, distance);
    this.position = CheckPos(newPos, this.position);
  }
}

export class MK3 extends Robot {
  fuel = 30;
  constructor(position: Vector3 = new Vector3(), cmds = '') {
    super();
    this.position = position;
    const reg = /[A-Z][\d]?/g;
    cmds.match(reg).forEach((cmd) => {
      const dir = cmd.split('')[0];
      const distance = Number(cmd.split('')[1]) || 1;
      const cmdDirection = DirectionDispatch.get(dir);
      if (!cmdDirection) return console.log('invalid cmd!');

      this.navigate(cmdDirection, distance);
    });
  }
}
