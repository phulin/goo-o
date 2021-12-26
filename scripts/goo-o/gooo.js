/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rU": () => (/* binding */ isSong),
/* harmony export */   "b_": () => (/* binding */ getActiveSongs),
/* harmony export */   "lf": () => (/* binding */ have),
/* harmony export */   "$c": () => (/* binding */ getBanishedMonsters),
/* harmony export */   "N": () => (/* binding */ getAverageAdventures),
/* harmony export */   "Lo": () => (/* binding */ uneffect),
/* harmony export */   "xI": () => (/* binding */ getSaleValue),
/* harmony export */   "UL": () => (/* binding */ getTodaysHolidayWanderers)
/* harmony export */ });
/* unused harmony exports getSongLimit, getActiveEffects, getSongCount, canRememberSong, getMonsterLocations, getRemainingLiver, getRemainingStomach, getRemainingSpleen, haveInCampground, Wanderer, haveCounter, haveWandererCounter, isVoteWandererNow, isWandererNow, getKramcoWandererChance, getFamiliarWandererChance, getWandererChance, isCurrentFamiliar, getFoldGroup, getZapGroup, canUse, noneToNull, getAverage, getPlayerFromIdOrName, questStep, EnsureError, ensureEffect, Environment, findLeprechaunMultiplier, findFairyMultiplier, holidayWanderers */
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4875);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_features_array_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2580);
/* harmony import */ var core_js_features_array_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_array_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(678);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6672);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8588);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** @module GeneralLibrary */






/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */

function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  if (skillOrEffect instanceof Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof Effect ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$class */ ._$)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 */

function getActiveEffects() {
  return Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.myEffects)()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */

function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */

function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */

function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */

function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */

function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */

function haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return getCounters(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Return whether the player has the queried wandering counter
 *
 * @category Wanderers
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */

function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 == 1;
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer == Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */

function getKramcoWandererChance() {
  var fights = get("_sausageFights");
  var lastFight = get("_lastSausageMonsterTurn");
  var totalTurns = totalTurnsPlayed();

  if (fights < 1) {
    return lastFight === totalTurns && myTurncount() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 */

function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */

function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */

function getFoldGroup(item) {
  return Object.entries(getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */

function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */

function getBanishedMonsters() {
  var banishes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .chunk */ .yo)((0,_property__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2)("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.toItem)(banisher);
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */

function canUse(item) {
  var path = myPath();

  if (path !== "Nuclear Autumn") {
    if ($items(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === "G-Lover") {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === "Bees Hate You") {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.get("none") ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.get("none") ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.get("none") ? null : thing;
  }

  return thing;
}
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */

function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = _slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Return average adventures expected from consuming an item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */

function uneffect(effect) {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */

function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName === "number" ? idOrName : parseInt(getPlayerId(idOrName));
  return {
    name: getPlayerName(id),
    id: id
  };
}
/**
 * Return the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 */

function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);

  var _super = _createSuper(EnsureError);

  function EnsureError(cause) {
    var _this;

    _classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!"));
    _this.name = "Ensure Error";
    return _this;
  }

  return _createClass(EnsureError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 */

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (haveEffect(ef) < turns) {
    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Returns the average value--based on mallprice and autosell--of a collection of items
 * @param items items whose value you care about
 */

function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.mallPrice)(item) > Math.max(2 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.autosellPrice)(item), 100) ? MALL_VALUE_MODIFIER * (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.mallPrice)(item) : (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.autosellPrice)(item));
    } else {
      valueMap.set(item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.mallPrice)(item) > 100 ? MALL_VALUE_MODIFIER * (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.mallPrice)(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Returns the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 */

function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["none"]))));
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"]))));
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Returns the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 * @param familiar The familiar whose fairy multiplier you're interested in
 */

function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) return numericModifier(familiar, "Fairy Effectiveness", 1, $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["none"]))));
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["none"]))));
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$monsters */ .fr)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$monsters */ .fr)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$monsters */ .fr)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.holiday)().split("/").map(holiday => {
    var _holidayWanderers$get;

    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }).flat();
}

/***/ }),

/***/ 6672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Jr": () => (/* binding */ PropertiesManager),
  "U2": () => (/* binding */ get),
  "t8": () => (/* binding */ _set)
});

// UNUSED EXPORTS: getBoolean, getBounty, getClass, getCoinmaster, getCommaSeparated, getEffect, getElement, getFamiliar, getItem, getLocation, getMonster, getNumber, getPhylum, getServant, getSkill, getSlot, getStat, getString, getThrall, setProperties, withChoice, withChoices, withProperties, withProperty

// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(4875);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(8819);
// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js
function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}
var numericOrStringProperties = (/* unused pure expression or super */ null && (["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"]));
var choiceAdventurePattern = /^choiceAdventure\d+$/;
function isNumericOrStringProperty(property) {
  if (numericOrStringProperties.includes(property)) return true;
  return choiceAdventurePattern.test(property);
}
var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];
function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}
var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];
function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}
var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];
var fakeMonsters = ["trackVoteMonster"];
function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster") && !fakeMonsters.includes(property);
}
function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}
var statProps = (/* unused pure expression or super */ null && (["nsChallenge1", "shrugTopper", "snojoSetting"]));
function isStatProperty(property) {
  return statProps.includes(property);
}
var phylumProps = ["dnaSyringe"];
function isPhylumProperty(property) {
  return phylumProps.includes(property) || property.endsWith("Phylum");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = Type => createPropertyGetter(value => {
  if (value === "") return null;
  var v = Type.get(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(Bounty);
var getClass = createMafiaClassPropertyGetter(Class);
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
var getEffect = createMafiaClassPropertyGetter(Effect);
var getElement = createMafiaClassPropertyGetter(Element);
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
var getItem = createMafiaClassPropertyGetter(Item);
var getLocation = createMafiaClassPropertyGetter(Location);
var getMonster = createMafiaClassPropertyGetter(Monster);
var getPhylum = createMafiaClassPropertyGetter(Phylum);
var getServant = createMafiaClassPropertyGetter(Servant);
var getSkill = createMafiaClassPropertyGetter(Skill);
var getSlot = createMafiaClassPropertyGetter(Slot);
var getStat = createMafiaClassPropertyGetter(Stat);
var getThrall = createMafiaClassPropertyGetter(Thrall);
function get(property, _default) {
  var value = getString(property);

  if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  }

  if (isLocationProperty(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if (isBooleanProperty(property, value)) {
    return getBoolean(property, _default);
  }

  if (isNumericProperty(property, value)) {
    return getNumber(property, _default);
  }

  if (isPhylumProperty(property)) {
    return getPhylum(property);
  }

  return value;
}

function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_.setProperty)(property, stringValue);
}


function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", {});
  }

  _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     * @param propertiesToSet A Properties object, keyed by property name.
     */

  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     * @param choicesToSet An object keyed by choice adventure number.
     */

  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     * @param properties Collection of properties to reset.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        var value = this.properties[property];

        if (value) {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */

  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = _slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
    /**
     * Stops storing the original values of inputted properties.
     * @param properties Properties for the manager to forget.
     */

  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }

      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];

        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */

  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property) < value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property) > value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
  }]);

  return PropertiesManager;
}();

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_$": () => (/* binding */ $class),
/* harmony export */   "_G": () => (/* binding */ $effect),
/* harmony export */   "lh": () => (/* binding */ $effects),
/* harmony export */   "HP": () => (/* binding */ $familiar),
/* harmony export */   "LG": () => (/* binding */ $familiars),
/* harmony export */   "xr": () => (/* binding */ $item),
/* harmony export */   "vS": () => (/* binding */ $items),
/* harmony export */   "PG": () => (/* binding */ $location),
/* harmony export */   "xw": () => (/* binding */ $locations),
/* harmony export */   "O4": () => (/* binding */ $monster),
/* harmony export */   "fr": () => (/* binding */ $monsters),
/* harmony export */   "tm": () => (/* binding */ $skill),
/* harmony export */   "nx": () => (/* binding */ $skills),
/* harmony export */   "Jh": () => (/* binding */ $slot),
/* harmony export */   "ei": () => (/* binding */ $slots),
/* harmony export */   "Ri": () => (/* binding */ $stat),
/* harmony export */   "gw": () => (/* binding */ $stats),
/* harmony export */   "ev": () => (/* binding */ $thrall)
/* harmony export */ });
/* unused harmony exports $bounty, $bounties, $classes, $coinmaster, $coinmasters, $element, $elements, $phylum, $phyla, $servant, $servants, $thralls */
var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.reduce((acc, literal, i) => acc + literal + (placeholders[i] || ""), "");
};

var createSingleConstant = Type => function (literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get(input.split(/\s*,\s*/));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var $class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var $familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var $item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var $items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(Thrall);

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uZ": () => (/* binding */ clamp),
/* harmony export */   "yo": () => (/* binding */ chunk),
/* harmony export */   "Sm": () => (/* binding */ sum),
/* harmony export */   "IA": () => (/* binding */ arrayContains),
/* harmony export */   "$x": () => (/* binding */ setEqual)
/* harmony export */ });
/* unused harmony exports notNull, parseNumber, arrayToCountedMap, countedMapToArray, countedMapToString, sumNumbers, invertMap */
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 */

function chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 * @param mappingFunction function to turn elements into numbers
 */

function sum(addends, mappingFunction) {
  return addends.reduce((subtotal, element) => subtotal + mappingFunction(element), 0);
}
function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */

function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */

function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();

  var sortedB = _toConsumableArray(b).sort();

  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 * @param map Map to invert
 */

function invertMap(map) {
  var returnValue = new Map();

  var _iterator = _createForOfIteratorHelper(map),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return returnValue;
}

/***/ }),

/***/ 8469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(9101);

__webpack_require__(8938);

var entryUnbind = __webpack_require__(7592);

module.exports = entryUnbind('Array', 'flat');

/***/ }),

/***/ 2580:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(8469);

module.exports = parent;

/***/ }),

/***/ 1361:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ 7331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var create = __webpack_require__(5131);

var definePropertyModule = __webpack_require__(811);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 3739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ 477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(6211);

var toLength = __webpack_require__(588);

var toAbsoluteIndex = __webpack_require__(8786); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var isArray = __webpack_require__(1746);

var wellKnownSymbol = __webpack_require__(7457);

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ 6202:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var classofRaw = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ 3780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var ownKeys = __webpack_require__(6813);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 3300:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(4375);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 4603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 5096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var userAgent = __webpack_require__(5096);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),

/***/ 7592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var bind = __webpack_require__(1871);

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),

/***/ 393:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 9004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var getOwnPropertyDescriptor = (__webpack_require__(9609).f);

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var setGlobal = __webpack_require__(3351);

var copyConstructorProperties = __webpack_require__(3780);

var isForced = __webpack_require__(2612);
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 8901:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 8529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(1746);

var toLength = __webpack_require__(588);

var bind = __webpack_require__(1871); // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

module.exports = flattenIntoArray;

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(1361); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 1575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9039);

var global = __webpack_require__(2328);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 1072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(5830);

var Iterators = __webpack_require__(9759);

var wellKnownSymbol = __webpack_require__(7457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ 2328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 2551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(6068);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 1055:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ 2674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901);

var createElement = __webpack_require__(4603); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 8483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var classof = __webpack_require__(6202);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 7599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(5153);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 4081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(1770);

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var createNonEnumerableProperty = __webpack_require__(4059);

var objectHas = __webpack_require__(2551);

var shared = __webpack_require__(5153);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ 8110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var Iterators = __webpack_require__(9759);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 1746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(6202); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ 2612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6719:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 6449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var isArrayIteratorMethod = __webpack_require__(8110);

var toLength = __webpack_require__(588);

var bind = __webpack_require__(1871);

var getIteratorMethod = __webpack_require__(1072);

var iteratorClose = __webpack_require__(6535);

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 6535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ 9759:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2912);

var fails = __webpack_require__(8901); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 1770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var inspectSource = __webpack_require__(7599);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 5131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var defineProperties = __webpack_require__(422);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = __webpack_require__(1055);

var html = __webpack_require__(4861);

var documentCreateElement = __webpack_require__(4603);

var sharedKey = __webpack_require__(1449);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ 422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var anObject = __webpack_require__(3739);

var objectKeys = __webpack_require__(669); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var IE8_DOM_DEFINE = __webpack_require__(2674);

var anObject = __webpack_require__(3739);

var toPrimitive = __webpack_require__(4375); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 9609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createPropertyDescriptor = __webpack_require__(3300);

var toIndexedObject = __webpack_require__(6211);

var toPrimitive = __webpack_require__(4375);

var has = __webpack_require__(2551);

var IE8_DOM_DEFINE = __webpack_require__(2674); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 5166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 4085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var toIndexedObject = __webpack_require__(6211);

var indexOf = (__webpack_require__(477).indexOf);

var hiddenKeys = __webpack_require__(1055);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ 669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7395:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 8256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var objectKeys = __webpack_require__(669);

var toIndexedObject = __webpack_require__(6211);

var propertyIsEnumerable = (__webpack_require__(7395).f); // `Object.{ entries, values }` methods implementation


var createMethod = function createMethod(TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 6813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var anObject = __webpack_require__(3739); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 9039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

module.exports = global;

/***/ }),

/***/ 6486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

var has = __webpack_require__(2551);

var setGlobal = __webpack_require__(3351);

var inspectSource = __webpack_require__(7599);

var InternalStateModule = __webpack_require__(4081);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 4682:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 3351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 1449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8849);

var uid = __webpack_require__(858);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var setGlobal = __webpack_require__(3351);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 8849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6719);

var store = __webpack_require__(5153);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 8786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8483);

var requireObjectCoercible = __webpack_require__(4682);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 4770:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 6068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4682); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 4375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 4657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 858:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 4719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4938);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var shared = __webpack_require__(8849);

var has = __webpack_require__(2551);

var uid = __webpack_require__(858);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 9101:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var flattenIntoArray = __webpack_require__(8529);

var toObject = __webpack_require__(6068);

var toLength = __webpack_require__(588);

var toInteger = __webpack_require__(4770);

var arraySpeciesCreate = __webpack_require__(586); // `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat


$({
  target: 'Array',
  proto: true
}, {
  flat: function
    /* depthArg = 1 */
  flat() {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

/***/ }),

/***/ 8938:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(7331); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flat');

/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $entries = (__webpack_require__(8256).entries); // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var iterate = __webpack_require__(6449);

var createProperty = __webpack_require__(812); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $values = (__webpack_require__(8256).values); // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),

/***/ 5911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Macro": () => (/* binding */ combat_Macro)
});

// UNUSED EXPORTS: main

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./node_modules/libram/dist/template-string.js
var template_string = __webpack_require__(678);
// EXTERNAL MODULE: ./node_modules/libram/dist/property.js + 1 modules
var property = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/libram/dist/lib.js
var lib = __webpack_require__(3311);
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
var _templateObject, _templateObject2;

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var macroMatches = (0,external_kolmafia_.xpath)((0,external_kolmafia_.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0,external_kolmafia_.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = (0,template_string/* $items */.vS)(_templateObject || (_templateObject = _taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = (0,template_string/* $skills */.nx)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0,external_kolmafia_.toInt)(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0,external_kolmafia_.toInt)(skill);
}

var InvalidMacroError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidMacroError, _Error);

  var _super = _createSuper(InvalidMacroError);

  function InvalidMacroError() {
    _classCallCheck(this, InvalidMacroError);

    return _super.apply(this, arguments);
  }

  return _createClass(InvalidMacroError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */

var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);

    _defineProperty(this, "components", []);

    _defineProperty(this, "name", MACRO_NAME);
  }

  _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     * @param name The name to be used when saving as an autoattack.
     * @returns The previous name assigned to this macro.
     */

  }, {
    key: "rename",
    value: function rename(name) {
      var returnValue = this.name;
      this.name = name;
      return returnValue;
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      (0,property/* set */.t8)(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(_toConsumableArray(this.components), _toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) Macro.cachedMacroIds.set(this.name, getMacroId(this.name));
      id = getMacroId(this.name);

      if ((0,external_kolmafia_.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,external_kolmafia_.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,external_kolmafia_.urlEncode)(this.name), "&macrotext=").concat((0,external_kolmafia_.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     * @param name The name to save the macro under as an autoattack.
     */

  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */

  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      var ballsCondition = "";

      if (condition instanceof Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Effect) {
        ballsCondition = "haseffect ".concat((0,external_kolmafia_.toInt)(condition));
      } else if (condition instanceof Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof Class) {
        if ((0,external_kolmafia_.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return this.step("if ".concat(ballsCondition)).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     * @param macro The macro to place in the if_ statement
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = (0,lib/* getTodaysHolidayWanderers */.UL)();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     * @param macro The macro to place in the if_ statement.
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = (0,lib/* getTodaysHolidayWanderers */.UL)();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }], [{
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, _toConsumableArray((0,property/* get */.U2)(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = _createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;

          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,external_kolmafia_.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;

      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;

      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;

      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;

      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;

      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);

  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

_defineProperty(Macro, "cachedMacroIds", new Map());

_defineProperty(Macro, "cachedAutoAttacks", new Map());

function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Macro) {
  _inherits(StrictMacro, _Macro);

  var _super2 = _createSuper(StrictMacro);

  function StrictMacro() {
    _classCallCheck(this, StrictMacro);

    return _super2.apply(this, arguments);
  }

  _createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;

      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }

      return (_get2 = _get(_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;

      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }

      return (_get3 = _get(_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;

      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }

      return (_get4 = _get(_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;

      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }

      return (_get5 = _get(_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return StrictMacro.if_("hasskill ".concat(skillBallsMacroName(skill)), StrictMacro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */

  }], [{
    key: "skill",
    value: function skill() {
      var _this8;

      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;

      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;

      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;

      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;

      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]);

  return StrictMacro;
}(Macro)));
// EXTERNAL MODULE: ./src/options.ts
var options = __webpack_require__(330);
;// CONCATENATED MODULE: ./src/combat.ts
var combat_templateObject, combat_templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) combat_setPrototypeOf(subClass, superClass); }

function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }

function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }

function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }

function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }




var combat_Macro = /*#__PURE__*/function (_LibramMacro) {
  combat_inherits(Macro, _LibramMacro);

  var _super = combat_createSuper(Macro);

  function Macro() {
    combat_classCallCheck(this, Macro);

    return _super.apply(this, arguments);
  }

  combat_createClass(Macro, [{
    key: "kill",
    value: function kill(skill) {
      return this.if_((0,template_string/* $monster */.O4)(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["gooified dog-thing"]))), Macro.while_("hasskill Saucestorm", Macro.skill((0,template_string/* $skill */.tm)(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["Saucestorm"])))))).externalIf( // eslint-disable-next-line libram/verify-constants
      options/* default.location */.Z.location !== (0,template_string/* $location */.PG)(_templateObject3 || (_templateObject3 = combat_taggedTemplateLiteral(["Site Alpha Primary Lab"]))), Macro.externalIf((0,property/* get */.U2)("_chestXRayUsed") < 3, Macro.trySkill((0,template_string/* $skill */.tm)(_templateObject4 || (_templateObject4 = combat_taggedTemplateLiteral(["Chest X-Ray"]))))).externalIf((0,property/* get */.U2)("_shatteringPunchUsed") < 3, Macro.trySkill((0,template_string/* $skill */.tm)(_templateObject5 || (_templateObject5 = combat_taggedTemplateLiteral(["Shattering Punch"]))))).externalIf(!(0,property/* get */.U2)("_gingerbreadMobHitUsed"), Macro.trySkill((0,template_string/* $skill */.tm)(_templateObject6 || (_templateObject6 = combat_taggedTemplateLiteral(["Gingerbread Mob Hit"]))))).externalIf((0,property/* get */.U2)("_usedReplicaBatoomerang") < 3, Macro.tryItem((0,template_string/* $item */.xr)(_templateObject7 || (_templateObject7 = combat_taggedTemplateLiteral(["replica bat-oomerang"])))))) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .externalIf(skill !== undefined, Macro.skill(skill)).trySkill((0,template_string/* $skill */.tm)(_templateObject8 || (_templateObject8 = combat_taggedTemplateLiteral(["Stuffed Mortar Shell"])))).while_("hasskill Saucegeyser", Macro.skill((0,template_string/* $skill */.tm)(_templateObject9 || (_templateObject9 = combat_taggedTemplateLiteral(["Saucegeyser"]))))).while_("hasskill Weapon of the Pastalord", Macro.skill((0,template_string/* $skill */.tm)(_templateObject10 || (_templateObject10 = combat_taggedTemplateLiteral(["Weapon of the Pastalord"]))))).while_("hasskill Cannelloni Cannon", Macro.skill((0,template_string/* $skill */.tm)(_templateObject11 || (_templateObject11 = combat_taggedTemplateLiteral(["Cannelloni Cannon"]))))).while_("hasskill Wave of Sauce", Macro.skill((0,template_string/* $skill */.tm)(_templateObject12 || (_templateObject12 = combat_taggedTemplateLiteral(["Wave of Sauce"]))))).while_("hasskill Saucestorm", Macro.skill((0,template_string/* $skill */.tm)(_templateObject13 || (_templateObject13 = combat_taggedTemplateLiteral(["Saucestorm"]))))).while_("hasskill Lunging Thrust-Smack", Macro.skill((0,template_string/* $skill */.tm)(_templateObject14 || (_templateObject14 = combat_taggedTemplateLiteral(["Lunging Thrust-Smack"]))))).attack().repeat();
    }
  }], [{
    key: "kill",
    value: function kill() {
      return new Macro().kill();
    }
  }]);

  return Macro;
}(Macro);
function main() {
  while (inMultiFight()) {
    runCombat();
  }

  if (choiceFollowsFight()) visitUrl("choice.php");
}

/***/ }),

/***/ 2349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./node_modules/libram/dist/utils.js
var utils = __webpack_require__(8588);
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var modifierTypes_booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var modifierTypes_numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifier.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function modifier_get(name, subject) {
  if ((0,utils/* arrayContains */.IA)(name, modifierTypes_booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_.booleanModifier)(name) : (0,external_kolmafia_.booleanModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, classModifiers)) {
    return (0,external_kolmafia_.classModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, effectModifiers)) {
    return (0,external_kolmafia_.effectModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, monsterModifiers)) {
    return (0,external_kolmafia_.monsterModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, modifierTypes_numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_.numericModifier)(name) : (0,external_kolmafia_.numericModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, skillModifiers)) {
    return (0,external_kolmafia_.skillModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_.stringModifier)(name) : (0,external_kolmafia_.stringModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, statModifiers)) {
    return (0,external_kolmafia_.statModifier)(subject, name);
  }
}
/**
 * Merge two Modifiers objects into one, summing all numeric modifiers, ||ing all boolean modifiers, and otherwise letting the second object overwrite the first.
 * @param modifiers1 Modifiers objects to be merged onto.
 * @param modifiers2 Modifiers object to merge.
 * @returns A single Modifiers object obtained by merging.
 */

function pairwiseMerge(modifiers1, modifiers2) {
  var returnValue = _objectSpread(_objectSpread({}, modifiers1), modifiers2);

  for (var modifier in modifiers1) {
    if (Array.from(Object.values(modifiers2)).includes(modifier)) {
      if (arrayContains(modifier, numericModifiers)) {
        var _modifiers1$modifier, _modifiers2$modifier;

        returnValue[modifier] = ((_modifiers1$modifier = modifiers1[modifier]) !== null && _modifiers1$modifier !== void 0 ? _modifiers1$modifier : 0) + ((_modifiers2$modifier = modifiers2[modifier]) !== null && _modifiers2$modifier !== void 0 ? _modifiers2$modifier : 0);
      }

      if (arrayContains(modifier, booleanModifiers)) {
        var _modifiers1$modifier2, _modifiers2$modifier2;

        returnValue[modifier] = ((_modifiers1$modifier2 = modifiers1[modifier]) !== null && _modifiers1$modifier2 !== void 0 ? _modifiers1$modifier2 : false) || ((_modifiers2$modifier2 = modifiers2[modifier]) !== null && _modifiers2$modifier2 !== void 0 ? _modifiers2$modifier2 : false);
      }
    }
  }

  return returnValue;
}
/**
 * Merge arbitrarily many Modifiers objects into one, summing all numeric modifiers, and ||ing all boolean modifiers.
 * @param modifierss Modifiers objects to be merged together.
 * @returns A single Modifiers object obtained by merging.
 */


function mergeModifiers() {
  for (var _len = arguments.length, modifierss = new Array(_len), _key = 0; _key < _len; _key++) {
    modifierss[_key] = arguments[_key];
  }

  return modifierss.reduce((a, b) => pairwiseMerge(a, b), {});
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/since.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Provides functions for checking KoLmafia's version and revision.
 * @packageDocumentation
 */

/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */

var KolmafiaVersionError = /*#__PURE__*/function (_Error) {
  _inherits(KolmafiaVersionError, _Error);

  var _super = _createSuper(KolmafiaVersionError);

  function KolmafiaVersionError(message) {
    var _this;

    _classCallCheck(this, KolmafiaVersionError);

    _this = _super.call(this, message); // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.

    Object.setPrototypeOf(_assertThisInitialized(_this), KolmafiaVersionError.prototype);
    return _this;
  }

  return _createClass(KolmafiaVersionError);
}( /*#__PURE__*/_wrapNativeSuper(Error)); // Manually set class name, so that the stack trace shows proper name in Rhino

KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _require$main;

  // In Rhino, the current script name is available in require.main.id
  var scriptName = (_require$main = __webpack_require__.c[__webpack_require__.s]) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 *
 * @example
 * ```ts
 * // Throws if KoLmafia revision is less than r20500
 * sinceKolmafiaRevision(20500);
 * ```
 */


function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  var currentRevision = (0,external_kolmafia_.getRevision)();

  if (currentRevision > 0 && currentRevision < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0,external_kolmafia_.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
/**
 * If KoLmafia's version is less than `majorVersion.minorVersion`, throws an
 * exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since X.Y;` statement in ASH.
 * @param majorVersion Major version number
 * @param minorVersion Minor version number
 * @deprecated Point versions are no longer released by KoLmafia
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's major version is less than `majorVersion`, or if the major
 *    versions are equal but the minor version is less than `minorVersion`
 * @throws {TypeError}
 *    If either `majorVersion` or `minorVersion` are not integers
 *
 * @example
 * ```ts
 * // Throws if KoLmafia version is less than 20.7
 * sinceKolmafiaVersion(20, 7);
 * ```
 */

function sinceKolmafiaVersion(majorVersion, minorVersion) {
  if (getRevision() >= 25720) {
    return;
  }

  if (!Number.isInteger(majorVersion)) {
    throw new TypeError("Invalid major version number ".concat(majorVersion, " (must be an integer)"));
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number ".concat(minorVersion, " (must be an integer)"));
  }

  if (majorVersion > 21 || majorVersion === 20 && minorVersion > 9) {
    throw new Error("There were no versions released after 21.09. This command will always fail");
  }

  var versionStr = getVersion();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"".concat(versionStr, "\". You may need to update the script."));
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires version ").concat(majorVersion, ".").concat(minorVersion, " of kolmafia or higher (current: ").concat(currentMajorVersion, ".").concat(currentMinorVersion, "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
// EXTERNAL MODULE: ./node_modules/libram/dist/template-string.js
var template_string = __webpack_require__(678);
;// CONCATENATED MODULE: ./node_modules/libram/dist/logger.js
function logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) logger_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function logger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultHandlers = {
  info: message => (0,external_kolmafia_.printHtml)("<b>[Libram]</b> ".concat(message)),
  warning: message => (0,external_kolmafia_.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram]</b> ".concat(message, "</span>")),
  error: _error => (0,external_kolmafia_.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram]</b> ".concat(_error.toString(), "</span>"))
};

var Logger = /*#__PURE__*/function () {
  function Logger() {
    logger_classCallCheck(this, Logger);

    logger_defineProperty(this, "handlers", defaultHandlers);
  }

  logger_createClass(Logger, [{
    key: "setHandler",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setHandler(level, callback) {
      this.handlers[level] = callback;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "log",
    value: function log(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log("error", message);
    }
  }]);

  return Logger;
}();

/* harmony default export */ const dist_logger = (new Logger());
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function maximize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function maximize_createClass(Constructor, protoProps, staticProps) { if (protoProps) maximize_defineProperties(Constructor.prototype, protoProps); if (staticProps) maximize_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function maximize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function maximize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Merges a Partial<MaximizeOptions> onto a MaximizeOptions. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 */

function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo;

  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray(defaultOptions.forceEquip), _toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray(defaultOptions.preventEquip), _toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;

      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray(defaultOptions.bonusEquip), _toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray(defaultOptions.preventSlot), _toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : []))
  };
}

var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: []
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
} // Subset of slots that are valid for caching.

var cachedSlots = (0,template_string/* $slots */.ei)(_templateObject || (_templateObject = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = /*#__PURE__*/maximize_createClass(function CacheEntry(equipment, rider, familiar, canEquipItemCount) {
  maximize_classCallCheck(this, CacheEntry);

  maximize_defineProperty(this, "equipment", void 0);

  maximize_defineProperty(this, "rider", void 0);

  maximize_defineProperty(this, "familiar", void 0);

  maximize_defineProperty(this, "canEquipItemCount", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
});

var _outfitSlots = /*#__PURE__*/new WeakMap();

var _useHistory = /*#__PURE__*/new WeakMap();

var _maxSize = /*#__PURE__*/new WeakMap();

var OutfitLRUCache = /*#__PURE__*/function () {
  // Current outfits allocated
  // Array of indices into #outfitSlots in order of use. Most recent at the front.
  function OutfitLRUCache(maxSize) {
    maximize_classCallCheck(this, OutfitLRUCache);

    _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _useHistory, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _maxSize, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maxSize, maxSize);
  }

  maximize_createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));

      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);

      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;

      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();

        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);

        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);

        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }]);

  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 * @param name Name of new outfit.
 */


maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");

function saveOutfit(name) {
  (0,external_kolmafia_.cliExecute)("outfit save ".concat(name));
} // Objective cache entries.


var cachedObjectives = {}; // Outfit cache entries. Keep 6 by default to avoid cluttering list.

var outfitCache = new OutfitLRUCache(6); // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = (0,template_string/* $stats */.gw)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = Item.all().filter(item => (0,external_kolmafia_.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 * @param cacheKey The cache key to check.
 * @param updateOnFamiliarChange Ignore cache if familiar has changed.
 * @param updateOnCanEquipChanged Ignore cache if stats have changed what can be equipped.
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (options.updateOnFamiliarChange && (0,external_kolmafia_.myFamiliar)() !== entry.familiar) {
    dist_logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }

  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    dist_logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 * @param entry The CacheEntry to apply
 */


function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;

  if (outfitName) {
    if (!(0,external_kolmafia_.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_.outfit)(outfitName);
    }

    var familiarEquip = entry.equipment.get((0,template_string/* $slot */.Jh)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_.equip)((0,template_string/* $slot */.Jh)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator = _createForOfIteratorHelper(entry.equipment),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            slot = _step$value[0],
            item = _step$value[1];

        if ((0,external_kolmafia_.equippedItem)(slot) !== item && (0,external_kolmafia_.availableAmount)(item) > 0) {
          (0,external_kolmafia_.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);

      dist_logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_.enthroneFamiliar)(entry.rider.get((0,template_string/* $item */.xr)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Crown of Thrones"])))) || (0,template_string/* $familiar */.HP)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["none"]))));
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_.bjornifyFamiliar)(entry.rider.get((0,template_string/* $item */.xr)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0,template_string/* $familiar */.HP)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["none"]))));
  }
}

var slotStructure = [(0,template_string/* $slots */.ei)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["hat"]))), (0,template_string/* $slots */.ei)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["back"]))), (0,template_string/* $slots */.ei)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["shirt"]))), (0,template_string/* $slots */.ei)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["weapon, off-hand"]))), (0,template_string/* $slots */.ei)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["pants"]))), (0,template_string/* $slots */.ei)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["acc1, acc2, acc3"]))), (0,template_string/* $slots */.ei)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */

function verifyCached(entry) {
  var success = true;

  var _iterator2 = _createForOfIteratorHelper(slotStructure),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var slotGroup = _step2.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;

        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            item = _ref2[1];

        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 2),
            item = _ref4[1];

        return item;
      });
      var equippedSet = desiredSlots.map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 1),
            slot = _ref6[0];

        return (0,external_kolmafia_.equippedItem)(slot);
      });

      if (!(0,utils/* setEqual */.$x)(desiredSet, equippedSet)) {
        dist_logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        success = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get((0,template_string/* $item */.xr)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_.myEnthronedFamiliar)()) {
      dist_logger.warning("Failed to apply ".concat(entry.rider.get((0,template_string/* $item */.xr)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat((0,template_string/* $item */.xr)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      success = false;
    }
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get((0,template_string/* $item */.xr)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_.myBjornedFamiliar)()) {
      dist_logger.warning("Failed to apply".concat(entry.rider.get((0,template_string/* $item */.xr)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat((0,template_string/* $item */.xr)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 * @param cacheKey The cache key to save.
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator3 = _createForOfIteratorHelper(cachedSlots),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _slot2 = _step3.value;
      equipment.set(_slot2, (0,external_kolmafia_.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set((0,template_string/* $slot */.Jh)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set((0,template_string/* $item */.xr)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_.myEnthronedFamiliar)());
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set((0,template_string/* $item */.xr)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator4 = _createForOfIteratorHelper(options.preventSlot),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var slot = _step4.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (options.preventSlot.includes((0,template_string/* $slot */.Jh)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes((0,template_string/* $slot */.Jh)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator5 = _createForOfIteratorHelper(Slot.all()),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _slot = _step5.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (!options.onlySlot.includes((0,template_string/* $slot */.Jh)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes((0,template_string/* $slot */.Jh)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_.myFamiliar)(), canEquipItemCount());
  cachedObjectives[cacheKey] = entry;

  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    dist_logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
      preventEquip = fullOptions.preventEquip,
      bonusEquip = fullOptions.bonusEquip,
      onlySlot = fullOptions.onlySlot,
      preventSlot = fullOptions.preventSlot; // Sort each group in objective to ensure consistent ordering in string

  var objective = [].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), _toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), _toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref7 => {
    var _ref8 = _slicedToArray(_ref7, 2),
        bonus = _ref8[1];

    return bonus !== 0;
  }).map(_ref9 => {
    var _ref10 = _slicedToArray(_ref9, 2),
        item = _ref10[0],
        bonus = _ref10[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())).join(", ");
  var cacheEntry = checkCache(objective, fullOptions);

  if (cacheEntry) {
    dist_logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);

    if (verifyCached(cacheEntry)) {
      dist_logger.info("Equipped cached ".concat(objective));
      return;
    }

    dist_logger.warning("Maximize cache application failed, maximizing...");
  }

  (0,external_kolmafia_.maximize)(objective, false);
  saveCached(objective, fullOptions);
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    maximize_classCallCheck(this, Requirement);

    _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  maximize_createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     * @param other Requirement to merge with.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption2, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;

      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement([].concat(_toConsumableArray(this.maximizeParameters), _toConsumableArray(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])),
        preventEquip: [].concat(_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 ? _other$maximizeOption2 : [])),
        bonusEquip: new Map([].concat(_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     * @param allRequirements Requirements to merge
     */

  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     */
    function maximize() {
      maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     * @param requirements Requirements to maximize on
     */

  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }

      Requirement.merge(requirements).maximize();
    }
  }]);

  return Requirement;
}();
// EXTERNAL MODULE: ./node_modules/libram/dist/lib.js
var lib = __webpack_require__(3311);
// EXTERNAL MODULE: ./node_modules/libram/dist/property.js + 1 modules
var property = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(2231);
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2015/MayoClinic.js
var MayoClinic_templateObject, MayoClinic_templateObject2, MayoClinic_templateObject3, MayoClinic_templateObject4, MayoClinic_templateObject5, MayoClinic_templateObject6, MayoClinic_templateObject7, MayoClinic_templateObject8, MayoClinic_templateObject9, MayoClinic_templateObject10;

function MayoClinic_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Mayo = {
  nex: (0,template_string/* $item */.xr)(MayoClinic_templateObject || (MayoClinic_templateObject = MayoClinic_taggedTemplateLiteral(["Mayonex"]))),
  diol: (0,template_string/* $item */.xr)(MayoClinic_templateObject2 || (MayoClinic_templateObject2 = MayoClinic_taggedTemplateLiteral(["Mayodiol"]))),
  zapine: (0,template_string/* $item */.xr)(MayoClinic_templateObject3 || (MayoClinic_templateObject3 = MayoClinic_taggedTemplateLiteral(["Mayozapine"]))),
  flex: (0,template_string/* $item */.xr)(MayoClinic_templateObject4 || (MayoClinic_templateObject4 = MayoClinic_taggedTemplateLiteral(["Mayoflex"])))
};
function installed() {
  return (0,external_kolmafia_.getWorkshed)() === (0,template_string/* $item */.xr)(MayoClinic_templateObject5 || (MayoClinic_templateObject5 = MayoClinic_taggedTemplateLiteral(["portable Mayo Clinic"])));
}
function have() {
  return haveItem($item(MayoClinic_templateObject6 || (MayoClinic_templateObject6 = MayoClinic_taggedTemplateLiteral(["portable Mayo Clinic"])))) || installed();
}
/**
 * Sets mayo minder to a particular mayo, and ensures you have enough of it.
 * @param mayo Mayo to use
 * @param quantity Quantity to ensure
 */

function setMayoMinder(mayo) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (getWorkshed() !== $item(MayoClinic_templateObject7 || (MayoClinic_templateObject7 = MayoClinic_taggedTemplateLiteral(["portable Mayo Clinic"])))) return false;

  if (!Object.values(Mayo).includes(mayo)) {
    logger.error("Invalid mayo selected");
    return false;
  }

  if (get("mayoInMouth") && get("mayoInMouth") !== mayo.name) {
    logger.error("Currently have incorrect mayo in mouth");
    return false;
  }

  retrieveItem(quantity, mayo);
  if (!haveItem($item(MayoClinic_templateObject8 || (MayoClinic_templateObject8 = MayoClinic_taggedTemplateLiteral(["Mayo Minder\u2122"]))))) buy($item(MayoClinic_templateObject9 || (MayoClinic_templateObject9 = MayoClinic_taggedTemplateLiteral(["Mayo Minder\u2122"]))));

  if (get("mayoMinderSetting") !== mayo.name) {
    withChoice(1076, toInt(mayo) - 8260, () => use($item(MayoClinic_templateObject10 || (MayoClinic_templateObject10 = MayoClinic_taggedTemplateLiteral(["Mayo Minder\u2122"])))));
  }

  return get("mayoMinderSetting") === mayo.name;
}
;// CONCATENATED MODULE: ./src/acquire.ts


var priceCaps = {
  "cuppa Voraci tea": 200000,
  "cuppa Sobrie tea": 200000,
  "potion of the field gar": 50000,
  "Special Seasoning": 20000,
  "spice melange": 500000
};
function acquire(qty, item, maxPrice) {
  var throwOnFail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  if (maxPrice === undefined) maxPrice = priceCaps[item.name];
  if (!item.tradeable || maxPrice !== undefined && maxPrice <= 0) return 0;
  if (maxPrice === undefined) throw "No price cap for ".concat(item.name, ".");
  if (qty <= 0) return 0;
  (0,external_kolmafia_.print)("Trying to acquire ".concat(qty, " ").concat(item.plural, "; max price ").concat(maxPrice.toFixed(0), "."), "green");
  if (qty * (0,external_kolmafia_.mallPrice)(item) > 1000000) throw "Aggregate cost too high! Probably a bug.";
  var startAmount = (0,external_kolmafia_.itemAmount)(item);
  var remaining = qty - startAmount;
  if (remaining <= 0) return qty;

  var logError = (target, source) => {
    throw "Failed to remove ".concat(target, " from ").concat(source);
  };

  if ((0,property/* get */.U2)("autoSatisfyWithCloset")) {
    var getCloset = Math.min(remaining, (0,external_kolmafia_.closetAmount)(item));
    if (!(0,external_kolmafia_.takeCloset)(getCloset, item) && throwOnFail) logError(item, "closet");
    remaining -= getCloset;
    if (remaining <= 0) return qty;
  }

  var getStorage = Math.min(remaining, (0,external_kolmafia_.storageAmount)(item));
  if (!(0,external_kolmafia_.takeStorage)(getStorage, item) && throwOnFail) logError(item, "storage");
  remaining -= getStorage;
  if (remaining <= 0) return qty;
  var getMall = Math.min(remaining, (0,external_kolmafia_.shopAmount)(item));

  if (!(0,external_kolmafia_.takeShop)(getMall, item)) {
    (0,external_kolmafia_.cliExecute)("refresh shop");
    (0,external_kolmafia_.cliExecute)("refresh inventory");
    remaining = qty - (0,external_kolmafia_.itemAmount)(item);
    getMall = Math.min(remaining, (0,external_kolmafia_.shopAmount)(item));
    if (!(0,external_kolmafia_.takeShop)(getMall, item) && throwOnFail) logError(item, "shop");
  }

  remaining -= getMall;
  if (remaining <= 0) return qty;
  if (maxPrice <= 0) throw "buying disabled for ".concat(item.name, ".");
  (0,external_kolmafia_.buy)(remaining, item, maxPrice);
  if ((0,external_kolmafia_.itemAmount)(item) < qty && throwOnFail) throw "Mall price too high for ".concat(item.name, ".");
  return (0,external_kolmafia_.itemAmount)(item) - startAmount;
}
// EXTERNAL MODULE: ./src/lib.ts
var src_lib = __webpack_require__(7442);
// EXTERNAL MODULE: ./src/options.ts
var options = __webpack_require__(330);
;// CONCATENATED MODULE: ./src/boost.ts
var boost_templateObject, boost_templateObject2, boost_templateObject3, boost_templateObject4, boost_templateObject5, boost_templateObject6, boost_templateObject7, boost_templateObject8, boost_templateObject9, boost_templateObject10, boost_templateObject11, boost_templateObject12, boost_templateObject13, boost_templateObject14, boost_templateObject15, boost_templateObject16, boost_templateObject17, boost_templateObject18, boost_templateObject19, boost_templateObject20, boost_templateObject21, boost_templateObject22, boost_templateObject23, boost_templateObject24, boost_templateObject25, boost_templateObject26, boost_templateObject27, boost_templateObject28, boost_templateObject29, boost_templateObject30, boost_templateObject31, boost_templateObject32, boost_templateObject33, boost_templateObject34, boost_templateObject35, boost_templateObject36, boost_templateObject37, boost_templateObject38, boost_templateObject39;

function boost_slicedToArray(arr, i) { return boost_arrayWithHoles(arr) || boost_iterableToArrayLimit(arr, i) || boost_unsupportedIterableToArray(arr, i) || boost_nonIterableRest(); }

function boost_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function boost_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function boost_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function boost_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = boost_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function boost_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function boost_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function boost_createClass(Constructor, protoProps, staticProps) { if (protoProps) boost_defineProperties(Constructor.prototype, protoProps); if (staticProps) boost_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function boost_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function boost_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function boost_toConsumableArray(arr) { return boost_arrayWithoutHoles(arr) || boost_iterableToArray(arr) || boost_unsupportedIterableToArray(arr) || boost_nonIterableSpread(); }

function boost_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function boost_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return boost_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return boost_arrayLikeToArray(o, minLen); }

function boost_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function boost_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return boost_arrayLikeToArray(arr); }

function boost_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var modifierCandidatePotions = {
  "Item Drop": [].concat(boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject || (boost_templateObject = boost_taggedTemplateLiteral(["resolution: be luckier, jug of porquoise juice, blue-frosted astral cupcake"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject2 || (boost_templateObject2 = boost_taggedTemplateLiteral(["recording of The Ballad of Richie Thingfinder, unusual oil, Salsa Caliente\u2122 candle"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject3 || (boost_templateObject3 = boost_taggedTemplateLiteral(["spidercow eye-cluster, blue snowcone, eagle feather, lavender candy heart"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject4 || (boost_templateObject4 = boost_taggedTemplateLiteral(["resolution: be happier, goblin water, tiny dancer, Polka Pop, pumpkin juice"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject5 || (boost_templateObject5 = boost_taggedTemplateLiteral(["green candy heart, Gene Tonic: Fish, Daily Affirmation: Work For Hours a Week"]))))),
  "Cold Resistance": [].concat(boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject6 || (boost_templateObject6 = boost_taggedTemplateLiteral(["patch of extra-warm fur"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject7 || (boost_templateObject7 = boost_taggedTemplateLiteral(["patent preventative tonic, Ancient Protector Soda, Tapioc berry, cold powder"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject8 || (boost_templateObject8 = boost_taggedTemplateLiteral(["recording of Rolando's Rondo of Resisto, rainbow glitter candle, can of black paint"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject9 || (boost_templateObject9 = boost_taggedTemplateLiteral(["lotion of hotness, lotion of spookiness, cyan seashell"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject10 || (boost_templateObject10 = boost_taggedTemplateLiteral(["sticky lava globs, pec oil"]))))),
  "Mysticality Percent": [].concat(boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject11 || (boost_templateObject11 = boost_taggedTemplateLiteral(["power pill, vial of baconstone juice, future drug: Smartinex, seal-brain elixir"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject12 || (boost_templateObject12 = boost_taggedTemplateLiteral(["Snarf berry, Lobos Mints, pressurized potion of perspicacity, black sheepskin diploma"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject13 || (boost_templateObject13 = boost_taggedTemplateLiteral(["pirate tract, Dennis's blessing of Minerva, flask of baconstone juice"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject14 || (boost_templateObject14 = boost_taggedTemplateLiteral(["potion of temporary gr8ness, boiling hot cocoa, miniature power pill"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject15 || (boost_templateObject15 = boost_taggedTemplateLiteral(["Mer-kin smartjuice, funky dried mushroom, Hawking's Elixir of Brilliance"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject16 || (boost_templateObject16 = boost_taggedTemplateLiteral(["tomato juice of powerful power, glittery mascara, jug of baconstone juice"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject17 || (boost_templateObject17 = boost_taggedTemplateLiteral(["ointment of the occult, votive of confidence, sparkler"]))))),
  "Spell Damage Percent": [].concat(boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject18 || (boost_templateObject18 = boost_taggedTemplateLiteral(["battery (AAA), pixel star, Gene Tonic: Elf, fudge-shaped hole in space-time"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject19 || (boost_templateObject19 = boost_taggedTemplateLiteral(["37x37x37 puzzle cube, Yeg's Motel hand soap, Daily Affirmation: Be a Mind Master"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject20 || (boost_templateObject20 = boost_taggedTemplateLiteral(["LOV Elixir #6, cordial of concentration, black eye shadow, demonic cow's blood"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject21 || (boost_templateObject21 = boost_taggedTemplateLiteral(["tobiko marble soda, concentrated cordial of concentration"])))), boost_toConsumableArray((0,template_string/* $items */.vS)(boost_templateObject22 || (boost_templateObject22 = boost_taggedTemplateLiteral(["wind-up meatcar"])))))
};
var modifierDailyBuffs = {
  "Item Drop": [[(0,template_string/* $effect */._G)(boost_templateObject23 || (boost_templateObject23 = boost_taggedTemplateLiteral(["Certainty"]))), () => 50 * ((0,external_kolmafia_.spleenLimit)() - (0,external_kolmafia_.mySpleenUse)()), () => true], [(0,template_string/* $effect */._G)(boost_templateObject24 || (boost_templateObject24 = boost_taggedTemplateLiteral(["Synthesis: Collection"]))), () => 30 * ((0,external_kolmafia_.spleenLimit)() - (0,external_kolmafia_.mySpleenUse)()), () => (0,lib/* have */.lf)((0,template_string/* $skill */.tm)(boost_templateObject25 || (boost_templateObject25 = boost_taggedTemplateLiteral(["Sweet Synthesis"]))))], [(0,template_string/* $effect */._G)(boost_templateObject26 || (boost_templateObject26 = boost_taggedTemplateLiteral(["Pork Barrel"]))), () => 50, () => (0,property/* get */.U2)("barrelShrineUnlocked") && !(0,property/* get */.U2)("_barrelPrayer") && (0,external_kolmafia_.myClass)() === (0,template_string/* $class */._$)(boost_templateObject27 || (boost_templateObject27 = boost_taggedTemplateLiteral(["Pastamancer"])))]],
  "Cold Resistance": [[(0,template_string/* $effect */._G)(boost_templateObject28 || (boost_templateObject28 = boost_taggedTemplateLiteral(["Synthesis: Cold"]))), () => 30 * ((0,external_kolmafia_.spleenLimit)() - (0,external_kolmafia_.mySpleenUse)()), () => (0,lib/* have */.lf)((0,template_string/* $skill */.tm)(boost_templateObject29 || (boost_templateObject29 = boost_taggedTemplateLiteral(["Sweet Synthesis"]))))], [(0,template_string/* $effect */._G)(boost_templateObject30 || (boost_templateObject30 = boost_taggedTemplateLiteral(["Cold as Nice"]))), () => 50, () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(boost_templateObject31 || (boost_templateObject31 = boost_taggedTemplateLiteral(["Beach Comb"])))) && !(0,property/* get */.U2)("_beachHeadsUsed").toString().split(",").includes("2")], [(0,template_string/* $effect */._G)(boost_templateObject32 || (boost_templateObject32 = boost_taggedTemplateLiteral(["Feeling Peaceful"]))), () => 20 * (3 - (0,property/* get */.U2)("_feelPeacefulUsed")), () => (0,lib/* have */.lf)((0,template_string/* $skill */.tm)(boost_templateObject33 || (boost_templateObject33 = boost_taggedTemplateLiteral(["Feel Peaceful"]))))], [(0,template_string/* $effect */._G)(boost_templateObject34 || (boost_templateObject34 = boost_taggedTemplateLiteral(["Force of Mayo Be With You"]))), () => 20, () => installed() && !(0,property/* get */.U2)("_mayoTankSoaked")], [(0,template_string/* $effect */._G)(boost_templateObject35 || (boost_templateObject35 = boost_taggedTemplateLiteral(["Cold Sweat"]))), () => 50, () => (0,property/* get */.U2)("questS02Monkees") === "finished" && !(0,property/* get */.U2)("_momFoodReceived")], [(0,template_string/* $effect */._G)(boost_templateObject36 || (boost_templateObject36 = boost_taggedTemplateLiteral(["Video... Games?"]))), () => 5, () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(boost_templateObject37 || (boost_templateObject37 = boost_taggedTemplateLiteral(["defective Game Grid token"])))) && !(0,property/* get */.U2)("_defectiveTokenUsed")]]
};

var Potion = /*#__PURE__*/function () {
  function Potion(item, modifier) {
    boost_classCallCheck(this, Potion);

    boost_defineProperty(this, "item", void 0);

    boost_defineProperty(this, "modifier", void 0);

    this.item = item;
    this.modifier = modifier;
  }

  boost_createClass(Potion, [{
    key: "price",
    value: function price() {
      return (0,external_kolmafia_.npcPrice)(this.item) > 0 ? (0,external_kolmafia_.npcPrice)(this.item) : (0,external_kolmafia_.mallPrice)(this.item);
    }
  }, {
    key: "effect",
    value: function effect() {
      return modifier_get("Effect", this.item);
    }
  }, {
    key: "effectDuration",
    value: function effectDuration() {
      return modifier_get("Effect Duration", this.item);
    }
  }, {
    key: "value",
    value: function value() {
      if (this.modifier === "Item Drop") {
        return modifier_get("Item Drop", this.effect()) + 1.4 * modifier_get("Familiar Weight", this.effect());
      }

      return modifier_get(this.modifier, this.effect());
    }
  }, {
    key: "unitCost",
    value: function unitCost() {
      return this.price() / (this.value() * this.effectDuration());
    }
  }, {
    key: "consume",
    value: function consume(remainingTurnsSpent, maxUnitCost) {
      var count = Math.max(0, Math.ceil((remainingTurnsSpent - (0,external_kolmafia_.haveEffect)(this.effect())) / this.effectDuration()));
      acquire(count, this.item, maxUnitCost * this.value() * this.effectDuration(), false);
      (0,external_kolmafia_.use)(Math.min(count, (0,external_kolmafia_.itemAmount)(this.item)), this.item);
    }
  }]);

  return Potion;
}();

function boost(modifier, target, maxUnitCost) {
  var _modifierDailyBuffs$m, _modifierCandidatePot;

  var remainingTurnsSpent = Math.ceil((options/* default.stopTurnsSpent */.Z.stopTurnsSpent - (0,src_lib/* currentTurnsSpent */.OF)()) * (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(boost_templateObject38 || (boost_templateObject38 = boost_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) ? 10 / 11 : 1));
  var dailyBuffs = (_modifierDailyBuffs$m = modifierDailyBuffs[modifier]) !== null && _modifierDailyBuffs$m !== void 0 ? _modifierDailyBuffs$m : [];

  var _iterator = boost_createForOfIteratorHelper(dailyBuffs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = boost_slicedToArray(_step.value, 3),
          effect = _step$value[0],
          turnsAvailable = _step$value[1],
          available = _step$value[2];

      if (modifier_get(modifier) >= target) break; // Only activate cold buffs when they'll cover our remaining time here.

      if (modifier === "Cold Resistance" && turnsAvailable() < remainingTurnsSpent) continue;

      while (available() && turnsAvailable() > 0 && (0,external_kolmafia_.haveEffect)(effect) < remainingTurnsSpent) {
        (0,external_kolmafia_.cliExecute)(effect.default);

        if ((0,external_kolmafia_.mySpleenUse)() >= 3 - (0,property/* get */.U2)("currentMojoFilters")) {
          (0,external_kolmafia_.use)(3 - (0,property/* get */.U2)("currentMojoFilters"), (0,template_string/* $item */.xr)(boost_templateObject39 || (boost_templateObject39 = boost_taggedTemplateLiteral(["mojo filter"]))));
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var candidates = boost_toConsumableArray((_modifierCandidatePot = modifierCandidatePotions[modifier]) !== null && _modifierCandidatePot !== void 0 ? _modifierCandidatePot : []).map(item => new Potion(item, modifier));

  var unitCost = potion => potion.unitCost();

  candidates.sort((x, y) => unitCost(x) - unitCost(y));

  var _iterator2 = boost_createForOfIteratorHelper(candidates),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var candidate = _step2.value;
      if (modifier_get(modifier) >= target) break;
      if (candidate.unitCost() > maxUnitCost) break;
      candidate.consume(remainingTurnsSpent, maxUnitCost);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
// EXTERNAL MODULE: ./src/combat.ts + 1 modules
var combat = __webpack_require__(5911);
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_templateObject;

function SongBoom_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = (0,template_string/* $item */.xr)(SongBoom_templateObject || (SongBoom_templateObject = SongBoom_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
function SongBoom_have() {
  return (0,lib/* have */.lf)(item);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

function song() {
  var stored = (0,property/* get */.U2)("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * Song changes left today.
 */

function songChangesLeft() {
  return (0,property/* get */.U2)("_boomBoxSongsLeft");
}
/**
 * Change the song.
 * @param newSong Song to change to.
 */

function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0,external_kolmafia_.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */

function dropProgress() {
  return get("_boomBoxFights");
}
;// CONCATENATED MODULE: ./src/dailies.ts
var dailies_templateObject, dailies_templateObject2, dailies_templateObject3, dailies_templateObject4, dailies_templateObject5, dailies_templateObject6, dailies_templateObject7, dailies_templateObject8, dailies_templateObject9, dailies_templateObject10, dailies_templateObject11, dailies_templateObject12, dailies_templateObject13, dailies_templateObject14, dailies_templateObject15, dailies_templateObject16, dailies_templateObject17, dailies_templateObject18, dailies_templateObject19, dailies_templateObject20, dailies_templateObject21, dailies_templateObject22;

function dailies_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dailies_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dailies_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dailies_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dailies_arrayLikeToArray(o, minLen); }

function dailies_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dailies_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function voterSetup() {
  if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(dailies_templateObject || (dailies_templateObject = dailies_taggedTemplateLiteral(["\"I Voted!\" sticker"])))) || !((0,property/* get */.U2)("voteAlways") || (0,property/* get */.U2)("_voteToday"))) return;
  var voterValueTable = [{
    monster: (0,template_string/* $monster */.O4)(dailies_templateObject2 || (dailies_templateObject2 = dailies_taggedTemplateLiteral(["terrible mutant"]))),
    value: (0,lib/* getSaleValue */.xI)((0,template_string/* $item */.xr)(dailies_templateObject3 || (dailies_templateObject3 = dailies_taggedTemplateLiteral(["glob of undifferentiated tissue"])))) + 10
  }, {
    monster: (0,template_string/* $monster */.O4)(dailies_templateObject4 || (dailies_templateObject4 = dailies_taggedTemplateLiteral(["angry ghost"]))),
    value: (0,lib/* getSaleValue */.xI)((0,template_string/* $item */.xr)(dailies_templateObject5 || (dailies_templateObject5 = dailies_taggedTemplateLiteral(["ghostly ectoplasm"])))) * 1.11
  }, {
    monster: (0,template_string/* $monster */.O4)(dailies_templateObject6 || (dailies_templateObject6 = dailies_taggedTemplateLiteral(["government bureaucrat"]))),
    value: (0,lib/* getSaleValue */.xI)((0,template_string/* $item */.xr)(dailies_templateObject7 || (dailies_templateObject7 = dailies_taggedTemplateLiteral(["absentee voter ballot"])))) * 0.05 + 75 * 0.25 + 50
  }, {
    monster: (0,template_string/* $monster */.O4)(dailies_templateObject8 || (dailies_templateObject8 = dailies_taggedTemplateLiteral(["annoyed snake"]))),
    value: 25 * 0.5 + 25
  }, {
    monster: (0,template_string/* $monster */.O4)(dailies_templateObject9 || (dailies_templateObject9 = dailies_taggedTemplateLiteral(["slime blob"]))),
    value: 20 * 0.4 + 50 * 0.2 + 250 * 0.01
  }];
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  var votingMonsterPriority = voterValueTable.sort((a, b) => b.value - a.value).map(element => element.monster.name);
  var initPriority = new Map([["Cold Resistance: +3", 100], ["Meat Drop: +30", 10], ["Item Drop: +15", 9], ["Familiar Experience: +2", 8], ["Adventures: +1", 7], ["Monster Level: +10", 5], ["".concat((0,external_kolmafia_.myPrimestat)(), " Percent: +25"), 3], ["Experience (".concat((0,external_kolmafia_.myPrimestat)(), "): +4"), 2], ["Meat Drop: -30", -2], ["Item Drop: -15", -2], ["Familiar Experience: -2", -2]]);
  var monsterVote = votingMonsterPriority.indexOf((0,property/* get */.U2)("_voteMonster1")) < votingMonsterPriority.indexOf((0,property/* get */.U2)("_voteMonster2")) ? 1 : 2;
  var voteLocalPriorityArr = [[0, initPriority.get((0,property/* get */.U2)("_voteLocal1")) || ((0,property/* get */.U2)("_voteLocal1").indexOf("-") === -1 ? 1 : -1)], [1, initPriority.get((0,property/* get */.U2)("_voteLocal2")) || ((0,property/* get */.U2)("_voteLocal2").indexOf("-") === -1 ? 1 : -1)], [2, initPriority.get((0,property/* get */.U2)("_voteLocal3")) || ((0,property/* get */.U2)("_voteLocal3").indexOf("-") === -1 ? 1 : -1)], [3, initPriority.get((0,property/* get */.U2)("_voteLocal4")) || ((0,property/* get */.U2)("_voteLocal4").indexOf("-") === -1 ? 1 : -1)]];
  var bestVotes = voteLocalPriorityArr.sort((a, b) => b[1] - a[1]);
  var firstInit = bestVotes[0][0];
  var secondInit = bestVotes[1][0];
  (0,external_kolmafia_.visitUrl)("choice.php?option=1&whichchoice=1331&g=".concat(monsterVote, "&local[]=").concat(firstInit, "&local[]=").concat(secondInit));
}

function dailies() {
  if (!(0,template_string/* $locations */.xw)(dailies_templateObject10 || (dailies_templateObject10 = dailies_taggedTemplateLiteral(["Site Alpha Quarry, Site Alpha Primary Lab"]))).includes(options/* default.location */.Z.location) && (0,lib/* have */.lf)((0,template_string/* $familiar */.HP)(dailies_templateObject11 || (dailies_templateObject11 = dailies_taggedTemplateLiteral(["Mu"])))) && !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(dailies_templateObject12 || (dailies_templateObject12 = dailies_taggedTemplateLiteral(["luck incense"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(dailies_templateObject13 || (dailies_templateObject13 = dailies_taggedTemplateLiteral(["Mu"]))));
    (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(dailies_templateObject14 || (dailies_templateObject14 = dailies_taggedTemplateLiteral(["box of Familiar Jacks"]))));
  }

  if (SongBoom_have()) setSong("Food Vibrations");
  if ((0,property/* get */.U2)("horseryAvailable") && (0,property/* get */.U2)("_horsery") !== "pale horse") (0,external_kolmafia_.cliExecute)("horsery pale");

  if ((0,external_kolmafia_.myClass)() === (0,template_string/* $class */._$)(dailies_templateObject15 || (dailies_templateObject15 = dailies_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_.myThrall)() !== (0,template_string/* $thrall */.ev)(dailies_templateObject16 || (dailies_templateObject16 = dailies_taggedTemplateLiteral(["Spice Ghost"])))) {
    (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(dailies_templateObject17 || (dailies_templateObject17 = dailies_taggedTemplateLiteral(["Bind Spice Ghost"]))));
  }

  (0,external_kolmafia_.retrieveItem)((0,template_string/* $item */.xr)(dailies_templateObject18 || (dailies_templateObject18 = dailies_taggedTemplateLiteral(["seal tooth"]))));

  if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(dailies_templateObject19 || (dailies_templateObject19 = dailies_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) && modifier_get("Cold Resistance", (0,template_string/* $item */.xr)(dailies_templateObject20 || (dailies_templateObject20 = dailies_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) < 5) {
    (0,external_kolmafia_.cliExecute)("briefcase enchantment cold");
  } // eslint-disable-next-line libram/verify-constants


  if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(dailies_templateObject21 || (dailies_templateObject21 = dailies_taggedTemplateLiteral(["Site Alpha Primary Lab"])))) {
    var _iterator = dailies_createForOfIteratorHelper((0,template_string/* $effects */.lh)(dailies_templateObject22 || (dailies_templateObject22 = dailies_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance, Pride of the Puffin, Drescher's Annoying Noise"])))),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var effect = _step.value;
        (0,lib/* uneffect */.Lo)(effect);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  voterSetup();
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_templateObject, AsdonMartin_templateObject2, AsdonMartin_templateObject3, AsdonMartin_templateObject4, AsdonMartin_templateObject5, AsdonMartin_templateObject6, AsdonMartin_templateObject7, AsdonMartin_templateObject8, AsdonMartin_templateObject9, AsdonMartin_templateObject10, AsdonMartin_templateObject11, AsdonMartin_templateObject12, AsdonMartin_templateObject13;

function AsdonMartin_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/**
 * Returns whether or not we have the Asdon installed in the workshed at present.
 */

function AsdonMartin_installed() {
  return (0,external_kolmafia_.getWorkshed)() === (0,template_string/* $item */.xr)(AsdonMartin_templateObject || (AsdonMartin_templateObject = AsdonMartin_taggedTemplateLiteral(["Asdon Martin keyfob"])));
}
/**
 * Returns true if we have the Asdon or if it's installed.
 */

function AsdonMartin_have() {
  return AsdonMartin_installed() || haveItem($item(AsdonMartin_templateObject2 || (AsdonMartin_templateObject2 = AsdonMartin_taggedTemplateLiteral(["Asdon Martin keyfob"]))));
}
var fuelSkiplist = (0,template_string/* $items */.vS)(AsdonMartin_templateObject3 || (AsdonMartin_templateObject3 = AsdonMartin_taggedTemplateLiteral(["cup of \"tea\", thermos of \"whiskey\", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of \"milk\""])));

function priceTooOld(item) {
  return (0,external_kolmafia_.historicalPrice)(item) === 0 || (0,external_kolmafia_.historicalAge)(item) >= 7;
}

function price(item) {
  return priceTooOld(item) ? (0,external_kolmafia_.mallPrice)(item) : (0,external_kolmafia_.historicalPrice)(item);
} // Efficiency in meat per fuel.


function calculateFuelEfficiency(it, targetUnits) {
  var usePrecisePrice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var units = (0,lib/* getAverageAdventures */.N)(it);
  return (usePrecisePrice ? price(it) : (0,external_kolmafia_.mallPrice)(it)) / Math.min(targetUnits, units);
}

function isFuelItem(it) {
  return !(0,external_kolmafia_.isNpcItem)(it) && it.fullness + it.inebriety > 0 && (0,lib/* getAverageAdventures */.N)(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}

var potentialFuel = (0,template_string/* $items */.vS)(AsdonMartin_templateObject4 || (AsdonMartin_templateObject4 = AsdonMartin_taggedTemplateLiteral([""]))).filter(isFuelItem);

function getBestFuel(targetUnits) {
  if (potentialFuel.filter(priceTooOld).length > 100) {
    (0,external_kolmafia_.mallPrices)("food");
    (0,external_kolmafia_.mallPrices)("booze");
  }

  var key1 = item => -(0,lib/* getAverageAdventures */.N)(item);

  var key2 = item => calculateFuelEfficiency(item, targetUnits);

  potentialFuel.sort((x, y) => key1(x) - key1(y));
  potentialFuel.sort((x, y) => key2(x) - key2(y)); // Get precise price for the top candidates.

  var candidates = potentialFuel.slice(0, 10);

  var key3 = item => calculateFuelEfficiency(item, targetUnits, true);

  candidates.sort((x, y) => key3(x) - key3(y));

  if (calculateFuelEfficiency(candidates[0], targetUnits, true) > 100) {
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. " + "This means something went wrong.");
  }

  return candidates[0];
}

function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = (0,external_kolmafia_.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat((0,external_kolmafia_.toInt)(it), "&go=Convert%21"));
  return result.includes("The display updates with a");
}
/**
 * Fill your Asdon Martin to the given fuel level in the cheapest way possible
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */


function fillTo(targetUnits) {
  if (!AsdonMartin_installed()) return false;

  while ((0,external_kolmafia_.getFuel)() < targetUnits) {
    var remaining = targetUnits - (0,external_kolmafia_.getFuel)();
    var fuel = getBestFuel(remaining);
    var count = Math.ceil(targetUnits / (0,lib/* getAverageAdventures */.N)(fuel));
    (0,external_kolmafia_.retrieveItem)(count, fuel);

    if (!insertFuel(fuel, count)) {
      throw new Error("Failed to fuel Asdon Martin.");
    }
  }

  return (0,external_kolmafia_.getFuel)() >= targetUnits;
}
/**
 * Object consisting of the various Asdon driving styles
 */

var Driving = {
  Obnoxiously: (0,template_string/* $effect */._G)(AsdonMartin_templateObject5 || (AsdonMartin_templateObject5 = AsdonMartin_taggedTemplateLiteral(["Driving Obnoxiously"]))),
  Stealthily: (0,template_string/* $effect */._G)(AsdonMartin_templateObject6 || (AsdonMartin_templateObject6 = AsdonMartin_taggedTemplateLiteral(["Driving Stealthily"]))),
  Wastefully: (0,template_string/* $effect */._G)(AsdonMartin_templateObject7 || (AsdonMartin_templateObject7 = AsdonMartin_taggedTemplateLiteral(["Driving Wastefully"]))),
  Safely: (0,template_string/* $effect */._G)(AsdonMartin_templateObject8 || (AsdonMartin_templateObject8 = AsdonMartin_taggedTemplateLiteral(["Driving Safely"]))),
  Recklessly: (0,template_string/* $effect */._G)(AsdonMartin_templateObject9 || (AsdonMartin_templateObject9 = AsdonMartin_taggedTemplateLiteral(["Driving Recklessly"]))),
  Intimidatingly: (0,template_string/* $effect */._G)(AsdonMartin_templateObject10 || (AsdonMartin_templateObject10 = AsdonMartin_taggedTemplateLiteral(["Driving Intimidatingly"]))),
  Quickly: (0,template_string/* $effect */._G)(AsdonMartin_templateObject11 || (AsdonMartin_templateObject11 = AsdonMartin_taggedTemplateLiteral(["Driving Quickly"]))),
  Observantly: (0,template_string/* $effect */._G)(AsdonMartin_templateObject12 || (AsdonMartin_templateObject12 = AsdonMartin_taggedTemplateLiteral(["Driving Observantly"]))),
  Waterproofly: (0,template_string/* $effect */._G)(AsdonMartin_templateObject13 || (AsdonMartin_templateObject13 = AsdonMartin_taggedTemplateLiteral(["Driving Waterproofly"])))
};
/**
 * Attempt to drive with a particular style for a particular number of turns
 * @param style The driving style to use
 * @param turns The number of turns to attempt to get
 * @returns Whether we have at least as many turns as requested of said driving style.
 */

function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!Object.values(Driving).includes(style)) return false;
  if (!AsdonMartin_installed()) return false;
  if ((0,external_kolmafia_.haveEffect)(style) >= turns) return true;
  var fuelNeeded = 37 * Math.ceil((turns - (0,external_kolmafia_.haveEffect)(style)) / 30);
  fillTo(fuelNeeded);

  while ((0,external_kolmafia_.getFuel)() >= 37 && (0,external_kolmafia_.haveEffect)(style) < turns) {
    (0,external_kolmafia_.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  }

  return (0,external_kolmafia_.haveEffect)(style) >= turns;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/mood.js
var mood_templateObject, mood_templateObject2, mood_templateObject3, mood_templateObject4, mood_templateObject5, mood_templateObject6, mood_templateObject7, mood_templateObject8, mood_templateObject9, mood_templateObject10, mood_templateObject11, mood_templateObject12;

function mood_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function mood_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? mood_ownKeys(Object(source), !0).forEach(function (key) { mood_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : mood_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function mood_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = mood_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function mood_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mood_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mood_arrayLikeToArray(o, minLen); }

function mood_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function mood_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function mood_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) mood_setPrototypeOf(subClass, superClass); }

function mood_setPrototypeOf(o, p) { mood_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return mood_setPrototypeOf(o, p); }

function mood_createSuper(Derived) { var hasNativeReflectConstruct = mood_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = mood_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = mood_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return mood_possibleConstructorReturn(this, result); }; }

function mood_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return mood_assertThisInitialized(self); }

function mood_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function mood_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function mood_getPrototypeOf(o) { mood_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return mood_getPrototypeOf(o); }

function mood_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mood_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mood_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function mood_createClass(Constructor, protoProps, staticProps) { if (protoProps) mood_defineProperties(Constructor.prototype, protoProps); if (staticProps) mood_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var MpSource = /*#__PURE__*/function () {
  function MpSource() {
    mood_classCallCheck(this, MpSource);
  }

  mood_createClass(MpSource, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return null;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.availableMpMin();
    }
  }]);

  return MpSource;
}();
var OscusSoda = /*#__PURE__*/function (_MpSource) {
  mood_inherits(OscusSoda, _MpSource);

  var _super = mood_createSuper(OscusSoda);

  function OscusSoda() {
    mood_classCallCheck(this, OscusSoda);

    return _super.apply(this, arguments);
  }

  mood_createClass(OscusSoda, [{
    key: "available",
    value: function available() {
      return (0,lib/* have */.lf)((0,template_string/* $item */.xr)(mood_templateObject || (mood_templateObject = mood_taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }, {
    key: "usesRemaining",
    value: function usesRemaining() {
      return (0,property/* get */.U2)("oscusSodaUsed") ? 0 : 1;
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      return this.available() ? 200 : 0;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.available() ? 300 : 0;
    }
  }, {
    key: "execute",
    value: function execute() {
      (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(mood_templateObject2 || (mood_templateObject2 = mood_taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }]);

  return OscusSoda;
}(MpSource);

mood_defineProperty(OscusSoda, "instance", new OscusSoda());

var MagicalSausages = /*#__PURE__*/function (_MpSource2) {
  mood_inherits(MagicalSausages, _MpSource2);

  var _super2 = mood_createSuper(MagicalSausages);

  function MagicalSausages() {
    mood_classCallCheck(this, MagicalSausages);

    return _super2.apply(this, arguments);
  }

  mood_createClass(MagicalSausages, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return 23 - (0,property/* get */.U2)("_sausagesEaten");
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      var maxSausages = Math.min(23 - (0,property/* get */.U2)("_sausagesEaten"), (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(mood_templateObject3 || (mood_templateObject3 = mood_taggedTemplateLiteral(["magical sausage"])))) + (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(mood_templateObject4 || (mood_templateObject4 = mood_taggedTemplateLiteral(["magical sausage casing"])))));
      return Math.min((0,external_kolmafia_.myMaxmp)(), 999) * maxSausages;
    }
  }, {
    key: "execute",
    value: function execute() {
      var mpSpaceAvailable = (0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)();
      if (mpSpaceAvailable < 700) return;
      var maxSausages = Math.min(23 - (0,property/* get */.U2)("_sausagesEaten"), (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(mood_templateObject5 || (mood_templateObject5 = mood_taggedTemplateLiteral(["magical sausage"])))) + (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(mood_templateObject6 || (mood_templateObject6 = mood_taggedTemplateLiteral(["magical sausage casing"])))), Math.floor(((0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)()) / Math.min((0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)(), 999)));
      (0,external_kolmafia_.retrieveItem)(maxSausages, (0,template_string/* $item */.xr)(mood_templateObject7 || (mood_templateObject7 = mood_taggedTemplateLiteral(["magical sausage"]))));
      (0,external_kolmafia_.eat)(maxSausages, (0,template_string/* $item */.xr)(mood_templateObject8 || (mood_templateObject8 = mood_taggedTemplateLiteral(["magical sausage"]))));
    }
  }]);

  return MagicalSausages;
}(MpSource);

mood_defineProperty(MagicalSausages, "instance", new MagicalSausages());

var MoodElement = /*#__PURE__*/function () {
  function MoodElement() {
    mood_classCallCheck(this, MoodElement);
  }

  mood_createClass(MoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      return 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return 1;
    }
  }]);

  return MoodElement;
}();

var SkillMoodElement = /*#__PURE__*/function (_MoodElement) {
  mood_inherits(SkillMoodElement, _MoodElement);

  var _super3 = mood_createSuper(SkillMoodElement);

  function SkillMoodElement(skill) {
    var _this;

    mood_classCallCheck(this, SkillMoodElement);

    _this = _super3.call(this);

    mood_defineProperty(mood_assertThisInitialized(_this), "skill", void 0);

    _this.skill = skill;
    return _this;
  }

  mood_createClass(SkillMoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      var turns = (0,external_kolmafia_.turnsPerCast)(this.skill);
      return turns > 0 ? (0,external_kolmafia_.mpCost)(this.skill) / turns : 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return (0,external_kolmafia_.turnsPerCast)(this.skill);
    }
  }, {
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var effect = (0,external_kolmafia_.toEffect)(this.skill);
      var initialTurns = (0,external_kolmafia_.haveEffect)(effect);
      if (!(0,external_kolmafia_.haveSkill)(this.skill)) return false;
      if (initialTurns >= ensureTurns) return true; // Deal with song slots.

      if (mood.options.songSlots.length > 0 && (0,lib/* isSong */.rU)(this.skill) && !(0,lib/* have */.lf)(effect)) {
        var activeSongs = (0,lib/* getActiveSongs */.b_)();

        var _iterator = mood_createForOfIteratorHelper(activeSongs),
            _step;

        try {
          var _loop = function _loop() {
            var song = _step.value;
            var slot = mood.options.songSlots.find(slot => slot.includes(song));
            if (!slot || slot.includes(effect)) (0,external_kolmafia_.cliExecute)("shrug ".concat(song));
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var oldRemainingCasts = -1;
      var remainingCasts = Math.ceil((ensureTurns - (0,external_kolmafia_.haveEffect)(effect)) / (0,external_kolmafia_.turnsPerCast)(this.skill));

      while (remainingCasts > 0 && oldRemainingCasts !== remainingCasts) {
        var maxCasts = void 0;

        if ((0,external_kolmafia_.hpCost)(this.skill) > 0) {
          // FIXME: restore HP
          maxCasts = Math.floor((0,external_kolmafia_.myHp)() / (0,external_kolmafia_.hpCost)(this.skill));
        } else {
          var cost = (0,external_kolmafia_.mpCost)(this.skill);
          maxCasts = Math.floor((0,external_kolmafia_.myMp)() / cost);

          if (maxCasts === 0) {
            mood.moreMp(cost);
            maxCasts = Math.floor((0,external_kolmafia_.myMp)() / cost);
          }
        }

        var casts = (0,utils/* clamp */.uZ)(remainingCasts, 0, Math.min(100, maxCasts));
        (0,external_kolmafia_.useSkill)(casts, this.skill);
        oldRemainingCasts = remainingCasts;
        remainingCasts = Math.ceil((ensureTurns - (0,external_kolmafia_.haveEffect)(effect)) / (0,external_kolmafia_.turnsPerCast)(this.skill));
      }

      return (0,external_kolmafia_.haveEffect)(effect) > ensureTurns;
    }
  }]);

  return SkillMoodElement;
}(MoodElement);

var PotionMoodElement = /*#__PURE__*/function (_MoodElement2) {
  mood_inherits(PotionMoodElement, _MoodElement2);

  var _super4 = mood_createSuper(PotionMoodElement);

  function PotionMoodElement(potion, maxPricePerTurn) {
    var _this2;

    mood_classCallCheck(this, PotionMoodElement);

    _this2 = _super4.call(this);

    mood_defineProperty(mood_assertThisInitialized(_this2), "potion", void 0);

    mood_defineProperty(mood_assertThisInitialized(_this2), "maxPricePerTurn", void 0);

    _this2.potion = potion;
    _this2.maxPricePerTurn = maxPricePerTurn;
    return _this2;
  }

  mood_createClass(PotionMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      // FIXME: Smarter buying logic.
      // FIXME: Allow constructing stuff (e.g. snow cleats)
      var effect = (0,external_kolmafia_.effectModifier)(this.potion, "Effect");
      var effectTurns = (0,external_kolmafia_.haveEffect)(effect);
      var turnsPerUse = (0,external_kolmafia_.numericModifier)(this.potion, "Effect Duration");

      if ((0,external_kolmafia_.mallPrice)(this.potion) > this.maxPricePerTurn * turnsPerUse) {
        return false;
      }

      if (effectTurns < ensureTurns) {
        var uses = (ensureTurns - effectTurns) / turnsPerUse;
        var quantityToBuy = (0,utils/* clamp */.uZ)(uses - (0,external_kolmafia_.availableAmount)(this.potion), 0, 100);
        (0,external_kolmafia_.buy)(quantityToBuy, this.potion, this.maxPricePerTurn * turnsPerUse);
        var quantityToUse = (0,utils/* clamp */.uZ)(uses, 0, (0,external_kolmafia_.availableAmount)(this.potion));
        (0,external_kolmafia_.use)(quantityToUse, this.potion);
      }

      return (0,external_kolmafia_.haveEffect)(effect) >= ensureTurns;
    }
  }]);

  return PotionMoodElement;
}(MoodElement);

var GenieMoodElement = /*#__PURE__*/function (_MoodElement3) {
  mood_inherits(GenieMoodElement, _MoodElement3);

  var _super5 = mood_createSuper(GenieMoodElement);

  function GenieMoodElement(effect) {
    var _this3;

    mood_classCallCheck(this, GenieMoodElement);

    _this3 = _super5.call(this);

    mood_defineProperty(mood_assertThisInitialized(_this3), "effect", void 0);

    _this3.effect = effect;
    return _this3;
  }

  mood_createClass(GenieMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      if ((0,external_kolmafia_.haveEffect)(this.effect) >= ensureTurns) return true;
      var neededWishes = Math.ceil(((0,external_kolmafia_.haveEffect)(this.effect) - ensureTurns) / 20);
      var wishesToBuy = (0,utils/* clamp */.uZ)(neededWishes - (0,external_kolmafia_.availableAmount)((0,template_string/* $item */.xr)(mood_templateObject9 || (mood_templateObject9 = mood_taggedTemplateLiteral(["pocket wish"])))), 0, 20);
      (0,external_kolmafia_.buy)(wishesToBuy, (0,template_string/* $item */.xr)(mood_templateObject10 || (mood_templateObject10 = mood_taggedTemplateLiteral(["pocket wish"]))), 50000);
      var wishesToUse = (0,utils/* clamp */.uZ)(neededWishes, 0, (0,external_kolmafia_.availableAmount)((0,template_string/* $item */.xr)(mood_templateObject11 || (mood_templateObject11 = mood_taggedTemplateLiteral(["pocket wish"])))));

      for (; wishesToUse > 0; wishesToUse--) {
        (0,external_kolmafia_.cliExecute)("genie effect ".concat(this.effect.name));
      }

      return (0,external_kolmafia_.haveEffect)(this.effect) >= ensureTurns;
    }
  }]);

  return GenieMoodElement;
}(MoodElement);

var CustomMoodElement = /*#__PURE__*/function (_MoodElement4) {
  mood_inherits(CustomMoodElement, _MoodElement4);

  var _super6 = mood_createSuper(CustomMoodElement);

  function CustomMoodElement(effect, gainEffect) {
    var _this4;

    mood_classCallCheck(this, CustomMoodElement);

    _this4 = _super6.call(this);

    mood_defineProperty(mood_assertThisInitialized(_this4), "effect", void 0);

    mood_defineProperty(mood_assertThisInitialized(_this4), "gainEffect", void 0);

    _this4.effect = effect;
    _this4.gainEffect = gainEffect !== null && gainEffect !== void 0 ? gainEffect : () => (0,external_kolmafia_.cliExecute)(effect.default);
    return _this4;
  }

  mood_createClass(CustomMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var currentTurns = (0,external_kolmafia_.haveEffect)(this.effect);
      var lastCurrentTurns = -1;

      while (currentTurns < ensureTurns && currentTurns !== lastCurrentTurns) {
        this.gainEffect();
        lastCurrentTurns = currentTurns;
        currentTurns = (0,external_kolmafia_.haveEffect)(this.effect);
      }

      return (0,external_kolmafia_.haveEffect)(this.effect) > ensureTurns;
    }
  }]);

  return CustomMoodElement;
}(MoodElement);

var AsdonMoodElement = /*#__PURE__*/function (_MoodElement5) {
  mood_inherits(AsdonMoodElement, _MoodElement5);

  var _super7 = mood_createSuper(AsdonMoodElement);

  function AsdonMoodElement(effect) {
    var _this5;

    mood_classCallCheck(this, AsdonMoodElement);

    _this5 = _super7.call(this);

    mood_defineProperty(mood_assertThisInitialized(_this5), "effect", void 0);

    _this5.effect = effect;
    return _this5;
  }

  mood_createClass(AsdonMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      return drive(this.effect, ensureTurns);
    }
  }]);

  return AsdonMoodElement;
}(MoodElement);
/**
 * Class representing a mood object. Add mood elements using the instance methods, which can be chained.
 */


var Mood = /*#__PURE__*/function () {
  /**
   * Construct a new Mood instance.
   * @param options Options for mood.
   */
  function Mood() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    mood_classCallCheck(this, Mood);

    mood_defineProperty(this, "options", void 0);

    mood_defineProperty(this, "elements", []);

    this.options = mood_objectSpread(mood_objectSpread({}, Mood.defaultOptions), options);
  }
  /**
   * Get the MP available for casting skills.
   */


  mood_createClass(Mood, [{
    key: "availableMp",
    value: function availableMp() {
      return (0,utils/* sum */.Sm)(this.options.mpSources, mpSource => mpSource.availableMpMin()) + Math.max((0,external_kolmafia_.myMp)() - this.options.reserveMp, 0);
    }
  }, {
    key: "moreMp",
    value: function moreMp(minimumTarget) {
      var _iterator2 = mood_createForOfIteratorHelper(this.options.mpSources),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mpSource = _step2.value;
          var usesRemaining = mpSource.usesRemaining();

          if (usesRemaining !== null && usesRemaining > 0) {
            mpSource.execute();
            if ((0,external_kolmafia_.myMp)() >= minimumTarget) break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Add a skill to the mood.
     * @param skill Skill to add.
     */

  }, {
    key: "skill",
    value: function skill(_skill) {
      this.elements.push(new SkillMoodElement(_skill));
      return this;
    }
    /**
     * Add an effect to the mood, with casting based on {effect.default}.
     * @param effect Effect to add.
     * @param gainEffect How to gain the effect. Only runs if we don't have the effect.
     */

  }, {
    key: "effect",
    value: function effect(_effect, gainEffect) {
      var skill = (0,external_kolmafia_.toSkill)(_effect);

      if (!gainEffect && skill !== (0,template_string/* $skill */.tm)(mood_templateObject12 || (mood_templateObject12 = mood_taggedTemplateLiteral(["none"])))) {
        this.skill(skill);
      } else {
        this.elements.push(new CustomMoodElement(_effect, gainEffect));
      }

      return this;
    }
    /**
     * Add a potion to the mood.
     * @param potion Potion to add.
     * @param maxPricePerTurn Maximum price to pay per turn of the effect.
     */

  }, {
    key: "potion",
    value: function potion(_potion, maxPricePerTurn) {
      this.elements.push(new PotionMoodElement(_potion, maxPricePerTurn));
      return this;
    }
    /**
     * Add an effect to acquire via pocket wishes to the mood.
     * @param effect Effect to wish for in the mood.
     */

  }, {
    key: "genie",
    value: function genie(effect) {
      this.elements.push(new GenieMoodElement(effect));
      return this;
    }
    /**
     * Add an Asdon Martin driving style to the mood.
     * @param effect Driving style to add to the mood.
     */

  }, {
    key: "drive",
    value: function drive(effect) {
      if (Object.values(Driving).includes(effect) && AsdonMartin_installed()) {
        this.elements.push(new AsdonMoodElement(effect));
      }

      return this;
    }
    /**
     * Execute the mood, trying to ensure {ensureTurns} of each effect.
     * @param ensureTurns Turns of each effect to try and achieve.
     * @returns Whether or not we successfully got this many turns of every effect in the mood.
     */

  }, {
    key: "execute",
    value: function execute() {
      var ensureTurns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var availableMp = this.availableMp();
      var totalMpPerTurn = (0,utils/* sum */.Sm)(this.elements, element => element.mpCostPerTurn());
      var potentialTurns = Math.floor(availableMp / totalMpPerTurn);
      var completeSuccess = true;

      var _iterator3 = mood_createForOfIteratorHelper(this.elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          var elementTurns = ensureTurns;

          if (element.mpCostPerTurn() > 0) {
            var elementPotentialTurns = Math.floor(potentialTurns / element.turnIncrement()) * element.turnIncrement();
            elementTurns = Math.min(ensureTurns, elementPotentialTurns);
          }

          completeSuccess = element.execute(this, elementTurns) && completeSuccess;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return completeSuccess;
    }
  }], [{
    key: "setDefaultOptions",
    value:
    /**
     * Set default options for new Mood instances.
     * @param options Default options for new Mood instances.
     */
    function setDefaultOptions(options) {
      Mood.defaultOptions = mood_objectSpread(mood_objectSpread({}, Mood.defaultOptions), options);
    }
  }]);

  return Mood;
}();

mood_defineProperty(Mood, "defaultOptions", {
  songSlots: [],
  mpSources: [MagicalSausages.instance, OscusSoda.instance],
  reserveMp: 0
});
;// CONCATENATED MODULE: ./src/mood.ts
var src_mood_templateObject, src_mood_templateObject2, src_mood_templateObject3, src_mood_templateObject4, src_mood_templateObject5, src_mood_templateObject6, src_mood_templateObject7, src_mood_templateObject8, src_mood_templateObject9, src_mood_templateObject10, src_mood_templateObject11, src_mood_templateObject12, mood_templateObject13, mood_templateObject14, mood_templateObject15, mood_templateObject16;

function src_mood_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function mood() {
  var mood = new Mood();
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject || (src_mood_templateObject = src_mood_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject2 || (src_mood_templateObject2 = src_mood_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject3 || (src_mood_templateObject3 = src_mood_taggedTemplateLiteral(["The Spirit of Taking"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject4 || (src_mood_templateObject4 = src_mood_taggedTemplateLiteral(["Elemental Saucesphere"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject5 || (src_mood_templateObject5 = src_mood_taggedTemplateLiteral(["Astral Shell"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject6 || (src_mood_templateObject6 = src_mood_taggedTemplateLiteral(["Scarysauce"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject7 || (src_mood_templateObject7 = src_mood_taggedTemplateLiteral(["Empathy of the Newt"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject8 || (src_mood_templateObject8 = src_mood_taggedTemplateLiteral(["Leash of Linguini"]))));
  mood.skill((0,template_string/* $skill */.tm)(src_mood_templateObject9 || (src_mood_templateObject9 = src_mood_taggedTemplateLiteral(["Blood Bond"])))); // eslint-disable-next-line libram/verify-constants

  if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_mood_templateObject10 || (src_mood_templateObject10 = src_mood_taggedTemplateLiteral(["Site Alpha Primary Lab"])))) {
    if ((0,external_kolmafia_.myPrimestat)() === (0,template_string/* $stat */.Ri)(src_mood_templateObject11 || (src_mood_templateObject11 = src_mood_taggedTemplateLiteral(["Muscle"])))) {
      mood.potion((0,template_string/* $item */.xr)(src_mood_templateObject12 || (src_mood_templateObject12 = src_mood_taggedTemplateLiteral(["oil of stability"]))), 2000);
    } else if ((0,external_kolmafia_.myPrimestat)() === (0,template_string/* $stat */.Ri)(mood_templateObject13 || (mood_templateObject13 = src_mood_taggedTemplateLiteral(["Moxie"])))) {
      mood.potion((0,template_string/* $item */.xr)(mood_templateObject14 || (mood_templateObject14 = src_mood_taggedTemplateLiteral(["oil of slipperiness"]))), 2000);
    }

    mood.skill((0,template_string/* $skill */.tm)(mood_templateObject15 || (mood_templateObject15 = src_mood_taggedTemplateLiteral(["Carol of the Hells"]))));
    mood.skill((0,template_string/* $skill */.tm)(mood_templateObject16 || (mood_templateObject16 = src_mood_taggedTemplateLiteral(["Song of Sauce"]))));
  }

  mood.drive(Driving.Observantly);
  return mood;
}
;// CONCATENATED MODULE: ./src/properties.ts

var propertyManager = new property/* PropertiesManager */.Jr();
;// CONCATENATED MODULE: ./src/index.ts
var src_templateObject, src_templateObject2, src_templateObject3, src_templateObject4, src_templateObject5, src_templateObject6, src_templateObject7, src_templateObject8, src_templateObject9, src_templateObject10, src_templateObject11, src_templateObject12, src_templateObject13, src_templateObject14, src_templateObject15, src_templateObject16, src_templateObject17, src_templateObject18, src_templateObject19, src_templateObject20, src_templateObject21, src_templateObject22, src_templateObject23, src_templateObject24, src_templateObject25, src_templateObject26, src_templateObject27, src_templateObject28, src_templateObject29, src_templateObject30, src_templateObject31, src_templateObject32, src_templateObject33, src_templateObject34, src_templateObject35, src_templateObject36, src_templateObject37, src_templateObject38, src_templateObject39, src_templateObject40, src_templateObject41, src_templateObject42, src_templateObject43, src_templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77;

function src_toConsumableArray(arr) { return src_arrayWithoutHoles(arr) || src_iterableToArray(arr) || src_unsupportedIterableToArray(arr) || src_nonIterableSpread(); }

function src_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function src_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function src_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return src_arrayLikeToArray(arr); }

function src_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }

function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function src_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var stasisFamiliars = (0,template_string/* $familiars */.LG)(src_templateObject || (src_templateObject = src_taggedTemplateLiteral(["Stocking Mimic, Ninja Pirate Zombie Robot, Cocoabo"])));

function expectedHp(weight) {
  // This is the maximum possible HP we'd expect.
  return 1.1 * (3 * Math.pow(weight - 10, 3) + 100);
}

function predictedDamage(skill) {
  var multiplier = skill === (0,template_string/* $skill */.tm)(src_templateObject2 || (src_templateObject2 = src_taggedTemplateLiteral(["Weapon of the Pastalord"]))) ? 0.5 : 0.4;
  var hotDoubled = (skill === (0,template_string/* $skill */.tm)(src_templateObject3 || (src_templateObject3 = src_taggedTemplateLiteral(["Saucegeyser"]))) && modifier_get("Hot Spell Damage") > modifier_get("Cold Spell Damage") || (0,lib/* have */.lf)((0,template_string/* $effect */._G)(src_templateObject4 || (src_templateObject4 = src_taggedTemplateLiteral(["Spirit of Cayenne"]))))) && (0,external_kolmafia_.haveEquipped)((0,template_string/* $item */.xr)(src_templateObject5 || (src_templateObject5 = src_taggedTemplateLiteral(["meteorb"]))));
  var lanternCount = ((0,external_kolmafia_.haveEquipped)((0,template_string/* $item */.xr)(src_templateObject6 || (src_templateObject6 = src_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))) && (0,property/* get */.U2)("retroCapeSuperhero") === "heck" && (0,property/* get */.U2)("retroCapeWashingInstructions") === "kill" ? 1 : 0) + (!hotDoubled && (0,external_kolmafia_.haveEquipped)((0,template_string/* $item */.xr)(src_templateObject7 || (src_templateObject7 = src_taggedTemplateLiteral(["meteorb"])))) ? 1 : 0);

  var criticalMultiplier = () => modifier_get("Spell Critical Percent") >= 89 ? (0,external_kolmafia_.haveEquipped)((0,template_string/* $item */.xr)(src_templateObject8 || (src_templateObject8 = src_taggedTemplateLiteral(["dark baconstone ring"])))) ? 3 : 2 : 1;

  return multiplier * (0,external_kolmafia_.myBuffedstat)((0,template_string/* $stat */.Ri)(src_templateObject9 || (src_templateObject9 = src_taggedTemplateLiteral(["Mysticality"])))) * (1 + modifier_get("Spell Damage Percent") / 100) * criticalMultiplier() * (1 - 0.004 * modifier_get("Monster Level")) * (hotDoubled ? 2 : 1) * (1 + lanternCount);
}

function main() {
  var argString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  sinceKolmafiaRevision(26043);
  var args = argString.split(/\s+/g);
  var maxWeight = Infinity;

  var _iterator = src_createForOfIteratorHelper(args),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var arg = _step.value;
      var maxMatch = arg.match(/^max=(\d+)$/);

      if (arg === "dorm") {
        options/* default.location */.Z.location = (0,template_string/* $location */.PG)(_templateObject74 || (_templateObject74 = src_taggedTemplateLiteral(["Site Alpha Dormitory"])));
      } else if (arg === "greenhouse") {
        options/* default.location */.Z.location = (0,template_string/* $location */.PG)(_templateObject75 || (_templateObject75 = src_taggedTemplateLiteral(["Site Alpha Greenhouse"])));
      } else if (arg === "quarry") {
        options/* default.location */.Z.location = (0,template_string/* $location */.PG)(_templateObject76 || (_templateObject76 = src_taggedTemplateLiteral(["Site Alpha Quarry"])));
      } else if (arg === "lab") {
        options/* default.location */.Z.location = (0,template_string/* $location */.PG)(_templateObject77 || (_templateObject77 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"])));
      } else if (arg.match(/^\d+$/)) {
        options/* default.stopTurnsSpent */.Z.stopTurnsSpent = (0,src_lib/* startingTurnsSpent */.Up)() + parseInt(arg);
      } else if (maxMatch) {
        maxWeight = parseInt(maxMatch[1]);
      } else if (arg.length > 0) {
        throw "Unrecognized argument \"".concat(arg, "\".");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  try {
    propertyManager.set({
      logPreferenceChangeFilter: src_toConsumableArray(new Set([].concat(src_toConsumableArray((0,property/* get */.U2)("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "_lastCombatStarted", "_boomBoxFights", "testudinalTeachings"]))).sort().filter(a => a).join(","),
      logPreferenceChange: true,
      battleAction: "custom combat script",
      autoSatisfyWithMall: true,
      autoSatisfyWithNPCs: true,
      autoSatisfyWithCoinmasters: true,
      autoSatisfyWithStash: false,
      dontStopForCounters: true,
      maximizerFoldables: true,
      hpAutoRecovery: 0.65,
      hpAutoRecoveryTarget: 0.95,
      choiceAdventureScript: "",
      customCombatScript: "gooo",
      currentMood: "apathetic",
      autoTuxedo: true,
      autoPinkyRing: true,
      autoGarish: true
    });
    dailies();
    var coldResWeightMultiplier = 1;
    var spellDamageLevel = 0;

    if ((0,src_lib/* currentTurnsSpent */.OF)() === 0) {
      // New ascension. Reset goo weight.
      (0,property/* set */.t8)("crimbo21GooWeight", 10);
    }

    (0,external_kolmafia_.print)("Starting with ".concat((0,src_lib/* currentTurnsSpent */.OF)(), " turns spent, going to ").concat(options/* default.stopTurnsSpent */.Z.stopTurnsSpent, "."), "blue");

    while ((0,src_lib/* currentTurnsSpent */.OF)() < options/* default.stopTurnsSpent */.Z.stopTurnsSpent && (0,external_kolmafia_.myAdventures)() > 0) {
      // 1/11 of the lab adventures still increment turns spent but don't cost a turn.
      var remainingTurnsSpent = Math.ceil((options/* default.stopTurnsSpent */.Z.stopTurnsSpent - (0,src_lib/* currentTurnsSpent */.OF)()) * (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject10 || (src_templateObject10 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) ? 10 / 11 : 1));
      var remaining = (0,utils/* clamp */.uZ)(remainingTurnsSpent, 0, (0,external_kolmafia_.myAdventures)());
      mood().execute(remaining);

      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(src_templateObject11 || (src_templateObject11 = src_taggedTemplateLiteral(["velour viscometer"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(src_templateObject12 || (src_templateObject12 = src_taggedTemplateLiteral(["Scariersauce"]))))) {
        (0,external_kolmafia_.equip)((0,template_string/* $item */.xr)(src_templateObject13 || (src_templateObject13 = src_taggedTemplateLiteral(["velour viscometer"]))));
        mood().execute(remaining);
      }

      var banished = src_toConsumableArray((0,lib/* getBanishedMonsters */.$c)().values());

      if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject14 || (src_templateObject14 = src_taggedTemplateLiteral(["Site Alpha Dormitory"]))) && !banished.includes((0,template_string/* $monster */.O4)(src_templateObject15 || (src_templateObject15 = src_taggedTemplateLiteral(["gooified elf-thing"])))) || options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject16 || (src_templateObject16 = src_taggedTemplateLiteral(["Site Alpha Greenhouse"]))) && !banished.includes((0,template_string/* $monster */.O4)(src_templateObject17 || (src_templateObject17 = src_taggedTemplateLiteral(["gooified flower"]))))) {
        (0,external_kolmafia_.retrieveItem)((0,template_string/* $item */.xr)(src_templateObject18 || (src_templateObject18 = src_taggedTemplateLiteral(["human musk"]))));
      }

      if ((0,template_string/* $locations */.xw)(src_templateObject19 || (src_templateObject19 = src_taggedTemplateLiteral(["Site Alpha Quarry"]))).includes(options/* default.location */.Z.location)) {
        var _find;

        (0,external_kolmafia_.useFamiliar)((_find = (0,template_string/* $familiars */.LG)(src_templateObject20 || (src_templateObject20 = src_taggedTemplateLiteral(["Stocking Mimic, Ninja Pirate Zombie Robot"]))).find(fam => (0,lib/* have */.lf)(fam))) !== null && _find !== void 0 ? _find : (0,template_string/* $familiar */.HP)(src_templateObject21 || (src_templateObject21 = src_taggedTemplateLiteral(["Cocoabo"]))));
      } else if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject22 || (src_templateObject22 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"])))) {
        var _find2;

        (0,external_kolmafia_.useFamiliar)((_find2 = (0,template_string/* $familiars */.LG)(src_templateObject23 || (src_templateObject23 = src_taggedTemplateLiteral(["Left-Hand Man, Stocking Mimic, Ninja Pirate Zombie Robot"]))).find(fam => (0,lib/* have */.lf)(fam))) !== null && _find2 !== void 0 ? _find2 : (0,template_string/* $familiar */.HP)(src_templateObject24 || (src_templateObject24 = src_taggedTemplateLiteral(["Cocoabo"]))));
      } else {
        var _find3;

        (0,external_kolmafia_.useFamiliar)((_find3 = (0,template_string/* $familiars */.LG)(src_templateObject25 || (src_templateObject25 = src_taggedTemplateLiteral(["Jumpsuited Hound Dog, Cat Burglar"]))).find(fam => (0,lib/* have */.lf)(fam))) !== null && _find3 !== void 0 ? _find3 : (0,template_string/* $familiar */.HP)(src_templateObject26 || (src_templateObject26 = src_taggedTemplateLiteral(["Baby Gravy Fairy"]))));
      }

      var itemDropWeight = (0,template_string/* $locations */.xw)(src_templateObject27 || (src_templateObject27 = src_taggedTemplateLiteral(["Site Alpha Quarry, Site Alpha Primary Lab"]))).includes(options/* default.location */.Z.location) ? 0 : 1;
      var weight = (0,property/* get */.U2)("crimbo21GooWeight", 10);
      var skill = undefined;

      if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject28 || (src_templateObject28 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"])))) {
        skill = (0,template_string/* $skills */.nx)(src_templateObject29 || (src_templateObject29 = src_taggedTemplateLiteral(["Saucegeyser"]))).filter(skill => (0,lib/* have */.lf)(skill)).sort((x, y) => (0,external_kolmafia_.mpCost)(x) - (0,external_kolmafia_.mpCost)(y))[0];
        if (skill === undefined) throw "Need Saucegeyser for Lab.";
      }

      var coldResTarget = Math.floor((15 + (0,src_lib/* todayTurnsSpent */.U)()) / 3);

      do {
        var forceEquip = [];
        var preventSlot = [];

        if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject31 || (src_templateObject31 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"])))) {
          var acc3 = (0,lib/* have */.lf)((0,template_string/* $item */.xr)(src_templateObject32 || (src_templateObject32 = src_taggedTemplateLiteral(["Space Trip safety headphones"])))) && spellDamageLevel >= 2 ? (0,template_string/* $item */.xr)(src_templateObject33 || (src_templateObject33 = src_taggedTemplateLiteral(["Space Trip safety headphones"]))) : (0,template_string/* $item */.xr)(src_templateObject34 || (src_templateObject34 = src_taggedTemplateLiteral(["cozy scarf"])));

          if ((0,external_kolmafia_.availableAmount)((0,template_string/* $item */.xr)(src_templateObject35 || (src_templateObject35 = src_taggedTemplateLiteral(["ert grey goo ring"])))) >= 2) {
            // Equip two ert grey goo rings.
            preventSlot.push.apply(preventSlot, src_toConsumableArray((0,template_string/* $slots */.ei)(src_templateObject36 || (src_templateObject36 = src_taggedTemplateLiteral(["acc1, acc2, acc3"])))));
            (0,external_kolmafia_.equip)((0,template_string/* $slot */.Jh)(src_templateObject37 || (src_templateObject37 = src_taggedTemplateLiteral(["acc1"]))), (0,template_string/* $item */.xr)(src_templateObject38 || (src_templateObject38 = src_taggedTemplateLiteral(["ert grey goo ring"]))));
            (0,external_kolmafia_.equip)((0,template_string/* $slot */.Jh)(src_templateObject39 || (src_templateObject39 = src_taggedTemplateLiteral(["acc2"]))), (0,template_string/* $item */.xr)(src_templateObject40 || (src_templateObject40 = src_taggedTemplateLiteral(["ert grey goo ring"]))));
            (0,external_kolmafia_.equip)((0,template_string/* $slot */.Jh)(src_templateObject41 || (src_templateObject41 = src_taggedTemplateLiteral(["acc3"]))), acc3);
          }

          if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(src_templateObject42 || (src_templateObject42 = src_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))))) {
            preventSlot.push((0,template_string/* $slot */.Jh)(src_templateObject43 || (src_templateObject43 = src_taggedTemplateLiteral(["back"]))));

            if ((0,property/* get */.U2)("retroCapeSuperhero") !== "heck" || (0,property/* get */.U2)("retroCapeWashingInstructions") !== "kill") {
              (0,external_kolmafia_.cliExecute)("retrocape heck kill");
            }
          }

          if (spellDamageLevel >= 1) {
            if (!(0,lib/* have */.lf)((0,template_string/* $item */.xr)(src_templateObject44 || (src_templateObject44 = src_taggedTemplateLiteral(["meteorb"]))))) (0,external_kolmafia_.retrieveItem)((0,template_string/* $item */.xr)(_templateObject45 || (_templateObject45 = src_taggedTemplateLiteral(["meteorb"]))));
            forceEquip.push((0,template_string/* $item */.xr)(_templateObject46 || (_templateObject46 = src_taggedTemplateLiteral(["meteorb"]))));
          }

          if (spellDamageLevel >= 2 && (0,external_kolmafia_.myFamiliar)() === (0,template_string/* $familiar */.HP)(_templateObject47 || (_templateObject47 = src_taggedTemplateLiteral(["Left-Hand Man"]))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject48 || (_templateObject48 = src_taggedTemplateLiteral(["HOA regulation book"]))))) {
            forceEquip.push((0,template_string/* $item */.xr)(_templateObject49 || (_templateObject49 = src_taggedTemplateLiteral(["HOA regulation book"]))));
          }

          var offHandSlots = (0,external_kolmafia_.myFamiliar)() === (0,template_string/* $familiar */.HP)(_templateObject50 || (_templateObject50 = src_taggedTemplateLiteral(["Left-Hand Man"]))) ? 2 : 1;
          var offHandForce = forceEquip.filter(item => (0,external_kolmafia_.toSlot)(item) === (0,template_string/* $slot */.Jh)(_templateObject51 || (_templateObject51 = src_taggedTemplateLiteral(["off-hand"])))).length;

          if (offHandForce < offHandSlots) {
            forceEquip.push((0,template_string/* $item */.xr)(_templateObject52 || (_templateObject52 = src_taggedTemplateLiteral(["goo magnet"]))));
          }
        } else {
          if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject53 || (_templateObject53 = src_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))) && (0,property/* get */.U2)("_chestXRayUsed") < 3) {
            forceEquip.push((0,template_string/* $item */.xr)(_templateObject54 || (_templateObject54 = src_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
          } // Force goo magnet for all but the last 30 turns.


          if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject55 || (_templateObject55 = src_taggedTemplateLiteral(["goo magnet"])))) && options/* default.stopTurnsSpent */.Z.stopTurnsSpent - (0,src_lib/* currentTurnsSpent */.OF)() >= 30) {
            forceEquip.push((0,template_string/* $item */.xr)(_templateObject56 || (_templateObject56 = src_taggedTemplateLiteral(["goo magnet"]))));
          }
        }

        new Requirement([].concat(src_toConsumableArray(itemDropWeight > 0 ? ["".concat(itemDropWeight, " Item Drop")] : []), ["".concat((5 * coldResWeightMultiplier).toFixed(0), " Cold Resistance")], src_toConsumableArray(options/* default.location */.Z.location === (0,template_string/* $location */.PG)(_templateObject57 || (_templateObject57 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) ? ["0.1 Spell Damage Percent, 0.1 Mysticality Percent"] : [])), {
          forceEquip: forceEquip,
          preventEquip: (0,template_string/* $items */.vS)(_templateObject58 || (_templateObject58 = src_taggedTemplateLiteral(["broken champagne bottle"]))),
          preventSlot: preventSlot,
          bonusEquip: new Map([[(0,template_string/* $item */.xr)(_templateObject59 || (_templateObject59 = src_taggedTemplateLiteral(["bag of many confections"]))), 1000]])
        }).maximize();

        if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(_templateObject60 || (_templateObject60 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) && skill && predictedDamage(skill) < expectedHp(weight) && spellDamageLevel < 2) {
          spellDamageLevel++;
          (0,external_kolmafia_.print)("Failed to get enough spell damage. Moving to spell damage level ".concat(spellDamageLevel, "."), "blue");
        }

        if (modifier_get("Cold Resistance") < coldResTarget && Math.round(coldResWeightMultiplier) < 32) {
          coldResWeightMultiplier *= 2;
          (0,external_kolmafia_.print)("Missed target. Updated resistance weight multiplier to ".concat(coldResWeightMultiplier.toFixed(1), "."), "blue");
        }
      } while (modifier_get("Cold Resistance") < coldResTarget && Math.round(coldResWeightMultiplier) < 32 || options/* default.location */.Z.location === (0,template_string/* $location */.PG)(src_templateObject30 || (src_templateObject30 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) && skill && predictedDamage(skill) < expectedHp(weight) && spellDamageLevel < 2);

      boost("Cold Resistance", coldResTarget, 500);

      if ((0,template_string/* $locations */.xw)(_templateObject61 || (_templateObject61 = src_taggedTemplateLiteral(["Site Alpha Dormitory, Site Alpha Greenhouse"]))).includes(options/* default.location */.Z.location)) {
        boost("Item Drop", options/* default.location */.Z.location === (0,template_string/* $location */.PG)(_templateObject62 || (_templateObject62 = src_taggedTemplateLiteral(["Site Alpha Greenhouse"]))) ? 900 : 300, 50);
      }

      (0,external_kolmafia_.print)();
      (0,external_kolmafia_.print)("==== Turn ".concat((0,src_lib/* todayTurnsSpent */.U)(), " out of ").concat(options/* default.stopTurnsSpent */.Z.stopTurnsSpent - (0,src_lib/* startingTurnsSpent */.Up)(), ". ===="), "blue");
      (0,external_kolmafia_.print)("Cold Res Required: ".concat(coldResTarget, ", Achieved: ").concat(modifier_get("Cold Resistance")), "blue");

      if (options/* default.location */.Z.location === (0,template_string/* $location */.PG)(_templateObject63 || (_templateObject63 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) && skill) {
        (0,external_kolmafia_.print)("Predicting ".concat(predictedDamage(skill).toFixed(0), " damage against ").concat(expectedHp(weight).toFixed(0), " HP."), "blue");

        if (predictedDamage(skill) < expectedHp(weight)) {
          var factorNeeded = expectedHp(weight) / predictedDamage(skill);
          (0,external_kolmafia_.print)("Not enough. Need to multiply by ".concat(factorNeeded.toFixed(2), "."));
          var mysticalityMultiplier = 1 + modifier_get("Mysticality Percent") / 100;
          var mysticalityPercentTarget = 100 * Math.sqrt(factorNeeded) * mysticalityMultiplier;
          var spellDamageMultiplier = 1 + modifier_get("Spell Damage Percent") / 100;
          var spellDamagePercentTarget = 100 * Math.sqrt(factorNeeded) * spellDamageMultiplier;
          (0,external_kolmafia_.print)("Targeting ".concat(mysticalityPercentTarget.toFixed(0), "% myst and ").concat(spellDamagePercentTarget, "% SD."));
          boost("Mysticality Percent", mysticalityPercentTarget, 10);
          boost("Spell Damage Percent", spellDamagePercentTarget, 10);

          if (predictedDamage(skill) < expectedHp(weight)) {
            throw "Somehow our goos got too big - use stench jelly to scale them back down.";
          }
        }

        if (weight < maxWeight && (predictedDamage(skill) >= expectedHp(weight + 1) || Number.isFinite(maxWeight))) {
          // Increase if we already have enough damage, or the user set a max weight and we're below it.
          // Turn the knob to the right (more ML).
          (0,property/* set */.t8)("choiceAdventure1461", 1);
        } else if (weight > maxWeight) {
          // Turn the knob to the left (less ML).
          (0,property/* set */.t8)("choiceAdventure1461", 2);
        } else {
          // Skip NC.
          (0,property/* set */.t8)("choiceAdventure1461", 4);
        }
      }

      combat.Macro.if_((0,template_string/* $monster */.O4)(_templateObject64 || (_templateObject64 = src_taggedTemplateLiteral(["gooified elf-thing"]))), combat.Macro.item((0,template_string/* $item */.xr)(_templateObject65 || (_templateObject65 = src_taggedTemplateLiteral(["human musk"]))))).if_((0,template_string/* $monster */.O4)(_templateObject66 || (_templateObject66 = src_taggedTemplateLiteral(["gooified flower"]))), combat.Macro.item((0,template_string/* $item */.xr)(_templateObject67 || (_templateObject67 = src_taggedTemplateLiteral(["human musk"]))))).externalIf(options/* default.location */.Z.location !== (0,template_string/* $location */.PG)(_templateObject68 || (_templateObject68 = src_taggedTemplateLiteral(["Site Alpha Primary Lab"]))) && stasisFamiliars.includes((0,external_kolmafia_.myFamiliar)()), combat.Macro.while_("!pastround 10 && !hpbelow 250", combat.Macro.item((0,template_string/* $item */.xr)(_templateObject69 || (_templateObject69 = src_taggedTemplateLiteral(["seal tooth"])))))).kill(skill).setAutoAttack();

      if ((0,external_kolmafia_.myMp)() < 200) {
        if ((0,property/* get */.U2)("_sausagesEaten") < 23 && ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject70 || (_templateObject70 = src_taggedTemplateLiteral(["magical sausage"])))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject71 || (_templateObject71 = src_taggedTemplateLiteral(["magical sausage casing"])))))) {
          (0,external_kolmafia_.eat)((0,template_string/* $item */.xr)(_templateObject72 || (_templateObject72 = src_taggedTemplateLiteral(["magical sausage"]))));
        } else {
          (0,external_kolmafia_.restoreMp)(200);
        }
      }

      if ((0,external_kolmafia_.myHp)() < 0.8 * (0,external_kolmafia_.myMaxhp)()) {
        (0,external_kolmafia_.restoreHp)(0.95 * (0,external_kolmafia_.myMaxhp)());
      }

      var result = (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(options/* default.location */.Z.location));

      while ((0,external_kolmafia_.inMultiFight)()) {
        (0,external_kolmafia_.runCombat)();
      }

      if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.visitUrl)("choice.php");

      if ((0,external_kolmafia_.handlingChoice)()) {
        (0,external_kolmafia_.runChoice)(-1);
      }

      var match = result.match(/(\d+) Cold Resistance Required/);

      if (match) {
        (0,property/* set */.t8)("_crimbo21ColdResistance", parseInt(match[1]));
        throw "Couldn't get enough cold resistance (".concat(parseInt(match[1]), ") to continue.");
      }

      var encounterMatch = (0,property/* get */.U2)("lastEncounter").match(/^(\d+)-ton grey goo/);

      if (encounterMatch) {
        (0,property/* set */.t8)("crimbo21GooWeight", parseInt(encounterMatch[1]));
      }

      if (["", "Hello Knob My Old Friend"].includes((0,property/* get */.U2)("lastEncounter").trim()) && (0,external_kolmafia_.lastChoice)() === 1461) {
        // Just hit the NC. Decrement turns spent to adjust for the fact that Mafia doesn't count it.
        (0,external_kolmafia_.print)("Hit the NC. Adjusting turns spent...", "blue");
        (0,src_lib/* decrementStartingTurnsSpent */.cI)();
      }

      if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject73 || (_templateObject73 = src_taggedTemplateLiteral(["Beaten Up"]))))) {
        throw "You're beaten up! Fix it and try adventuring again.";
      }
    }
  } finally {
    (0,external_kolmafia_.setAutoAttack)(0);
    propertyManager.resetAll();
  }

  if ((0,src_lib/* currentTurnsSpent */.OF)() >= options/* default.stopTurnsSpent */.Z.stopTurnsSpent) {
    (0,external_kolmafia_.print)("Stopping, as we have now spent ".concat((0,src_lib/* todayTurnsSpent */.U)(), " turns today."), "blue");
  } else if ((0,external_kolmafia_.myAdventures)() === 0) {
    (0,external_kolmafia_.print)("Stopping as we are out of adventures. Spent ".concat((0,src_lib/* todayTurnsSpent */.U)(), " turns today."), "blue");
  }
}

/***/ }),

/***/ 7442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OF": () => (/* binding */ currentTurnsSpent),
/* harmony export */   "Up": () => (/* binding */ startingTurnsSpent),
/* harmony export */   "U": () => (/* binding */ todayTurnsSpent),
/* harmony export */   "cI": () => (/* binding */ decrementStartingTurnsSpent)
/* harmony export */ });
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8588);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6672);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


function currentTurnsSpent() {
  return (0,libram__WEBPACK_IMPORTED_MODULE_0__/* .sum */ .Sm)( // eslint-disable-next-line libram/verify-constants
  (0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$locations */ .xw)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Site Alpha Dormitory, Site Alpha Greenhouse, Site Alpha Quarry, Site Alpha Primary Lab"]))), loc => loc.turnsSpent);
}
function startingTurnsSpent() {
  var result = (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)("_crimbo21StartingTurnsSpent", currentTurnsSpent());

  if (Math.floor((currentTurnsSpent() - result + 15) / 3) < (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)("_crimbo21ColdResistance", 0)) {
    result = currentTurnsSpent() - ((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)("_crimbo21ColdResistance", 0) * 3 - 15);
  }

  (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .set */ .t8)("_crimbo21StartingTurnsSpent", result);
  return result;
}
function todayTurnsSpent() {
  return currentTurnsSpent() - startingTurnsSpent();
}
function decrementStartingTurnsSpent() {
  var current = (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)("_crimbo21StartingTurnsSpent", currentTurnsSpent());
  (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .set */ .t8)("_crimbo21StartingTurnsSpent", current - 1);
}

/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7442);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  location: (0,libram__WEBPACK_IMPORTED_MODULE_0__/* .$location */ .PG)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Site Alpha Dormitory"]))),
  stopTurnsSpent: (0,_lib__WEBPACK_IMPORTED_MODULE_1__/* .startingTurnsSpent */ .Up)() + 150
});

/***/ }),

/***/ 7530:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 2349);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;