export class Vector3 {
  x: number;
  y: number;
  z: number;
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public add(a: Vector3): Vector3 {
    return new Vector3(a.x + this.x, a.y + this.y, a.z + this.z);
  }

  public scalarMultiply(scalar: number): Vector3 {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }
}
