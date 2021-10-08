const googleSearch = require("./script");

const DBmock = ["dog.com", "cheesePuff.com", "disny.com", "dogpictures.com"];

describe("goolge search", () => {
  it("just a silly test", () => {
    expect("hello").toBe("hello");
  });

  it("is searching google", () => {
    expect(googleSearch("sdsd", DBmock)).toEqual([]);
    expect(googleSearch("dog", DBmock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("work with undefined and null to", () => {
    expect(googleSearch(undefined, DBmock)).toEqual([]);
    expect(googleSearch(null, DBmock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", DBmock).length).toEqual(3);
  });
});
