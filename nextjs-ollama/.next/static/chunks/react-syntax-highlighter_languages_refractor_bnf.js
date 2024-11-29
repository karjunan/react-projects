"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_bnf"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/bnf.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bnf.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = bnf;\nbnf.displayName = \"bnf\";\nbnf.aliases = [\n    \"rbnf\"\n];\nfunction bnf(Prism) {\n    Prism.languages.bnf = {\n        string: {\n            pattern: /\"[^\\r\\n\"]*\"|'[^\\r\\n']*'/\n        },\n        definition: {\n            pattern: /<[^<>\\r\\n\\t]+>(?=\\s*::=)/,\n            alias: [\n                \"rule\",\n                \"keyword\"\n            ],\n            inside: {\n                punctuation: /^<|>$/\n            }\n        },\n        rule: {\n            pattern: /<[^<>\\r\\n\\t]+>/,\n            inside: {\n                punctuation: /^<|>$/\n            }\n        },\n        operator: /::=|[|()[\\]{}*+?]|\\.{3}/\n    };\n    Prism.languages.rbnf = Prism.languages.bnf;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9ibmYuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsSUFBSUMsV0FBVyxHQUFHO0FBQ2xCRCxJQUFJRSxPQUFPLEdBQUc7SUFBQztDQUFPO0FBQ3RCLFNBQVNGLElBQUlHLEtBQUs7SUFDaEJBLE1BQU1DLFNBQVMsQ0FBQ0osR0FBRyxHQUFHO1FBQ3BCSyxRQUFRO1lBQ05DLFNBQVM7UUFDWDtRQUNBQyxZQUFZO1lBQ1ZELFNBQVM7WUFDVEUsT0FBTztnQkFBQztnQkFBUTthQUFVO1lBQzFCQyxRQUFRO2dCQUNOQyxhQUFhO1lBQ2Y7UUFDRjtRQUNBQyxNQUFNO1lBQ0pMLFNBQVM7WUFDVEcsUUFBUTtnQkFDTkMsYUFBYTtZQUNmO1FBQ0Y7UUFDQUUsVUFBVTtJQUNaO0lBQ0FULE1BQU1DLFNBQVMsQ0FBQ1MsSUFBSSxHQUFHVixNQUFNQyxTQUFTLENBQUNKLEdBQUc7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2JuZi5qcz84NDJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJuZlxuYm5mLmRpc3BsYXlOYW1lID0gJ2JuZidcbmJuZi5hbGlhc2VzID0gWydyYm5mJ11cbmZ1bmN0aW9uIGJuZihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuYm5mID0ge1xuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiW15cXHJcXG5cIl0qXCJ8J1teXFxyXFxuJ10qJy9cbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIHBhdHRlcm46IC88W148PlxcclxcblxcdF0rPig/PVxccyo6Oj0pLyxcbiAgICAgIGFsaWFzOiBbJ3J1bGUnLCAna2V5d29yZCddLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXjx8PiQvXG4gICAgICB9XG4gICAgfSxcbiAgICBydWxlOiB7XG4gICAgICBwYXR0ZXJuOiAvPFtePD5cXHJcXG5cXHRdKz4vLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXjx8PiQvXG4gICAgICB9XG4gICAgfSxcbiAgICBvcGVyYXRvcjogLzo6PXxbfCgpW1xcXXt9Kis/XXxcXC57M30vXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLnJibmYgPSBQcmlzbS5sYW5ndWFnZXMuYm5mXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImJuZiIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwic3RyaW5nIiwicGF0dGVybiIsImRlZmluaXRpb24iLCJhbGlhcyIsImluc2lkZSIsInB1bmN0dWF0aW9uIiwicnVsZSIsIm9wZXJhdG9yIiwicmJuZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/bnf.js\n"));

/***/ })

}]);