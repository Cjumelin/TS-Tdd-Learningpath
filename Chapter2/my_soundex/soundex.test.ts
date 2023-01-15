type TransformedConsonant = "1" | "2" | "3" | "4" | "5" | "6" | "";

const consonantToDigitMapper: Record<string, TransformedConsonant> = {
  b: "1",
  f: "1",
  p: "1",
  v: "1",
  c: "2",
  g: "2",
  j: "2",
  k: "2",
  q: "2",
  s: "2",
  x: "2",
  z: "2",
  d: "3",
  t: "3",
  l: "4",
  m: "5",
  n: "5",
  r: "6",
};

const getFirstLetter = (str: string) => str.charAt(0);

const consonantToDigit = (consonant: string): TransformedConsonant => {
  return consonantToDigitMapper[consonant.toLocaleLowerCase()] || "";
};

const soundex = (toEncode: string) => {
  return (getFirstLetter(toEncode) + consonantToDigit(toEncode.slice(1)))
    .toLocaleUpperCase()
    .padEnd(4, "0");
};

describe("Soundex", () => {
  test("Retain the first letter in uppercase", () => {
    expect(soundex("a")).toStrictEqual("A000");
    expect(soundex("f")).toStrictEqual("F000");
  });

  test("Is exactly a letter and 3 digits", () => {
    expect(soundex("f")).toStrictEqual("F000");
  });

  test("Consonant are replaced by the corresponding digit", () => {
    expect(soundex("ab")).toStrictEqual("A100");
    expect(soundex("ac")).toStrictEqual("A200");
  });
});
