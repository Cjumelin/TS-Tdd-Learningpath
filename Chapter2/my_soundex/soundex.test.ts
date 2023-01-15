const soundex = (toEncode: string) => {
  return toEncode.toLocaleUpperCase();
};

describe("Soundex", () => {
  test("Retain the first letter in uppercase", () => {
    expect(soundex("a")).toStrictEqual("A");
    expect(soundex("f")).toStrictEqual("F");
  });

  test("Retain the first letter", () => {});
});
