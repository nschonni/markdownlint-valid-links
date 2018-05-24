"use strict";

const validLinks = require("../valid-links");
const markdownlint = require("markdownlint");

module.exports.validInternalLink = function internalLink(test) {
  test.expect(3);
  const customRulesMd = "./test/internal-link.md";
  const options = {
    "customRules": validLinks,
    "files": [ customRulesMd ],
    "resultVersion": 1
  };
  markdownlint(options, function callback(err, actualResult) {
    test.ifError(err);
    const expectedResult = {};
    expectedResult[customRulesMd] = [];
    test.deepEqual(actualResult, expectedResult, "Undetected issues.");
    const actualMessage = actualResult.toString();
    const expectedMessage = "";
    test.equal(actualMessage, expectedMessage, "Incorrect message.");
    test.done();
  });
};

// module.exports.badInternalLink = function internalLink(test) {
//     test.expect(3);
//     const customRulesMd = "./test/bad-internal-link.md";
//     const options = {
//         "customRules": validLinks,
//         "files": [customRulesMd],
//         "resultVersion": 1
//     };
//     markdownlint(options, function callback(err, actualResult) {
//         test.ifError(err);
//         const expectedResult = {};
//         expectedResult[customRulesMd] = [];
//         test.deepEqual(actualResult, expectedResult, "Undetected issues.");
//         const actualMessage = actualResult.toString();
//         const expectedMessage = "";
//         test.equal(actualMessage, expectedMessage, "Incorrect message.");
//         test.done();
//     });
// };
