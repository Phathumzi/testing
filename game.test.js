const game = require("./game");
const game1 = require("./game");


test("if user is logged in  1 + 2 to equal 3", () => {
  expect(game(1, 2)).toBe(3);
});

test("if user is logged in  1 + 2 to equal 3", () => {
    expect(game1(1, 2)).toBe(3);
  });

