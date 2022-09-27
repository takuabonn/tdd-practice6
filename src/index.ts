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
      return this.y > this.x && this.y > this.x;
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
    if (this.y < 0 && this.y < this.x) {
      return this.x < 0 ? this.x * -1 : this.x;
    }
    if (this.y > 0 && this.y > this.x) {
      return this.x < 0 ? this.x * -1 : this.x;
    }
  };
}

export default Hammer;
