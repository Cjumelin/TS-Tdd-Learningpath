const soundex = (toEncode: string) => {
  return "";
};

describe("Soundex", () => {
  test("Retain the first letter", () => {
    expect(soundex("a")).toStrictEqual("a");
  });
});
