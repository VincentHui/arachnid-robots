import { Vector3 } from './navigation';

const DirectionDispatch = new Map<string, Vector3>([
  ['F', new Vector3(0, 1, 0)],
  ['B', new Vector3(0, -1, 0)],
  ['L', new Vector3(-1, 0, 0)],
  ['R', new Vector3(1, 0, 0)],
]);

export class Robot {
  position: Vector3;
  constructor(position: Vector3 = new Vector3(), navSeq: string[] = ['']) {
    this.position = position;
    navSeq.forEach((cmd) => this.navigate(DirectionDispatch.get(cmd)));
  }
  navigate(direction: Vector3): void {
    this.position = this.position.add(direction);
  }
}
