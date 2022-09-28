class Hammer {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  private absolutelyCannotGoal = () => {
    if (this.y > 0) {
      return this.y < this.x && this.y < this.z;
    }
    if (this.y < 0) {
      return this.y > this.x && this.y > this.z;
    }
  };

  private canGoal = () => {
    if (this.absolutelyCannotGoal()) {
      return false;
    }

    return true;
  };

  getResult = () => {
    if (!this.canGoal()) {
      return -1;
    }
    if (this.y > 0 && this.x > this.y && this.z < 0) {
      return this.z * -1 * 2 + this.x;
    }
    if (this.y < 0 && this.x < this.y && this.z > 0) {
      return this.z * 2 + this.x * -1;
    }
    if ((this.y < 0 && this.y < this.x) || (this.y < 0 && this.y < this.z)) {
      return this.x < 0 ? this.x * -1 : this.x;
    }
    if ((this.y > 0 && this.y > this.x) || (this.y > 0 && this.y > this.z)) {
      return this.x < 0 ? this.x * -1 : this.x;
    }
  };
}

export default Hammer;
