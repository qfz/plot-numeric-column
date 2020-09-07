const { getLongestNumber } = require("./numericParser");

describe(`Function: ${getLongestNumber}`, () => {
  it("gets the number out of a string", () => {
    const input = "1.77 m (5 ft 9 5/8 in)";
    const result = getLongestNumber(input);
    expect(result).toBe("1.77");
  });

  it("gets the number out of a HTML string", () => {
    const input =
      '2.09&nbsp;m (6&nbsp;ft <span class="frac nowrap">10<span class="visualhide">&nbsp;</span><sup>1</sup>⁄<sub>4</sub></span>&nbsp;in)';
    const result = getLongestNumber(input);
    expect(result).toBe("2.09");
  });

  it("gets the longest number out of a string if there are multiple numbers", () => {
    const input = "1.777 m 1.66 (5 ft 9 5/8 in)";
    const result = getLongestNumber(input);
    expect(result).toBe("1.777");
  });

  it("returns nothing if no number is present", () => {
    const input = "Sheila Lerwill (GBR)";
    const result = getLongestNumber(input);
    expect(result).toBeUndefined();
  });
});
