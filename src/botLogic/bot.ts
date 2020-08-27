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

const cmdsParser = (
  cmds: string,
  callback: (dir: Vector3, dist: number) => void,
  cmdTable = DirectionDispatch,
) => {
  const reg = /[A-Z][\d]?/g;
  const matches = cmds.match(reg) || [];
  matches.forEach((cmd) => {
    const dir = cmd.split('')[0];
    const cmdDirection = cmdTable.get(dir);
    if (!cmdDirection) return console.log('invalid cmd!');
    const distance = Number(cmd.split('')[1]) || 1;
    if (distance > 5) return console.log('overheat');

    callback(cmdDirection, distance);
  });
};

export class Robot {
  position: Vector3 = new Vector3();
  rotation: Vector3 = new Vector3(0, 1, 0);

  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    this.position = this.position.translateDirection(this.rotation, distance);
  }
}

export class MK1 extends Robot {
  constructor(position: Vector3 = new Vector3(), cmds = '') {
    super();
    this.position = position;
    cmdsParser(cmds, (direction, distance) => {
      this.navigate(direction, distance);
    });
  }
}

export class MK2 extends Robot {
  constructor(position: Vector3 = new Vector3(), cmds = '') {
    super();
    this.position = position;
    cmdsParser(cmds, (direction, distance) => {
      this.navigate(direction, distance);
    });
  }
  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    const newPos = this.position.translateDirection(this.rotation, distance);
    this.position = CheckPos(newPos, this.position);
  }
}

export class MK3 extends Robot {
  fuel = 30;
  constructor(position: Vector3 = new Vector3(), cmds = '') {
    super();
    this.position = position;
    cmdsParser(cmds, (direction, distance) => {
      this.navigate(direction, distance);
      this.fuel -= distance;
    });
  }
}
