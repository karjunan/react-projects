"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_matlab"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/matlab.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/matlab.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = matlab;\nmatlab.displayName = \"matlab\";\nmatlab.aliases = [];\nfunction matlab(Prism) {\n    Prism.languages.matlab = {\n        comment: [\n            /%\\{[\\s\\S]*?\\}%/,\n            /%.+/\n        ],\n        string: {\n            pattern: /\\B'(?:''|[^'\\r\\n])*'/,\n            greedy: true\n        },\n        // FIXME We could handle imaginary numbers as a whole\n        number: /(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?(?:[ij])?|\\b[ij]\\b/,\n        keyword: /\\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\\b/,\n        function: /\\b(?!\\d)\\w+(?=\\s*\\()/,\n        operator: /\\.?[*^\\/\\\\']|[+\\-:@]|[<>=~]=?|&&?|\\|\\|?/,\n        punctuation: /\\.{3}|[.,;\\[\\](){}!]/\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYXRsYWIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsT0FBT0MsV0FBVyxHQUFHO0FBQ3JCRCxPQUFPRSxPQUFPLEdBQUcsRUFBRTtBQUNuQixTQUFTRixPQUFPRyxLQUFLO0lBQ25CQSxNQUFNQyxTQUFTLENBQUNKLE1BQU0sR0FBRztRQUN2QkssU0FBUztZQUFDO1lBQWtCO1NBQU07UUFDbENDLFFBQVE7WUFDTkMsU0FBUztZQUNUQyxRQUFRO1FBQ1Y7UUFDQSxxREFBcUQ7UUFDckRDLFFBQVE7UUFDUkMsU0FDRTtRQUNGQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsYUFBYTtJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL21hdGxhYi5qcz80ZjFkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGxhYlxubWF0bGFiLmRpc3BsYXlOYW1lID0gJ21hdGxhYidcbm1hdGxhYi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1hdGxhYihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubWF0bGFiID0ge1xuICAgIGNvbW1lbnQ6IFsvJVxce1tcXHNcXFNdKj9cXH0lLywgLyUuKy9dLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1xcQicoPzonJ3xbXidcXHJcXG5dKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gRklYTUUgV2UgY291bGQgaGFuZGxlIGltYWdpbmFyeSBudW1iZXJzIGFzIGEgd2hvbGVcbiAgICBudW1iZXI6IC8oPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86W2VFXVsrLV0/XFxkKyk/KD86W2lqXSk/fFxcYltpal1cXGIvLFxuICAgIGtleXdvcmQ6XG4gICAgICAvXFxiKD86TmFOfGJyZWFrfGNhc2V8Y2F0Y2h8Y29udGludWV8ZWxzZXxlbHNlaWZ8ZW5kfGZvcnxmdW5jdGlvbnxpZnxpbmZ8b3RoZXJ3aXNlfHBhcmZvcnxwYXVzZXxwaXxyZXR1cm58c3dpdGNofHRyeXx3aGlsZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvXFxiKD8hXFxkKVxcdysoPz1cXHMqXFwoKS8sXG4gICAgb3BlcmF0b3I6IC9cXC4/WypeXFwvXFxcXCddfFsrXFwtOkBdfFs8Pj1+XT0/fCYmP3xcXHxcXHw/LyxcbiAgICBwdW5jdHVhdGlvbjogL1xcLnszfXxbLiw7XFxbXFxdKCl7fSFdL1xuICB9XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1hdGxhYiIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiY29tbWVudCIsInN0cmluZyIsInBhdHRlcm4iLCJncmVlZHkiLCJudW1iZXIiLCJrZXl3b3JkIiwiZnVuY3Rpb24iLCJvcGVyYXRvciIsInB1bmN0dWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/matlab.js\n"));

/***/ })

}]);