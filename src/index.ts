class Hammer {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  private canGoal = () => {
    if (this.y < this.z) {
      return false;
    }
    return true;
  };

  getResult = () => {
    if (!this.canGoal()) {
      return -1;
    }
  };
}

export default Hammer;
