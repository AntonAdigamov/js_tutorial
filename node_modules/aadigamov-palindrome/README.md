# Phrase object (with palindrome detector)

This is a sample NPM module created by Anton Adigamov.

The module can be used as follows:

```
$ npm install --global aadigamov-palindrome
$ vim test.js
let Phrase = require("aadigamov-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
