"use strict";

module.exports = {
  "names": [ "valid-links" ],
  "description": "Rule that reports an invalid link",
  "tags": [ "links" ],
  "function": function rule(params, onError) {
    params.tokens.filter(function filterToken(token) {
      return token.type === "link_open";
    }).forEach(function forToken(link) {
      const lines = link.map[1] - link.map[0];
      onError({
        "lineNumber": link.lineNumber,
        "detail": "Link spans " + lines + " line(s).",
        "context": link.line.substr(0, 7)
      });
    });
  }
};
