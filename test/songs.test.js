const songs = require("../songs.js");

describe("bottles of beer on the wall", () => {
  it("can loop through the song starting from ten bottles", () => {
    let wholeSong = songs.singTheBottlesOfBeerSong(10);
    expect(wholeSong).toContain("10 bottles of beer on the wall");
    expect(wholeSong).not.toContain("11 bottles of beer on the wall");
    expect(wholeSong).toContain("5 bottles of beer on the wall");
  });

  it("can end the song", () => {
    var shortSong = songs.singTheBottlesOfBeerSong(0);
    expect(shortSong).toContain("no bottles of beer on the wall");
    expect(shortSong).toContain("go to the store and buy some more");
  });

  it("can loop through the song starting at four bottles", () => {
    var shortSong = songs.singTheFourBottlesOfBeerSong();
    expect(shortSong).toContain("4 bottles of beer on the wall");
    expect(shortSong).not.toContain("5 bottles of beer on the wall");
    expect(shortSong).toContain("no bottles of beer on the wall");
    expect(shortSong).toContain("go to the store and buy some more");
  });

  it("only gets four bottles", () => {
    var shortSong = songs.singTheFourBottlesOfBeerSong(10);
    expect(shortSong).not.toContain("10 bottles of beer on the wall");
    expect(shortSong).toContain("4 bottles of beer on the wall");
  });

  it("should know the song can continue", () => {
    expect(songs.bottlesofbeeronthewall(2)).toContain(
      "2 bottles of beer on the wall"
    );
  });

  it("should recognise the penultimate bottle", () => {
    expect(songs.bottlesofbeeronthewall(1)).toContain(
      "one bottle of beer on the wall"
    );
  });

  it("should know to buy more beer when it runs out", () => {
    expect(songs.bottlesofbeeronthewall(0)).toContain(
      "go to the store and buy some more"
    );
  });

  it("should handle one bottle as a string", () => {
    expect(songs.bottlesofbeeronthewall("one")).toContain(
      "one bottle of beer on the wall"
    );
  });

  it("should handle zero bottles as a string", () => {
    expect(songs.bottlesofbeeronthewall("zero")).toContain(
      "go to the store and buy some more"
    );
  });

  it("should handle no bottles as input", () => {
    expect(songs.bottlesofbeeronthewall("no")).toContain(
      "no bottles of beer on the wall"
    );
  });

  it("should handle all the bottles", () => {
    expect(songs.bottlesofbeeronthewall(9)).toContain(
      "9 bottles of beer on the wall"
    );
    expect(songs.bottlesofbeeronthewall(81)).toContain(
      "81 bottles of beer on the wall"
    );
    expect(songs.bottlesofbeeronthewall(169)).toContain(
      "169 bottles of beer on the wall"
    );
    expect(songs.bottlesofbeeronthewall("one million")).toContain(
      "one million bottles of beer on the wall"
    );
  });
});
