/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  font-family: \"Poppins\";\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background: rgb(168, 220, 250);\n}\nbody #root {\n  min-width: 350px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nbody #root h1 {\n  align-self: stretch;\n  font-size: 2.8rem;\n  transform: scaleY(1.1);\n  letter-spacing: 0.1rem;\n  padding: 0.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  color: rgb(168, 220, 250);\n  text-align: center;\n  background: rgb(26, 87, 156);\n}\nbody #root h1 svg {\n  min-width: 3rem;\n  fill: #eee;\n}\n@media screen and (max-width: 768px) {\n  body #root h1 {\n    font-size: 2rem;\n  }\n}\nbody #root .error {\n  color: red;\n  font-size: 1.1rem;\n}\nbody #root .app {\n  max-height: 100%;\n  width: 50%;\n  padding: 2rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media screen and (max-width: 1080px) {\n  body #root .app {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 768px) {\n  body #root .app {\n    padding: 1rem;\n    width: 99%;\n  }\n}\nbody #root .app form {\n  width: 100%;\n  min-width: 40%;\n  display: flex;\n  gap: 0.6rem;\n}\nbody #root .app form input {\n  width: 100%;\n  padding: 0.3rem 0.4rem;\n  border: 1px solid silver;\n  border-radius: 6px;\n  font-size: 1.1rem;\n}\nbody #root .app form input:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\nbody #root .app form button {\n  padding: 0.3rem 0.6rem;\n  cursor: pointer;\n  border: none;\n  font-size: 1.1rem;\n  border-radius: 6px;\n  color: #eee;\n  background: rgb(26, 87, 156);\n}\nbody #root .app form button:hover {\n  background: rgb(21, 69, 124);\n}\nbody #root .app .info-card {\n  display: grid;\n  grid-template-areas: \"main sec\" \"main sec\" \"main button\";\n  gap: 1rem;\n  padding: 1.6rem;\n  border-radius: 6px;\n  color: rgb(241, 218, 167);\n  background: rgb(26, 87, 156);\n  animation: add 1s;\n}\nbody #root .app .info-card .main {\n  grid-area: main;\n}\nbody #root .app .info-card .main h2 {\n  color: rgb(168, 220, 250);\n  font-size: 2.6rem;\n}\nbody #root .app .info-card .main .tempC,\nbody #root .app .info-card .main .tempF {\n  font-size: 2.6rem;\n}\nbody #root .app .info-card .sec {\n  grid-area: sec;\n}\nbody #root .app .info-card .sec div {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\nbody #root .app .info-card button {\n  padding: 0.3rem 0.6rem;\n  cursor: pointer;\n  border: none;\n  font-size: 1.1rem;\n  border-radius: 6px;\n  grid-area: button;\n  color: rgb(26, 87, 156);\n  background: rgb(168, 220, 250);\n}\nbody #root .app .info-card button:hover {\n  background: rgb(156, 203, 230);\n}\nbody #root .app .info-card .hide {\n  display: none !important;\n}\nbody #root footer {\n  align-items: center;\n  font-size: 0.9rem;\n  display: flex;\n  gap: 0.2rem;\n}\n\n@keyframes add {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px) rotateY(80deg);\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_base.scss"],"names":[],"mappings":"AAGA;EACE,sBAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;AADF;;AAIA;EACE,YAAA;EACA,aAAA;EACA,8BCbO;ADYT;AAGE;EACE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADJ;AAGI;EACE,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,yBCjCG;EDkCH,kBAAA;EACA,4BClCG;ADiCT;AAGM;EACE,eAAA;EACA,UAAA;AADR;AAKI;EACE;IACE,eAAA;EAHN;AACF;AAMI;EACE,UAAA;EACA,iBAAA;AAJN;AAOI;EACE,gBAAA;EACA,UAAA;EACA,aAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AALN;AAOM;EATF;IAUI,UAAA;EAJN;AACF;AAMM;EAbF;IAcI,aAAA;IACA,UAAA;EAHN;AACF;AAKM;EACE,WAAA;EACA,cAAA;EACA,aAAA;EACA,WAAA;AAHR;AAKQ;EAEE,WAAA;EACA,sBAAA;EACA,wBAAA;EACA,kBAAA;EACA,iBAAA;AAJV;AAMU;EACE,wBAAA;EACA,4CAAA;AAJZ;AAQQ;ECvFN,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EDqFQ,WAAA;EACA,4BC9FD;AD4FT;AAGU;EACE,4BC/FE;AD8Fd;AAMM;EACE,aAAA;EACA,wDACE;EAGF,SAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,4BC/GC;EDgHD,iBAAA;AAPR;AASQ;EACE,eAAA;AAPV;AAQU;EACE,yBCtHH;EDuHG,iBAAA;AANZ;AASU;;EAEE,iBAAA;AAPZ;AAWQ;EACE,cAAA;AATV;AAWU;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AATZ;AAaQ;ECrIN,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EDmIQ,iBAAA;EACA,uBC5ID;ED6IC,8BC9ID;ADuIT;AAQU;EACE,8BAAA;AANZ;AAUQ;EACE,wBAAA;AARV;AAaI;EACE,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,WAAA;AAXN;;AAgBA;EACE;IACE,UAAA;IACA,2CAAA;EAbF;EAgBA;IACE,UAAA;EAdF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');\n@import 'base';\n\n* {\n  box-sizing: border-box;\n  font-family: 'Poppins';\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background: $color1;\n\n  #root {\n    min-width: 350px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h1 {\n      align-self: stretch;\n      font-size: 2.8rem;\n      transform: scaleY(1.1);\n      letter-spacing: 0.1rem;\n      padding: 0.6rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 1rem;\n      color: $color1;\n      text-align: center;\n      background: $color2;\n\n      svg {\n        min-width: 3rem;\n        fill: #eee;\n      }\n    }\n\n    @media screen and (max-width: 768px) {\n      h1 {\n        font-size: 2rem;\n      }\n    }\n\n    .error {\n      color: red;\n      font-size: 1.1rem;\n    }\n\n    .app {\n      max-height: 100%;\n      width: 50%;\n      padding: 2rem;\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      gap: 1rem;\n\n      @media screen and (max-width: 1080px) {\n        width: 90%;\n      }\n\n      @media screen and (max-width: 768px) {\n        padding: 1rem;\n        width: 99%;\n      }\n\n      form {\n        width: 100%;\n        min-width: 40%;\n        display: flex;\n        gap: 0.6rem;\n\n        input {\n          // flex: 1;\n          width: 100%;\n          padding: 0.3rem 0.4rem;\n          border: 1px solid silver;\n          border-radius: 6px;\n          font-size: 1.1rem;\n\n          &:focus {\n            outline: none !important;\n            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n          }\n        }\n\n        button {\n          @include button;\n          color: #eee;\n          background: $color2;\n          &:hover {\n            background: $hover-color;\n          }\n        }\n      }\n\n      .info-card {\n        display: grid;\n        grid-template-areas:\n          'main sec'\n          'main sec'\n          'main button';\n        gap: 1rem;\n        padding: 1.6rem;\n        border-radius: 6px;\n        color: rgb(241, 218, 167);\n        background: $color2;\n        animation: add 1s;\n\n        .main {\n          grid-area: main;\n          h2 {\n            color: $color1;\n            font-size: 2.6rem;\n          }\n\n          .tempC,\n          .tempF {\n            font-size: 2.6rem;\n          }\n        }\n\n        .sec {\n          grid-area: sec;\n\n          div {\n            display: flex;\n            align-items: center;\n            gap: 0.2rem;\n          }\n        }\n\n        button {\n          @include button;\n          grid-area: button;\n          color: $color2;\n          background: $color1;\n          &:hover {\n            background: rgb(156, 203, 230);\n          }\n        }\n\n        .hide {\n          display: none !important;\n        }\n      }\n    }\n\n    footer {\n      align-items: center;\n      font-size: 0.9rem;\n      display: flex;\n      gap: 0.2rem;\n    }\n  }\n}\n\n@keyframes add {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px) rotateY(80deg);\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n","$color1: rgb(168, 220, 250);\n$color2: rgb(26, 87, 156);\n$hover-color: rgb(21, 69, 124);\n\n@mixin button {\n  padding: 0.3rem 0.6rem;\n  cursor: pointer;\n  border: none;\n  font-size: 1.1rem;\n  border-radius: 6px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherForm */ "./src/weatherForm.js");
/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherInfo */ "./src/weatherInfo.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




function App() {
  const container = document.createElement('div');
  container.classList.add('app');

  function render(data) {
    container.innerHTML = '';
    container.appendChild((0,_weatherForm__WEBPACK_IMPORTED_MODULE_0__["default"])((data) => {
      render(data);
    }));
    container.appendChild((0,_weatherInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(data, () => {
      const tempC = document.querySelector('.tempC');
      const tempF = document.querySelector('.tempF');
      const feelC = document.querySelector('.feelC');
      const feelF = document.querySelector('.feelF');
      tempC.classList.toggle('hide');
      tempF.classList.toggle('hide');
      feelC.classList.toggle('hide');
      feelF.classList.toggle('hide');
    }));
  }
  render();

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/github-icon.svg */ "./src/assets/github-icon.svg");


function footer() {
  const container = document.createElement('footer');

  container.innerHTML = `
  <footer class="footer">
  Copyright &copy; 2022 Avag Sargsyan
    <a href="https://github.com/AvagSargsyan" target="_blank">
      <img src="${_assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_0__}" />
    </a>
  </footer>
  `

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/getApiData.js":
/*!***************************!*\
  !*** ./src/getApiData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getWeatherData(cityName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=54dcd8e9e87894c430bb25c704729ad3`,
      {
        mode: 'cors',
      });
    if (response.status === 404) {
      throw new Error('404');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === '404') {
      throw new Error('404');
    } else {
      throw new Error(error.message);
    }
  }
}

async function extractData(cityName) {
  try {
    const data = await getWeatherData(cityName);

    return {
      temp: data.main.temp,
      feel: data.main.feels_like,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
    }
  } catch (error) {
    throw error;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractData);


/***/ }),

/***/ "./src/weatherForm.js":
/*!****************************!*\
  !*** ./src/weatherForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getApiData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApiData */ "./src/getApiData.js");


function weatherForm(onChange) {
  const container = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'cityName';
  input.placeholder = 'Enter city name';
  const button = document.createElement('button');
  button.innerText = 'Search';


  container.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value) {
      (0,_getApiData__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value).then(data => {
        onChange(data);
      }).catch(error => {
        if (error.message === '404') {
          onChange('not valid');
        } else {
          onChange('other error');
        }
      });
    }
  });

  container.appendChild(input);
  container.appendChild(button);
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherForm);


/***/ }),

/***/ "./src/weatherInfo.js":
/*!****************************!*\
  !*** ./src/weatherInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_feels_like_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/feels-like-icon.svg */ "./src/assets/feels-like-icon.svg");
/* harmony import */ var _assets_humidity_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/humidity-icon.svg */ "./src/assets/humidity-icon.svg");
/* harmony import */ var _assets_wind_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/wind-icon.svg */ "./src/assets/wind-icon.svg");
/* harmony import */ var _assets_place_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/place-icon.svg */ "./src/assets/place-icon.svg");





function celsiusToFarenheit(tempInC) {
  return +(((tempInC * 1.8 + 32).toFixed(2)));
}

function weatherInfo(data, onChange) {
  const container = document.createElement('div');

  if (data === undefined) {
    container.innerHTML = '';
  } else if (data === 'not valid') {
    container.innerHTML = 'Please enter a valid city name.';
    container.classList.add('error');
  } else if (data === 'other error') {
    container.innerHTML = 'Oops! Something went wrong. Please try again :(';
    container.classList.add('error');
  } else {
    container.classList.remove('error');
    container.classList.add('info-card');
    container.innerHTML = `
      <div class="main">
        <h2 class="city-name">
          <img src=${_assets_place_icon_svg__WEBPACK_IMPORTED_MODULE_3__} />
          ${data.city}
        </h2>
        <div class="description">${data.description}</div>
        <div class="tempC">${data.temp} &degC</div>
        <div class="tempF hide">${celsiusToFarenheit(data.temp)} &degF</div>
      </div>
      <div class="sec">
        <div class="feelC">
        <img src=${_assets_feels_like_icon_svg__WEBPACK_IMPORTED_MODULE_0__} />
        Feels like: ${data.feel} &degC</div>
        <div class="feelF hide">
        <img src=${_assets_feels_like_icon_svg__WEBPACK_IMPORTED_MODULE_0__} />
        Feels like: ${celsiusToFarenheit(data.feel)} &degF</div>
        <div class="humidity">
        <img src=${_assets_humidity_icon_svg__WEBPACK_IMPORTED_MODULE_1__} />
        Humidity: ${data.humidity} %</div>
        <div class="wind">
        <img src=${_assets_wind_icon_svg__WEBPACK_IMPORTED_MODULE_2__} />
        Wind: ${data.wind} km/hr</div>
      </div>
    `
    const changeUnitsBtn = document.createElement('button');
    changeUnitsBtn.textContent = 'Change units';
    changeUnitsBtn.addEventListener('click', e => {
      onChange();
    });
    container.appendChild(changeUnitsBtn);
  }

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherInfo);


/***/ }),

/***/ "./src/assets/feels-like-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/feels-like-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feels-like-icon.svg";

/***/ }),

/***/ "./src/assets/github-icon.svg":
/*!************************************!*\
  !*** ./src/assets/github-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-icon.svg";

/***/ }),

/***/ "./src/assets/humidity-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/humidity-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "humidity-icon.svg";

/***/ }),

/***/ "./src/assets/place-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/place-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "place-icon.svg";

/***/ }),

/***/ "./src/assets/wind-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/wind-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wind-icon.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");



const root = document.getElementById('root');
root.appendChild((0,_app__WEBPACK_IMPORTED_MODULE_0__["default"])());
root.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=bundleae037a8efa980130a973.js.map