import { Vector3 } from './Vector3';

export const Check = (newPostion: Vector3): boolean =>
  newPostion.x > -1 && newPostion.y > -1 && newPostion.z > -1;
