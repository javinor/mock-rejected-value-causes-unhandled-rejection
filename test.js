test("works correctly", () => {
  jest
    .spyOn(window, "alert")
    .mockImplementation(
      () => Promise.reject(new Error("something broke!"))
    )
})

test("should not cause unhandled rejection", () => {
  jest
    .spyOn(window, "alert")
    .mockRejectedValue(new Error("and now it broke again!"))
})