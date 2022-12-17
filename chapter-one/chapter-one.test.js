import abs from "./chapter-one"
describe("Test the abs function", () => {
  describe("When arg is 0", () => {
    it ("Then return the same value", () => {
      expect(abs(0)).toBe(0);
    })
  })
})