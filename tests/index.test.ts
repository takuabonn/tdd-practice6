import Hammer from "../src";

describe("高橋君がゴールに到達することが可能か判定し、可能であれば移動距離の最小値を算出", () => {
  test("座標 y が座標 z より小さいなら-1", () => {
    const X = 100;
    const Y = 1;
    const Z = 1000;
    const hammer = new Hammer(X, Y, Z);
    expect(hammer.getResult()).toBe(-1);
  });
});
