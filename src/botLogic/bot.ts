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

export class Robot {
  position: Vector3;
  rotation: Vector3 = new Vector3(0, 1, 0);
  willCheck = false;
  constructor(
    position: Vector3 = new Vector3(),
    navSeq: string[] = [],
    checkBoundary = true,
  ) {
    this.position = position;
    this.willCheck = checkBoundary;
    navSeq.forEach((cmd) => {
      const cmdDirection = DirectionDispatch.get(cmd);
      if (!cmdDirection) return console.log('invalid cmd!');
      this.navigate(cmdDirection);
    });
  }

  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    const newPos = this.position.add(direction.scalarMultiply(distance));
    this.position = this.willCheck ? CheckPos(newPos, this.position) : newPos;
  }
}
