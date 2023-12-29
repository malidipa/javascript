console.log(
  "===================Assignment-2=================================="
);
function string() {
  var stringHandsOn = "    Hey you are doing good,keep it up    ";
  console.log(`1. Given A String Is =>${stringHandsOn}`);

  var lengthString = stringHandsOn.length;
  console.log(`2. Length Of Given String is => ${lengthString}`);

  var afterlengthString = stringHandsOn.trim();
  console.log(
    `3. Removing Extra Space Is => ${lengthString} ,and its length is => ${afterlengthString.length}`
  );

  var totalSpace = afterlengthString.length;
  var result = lengthString - totalSpace;
  console.log(`4.Removed extra spaces are => ${result}`);

  var character = stringHandsOn;
  var firstChar = afterlengthString.charAt(0);
  var lastChar = afterlengthString.charAt(afterlengthString.length - 1);
  console.log(
    `5. First Character => ${firstChar}, Last Character=>${lastChar}`
  );

  var words = afterlengthString.split(" ");
  console.log(`6 Total words in the String => ${words.length}`);

  var index = afterlengthString.indexOf("good");
  console.log(`7.Index of Good Is =>${index}`);

  var substring = afterlengthString.slice(22);
  console.log(`8. substring at 22 ${substring}`);

  var stringEnd = afterlengthString.includes("up");
  console.log(`9. String ends with up =>${stringEnd} `);

  var stringStarts = afterlengthString.includes("Hey");
  console.log(`10. String starts with up =>${stringStarts}`);
}
string();
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
