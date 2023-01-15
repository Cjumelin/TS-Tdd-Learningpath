const soundex = (toEncode: string) => {
  return toEncode.toLocaleUpperCase();
};

describe("Soundex", () => {
  test("Retain the first letter in uppercase", () => {
    expect(soundex("a")).toStrictEqual("A000");
    expect(soundex("f")).toStrictEqual("F000");
  });

  test("Is exactly a letter and 3 digits", () => {
    expect(soundex("f")).toStrictEqual("F000");
  });
});
