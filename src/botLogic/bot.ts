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
  constructor(position: Vector3 = new Vector3(), navSeq: string[] = []) {
    this.position = position;
    navSeq.forEach((cmd) => {
      const cmdDirection = DirectionDispatch.get(cmd);
      if (!cmdDirection) return console.log('invalid cmd!');
      this.navigate(cmdDirection);
    });
  }
  navigate(direction: Vector3, distance = 1): void {
    this.rotation = direction;
    const newPos = this.position.add(direction.scalarMultiply(distance));
    this.position = Check(newPos) ? newPos : this.position;
  }
}
