/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/geometric/index.js":
/*!*****************************************!*\
  !*** ./node_modules/geometric/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angleReflect": () => (/* reexport safe */ _src_angles_angleReflect__WEBPACK_IMPORTED_MODULE_33__.angleReflect),
/* harmony export */   "angleToDegrees": () => (/* reexport safe */ _src_angles_angleToDegrees__WEBPACK_IMPORTED_MODULE_34__.angleToDegrees),
/* harmony export */   "angleToRadians": () => (/* reexport safe */ _src_angles_angleToRadians__WEBPACK_IMPORTED_MODULE_35__.angleToRadians),
/* harmony export */   "lineAngle": () => (/* reexport safe */ _src_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle),
/* harmony export */   "lineInterpolate": () => (/* reexport safe */ _src_lines_lineInterpolate__WEBPACK_IMPORTED_MODULE_1__.lineInterpolate),
/* harmony export */   "lineIntersectsLine": () => (/* reexport safe */ _src_relationships_lineIntersectsLine__WEBPACK_IMPORTED_MODULE_26__.lineIntersectsLine),
/* harmony export */   "lineIntersectsPolygon": () => (/* reexport safe */ _src_relationships_lineIntersectsPolygon__WEBPACK_IMPORTED_MODULE_27__.lineIntersectsPolygon),
/* harmony export */   "lineLength": () => (/* reexport safe */ _src_lines_lineLength__WEBPACK_IMPORTED_MODULE_2__.lineLength),
/* harmony export */   "lineMidpoint": () => (/* reexport safe */ _src_lines_lineMidpoint__WEBPACK_IMPORTED_MODULE_3__.lineMidpoint),
/* harmony export */   "lineRotate": () => (/* reexport safe */ _src_lines_lineRotate__WEBPACK_IMPORTED_MODULE_4__.lineRotate),
/* harmony export */   "lineTranslate": () => (/* reexport safe */ _src_lines_lineTranslate__WEBPACK_IMPORTED_MODULE_5__.lineTranslate),
/* harmony export */   "pointInPolygon": () => (/* reexport safe */ _src_relationships_pointInPolygon__WEBPACK_IMPORTED_MODULE_28__.pointInPolygon),
/* harmony export */   "pointLeftofLine": () => (/* reexport safe */ _src_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_30__.pointLeftofLine),
/* harmony export */   "pointOnLine": () => (/* reexport safe */ _src_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_30__.pointOnLine),
/* harmony export */   "pointOnPolygon": () => (/* reexport safe */ _src_relationships_pointOnPolygon__WEBPACK_IMPORTED_MODULE_29__.pointOnPolygon),
/* harmony export */   "pointRightofLine": () => (/* reexport safe */ _src_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_30__.pointRightofLine),
/* harmony export */   "pointRotate": () => (/* reexport safe */ _src_points_pointRotate__WEBPACK_IMPORTED_MODULE_6__.pointRotate),
/* harmony export */   "pointTranslate": () => (/* reexport safe */ _src_points_pointTranslate__WEBPACK_IMPORTED_MODULE_7__.pointTranslate),
/* harmony export */   "pointWithLine": () => (/* reexport safe */ _src_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_30__.pointWithLine),
/* harmony export */   "polygonArea": () => (/* reexport safe */ _src_polygons_polygonArea__WEBPACK_IMPORTED_MODULE_8__.polygonArea),
/* harmony export */   "polygonBounds": () => (/* reexport safe */ _src_polygons_polygonBounds__WEBPACK_IMPORTED_MODULE_9__.polygonBounds),
/* harmony export */   "polygonCentroid": () => (/* reexport safe */ _src_polygons_polygonCentroid__WEBPACK_IMPORTED_MODULE_10__.polygonCentroid),
/* harmony export */   "polygonHull": () => (/* reexport safe */ _src_polygons_polygonHull__WEBPACK_IMPORTED_MODULE_11__.polygonHull),
/* harmony export */   "polygonInPolygon": () => (/* reexport safe */ _src_relationships_polygonInPolygon__WEBPACK_IMPORTED_MODULE_31__.polygonInPolygon),
/* harmony export */   "polygonInterpolate": () => (/* reexport safe */ _src_polygons_polygonInterpolate__WEBPACK_IMPORTED_MODULE_12__.polygonInterpolate),
/* harmony export */   "polygonIntersectsPolygon": () => (/* reexport safe */ _src_relationships_polygonIntersectsPolygon__WEBPACK_IMPORTED_MODULE_32__.polygonIntersectsPolygon),
/* harmony export */   "polygonLength": () => (/* reexport safe */ _src_polygons_polygonLength__WEBPACK_IMPORTED_MODULE_13__.polygonLength),
/* harmony export */   "polygonMean": () => (/* reexport safe */ _src_polygons_polygonMean__WEBPACK_IMPORTED_MODULE_14__.polygonMean),
/* harmony export */   "polygonRandom": () => (/* reexport safe */ _src_polygons_polygonRandom__WEBPACK_IMPORTED_MODULE_15__.polygonRandom),
/* harmony export */   "polygonReflectX": () => (/* reexport safe */ _src_polygons_polygonReflectX__WEBPACK_IMPORTED_MODULE_16__.polygonReflectX),
/* harmony export */   "polygonReflectY": () => (/* reexport safe */ _src_polygons_polygonReflectY__WEBPACK_IMPORTED_MODULE_17__.polygonReflectY),
/* harmony export */   "polygonRegular": () => (/* reexport safe */ _src_polygons_polygonRegular__WEBPACK_IMPORTED_MODULE_18__.polygonRegular),
/* harmony export */   "polygonRotate": () => (/* reexport safe */ _src_polygons_polygonRotate__WEBPACK_IMPORTED_MODULE_19__.polygonRotate),
/* harmony export */   "polygonScale": () => (/* reexport safe */ _src_polygons_polygonScale__WEBPACK_IMPORTED_MODULE_20__.polygonScale),
/* harmony export */   "polygonScaleArea": () => (/* reexport safe */ _src_polygons_polygonScaleArea__WEBPACK_IMPORTED_MODULE_21__.polygonScaleArea),
/* harmony export */   "polygonScaleX": () => (/* reexport safe */ _src_polygons_polygonScaleX__WEBPACK_IMPORTED_MODULE_22__.polygonScaleX),
/* harmony export */   "polygonScaleY": () => (/* reexport safe */ _src_polygons_polygonScaleY__WEBPACK_IMPORTED_MODULE_23__.polygonScaleY),
/* harmony export */   "polygonTranslate": () => (/* reexport safe */ _src_polygons_polygonTranslate__WEBPACK_IMPORTED_MODULE_24__.polygonTranslate),
/* harmony export */   "polygonWind": () => (/* reexport safe */ _src_polygons_polygonWind__WEBPACK_IMPORTED_MODULE_25__.polygonWind)
/* harmony export */ });
/* harmony import */ var _src_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _src_lines_lineInterpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lines/lineInterpolate */ "./node_modules/geometric/src/lines/lineInterpolate.js");
/* harmony import */ var _src_lines_lineLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _src_lines_lineMidpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/lines/lineMidpoint */ "./node_modules/geometric/src/lines/lineMidpoint.js");
/* harmony import */ var _src_lines_lineRotate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/lines/lineRotate */ "./node_modules/geometric/src/lines/lineRotate.js");
/* harmony import */ var _src_lines_lineTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/lines/lineTranslate */ "./node_modules/geometric/src/lines/lineTranslate.js");
/* harmony import */ var _src_points_pointRotate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/points/pointRotate */ "./node_modules/geometric/src/points/pointRotate.js");
/* harmony import */ var _src_points_pointTranslate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _src_polygons_polygonArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/polygons/polygonArea */ "./node_modules/geometric/src/polygons/polygonArea.js");
/* harmony import */ var _src_polygons_polygonBounds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/polygons/polygonBounds */ "./node_modules/geometric/src/polygons/polygonBounds.js");
/* harmony import */ var _src_polygons_polygonCentroid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/polygons/polygonCentroid */ "./node_modules/geometric/src/polygons/polygonCentroid.js");
/* harmony import */ var _src_polygons_polygonHull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/polygons/polygonHull */ "./node_modules/geometric/src/polygons/polygonHull.js");
/* harmony import */ var _src_polygons_polygonInterpolate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/polygons/polygonInterpolate */ "./node_modules/geometric/src/polygons/polygonInterpolate.js");
/* harmony import */ var _src_polygons_polygonLength__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/polygons/polygonLength */ "./node_modules/geometric/src/polygons/polygonLength.js");
/* harmony import */ var _src_polygons_polygonMean__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/polygons/polygonMean */ "./node_modules/geometric/src/polygons/polygonMean.js");
/* harmony import */ var _src_polygons_polygonRandom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/polygons/polygonRandom */ "./node_modules/geometric/src/polygons/polygonRandom.js");
/* harmony import */ var _src_polygons_polygonReflectX__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/polygons/polygonReflectX */ "./node_modules/geometric/src/polygons/polygonReflectX.js");
/* harmony import */ var _src_polygons_polygonReflectY__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/polygons/polygonReflectY */ "./node_modules/geometric/src/polygons/polygonReflectY.js");
/* harmony import */ var _src_polygons_polygonRegular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/polygons/polygonRegular */ "./node_modules/geometric/src/polygons/polygonRegular.js");
/* harmony import */ var _src_polygons_polygonRotate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/polygons/polygonRotate */ "./node_modules/geometric/src/polygons/polygonRotate.js");
/* harmony import */ var _src_polygons_polygonScale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/polygons/polygonScale */ "./node_modules/geometric/src/polygons/polygonScale.js");
/* harmony import */ var _src_polygons_polygonScaleArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/polygons/polygonScaleArea */ "./node_modules/geometric/src/polygons/polygonScaleArea.js");
/* harmony import */ var _src_polygons_polygonScaleX__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/polygons/polygonScaleX */ "./node_modules/geometric/src/polygons/polygonScaleX.js");
/* harmony import */ var _src_polygons_polygonScaleY__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/polygons/polygonScaleY */ "./node_modules/geometric/src/polygons/polygonScaleY.js");
/* harmony import */ var _src_polygons_polygonTranslate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/polygons/polygonTranslate */ "./node_modules/geometric/src/polygons/polygonTranslate.js");
/* harmony import */ var _src_polygons_polygonWind__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/polygons/polygonWind */ "./node_modules/geometric/src/polygons/polygonWind.js");
/* harmony import */ var _src_relationships_lineIntersectsLine__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/relationships/lineIntersectsLine */ "./node_modules/geometric/src/relationships/lineIntersectsLine.js");
/* harmony import */ var _src_relationships_lineIntersectsPolygon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/relationships/lineIntersectsPolygon */ "./node_modules/geometric/src/relationships/lineIntersectsPolygon.js");
/* harmony import */ var _src_relationships_pointInPolygon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/relationships/pointInPolygon */ "./node_modules/geometric/src/relationships/pointInPolygon.js");
/* harmony import */ var _src_relationships_pointOnPolygon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/relationships/pointOnPolygon */ "./node_modules/geometric/src/relationships/pointOnPolygon.js");
/* harmony import */ var _src_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/relationships/pointOnLine */ "./node_modules/geometric/src/relationships/pointOnLine.js");
/* harmony import */ var _src_relationships_polygonInPolygon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/relationships/polygonInPolygon */ "./node_modules/geometric/src/relationships/polygonInPolygon.js");
/* harmony import */ var _src_relationships_polygonIntersectsPolygon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/relationships/polygonIntersectsPolygon */ "./node_modules/geometric/src/relationships/polygonIntersectsPolygon.js");
/* harmony import */ var _src_angles_angleReflect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/angles/angleReflect */ "./node_modules/geometric/src/angles/angleReflect.js");
/* harmony import */ var _src_angles_angleToDegrees__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/angles/angleToDegrees */ "./node_modules/geometric/src/angles/angleToDegrees.js");
/* harmony import */ var _src_angles_angleToRadians__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/angles/angleToRadians */ "./node_modules/geometric/src/angles/angleToRadians.js");









































/***/ }),

/***/ "./node_modules/geometric/src/angles/angleReflect.js":
/*!***********************************************************!*\
  !*** ./node_modules/geometric/src/angles/angleReflect.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angleReflect": () => (/* binding */ angleReflect)
/* harmony export */ });
// Returns the angle of reflection given an angle of incidence and a surface angle.
function angleReflect(incidenceAngle, surfaceAngle){
  const a = surfaceAngle * 2 - incidenceAngle;
  return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}

/***/ }),

/***/ "./node_modules/geometric/src/angles/angleToDegrees.js":
/*!*************************************************************!*\
  !*** ./node_modules/geometric/src/angles/angleToDegrees.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angleToDegrees": () => (/* binding */ angleToDegrees)
/* harmony export */ });
// Converts radians to degrees.
function angleToDegrees(angle){
  return angle * 180 / Math.PI;
}

/***/ }),

/***/ "./node_modules/geometric/src/angles/angleToRadians.js":
/*!*************************************************************!*\
  !*** ./node_modules/geometric/src/angles/angleToRadians.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angleToRadians": () => (/* binding */ angleToRadians)
/* harmony export */ });
// Converts degrees to radians.
function angleToRadians(angle){
  return angle / 180 * Math.PI;
}

/***/ }),

/***/ "./node_modules/geometric/src/lines/lineAngle.js":
/*!*******************************************************!*\
  !*** ./node_modules/geometric/src/lines/lineAngle.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineAngle": () => (/* binding */ lineAngle)
/* harmony export */ });
/* harmony import */ var _angles_angleToDegrees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angles/angleToDegrees */ "./node_modules/geometric/src/angles/angleToDegrees.js");


// Calculates the angle of a line, in degrees.
function lineAngle(line){
  return (0,_angles_angleToDegrees__WEBPACK_IMPORTED_MODULE_0__.angleToDegrees)(Math.atan2(line[1][1] - line[0][1], line[1][0] - line[0][0]));
}

/***/ }),

/***/ "./node_modules/geometric/src/lines/lineInterpolate.js":
/*!*************************************************************!*\
  !*** ./node_modules/geometric/src/lines/lineInterpolate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineInterpolate": () => (/* binding */ lineInterpolate)
/* harmony export */ });
/* harmony import */ var _lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lineLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");




// Returns an interpolator function given a line [a, b].
// The returned interpolator function takes a single argument t, where t is a number ranging from 0 to 1;
// a value of 0 returns a, while a value of 1 returns b.
// Intermediate values interpolate from start to end along the line segment.
// By default, the returned interpolator will output points outside of the line segment if t is less than 0 or greater than 1.
// You can pass an optional boolean indicating whether to the returned point to inside of the line segment,
// even if t is greater than 1 or less then 0.
function lineInterpolate(line, clamp = false){
  if (clamp) {
    return t => t <= 0 ? line[0] : t >= 1 ? line[1] : (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(line[0], (0,_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)(line), (0,_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)(line) * t);
  }
  else {
    return t => t === 0 ? line[0] : t === 1 ? line[1] : (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(line[0], (0,_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)(line), (0,_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)(line) * t);  
  }
}

/***/ }),

/***/ "./node_modules/geometric/src/lines/lineLength.js":
/*!********************************************************!*\
  !*** ./node_modules/geometric/src/lines/lineLength.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineLength": () => (/* binding */ lineLength)
/* harmony export */ });
// Calculates the distance between the endpoints of a line segment.
function lineLength(line){
  return Math.sqrt(Math.pow(line[1][0] - line[0][0], 2) + Math.pow(line[1][1] - line[0][1], 2));
}

/***/ }),

/***/ "./node_modules/geometric/src/lines/lineMidpoint.js":
/*!**********************************************************!*\
  !*** ./node_modules/geometric/src/lines/lineMidpoint.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineMidpoint": () => (/* binding */ lineMidpoint)
/* harmony export */ });
// Calculates the midpoint of a line segment.
function lineMidpoint(line){
  return [(line[0][0] + line[1][0]) / 2, (line[0][1] + line[1][1]) / 2];
}

/***/ }),

/***/ "./node_modules/geometric/src/lines/lineRotate.js":
/*!********************************************************!*\
  !*** ./node_modules/geometric/src/lines/lineRotate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineRotate": () => (/* binding */ lineRotate)
/* harmony export */ });
/* harmony import */ var _lineMidpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineMidpoint */ "./node_modules/geometric/src/lines/lineMidpoint.js");
/* harmony import */ var _points_pointRotate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../points/pointRotate */ "./node_modules/geometric/src/points/pointRotate.js");



// Returns the coordinates resulting from rotating a line about an origin by an angle in degrees.
// If origin is not specified, the origin defaults to the midpoint of the line.
function lineRotate(line, angle, origin){
  return line.map(point => (0,_points_pointRotate__WEBPACK_IMPORTED_MODULE_1__.pointRotate)(point, angle, origin || (0,_lineMidpoint__WEBPACK_IMPORTED_MODULE_0__.lineMidpoint)(line)));
}

/***/ }),

/***/ "./node_modules/geometric/src/lines/lineTranslate.js":
/*!***********************************************************!*\
  !*** ./node_modules/geometric/src/lines/lineTranslate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineTranslate": () => (/* binding */ lineTranslate)
/* harmony export */ });
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");


// Returns the coordinates resulting from translating a line by an angle in degrees and a distance.
function lineTranslate(line, angle, distance){
  return line.map(point => (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_0__.pointTranslate)(point, angle, distance));
}

/***/ }),

/***/ "./node_modules/geometric/src/points/pointRotate.js":
/*!**********************************************************!*\
  !*** ./node_modules/geometric/src/points/pointRotate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointRotate": () => (/* binding */ pointRotate)
/* harmony export */ });
/* harmony import */ var _angles_angleToRadians__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angles/angleToRadians */ "./node_modules/geometric/src/angles/angleToRadians.js");


// Rotates a point by an angle in degrees around an origin.
function pointRotate(point, angle, origin){
  const r = (0,_angles_angleToRadians__WEBPACK_IMPORTED_MODULE_0__.angleToRadians)(angle || 0);

  if (!origin || (origin[0] === 0 && origin[1] === 0)){
    return rotate(point, r);
  }
  else {
    // See: https://math.stackexchange.com/questions/1964905/rotation-around-non-zero-point
    const p0 = point.map((c, i) => c - origin[i]);
    const rotated = rotate(p0, r);
    return rotated.map((c, i) => c + origin[i]);
  }
}

function rotate(point, angle){
  // See: https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Rotation
  return [(point[0] * Math.cos(angle)) - point[1] * Math.sin(angle), (point[0] * Math.sin(angle)) + point[1] * Math.cos(angle)];
}

/***/ }),

/***/ "./node_modules/geometric/src/points/pointTranslate.js":
/*!*************************************************************!*\
  !*** ./node_modules/geometric/src/points/pointTranslate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointTranslate": () => (/* binding */ pointTranslate)
/* harmony export */ });
/* harmony import */ var _angles_angleToRadians__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../angles/angleToRadians */ "./node_modules/geometric/src/angles/angleToRadians.js");


// Translates a point by an angle in degrees and distance
function pointTranslate(point, angle = 0, distance = 0){
  const r = (0,_angles_angleToRadians__WEBPACK_IMPORTED_MODULE_0__.angleToRadians)(angle);
  return [point[0] + distance * Math.cos(r), point[1] + distance * Math.sin(r)];
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonArea.js":
/*!************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonArea.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonArea": () => (/* binding */ polygonArea)
/* harmony export */ });
// Calculates the area of a polygon.
function polygonArea(vertices, signed = false){
  let a = 0;

  for (let i = 0, l = vertices.length; i < l; i++) {
    const v0 = vertices[i],
          v1 = vertices[i === l - 1 ? 0 : i + 1];

    a += v0[0] * v1[1];
    a -= v1[0] * v0[1];
  }

  return signed ? a / 2 : Math.abs(a / 2);
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonBounds.js":
/*!**************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonBounds.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonBounds": () => (/* binding */ polygonBounds)
/* harmony export */ });
// Calculates the bounds of a polygon.
function polygonBounds(polygon){
  if (polygon.length < 3){
    return null;
  }

  let xMin = Infinity,
      xMax = -Infinity,
      yMin = Infinity,
      yMax = -Infinity,
      found = false;

  for (let i = 0, l = polygon.length; i < l; i++){
    const p = polygon[i],
          x = p[0],
          y = p[1];

    if (x != null && isFinite(x) && y != null && isFinite(y)){
      found = true;
      if (x < xMin) xMin = x;
      if (x > xMax) xMax = x;
      if (y < yMin) yMin = y;
      if (y > yMax) yMax = y;      
    }
  }

  return found ? [[xMin, yMin], [xMax, yMax]] : null;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonCentroid.js":
/*!****************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonCentroid.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonCentroid": () => (/* binding */ polygonCentroid)
/* harmony export */ });
// Calculates the weighted centroid a polygon.
function polygonCentroid(vertices){
  let a = 0, x = 0, y = 0, l = vertices.length;

  for (let i = 0; i < l; i++) {
    const s = i === l - 1 ? 0 : i + 1,
          v0 = vertices[i],
          v1 = vertices[s],
          f = (v0[0] * v1[1]) - (v1[0] * v0[1]);

    a += f;
    x += (v0[0] + v1[0]) * f;
    y += (v0[1] + v1[1]) * f;
  }

  const d = a * 3;

  return [x / d, y / d];
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonHull.js":
/*!************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonHull.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonHull": () => (/* binding */ polygonHull)
/* harmony export */ });
/* harmony import */ var _utils_crossProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/crossProduct */ "./node_modules/geometric/src/utils/crossProduct.js");


// Caclulates the convex hull of a set of points.
// See https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript
function polygonHull(points){
  if (points.length < 3) { return null; }

  const pointsCopy = points.slice().sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  let lower = [];
  for (let i = 0; i < pointsCopy.length; i++) {
    while (lower.length >= 2 && (0,_utils_crossProduct__WEBPACK_IMPORTED_MODULE_0__.cross)(lower[lower.length - 2], lower[lower.length - 1], pointsCopy[i]) <= 0) {
       lower.pop();
    }
    lower.push(pointsCopy[i]);
  }

  let upper = [];
  for (let i = pointsCopy.length - 1; i >= 0; i--) {
    while (upper.length >= 2 && (0,_utils_crossProduct__WEBPACK_IMPORTED_MODULE_0__.cross)(upper[upper.length - 2], upper[upper.length - 1], pointsCopy[i]) <= 0) {
       upper.pop();
    }
    upper.push(pointsCopy[i]);
  }

  upper.pop();
  lower.pop();

  return lower.concat(upper);
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonInterpolate.js":
/*!*******************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonInterpolate.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonInterpolate": () => (/* binding */ polygonInterpolate)
/* harmony export */ });
/* harmony import */ var _utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/closePolygon */ "./node_modules/geometric/src/utils/closePolygon.js");
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _polygonLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polygonLength */ "./node_modules/geometric/src/polygons/polygonLength.js");






function polygonInterpolate(polygon){
  return (t) => {
    if (t <= 0){
      return polygon[0];
    }
  
    const closed = (0,_utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__.close)(polygon);
      
    if (t >= 1){
      return closed[closed.length - 1];
    }
    
    const target = (0,_polygonLength__WEBPACK_IMPORTED_MODULE_4__.polygonLength)(closed) * t;
    let point = [], track = 0;
  
    for (let i = 0; i < closed.length - 1; i++){
      const side = [closed[i], closed[i + 1]],
            length = (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_2__.lineLength)(side),
            angle = (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_1__.lineAngle)(side),
            delta = target - (track += length);
  
      if (delta < 0){
        point = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_3__.pointTranslate)(side[0], angle, length + delta);
        break;
      }
  
      else if (i === polygon.length - 2){
        point = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_3__.pointTranslate)(side[0], angle, delta);
      }
    }
  
    return point;
  }
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonLength.js":
/*!**************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonLength.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonLength": () => (/* binding */ polygonLength)
/* harmony export */ });
// Calculates the length of a polygon's perimeter. See https://github.com/d3/d3-polygon/blob/master/src/length.js
function polygonLength(vertices){
  if (vertices.length === 0) {
    return 0;
  }

  let i = -1,
      n = vertices.length,
      b = vertices[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = vertices[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonMean.js":
/*!************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonMean.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonMean": () => (/* binding */ polygonMean)
/* harmony export */ });
// Calculates the arithmetic mean of a polygon's vertices.
function polygonMean(vertices){
  let x = 0, y = 0, l = vertices.length;

  for (let i = 0; i < l; i++) {
    const v = vertices[i];        

    x += v[0];
    y += v[1];
  }

  return [x / l, y / l];
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonRandom.js":
/*!**************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonRandom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonRandom": () => (/* binding */ polygonRandom)
/* harmony export */ });
/* harmony import */ var _utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/closePolygon */ "./node_modules/geometric/src/utils/closePolygon.js");
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _polygonArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonArea */ "./node_modules/geometric/src/polygons/polygonArea.js");
/* harmony import */ var _polygonCentroid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polygonCentroid */ "./node_modules/geometric/src/polygons/polygonCentroid.js");
/* harmony import */ var _polygonScaleArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygonScaleArea */ "./node_modules/geometric/src/polygons/polygonScaleArea.js");
/* harmony import */ var _polygonTranslate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polygonTranslate */ "./node_modules/geometric/src/polygons/polygonTranslate.js");








// Returns a random polygon according to the specific number of sides, area, and centroid.
// Based on an algorithm by Pavel Valtr and an implementation by Maneesh Agrawala: https://observablehq.com/@magrawala/random-convex-polygon
function polygonRandom(sides = 3, area = 100, centroid = [0, 0]) {
  const r = Math.sqrt(area / Math.PI),
        xs = Array.from({ length: sides }, () => 2 * r * Math.random()),
        ys = Array.from({ length: sides }, () => 2 * r * Math.random());
  
  xs.sort((a, b) => a - b);
  ys.sort((a, b) => a - b);

  const vecXS = chain(xs, xs[0], xs[xs.length-1]),
        vecYS = chain(ys, ys[0], ys[ys.length-1]);

  shuffle(vecYS);

  //Make polygon coordinates from the vecs by laying them out end to end
  let polygon = [],
      x = 0, y = 0;
  
  // Zip the vector arrays together
  // Then, sort the vectors by angle, in a counter clockwise fashion. 
  // a and b are tuples representing vectors. Compute angle for each vector and compare them.
  const vecs = vecXS
    .map((d, i) => [d, vecYS[i]])
    .sort((a, b) => Math.atan2(b[1], b[0]) - Math.atan2(a[1], a[0]))
    .forEach(vec => {
      x += vec[0] * 1;
      y += vec[1] * 1;
      polygon.push([x,y])
    });

  // Scale and translate
  const c = (0,_polygonCentroid__WEBPACK_IMPORTED_MODULE_4__.polygonCentroid)(polygon);
  
  return (0,_polygonTranslate__WEBPACK_IMPORTED_MODULE_6__.polygonTranslate)(
    (0,_polygonScaleArea__WEBPACK_IMPORTED_MODULE_5__.polygonScaleArea)(polygon, area / (0,_polygonArea__WEBPACK_IMPORTED_MODULE_3__.polygonArea)(polygon)),
    (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_1__.lineAngle)([c, centroid]),
    (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_2__.lineLength)([c, centroid])
  );
}

function chain(values, min, max) {
  let lastMin = min, lastMax = min;
  const output = []
  
  for (let i = 1; i < values.length - 1; i++) {
    const val = values[i];

    if (Math.random() > 0.5) {
      output.push(val - lastMin);
      lastMin = val;
    } else {
      output.push(lastMax - val);
      lastMax = val;
    }
  }
  
  output.push(max - lastMin);
  output.push(lastMax - max);
  
  return output;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonReflectX.js":
/*!****************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonReflectX.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonReflectX": () => (/* binding */ polygonReflectX)
/* harmony export */ });
/* harmony import */ var _lines_lineInterpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineInterpolate */ "./node_modules/geometric/src/lines/lineInterpolate.js");
/* harmony import */ var _polygonBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polygonBounds */ "./node_modules/geometric/src/polygons/polygonBounds.js");



function polygonReflectX(polygon, reflectFactor = 1){
  const [[min, _], [max, __]] = (0,_polygonBounds__WEBPACK_IMPORTED_MODULE_1__.polygonBounds)(polygon);
  const p = [];
  
  for (let i = 0, l = polygon.length; i < l; i++){
    const [x, y] = polygon[i];
    const r = [min + max - x, y];

    if (reflectFactor === 0){
      p[i] = [x, y];
    }
    else if (reflectFactor === 1){
      p[i] = r;
    }
    else {
      const t = (0,_lines_lineInterpolate__WEBPACK_IMPORTED_MODULE_0__.lineInterpolate)([[x, y], r]);
      p[i] = t(Math.max(Math.min(reflectFactor, 1), 0));
    }
  }
  
  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonReflectY.js":
/*!****************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonReflectY.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonReflectY": () => (/* binding */ polygonReflectY)
/* harmony export */ });
/* harmony import */ var _lines_lineInterpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineInterpolate */ "./node_modules/geometric/src/lines/lineInterpolate.js");
/* harmony import */ var _polygonBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polygonBounds */ "./node_modules/geometric/src/polygons/polygonBounds.js");



function polygonReflectY(polygon, reflectFactor = 1){
  const [[_, min], [__, max]] = (0,_polygonBounds__WEBPACK_IMPORTED_MODULE_1__.polygonBounds)(polygon);
  const p = [];
  
  for (let i = 0, l = polygon.length; i < l; i++){
    const [x, y] = polygon[i];
    const r = [x, min + max - y];

    if (reflectFactor === 0){
      p[i] = [x, y];
    }
    else if (reflectFactor === 1){
      p[i] = r;
    }
    else {
      const t = (0,_lines_lineInterpolate__WEBPACK_IMPORTED_MODULE_0__.lineInterpolate)([[x, y], r]);
      p[i] = t(Math.max(Math.min(reflectFactor, 1), 0));
    }
  }
  
  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonRegular.js":
/*!***************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonRegular.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonRegular": () => (/* binding */ polygonRegular)
/* harmony export */ });
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _polygonTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonTranslate */ "./node_modules/geometric/src/polygons/polygonTranslate.js");





// Returns the vertices of a regular polygon of the specified number of sides, area, and center coordinates.
function polygonRegular(sides = 3, area = 100, center){ 
  let polygon = [],
      point = [0, 0],
      sum = [0, 0],
      angle = 0;
  
  for (let i = 0; i < sides; i++){
    polygon[i] = point;
    sum[0] += point[0];
    sum[1] += point[1];
    point = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(point, angle, Math.sqrt((4 * area) * Math.tan(Math.PI / sides) / sides)); // https://web.archive.org/web/20180404142713/http://keisan.casio.com/exec/system/1355985985
    angle -= 360 / sides;
  }

  if (center){
    const line = [[sum[0] / sides, sum[1] / sides], center]
    polygon = (0,_polygonTranslate__WEBPACK_IMPORTED_MODULE_3__.polygonTranslate)(polygon, (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)(line), (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)(line));    
  }
  
  return polygon;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonRotate.js":
/*!**************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonRotate.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonRotate": () => (/* binding */ polygonRotate)
/* harmony export */ });
/* harmony import */ var _points_pointRotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../points/pointRotate */ "./node_modules/geometric/src/points/pointRotate.js");


// Rotates a polygon by an angle in degrees around an origin.
function polygonRotate(polygon, angle, origin){
  let p = [];

  for (let i = 0, l = polygon.length; i < l; i++){
    p[i] = (0,_points_pointRotate__WEBPACK_IMPORTED_MODULE_0__.pointRotate)(polygon[i], angle, origin);
  }
  
  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonScale.js":
/*!*************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonScale.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonScale": () => (/* binding */ polygonScale)
/* harmony export */ });
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _polygonCentroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonCentroid */ "./node_modules/geometric/src/polygons/polygonCentroid.js");





// Scales a polygon by a scale factor (where 1 is the original size) from an origin point.
// The returned polygon's area is equal to the input polygon's area multiplied by the square of the scaleFactor.
// The origin defaults to the polygon's centroid.
function polygonScale(polygon, scale, origin){
  if (!origin){
    origin = (0,_polygonCentroid__WEBPACK_IMPORTED_MODULE_3__.polygonCentroid)(polygon);
  }

  let p = [];

  for (let i = 0, l = polygon.length; i < l; i++){
    const v = polygon[i],
          d = (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)([origin, v]),
          a = (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)([origin, v]);

    p[i] = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(origin, a, d * scale);
  }

  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonScaleArea.js":
/*!*****************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonScaleArea.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonScaleArea": () => (/* binding */ polygonScaleArea)
/* harmony export */ });
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _polygonCentroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonCentroid */ "./node_modules/geometric/src/polygons/polygonCentroid.js");





// Scales a polygon by a scale factor (where 1 is the original size) from an origin point.
// The returned polygon's area is equal to the input polygon's area multiplied by the scaleFactor.
// The origin defaults to the polygon's centroid.
function polygonScaleArea(polygon, scale, origin){
  if (!origin){
    origin = (0,_polygonCentroid__WEBPACK_IMPORTED_MODULE_3__.polygonCentroid)(polygon);
  }

  let p = [];

  for (let i = 0, l = polygon.length; i < l; i++){
    const v = polygon[i],
          d = (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)([origin, v]),
          a = (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)([origin, v]);

    p[i] = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(origin, a, d * Math.sqrt(scale));
  }

  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonScaleX.js":
/*!**************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonScaleX.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonScaleX": () => (/* binding */ polygonScaleX)
/* harmony export */ });
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _polygonCentroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonCentroid */ "./node_modules/geometric/src/polygons/polygonCentroid.js");





// Scales a polygon's x-coordinates by a scale factor (where 1 is the original size) from an origin point.
// The origin defaults to the polygon's centroid.
function polygonScaleX(polygon, scale, origin){
  if (!origin){
    origin = (0,_polygonCentroid__WEBPACK_IMPORTED_MODULE_3__.polygonCentroid)(polygon);
  }

  let p = [];

  for (let i = 0, l = polygon.length; i < l; i++){
    const v = polygon[i],
          d = (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)([origin, v]),
          a = (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)([origin, v]),
          t = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(origin, a, d * scale);

    p[i] = [t[0], v[1]];
  }

  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonScaleY.js":
/*!**************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonScaleY.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonScaleY": () => (/* binding */ polygonScaleY)
/* harmony export */ });
/* harmony import */ var _lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineAngle */ "./node_modules/geometric/src/lines/lineAngle.js");
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");
/* harmony import */ var _polygonCentroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonCentroid */ "./node_modules/geometric/src/polygons/polygonCentroid.js");





// Scales a polygon's y-coordinates by a scale factor (where 1 is the original size) from an origin point.
// The origin defaults to the polygon's centroid.
function polygonScaleY(polygon, scale, origin){
  if (!origin){
    origin = (0,_polygonCentroid__WEBPACK_IMPORTED_MODULE_3__.polygonCentroid)(polygon);
  }

  let p = [];

  for (let i = 0, l = polygon.length; i < l; i++){
    const v = polygon[i],
          d = (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_1__.lineLength)([origin, v]),
          a = (0,_lines_lineAngle__WEBPACK_IMPORTED_MODULE_0__.lineAngle)([origin, v]),
          t = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_2__.pointTranslate)(origin, a, d * scale);

    p[i] = [v[0], t[1]];
  }

  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonTranslate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonTranslate.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonTranslate": () => (/* binding */ polygonTranslate)
/* harmony export */ });
/* harmony import */ var _points_pointTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../points/pointTranslate */ "./node_modules/geometric/src/points/pointTranslate.js");


// Translates a polygon by an angle in degrees and distance.
function polygonTranslate(polygon, angle, distance){
  let p = [];

  for (let i = 0, l = polygon.length; i < l; i++){
    p[i] = (0,_points_pointTranslate__WEBPACK_IMPORTED_MODULE_0__.pointTranslate)(polygon[i], angle, distance);
  }
  
  return p;
}

/***/ }),

/***/ "./node_modules/geometric/src/polygons/polygonWind.js":
/*!************************************************************!*\
  !*** ./node_modules/geometric/src/polygons/polygonWind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonWind": () => (/* binding */ polygonWind)
/* harmony export */ });
/* harmony import */ var _polygonArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygonArea */ "./node_modules/geometric/src/polygons/polygonArea.js");


// Returns a polygon in the specified winding order.
// If order is passed as a strings of "cw" or "clockwise", returns a polygon with a clockwise winding order.
// Otherwise, returns a polygon with a counter-clockwise winding order.
function polygonWind(polygon, order = "ccw") {
  if (polygon.length < 3) return null;
  
  const reversed = polygon.slice().reverse();
  const isClockwise = (0,_polygonArea__WEBPACK_IMPORTED_MODULE_0__.polygonArea)(polygon, true) > 0;
  
  if (order === "cw" || order === "clockwise") {
    return isClockwise ? polygon : reversed;
  }
  else {
    return isClockwise ? reversed : polygon;
  }
}

/***/ }),

/***/ "./node_modules/geometric/src/relationships/lineIntersectsLine.js":
/*!************************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/lineIntersectsLine.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineIntersectsLine": () => (/* binding */ lineIntersectsLine)
/* harmony export */ });
/* harmony import */ var _relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../relationships/pointOnLine */ "./node_modules/geometric/src/relationships/pointOnLine.js");


// Determines if lineA intersects lineB.
// Returns a boolean.
function lineIntersectsLine(lineA, lineB) {
  const [[a0x, a0y], [a1x, a1y]] = lineA,
        [[b0x, b0y], [b1x, b1y]] = lineB;
  
  // Test for shared points
  if (a0x === b0x && a0y === b0y) return true;
  if (a1x === b1x && a1y === b1y) return true;

  // Test for point on line
  if ((0,_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_0__.pointOnLine)(lineA[0], lineB) || (0,_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_0__.pointOnLine)(lineA[1], lineB)) return true;
  if ((0,_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_0__.pointOnLine)(lineB[0], lineA) || (0,_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_0__.pointOnLine)(lineB[1], lineA)) return true;

  const denom = ((b1y - b0y) * (a1x - a0x)) - ((b1x - b0x) * (a1y - a0y));
  
  if (denom === 0) return false;
  
  const deltaY = a0y - b0y,
        deltaX = a0x - b0x,
        numer0 = ((b1x - b0x) * deltaY) - ((b1y - b0y) * deltaX),
        numer1 = ((a1x - a0x) * deltaY) - ((a1y - a0y) * deltaX),
        quotA = numer0 / denom,
        quotB = numer1 / denom;

  return quotA > 0 && quotA < 1 && quotB > 0 && quotB < 1;
}



/***/ }),

/***/ "./node_modules/geometric/src/relationships/lineIntersectsPolygon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/lineIntersectsPolygon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lineIntersectsPolygon": () => (/* binding */ lineIntersectsPolygon)
/* harmony export */ });
/* harmony import */ var _utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/closePolygon */ "./node_modules/geometric/src/utils/closePolygon.js");
/* harmony import */ var _lineIntersectsLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineIntersectsLine */ "./node_modules/geometric/src/relationships/lineIntersectsLine.js");
/* harmony import */ var _relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../relationships/pointOnLine */ "./node_modules/geometric/src/relationships/pointOnLine.js");




// Determines whether a line intersects a polygon.
// Returns a boolean.
function lineIntersectsPolygon(line, polygon){
  let intersects = false;
  const closed = (0,_utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__.close)(polygon);

  for (let i = 0, l = closed.length - 1; i < l; i++){
    const v0 = closed[i],
          v1 = closed[i + 1];
    
    if ((0,_lineIntersectsLine__WEBPACK_IMPORTED_MODULE_1__.lineIntersectsLine)(line, [v0, v1]) || ((0,_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_2__.pointOnLine)(v0, line) && (0,_relationships_pointOnLine__WEBPACK_IMPORTED_MODULE_2__.pointOnLine)(v1, line))){
      intersects = true;
      break;
    }
  }

  return intersects;
}

/***/ }),

/***/ "./node_modules/geometric/src/relationships/pointInPolygon.js":
/*!********************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/pointInPolygon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointInPolygon": () => (/* binding */ pointInPolygon)
/* harmony export */ });
// Determines whether a point is inside of a polygon, represented as an array of vertices.
// From https://github.com/substack/point-in-polygon/blob/master/index.js,
// based on the ray-casting algorithm from https://web.archive.org/web/20180115151705/https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
// Wikipedia: https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
// Returns a boolean.
function pointInPolygon(point, polygon) {
  let x = point[0],
      y = point[1],
      inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], yi = polygon[i][1],
          xj = polygon[j][0], yj = polygon[j][1];
  
    if (((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) { inside = !inside; }
  }
  
  return inside;
}

/***/ }),

/***/ "./node_modules/geometric/src/relationships/pointOnLine.js":
/*!*****************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/pointOnLine.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointLeftofLine": () => (/* binding */ pointLeftofLine),
/* harmony export */   "pointOnLine": () => (/* binding */ pointOnLine),
/* harmony export */   "pointRightofLine": () => (/* binding */ pointRightofLine),
/* harmony export */   "pointWithLine": () => (/* binding */ pointWithLine)
/* harmony export */ });
/* harmony import */ var _lines_lineLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/lineLength */ "./node_modules/geometric/src/lines/lineLength.js");
/* harmony import */ var _utils_crossProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/crossProduct */ "./node_modules/geometric/src/utils/crossProduct.js");



// See https://math.stackexchange.com/questions/274712/calculate-on-which-side-of-a-straight-line-is-a-given-point-located
function topPointFirst(line){
  return line[1][1] > line[0][1] ? line : [line[1], line[0]];
}

function pointLeftofLine(point, line){
  const t = topPointFirst(line);
  return (0,_utils_crossProduct__WEBPACK_IMPORTED_MODULE_1__.cross)(point, t[1], t[0]) < 0;
}
function pointRightofLine(point, line){
  const t = topPointFirst(line);
  return (0,_utils_crossProduct__WEBPACK_IMPORTED_MODULE_1__.cross)(point, t[1], t[0]) > 0;
}
function pointOnLine(point, line, epsilon = 0){
  const l = (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_0__.lineLength)(line);
  return pointWithLine(point, line, epsilon) && (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_0__.lineLength)([line[0], point]) <= l && (0,_lines_lineLength__WEBPACK_IMPORTED_MODULE_0__.lineLength)([line[1], point]) <= l;
}
function pointWithLine(point, line, epsilon = 0){
  return Math.abs((0,_utils_crossProduct__WEBPACK_IMPORTED_MODULE_1__.cross)(point, line[0], line[1])) <= epsilon;
}

/***/ }),

/***/ "./node_modules/geometric/src/relationships/pointOnPolygon.js":
/*!********************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/pointOnPolygon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointOnPolygon": () => (/* binding */ pointOnPolygon)
/* harmony export */ });
/* harmony import */ var _utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/closePolygon */ "./node_modules/geometric/src/utils/closePolygon.js");
/* harmony import */ var _pointOnLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointOnLine */ "./node_modules/geometric/src/relationships/pointOnLine.js");



// Determines whether a point is located on one of the edges of a polygon.
// Returns a boolean.
function pointOnPolygon(point, polygon, epsilon = 0){
  let on = false;
  const closed = (0,_utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__.close)(polygon);
  
  for (let i = 0, l = closed.length - 1; i < l; i++){
    if ((0,_pointOnLine__WEBPACK_IMPORTED_MODULE_1__.pointOnLine)(point, [closed[i], closed[i + 1]], epsilon)){
      on = true;
      break;
    }
  }
  
  return on;
}

/***/ }),

/***/ "./node_modules/geometric/src/relationships/polygonInPolygon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/polygonInPolygon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonInPolygon": () => (/* binding */ polygonInPolygon)
/* harmony export */ });
/* harmony import */ var _utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/closePolygon */ "./node_modules/geometric/src/utils/closePolygon.js");
/* harmony import */ var _lineIntersectsPolygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineIntersectsPolygon */ "./node_modules/geometric/src/relationships/lineIntersectsPolygon.js");
/* harmony import */ var _pointInPolygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pointInPolygon */ "./node_modules/geometric/src/relationships/pointInPolygon.js");




// Determines whether a polygon is contained by another polygon.
// Polygons are represented as an array of vertices, each of which is an array of two numbers,
// where the first number represents its x-coordinate and the second its y-coordinate.
// Returns a boolean.
function polygonInPolygon(polygonA, polygonB){
  let inside = true;
  const closed = (0,_utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__.close)(polygonA);
  
  for (let i = 0, l = closed.length - 1; i < l; i++){
    const v0 = closed[i];
    
    // Points test  
    if (!(0,_pointInPolygon__WEBPACK_IMPORTED_MODULE_2__.pointInPolygon)(v0, polygonB)){
      inside = false;
      break;
    }
    
    // Lines test
    if ((0,_lineIntersectsPolygon__WEBPACK_IMPORTED_MODULE_1__.lineIntersectsPolygon)([v0, closed[i + 1]], polygonB)){
      inside = false;
      break;
    }
  }
  
  return inside;
}

/***/ }),

/***/ "./node_modules/geometric/src/relationships/polygonIntersectsPolygon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/geometric/src/relationships/polygonIntersectsPolygon.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonIntersectsPolygon": () => (/* binding */ polygonIntersectsPolygon)
/* harmony export */ });
/* harmony import */ var _utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/closePolygon */ "./node_modules/geometric/src/utils/closePolygon.js");
/* harmony import */ var _lineIntersectsPolygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineIntersectsPolygon */ "./node_modules/geometric/src/relationships/lineIntersectsPolygon.js");
/* harmony import */ var _pointOnPolygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pointOnPolygon */ "./node_modules/geometric/src/relationships/pointOnPolygon.js");




// Determines whether a polygon intersects but is not contained by another polygon.
// Polygons are represented as an array of vertices, each of which is an array of two numbers,
// where the first number represents its x-coordinate and the second its y-coordinate.
// Returns a boolean.
function polygonIntersectsPolygon(polygonA, polygonB){
  let intersects = false,
      onCount = 0;
  const closed = (0,_utils_closePolygon__WEBPACK_IMPORTED_MODULE_0__.close)(polygonA);

  for (let i = 0, l = closed.length - 1; i < l; i++){
    const v0 = closed[i],
          v1 = closed[i + 1];
    
    if ((0,_lineIntersectsPolygon__WEBPACK_IMPORTED_MODULE_1__.lineIntersectsPolygon)([v0, v1], polygonB)){
      intersects = true;
      break;
    }
    
    if ((0,_pointOnPolygon__WEBPACK_IMPORTED_MODULE_2__.pointOnPolygon)(v0, polygonB)){
      ++onCount;
    }
    
    if (onCount === 2){
      intersects = true;
      break;
    }
  }

  return intersects;
}

/***/ }),

/***/ "./node_modules/geometric/src/utils/closePolygon.js":
/*!**********************************************************!*\
  !*** ./node_modules/geometric/src/utils/closePolygon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "isClosed": () => (/* binding */ isClosed)
/* harmony export */ });
// Closes a polygon if it's not closed already. Does not modify input polygon.
function close(polygon){
  return isClosed(polygon) ? polygon : [...polygon, polygon[0]];
}

// Tests whether a polygon is closed
function isClosed(polygon){
  const first = polygon[0],
        last = polygon[polygon.length - 1];
  return first[0] === last[0] && first[1] === last[1];
}

/***/ }),

/***/ "./node_modules/geometric/src/utils/crossProduct.js":
/*!**********************************************************!*\
  !*** ./node_modules/geometric/src/utils/crossProduct.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cross": () => (/* binding */ cross)
/* harmony export */ });
// See https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript
// and https://math.stackexchange.com/questions/274712/calculate-on-which-side-of-a-straight-line-is-a-given-point-located
function cross (a, b, o){
  return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);


/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);



/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ "?d4c0");
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./src/render/p5/watercolorBlot/geometryPolygon.ts":
/*!*********************************************************!*\
  !*** ./src/render/p5/watercolorBlot/geometryPolygon.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDeformedPolygon": () => (/* binding */ createDeformedPolygon),
/* harmony export */   "deformExistingPolygon": () => (/* binding */ deformExistingPolygon)
/* harmony export */ });
/* harmony import */ var geometric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geometric */ "./node_modules/geometric/index.js");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! random */ "./node_modules/random/dist/random.module.js");


const deformExistingPolygon = (polygon, rounds, split, gaussianMultiplier) => {
    if (split) {
        for (let i = 0; i < rounds; i++) {
            polygon = deform(polygon, gaussianMultiplier);
        }
    }
    else {
        polygon = deformNoSplit(polygon, gaussianMultiplier);
    }
    return polygon;
};
const randomGaussian = (gaussianMultiplier) => {
    const rand = random__WEBPACK_IMPORTED_MODULE_1__["default"].normal();
    return rand() * gaussianMultiplier;
};
const deform = (polygon, multip) => {
    let start = polygon[0];
    let newPol = [];
    for (let i = polygon.length - 1; i >= 0; i--) {
        let end = polygon[i];
        let midpoint = geometric__WEBPACK_IMPORTED_MODULE_0__.lineMidpoint([start, end]);
        newPol.push([midpoint[0] + randomGaussian(multip), midpoint[1] + randomGaussian(multip)]);
        newPol.push(end);
        start = end;
    }
    return newPol;
};
//Note: modifies existing. 
const deformNoSplit = (polygon, multip) => {
    for (let i = polygon.length - 1; i >= 0; i--) {
        let point = polygon[i];
        polygon[i] = [point[0] + randomGaussian(multip), point[1] + randomGaussian(multip)];
    }
    return polygon;
};
const createDeformedPolygon = (sides, area, center, deformationRounds, multip) => {
    let polygon = geometric__WEBPACK_IMPORTED_MODULE_0__.polygonRegular(sides, area, center);
    for (let i = 0; i < deformationRounds; i++) {
        polygon = deform(polygon, multip);
    }
    return polygon;
};


/***/ }),

/***/ "?d4c0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/random/dist/random.module.js":
/*!***************************************************!*\
  !*** ./node_modules/random/dist/random.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RNG": () => (/* binding */ RNG),
/* harmony export */   "RNGFactory": () => (/* binding */ RNGFactory),
/* harmony export */   "Random": () => (/* binding */ Random),
/* harmony export */   "default": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var RNG = /*#__PURE__*/function () {
  function RNG() {}
  var _proto = RNG.prototype;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _proto._seed = function _seed(seed, _opts) {
    // TODO: add entropy and stuff
    if (seed === (seed || 0)) {
      return seed;
    } else {
      var strSeed = '' + seed;
      var s = 0;
      for (var k = 0; k < strSeed.length; ++k) {
        s ^= strSeed.charCodeAt(k) | 0;
      }
      return s;
    }
  };
  return RNG;
}();

var RNGFunction = /*#__PURE__*/function (_RNG) {
  _inheritsLoose(RNGFunction, _RNG);
  function RNGFunction(thunk, opts) {
    var _this;
    _this = _RNG.call(this) || this;
    _this._rng = void 0;
    _this.seed(thunk, opts);
    return _this;
  }
  var _proto = RNGFunction.prototype;
  _proto.next = function next() {
    return this._rng();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ;
  _proto.seed = function seed(thunk, _opts) {
    this._rng = thunk;
  };
  _proto.clone = function clone(_, opts) {
    return new RNGFunction(this._rng, opts);
  };
  _createClass(RNGFunction, [{
    key: "name",
    get: function get() {
      return 'function';
    }
  }]);
  return RNGFunction;
}(RNG);

/**
 * Construct an RNG with variable inputs. Used in calls to Random constructor
 * @param {...*} args - Distribution-specific arguments
 * @return RNG
 *
 * @example
 * new Random(RNGFactory(...args))
 */
var RNGFactory = (function () {
  var args = [].slice.call(arguments);
  var _args = args,
    _args$ = _args[0],
    arg0 = _args$ === void 0 ? 'default' : _args$;
  switch (typeof arg0) {
    case 'object':
      if (arg0 instanceof RNG) {
        return arg0;
      }
      break;
    case 'function':
      return new RNGFunction(arg0);
    case 'number':
    case 'string':
    default:
      return new RNGFunction(seedrandom__WEBPACK_IMPORTED_MODULE_0__.apply(void 0, args));
  }
  throw new Error("invalid RNG \"" + arg0 + "\"");
});

var uniform = (function (random, min, max) {
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  return function () {
    return random.next() * (max - min) + min;
  };
});

function numberValidator(num) {
  return new NumberValidator(num);
}
var NumberValidator = function NumberValidator(num) {
  var _this = this;
  this.n = void 0;
  this.isInt = function () {
    if (Number.isInteger(_this.n)) {
      return _this;
    }
    throw new Error("Expected number to be an integer, got " + _this.n);
  };
  this.isPositive = function () {
    if (_this.n > 0) {
      return _this;
    }
    throw new Error("Expected number to be positive, got " + _this.n);
  };
  this.lessThan = function (v) {
    if (_this.n < v) {
      return _this;
    }
    throw new Error("Expected number to be less than " + v + ", got " + _this.n);
  };
  this.greaterThanOrEqual = function (v) {
    if (_this.n >= v) {
      return _this;
    }
    throw new Error("Expected number to be greater than or equal to " + v + ", got " + _this.n);
  };
  this.greaterThan = function (v) {
    if (_this.n > v) {
      return _this;
    }
    throw new Error("Expected number to be greater than " + v + ", got " + _this.n);
  };
  this.n = num;
};

var uniformInt = (function (random, min, max) {
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  if (max === undefined) {
    max = min === undefined ? 1 : min;
    min = 0;
  }
  numberValidator(min).isInt();
  numberValidator(max).isInt();
  return function () {
    return Math.floor(random.next() * (max - min + 1) + min);
  };
});

var uniformBoolean = (function (random) {
  return function () {
    return random.next() >= 0.5;
  };
});

var normal = (function (random, mu, sigma) {
  if (mu === void 0) {
    mu = 0;
  }
  if (sigma === void 0) {
    sigma = 1;
  }
  return function () {
    var x, y, r;
    do {
      x = random.next() * 2 - 1;
      y = random.next() * 2 - 1;
      r = x * x + y * y;
    } while (!r || r > 1);
    return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
  };
});

var logNormal = (function (random, mu, sigma) {
  if (mu === void 0) {
    mu = 0;
  }
  if (sigma === void 0) {
    sigma = 1;
  }
  var normal = random.normal(mu, sigma);
  return function () {
    return Math.exp(normal());
  };
});

var bernoulli = (function (random, p) {
  if (p === void 0) {
    p = 0.5;
  }
  numberValidator(p).greaterThanOrEqual(0).lessThan(1);
  return function () {
    return Math.floor(random.next() + p);
  };
});

var binomial = (function (random, n, p) {
  if (n === void 0) {
    n = 1;
  }
  if (p === void 0) {
    p = 0.5;
  }
  numberValidator(n).isInt().isPositive();
  numberValidator(p).greaterThanOrEqual(0).lessThan(1);
  return function () {
    var i = 0;
    var x = 0;
    while (i++ < n) {
      if (random.next() < p) {
        x++;
      }
    }
    return x;
  };
});

var geometric = (function (random, p) {
  if (p === void 0) {
    p = 0.5;
  }
  numberValidator(p).greaterThan(0).lessThan(1);
  var invLogP = 1.0 / Math.log(1.0 - p);
  return function () {
    return Math.floor(1 + Math.log(random.next()) * invLogP);
  };
});

var logFactorialTable = [0.0, 0.0, 0.69314718055994529, 1.791759469228055, 3.1780538303479458, 4.7874917427820458, 6.5792512120101012, 8.5251613610654147, 10.604602902745251, 12.801827480081469];
var logFactorial = function logFactorial(k) {
  return logFactorialTable[k];
};
var logSqrt2PI = 0.91893853320467267;
var poisson = (function (random, lambda) {
  if (lambda === void 0) {
    lambda = 1;
  }
  numberValidator(lambda).isPositive();
  if (lambda < 10) {
    // inversion method
    var expMean = Math.exp(-lambda);
    return function () {
      var p = expMean;
      var x = 0;
      var u = random.next();
      while (u > p) {
        u = u - p;
        p = lambda * p / ++x;
      }
      return x;
    };
  } else {
    // generative method
    var smu = Math.sqrt(lambda);
    var b = 0.931 + 2.53 * smu;
    var a = -0.059 + 0.02483 * b;
    var invAlpha = 1.1239 + 1.1328 / (b - 3.4);
    var vR = 0.9277 - 3.6224 / (b - 2);
    return function () {
      while (true) {
        var u = void 0;
        var v = random.next();
        if (v <= 0.86 * vR) {
          u = v / vR - 0.43;
          return Math.floor((2 * a / (0.5 - Math.abs(u)) + b) * u + lambda + 0.445);
        }
        if (v >= vR) {
          u = random.next() - 0.5;
        } else {
          u = v / vR - 0.93;
          u = (u < 0 ? -0.5 : 0.5) - u;
          v = random.next() * vR;
        }
        var us = 0.5 - Math.abs(u);
        if (us < 0.013 && v > us) {
          continue;
        }
        var k = Math.floor((2 * a / us + b) * u + lambda + 0.445);
        v = v * invAlpha / (a / (us * us) + b);
        if (k >= 10) {
          var t = (k + 0.5) * Math.log(lambda / k) - lambda - logSqrt2PI + k - (1 / 12.0 - (1 / 360.0 - 1 / (1260.0 * k * k)) / (k * k)) / k;
          if (Math.log(v * smu) <= t) {
            return k;
          }
        } else if (k >= 0) {
          var _logFactorial;
          var f = (_logFactorial = logFactorial(k)) != null ? _logFactorial : 0;
          if (Math.log(v) <= k * Math.log(lambda) - lambda - f) {
            return k;
          }
        }
      }
    };
  }
});

var exponential = (function (random, lambda) {
  if (lambda === void 0) {
    lambda = 1;
  }
  numberValidator(lambda).isPositive();
  return function () {
    return -Math.log(1 - random.next()) / lambda;
  };
});

var irwinHall = (function (random, n) {
  if (n === void 0) {
    n = 1;
  }
  numberValidator(n).isInt().greaterThanOrEqual(0);
  return function () {
    var sum = 0;
    for (var i = 0; i < n; ++i) {
      sum += random.next();
    }
    return sum;
  };
});

var bates = (function (random, n) {
  if (n === void 0) {
    n = 1;
  }
  numberValidator(n).isInt().isPositive();
  var irwinHall = random.irwinHall(n);
  return function () {
    return irwinHall() / n;
  };
});

var pareto = (function (random, alpha) {
  if (alpha === void 0) {
    alpha = 1;
  }
  numberValidator(alpha).greaterThanOrEqual(0);
  var invAlpha = 1.0 / alpha;
  return function () {
    return 1.0 / Math.pow(1.0 - random.next(), invAlpha);
  };
});

var RNGMathRandom = /*#__PURE__*/function (_RNG) {
  _inheritsLoose(RNGMathRandom, _RNG);
  function RNGMathRandom() {
    return _RNG.apply(this, arguments) || this;
  }
  var _proto = RNGMathRandom.prototype;
  _proto.next = function next() {
    return Math.random();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ;
  _proto.seed = function seed(_seed, _opts) {
    // intentionally empty
  };
  _proto.clone = function clone() {
    return new RNGMathRandom();
  };
  _createClass(RNGMathRandom, [{
    key: "name",
    get: function get() {
      return 'default';
    }
  }]);
  return RNGMathRandom;
}(RNG);

/**
 * Seedable random number generator supporting many common distributions.
 *
 * Defaults to Math.random as its underlying pseudorandom number generator.
 *
 * @name Random
 * @class
 *
 * @param {RNG|function} [rng=Math.random] - Underlying pseudorandom number generator.
 */
var Random = /*#__PURE__*/function () {
  function Random(rng) {
    var _this = this;
    this._rng = void 0;
    this._patch = void 0;
    this._cache = {};
    this.next = function () {
      return _this._rng.next();
    };
    this["float"] = function (min, max) {
      return _this.uniform(min, max)();
    };
    this["int"] = function (min, max) {
      return _this.uniformInt(min, max)();
    };
    this.integer = function (min, max) {
      return _this.uniformInt(min, max)();
    };
    this.bool = function () {
      return _this.uniformBoolean()();
    };
    this["boolean"] = function () {
      return _this.uniformBoolean()();
    };
    this.uniform = function (min, max) {
      return _this._memoize('uniform', uniform, min, max);
    };
    this.uniformInt = function (min, max) {
      return _this._memoize('uniformInt', uniformInt, min, max);
    };
    this.uniformBoolean = function () {
      return _this._memoize('uniformBoolean', uniformBoolean);
    };
    this.normal = function (mu, sigma) {
      return normal(_this, mu, sigma);
    };
    this.logNormal = function (mu, sigma) {
      return logNormal(_this, mu, sigma);
    };
    this.bernoulli = function (p) {
      return bernoulli(_this, p);
    };
    this.binomial = function (n, p) {
      return binomial(_this, n, p);
    };
    this.geometric = function (p) {
      return geometric(_this, p);
    };
    this.poisson = function (lambda) {
      return poisson(_this, lambda);
    };
    this.exponential = function (lambda) {
      return exponential(_this, lambda);
    };
    this.irwinHall = function (n) {
      return irwinHall(_this, n);
    };
    this.bates = function (n) {
      return bates(_this, n);
    };
    this.pareto = function (alpha) {
      return pareto(_this, alpha);
    };
    if (rng && rng instanceof RNG) {
      this.use(rng);
    } else {
      this.use(new RNGMathRandom());
    }
    this._cache = {};
  }
  /**
   * @member {RNG} Underlying pseudo-random number generator
   */
  var _proto = Random.prototype;
  /**
   * Creates a new `Random` instance, optionally specifying parameters to
   * set a new seed.
   *
   * @see RNG.clone
   *
   * @param {string} [seed] - Optional seed for new RNG.
   * @param {object} [opts] - Optional config for new RNG options.
   * @return {Random}
   */
  _proto.clone = function clone() {
    var args = [].slice.call(arguments);
    if (args.length) {
      return new Random(RNGFactory.apply(void 0, args));
    } else {
      return new Random(this.rng.clone());
    }
  }
  /**
   * Sets the underlying pseudorandom number generator used via
   * either an instance of `seedrandom`, a custom instance of RNG
   * (for PRNG plugins), or a string specifying the PRNG to use
   * along with an optional `seed` and `opts` to initialize the
   * RNG.
   *
   * @example
   * import random from 'random'
   *
   * random.use('example_seedrandom_string')
   * // or
   * random.use(seedrandom('kittens'))
   * // or
   * random.use(Math.random)
   *
   * @param {...*} args
   */;
  _proto.use = function use() {
    this._rng = RNGFactory.apply(void 0, [].slice.call(arguments));
  }
  /**
   * Patches `Math.random` with this Random instance's PRNG.
   */;
  _proto.patch = function patch() {
    if (this._patch) {
      throw new Error('Math.random already patched');
    }
    this._patch = Math.random;
    Math.random = this.uniform();
  }
  /**
   * Restores a previously patched `Math.random` to its original value.
   */;
  _proto.unpatch = function unpatch() {
    if (this._patch) {
      Math.random = this._patch;
      delete this._patch;
    }
  }
  // --------------------------------------------------------------------------
  // Uniform utility functions
  // --------------------------------------------------------------------------
  /**
   * Convenience wrapper around `this.rng.next()`
   *
   * Returns a floating point number in [0, 1).
   *
   * @return {number}
   */;
  /**
   * Returns an item chosen uniformly at trandom from the given array.
   *
   * Convence wrapper around `random.uniformInt()`
   *
   * @param {Array<T>} [array] - Lower bound (integer, inclusive)
   * @return {T | undefined}
   */
  _proto.choice = function choice(array) {
    if (!Array.isArray(array)) {
      throw new Error("Random.choice expected input to be an array, got " + typeof array);
    }
    var length = array == null ? void 0 : array.length;
    if (length > 0) {
      var index = this.uniformInt(0, length - 1)();
      return array[index];
    } else {
      return undefined;
    }
  }
  // --------------------------------------------------------------------------
  // Uniform distributions
  // --------------------------------------------------------------------------
  /**
   * Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).
   *
   * @param {number} [min=0] - Lower bound (float, inclusive)
   * @param {number} [max=1] - Upper bound (float, exclusive)
   * @return {function}
   */;
  // --------------------------------------------------------------------------
  // Internal
  // --------------------------------------------------------------------------
  /**
   * Memoizes distributions to ensure they're only created when necessary.
   *
   * Returns a thunk which that returns independent, identically distributed
   * samples from the specified distribution.
   *
   * @private
   *
   * @param {string} label - Name of distribution
   * @param {function} getter - Function which generates a new distribution
   * @param {...*} args - Distribution-specific arguments
   *
   * @return {function}
   */
  _proto._memoize = function _memoize(label, getter) {
    var args = [].slice.call(arguments, 2);
    var key = "" + args.join(';');
    var value = this._cache[label];
    if (value === undefined || value.key !== key) {
      value = {
        key: key,
        distribution: getter.apply(void 0, [this].concat(args))
      };
      this._cache[label] = value;
    }
    return value.distribution;
  };
  _createClass(Random, [{
    key: "rng",
    get: function get() {
      return this._rng;
    }
  }]);
  return Random;
}();
// defaults to Math.random as its RNG
var random = new Random();


//# sourceMappingURL=random.module.js.map


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************************!*\
  !*** ./src/render/p5/watercolorWorker/worker.ts ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watercolorBlot_geometryPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../watercolorBlot/geometryPolygon */ "./src/render/p5/watercolorBlot/geometryPolygon.ts");

/*const DEFORMATION_ROUNDS = 3;
const GAUSSIAN_MULTIPLIER = 3;
const GAUSSIAN_BEGINNER_MULTIPLIER = 20;*/
const QUEUE_ADDITION = 8;
const SIDES = 5;
const AREA = 90000;
const CENTER = [0, 0];
const DEFORMATION_ROUNDS = 3;
const GAUSSIAN_MULTIPLIER = 2;
const GAUSSIAN_BEGINNER_MULTIPLIER = 10;
const config = () => ({
    sides: 9,
    radius: 100,
    xOffset: 0,
    yOffset: 0
});
const createPolygon = () => {
    let { sides, radius, xOffset, yOffset } = config();
    return (0,_watercolorBlot_geometryPolygon__WEBPACK_IMPORTED_MODULE_0__.createDeformedPolygon)(SIDES, AREA, CENTER, DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER);
    //return createDeformedPolygon(sides, radius, [xOffset, yOffset], DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER)
};
let index = 0;
let polygon;
console.log("worker");
self.onmessage = (e) => {
    if (e.data === "polygon") {
        index = index + 1;
        console.log("working for polygon " + index);
        let polygons = [];
        for (let i = 0; i < QUEUE_ADDITION; i++) {
            index = index + 1;
            if (!polygon) {
                polygon = createPolygon();
            }
            else {
                polygon = (0,_watercolorBlot_geometryPolygon__WEBPACK_IMPORTED_MODULE_0__.deformExistingPolygon)(polygon, DEFORMATION_ROUNDS, index % 40 === 0, GAUSSIAN_MULTIPLIER);
            }
            polygons.push(polygon);
        }
        self.postMessage(polygons);
    }
    else {
        console.log("just receiving messages");
    }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBZ0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUV0QixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTVDLElBQUksUUFBUSxHQUFpQixFQUFFLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNWLE9BQU8sR0FBRyxhQUFhLEVBQUUsQ0FBQzthQUM3QjtpQkFDSTtnQkFFRCxPQUFPLEdBQUcsc0ZBQXFCLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLG1CQUFtQixDQUFDO2FBQ3RHO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDOUI7U0FFSTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUM7S0FDekM7QUFFTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL2luZGV4LmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL2FuZ2xlcy9hbmdsZVJlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvYW5nbGVzL2FuZ2xlVG9EZWdyZWVzLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL2FuZ2xlcy9hbmdsZVRvUmFkaWFucy5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9saW5lcy9saW5lQW5nbGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvbGluZXMvbGluZUludGVycG9sYXRlLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL2xpbmVzL2xpbmVMZW5ndGguanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvbGluZXMvbGluZU1pZHBvaW50LmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL2xpbmVzL2xpbmVSb3RhdGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvbGluZXMvbGluZVRyYW5zbGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9wb2ludHMvcG9pbnRSb3RhdGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvcG9pbnRzL3BvaW50VHJhbnNsYXRlLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25BcmVhLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25Cb3VuZHMuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvcG9seWdvbnMvcG9seWdvbkNlbnRyb2lkLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25IdWxsLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25JbnRlcnBvbGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9wb2x5Z29ucy9wb2x5Z29uTGVuZ3RoLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25NZWFuLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25SYW5kb20uanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvcG9seWdvbnMvcG9seWdvblJlZmxlY3RYLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25SZWZsZWN0WS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9wb2x5Z29ucy9wb2x5Z29uUmVndWxhci5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9wb2x5Z29ucy9wb2x5Z29uUm90YXRlLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25TY2FsZS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9wb2x5Z29ucy9wb2x5Z29uU2NhbGVBcmVhLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25TY2FsZVguanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvcG9seWdvbnMvcG9seWdvblNjYWxlWS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9wb2x5Z29ucy9wb2x5Z29uVHJhbnNsYXRlLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3BvbHlnb25zL3BvbHlnb25XaW5kLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3JlbGF0aW9uc2hpcHMvbGluZUludGVyc2VjdHNMaW5lLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3JlbGF0aW9uc2hpcHMvbGluZUludGVyc2VjdHNQb2x5Z29uLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3JlbGF0aW9uc2hpcHMvcG9pbnRJblBvbHlnb24uanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvcmVsYXRpb25zaGlwcy9wb2ludE9uTGluZS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9yZWxhdGlvbnNoaXBzL3BvaW50T25Qb2x5Z29uLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9nZW9tZXRyaWMvc3JjL3JlbGF0aW9uc2hpcHMvcG9seWdvbkluUG9seWdvbi5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy9yZWxhdGlvbnNoaXBzL3BvbHlnb25JbnRlcnNlY3RzUG9seWdvbi5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvZ2VvbWV0cmljL3NyYy91dGlscy9jbG9zZVBvbHlnb24uanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL2dlb21ldHJpYy9zcmMvdXRpbHMvY3Jvc3NQcm9kdWN0LmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi9hbGVhLmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi90eWNoZWkuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yNDA5Ni5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yc2hpZnQ3LmpzIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vc2VlZHJhbmRvbS5qcyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvLi9zcmMvcmVuZGVyL3A1L3dhdGVyY29sb3JCbG90L2dlb21ldHJ5UG9seWdvbi50cyIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3MvaWdub3JlZHxDOlxcVXNlcnNcXEFpbm9IYWlrYWxhXFxteUNvbG9yZnVsRGVtb3NcXG5vZGVfbW9kdWxlc1xcc2VlZHJhbmRvbXxjcnlwdG8iLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L3JhbmRvbS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly9saXR0bGVfZGVtb3Mvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2xpdHRsZV9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl0dGxlX2RlbW9zLy4vc3JjL3JlbmRlci9wNS93YXRlcmNvbG9yV29ya2VyL3dvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi9zcmMvbGluZXMvbGluZUFuZ2xlXCI7XG5leHBvcnQgeyBsaW5lSW50ZXJwb2xhdGUgfSBmcm9tIFwiLi9zcmMvbGluZXMvbGluZUludGVycG9sYXRlXCI7XG5leHBvcnQgeyBsaW5lTGVuZ3RoIH0gZnJvbSBcIi4vc3JjL2xpbmVzL2xpbmVMZW5ndGhcIjtcbmV4cG9ydCB7IGxpbmVNaWRwb2ludCB9IGZyb20gXCIuL3NyYy9saW5lcy9saW5lTWlkcG9pbnRcIjtcbmV4cG9ydCB7IGxpbmVSb3RhdGUgfSBmcm9tIFwiLi9zcmMvbGluZXMvbGluZVJvdGF0ZVwiO1xuZXhwb3J0IHsgbGluZVRyYW5zbGF0ZSB9IGZyb20gXCIuL3NyYy9saW5lcy9saW5lVHJhbnNsYXRlXCI7XG5cbmV4cG9ydCB7IHBvaW50Um90YXRlIH0gZnJvbSBcIi4vc3JjL3BvaW50cy9wb2ludFJvdGF0ZVwiO1xuZXhwb3J0IHsgcG9pbnRUcmFuc2xhdGUgfSBmcm9tIFwiLi9zcmMvcG9pbnRzL3BvaW50VHJhbnNsYXRlXCI7XG5cbmV4cG9ydCB7IHBvbHlnb25BcmVhIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25BcmVhXCI7XG5leHBvcnQgeyBwb2x5Z29uQm91bmRzIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25Cb3VuZHNcIjtcbmV4cG9ydCB7IHBvbHlnb25DZW50cm9pZCB9IGZyb20gXCIuL3NyYy9wb2x5Z29ucy9wb2x5Z29uQ2VudHJvaWRcIjtcbmV4cG9ydCB7IHBvbHlnb25IdWxsIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25IdWxsXCI7XG5leHBvcnQgeyBwb2x5Z29uSW50ZXJwb2xhdGUgfSBmcm9tIFwiLi9zcmMvcG9seWdvbnMvcG9seWdvbkludGVycG9sYXRlXCI7XG5leHBvcnQgeyBwb2x5Z29uTGVuZ3RoIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25MZW5ndGhcIjtcbmV4cG9ydCB7IHBvbHlnb25NZWFuIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25NZWFuXCI7XG5leHBvcnQgeyBwb2x5Z29uUmFuZG9tIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25SYW5kb21cIjtcbmV4cG9ydCB7IHBvbHlnb25SZWZsZWN0WCB9IGZyb20gXCIuL3NyYy9wb2x5Z29ucy9wb2x5Z29uUmVmbGVjdFhcIjtcbmV4cG9ydCB7IHBvbHlnb25SZWZsZWN0WSB9IGZyb20gXCIuL3NyYy9wb2x5Z29ucy9wb2x5Z29uUmVmbGVjdFlcIjtcbmV4cG9ydCB7IHBvbHlnb25SZWd1bGFyIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25SZWd1bGFyXCI7XG5leHBvcnQgeyBwb2x5Z29uUm90YXRlIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25Sb3RhdGVcIjtcbmV4cG9ydCB7IHBvbHlnb25TY2FsZSB9IGZyb20gXCIuL3NyYy9wb2x5Z29ucy9wb2x5Z29uU2NhbGVcIjtcbmV4cG9ydCB7IHBvbHlnb25TY2FsZUFyZWEgfSBmcm9tIFwiLi9zcmMvcG9seWdvbnMvcG9seWdvblNjYWxlQXJlYVwiO1xuZXhwb3J0IHsgcG9seWdvblNjYWxlWCB9IGZyb20gXCIuL3NyYy9wb2x5Z29ucy9wb2x5Z29uU2NhbGVYXCI7XG5leHBvcnQgeyBwb2x5Z29uU2NhbGVZIH0gZnJvbSBcIi4vc3JjL3BvbHlnb25zL3BvbHlnb25TY2FsZVlcIjtcbmV4cG9ydCB7IHBvbHlnb25UcmFuc2xhdGUgfSBmcm9tIFwiLi9zcmMvcG9seWdvbnMvcG9seWdvblRyYW5zbGF0ZVwiO1xuZXhwb3J0IHsgcG9seWdvbldpbmQgfSBmcm9tIFwiLi9zcmMvcG9seWdvbnMvcG9seWdvbldpbmRcIjtcblxuZXhwb3J0IHsgbGluZUludGVyc2VjdHNMaW5lIH0gZnJvbSBcIi4vc3JjL3JlbGF0aW9uc2hpcHMvbGluZUludGVyc2VjdHNMaW5lXCI7XG5leHBvcnQgeyBsaW5lSW50ZXJzZWN0c1BvbHlnb24gfSBmcm9tIFwiLi9zcmMvcmVsYXRpb25zaGlwcy9saW5lSW50ZXJzZWN0c1BvbHlnb25cIjtcbmV4cG9ydCB7IHBvaW50SW5Qb2x5Z29uIH0gZnJvbSBcIi4vc3JjL3JlbGF0aW9uc2hpcHMvcG9pbnRJblBvbHlnb25cIjtcbmV4cG9ydCB7IHBvaW50T25Qb2x5Z29uIH0gZnJvbSBcIi4vc3JjL3JlbGF0aW9uc2hpcHMvcG9pbnRPblBvbHlnb25cIjtcbmV4cG9ydCB7IHBvaW50TGVmdG9mTGluZSwgcG9pbnRSaWdodG9mTGluZSwgcG9pbnRPbkxpbmUsIHBvaW50V2l0aExpbmUgfSBmcm9tIFwiLi9zcmMvcmVsYXRpb25zaGlwcy9wb2ludE9uTGluZVwiO1xuZXhwb3J0IHsgcG9seWdvbkluUG9seWdvbiB9IGZyb20gXCIuL3NyYy9yZWxhdGlvbnNoaXBzL3BvbHlnb25JblBvbHlnb25cIjtcbmV4cG9ydCB7IHBvbHlnb25JbnRlcnNlY3RzUG9seWdvbiB9IGZyb20gXCIuL3NyYy9yZWxhdGlvbnNoaXBzL3BvbHlnb25JbnRlcnNlY3RzUG9seWdvblwiO1xuXG5leHBvcnQgeyBhbmdsZVJlZmxlY3QgfSBmcm9tIFwiLi9zcmMvYW5nbGVzL2FuZ2xlUmVmbGVjdFwiO1xuZXhwb3J0IHsgYW5nbGVUb0RlZ3JlZXMgfSBmcm9tIFwiLi9zcmMvYW5nbGVzL2FuZ2xlVG9EZWdyZWVzXCI7XG5leHBvcnQgeyBhbmdsZVRvUmFkaWFucyB9IGZyb20gXCIuL3NyYy9hbmdsZXMvYW5nbGVUb1JhZGlhbnNcIjsiLCIvLyBSZXR1cm5zIHRoZSBhbmdsZSBvZiByZWZsZWN0aW9uIGdpdmVuIGFuIGFuZ2xlIG9mIGluY2lkZW5jZSBhbmQgYSBzdXJmYWNlIGFuZ2xlLlxuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlUmVmbGVjdChpbmNpZGVuY2VBbmdsZSwgc3VyZmFjZUFuZ2xlKXtcbiAgY29uc3QgYSA9IHN1cmZhY2VBbmdsZSAqIDIgLSBpbmNpZGVuY2VBbmdsZTtcbiAgcmV0dXJuIGEgPj0gMzYwID8gYSAtIDM2MCA6IGEgPCAwID8gYSArIDM2MCA6IGE7XG59IiwiLy8gQ29udmVydHMgcmFkaWFucyB0byBkZWdyZWVzLlxuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlVG9EZWdyZWVzKGFuZ2xlKXtcbiAgcmV0dXJuIGFuZ2xlICogMTgwIC8gTWF0aC5QSTtcbn0iLCIvLyBDb252ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnMuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGVUb1JhZGlhbnMoYW5nbGUpe1xuICByZXR1cm4gYW5nbGUgLyAxODAgKiBNYXRoLlBJO1xufSIsImltcG9ydCB7IGFuZ2xlVG9EZWdyZWVzIH0gZnJvbSBcIi4uL2FuZ2xlcy9hbmdsZVRvRGVncmVlc1wiO1xuXG4vLyBDYWxjdWxhdGVzIHRoZSBhbmdsZSBvZiBhIGxpbmUsIGluIGRlZ3JlZXMuXG5leHBvcnQgZnVuY3Rpb24gbGluZUFuZ2xlKGxpbmUpe1xuICByZXR1cm4gYW5nbGVUb0RlZ3JlZXMoTWF0aC5hdGFuMihsaW5lWzFdWzFdIC0gbGluZVswXVsxXSwgbGluZVsxXVswXSAtIGxpbmVbMF1bMF0pKTtcbn0iLCJpbXBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi9saW5lQW5nbGVcIjtcbmltcG9ydCB7IGxpbmVMZW5ndGggfSBmcm9tIFwiLi9saW5lTGVuZ3RoXCI7XG5pbXBvcnQgeyBwb2ludFRyYW5zbGF0ZSB9IGZyb20gXCIuLi9wb2ludHMvcG9pbnRUcmFuc2xhdGVcIjtcblxuLy8gUmV0dXJucyBhbiBpbnRlcnBvbGF0b3IgZnVuY3Rpb24gZ2l2ZW4gYSBsaW5lIFthLCBiXS5cbi8vIFRoZSByZXR1cm5lZCBpbnRlcnBvbGF0b3IgZnVuY3Rpb24gdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQgdCwgd2hlcmUgdCBpcyBhIG51bWJlciByYW5naW5nIGZyb20gMCB0byAxO1xuLy8gYSB2YWx1ZSBvZiAwIHJldHVybnMgYSwgd2hpbGUgYSB2YWx1ZSBvZiAxIHJldHVybnMgYi5cbi8vIEludGVybWVkaWF0ZSB2YWx1ZXMgaW50ZXJwb2xhdGUgZnJvbSBzdGFydCB0byBlbmQgYWxvbmcgdGhlIGxpbmUgc2VnbWVudC5cbi8vIEJ5IGRlZmF1bHQsIHRoZSByZXR1cm5lZCBpbnRlcnBvbGF0b3Igd2lsbCBvdXRwdXQgcG9pbnRzIG91dHNpZGUgb2YgdGhlIGxpbmUgc2VnbWVudCBpZiB0IGlzIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiAxLlxuLy8gWW91IGNhbiBwYXNzIGFuIG9wdGlvbmFsIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIHRoZSByZXR1cm5lZCBwb2ludCB0byBpbnNpZGUgb2YgdGhlIGxpbmUgc2VnbWVudCxcbi8vIGV2ZW4gaWYgdCBpcyBncmVhdGVyIHRoYW4gMSBvciBsZXNzIHRoZW4gMC5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lSW50ZXJwb2xhdGUobGluZSwgY2xhbXAgPSBmYWxzZSl7XG4gIGlmIChjbGFtcCkge1xuICAgIHJldHVybiB0ID0+IHQgPD0gMCA/IGxpbmVbMF0gOiB0ID49IDEgPyBsaW5lWzFdIDogcG9pbnRUcmFuc2xhdGUobGluZVswXSwgbGluZUFuZ2xlKGxpbmUpLCBsaW5lTGVuZ3RoKGxpbmUpICogdCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHQgPT4gdCA9PT0gMCA/IGxpbmVbMF0gOiB0ID09PSAxID8gbGluZVsxXSA6IHBvaW50VHJhbnNsYXRlKGxpbmVbMF0sIGxpbmVBbmdsZShsaW5lKSwgbGluZUxlbmd0aChsaW5lKSAqIHQpOyAgXG4gIH1cbn0iLCIvLyBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBlbmRwb2ludHMgb2YgYSBsaW5lIHNlZ21lbnQuXG5leHBvcnQgZnVuY3Rpb24gbGluZUxlbmd0aChsaW5lKXtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhsaW5lWzFdWzBdIC0gbGluZVswXVswXSwgMikgKyBNYXRoLnBvdyhsaW5lWzFdWzFdIC0gbGluZVswXVsxXSwgMikpO1xufSIsIi8vIENhbGN1bGF0ZXMgdGhlIG1pZHBvaW50IG9mIGEgbGluZSBzZWdtZW50LlxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVNaWRwb2ludChsaW5lKXtcbiAgcmV0dXJuIFsobGluZVswXVswXSArIGxpbmVbMV1bMF0pIC8gMiwgKGxpbmVbMF1bMV0gKyBsaW5lWzFdWzFdKSAvIDJdO1xufSIsImltcG9ydCB7IGxpbmVNaWRwb2ludCB9IGZyb20gXCIuL2xpbmVNaWRwb2ludFwiO1xuaW1wb3J0IHsgcG9pbnRSb3RhdGUgfSBmcm9tIFwiLi4vcG9pbnRzL3BvaW50Um90YXRlXCI7XG5cbi8vIFJldHVybnMgdGhlIGNvb3JkaW5hdGVzIHJlc3VsdGluZyBmcm9tIHJvdGF0aW5nIGEgbGluZSBhYm91dCBhbiBvcmlnaW4gYnkgYW4gYW5nbGUgaW4gZGVncmVlcy5cbi8vIElmIG9yaWdpbiBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgb3JpZ2luIGRlZmF1bHRzIHRvIHRoZSBtaWRwb2ludCBvZiB0aGUgbGluZS5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lUm90YXRlKGxpbmUsIGFuZ2xlLCBvcmlnaW4pe1xuICByZXR1cm4gbGluZS5tYXAocG9pbnQgPT4gcG9pbnRSb3RhdGUocG9pbnQsIGFuZ2xlLCBvcmlnaW4gfHwgbGluZU1pZHBvaW50KGxpbmUpKSk7XG59IiwiaW1wb3J0IHsgcG9pbnRUcmFuc2xhdGUgfSBmcm9tIFwiLi4vcG9pbnRzL3BvaW50VHJhbnNsYXRlXCI7XG5cbi8vIFJldHVybnMgdGhlIGNvb3JkaW5hdGVzIHJlc3VsdGluZyBmcm9tIHRyYW5zbGF0aW5nIGEgbGluZSBieSBhbiBhbmdsZSBpbiBkZWdyZWVzIGFuZCBhIGRpc3RhbmNlLlxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVUcmFuc2xhdGUobGluZSwgYW5nbGUsIGRpc3RhbmNlKXtcbiAgcmV0dXJuIGxpbmUubWFwKHBvaW50ID0+IHBvaW50VHJhbnNsYXRlKHBvaW50LCBhbmdsZSwgZGlzdGFuY2UpKTtcbn0iLCJpbXBvcnQgeyBhbmdsZVRvUmFkaWFucyB9IGZyb20gXCIuLi9hbmdsZXMvYW5nbGVUb1JhZGlhbnNcIjtcblxuLy8gUm90YXRlcyBhIHBvaW50IGJ5IGFuIGFuZ2xlIGluIGRlZ3JlZXMgYXJvdW5kIGFuIG9yaWdpbi5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludFJvdGF0ZShwb2ludCwgYW5nbGUsIG9yaWdpbil7XG4gIGNvbnN0IHIgPSBhbmdsZVRvUmFkaWFucyhhbmdsZSB8fCAwKTtcblxuICBpZiAoIW9yaWdpbiB8fCAob3JpZ2luWzBdID09PSAwICYmIG9yaWdpblsxXSA9PT0gMCkpe1xuICAgIHJldHVybiByb3RhdGUocG9pbnQsIHIpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xOTY0OTA1L3JvdGF0aW9uLWFyb3VuZC1ub24temVyby1wb2ludFxuICAgIGNvbnN0IHAwID0gcG9pbnQubWFwKChjLCBpKSA9PiBjIC0gb3JpZ2luW2ldKTtcbiAgICBjb25zdCByb3RhdGVkID0gcm90YXRlKHAwLCByKTtcbiAgICByZXR1cm4gcm90YXRlZC5tYXAoKGMsIGkpID0+IGMgKyBvcmlnaW5baV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZShwb2ludCwgYW5nbGUpe1xuICAvLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhcnRlc2lhbl9jb29yZGluYXRlX3N5c3RlbSNSb3RhdGlvblxuICByZXR1cm4gWyhwb2ludFswXSAqIE1hdGguY29zKGFuZ2xlKSkgLSBwb2ludFsxXSAqIE1hdGguc2luKGFuZ2xlKSwgKHBvaW50WzBdICogTWF0aC5zaW4oYW5nbGUpKSArIHBvaW50WzFdICogTWF0aC5jb3MoYW5nbGUpXTtcbn0iLCJpbXBvcnQgeyBhbmdsZVRvUmFkaWFucyB9IGZyb20gXCIuLi9hbmdsZXMvYW5nbGVUb1JhZGlhbnNcIjtcblxuLy8gVHJhbnNsYXRlcyBhIHBvaW50IGJ5IGFuIGFuZ2xlIGluIGRlZ3JlZXMgYW5kIGRpc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRUcmFuc2xhdGUocG9pbnQsIGFuZ2xlID0gMCwgZGlzdGFuY2UgPSAwKXtcbiAgY29uc3QgciA9IGFuZ2xlVG9SYWRpYW5zKGFuZ2xlKTtcbiAgcmV0dXJuIFtwb2ludFswXSArIGRpc3RhbmNlICogTWF0aC5jb3MociksIHBvaW50WzFdICsgZGlzdGFuY2UgKiBNYXRoLnNpbihyKV07XG59IiwiLy8gQ2FsY3VsYXRlcyB0aGUgYXJlYSBvZiBhIHBvbHlnb24uXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbkFyZWEodmVydGljZXMsIHNpZ25lZCA9IGZhbHNlKXtcbiAgbGV0IGEgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdmVydGljZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgdjAgPSB2ZXJ0aWNlc1tpXSxcbiAgICAgICAgICB2MSA9IHZlcnRpY2VzW2kgPT09IGwgLSAxID8gMCA6IGkgKyAxXTtcblxuICAgIGEgKz0gdjBbMF0gKiB2MVsxXTtcbiAgICBhIC09IHYxWzBdICogdjBbMV07XG4gIH1cblxuICByZXR1cm4gc2lnbmVkID8gYSAvIDIgOiBNYXRoLmFicyhhIC8gMik7XG59IiwiLy8gQ2FsY3VsYXRlcyB0aGUgYm91bmRzIG9mIGEgcG9seWdvbi5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uQm91bmRzKHBvbHlnb24pe1xuICBpZiAocG9seWdvbi5sZW5ndGggPCAzKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCB4TWluID0gSW5maW5pdHksXG4gICAgICB4TWF4ID0gLUluZmluaXR5LFxuICAgICAgeU1pbiA9IEluZmluaXR5LFxuICAgICAgeU1heCA9IC1JbmZpbml0eSxcbiAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG4gICAgY29uc3QgcCA9IHBvbHlnb25baV0sXG4gICAgICAgICAgeCA9IHBbMF0sXG4gICAgICAgICAgeSA9IHBbMV07XG5cbiAgICBpZiAoeCAhPSBudWxsICYmIGlzRmluaXRlKHgpICYmIHkgIT0gbnVsbCAmJiBpc0Zpbml0ZSh5KSl7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBpZiAoeCA8IHhNaW4pIHhNaW4gPSB4O1xuICAgICAgaWYgKHggPiB4TWF4KSB4TWF4ID0geDtcbiAgICAgIGlmICh5IDwgeU1pbikgeU1pbiA9IHk7XG4gICAgICBpZiAoeSA+IHlNYXgpIHlNYXggPSB5OyAgICAgIFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZCA/IFtbeE1pbiwgeU1pbl0sIFt4TWF4LCB5TWF4XV0gOiBudWxsO1xufSIsIi8vIENhbGN1bGF0ZXMgdGhlIHdlaWdodGVkIGNlbnRyb2lkIGEgcG9seWdvbi5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uQ2VudHJvaWQodmVydGljZXMpe1xuICBsZXQgYSA9IDAsIHggPSAwLCB5ID0gMCwgbCA9IHZlcnRpY2VzLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHMgPSBpID09PSBsIC0gMSA/IDAgOiBpICsgMSxcbiAgICAgICAgICB2MCA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgIHYxID0gdmVydGljZXNbc10sXG4gICAgICAgICAgZiA9ICh2MFswXSAqIHYxWzFdKSAtICh2MVswXSAqIHYwWzFdKTtcblxuICAgIGEgKz0gZjtcbiAgICB4ICs9ICh2MFswXSArIHYxWzBdKSAqIGY7XG4gICAgeSArPSAodjBbMV0gKyB2MVsxXSkgKiBmO1xuICB9XG5cbiAgY29uc3QgZCA9IGEgKiAzO1xuXG4gIHJldHVybiBbeCAvIGQsIHkgLyBkXTtcbn0iLCJpbXBvcnQgeyBjcm9zcyB9IGZyb20gXCIuLi91dGlscy9jcm9zc1Byb2R1Y3RcIjtcblxuLy8gQ2FjbHVsYXRlcyB0aGUgY29udmV4IGh1bGwgb2YgYSBzZXQgb2YgcG9pbnRzLlxuLy8gU2VlIGh0dHBzOi8vZW4ud2lraWJvb2tzLm9yZy93aWtpL0FsZ29yaXRobV9JbXBsZW1lbnRhdGlvbi9HZW9tZXRyeS9Db252ZXhfaHVsbC9Nb25vdG9uZV9jaGFpbiNKYXZhU2NyaXB0XG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbkh1bGwocG9pbnRzKXtcbiAgaWYgKHBvaW50cy5sZW5ndGggPCAzKSB7IHJldHVybiBudWxsOyB9XG5cbiAgY29uc3QgcG9pbnRzQ29weSA9IHBvaW50cy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGFbMF0gPT09IGJbMF0gPyBhWzFdIC0gYlsxXSA6IGFbMF0gLSBiWzBdKTtcblxuICBsZXQgbG93ZXIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHNDb3B5Lmxlbmd0aDsgaSsrKSB7XG4gICAgd2hpbGUgKGxvd2VyLmxlbmd0aCA+PSAyICYmIGNyb3NzKGxvd2VyW2xvd2VyLmxlbmd0aCAtIDJdLCBsb3dlcltsb3dlci5sZW5ndGggLSAxXSwgcG9pbnRzQ29weVtpXSkgPD0gMCkge1xuICAgICAgIGxvd2VyLnBvcCgpO1xuICAgIH1cbiAgICBsb3dlci5wdXNoKHBvaW50c0NvcHlbaV0pO1xuICB9XG5cbiAgbGV0IHVwcGVyID0gW107XG4gIGZvciAobGV0IGkgPSBwb2ludHNDb3B5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgd2hpbGUgKHVwcGVyLmxlbmd0aCA+PSAyICYmIGNyb3NzKHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLCB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgcG9pbnRzQ29weVtpXSkgPD0gMCkge1xuICAgICAgIHVwcGVyLnBvcCgpO1xuICAgIH1cbiAgICB1cHBlci5wdXNoKHBvaW50c0NvcHlbaV0pO1xuICB9XG5cbiAgdXBwZXIucG9wKCk7XG4gIGxvd2VyLnBvcCgpO1xuXG4gIHJldHVybiBsb3dlci5jb25jYXQodXBwZXIpO1xufSIsImltcG9ydCB7IGNsb3NlIH0gZnJvbSBcIi4uL3V0aWxzL2Nsb3NlUG9seWdvblwiO1xuaW1wb3J0IHsgbGluZUFuZ2xlIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVBbmdsZVwiO1xuaW1wb3J0IHsgbGluZUxlbmd0aCB9IGZyb20gXCIuLi9saW5lcy9saW5lTGVuZ3RoXCI7XG5pbXBvcnQgeyBwb2ludFRyYW5zbGF0ZSB9IGZyb20gXCIuLi9wb2ludHMvcG9pbnRUcmFuc2xhdGVcIjtcbmltcG9ydCB7IHBvbHlnb25MZW5ndGggfSBmcm9tIFwiLi9wb2x5Z29uTGVuZ3RoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uSW50ZXJwb2xhdGUocG9seWdvbil7XG4gIHJldHVybiAodCkgPT4ge1xuICAgIGlmICh0IDw9IDApe1xuICAgICAgcmV0dXJuIHBvbHlnb25bMF07XG4gICAgfVxuICBcbiAgICBjb25zdCBjbG9zZWQgPSBjbG9zZShwb2x5Z29uKTtcbiAgICAgIFxuICAgIGlmICh0ID49IDEpe1xuICAgICAgcmV0dXJuIGNsb3NlZFtjbG9zZWQubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRhcmdldCA9IHBvbHlnb25MZW5ndGgoY2xvc2VkKSAqIHQ7XG4gICAgbGV0IHBvaW50ID0gW10sIHRyYWNrID0gMDtcbiAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbG9zZWQubGVuZ3RoIC0gMTsgaSsrKXtcbiAgICAgIGNvbnN0IHNpZGUgPSBbY2xvc2VkW2ldLCBjbG9zZWRbaSArIDFdXSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGxpbmVMZW5ndGgoc2lkZSksXG4gICAgICAgICAgICBhbmdsZSA9IGxpbmVBbmdsZShzaWRlKSxcbiAgICAgICAgICAgIGRlbHRhID0gdGFyZ2V0IC0gKHRyYWNrICs9IGxlbmd0aCk7XG4gIFxuICAgICAgaWYgKGRlbHRhIDwgMCl7XG4gICAgICAgIHBvaW50ID0gcG9pbnRUcmFuc2xhdGUoc2lkZVswXSwgYW5nbGUsIGxlbmd0aCArIGRlbHRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIFxuICAgICAgZWxzZSBpZiAoaSA9PT0gcG9seWdvbi5sZW5ndGggLSAyKXtcbiAgICAgICAgcG9pbnQgPSBwb2ludFRyYW5zbGF0ZShzaWRlWzBdLCBhbmdsZSwgZGVsdGEpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG59IiwiLy8gQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgcG9seWdvbidzIHBlcmltZXRlci4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy1wb2x5Z29uL2Jsb2IvbWFzdGVyL3NyYy9sZW5ndGguanNcbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uTGVuZ3RoKHZlcnRpY2VzKXtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgbGV0IGkgPSAtMSxcbiAgICAgIG4gPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICBiID0gdmVydGljZXNbbiAtIDFdLFxuICAgICAgeGEsXG4gICAgICB5YSxcbiAgICAgIHhiID0gYlswXSxcbiAgICAgIHliID0gYlsxXSxcbiAgICAgIHBlcmltZXRlciA9IDA7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICB4YSA9IHhiO1xuICAgIHlhID0geWI7XG4gICAgYiA9IHZlcnRpY2VzW2ldO1xuICAgIHhiID0gYlswXTtcbiAgICB5YiA9IGJbMV07XG4gICAgeGEgLT0geGI7XG4gICAgeWEgLT0geWI7XG4gICAgcGVyaW1ldGVyICs9IE1hdGguc3FydCh4YSAqIHhhICsgeWEgKiB5YSk7XG4gIH1cblxuICByZXR1cm4gcGVyaW1ldGVyO1xufSIsIi8vIENhbGN1bGF0ZXMgdGhlIGFyaXRobWV0aWMgbWVhbiBvZiBhIHBvbHlnb24ncyB2ZXJ0aWNlcy5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uTWVhbih2ZXJ0aWNlcyl7XG4gIGxldCB4ID0gMCwgeSA9IDAsIGwgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCB2ID0gdmVydGljZXNbaV07ICAgICAgICBcblxuICAgIHggKz0gdlswXTtcbiAgICB5ICs9IHZbMV07XG4gIH1cblxuICByZXR1cm4gW3ggLyBsLCB5IC8gbF07XG59IiwiaW1wb3J0IHsgY2xvc2UgfSBmcm9tIFwiLi4vdXRpbHMvY2xvc2VQb2x5Z29uXCI7XG5pbXBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUFuZ2xlXCI7XG5pbXBvcnQgeyBsaW5lTGVuZ3RoIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVMZW5ndGhcIjtcbmltcG9ydCB7IHBvbHlnb25BcmVhIH0gZnJvbSBcIi4vcG9seWdvbkFyZWFcIjtcbmltcG9ydCB7IHBvbHlnb25DZW50cm9pZCB9IGZyb20gXCIuL3BvbHlnb25DZW50cm9pZFwiO1xuaW1wb3J0IHsgcG9seWdvblNjYWxlQXJlYSB9IGZyb20gXCIuL3BvbHlnb25TY2FsZUFyZWFcIjtcbmltcG9ydCB7IHBvbHlnb25UcmFuc2xhdGUgfSBmcm9tIFwiLi9wb2x5Z29uVHJhbnNsYXRlXCI7XG5cbi8vIFJldHVybnMgYSByYW5kb20gcG9seWdvbiBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljIG51bWJlciBvZiBzaWRlcywgYXJlYSwgYW5kIGNlbnRyb2lkLlxuLy8gQmFzZWQgb24gYW4gYWxnb3JpdGhtIGJ5IFBhdmVsIFZhbHRyIGFuZCBhbiBpbXBsZW1lbnRhdGlvbiBieSBNYW5lZXNoIEFncmF3YWxhOiBodHRwczovL29ic2VydmFibGVocS5jb20vQG1hZ3Jhd2FsYS9yYW5kb20tY29udmV4LXBvbHlnb25cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uUmFuZG9tKHNpZGVzID0gMywgYXJlYSA9IDEwMCwgY2VudHJvaWQgPSBbMCwgMF0pIHtcbiAgY29uc3QgciA9IE1hdGguc3FydChhcmVhIC8gTWF0aC5QSSksXG4gICAgICAgIHhzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKCkgPT4gMiAqIHIgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgeXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaWRlcyB9LCAoKSA9PiAyICogciAqIE1hdGgucmFuZG9tKCkpO1xuICBcbiAgeHMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICB5cy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgY29uc3QgdmVjWFMgPSBjaGFpbih4cywgeHNbMF0sIHhzW3hzLmxlbmd0aC0xXSksXG4gICAgICAgIHZlY1lTID0gY2hhaW4oeXMsIHlzWzBdLCB5c1t5cy5sZW5ndGgtMV0pO1xuXG4gIHNodWZmbGUodmVjWVMpO1xuXG4gIC8vTWFrZSBwb2x5Z29uIGNvb3JkaW5hdGVzIGZyb20gdGhlIHZlY3MgYnkgbGF5aW5nIHRoZW0gb3V0IGVuZCB0byBlbmRcbiAgbGV0IHBvbHlnb24gPSBbXSxcbiAgICAgIHggPSAwLCB5ID0gMDtcbiAgXG4gIC8vIFppcCB0aGUgdmVjdG9yIGFycmF5cyB0b2dldGhlclxuICAvLyBUaGVuLCBzb3J0IHRoZSB2ZWN0b3JzIGJ5IGFuZ2xlLCBpbiBhIGNvdW50ZXIgY2xvY2t3aXNlIGZhc2hpb24uIFxuICAvLyBhIGFuZCBiIGFyZSB0dXBsZXMgcmVwcmVzZW50aW5nIHZlY3RvcnMuIENvbXB1dGUgYW5nbGUgZm9yIGVhY2ggdmVjdG9yIGFuZCBjb21wYXJlIHRoZW0uXG4gIGNvbnN0IHZlY3MgPSB2ZWNYU1xuICAgIC5tYXAoKGQsIGkpID0+IFtkLCB2ZWNZU1tpXV0pXG4gICAgLnNvcnQoKGEsIGIpID0+IE1hdGguYXRhbjIoYlsxXSwgYlswXSkgLSBNYXRoLmF0YW4yKGFbMV0sIGFbMF0pKVxuICAgIC5mb3JFYWNoKHZlYyA9PiB7XG4gICAgICB4ICs9IHZlY1swXSAqIDE7XG4gICAgICB5ICs9IHZlY1sxXSAqIDE7XG4gICAgICBwb2x5Z29uLnB1c2goW3gseV0pXG4gICAgfSk7XG5cbiAgLy8gU2NhbGUgYW5kIHRyYW5zbGF0ZVxuICBjb25zdCBjID0gcG9seWdvbkNlbnRyb2lkKHBvbHlnb24pO1xuICBcbiAgcmV0dXJuIHBvbHlnb25UcmFuc2xhdGUoXG4gICAgcG9seWdvblNjYWxlQXJlYShwb2x5Z29uLCBhcmVhIC8gcG9seWdvbkFyZWEocG9seWdvbikpLFxuICAgIGxpbmVBbmdsZShbYywgY2VudHJvaWRdKSxcbiAgICBsaW5lTGVuZ3RoKFtjLCBjZW50cm9pZF0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNoYWluKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgbGV0IGxhc3RNaW4gPSBtaW4sIGxhc3RNYXggPSBtaW47XG4gIGNvbnN0IG91dHB1dCA9IFtdXG4gIFxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZhbHVlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCB2YWwgPSB2YWx1ZXNbaV07XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgb3V0cHV0LnB1c2godmFsIC0gbGFzdE1pbik7XG4gICAgICBsYXN0TWluID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaChsYXN0TWF4IC0gdmFsKTtcbiAgICAgIGxhc3RNYXggPSB2YWw7XG4gICAgfVxuICB9XG4gIFxuICBvdXRwdXQucHVzaChtYXggLSBsYXN0TWluKTtcbiAgb3V0cHV0LnB1c2gobGFzdE1heCAtIG1heCk7XG4gIFxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gIH1cbn0iLCJpbXBvcnQgeyBsaW5lSW50ZXJwb2xhdGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUludGVycG9sYXRlXCI7XG5pbXBvcnQgeyBwb2x5Z29uQm91bmRzIH0gZnJvbSBcIi4vcG9seWdvbkJvdW5kc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvblJlZmxlY3RYKHBvbHlnb24sIHJlZmxlY3RGYWN0b3IgPSAxKXtcbiAgY29uc3QgW1ttaW4sIF9dLCBbbWF4LCBfX11dID0gcG9seWdvbkJvdW5kcyhwb2x5Z29uKTtcbiAgY29uc3QgcCA9IFtdO1xuICBcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG4gICAgY29uc3QgW3gsIHldID0gcG9seWdvbltpXTtcbiAgICBjb25zdCByID0gW21pbiArIG1heCAtIHgsIHldO1xuXG4gICAgaWYgKHJlZmxlY3RGYWN0b3IgPT09IDApe1xuICAgICAgcFtpXSA9IFt4LCB5XTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmbGVjdEZhY3RvciA9PT0gMSl7XG4gICAgICBwW2ldID0gcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB0ID0gbGluZUludGVycG9sYXRlKFtbeCwgeV0sIHJdKTtcbiAgICAgIHBbaV0gPSB0KE1hdGgubWF4KE1hdGgubWluKHJlZmxlY3RGYWN0b3IsIDEpLCAwKSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBsaW5lSW50ZXJwb2xhdGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUludGVycG9sYXRlXCI7XG5pbXBvcnQgeyBwb2x5Z29uQm91bmRzIH0gZnJvbSBcIi4vcG9seWdvbkJvdW5kc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvblJlZmxlY3RZKHBvbHlnb24sIHJlZmxlY3RGYWN0b3IgPSAxKXtcbiAgY29uc3QgW1tfLCBtaW5dLCBbX18sIG1heF1dID0gcG9seWdvbkJvdW5kcyhwb2x5Z29uKTtcbiAgY29uc3QgcCA9IFtdO1xuICBcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG4gICAgY29uc3QgW3gsIHldID0gcG9seWdvbltpXTtcbiAgICBjb25zdCByID0gW3gsIG1pbiArIG1heCAtIHldO1xuXG4gICAgaWYgKHJlZmxlY3RGYWN0b3IgPT09IDApe1xuICAgICAgcFtpXSA9IFt4LCB5XTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmbGVjdEZhY3RvciA9PT0gMSl7XG4gICAgICBwW2ldID0gcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB0ID0gbGluZUludGVycG9sYXRlKFtbeCwgeV0sIHJdKTtcbiAgICAgIHBbaV0gPSB0KE1hdGgubWF4KE1hdGgubWluKHJlZmxlY3RGYWN0b3IsIDEpLCAwKSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUFuZ2xlXCI7XG5pbXBvcnQgeyBsaW5lTGVuZ3RoIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVMZW5ndGhcIjtcbmltcG9ydCB7IHBvaW50VHJhbnNsYXRlIH0gZnJvbSBcIi4uL3BvaW50cy9wb2ludFRyYW5zbGF0ZVwiO1xuaW1wb3J0IHsgcG9seWdvblRyYW5zbGF0ZSB9IGZyb20gXCIuL3BvbHlnb25UcmFuc2xhdGVcIjtcblxuLy8gUmV0dXJucyB0aGUgdmVydGljZXMgb2YgYSByZWd1bGFyIHBvbHlnb24gb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc2lkZXMsIGFyZWEsIGFuZCBjZW50ZXIgY29vcmRpbmF0ZXMuXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvblJlZ3VsYXIoc2lkZXMgPSAzLCBhcmVhID0gMTAwLCBjZW50ZXIpeyBcbiAgbGV0IHBvbHlnb24gPSBbXSxcbiAgICAgIHBvaW50ID0gWzAsIDBdLFxuICAgICAgc3VtID0gWzAsIDBdLFxuICAgICAgYW5nbGUgPSAwO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlczsgaSsrKXtcbiAgICBwb2x5Z29uW2ldID0gcG9pbnQ7XG4gICAgc3VtWzBdICs9IHBvaW50WzBdO1xuICAgIHN1bVsxXSArPSBwb2ludFsxXTtcbiAgICBwb2ludCA9IHBvaW50VHJhbnNsYXRlKHBvaW50LCBhbmdsZSwgTWF0aC5zcXJ0KCg0ICogYXJlYSkgKiBNYXRoLnRhbihNYXRoLlBJIC8gc2lkZXMpIC8gc2lkZXMpKTsgLy8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTgwNDA0MTQyNzEzL2h0dHA6Ly9rZWlzYW4uY2FzaW8uY29tL2V4ZWMvc3lzdGVtLzEzNTU5ODU5ODVcbiAgICBhbmdsZSAtPSAzNjAgLyBzaWRlcztcbiAgfVxuXG4gIGlmIChjZW50ZXIpe1xuICAgIGNvbnN0IGxpbmUgPSBbW3N1bVswXSAvIHNpZGVzLCBzdW1bMV0gLyBzaWRlc10sIGNlbnRlcl1cbiAgICBwb2x5Z29uID0gcG9seWdvblRyYW5zbGF0ZShwb2x5Z29uLCBsaW5lQW5nbGUobGluZSksIGxpbmVMZW5ndGgobGluZSkpOyAgICBcbiAgfVxuICBcbiAgcmV0dXJuIHBvbHlnb247XG59IiwiaW1wb3J0IHsgcG9pbnRSb3RhdGUgfSBmcm9tIFwiLi4vcG9pbnRzL3BvaW50Um90YXRlXCI7XG5cbi8vIFJvdGF0ZXMgYSBwb2x5Z29uIGJ5IGFuIGFuZ2xlIGluIGRlZ3JlZXMgYXJvdW5kIGFuIG9yaWdpbi5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uUm90YXRlKHBvbHlnb24sIGFuZ2xlLCBvcmlnaW4pe1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcG9seWdvbi5sZW5ndGg7IGkgPCBsOyBpKyspe1xuICAgIHBbaV0gPSBwb2ludFJvdGF0ZShwb2x5Z29uW2ldLCBhbmdsZSwgb3JpZ2luKTtcbiAgfVxuICBcbiAgcmV0dXJuIHA7XG59IiwiaW1wb3J0IHsgbGluZUFuZ2xlIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVBbmdsZVwiO1xuaW1wb3J0IHsgbGluZUxlbmd0aCB9IGZyb20gXCIuLi9saW5lcy9saW5lTGVuZ3RoXCI7XG5pbXBvcnQgeyBwb2ludFRyYW5zbGF0ZSB9IGZyb20gXCIuLi9wb2ludHMvcG9pbnRUcmFuc2xhdGVcIjtcbmltcG9ydCB7IHBvbHlnb25DZW50cm9pZCB9IGZyb20gXCIuL3BvbHlnb25DZW50cm9pZFwiO1xuXG4vLyBTY2FsZXMgYSBwb2x5Z29uIGJ5IGEgc2NhbGUgZmFjdG9yICh3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplKSBmcm9tIGFuIG9yaWdpbiBwb2ludC5cbi8vIFRoZSByZXR1cm5lZCBwb2x5Z29uJ3MgYXJlYSBpcyBlcXVhbCB0byB0aGUgaW5wdXQgcG9seWdvbidzIGFyZWEgbXVsdGlwbGllZCBieSB0aGUgc3F1YXJlIG9mIHRoZSBzY2FsZUZhY3Rvci5cbi8vIFRoZSBvcmlnaW4gZGVmYXVsdHMgdG8gdGhlIHBvbHlnb24ncyBjZW50cm9pZC5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uU2NhbGUocG9seWdvbiwgc2NhbGUsIG9yaWdpbil7XG4gIGlmICghb3JpZ2luKXtcbiAgICBvcmlnaW4gPSBwb2x5Z29uQ2VudHJvaWQocG9seWdvbik7XG4gIH1cblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcG9seWdvbi5sZW5ndGg7IGkgPCBsOyBpKyspe1xuICAgIGNvbnN0IHYgPSBwb2x5Z29uW2ldLFxuICAgICAgICAgIGQgPSBsaW5lTGVuZ3RoKFtvcmlnaW4sIHZdKSxcbiAgICAgICAgICBhID0gbGluZUFuZ2xlKFtvcmlnaW4sIHZdKTtcblxuICAgIHBbaV0gPSBwb2ludFRyYW5zbGF0ZShvcmlnaW4sIGEsIGQgKiBzY2FsZSk7XG4gIH1cblxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUFuZ2xlXCI7XG5pbXBvcnQgeyBsaW5lTGVuZ3RoIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVMZW5ndGhcIjtcbmltcG9ydCB7IHBvaW50VHJhbnNsYXRlIH0gZnJvbSBcIi4uL3BvaW50cy9wb2ludFRyYW5zbGF0ZVwiO1xuaW1wb3J0IHsgcG9seWdvbkNlbnRyb2lkIH0gZnJvbSBcIi4vcG9seWdvbkNlbnRyb2lkXCI7XG5cbi8vIFNjYWxlcyBhIHBvbHlnb24gYnkgYSBzY2FsZSBmYWN0b3IgKHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUpIGZyb20gYW4gb3JpZ2luIHBvaW50LlxuLy8gVGhlIHJldHVybmVkIHBvbHlnb24ncyBhcmVhIGlzIGVxdWFsIHRvIHRoZSBpbnB1dCBwb2x5Z29uJ3MgYXJlYSBtdWx0aXBsaWVkIGJ5IHRoZSBzY2FsZUZhY3Rvci5cbi8vIFRoZSBvcmlnaW4gZGVmYXVsdHMgdG8gdGhlIHBvbHlnb24ncyBjZW50cm9pZC5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uU2NhbGVBcmVhKHBvbHlnb24sIHNjYWxlLCBvcmlnaW4pe1xuICBpZiAoIW9yaWdpbil7XG4gICAgb3JpZ2luID0gcG9seWdvbkNlbnRyb2lkKHBvbHlnb24pO1xuICB9XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHBvbHlnb24ubGVuZ3RoOyBpIDwgbDsgaSsrKXtcbiAgICBjb25zdCB2ID0gcG9seWdvbltpXSxcbiAgICAgICAgICBkID0gbGluZUxlbmd0aChbb3JpZ2luLCB2XSksXG4gICAgICAgICAgYSA9IGxpbmVBbmdsZShbb3JpZ2luLCB2XSk7XG5cbiAgICBwW2ldID0gcG9pbnRUcmFuc2xhdGUob3JpZ2luLCBhLCBkICogTWF0aC5zcXJ0KHNjYWxlKSk7XG4gIH1cblxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUFuZ2xlXCI7XG5pbXBvcnQgeyBsaW5lTGVuZ3RoIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVMZW5ndGhcIjtcbmltcG9ydCB7IHBvaW50VHJhbnNsYXRlIH0gZnJvbSBcIi4uL3BvaW50cy9wb2ludFRyYW5zbGF0ZVwiO1xuaW1wb3J0IHsgcG9seWdvbkNlbnRyb2lkIH0gZnJvbSBcIi4vcG9seWdvbkNlbnRyb2lkXCI7XG5cbi8vIFNjYWxlcyBhIHBvbHlnb24ncyB4LWNvb3JkaW5hdGVzIGJ5IGEgc2NhbGUgZmFjdG9yICh3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplKSBmcm9tIGFuIG9yaWdpbiBwb2ludC5cbi8vIFRoZSBvcmlnaW4gZGVmYXVsdHMgdG8gdGhlIHBvbHlnb24ncyBjZW50cm9pZC5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uU2NhbGVYKHBvbHlnb24sIHNjYWxlLCBvcmlnaW4pe1xuICBpZiAoIW9yaWdpbil7XG4gICAgb3JpZ2luID0gcG9seWdvbkNlbnRyb2lkKHBvbHlnb24pO1xuICB9XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHBvbHlnb24ubGVuZ3RoOyBpIDwgbDsgaSsrKXtcbiAgICBjb25zdCB2ID0gcG9seWdvbltpXSxcbiAgICAgICAgICBkID0gbGluZUxlbmd0aChbb3JpZ2luLCB2XSksXG4gICAgICAgICAgYSA9IGxpbmVBbmdsZShbb3JpZ2luLCB2XSksXG4gICAgICAgICAgdCA9IHBvaW50VHJhbnNsYXRlKG9yaWdpbiwgYSwgZCAqIHNjYWxlKTtcblxuICAgIHBbaV0gPSBbdFswXSwgdlsxXV07XG4gIH1cblxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBsaW5lQW5nbGUgfSBmcm9tIFwiLi4vbGluZXMvbGluZUFuZ2xlXCI7XG5pbXBvcnQgeyBsaW5lTGVuZ3RoIH0gZnJvbSBcIi4uL2xpbmVzL2xpbmVMZW5ndGhcIjtcbmltcG9ydCB7IHBvaW50VHJhbnNsYXRlIH0gZnJvbSBcIi4uL3BvaW50cy9wb2ludFRyYW5zbGF0ZVwiO1xuaW1wb3J0IHsgcG9seWdvbkNlbnRyb2lkIH0gZnJvbSBcIi4vcG9seWdvbkNlbnRyb2lkXCI7XG5cbi8vIFNjYWxlcyBhIHBvbHlnb24ncyB5LWNvb3JkaW5hdGVzIGJ5IGEgc2NhbGUgZmFjdG9yICh3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplKSBmcm9tIGFuIG9yaWdpbiBwb2ludC5cbi8vIFRoZSBvcmlnaW4gZGVmYXVsdHMgdG8gdGhlIHBvbHlnb24ncyBjZW50cm9pZC5cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uU2NhbGVZKHBvbHlnb24sIHNjYWxlLCBvcmlnaW4pe1xuICBpZiAoIW9yaWdpbil7XG4gICAgb3JpZ2luID0gcG9seWdvbkNlbnRyb2lkKHBvbHlnb24pO1xuICB9XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHBvbHlnb24ubGVuZ3RoOyBpIDwgbDsgaSsrKXtcbiAgICBjb25zdCB2ID0gcG9seWdvbltpXSxcbiAgICAgICAgICBkID0gbGluZUxlbmd0aChbb3JpZ2luLCB2XSksXG4gICAgICAgICAgYSA9IGxpbmVBbmdsZShbb3JpZ2luLCB2XSksXG4gICAgICAgICAgdCA9IHBvaW50VHJhbnNsYXRlKG9yaWdpbiwgYSwgZCAqIHNjYWxlKTtcblxuICAgIHBbaV0gPSBbdlswXSwgdFsxXV07XG4gIH1cblxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBwb2ludFRyYW5zbGF0ZSB9IGZyb20gXCIuLi9wb2ludHMvcG9pbnRUcmFuc2xhdGVcIjtcblxuLy8gVHJhbnNsYXRlcyBhIHBvbHlnb24gYnkgYW4gYW5nbGUgaW4gZGVncmVlcyBhbmQgZGlzdGFuY2UuXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvblRyYW5zbGF0ZShwb2x5Z29uLCBhbmdsZSwgZGlzdGFuY2Upe1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcG9seWdvbi5sZW5ndGg7IGkgPCBsOyBpKyspe1xuICAgIHBbaV0gPSBwb2ludFRyYW5zbGF0ZShwb2x5Z29uW2ldLCBhbmdsZSwgZGlzdGFuY2UpO1xuICB9XG4gIFxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgeyBwb2x5Z29uQXJlYSB9IGZyb20gXCIuL3BvbHlnb25BcmVhXCI7XG5cbi8vIFJldHVybnMgYSBwb2x5Z29uIGluIHRoZSBzcGVjaWZpZWQgd2luZGluZyBvcmRlci5cbi8vIElmIG9yZGVyIGlzIHBhc3NlZCBhcyBhIHN0cmluZ3Mgb2YgXCJjd1wiIG9yIFwiY2xvY2t3aXNlXCIsIHJldHVybnMgYSBwb2x5Z29uIHdpdGggYSBjbG9ja3dpc2Ugd2luZGluZyBvcmRlci5cbi8vIE90aGVyd2lzZSwgcmV0dXJucyBhIHBvbHlnb24gd2l0aCBhIGNvdW50ZXItY2xvY2t3aXNlIHdpbmRpbmcgb3JkZXIuXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbldpbmQocG9seWdvbiwgb3JkZXIgPSBcImNjd1wiKSB7XG4gIGlmIChwb2x5Z29uLmxlbmd0aCA8IDMpIHJldHVybiBudWxsO1xuICBcbiAgY29uc3QgcmV2ZXJzZWQgPSBwb2x5Z29uLnNsaWNlKCkucmV2ZXJzZSgpO1xuICBjb25zdCBpc0Nsb2Nrd2lzZSA9IHBvbHlnb25BcmVhKHBvbHlnb24sIHRydWUpID4gMDtcbiAgXG4gIGlmIChvcmRlciA9PT0gXCJjd1wiIHx8IG9yZGVyID09PSBcImNsb2Nrd2lzZVwiKSB7XG4gICAgcmV0dXJuIGlzQ2xvY2t3aXNlID8gcG9seWdvbiA6IHJldmVyc2VkO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBpc0Nsb2Nrd2lzZSA/IHJldmVyc2VkIDogcG9seWdvbjtcbiAgfVxufSIsImltcG9ydCB7IHBvaW50T25MaW5lIH0gZnJvbSBcIi4uL3JlbGF0aW9uc2hpcHMvcG9pbnRPbkxpbmVcIjtcblxuLy8gRGV0ZXJtaW5lcyBpZiBsaW5lQSBpbnRlcnNlY3RzIGxpbmVCLlxuLy8gUmV0dXJucyBhIGJvb2xlYW4uXG5leHBvcnQgZnVuY3Rpb24gbGluZUludGVyc2VjdHNMaW5lKGxpbmVBLCBsaW5lQikge1xuICBjb25zdCBbW2EweCwgYTB5XSwgW2ExeCwgYTF5XV0gPSBsaW5lQSxcbiAgICAgICAgW1tiMHgsIGIweV0sIFtiMXgsIGIxeV1dID0gbGluZUI7XG4gIFxuICAvLyBUZXN0IGZvciBzaGFyZWQgcG9pbnRzXG4gIGlmIChhMHggPT09IGIweCAmJiBhMHkgPT09IGIweSkgcmV0dXJuIHRydWU7XG4gIGlmIChhMXggPT09IGIxeCAmJiBhMXkgPT09IGIxeSkgcmV0dXJuIHRydWU7XG5cbiAgLy8gVGVzdCBmb3IgcG9pbnQgb24gbGluZVxuICBpZiAocG9pbnRPbkxpbmUobGluZUFbMF0sIGxpbmVCKSB8fCBwb2ludE9uTGluZShsaW5lQVsxXSwgbGluZUIpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHBvaW50T25MaW5lKGxpbmVCWzBdLCBsaW5lQSkgfHwgcG9pbnRPbkxpbmUobGluZUJbMV0sIGxpbmVBKSkgcmV0dXJuIHRydWU7XG5cbiAgY29uc3QgZGVub20gPSAoKGIxeSAtIGIweSkgKiAoYTF4IC0gYTB4KSkgLSAoKGIxeCAtIGIweCkgKiAoYTF5IC0gYTB5KSk7XG4gIFxuICBpZiAoZGVub20gPT09IDApIHJldHVybiBmYWxzZTtcbiAgXG4gIGNvbnN0IGRlbHRhWSA9IGEweSAtIGIweSxcbiAgICAgICAgZGVsdGFYID0gYTB4IC0gYjB4LFxuICAgICAgICBudW1lcjAgPSAoKGIxeCAtIGIweCkgKiBkZWx0YVkpIC0gKChiMXkgLSBiMHkpICogZGVsdGFYKSxcbiAgICAgICAgbnVtZXIxID0gKChhMXggLSBhMHgpICogZGVsdGFZKSAtICgoYTF5IC0gYTB5KSAqIGRlbHRhWCksXG4gICAgICAgIHF1b3RBID0gbnVtZXIwIC8gZGVub20sXG4gICAgICAgIHF1b3RCID0gbnVtZXIxIC8gZGVub207XG5cbiAgcmV0dXJuIHF1b3RBID4gMCAmJiBxdW90QSA8IDEgJiYgcXVvdEIgPiAwICYmIHF1b3RCIDwgMTtcbn1cblxuIiwiaW1wb3J0IHsgY2xvc2UgfSBmcm9tIFwiLi4vdXRpbHMvY2xvc2VQb2x5Z29uXCI7XG5pbXBvcnQgeyBsaW5lSW50ZXJzZWN0c0xpbmUgfSBmcm9tIFwiLi9saW5lSW50ZXJzZWN0c0xpbmVcIjtcbmltcG9ydCB7IHBvaW50T25MaW5lIH0gZnJvbSBcIi4uL3JlbGF0aW9uc2hpcHMvcG9pbnRPbkxpbmVcIjtcblxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbGluZSBpbnRlcnNlY3RzIGEgcG9seWdvbi5cbi8vIFJldHVybnMgYSBib29sZWFuLlxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUG9seWdvbihsaW5lLCBwb2x5Z29uKXtcbiAgbGV0IGludGVyc2VjdHMgPSBmYWxzZTtcbiAgY29uc3QgY2xvc2VkID0gY2xvc2UocG9seWdvbik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBjbG9zZWQubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKyl7XG4gICAgY29uc3QgdjAgPSBjbG9zZWRbaV0sXG4gICAgICAgICAgdjEgPSBjbG9zZWRbaSArIDFdO1xuICAgIFxuICAgIGlmIChsaW5lSW50ZXJzZWN0c0xpbmUobGluZSwgW3YwLCB2MV0pIHx8IChwb2ludE9uTGluZSh2MCwgbGluZSkgJiYgcG9pbnRPbkxpbmUodjEsIGxpbmUpKSl7XG4gICAgICBpbnRlcnNlY3RzID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3RzO1xufSIsIi8vIERldGVybWluZXMgd2hldGhlciBhIHBvaW50IGlzIGluc2lkZSBvZiBhIHBvbHlnb24sIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIHZlcnRpY2VzLlxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svcG9pbnQtaW4tcG9seWdvbi9ibG9iL21hc3Rlci9pbmRleC5qcyxcbi8vIGJhc2VkIG9uIHRoZSByYXktY2FzdGluZyBhbGdvcml0aG0gZnJvbSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxODAxMTUxNTE3MDUvaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuLy8gV2lraXBlZGlhOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb2ludF9pbl9wb2x5Z29uI1JheV9jYXN0aW5nX2FsZ29yaXRobVxuLy8gUmV0dXJucyBhIGJvb2xlYW4uXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRJblBvbHlnb24ocG9pbnQsIHBvbHlnb24pIHtcbiAgbGV0IHggPSBwb2ludFswXSxcbiAgICAgIHkgPSBwb2ludFsxXSxcbiAgICAgIGluc2lkZSA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwLCBqID0gcG9seWdvbi5sZW5ndGggLSAxOyBpIDwgcG9seWdvbi5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBjb25zdCB4aSA9IHBvbHlnb25baV1bMF0sIHlpID0gcG9seWdvbltpXVsxXSxcbiAgICAgICAgICB4aiA9IHBvbHlnb25bal1bMF0sIHlqID0gcG9seWdvbltqXVsxXTtcbiAgXG4gICAgaWYgKCgoeWkgPiB5KSAhPSAoeWogPiB5KSkgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKSkgeyBpbnNpZGUgPSAhaW5zaWRlOyB9XG4gIH1cbiAgXG4gIHJldHVybiBpbnNpZGU7XG59IiwiaW1wb3J0IHsgbGluZUxlbmd0aCB9IGZyb20gXCIuLi9saW5lcy9saW5lTGVuZ3RoXCI7XG5pbXBvcnQgeyBjcm9zcyB9IGZyb20gXCIuLi91dGlscy9jcm9zc1Byb2R1Y3RcIjtcblxuLy8gU2VlIGh0dHBzOi8vbWF0aC5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMjc0NzEyL2NhbGN1bGF0ZS1vbi13aGljaC1zaWRlLW9mLWEtc3RyYWlnaHQtbGluZS1pcy1hLWdpdmVuLXBvaW50LWxvY2F0ZWRcbmZ1bmN0aW9uIHRvcFBvaW50Rmlyc3QobGluZSl7XG4gIHJldHVybiBsaW5lWzFdWzFdID4gbGluZVswXVsxXSA/IGxpbmUgOiBbbGluZVsxXSwgbGluZVswXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludExlZnRvZkxpbmUocG9pbnQsIGxpbmUpe1xuICBjb25zdCB0ID0gdG9wUG9pbnRGaXJzdChsaW5lKTtcbiAgcmV0dXJuIGNyb3NzKHBvaW50LCB0WzFdLCB0WzBdKSA8IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9pbnRSaWdodG9mTGluZShwb2ludCwgbGluZSl7XG4gIGNvbnN0IHQgPSB0b3BQb2ludEZpcnN0KGxpbmUpO1xuICByZXR1cm4gY3Jvc3MocG9pbnQsIHRbMV0sIHRbMF0pID4gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb2ludE9uTGluZShwb2ludCwgbGluZSwgZXBzaWxvbiA9IDApe1xuICBjb25zdCBsID0gbGluZUxlbmd0aChsaW5lKTtcbiAgcmV0dXJuIHBvaW50V2l0aExpbmUocG9pbnQsIGxpbmUsIGVwc2lsb24pICYmIGxpbmVMZW5ndGgoW2xpbmVbMF0sIHBvaW50XSkgPD0gbCAmJiBsaW5lTGVuZ3RoKFtsaW5lWzFdLCBwb2ludF0pIDw9IGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9pbnRXaXRoTGluZShwb2ludCwgbGluZSwgZXBzaWxvbiA9IDApe1xuICByZXR1cm4gTWF0aC5hYnMoY3Jvc3MocG9pbnQsIGxpbmVbMF0sIGxpbmVbMV0pKSA8PSBlcHNpbG9uO1xufSIsImltcG9ydCB7IGNsb3NlIH0gZnJvbSBcIi4uL3V0aWxzL2Nsb3NlUG9seWdvblwiO1xuaW1wb3J0IHsgcG9pbnRPbkxpbmUgfSBmcm9tIFwiLi9wb2ludE9uTGluZVwiO1xuXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBwb2ludCBpcyBsb2NhdGVkIG9uIG9uZSBvZiB0aGUgZWRnZXMgb2YgYSBwb2x5Z29uLlxuLy8gUmV0dXJucyBhIGJvb2xlYW4uXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRPblBvbHlnb24ocG9pbnQsIHBvbHlnb24sIGVwc2lsb24gPSAwKXtcbiAgbGV0IG9uID0gZmFsc2U7XG4gIGNvbnN0IGNsb3NlZCA9IGNsb3NlKHBvbHlnb24pO1xuICBcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBjbG9zZWQubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKyl7XG4gICAgaWYgKHBvaW50T25MaW5lKHBvaW50LCBbY2xvc2VkW2ldLCBjbG9zZWRbaSArIDFdXSwgZXBzaWxvbikpe1xuICAgICAgb24gPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gb247XG59IiwiaW1wb3J0IHsgY2xvc2UgfSBmcm9tIFwiLi4vdXRpbHMvY2xvc2VQb2x5Z29uXCI7XG5pbXBvcnQgeyBsaW5lSW50ZXJzZWN0c1BvbHlnb24gfSBmcm9tIFwiLi9saW5lSW50ZXJzZWN0c1BvbHlnb25cIjtcbmltcG9ydCB7IHBvaW50SW5Qb2x5Z29uIH0gZnJvbSBcIi4vcG9pbnRJblBvbHlnb25cIjtcblxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcG9seWdvbiBpcyBjb250YWluZWQgYnkgYW5vdGhlciBwb2x5Z29uLlxuLy8gUG9seWdvbnMgYXJlIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIHZlcnRpY2VzLCBlYWNoIG9mIHdoaWNoIGlzIGFuIGFycmF5IG9mIHR3byBudW1iZXJzLFxuLy8gd2hlcmUgdGhlIGZpcnN0IG51bWJlciByZXByZXNlbnRzIGl0cyB4LWNvb3JkaW5hdGUgYW5kIHRoZSBzZWNvbmQgaXRzIHktY29vcmRpbmF0ZS5cbi8vIFJldHVybnMgYSBib29sZWFuLlxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb25JblBvbHlnb24ocG9seWdvbkEsIHBvbHlnb25CKXtcbiAgbGV0IGluc2lkZSA9IHRydWU7XG4gIGNvbnN0IGNsb3NlZCA9IGNsb3NlKHBvbHlnb25BKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwLCBsID0gY2xvc2VkLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspe1xuICAgIGNvbnN0IHYwID0gY2xvc2VkW2ldO1xuICAgIFxuICAgIC8vIFBvaW50cyB0ZXN0ICBcbiAgICBpZiAoIXBvaW50SW5Qb2x5Z29uKHYwLCBwb2x5Z29uQikpe1xuICAgICAgaW5zaWRlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgLy8gTGluZXMgdGVzdFxuICAgIGlmIChsaW5lSW50ZXJzZWN0c1BvbHlnb24oW3YwLCBjbG9zZWRbaSArIDFdXSwgcG9seWdvbkIpKXtcbiAgICAgIGluc2lkZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gaW5zaWRlO1xufSIsImltcG9ydCB7IGNsb3NlIH0gZnJvbSBcIi4uL3V0aWxzL2Nsb3NlUG9seWdvblwiO1xuaW1wb3J0IHsgbGluZUludGVyc2VjdHNQb2x5Z29uIH0gZnJvbSBcIi4vbGluZUludGVyc2VjdHNQb2x5Z29uXCI7XG5pbXBvcnQgeyBwb2ludE9uUG9seWdvbiB9IGZyb20gXCIuL3BvaW50T25Qb2x5Z29uXCI7XG5cbi8vIERldGVybWluZXMgd2hldGhlciBhIHBvbHlnb24gaW50ZXJzZWN0cyBidXQgaXMgbm90IGNvbnRhaW5lZCBieSBhbm90aGVyIHBvbHlnb24uXG4vLyBQb2x5Z29ucyBhcmUgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXkgb2YgdmVydGljZXMsIGVhY2ggb2Ygd2hpY2ggaXMgYW4gYXJyYXkgb2YgdHdvIG51bWJlcnMsXG4vLyB3aGVyZSB0aGUgZmlyc3QgbnVtYmVyIHJlcHJlc2VudHMgaXRzIHgtY29vcmRpbmF0ZSBhbmQgdGhlIHNlY29uZCBpdHMgeS1jb29yZGluYXRlLlxuLy8gUmV0dXJucyBhIGJvb2xlYW4uXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbkludGVyc2VjdHNQb2x5Z29uKHBvbHlnb25BLCBwb2x5Z29uQil7XG4gIGxldCBpbnRlcnNlY3RzID0gZmFsc2UsXG4gICAgICBvbkNvdW50ID0gMDtcbiAgY29uc3QgY2xvc2VkID0gY2xvc2UocG9seWdvbkEpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gY2xvc2VkLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspe1xuICAgIGNvbnN0IHYwID0gY2xvc2VkW2ldLFxuICAgICAgICAgIHYxID0gY2xvc2VkW2kgKyAxXTtcbiAgICBcbiAgICBpZiAobGluZUludGVyc2VjdHNQb2x5Z29uKFt2MCwgdjFdLCBwb2x5Z29uQikpe1xuICAgICAgaW50ZXJzZWN0cyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHBvaW50T25Qb2x5Z29uKHYwLCBwb2x5Z29uQikpe1xuICAgICAgKytvbkNvdW50O1xuICAgIH1cbiAgICBcbiAgICBpZiAob25Db3VudCA9PT0gMil7XG4gICAgICBpbnRlcnNlY3RzID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3RzO1xufSIsIi8vIENsb3NlcyBhIHBvbHlnb24gaWYgaXQncyBub3QgY2xvc2VkIGFscmVhZHkuIERvZXMgbm90IG1vZGlmeSBpbnB1dCBwb2x5Z29uLlxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlKHBvbHlnb24pe1xuICByZXR1cm4gaXNDbG9zZWQocG9seWdvbikgPyBwb2x5Z29uIDogWy4uLnBvbHlnb24sIHBvbHlnb25bMF1dO1xufVxuXG4vLyBUZXN0cyB3aGV0aGVyIGEgcG9seWdvbiBpcyBjbG9zZWRcbmV4cG9ydCBmdW5jdGlvbiBpc0Nsb3NlZChwb2x5Z29uKXtcbiAgY29uc3QgZmlyc3QgPSBwb2x5Z29uWzBdLFxuICAgICAgICBsYXN0ID0gcG9seWdvbltwb2x5Z29uLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gZmlyc3RbMF0gPT09IGxhc3RbMF0gJiYgZmlyc3RbMV0gPT09IGxhc3RbMV07XG59IiwiLy8gU2VlIGh0dHBzOi8vZW4ud2lraWJvb2tzLm9yZy93aWtpL0FsZ29yaXRobV9JbXBsZW1lbnRhdGlvbi9HZW9tZXRyeS9Db252ZXhfaHVsbC9Nb25vdG9uZV9jaGFpbiNKYXZhU2NyaXB0XG4vLyBhbmQgaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNzQ3MTIvY2FsY3VsYXRlLW9uLXdoaWNoLXNpZGUtb2YtYS1zdHJhaWdodC1saW5lLWlzLWEtZ2l2ZW4tcG9pbnQtbG9jYXRlZFxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzIChhLCBiLCBvKXtcbiAgcmV0dXJuIChhWzBdIC0gb1swXSkgKiAoYlsxXSAtIG9bMV0pIC0gKGFbMV0gLSBvWzFdKSAqIChiWzBdIC0gb1swXSk7XG59IiwiLy8gQSBsaWJyYXJ5IG9mIHNlZWRhYmxlIFJOR3MgaW1wbGVtZW50ZWQgaW4gSmF2YXNjcmlwdC5cbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgc2VlZHJhbmRvbSA9IHJlcXVpcmUoJ3NlZWRyYW5kb20nKTtcbi8vIHZhciByYW5kb20gPSBzZWVkcmFuZG9tKDEpOyAvLyBvciBhbnkgc2VlZC5cbi8vIHZhciB4ID0gcmFuZG9tKCk7ICAgICAgIC8vIDAgPD0geCA8IDEuICBFdmVyeSBiaXQgaXMgcmFuZG9tLlxuLy8gdmFyIHggPSByYW5kb20ucXVpY2soKTsgLy8gMCA8PSB4IDwgMS4gIDMyIGJpdHMgb2YgcmFuZG9tbmVzcy5cblxuLy8gYWxlYSwgYSA1My1iaXQgbXVsdGlwbHktd2l0aC1jYXJyeSBnZW5lcmF0b3IgYnkgSm9oYW5uZXMgQmFhZ8O4ZS5cbi8vIFBlcmlvZDogfjJeMTE2XG4vLyBSZXBvcnRlZCB0byBwYXNzIGFsbCBCaWdDcnVzaCB0ZXN0cy5cbnZhciBhbGVhID0gcmVxdWlyZSgnLi9saWIvYWxlYScpO1xuXG4vLyB4b3IxMjgsIGEgcHVyZSB4b3Itc2hpZnQgZ2VuZXJhdG9yIGJ5IEdlb3JnZSBNYXJzYWdsaWEuXG4vLyBQZXJpb2Q6IDJeMTI4LTEuXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBNYXRyaXhSYW5rIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcjEyOCA9IHJlcXVpcmUoJy4vbGliL3hvcjEyOCcpO1xuXG4vLyB4b3J3b3csIEdlb3JnZSBNYXJzYWdsaWEncyAxNjAtYml0IHhvci1zaGlmdCBjb21iaW5lZCBwbHVzIHdleWwuXG4vLyBQZXJpb2Q6IDJeMTkyLTJeMzJcbi8vIFJlcG9ydGVkIHRvIGZhaWw6IENvbGxpc2lvbk92ZXIsIFNpbXBQb2tlciwgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yd293ID0gcmVxdWlyZSgnLi9saWIveG9yd293Jyk7XG5cbi8vIHhvcnNoaWZ0NywgYnkgRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXIsIHRha2VzXG4vLyBhIGRpZmZlcmVudCBhcHByb2FjaDogaXQgYWRkcyByb2J1c3RuZXNzIGJ5IGFsbG93aW5nIG1vcmUgc2hpZnRzXG4vLyB0aGFuIE1hcnNhZ2xpYSdzIG9yaWdpbmFsIHRocmVlLiAgSXQgaXMgYSA3LXNoaWZ0IGdlbmVyYXRvclxuLy8gd2l0aCAyNTYgYml0cywgdGhhdCBwYXNzZXMgQmlnQ3J1c2ggd2l0aCBubyBzeXN0bWF0aWMgZmFpbHVyZXMuXG4vLyBQZXJpb2QgMl4yNTYtMS5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yc2hpZnQ3ID0gcmVxdWlyZSgnLi9saWIveG9yc2hpZnQ3Jyk7XG5cbi8vIHhvcjQwOTYsIGJ5IFJpY2hhcmQgQnJlbnQsIGlzIGEgNDA5Ni1iaXQgeG9yLXNoaWZ0IHdpdGggYVxuLy8gdmVyeSBsb25nIHBlcmlvZCB0aGF0IGFsc28gYWRkcyBhIFdleWwgZ2VuZXJhdG9yLiBJdCBhbHNvIHBhc3Nlc1xuLy8gQmlnQ3J1c2ggd2l0aCBubyBzeXN0ZW1hdGljIGZhaWx1cmVzLiAgSXRzIGxvbmcgcGVyaW9kIG1heVxuLy8gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIG1hbnkgZ2VuZXJhdG9ycyBhbmQgbmVlZCB0byBhdm9pZFxuLy8gY29sbGlzaW9ucy5cbi8vIFBlcmlvZDogMl40MTI4LTJeMzIuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcjQwOTYgPSByZXF1aXJlKCcuL2xpYi94b3I0MDk2Jyk7XG5cbi8vIFR5Y2hlLWksIGJ5IFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqbywgaXMgYSBiaXQtc2hpZnRpbmcgcmFuZG9tXG4vLyBudW1iZXIgZ2VuZXJhdG9yIGRlcml2ZWQgZnJvbSBDaGFDaGEsIGEgbW9kZXJuIHN0cmVhbSBjaXBoZXIuXG4vLyBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuLy8gUGVyaW9kOiB+Ml4xMjdcbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgdHljaGVpID0gcmVxdWlyZSgnLi9saWIvdHljaGVpJyk7XG5cbi8vIFRoZSBvcmlnaW5hbCBBUkM0LWJhc2VkIHBybmcgaW5jbHVkZWQgaW4gdGhpcyBsaWJyYXJ5LlxuLy8gUGVyaW9kOiB+Ml4xNjAwXG52YXIgc3IgPSByZXF1aXJlKCcuL3NlZWRyYW5kb20nKTtcblxuc3IuYWxlYSA9IGFsZWE7XG5zci54b3IxMjggPSB4b3IxMjg7XG5zci54b3J3b3cgPSB4b3J3b3c7XG5zci54b3JzaGlmdDcgPSB4b3JzaGlmdDc7XG5zci54b3I0MDk2ID0geG9yNDA5NjtcbnNyLnR5Y2hlaSA9IHR5Y2hlaTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcjtcbiIsIi8vIEEgcG9ydCBvZiBhbiBhbGdvcml0aG0gYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5jb20+LCAyMDEwXG4vLyBodHRwOi8vYmFhZ29lLmNvbS9lbi9SYW5kb21NdXNpbmdzL2phdmFzY3JpcHQvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbnF1aW5sYW4vYmV0dGVyLXJhbmRvbS1udW1iZXJzLWZvci1qYXZhc2NyaXB0LW1pcnJvclxuLy8gT3JpZ2luYWwgd29yayBpcyB1bmRlciBNSVQgbGljZW5zZSAtXG5cbi8vIENvcHlyaWdodCAoQykgMjAxMCBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLm9yZz5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gQWxlYShzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIG1hc2ggPSBNYXNoKCk7XG5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gMjA5MTYzOSAqIG1lLnMwICsgbWUuYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gICAgbWUuczAgPSBtZS5zMTtcbiAgICBtZS5zMSA9IG1lLnMyO1xuICAgIHJldHVybiBtZS5zMiA9IHQgLSAobWUuYyA9IHQgfCAwKTtcbiAgfTtcblxuICAvLyBBcHBseSB0aGUgc2VlZGluZyBhbGdvcml0aG0gZnJvbSBCYWFnb2UuXG4gIG1lLmMgPSAxO1xuICBtZS5zMCA9IG1hc2goJyAnKTtcbiAgbWUuczEgPSBtYXNoKCcgJyk7XG4gIG1lLnMyID0gbWFzaCgnICcpO1xuICBtZS5zMCAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczAgPCAwKSB7IG1lLnMwICs9IDE7IH1cbiAgbWUuczEgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMxIDwgMCkgeyBtZS5zMSArPSAxOyB9XG4gIG1lLnMyIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMiA8IDApIHsgbWUuczIgKz0gMTsgfVxuICBtYXNoID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYyA9IGYuYztcbiAgdC5zMCA9IGYuczA7XG4gIHQuczEgPSBmLnMxO1xuICB0LnMyID0gZi5zMjtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgQWxlYShzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IHhnLm5leHQ7XG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgKiAweDEwMDAwMDAwMCkgfCAwOyB9XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBybmcoKSArIChwcm5nKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjsgLy8gMl4tNTNcbiAgfTtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmZ1bmN0aW9uIE1hc2goKSB7XG4gIHZhciBuID0gMHhlZmM4MjQ5ZDtcblxuICB2YXIgbWFzaCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkYXRhID0gU3RyaW5nKGRhdGEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICB2YXIgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBoICo9IG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOyAvLyAyXjMyXG4gICAgfVxuICAgIHJldHVybiAobiA+Pj4gMCkgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICB9O1xuXG4gIHJldHVybiBtYXNoO1xufVxuXG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMuYWxlYSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwiVHljaGUtaVwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8uXG4vLyBTZWUgaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZCwgYSA9IG1lLmE7XG4gICAgYiA9IChiIDw8IDI1KSBeIChiID4+PiA3KSBeIGM7XG4gICAgYyA9IChjIC0gZCkgfCAwO1xuICAgIGQgPSAoZCA8PCAyNCkgXiAoZCA+Pj4gOCkgXiBhO1xuICAgIGEgPSAoYSAtIGIpIHwgMDtcbiAgICBtZS5iID0gYiA9IChiIDw8IDIwKSBeIChiID4+PiAxMikgXiBjO1xuICAgIG1lLmMgPSBjID0gKGMgLSBkKSB8IDA7XG4gICAgbWUuZCA9IChkIDw8IDE2KSBeIChjID4+PiAxNikgXiBhO1xuICAgIHJldHVybiBtZS5hID0gKGEgLSBiKSB8IDA7XG4gIH07XG5cbiAgLyogVGhlIGZvbGxvd2luZyBpcyBub24taW52ZXJ0ZWQgdHljaGUsIHdoaWNoIGhhcyBiZXR0ZXIgaW50ZXJuYWxcbiAgICogYml0IGRpZmZ1c2lvbiwgYnV0IHdoaWNoIGlzIGFib3V0IDI1JSBzbG93ZXIgdGhhbiB0eWNoZS1pIGluIEpTLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEgPSBtZS5hLCBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kO1xuICAgIGEgPSAobWUuYSArIG1lLmIgfCAwKSA+Pj4gMDtcbiAgICBkID0gbWUuZCBeIGE7IGQgPSBkIDw8IDE2IF4gZCA+Pj4gMTY7XG4gICAgYyA9IG1lLmMgKyBkIHwgMDtcbiAgICBiID0gbWUuYiBeIGM7IGIgPSBiIDw8IDEyIF4gZCA+Pj4gMjA7XG4gICAgbWUuYSA9IGEgPSBhICsgYiB8IDA7XG4gICAgZCA9IGQgXiBhOyBtZS5kID0gZCA9IGQgPDwgOCBeIGQgPj4+IDI0O1xuICAgIG1lLmMgPSBjID0gYyArIGQgfCAwO1xuICAgIGIgPSBiIF4gYztcbiAgICByZXR1cm4gbWUuYiA9IChiIDw8IDcgXiBiID4+PiAyNSk7XG4gIH1cbiAgKi9cblxuICBtZS5hID0gMDtcbiAgbWUuYiA9IDA7XG4gIG1lLmMgPSAyNjU0NDM1NzY5IHwgMDtcbiAgbWUuZCA9IDEzNjcxMzA1NTE7XG5cbiAgaWYgKHNlZWQgPT09IE1hdGguZmxvb3Ioc2VlZCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUuYSA9IChzZWVkIC8gMHgxMDAwMDAwMDApIHwgMDtcbiAgICBtZS5iID0gc2VlZCB8IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyAyMDsgaysrKSB7XG4gICAgbWUuYiBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5hID0gZi5hO1xuICB0LmIgPSBmLmI7XG4gIHQuYyA9IGYuYztcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMudHljaGVpID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3IxMjhcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgbWUueCA9IDA7XG4gIG1lLnkgPSAwO1xuICBtZS56ID0gMDtcbiAgbWUudyA9IDA7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gbWUueCBeIChtZS54IDw8IDExKTtcbiAgICBtZS54ID0gbWUueTtcbiAgICBtZS55ID0gbWUuejtcbiAgICBtZS56ID0gbWUudztcbiAgICByZXR1cm4gbWUudyBePSAobWUudyA+Pj4gMTkpIF4gdCBeICh0ID4+PiA4KTtcbiAgfTtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjEyOCA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgUmljaGFyZCBCcmVudCdzIFhvcmdlbnMgeG9yNDA5NiBhbGdvcml0aG0uXG4vL1xuLy8gVGhpcyBmYXN0IG5vbi1jcnlwdG9ncmFwaGljIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIGlzIGRlc2lnbmVkIGZvclxuLy8gdXNlIGluIE1vbnRlLUNhcmxvIGFsZ29yaXRobXMuIEl0IGNvbWJpbmVzIGEgbG9uZy1wZXJpb2QgeG9yc2hpZnRcbi8vIGdlbmVyYXRvciB3aXRoIGEgV2V5bCBnZW5lcmF0b3IsIGFuZCBpdCBwYXNzZXMgYWxsIGNvbW1vbiBiYXR0ZXJpZXNcbi8vIG9mIHN0YXN0aWNpYWwgdGVzdHMgZm9yIHJhbmRvbW5lc3Mgd2hpbGUgY29uc3VtaW5nIG9ubHkgYSBmZXcgbmFub3NlY29uZHNcbi8vIGZvciBlYWNoIHBybmcgZ2VuZXJhdGVkLiAgRm9yIGJhY2tncm91bmQgb24gdGhlIGdlbmVyYXRvciwgc2VlIEJyZW50J3Ncbi8vIHBhcGVyOiBcIlNvbWUgbG9uZy1wZXJpb2QgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzIHVzaW5nIHNoaWZ0cyBhbmQgeG9ycy5cIlxuLy8gaHR0cDovL2FyeGl2Lm9yZy9wZGYvMTAwNC4zMTE1djEucGRmXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHhvcjQwOTYgPSByZXF1aXJlKCd4b3I0MDk2Jyk7XG4vLyByYW5kb20gPSB4b3I0MDk2KDEpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZWQgd2l0aCBpbnQzMiBvciBzdHJpbmcuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tKCksIDAuMTUyMDQzNjQ1MDUzODU0Nyk7IC8vICgwLCAxKSByYW5nZSwgNTMgYml0cy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20uaW50MzIoKSwgMTgwNjUzNDg5Nyk7ICAgLy8gc2lnbmVkIGludDMyLCAzMiBiaXRzLlxuLy9cbi8vIEZvciBub256ZXJvIG51bWVyaWMga2V5cywgdGhpcyBpbXBlbGVtZW50YXRpb24gcHJvdmlkZXMgYSBzZXF1ZW5jZVxuLy8gaWRlbnRpY2FsIHRvIHRoYXQgYnkgQnJlbnQncyB4b3JnZW5zIDMgaW1wbGVtZW50YWlvbiBpbiBDLiAgVGhpc1xuLy8gaW1wbGVtZW50YXRpb24gYWxzbyBwcm92aWRlcyBmb3IgaW5pdGFsaXppbmcgdGhlIGdlbmVyYXRvciB3aXRoXG4vLyBzdHJpbmcgc2VlZHMsIG9yIGZvciBzYXZpbmcgYW5kIHJlc3RvcmluZyB0aGUgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci5cbi8vXG4vLyBPbiBDaHJvbWUsIHRoaXMgcHJuZyBiZW5jaG1hcmtzIGFib3V0IDIuMSB0aW1lcyBzbG93ZXIgdGhhblxuLy8gSmF2YXNjcmlwdCdzIGJ1aWx0LWluIE1hdGgucmFuZG9tKCkuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3ID0gbWUudyxcbiAgICAgICAgWCA9IG1lLlgsIGkgPSBtZS5pLCB0LCB2O1xuICAgIC8vIFVwZGF0ZSBXZXlsIGdlbmVyYXRvci5cbiAgICBtZS53ID0gdyA9ICh3ICsgMHg2MWM4ODY0NykgfCAwO1xuICAgIC8vIFVwZGF0ZSB4b3IgZ2VuZXJhdG9yLlxuICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICB2IF49IHYgPDwgMTM7XG4gICAgdCBePSB0IDw8IDE3O1xuICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgdCBePSB0ID4+PiAxMjtcbiAgICAvLyBVcGRhdGUgWG9yIGdlbmVyYXRvciBhcnJheSBzdGF0ZS5cbiAgICB2ID0gWFtpXSA9IHYgXiB0O1xuICAgIG1lLmkgPSBpO1xuICAgIC8vIFJlc3VsdCBpcyB0aGUgY29tYmluYXRpb24uXG4gICAgcmV0dXJuICh2ICsgKHcgXiAodyA+Pj4gMTYpKSkgfCAwO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgdCwgdiwgaSwgaiwgdywgWCA9IFtdLCBsaW1pdCA9IDEyODtcbiAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgLy8gTnVtZXJpYyBzZWVkcyBpbml0aWFsaXplIHYsIHdoaWNoIGlzIHVzZWQgdG8gZ2VuZXJhdGVzIFguXG4gICAgICB2ID0gc2VlZDtcbiAgICAgIHNlZWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdHJpbmcgc2VlZHMgYXJlIG1peGVkIGludG8gdiBhbmQgWCBvbmUgY2hhcmFjdGVyIGF0IGEgdGltZS5cbiAgICAgIHNlZWQgPSBzZWVkICsgJ1xcMCc7XG4gICAgICB2ID0gMDtcbiAgICAgIGxpbWl0ID0gTWF0aC5tYXgobGltaXQsIHNlZWQubGVuZ3RoKTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBjaXJjdWxhciBhcnJheSBhbmQgd2V5bCB2YWx1ZS5cbiAgICBmb3IgKGkgPSAwLCBqID0gLTMyOyBqIDwgbGltaXQ7ICsraikge1xuICAgICAgLy8gUHV0IHRoZSB1bmljb2RlIGNoYXJhY3RlcnMgaW50byB0aGUgYXJyYXksIGFuZCBzaHVmZmxlIHRoZW0uXG4gICAgICBpZiAoc2VlZCkgdiBePSBzZWVkLmNoYXJDb2RlQXQoKGogKyAzMikgJSBzZWVkLmxlbmd0aCk7XG4gICAgICAvLyBBZnRlciAzMiBzaHVmZmxlcywgdGFrZSB2IGFzIHRoZSBzdGFydGluZyB3IHZhbHVlLlxuICAgICAgaWYgKGogPT09IDApIHcgPSB2O1xuICAgICAgdiBePSB2IDw8IDEwO1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHYgXj0gdiA8PCA0O1xuICAgICAgdiBePSB2ID4+PiAxMztcbiAgICAgIGlmIChqID49IDApIHtcbiAgICAgICAgdyA9ICh3ICsgMHg2MWM4ODY0NykgfCAwOyAgICAgLy8gV2V5bC5cbiAgICAgICAgdCA9IChYW2ogJiAxMjddIF49ICh2ICsgdykpOyAgLy8gQ29tYmluZSB4b3IgYW5kIHdleWwgdG8gaW5pdCBhcnJheS5cbiAgICAgICAgaSA9ICgwID09IHQpID8gaSArIDEgOiAwOyAgICAgLy8gQ291bnQgemVyb2VzLlxuICAgICAgfVxuICAgIH1cbiAgICAvLyBXZSBoYXZlIGRldGVjdGVkIGFsbCB6ZXJvZXM7IG1ha2UgdGhlIGtleSBub256ZXJvLlxuICAgIGlmIChpID49IDEyOCkge1xuICAgICAgWFsoc2VlZCAmJiBzZWVkLmxlbmd0aCB8fCAwKSAmIDEyN10gPSAtMTtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBnZW5lcmF0b3IgNTEyIHRpbWVzIHRvIGZ1cnRoZXIgbWl4IHRoZSBzdGF0ZSBiZWZvcmUgdXNpbmcgaXQuXG4gICAgLy8gRmFjdG9yaW5nIHRoaXMgYXMgYSBmdW5jdGlvbiBzbG93cyB0aGUgbWFpbiBnZW5lcmF0b3IsIHNvIGl0IGlzIGp1c3RcbiAgICAvLyB1bnJvbGxlZCBoZXJlLiAgVGhlIHdleWwgZ2VuZXJhdG9yIGlzIG5vdCBhZHZhbmNlZCB3aGlsZSB3YXJtaW5nIHVwLlxuICAgIGkgPSAxMjc7XG4gICAgZm9yIChqID0gNCAqIDEyODsgaiA+IDA7IC0taikge1xuICAgICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgICB2IF49IHYgPDwgMTM7XG4gICAgICB0IF49IHQgPDwgMTc7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdCBePSB0ID4+PiAxMjtcbiAgICAgIFhbaV0gPSB2IF4gdDtcbiAgICB9XG4gICAgLy8gU3RvcmluZyBzdGF0ZSBhcyBvYmplY3QgbWVtYmVycyBpcyBmYXN0ZXIgdGhhbiB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcy5cbiAgICBtZS53ID0gdztcbiAgICBtZS5YID0gWDtcbiAgICBtZS5pID0gaTtcbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LncgPSBmLnc7XG4gIHQuWCA9IGYuWC5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLlgpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3I0MDk2ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdyBvYmplY3Qgb3IgZ2xvYmFsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcnNoaWZ0N1wiIGFsZ29yaXRobSBieVxuLy8gRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXI6XG4vLyBcIk9uIHRoZSBYb3Jnc2hpZnQgUmFuZG9tIE51bWJlciBHZW5lcmF0b3JzXCJcbi8vIGh0dHA6Ly9zYWx1Yy5lbmdyLnVjb25uLmVkdS9yZWZzL2NyeXB0by9ybmcvcGFubmV0b24wNW9udGhleG9yc2hpZnQucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVwZGF0ZSB4b3IgZ2VuZXJhdG9yLlxuICAgIHZhciBYID0gbWUueCwgaSA9IG1lLmksIHQsIHYsIHc7XG4gICAgdCA9IFhbaV07IHQgXj0gKHQgPj4+IDcpOyB2ID0gdCBeICh0IDw8IDI0KTtcbiAgICB0ID0gWFsoaSArIDEpICYgN107IHYgXj0gdCBeICh0ID4+PiAxMCk7XG4gICAgdCA9IFhbKGkgKyAzKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMyk7XG4gICAgdCA9IFhbKGkgKyA0KSAmIDddOyB2IF49IHQgXiAodCA8PCA3KTtcbiAgICB0ID0gWFsoaSArIDcpICYgN107IHQgPSB0IF4gKHQgPDwgMTMpOyB2IF49IHQgXiAodCA8PCA5KTtcbiAgICBYW2ldID0gdjtcbiAgICBtZS5pID0gKGkgKyAxKSAmIDc7XG4gICAgcmV0dXJuIHY7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciBqLCB3LCBYID0gW107XG5cbiAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgLy8gU2VlZCBzdGF0ZSBhcnJheSB1c2luZyBhIDMyLWJpdCBpbnRlZ2VyLlxuICAgICAgdyA9IFhbMF0gPSBzZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIHVzaW5nIGEgc3RyaW5nLlxuICAgICAgc2VlZCA9ICcnICsgc2VlZDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBzZWVkLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIFhbaiAmIDddID0gKFhbaiAmIDddIDw8IDE1KSBeXG4gICAgICAgICAgICAoc2VlZC5jaGFyQ29kZUF0KGopICsgWFsoaiArIDEpICYgN10gPDwgMTMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFbmZvcmNlIGFuIGFycmF5IGxlbmd0aCBvZiA4LCBub3QgYWxsIHplcm9lcy5cbiAgICB3aGlsZSAoWC5sZW5ndGggPCA4KSBYLnB1c2goMCk7XG4gICAgZm9yIChqID0gMDsgaiA8IDggJiYgWFtqXSA9PT0gMDsgKytqKTtcbiAgICBpZiAoaiA9PSA4KSB3ID0gWFs3XSA9IC0xOyBlbHNlIHcgPSBYW2pdO1xuXG4gICAgbWUueCA9IFg7XG4gICAgbWUuaSA9IDA7XG5cbiAgICAvLyBEaXNjYXJkIGFuIGluaXRpYWwgMjU2IHZhbHVlcy5cbiAgICBmb3IgKGogPSAyNTY7IGogPiAwOyAtLWopIHtcbiAgICAgIG1lLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueC5zbGljZSgpO1xuICB0LmkgPSBmLmk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS54KSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yc2hpZnQ3ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yd293XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IChtZS54IF4gKG1lLnggPj4+IDIpKTtcbiAgICBtZS54ID0gbWUueTsgbWUueSA9IG1lLno7IG1lLnogPSBtZS53OyBtZS53ID0gbWUudjtcbiAgICByZXR1cm4gKG1lLmQgPSAobWUuZCArIDM2MjQzNyB8IDApKSArXG4gICAgICAgKG1lLnYgPSAobWUudiBeIChtZS52IDw8IDQpKSBeICh0IF4gKHQgPDwgMSkpKSB8IDA7XG4gIH07XG5cbiAgbWUueCA9IDA7XG4gIG1lLnkgPSAwO1xuICBtZS56ID0gMDtcbiAgbWUudyA9IDA7XG4gIG1lLnYgPSAwO1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBpZiAoayA9PSBzdHJzZWVkLmxlbmd0aCkge1xuICAgICAgbWUuZCA9IG1lLnggPDwgMTAgXiBtZS54ID4+PiA0O1xuICAgIH1cbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgdC52ID0gZi52O1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcndvdyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLypcbkNvcHlyaWdodCAyMDE5IERhdmlkIEJhdS5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG5JTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcblRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG5TT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIHBvb2wsIG1hdGgpIHtcbi8vXG4vLyBUaGUgZm9sbG93aW5nIGNvbnN0YW50cyBhcmUgcmVsYXRlZCB0byBJRUVFIDc1NCBsaW1pdHMuXG4vL1xuXG52YXIgd2lkdGggPSAyNTYsICAgICAgICAvLyBlYWNoIFJDNCBvdXRwdXQgaXMgMCA8PSB4IDwgMjU2XG4gICAgY2h1bmtzID0gNiwgICAgICAgICAvLyBhdCBsZWFzdCBzaXggUkM0IG91dHB1dHMgZm9yIGVhY2ggZG91YmxlXG4gICAgZGlnaXRzID0gNTIsICAgICAgICAvLyB0aGVyZSBhcmUgNTIgc2lnbmlmaWNhbnQgZGlnaXRzIGluIGEgZG91YmxlXG4gICAgcm5nbmFtZSA9ICdyYW5kb20nLCAvLyBybmduYW1lOiBuYW1lIGZvciBNYXRoLnJhbmRvbSBhbmQgTWF0aC5zZWVkcmFuZG9tXG4gICAgc3RhcnRkZW5vbSA9IG1hdGgucG93KHdpZHRoLCBjaHVua3MpLFxuICAgIHNpZ25pZmljYW5jZSA9IG1hdGgucG93KDIsIGRpZ2l0cyksXG4gICAgb3ZlcmZsb3cgPSBzaWduaWZpY2FuY2UgKiAyLFxuICAgIG1hc2sgPSB3aWR0aCAtIDEsXG4gICAgbm9kZWNyeXB0bzsgICAgICAgICAvLyBub2RlLmpzIGNyeXB0byBtb2R1bGUsIGluaXRpYWxpemVkIGF0IHRoZSBib3R0b20uXG5cbi8vXG4vLyBzZWVkcmFuZG9tKClcbi8vIFRoaXMgaXMgdGhlIHNlZWRyYW5kb20gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLlxuLy9cbmZ1bmN0aW9uIHNlZWRyYW5kb20oc2VlZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGtleSA9IFtdO1xuICBvcHRpb25zID0gKG9wdGlvbnMgPT0gdHJ1ZSkgPyB7IGVudHJvcHk6IHRydWUgfSA6IChvcHRpb25zIHx8IHt9KTtcblxuICAvLyBGbGF0dGVuIHRoZSBzZWVkIHN0cmluZyBvciBidWlsZCBvbmUgZnJvbSBsb2NhbCBlbnRyb3B5IGlmIG5lZWRlZC5cbiAgdmFyIHNob3J0c2VlZCA9IG1peGtleShmbGF0dGVuKFxuICAgIG9wdGlvbnMuZW50cm9weSA/IFtzZWVkLCB0b3N0cmluZyhwb29sKV0gOlxuICAgIChzZWVkID09IG51bGwpID8gYXV0b3NlZWQoKSA6IHNlZWQsIDMpLCBrZXkpO1xuXG4gIC8vIFVzZSB0aGUgc2VlZCB0byBpbml0aWFsaXplIGFuIEFSQzQgZ2VuZXJhdG9yLlxuICB2YXIgYXJjNCA9IG5ldyBBUkM0KGtleSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgcmFuZG9tIGRvdWJsZSBpbiBbMCwgMSkgdGhhdCBjb250YWluc1xuICAvLyByYW5kb21uZXNzIGluIGV2ZXJ5IGJpdCBvZiB0aGUgbWFudGlzc2Egb2YgdGhlIElFRUUgNzU0IHZhbHVlLlxuICB2YXIgcHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gYXJjNC5nKGNodW5rcyksICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBudW1lcmF0b3IgbiA8IDIgXiA0OFxuICAgICAgICBkID0gc3RhcnRkZW5vbSwgICAgICAgICAgICAgICAgIC8vICAgYW5kIGRlbm9taW5hdG9yIGQgPSAyIF4gNDguXG4gICAgICAgIHggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbmQgbm8gJ2V4dHJhIGxhc3QgYnl0ZScuXG4gICAgd2hpbGUgKG4gPCBzaWduaWZpY2FuY2UpIHsgICAgICAgICAgLy8gRmlsbCB1cCBhbGwgc2lnbmlmaWNhbnQgZGlnaXRzIGJ5XG4gICAgICBuID0gKG4gKyB4KSAqIHdpZHRoOyAgICAgICAgICAgICAgLy8gICBzaGlmdGluZyBudW1lcmF0b3IgYW5kXG4gICAgICBkICo9IHdpZHRoOyAgICAgICAgICAgICAgICAgICAgICAgLy8gICBkZW5vbWluYXRvciBhbmQgZ2VuZXJhdGluZyBhXG4gICAgICB4ID0gYXJjNC5nKDEpOyAgICAgICAgICAgICAgICAgICAgLy8gICBuZXcgbGVhc3Qtc2lnbmlmaWNhbnQtYnl0ZS5cbiAgICB9XG4gICAgd2hpbGUgKG4gPj0gb3ZlcmZsb3cpIHsgICAgICAgICAgICAgLy8gVG8gYXZvaWQgcm91bmRpbmcgdXAsIGJlZm9yZSBhZGRpbmdcbiAgICAgIG4gLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGxhc3QgYnl0ZSwgc2hpZnQgZXZlcnl0aGluZ1xuICAgICAgZCAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmlnaHQgdXNpbmcgaW50ZWdlciBtYXRoIHVudGlsXG4gICAgICB4ID4+Pj0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGV4YWN0bHkgdGhlIGRlc2lyZWQgYml0cy5cbiAgICB9XG4gICAgcmV0dXJuIChuICsgeCkgLyBkOyAgICAgICAgICAgICAgICAgLy8gRm9ybSB0aGUgbnVtYmVyIHdpdGhpbiBbMCwgMSkuXG4gIH07XG5cbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIHwgMDsgfVxuICBwcm5nLnF1aWNrID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgLyAweDEwMDAwMDAwMDsgfVxuICBwcm5nLmRvdWJsZSA9IHBybmc7XG5cbiAgLy8gTWl4IHRoZSByYW5kb21uZXNzIGludG8gYWNjdW11bGF0ZWQgZW50cm9weS5cbiAgbWl4a2V5KHRvc3RyaW5nKGFyYzQuUyksIHBvb2wpO1xuXG4gIC8vIENhbGxpbmcgY29udmVudGlvbjogd2hhdCB0byByZXR1cm4gYXMgYSBmdW5jdGlvbiBvZiBwcm5nLCBzZWVkLCBpc19tYXRoLlxuICByZXR1cm4gKG9wdGlvbnMucGFzcyB8fCBjYWxsYmFjayB8fFxuICAgICAgZnVuY3Rpb24ocHJuZywgc2VlZCwgaXNfbWF0aF9jYWxsLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAvLyBMb2FkIHRoZSBhcmM0IHN0YXRlIGZyb20gdGhlIGdpdmVuIHN0YXRlIGlmIGl0IGhhcyBhbiBTIGFycmF5LlxuICAgICAgICAgIGlmIChzdGF0ZS5TKSB7IGNvcHkoc3RhdGUsIGFyYzQpOyB9XG4gICAgICAgICAgLy8gT25seSBwcm92aWRlIHRoZSAuc3RhdGUgbWV0aG9kIGlmIHJlcXVlc3RlZCB2aWEgb3B0aW9ucy5zdGF0ZS5cbiAgICAgICAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KGFyYzQsIHt9KTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY2FsbGVkIGFzIGEgbWV0aG9kIG9mIE1hdGggKE1hdGguc2VlZHJhbmRvbSgpKSwgbXV0YXRlXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIGJlY2F1c2UgdGhhdCBpcyBob3cgc2VlZHJhbmRvbS5qcyBoYXMgd29ya2VkIHNpbmNlIHYxLjAuXG4gICAgICAgIGlmIChpc19tYXRoX2NhbGwpIHsgbWF0aFtybmduYW1lXSA9IHBybmc7IHJldHVybiBzZWVkOyB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyBhIG5ld2VyIGNhbGxpbmcgY29udmVudGlvbiwgc28gcmV0dXJuIHRoZVxuICAgICAgICAvLyBwcm5nIGRpcmVjdGx5LlxuICAgICAgICBlbHNlIHJldHVybiBwcm5nO1xuICAgICAgfSkoXG4gIHBybmcsXG4gIHNob3J0c2VlZCxcbiAgJ2dsb2JhbCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuZ2xvYmFsIDogKHRoaXMgPT0gbWF0aCksXG4gIG9wdGlvbnMuc3RhdGUpO1xufVxuXG4vL1xuLy8gQVJDNFxuLy9cbi8vIEFuIEFSQzQgaW1wbGVtZW50YXRpb24uICBUaGUgY29uc3RydWN0b3IgdGFrZXMgYSBrZXkgaW4gdGhlIGZvcm0gb2Zcbi8vIGFuIGFycmF5IG9mIGF0IG1vc3QgKHdpZHRoKSBpbnRlZ2VycyB0aGF0IHNob3VsZCBiZSAwIDw9IHggPCAod2lkdGgpLlxuLy9cbi8vIFRoZSBnKGNvdW50KSBtZXRob2QgcmV0dXJucyBhIHBzZXVkb3JhbmRvbSBpbnRlZ2VyIHRoYXQgY29uY2F0ZW5hdGVzXG4vLyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgZnJvbSBBUkM0LiAgSXRzIHJldHVybiB2YWx1ZSBpcyBhIG51bWJlciB4XG4vLyB0aGF0IGlzIGluIHRoZSByYW5nZSAwIDw9IHggPCAod2lkdGggXiBjb3VudCkuXG4vL1xuZnVuY3Rpb24gQVJDNChrZXkpIHtcbiAgdmFyIHQsIGtleWxlbiA9IGtleS5sZW5ndGgsXG4gICAgICBtZSA9IHRoaXMsIGkgPSAwLCBqID0gbWUuaSA9IG1lLmogPSAwLCBzID0gbWUuUyA9IFtdO1xuXG4gIC8vIFRoZSBlbXB0eSBrZXkgW10gaXMgdHJlYXRlZCBhcyBbMF0uXG4gIGlmICgha2V5bGVuKSB7IGtleSA9IFtrZXlsZW4rK107IH1cblxuICAvLyBTZXQgdXAgUyB1c2luZyB0aGUgc3RhbmRhcmQga2V5IHNjaGVkdWxpbmcgYWxnb3JpdGhtLlxuICB3aGlsZSAoaSA8IHdpZHRoKSB7XG4gICAgc1tpXSA9IGkrKztcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyBrZXlbaSAlIGtleWxlbl0gKyAodCA9IHNbaV0pKV07XG4gICAgc1tqXSA9IHQ7XG4gIH1cblxuICAvLyBUaGUgXCJnXCIgbWV0aG9kIHJldHVybnMgdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGFzIG9uZSBudW1iZXIuXG4gIChtZS5nID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAvLyBVc2luZyBpbnN0YW5jZSBtZW1iZXJzIGluc3RlYWQgb2YgY2xvc3VyZSBzdGF0ZSBuZWFybHkgZG91YmxlcyBzcGVlZC5cbiAgICB2YXIgdCwgciA9IDAsXG4gICAgICAgIGkgPSBtZS5pLCBqID0gbWUuaiwgcyA9IG1lLlM7XG4gICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgIHQgPSBzW2kgPSBtYXNrICYgKGkgKyAxKV07XG4gICAgICByID0gciAqIHdpZHRoICsgc1ttYXNrICYgKChzW2ldID0gc1tqID0gbWFzayAmIChqICsgdCldKSArIChzW2pdID0gdCkpXTtcbiAgICB9XG4gICAgbWUuaSA9IGk7IG1lLmogPSBqO1xuICAgIHJldHVybiByO1xuICAgIC8vIEZvciByb2J1c3QgdW5wcmVkaWN0YWJpbGl0eSwgdGhlIGZ1bmN0aW9uIGNhbGwgYmVsb3cgYXV0b21hdGljYWxseVxuICAgIC8vIGRpc2NhcmRzIGFuIGluaXRpYWwgYmF0Y2ggb2YgdmFsdWVzLiAgVGhpcyBpcyBjYWxsZWQgUkM0LWRyb3BbMjU2XS5cbiAgICAvLyBTZWUgaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9cnNhK2ZsdWhyZXIrcmVzcG9uc2UmYnRuSVxuICB9KSh3aWR0aCk7XG59XG5cbi8vXG4vLyBjb3B5KClcbi8vIENvcGllcyBpbnRlcm5hbCBzdGF0ZSBvZiBBUkM0IHRvIG9yIGZyb20gYSBwbGFpbiBvYmplY3QuXG4vL1xuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC5qID0gZi5qO1xuICB0LlMgPSBmLlMuc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG4vL1xuLy8gZmxhdHRlbigpXG4vLyBDb252ZXJ0cyBhbiBvYmplY3QgdHJlZSB0byBuZXN0ZWQgYXJyYXlzIG9mIHN0cmluZ3MuXG4vL1xuZnVuY3Rpb24gZmxhdHRlbihvYmosIGRlcHRoKSB7XG4gIHZhciByZXN1bHQgPSBbXSwgdHlwID0gKHR5cGVvZiBvYmopLCBwcm9wO1xuICBpZiAoZGVwdGggJiYgdHlwID09ICdvYmplY3QnKSB7XG4gICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgdHJ5IHsgcmVzdWx0LnB1c2goZmxhdHRlbihvYmpbcHJvcF0sIGRlcHRoIC0gMSkpOyB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuICByZXR1cm4gKHJlc3VsdC5sZW5ndGggPyByZXN1bHQgOiB0eXAgPT0gJ3N0cmluZycgPyBvYmogOiBvYmogKyAnXFwwJyk7XG59XG5cbi8vXG4vLyBtaXhrZXkoKVxuLy8gTWl4ZXMgYSBzdHJpbmcgc2VlZCBpbnRvIGEga2V5IHRoYXQgaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMsIGFuZFxuLy8gcmV0dXJucyBhIHNob3J0ZW5lZCBzdHJpbmcgc2VlZCB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHJlc3VsdCBrZXkuXG4vL1xuZnVuY3Rpb24gbWl4a2V5KHNlZWQsIGtleSkge1xuICB2YXIgc3RyaW5nc2VlZCA9IHNlZWQgKyAnJywgc21lYXIsIGogPSAwO1xuICB3aGlsZSAoaiA8IHN0cmluZ3NlZWQubGVuZ3RoKSB7XG4gICAga2V5W21hc2sgJiBqXSA9XG4gICAgICBtYXNrICYgKChzbWVhciBePSBrZXlbbWFzayAmIGpdICogMTkpICsgc3RyaW5nc2VlZC5jaGFyQ29kZUF0KGorKykpO1xuICB9XG4gIHJldHVybiB0b3N0cmluZyhrZXkpO1xufVxuXG4vL1xuLy8gYXV0b3NlZWQoKVxuLy8gUmV0dXJucyBhbiBvYmplY3QgZm9yIGF1dG9zZWVkaW5nLCB1c2luZyB3aW5kb3cuY3J5cHRvIGFuZCBOb2RlIGNyeXB0b1xuLy8gbW9kdWxlIGlmIGF2YWlsYWJsZS5cbi8vXG5mdW5jdGlvbiBhdXRvc2VlZCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3V0O1xuICAgIGlmIChub2RlY3J5cHRvICYmIChvdXQgPSBub2RlY3J5cHRvLnJhbmRvbUJ5dGVzKSkge1xuICAgICAgLy8gVGhlIHVzZSBvZiAnb3V0JyB0byByZW1lbWJlciByYW5kb21CeXRlcyBtYWtlcyB0aWdodCBtaW5pZmllZCBjb2RlLlxuICAgICAgb3V0ID0gb3V0KHdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ID0gbmV3IFVpbnQ4QXJyYXkod2lkdGgpO1xuICAgICAgKGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMob3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRvc3RyaW5nKG91dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgYnJvd3NlciA9IGdsb2JhbC5uYXZpZ2F0b3IsXG4gICAgICAgIHBsdWdpbnMgPSBicm93c2VyICYmIGJyb3dzZXIucGx1Z2lucztcbiAgICByZXR1cm4gWytuZXcgRGF0ZSwgZ2xvYmFsLCBwbHVnaW5zLCBnbG9iYWwuc2NyZWVuLCB0b3N0cmluZyhwb29sKV07XG4gIH1cbn1cblxuLy9cbi8vIHRvc3RyaW5nKClcbi8vIENvbnZlcnRzIGFuIGFycmF5IG9mIGNoYXJjb2RlcyB0byBhIHN0cmluZ1xuLy9cbmZ1bmN0aW9uIHRvc3RyaW5nKGEpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoMCwgYSk7XG59XG5cbi8vXG4vLyBXaGVuIHNlZWRyYW5kb20uanMgaXMgbG9hZGVkLCB3ZSBpbW1lZGlhdGVseSBtaXggYSBmZXcgYml0c1xuLy8gZnJvbSB0aGUgYnVpbHQtaW4gUk5HIGludG8gdGhlIGVudHJvcHkgcG9vbC4gIEJlY2F1c2Ugd2UgZG9cbi8vIG5vdCB3YW50IHRvIGludGVyZmVyZSB3aXRoIGRldGVybWluaXN0aWMgUFJORyBzdGF0ZSBsYXRlcixcbi8vIHNlZWRyYW5kb20gd2lsbCBub3QgY2FsbCBtYXRoLnJhbmRvbSBvbiBpdHMgb3duIGFnYWluIGFmdGVyXG4vLyBpbml0aWFsaXphdGlvbi5cbi8vXG5taXhrZXkobWF0aC5yYW5kb20oKSwgcG9vbCk7XG5cbi8vXG4vLyBOb2RlanMgYW5kIEFNRCBzdXBwb3J0OiBleHBvcnQgdGhlIGltcGxlbWVudGF0aW9uIGFzIGEgbW9kdWxlIHVzaW5nXG4vLyBlaXRoZXIgY29udmVudGlvbi5cbi8vXG5pZiAoKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gc2VlZHJhbmRvbTtcbiAgLy8gV2hlbiBpbiBub2RlLmpzLCB0cnkgdXNpbmcgY3J5cHRvIHBhY2thZ2UgZm9yIGF1dG9zZWVkaW5nLlxuICB0cnkge1xuICAgIG5vZGVjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgfSBjYXRjaCAoZXgpIHt9XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VlZHJhbmRvbTsgfSk7XG59IGVsc2Uge1xuICAvLyBXaGVuIGluY2x1ZGVkIGFzIGEgcGxhaW4gc2NyaXB0LCBzZXQgdXAgTWF0aC5zZWVkcmFuZG9tIGdsb2JhbC5cbiAgbWF0aFsnc2VlZCcgKyBybmduYW1lXSA9IHNlZWRyYW5kb207XG59XG5cblxuLy8gRW5kIGFub255bW91cyBzY29wZSwgYW5kIHBhc3MgaW5pdGlhbCB2YWx1ZXMuXG59KShcbiAgLy8gZ2xvYmFsOiBgc2VsZmAgaW4gYnJvd3NlcnMgKGluY2x1ZGluZyBzdHJpY3QgbW9kZSBhbmQgd2ViIHdvcmtlcnMpLFxuICAvLyBvdGhlcndpc2UgYHRoaXNgIGluIE5vZGUgYW5kIG90aGVyIGVudmlyb25tZW50c1xuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSA/IHNlbGYgOiB0aGlzLFxuICBbXSwgICAgIC8vIHBvb2w6IGVudHJvcHkgcG9vbCBzdGFydHMgZW1wdHlcbiAgTWF0aCAgICAvLyBtYXRoOiBwYWNrYWdlIGNvbnRhaW5pbmcgcmFuZG9tLCBwb3csIGFuZCBzZWVkcmFuZG9tXG4pO1xuIiwiaW1wb3J0ICogYXMgZ2VvbWV0cmljIGZyb20gXCJnZW9tZXRyaWNcIjtcclxuaW1wb3J0IHJhbmRvbSBmcm9tIFwicmFuZG9tXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZm9ybUV4aXN0aW5nUG9seWdvbiA9IChwb2x5Z29uOiBnZW9tZXRyaWMuUG9seWdvbiwgcm91bmRzOiBudW1iZXIsIHNwbGl0OiBib29sZWFuLCBnYXVzc2lhbk11bHRpcGxpZXI6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3VuZHM7IGkrKykge1xyXG4gICAgICAgICAgICBwb2x5Z29uID0gZGVmb3JtKHBvbHlnb24sIGdhdXNzaWFuTXVsdGlwbGllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwb2x5Z29uID0gZGVmb3JtTm9TcGxpdChwb2x5Z29uLCBnYXVzc2lhbk11bHRpcGxpZXIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9seWdvbjtcclxufVxyXG5cclxuY29uc3QgcmFuZG9tR2F1c3NpYW4gPSAoZ2F1c3NpYW5NdWx0aXBsaWVyOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHJhbmQgPSByYW5kb20ubm9ybWFsKCk7XHJcbiAgICByZXR1cm4gcmFuZCgpICogZ2F1c3NpYW5NdWx0aXBsaWVyO1xyXG59XHJcblxyXG5jb25zdCBkZWZvcm0gPSAocG9seWdvbjogZ2VvbWV0cmljLlBvbHlnb24sIG11bHRpcDogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgc3RhcnQgPSBwb2x5Z29uWzBdO1xyXG4gICAgbGV0IG5ld1BvbCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBwb2x5Z29uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgICAgIGxldCBlbmQgPSBwb2x5Z29uW2ldO1xyXG5cclxuICAgICAgICBsZXQgbWlkcG9pbnQgPSBnZW9tZXRyaWMubGluZU1pZHBvaW50KFtzdGFydCwgZW5kXSk7XHJcblxyXG4gICAgICAgIG5ld1BvbC5wdXNoKFttaWRwb2ludFswXSArIHJhbmRvbUdhdXNzaWFuKG11bHRpcCksIG1pZHBvaW50WzFdICsgcmFuZG9tR2F1c3NpYW4obXVsdGlwKV0pO1xyXG4gICAgICAgIG5ld1BvbC5wdXNoKGVuZCk7XHJcblxyXG4gICAgICAgIHN0YXJ0ID0gZW5kO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld1BvbDtcclxufVxyXG5cclxuLy9Ob3RlOiBtb2RpZmllcyBleGlzdGluZy4gXHJcbmNvbnN0IGRlZm9ybU5vU3BsaXQgPSAocG9seWdvbjogZ2VvbWV0cmljLlBvbHlnb24sIG11bHRpcDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHBvbHlnb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcbiAgICAgICAgbGV0IHBvaW50ID0gcG9seWdvbltpXTtcclxuXHJcbiAgICAgICAgcG9seWdvbltpXSA9IFtwb2ludFswXSArIHJhbmRvbUdhdXNzaWFuKG11bHRpcCksIHBvaW50WzFdICsgcmFuZG9tR2F1c3NpYW4obXVsdGlwKV1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9seWdvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZm9ybWVkUG9seWdvbiA9IChzaWRlczogbnVtYmVyLCBhcmVhOiBudW1iZXIsIGNlbnRlcjogW251bWJlciwgbnVtYmVyXSwgZGVmb3JtYXRpb25Sb3VuZHM6IG51bWJlciwgbXVsdGlwOiBudW1iZXIpID0+IHtcclxuXHJcblxyXG4gICAgbGV0IHBvbHlnb24gPSBnZW9tZXRyaWMucG9seWdvblJlZ3VsYXIoc2lkZXMsIGFyZWEsIGNlbnRlcik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZvcm1hdGlvblJvdW5kczsgaSsrKSB7XHJcbiAgICAgICAgcG9seWdvbiA9IGRlZm9ybShwb2x5Z29uLCBtdWx0aXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwb2x5Z29uO1xyXG5cclxufSIsIi8qIChpZ25vcmVkKSAqLyIsImltcG9ydCBzZWVkcmFuZG9tIGZyb20gJ3NlZWRyYW5kb20nO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cblxudmFyIFJORyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJORygpIHt9XG4gIHZhciBfcHJvdG8gPSBSTkcucHJvdG90eXBlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIF9wcm90by5fc2VlZCA9IGZ1bmN0aW9uIF9zZWVkKHNlZWQsIF9vcHRzKSB7XG4gICAgLy8gVE9ETzogYWRkIGVudHJvcHkgYW5kIHN0dWZmXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHx8IDApKSB7XG4gICAgICByZXR1cm4gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0clNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICB2YXIgcyA9IDA7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHN0clNlZWQubGVuZ3RoOyArK2spIHtcbiAgICAgICAgcyBePSBzdHJTZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9O1xuICByZXR1cm4gUk5HO1xufSgpO1xuXG52YXIgUk5HRnVuY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9STkcpIHtcbiAgX2luaGVyaXRzTG9vc2UoUk5HRnVuY3Rpb24sIF9STkcpO1xuICBmdW5jdGlvbiBSTkdGdW5jdGlvbih0aHVuaywgb3B0cykge1xuICAgIHZhciBfdGhpcztcbiAgICBfdGhpcyA9IF9STkcuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9ybmcgPSB2b2lkIDA7XG4gICAgX3RoaXMuc2VlZCh0aHVuaywgb3B0cyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHZhciBfcHJvdG8gPSBSTkdGdW5jdGlvbi5wcm90b3R5cGU7XG4gIF9wcm90by5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm5nKCk7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICA7XG4gIF9wcm90by5zZWVkID0gZnVuY3Rpb24gc2VlZCh0aHVuaywgX29wdHMpIHtcbiAgICB0aGlzLl9ybmcgPSB0aHVuaztcbiAgfTtcbiAgX3Byb3RvLmNsb25lID0gZnVuY3Rpb24gY2xvbmUoXywgb3B0cykge1xuICAgIHJldHVybiBuZXcgUk5HRnVuY3Rpb24odGhpcy5fcm5nLCBvcHRzKTtcbiAgfTtcbiAgX2NyZWF0ZUNsYXNzKFJOR0Z1bmN0aW9uLCBbe1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJOR0Z1bmN0aW9uO1xufShSTkcpO1xuXG4vKipcclxuICogQ29uc3RydWN0IGFuIFJORyB3aXRoIHZhcmlhYmxlIGlucHV0cy4gVXNlZCBpbiBjYWxscyB0byBSYW5kb20gY29uc3RydWN0b3JcclxuICogQHBhcmFtIHsuLi4qfSBhcmdzIC0gRGlzdHJpYnV0aW9uLXNwZWNpZmljIGFyZ3VtZW50c1xyXG4gKiBAcmV0dXJuIFJOR1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBuZXcgUmFuZG9tKFJOR0ZhY3RvcnkoLi4uYXJncykpXHJcbiAqL1xudmFyIFJOR0ZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIF9hcmdzID0gYXJncyxcbiAgICBfYXJncyQgPSBfYXJnc1swXSxcbiAgICBhcmcwID0gX2FyZ3MkID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfYXJncyQ7XG4gIHN3aXRjaCAodHlwZW9mIGFyZzApIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKGFyZzAgaW5zdGFuY2VvZiBSTkcpIHtcbiAgICAgICAgcmV0dXJuIGFyZzA7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gbmV3IFJOR0Z1bmN0aW9uKGFyZzApO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBSTkdGdW5jdGlvbihzZWVkcmFuZG9tLmFwcGx5KHZvaWQgMCwgYXJncykpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgUk5HIFxcXCJcIiArIGFyZzAgKyBcIlxcXCJcIik7XG59KTtcblxudmFyIHVuaWZvcm0gPSAoZnVuY3Rpb24gKHJhbmRvbSwgbWluLCBtYXgpIHtcbiAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7XG4gICAgbWluID0gMDtcbiAgfVxuICBpZiAobWF4ID09PSB2b2lkIDApIHtcbiAgICBtYXggPSAxO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJhbmRvbS5uZXh0KCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBudW1iZXJWYWxpZGF0b3IobnVtKSB7XG4gIHJldHVybiBuZXcgTnVtYmVyVmFsaWRhdG9yKG51bSk7XG59XG52YXIgTnVtYmVyVmFsaWRhdG9yID0gZnVuY3Rpb24gTnVtYmVyVmFsaWRhdG9yKG51bSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB0aGlzLm4gPSB2b2lkIDA7XG4gIHRoaXMuaXNJbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoX3RoaXMubikpIHtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbnVtYmVyIHRvIGJlIGFuIGludGVnZXIsIGdvdCBcIiArIF90aGlzLm4pO1xuICB9O1xuICB0aGlzLmlzUG9zaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF90aGlzLm4gPiAwKSB7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG51bWJlciB0byBiZSBwb3NpdGl2ZSwgZ290IFwiICsgX3RoaXMubik7XG4gIH07XG4gIHRoaXMubGVzc1RoYW4gPSBmdW5jdGlvbiAodikge1xuICAgIGlmIChfdGhpcy5uIDwgdikge1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBudW1iZXIgdG8gYmUgbGVzcyB0aGFuIFwiICsgdiArIFwiLCBnb3QgXCIgKyBfdGhpcy5uKTtcbiAgfTtcbiAgdGhpcy5ncmVhdGVyVGhhbk9yRXF1YWwgPSBmdW5jdGlvbiAodikge1xuICAgIGlmIChfdGhpcy5uID49IHYpIHtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbnVtYmVyIHRvIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBcIiArIHYgKyBcIiwgZ290IFwiICsgX3RoaXMubik7XG4gIH07XG4gIHRoaXMuZ3JlYXRlclRoYW4gPSBmdW5jdGlvbiAodikge1xuICAgIGlmIChfdGhpcy5uID4gdikge1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBudW1iZXIgdG8gYmUgZ3JlYXRlciB0aGFuIFwiICsgdiArIFwiLCBnb3QgXCIgKyBfdGhpcy5uKTtcbiAgfTtcbiAgdGhpcy5uID0gbnVtO1xufTtcblxudmFyIHVuaWZvcm1JbnQgPSAoZnVuY3Rpb24gKHJhbmRvbSwgbWluLCBtYXgpIHtcbiAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7XG4gICAgbWluID0gMDtcbiAgfVxuICBpZiAobWF4ID09PSB2b2lkIDApIHtcbiAgICBtYXggPSAxO1xuICB9XG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgIG1heCA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMSA6IG1pbjtcbiAgICBtaW4gPSAwO1xuICB9XG4gIG51bWJlclZhbGlkYXRvcihtaW4pLmlzSW50KCk7XG4gIG51bWJlclZhbGlkYXRvcihtYXgpLmlzSW50KCk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tLm5leHQoKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gIH07XG59KTtcblxudmFyIHVuaWZvcm1Cb29sZWFuID0gKGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFuZG9tLm5leHQoKSA+PSAwLjU7XG4gIH07XG59KTtcblxudmFyIG5vcm1hbCA9IChmdW5jdGlvbiAocmFuZG9tLCBtdSwgc2lnbWEpIHtcbiAgaWYgKG11ID09PSB2b2lkIDApIHtcbiAgICBtdSA9IDA7XG4gIH1cbiAgaWYgKHNpZ21hID09PSB2b2lkIDApIHtcbiAgICBzaWdtYSA9IDE7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeCwgeSwgcjtcbiAgICBkbyB7XG4gICAgICB4ID0gcmFuZG9tLm5leHQoKSAqIDIgLSAxO1xuICAgICAgeSA9IHJhbmRvbS5uZXh0KCkgKiAyIC0gMTtcbiAgICAgIHIgPSB4ICogeCArIHkgKiB5O1xuICAgIH0gd2hpbGUgKCFyIHx8IHIgPiAxKTtcbiAgICByZXR1cm4gbXUgKyBzaWdtYSAqIHkgKiBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhyKSAvIHIpO1xuICB9O1xufSk7XG5cbnZhciBsb2dOb3JtYWwgPSAoZnVuY3Rpb24gKHJhbmRvbSwgbXUsIHNpZ21hKSB7XG4gIGlmIChtdSA9PT0gdm9pZCAwKSB7XG4gICAgbXUgPSAwO1xuICB9XG4gIGlmIChzaWdtYSA9PT0gdm9pZCAwKSB7XG4gICAgc2lnbWEgPSAxO1xuICB9XG4gIHZhciBub3JtYWwgPSByYW5kb20ubm9ybWFsKG11LCBzaWdtYSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguZXhwKG5vcm1hbCgpKTtcbiAgfTtcbn0pO1xuXG52YXIgYmVybm91bGxpID0gKGZ1bmN0aW9uIChyYW5kb20sIHApIHtcbiAgaWYgKHAgPT09IHZvaWQgMCkge1xuICAgIHAgPSAwLjU7XG4gIH1cbiAgbnVtYmVyVmFsaWRhdG9yKHApLmdyZWF0ZXJUaGFuT3JFcXVhbCgwKS5sZXNzVGhhbigxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20ubmV4dCgpICsgcCk7XG4gIH07XG59KTtcblxudmFyIGJpbm9taWFsID0gKGZ1bmN0aW9uIChyYW5kb20sIG4sIHApIHtcbiAgaWYgKG4gPT09IHZvaWQgMCkge1xuICAgIG4gPSAxO1xuICB9XG4gIGlmIChwID09PSB2b2lkIDApIHtcbiAgICBwID0gMC41O1xuICB9XG4gIG51bWJlclZhbGlkYXRvcihuKS5pc0ludCgpLmlzUG9zaXRpdmUoKTtcbiAgbnVtYmVyVmFsaWRhdG9yKHApLmdyZWF0ZXJUaGFuT3JFcXVhbCgwKS5sZXNzVGhhbigxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHggPSAwO1xuICAgIHdoaWxlIChpKysgPCBuKSB7XG4gICAgICBpZiAocmFuZG9tLm5leHQoKSA8IHApIHtcbiAgICAgICAgeCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbiAgfTtcbn0pO1xuXG52YXIgZ2VvbWV0cmljID0gKGZ1bmN0aW9uIChyYW5kb20sIHApIHtcbiAgaWYgKHAgPT09IHZvaWQgMCkge1xuICAgIHAgPSAwLjU7XG4gIH1cbiAgbnVtYmVyVmFsaWRhdG9yKHApLmdyZWF0ZXJUaGFuKDApLmxlc3NUaGFuKDEpO1xuICB2YXIgaW52TG9nUCA9IDEuMCAvIE1hdGgubG9nKDEuMCAtIHApO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDEgKyBNYXRoLmxvZyhyYW5kb20ubmV4dCgpKSAqIGludkxvZ1ApO1xuICB9O1xufSk7XG5cbnZhciBsb2dGYWN0b3JpYWxUYWJsZSA9IFswLjAsIDAuMCwgMC42OTMxNDcxODA1NTk5NDUyOSwgMS43OTE3NTk0NjkyMjgwNTUsIDMuMTc4MDUzODMwMzQ3OTQ1OCwgNC43ODc0OTE3NDI3ODIwNDU4LCA2LjU3OTI1MTIxMjAxMDEwMTIsIDguNTI1MTYxMzYxMDY1NDE0NywgMTAuNjA0NjAyOTAyNzQ1MjUxLCAxMi44MDE4Mjc0ODAwODE0NjldO1xudmFyIGxvZ0ZhY3RvcmlhbCA9IGZ1bmN0aW9uIGxvZ0ZhY3RvcmlhbChrKSB7XG4gIHJldHVybiBsb2dGYWN0b3JpYWxUYWJsZVtrXTtcbn07XG52YXIgbG9nU3FydDJQSSA9IDAuOTE4OTM4NTMzMjA0NjcyNjc7XG52YXIgcG9pc3NvbiA9IChmdW5jdGlvbiAocmFuZG9tLCBsYW1iZGEpIHtcbiAgaWYgKGxhbWJkYSA9PT0gdm9pZCAwKSB7XG4gICAgbGFtYmRhID0gMTtcbiAgfVxuICBudW1iZXJWYWxpZGF0b3IobGFtYmRhKS5pc1Bvc2l0aXZlKCk7XG4gIGlmIChsYW1iZGEgPCAxMCkge1xuICAgIC8vIGludmVyc2lvbiBtZXRob2RcbiAgICB2YXIgZXhwTWVhbiA9IE1hdGguZXhwKC1sYW1iZGEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcCA9IGV4cE1lYW47XG4gICAgICB2YXIgeCA9IDA7XG4gICAgICB2YXIgdSA9IHJhbmRvbS5uZXh0KCk7XG4gICAgICB3aGlsZSAodSA+IHApIHtcbiAgICAgICAgdSA9IHUgLSBwO1xuICAgICAgICBwID0gbGFtYmRhICogcCAvICsreDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2VuZXJhdGl2ZSBtZXRob2RcbiAgICB2YXIgc211ID0gTWF0aC5zcXJ0KGxhbWJkYSk7XG4gICAgdmFyIGIgPSAwLjkzMSArIDIuNTMgKiBzbXU7XG4gICAgdmFyIGEgPSAtMC4wNTkgKyAwLjAyNDgzICogYjtcbiAgICB2YXIgaW52QWxwaGEgPSAxLjEyMzkgKyAxLjEzMjggLyAoYiAtIDMuNCk7XG4gICAgdmFyIHZSID0gMC45Mjc3IC0gMy42MjI0IC8gKGIgLSAyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHUgPSB2b2lkIDA7XG4gICAgICAgIHZhciB2ID0gcmFuZG9tLm5leHQoKTtcbiAgICAgICAgaWYgKHYgPD0gMC44NiAqIHZSKSB7XG4gICAgICAgICAgdSA9IHYgLyB2UiAtIDAuNDM7XG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDIgKiBhIC8gKDAuNSAtIE1hdGguYWJzKHUpKSArIGIpICogdSArIGxhbWJkYSArIDAuNDQ1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodiA+PSB2Uikge1xuICAgICAgICAgIHUgPSByYW5kb20ubmV4dCgpIC0gMC41O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHUgPSB2IC8gdlIgLSAwLjkzO1xuICAgICAgICAgIHUgPSAodSA8IDAgPyAtMC41IDogMC41KSAtIHU7XG4gICAgICAgICAgdiA9IHJhbmRvbS5uZXh0KCkgKiB2UjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXMgPSAwLjUgLSBNYXRoLmFicyh1KTtcbiAgICAgICAgaWYgKHVzIDwgMC4wMTMgJiYgdiA+IHVzKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKCgyICogYSAvIHVzICsgYikgKiB1ICsgbGFtYmRhICsgMC40NDUpO1xuICAgICAgICB2ID0gdiAqIGludkFscGhhIC8gKGEgLyAodXMgKiB1cykgKyBiKTtcbiAgICAgICAgaWYgKGsgPj0gMTApIHtcbiAgICAgICAgICB2YXIgdCA9IChrICsgMC41KSAqIE1hdGgubG9nKGxhbWJkYSAvIGspIC0gbGFtYmRhIC0gbG9nU3FydDJQSSArIGsgLSAoMSAvIDEyLjAgLSAoMSAvIDM2MC4wIC0gMSAvICgxMjYwLjAgKiBrICogaykpIC8gKGsgKiBrKSkgLyBrO1xuICAgICAgICAgIGlmIChNYXRoLmxvZyh2ICogc211KSA8PSB0KSB7XG4gICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoayA+PSAwKSB7XG4gICAgICAgICAgdmFyIF9sb2dGYWN0b3JpYWw7XG4gICAgICAgICAgdmFyIGYgPSAoX2xvZ0ZhY3RvcmlhbCA9IGxvZ0ZhY3RvcmlhbChrKSkgIT0gbnVsbCA/IF9sb2dGYWN0b3JpYWwgOiAwO1xuICAgICAgICAgIGlmIChNYXRoLmxvZyh2KSA8PSBrICogTWF0aC5sb2cobGFtYmRhKSAtIGxhbWJkYSAtIGYpIHtcbiAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuXG52YXIgZXhwb25lbnRpYWwgPSAoZnVuY3Rpb24gKHJhbmRvbSwgbGFtYmRhKSB7XG4gIGlmIChsYW1iZGEgPT09IHZvaWQgMCkge1xuICAgIGxhbWJkYSA9IDE7XG4gIH1cbiAgbnVtYmVyVmFsaWRhdG9yKGxhbWJkYSkuaXNQb3NpdGl2ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAtTWF0aC5sb2coMSAtIHJhbmRvbS5uZXh0KCkpIC8gbGFtYmRhO1xuICB9O1xufSk7XG5cbnZhciBpcndpbkhhbGwgPSAoZnVuY3Rpb24gKHJhbmRvbSwgbikge1xuICBpZiAobiA9PT0gdm9pZCAwKSB7XG4gICAgbiA9IDE7XG4gIH1cbiAgbnVtYmVyVmFsaWRhdG9yKG4pLmlzSW50KCkuZ3JlYXRlclRoYW5PckVxdWFsKDApO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdW0gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdW0gKz0gcmFuZG9tLm5leHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcbn0pO1xuXG52YXIgYmF0ZXMgPSAoZnVuY3Rpb24gKHJhbmRvbSwgbikge1xuICBpZiAobiA9PT0gdm9pZCAwKSB7XG4gICAgbiA9IDE7XG4gIH1cbiAgbnVtYmVyVmFsaWRhdG9yKG4pLmlzSW50KCkuaXNQb3NpdGl2ZSgpO1xuICB2YXIgaXJ3aW5IYWxsID0gcmFuZG9tLmlyd2luSGFsbChuKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXJ3aW5IYWxsKCkgLyBuO1xuICB9O1xufSk7XG5cbnZhciBwYXJldG8gPSAoZnVuY3Rpb24gKHJhbmRvbSwgYWxwaGEpIHtcbiAgaWYgKGFscGhhID09PSB2b2lkIDApIHtcbiAgICBhbHBoYSA9IDE7XG4gIH1cbiAgbnVtYmVyVmFsaWRhdG9yKGFscGhhKS5ncmVhdGVyVGhhbk9yRXF1YWwoMCk7XG4gIHZhciBpbnZBbHBoYSA9IDEuMCAvIGFscGhhO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAxLjAgLyBNYXRoLnBvdygxLjAgLSByYW5kb20ubmV4dCgpLCBpbnZBbHBoYSk7XG4gIH07XG59KTtcblxudmFyIFJOR01hdGhSYW5kb20gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9STkcpIHtcbiAgX2luaGVyaXRzTG9vc2UoUk5HTWF0aFJhbmRvbSwgX1JORyk7XG4gIGZ1bmN0aW9uIFJOR01hdGhSYW5kb20oKSB7XG4gICAgcmV0dXJuIF9STkcuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIHZhciBfcHJvdG8gPSBSTkdNYXRoUmFuZG9tLnByb3RvdHlwZTtcbiAgX3Byb3RvLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgO1xuICBfcHJvdG8uc2VlZCA9IGZ1bmN0aW9uIHNlZWQoX3NlZWQsIF9vcHRzKSB7XG4gICAgLy8gaW50ZW50aW9uYWxseSBlbXB0eVxuICB9O1xuICBfcHJvdG8uY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFJOR01hdGhSYW5kb20oKTtcbiAgfTtcbiAgX2NyZWF0ZUNsYXNzKFJOR01hdGhSYW5kb20sIFt7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAnZGVmYXVsdCc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSTkdNYXRoUmFuZG9tO1xufShSTkcpO1xuXG4vKipcclxuICogU2VlZGFibGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3Igc3VwcG9ydGluZyBtYW55IGNvbW1vbiBkaXN0cmlidXRpb25zLlxyXG4gKlxyXG4gKiBEZWZhdWx0cyB0byBNYXRoLnJhbmRvbSBhcyBpdHMgdW5kZXJseWluZyBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvci5cclxuICpcclxuICogQG5hbWUgUmFuZG9tXHJcbiAqIEBjbGFzc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JOR3xmdW5jdGlvbn0gW3JuZz1NYXRoLnJhbmRvbV0gLSBVbmRlcmx5aW5nIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLlxyXG4gKi9cbnZhciBSYW5kb20gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSYW5kb20ocm5nKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLl9ybmcgPSB2b2lkIDA7XG4gICAgdGhpcy5fcGF0Y2ggPSB2b2lkIDA7XG4gICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICB0aGlzLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX3JuZy5uZXh0KCk7XG4gICAgfTtcbiAgICB0aGlzW1wiZmxvYXRcIl0gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBfdGhpcy51bmlmb3JtKG1pbiwgbWF4KSgpO1xuICAgIH07XG4gICAgdGhpc1tcImludFwiXSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIF90aGlzLnVuaWZvcm1JbnQobWluLCBtYXgpKCk7XG4gICAgfTtcbiAgICB0aGlzLmludGVnZXIgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBfdGhpcy51bmlmb3JtSW50KG1pbiwgbWF4KSgpO1xuICAgIH07XG4gICAgdGhpcy5ib29sID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnVuaWZvcm1Cb29sZWFuKCkoKTtcbiAgICB9O1xuICAgIHRoaXNbXCJib29sZWFuXCJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnVuaWZvcm1Cb29sZWFuKCkoKTtcbiAgICB9O1xuICAgIHRoaXMudW5pZm9ybSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9tZW1vaXplKCd1bmlmb3JtJywgdW5pZm9ybSwgbWluLCBtYXgpO1xuICAgIH07XG4gICAgdGhpcy51bmlmb3JtSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gX3RoaXMuX21lbW9pemUoJ3VuaWZvcm1JbnQnLCB1bmlmb3JtSW50LCBtaW4sIG1heCk7XG4gICAgfTtcbiAgICB0aGlzLnVuaWZvcm1Cb29sZWFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9tZW1vaXplKCd1bmlmb3JtQm9vbGVhbicsIHVuaWZvcm1Cb29sZWFuKTtcbiAgICB9O1xuICAgIHRoaXMubm9ybWFsID0gZnVuY3Rpb24gKG11LCBzaWdtYSkge1xuICAgICAgcmV0dXJuIG5vcm1hbChfdGhpcywgbXUsIHNpZ21hKTtcbiAgICB9O1xuICAgIHRoaXMubG9nTm9ybWFsID0gZnVuY3Rpb24gKG11LCBzaWdtYSkge1xuICAgICAgcmV0dXJuIGxvZ05vcm1hbChfdGhpcywgbXUsIHNpZ21hKTtcbiAgICB9O1xuICAgIHRoaXMuYmVybm91bGxpID0gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBiZXJub3VsbGkoX3RoaXMsIHApO1xuICAgIH07XG4gICAgdGhpcy5iaW5vbWlhbCA9IGZ1bmN0aW9uIChuLCBwKSB7XG4gICAgICByZXR1cm4gYmlub21pYWwoX3RoaXMsIG4sIHApO1xuICAgIH07XG4gICAgdGhpcy5nZW9tZXRyaWMgPSBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIGdlb21ldHJpYyhfdGhpcywgcCk7XG4gICAgfTtcbiAgICB0aGlzLnBvaXNzb24gPSBmdW5jdGlvbiAobGFtYmRhKSB7XG4gICAgICByZXR1cm4gcG9pc3NvbihfdGhpcywgbGFtYmRhKTtcbiAgICB9O1xuICAgIHRoaXMuZXhwb25lbnRpYWwgPSBmdW5jdGlvbiAobGFtYmRhKSB7XG4gICAgICByZXR1cm4gZXhwb25lbnRpYWwoX3RoaXMsIGxhbWJkYSk7XG4gICAgfTtcbiAgICB0aGlzLmlyd2luSGFsbCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gaXJ3aW5IYWxsKF90aGlzLCBuKTtcbiAgICB9O1xuICAgIHRoaXMuYmF0ZXMgPSBmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIGJhdGVzKF90aGlzLCBuKTtcbiAgICB9O1xuICAgIHRoaXMucGFyZXRvID0gZnVuY3Rpb24gKGFscGhhKSB7XG4gICAgICByZXR1cm4gcGFyZXRvKF90aGlzLCBhbHBoYSk7XG4gICAgfTtcbiAgICBpZiAocm5nICYmIHJuZyBpbnN0YW5jZW9mIFJORykge1xuICAgICAgdGhpcy51c2Uocm5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2UobmV3IFJOR01hdGhSYW5kb20oKSk7XG4gICAgfVxuICAgIHRoaXMuX2NhY2hlID0ge307XG4gIH1cbiAgLyoqXHJcbiAgICogQG1lbWJlciB7Uk5HfSBVbmRlcmx5aW5nIHBzZXVkby1yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxyXG4gICAqL1xuICB2YXIgX3Byb3RvID0gUmFuZG9tLnByb3RvdHlwZTtcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBgUmFuZG9tYCBpbnN0YW5jZSwgb3B0aW9uYWxseSBzcGVjaWZ5aW5nIHBhcmFtZXRlcnMgdG9cclxuICAgKiBzZXQgYSBuZXcgc2VlZC5cclxuICAgKlxyXG4gICAqIEBzZWUgUk5HLmNsb25lXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlZWRdIC0gT3B0aW9uYWwgc2VlZCBmb3IgbmV3IFJORy5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdHNdIC0gT3B0aW9uYWwgY29uZmlnIGZvciBuZXcgUk5HIG9wdGlvbnMuXHJcbiAgICogQHJldHVybiB7UmFuZG9tfVxyXG4gICAqL1xuICBfcHJvdG8uY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZG9tKFJOR0ZhY3RvcnkuYXBwbHkodm9pZCAwLCBhcmdzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZG9tKHRoaXMucm5nLmNsb25lKCkpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBTZXRzIHRoZSB1bmRlcmx5aW5nIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIHVzZWQgdmlhXHJcbiAgICogZWl0aGVyIGFuIGluc3RhbmNlIG9mIGBzZWVkcmFuZG9tYCwgYSBjdXN0b20gaW5zdGFuY2Ugb2YgUk5HXHJcbiAgICogKGZvciBQUk5HIHBsdWdpbnMpLCBvciBhIHN0cmluZyBzcGVjaWZ5aW5nIHRoZSBQUk5HIHRvIHVzZVxyXG4gICAqIGFsb25nIHdpdGggYW4gb3B0aW9uYWwgYHNlZWRgIGFuZCBgb3B0c2AgdG8gaW5pdGlhbGl6ZSB0aGVcclxuICAgKiBSTkcuXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGltcG9ydCByYW5kb20gZnJvbSAncmFuZG9tJ1xyXG4gICAqXHJcbiAgICogcmFuZG9tLnVzZSgnZXhhbXBsZV9zZWVkcmFuZG9tX3N0cmluZycpXHJcbiAgICogLy8gb3JcclxuICAgKiByYW5kb20udXNlKHNlZWRyYW5kb20oJ2tpdHRlbnMnKSlcclxuICAgKiAvLyBvclxyXG4gICAqIHJhbmRvbS51c2UoTWF0aC5yYW5kb20pXHJcbiAgICpcclxuICAgKiBAcGFyYW0gey4uLip9IGFyZ3NcclxuICAgKi87XG4gIF9wcm90by51c2UgPSBmdW5jdGlvbiB1c2UoKSB7XG4gICAgdGhpcy5fcm5nID0gUk5HRmFjdG9yeS5hcHBseSh2b2lkIDAsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gIH1cbiAgLyoqXHJcbiAgICogUGF0Y2hlcyBgTWF0aC5yYW5kb21gIHdpdGggdGhpcyBSYW5kb20gaW5zdGFuY2UncyBQUk5HLlxyXG4gICAqLztcbiAgX3Byb3RvLnBhdGNoID0gZnVuY3Rpb24gcGF0Y2goKSB7XG4gICAgaWYgKHRoaXMuX3BhdGNoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdGgucmFuZG9tIGFscmVhZHkgcGF0Y2hlZCcpO1xuICAgIH1cbiAgICB0aGlzLl9wYXRjaCA9IE1hdGgucmFuZG9tO1xuICAgIE1hdGgucmFuZG9tID0gdGhpcy51bmlmb3JtKCk7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVzdG9yZXMgYSBwcmV2aW91c2x5IHBhdGNoZWQgYE1hdGgucmFuZG9tYCB0byBpdHMgb3JpZ2luYWwgdmFsdWUuXHJcbiAgICovO1xuICBfcHJvdG8udW5wYXRjaCA9IGZ1bmN0aW9uIHVucGF0Y2goKSB7XG4gICAgaWYgKHRoaXMuX3BhdGNoKSB7XG4gICAgICBNYXRoLnJhbmRvbSA9IHRoaXMuX3BhdGNoO1xuICAgICAgZGVsZXRlIHRoaXMuX3BhdGNoO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBVbmlmb3JtIHV0aWxpdHkgZnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGB0aGlzLnJuZy5uZXh0KClgXHJcbiAgICpcclxuICAgKiBSZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIGluIFswLCAxKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi87XG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gaXRlbSBjaG9zZW4gdW5pZm9ybWx5IGF0IHRyYW5kb20gZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAgICpcclxuICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1JbnQoKWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8VD59IFthcnJheV0gLSBMb3dlciBib3VuZCAoaW50ZWdlciwgaW5jbHVzaXZlKVxyXG4gICAqIEByZXR1cm4ge1QgfCB1bmRlZmluZWR9XHJcbiAgICovXG4gIF9wcm90by5jaG9pY2UgPSBmdW5jdGlvbiBjaG9pY2UoYXJyYXkpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5kb20uY2hvaWNlIGV4cGVjdGVkIGlucHV0IHRvIGJlIGFuIGFycmF5LCBnb3QgXCIgKyB0eXBlb2YgYXJyYXkpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IHZvaWQgMCA6IGFycmF5Lmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy51bmlmb3JtSW50KDAsIGxlbmd0aCAtIDEpKCk7XG4gICAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBVbmlmb3JtIGRpc3RyaWJ1dGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgW0NvbnRpbnVvdXMgdW5pZm9ybSBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWZvcm1fZGlzdHJpYnV0aW9uXyhjb250aW51b3VzKSkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIExvd2VyIGJvdW5kIChmbG9hdCwgaW5jbHVzaXZlKVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gVXBwZXIgYm91bmQgKGZsb2F0LCBleGNsdXNpdmUpXHJcbiAgICogQHJldHVybiB7ZnVuY3Rpb259XHJcbiAgICovO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJbnRlcm5hbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcclxuICAgKiBNZW1vaXplcyBkaXN0cmlidXRpb25zIHRvIGVuc3VyZSB0aGV5J3JlIG9ubHkgY3JlYXRlZCB3aGVuIG5lY2Vzc2FyeS5cclxuICAgKlxyXG4gICAqIFJldHVybnMgYSB0aHVuayB3aGljaCB0aGF0IHJldHVybnMgaW5kZXBlbmRlbnQsIGlkZW50aWNhbGx5IGRpc3RyaWJ1dGVkXHJcbiAgICogc2FtcGxlcyBmcm9tIHRoZSBzcGVjaWZpZWQgZGlzdHJpYnV0aW9uLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIE5hbWUgb2YgZGlzdHJpYnV0aW9uXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZ2V0dGVyIC0gRnVuY3Rpb24gd2hpY2ggZ2VuZXJhdGVzIGEgbmV3IGRpc3RyaWJ1dGlvblxyXG4gICAqIEBwYXJhbSB7Li4uKn0gYXJncyAtIERpc3RyaWJ1dGlvbi1zcGVjaWZpYyBhcmd1bWVudHNcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxyXG4gICAqL1xuICBfcHJvdG8uX21lbW9pemUgPSBmdW5jdGlvbiBfbWVtb2l6ZShsYWJlbCwgZ2V0dGVyKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGtleSA9IFwiXCIgKyBhcmdzLmpvaW4oJzsnKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9jYWNoZVtsYWJlbF07XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUua2V5ICE9PSBrZXkpIHtcbiAgICAgIHZhbHVlID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgZGlzdHJpYnV0aW9uOiBnZXR0ZXIuYXBwbHkodm9pZCAwLCBbdGhpc10uY29uY2F0KGFyZ3MpKVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2NhY2hlW2xhYmVsXSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuZGlzdHJpYnV0aW9uO1xuICB9O1xuICBfY3JlYXRlQ2xhc3MoUmFuZG9tLCBbe1xuICAgIGtleTogXCJybmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYW5kb207XG59KCk7XG4vLyBkZWZhdWx0cyB0byBNYXRoLnJhbmRvbSBhcyBpdHMgUk5HXG52YXIgcmFuZG9tID0gbmV3IFJhbmRvbSgpO1xuXG5leHBvcnQgeyBSTkcsIFJOR0ZhY3RvcnksIFJhbmRvbSwgcmFuZG9tIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbS5tb2R1bGUuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRGVmb3JtZWRQb2x5Z29uLCBkZWZvcm1FeGlzdGluZ1BvbHlnb24gfSBmcm9tIFwiLi4vd2F0ZXJjb2xvckJsb3QvZ2VvbWV0cnlQb2x5Z29uXCI7XHJcblxyXG5cclxuLypjb25zdCBERUZPUk1BVElPTl9ST1VORFMgPSAzO1xyXG5jb25zdCBHQVVTU0lBTl9NVUxUSVBMSUVSID0gMztcclxuY29uc3QgR0FVU1NJQU5fQkVHSU5ORVJfTVVMVElQTElFUiA9IDIwOyovXHJcbmNvbnN0IFFVRVVFX0FERElUSU9OID0gODtcclxuY29uc3QgU0lERVMgPSA1O1xyXG5jb25zdCBBUkVBID0gOTAwMDA7XHJcbmNvbnN0IENFTlRFUjogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuY29uc3QgREVGT1JNQVRJT05fUk9VTkRTID0gMztcclxuY29uc3QgR0FVU1NJQU5fTVVMVElQTElFUiA9IDI7XHJcbmNvbnN0IEdBVVNTSUFOX0JFR0lOTkVSX01VTFRJUExJRVIgPSAxMDtcclxuXHJcbmNvbnN0IGNvbmZpZyA9ICgpID0+ICh7XHJcbiAgICBzaWRlczogOSxcclxuICAgIHJhZGl1czogMTAwLFxyXG4gICAgeE9mZnNldDogMCxcclxuICAgIHlPZmZzZXQ6IDBcclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVQb2x5Z29uID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCB7IHNpZGVzLCByYWRpdXMsIHhPZmZzZXQsIHlPZmZzZXQgfSA9IGNvbmZpZygpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZURlZm9ybWVkUG9seWdvbihTSURFUywgQVJFQSwgQ0VOVEVSLCBERUZPUk1BVElPTl9ST1VORFMsIEdBVVNTSUFOX0JFR0lOTkVSX01VTFRJUExJRVIpO1xyXG4gICAgLy9yZXR1cm4gY3JlYXRlRGVmb3JtZWRQb2x5Z29uKHNpZGVzLCByYWRpdXMsIFt4T2Zmc2V0LCB5T2Zmc2V0XSwgREVGT1JNQVRJT05fUk9VTkRTLCBHQVVTU0lBTl9CRUdJTk5FUl9NVUxUSVBMSUVSKVxyXG59XHJcblxyXG5sZXQgaW5kZXggPSAwO1xyXG5sZXQgcG9seWdvbjogZ2VvbWV0cmljLlBvbHlnb247XHJcblxyXG5jb25zb2xlLmxvZyhcIndvcmtlclwiKTtcclxuXHJcbnNlbGYub25tZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudDxzdHJpbmc+KSA9PiB7XHJcblxyXG5cclxuICAgIGlmIChlLmRhdGEgPT09IFwicG9seWdvblwiKSB7XHJcblxyXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmcgZm9yIHBvbHlnb24gXCIgKyBpbmRleCk7XHJcblxyXG4gICAgICAgIGxldCBwb2x5Z29uczogbnVtYmVyW11bXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBRVUVVRV9BRERJVElPTjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICBpZiAoIXBvbHlnb24pIHtcclxuICAgICAgICAgICAgICAgIHBvbHlnb24gPSBjcmVhdGVQb2x5Z29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBvbHlnb24gPSBkZWZvcm1FeGlzdGluZ1BvbHlnb24ocG9seWdvbiwgREVGT1JNQVRJT05fUk9VTkRTLCBpbmRleCAlIDQwID09PSAwLCBHQVVTU0lBTl9NVUxUSVBMSUVSKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvbHlnb25zLnB1c2gocG9seWdvbik7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHBvbHlnb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImp1c3QgcmVjZWl2aW5nIG1lc3NhZ2VzXCIpXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9