import Hammer from "../src";

describe("高橋君がゴールに到達することが可能か判定し、可能であれば移動距離の最小値を算出", () => {
  describe("無条件で-1", () => {
    test("y > 0 & x > y & z > y の場合、-1", () => {
      const X = 100;
      const Y = 1;
      const Z = 1000;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(-1);
    });
    test("y < 0 & x < y & z < y の場合、-1", () => {
      const X = -15;
      const Y = -10;
      const Z = -12;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(-1);
    });
  });
  describe("無条件でゴールできる", () => {
    test("y < 0 && y < xの場合、移動距離は x の絶対値", () => {
      const X = -5;
      const Y = -10;
      const Z = 10;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(5);
    });

    test("y > 0 && y > xの場合、移動距離は x の絶対値", () => {
      const X = -5;
      const Y = 10;
      const Z = 10;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(5);
    });
  });
  describe("ハンマーで壁を壊してゴールに行ける", () => {
    test(" y > 0 && y > zの場合,移動距離は x の絶対値", () => {
      const X = 15;
      const Y = 10;
      const Z = 5;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(15);
    });
    test(" y < 0 && y < zの場合,移動距離は x の絶対値", () => {
      const X = -15;
      const Y = -10;
      const Z = -5;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(15);
    });

    test("y > 0 && x > y && z < 0場合、移動距離はzの絶対値の2倍+x", () => {
      const X = 15;
      const Y = 10;
      const Z = -5;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(5 * 2 + 15);
    });

    test("y < 0 && x < y && z > 0場合、移動距離はzの絶対値の2倍+x", () => {
      const X = -15;
      const Y = -10;
      const Z = 5;
      const hammer = new Hammer(X, Y, Z);
      expect(hammer.getResult()).toBe(5 * 2 + 15);
    });
  });
});
