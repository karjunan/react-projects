"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_yang"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/yang.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/yang.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = yang;\nyang.displayName = \"yang\";\nyang.aliases = [];\nfunction yang(Prism) {\n    Prism.languages.yang = {\n        // https://tools.ietf.org/html/rfc6020#page-34\n        // http://www.yang-central.org/twiki/bin/view/Main/YangExamples\n        comment: /\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*/,\n        string: {\n            pattern: /\"(?:[^\\\\\"]|\\\\.)*\"|'[^']*'/,\n            greedy: true\n        },\n        keyword: {\n            pattern: /(^|[{};\\r\\n][ \\t]*)[a-z_][\\w.-]*/i,\n            lookbehind: true\n        },\n        namespace: {\n            pattern: /(\\s)[a-z_][\\w.-]*(?=:)/i,\n            lookbehind: true\n        },\n        boolean: /\\b(?:false|true)\\b/,\n        operator: /\\+/,\n        punctuation: /[{};:]/\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy95YW5nLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFDakJBLEtBQUtDLFdBQVcsR0FBRztBQUNuQkQsS0FBS0UsT0FBTyxHQUFHLEVBQUU7QUFDakIsU0FBU0YsS0FBS0csS0FBSztJQUNqQkEsTUFBTUMsU0FBUyxDQUFDSixJQUFJLEdBQUc7UUFDckIsOENBQThDO1FBQzlDLCtEQUErRDtRQUMvREssU0FBUztRQUNUQyxRQUFRO1lBQ05DLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBQ0FDLFNBQVM7WUFDUEYsU0FBUztZQUNURyxZQUFZO1FBQ2Q7UUFDQUMsV0FBVztZQUNUSixTQUFTO1lBQ1RHLFlBQVk7UUFDZDtRQUNBRSxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsYUFBYTtJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3lhbmcuanM/M2NmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB5YW5nXG55YW5nLmRpc3BsYXlOYW1lID0gJ3lhbmcnXG55YW5nLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24geWFuZyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMueWFuZyA9IHtcbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjAyMCNwYWdlLTM0XG4gICAgLy8gaHR0cDovL3d3dy55YW5nLWNlbnRyYWwub3JnL3R3aWtpL2Jpbi92aWV3L01haW4vWWFuZ0V4YW1wbGVzXG4gICAgY29tbWVudDogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiovLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86W15cXFxcXCJdfFxcXFwuKSpcInwnW14nXSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDoge1xuICAgICAgcGF0dGVybjogLyhefFt7fTtcXHJcXG5dWyBcXHRdKilbYS16X11bXFx3Li1dKi9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxccylbYS16X11bXFx3Li1dKig/PTopL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBib29sZWFuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAgIG9wZXJhdG9yOiAvXFwrLyxcbiAgICBwdW5jdHVhdGlvbjogL1t7fTs6XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ5YW5nIiwiZGlzcGxheU5hbWUiLCJhbGlhc2VzIiwiUHJpc20iLCJsYW5ndWFnZXMiLCJjb21tZW50Iiwic3RyaW5nIiwicGF0dGVybiIsImdyZWVkeSIsImtleXdvcmQiLCJsb29rYmVoaW5kIiwibmFtZXNwYWNlIiwiYm9vbGVhbiIsIm9wZXJhdG9yIiwicHVuY3R1YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/yang.js\n"));

/***/ })

}]);