const getFirstLetter = (str: string) => str.charAt(0);

const soundex = (toEncode: string) => {
  return getFirstLetter(toEncode).toLocaleUpperCase().padEnd(4, "0");
};

describe("Soundex", () => {
  test("Retain the first letter in uppercase", () => {
    expect(soundex("a")).toStrictEqual("A000");
    expect(soundex("f")).toStrictEqual("F000");
  });

  test("Is exactly a letter and 3 digits", () => {
    expect(soundex("f")).toStrictEqual("F000");
  });

  //   test("Consonant are replaced by the corresponding digit", () => {
  //     expect(soundex("ab")).toStrictEqual("A100");
  //   });
});
