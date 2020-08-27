import { Vector3 } from './Vector3';
import { Check } from './boundryCheck';

const DirectionDispatch = new Map<string, Vector3>([
  ['F', new Vector3(0, 1, 0)],
  ['B', new Vector3(0, -1, 0)],
  ['L', new Vector3(-1, 0, 0)],
  ['R', new Vector3(1, 0, 0)],
]);

export class Robot {
  position: Vector3;
  rotation: Vector3 = new Vector3(0, 1, 0);
  willCheck = false;
  constructor(
    position: Vector3 = new Vector3(),
    navSeq: string[] = [],
    checkBoundry = true,
  ) {
    this.position = position;
    this.willCheck = checkBoundry;
    navSeq.forEach((cmd) => {
      const cmdDirection = DirectionDispatch.get(cmd);
      if (!cmdDirection) return console.log('invalid cmd!');
      this.navigate(cmdDirection);
    });
  }

  CheckNegativePos(newPos: Vector3): Vector3 {
    return Check(newPos) ? newPos : this.position;
  }

  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    const newPos = this.position.add(direction.scalarMultiply(distance));
    this.position = this.willCheck ? this.CheckNegativePos(newPos) : newPos;
  }
}
