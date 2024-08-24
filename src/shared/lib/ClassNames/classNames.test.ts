import { classNames } from "shared/lib/ClassNames/classNames";

describe("classNames", () => {
  test("initial test", () => {
    expect(classNames("class")).toBe("class");
  });
  test("test none args", () => {
    expect(classNames("")).toBe("");
  });
  test("test mods true", () => {
    expect(classNames("class", { ["checked"]: true })).toBe("class checked");
  });
  test("test mods false", () => {
    expect(classNames("class", { ["checked"]: false })).toBe("class");
  });
  test("test additionals true", () => {
    expect(classNames("class", {}, ["additional"])).toBe("class additional");
  });
  test("test additionals false", () => {
    expect(classNames("class", {}, [])).toBe("class");
  });
  test("test additionals undefined", () => {
    expect(classNames("class", {}, [undefined])).toBe("class");
  });
});
