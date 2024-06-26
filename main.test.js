const reverseString = require("./reverse");
const capitalize = require("./capilatize");
const calculator = require("./calculator");

test("capitalize first letter in \"hello\"", () => {
    expect(capitalize("hello")).toMatch(/Hello/);
})

test("reverse string 'The Odin Project'", () => {
    expect(reverseString("The Odin Project")).toMatch(/tcejorP nidO ehT/);
})
