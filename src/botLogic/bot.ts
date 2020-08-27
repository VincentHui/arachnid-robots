import { Vector3 } from './navigation';

const DirectionDispatch = new Map<string, Vector3>([
  ['F', new Vector3(0, 1, 0)],
  ['B', new Vector3(0, -1, 0)],
  ['L', new Vector3(-1, 0, 0)],
  ['R', new Vector3(1, 0, 0)],
]);

export class Robot {
  position: Vector3;
  constructor(navSeq: string[] = ['']) {
    this.position = new Vector3();
    navSeq.forEach((cmd) => this.navigate(DirectionDispatch[cmd]));
  }
  navigate(direction: Vector3): void {
    this.position = this.position.add(direction);
  }
}
