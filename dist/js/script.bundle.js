/*! For license information please see script.bundle.js.LICENSE.txt */
(function(){var __webpack_modules__={"./node_modules/umbrellajs/umbrella.min.js":function(module){eval('/* Umbrella JS 3.3.0 umbrellajs.com */\n\nvar u=function(t,e){return this instanceof u?t instanceof u?t:((t="string"==typeof t?this.select(t,e):t)&&t.nodeName&&(t=[t]),void(this.nodes=this.slice(t))):new u(t,e)};u.prototype={get length(){return this.nodes.length}},u.prototype.nodes=[],u.prototype.addClass=function(){return this.eacharg(arguments,function(t,e){t.classList.add(e)})},u.prototype.adjacent=function(o,t,i){return"number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(n,r){var e=document.createDocumentFragment();u(t||{}).map(function(t,e){e="function"==typeof o?o.call(this,t,e,n,r):o;return"string"==typeof e?this.generate(e):u(e)}).each(function(t){this.isInPage(t)?e.appendChild(u(t).clone().first()):e.appendChild(t)}),i.call(this,n,e)})},u.prototype.after=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t.nextSibling)})},u.prototype.append=function(t,e){return this.adjacent(t,e,function(t,e){t.appendChild(e)})},u.prototype.args=function(t,e,n){return(t="string"!=typeof(t="function"==typeof t?t(e,n):t)?this.slice(t).map(this.str(e,n)):t).toString().split(/[\\s,]+/).filter(function(t){return t.length})},u.prototype.array=function(o){var i=this;return this.nodes.reduce(function(t,e,n){var r;return o?(r="string"==typeof(r=(r=o.call(i,e,n))||!1)?u(r):r)instanceof u&&(r=r.nodes):r=e.innerHTML,t.concat(!1!==r?r:[])},[])},u.prototype.attr=function(t,e,r){return r=r?"data-":"",this.pairs(t,e,function(t,e){return t.getAttribute(r+e)},function(t,e,n){n?t.setAttribute(r+e,n):t.removeAttribute(r+e)})},u.prototype.before=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t)})},u.prototype.children=function(t){return this.map(function(t){return this.slice(t.children)}).filter(t)},u.prototype.clone=function(){return this.map(function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each(function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e])}),n})},u.prototype.getAll=function(t){return u([t].concat(u("*",t).nodes))},u.prototype.mirror={},u.prototype.mirror.events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach(function(t){u(e).on(n,t.callback)})},u.prototype.mirror.select=function(t,e){u(t).is("select")&&(e.value=t.value)},u.prototype.mirror.textarea=function(t,e){u(t).is("textarea")&&(e.value=t.value)},u.prototype.closest=function(e){return this.map(function(t){do{if(u(t).is(e))return t}while((t=t.parentNode)&&t!==document)})},u.prototype.data=function(t,e){return this.attr(t,e,!0)},u.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},u.prototype.eacharg=function(n,r){return this.each(function(e,t){this.args(n,e,t).forEach(function(t){r.call(this,e,t)},this)})},u.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)})},u.prototype.filter=function(e){var t=e instanceof u?function(t){return-1!==e.nodes.indexOf(t)}:"function"==typeof e?e:function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")};return u(this.nodes.filter(t))},u.prototype.find=function(e){return this.map(function(t){return u(e||"*",t)})},u.prototype.first=function(){return this.nodes[0]||!1},u.prototype.generate=function(t){return/^\\s*<tr[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().nodes:/^\\s*<t(h|d)[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().children().nodes:/^\\s*</.test(t)?u(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},u.prototype.handle=function(){var t=this.slice(arguments).map(function(e){return"function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments)}:e},this);return this.on.apply(this,t)},u.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},u.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e})},u.prototype.is=function(t){return 0<this.filter(t).length},u.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},u.prototype.last=function(){return this.nodes[this.length-1]||!1},u.prototype.map=function(t){return t?u(this.array(t)).unique():this},u.prototype.not=function(e){return this.filter(function(t){return!u(t).is(e||!0)})},u.prototype.off=function(t,e,n){var r=null==e&&null==n,o=null,i=e;return"string"==typeof e&&(o=e,i=n),this.eacharg(t,function(e,n){u(e._e?e._e[n]:[]).each(function(t){(r||t.orig_callback===i&&t.selector===o)&&e.removeEventListener(n,t.callback)})})},u.prototype.on=function(t,e,o){function i(t,e){try{Object.defineProperty(t,"currentTarget",{value:e,configurable:!0})}catch(t){}}var c=null,n=e;"string"==typeof e&&(c=e,n=o,e=function(n){var r=arguments;u(n.currentTarget).find(c).each(function(t){var e;t.contains(n.target)&&(e=n.currentTarget,i(n,t),o.apply(t,r),i(n,e))})});function r(t){return e.apply(this,[t].concat(t.detail||[]))}return this.eacharg(t,function(t,e){t.addEventListener(e,r),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push({callback:r,orig_callback:n,selector:c})})},u.prototype.pairs=function(r,t,e,o){var n;return void 0!==t&&(n=r,(r={})[n]=t),"object"==typeof r?this.each(function(t,e){for(var n in r)"function"==typeof r[n]?o(t,n,r[n](t,e)):o(t,n,r[n])}):this.length?e(this.first(),r):""},u.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},u.prototype.parent=function(t){return this.map(function(t){return t.parentNode}).filter(t)},u.prototype.prepend=function(t,e){return this.adjacent(t,e,function(t,e){t.insertBefore(e,t.firstChild)})},u.prototype.remove=function(){return this.each(function(t){t.parentNode&&t.parentNode.removeChild(t)})},u.prototype.removeClass=function(){return this.eacharg(arguments,function(t,e){t.classList.remove(e)})},u.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t)}),u(n)},u.prototype.scroll=function(){return this.first().scrollIntoView({behavior:"smooth"}),this},u.prototype.select=function(t,e){return t=t.replace(/^\\s*/,"").replace(/\\s*$/,""),/^</.test(t)?u().generate(t):(e||document).querySelectorAll(t)},u.prototype.serialize=function(){var r=this;return this.slice(this.first().elements).reduce(function(e,n){return!n.name||n.disabled||"file"===n.type||/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(u(n.options).each(function(t){t.selected&&(e+="&"+r.uri(n.name)+"="+r.uri(t.value))}),e):e+"&"+r.uri(n.name)+"="+r.uri(n.value)},"").slice(1)},u.prototype.siblings=function(t){return this.parent().children(t).not(this)},u.prototype.size=function(){return this.first().getBoundingClientRect()},u.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},u.prototype.str=function(e,n){return function(t){return"function"==typeof t?t.call(this,e,n):t.toString()}},u.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e})},u.prototype.toggleClass=function(t,e){return!!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,function(t,e){t.classList.toggle(e)})},u.prototype.trigger=function(t){var o=this.slice(arguments).slice(1);return this.eacharg(t,function(t,e){var n,r={bubbles:!0,cancelable:!0,detail:o};try{n=new window.CustomEvent(e,r)}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,o)}t.dispatchEvent(n)})},u.prototype.unique=function(){return u(this.nodes.reduce(function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t},[]))},u.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/\'/g,"%27").replace(/\\(/g,"%28").replace(/\\)/g,"%29").replace(/\\*/g,"%2A").replace(/%20/g,"+")},u.prototype.wrap=function(t){return this.map(function(e){return u(t).each(function(t){!function(t){for(;t.firstElementChild;)t=t.firstElementChild;return u(t)}(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)})})}, true&&module.exports&&(module.exports=u,module.exports.u=u);\n\n//# sourceURL=webpack://modern-html-scaffolder/./node_modules/umbrellajs/umbrella.min.js?')},"./src/js/debug.js":function(){"use strict";eval("/**\r\n * @class Debug\r\n * @classdesc A small utility for debugging.\r\n *\r\n */\r\nclass Debug {\r\n  constructor() {\r\n    this.init();\r\n  }\r\n\r\n  /**\r\n   * determines if debugging has been unlocked from sessionStorage\r\n   * @type {boolean}\r\n   */\r\n  get isUnlocked() {\r\n    const storageItem = sessionStorage.getItem('isDebugging');\r\n\r\n    return storageItem === 'true';\r\n  }\r\n\r\n  /** logs an optionally styled message in the console\r\n   * @method\r\n   * @param  {string} message message to be sent to the console\r\n   * @param  {string} [styles=''] CSS styles to be added to the message\r\n   */\r\n  static logMessage(message, styles = '') {\r\n    console.log(`${styles && '%c'} ${message}`, styles || ' ');\r\n  }\r\n\r\n  /**\r\n   * \"unlocks\" debugging by adding a classname and putting value in sessionStorage\r\n   * @method\r\n   * @static\r\n   */\r\n  static unlock() {\r\n    document.body.classList.add('isDebugging');\r\n    sessionStorage.setItem('isDebugging', 'true');\r\n    Debug.logMessage('debugging unlocked');\r\n  }\r\n\r\n  /**\r\n   * binds any events used by debugging\r\n   * This includes event listener that checks for keystrokes\r\n   * @method\r\n   * @static\r\n   */\r\n  static bindEvents() {\r\n    // up up down down left right left right b a\r\n    const keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];\r\n    let keysIndex = 0;\r\n\r\n    const keydownTracker = (event) => {\r\n      const nextKey = keys[keysIndex++];\r\n\r\n      if (event.keyCode === nextKey) {\r\n        if (keysIndex === keys.length) {\r\n          document.removeEventListener('keydown', keydownTracker);\r\n          Debug.unlock();\r\n        }\r\n      }\r\n    };\r\n\r\n    document.body.addEventListener('keydown', keydownTracker);\r\n  }\r\n\r\n  /**\r\n   * Initializes the module\r\n   */\r\n  init() {\r\n    if (this.isUnlocked) {\r\n      Debug.unlock();\r\n    }\r\n    Debug.logMessage('Debugger available', 'color: #ef8c23');\r\n    Debug.bindEvents();\r\n  }\r\n}\r\n\r\n/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Debug);\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/debug.js?")},"./src/js/modules/accordion.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umbrellajs */ \"./node_modules/umbrellajs/umbrella.min.js\");\n/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(umbrellajs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n  (function () {\r\n    console.log('hello module accordion');\r\n  })();\r\n});\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/modules/accordion.js?")},"./src/js/modules/dropdown.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umbrellajs */ \"./node_modules/umbrellajs/umbrella.min.js\");\n/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(umbrellajs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n  (function () {\r\n    console.log('hello module dropdown');\r\n  })();\r\n});\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/modules/dropdown.js?")},"./src/js/modules/index.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umbrellajs */ "./node_modules/umbrellajs/umbrella.min.js");\n/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(umbrellajs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ "./src/js/modules/accordion.js");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown */ "./src/js/modules/dropdown.js");\n\r\n\r\n\r\n\r\n// (async function () {\r\n//   await import(\'./dropdown\');\r\n//   await import(\'./accordion\');\r\n// })();\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/modules/index.js?')},"./src/js/modules/slider.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umbrellajs */ \"./node_modules/umbrellajs/umbrella.min.js\");\n/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(umbrellajs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n  (function () {\r\n    console.log('hello module slider');\r\nlet dots          = 4;\r\nlet sliderElem    = document.querySelector('.slider')\r\nlet dotElems      = sliderElem.querySelectorAll('.slider__dot')\r\nlet indicatorElem = sliderElem.querySelector('.slider__indicator')\r\nlet arrowLeft = document.querySelector('.arrow-wrap--left')\r\nlet arrowRight = document.querySelector('.arrow-wrap--right')\r\n\r\n\r\nArray.prototype.forEach.call(dotElems, (dotElem) => {\r\n\r\n\t\tdotElem.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tlet currentPos = parseInt(sliderElem.getAttribute('data-pos'))\r\n\t\t\tlet newPos     = parseInt(dotElem.getAttribute('data-pos'))\r\n\r\n\t\t\tlet newDirection     = (newPos > currentPos ? 'right' : 'left')\r\n\t\t\tlet currentDirection = (newPos < currentPos ? 'right' : 'left')\r\n\r\n\t\t\tindicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)\r\n\t\t\tindicatorElem.classList.add(`slider__indicator--${ newDirection }`)\r\n\t\t\tsliderElem.setAttribute('data-pos', newPos)\r\n\r\n\t\t})\r\n\r\n\r\n})\r\n\r\nconst arrowNav = (el, direction) => {\r\n\tif (!el) throw new Error('no element')\r\n\tel.addEventListener('click', (e) => {\r\n\t\te.stopPropagation()\r\n\t\t//constants\r\n\t\tconst min = 0;\r\n\t\tconst max = parseInt(dotElems?.length - 1);\r\n\t\tconst currentPos = parseInt(sliderElem.getAttribute('data-pos'))\r\n\r\n\t\tconst variations = direction === 'left' ? currentPos - 1 : currentPos + 1\r\n\t\tconst newPos = (variations < min ? max : variations > max ? min : variations)\r\n\r\n\t\tsliderElem.setAttribute('data-pos', newPos)\r\n\t}, false)\r\n\r\n}\r\narrowNav(arrowLeft, 'left')\r\narrowNav(arrowRight, 'right')\r\n  })();\r\n});\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/modules/slider.js?")},"./src/js/script.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umbrellajs */ "./node_modules/umbrellajs/umbrella.min.js");\n/* harmony import */ var umbrellajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(umbrellajs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../js/modules/slider */ "./src/js/modules/slider.js");\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/index */ "./src/js/modules/index.js");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\'load\', function () {\r\n  console.log(\'loading\');\r\n});\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/script.js?')},"./src/js/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("/* unused harmony exports getStyle, setStyle, setStyles, getOne, getAll, hide, show, hasClass, addClass, removeClass, onClickOutside, onClickInside, isVisible, getScrollPosition, capitalize, createElFromStr, serializeForm, convertFormToObj, observeMutations, getBaseURL, redirect, searchParams, getRandomHexColor, getRandomRGBAColor, RGBToHex, getUniqueID, genUUID, debounce, throttle */\n//Получение/установка стилей элемента\r\nconst getStyle = (el, prop) => getComputedStyle(el)[prop];\r\nconst setStyle = (el, prop, val) => (el.style[prop] = val);\r\n\r\n// Добавление стилей в виде объекта\r\nconst setStyles = (el, styleObj) => {\r\n  Object.assign(el.style, styleObj);\r\n};\r\n\r\n//Получение элементов по селектору\r\nconst getOne = (selector, parent = document) =>\r\n  parent.querySelector(selector);\r\n\r\nconst getAll = (selector, parent = document) => [\r\n  ...el.querySelectorAll(selector)\r\n];\r\n\r\n//  Скрытие/отображение элементов\r\nconst hide = (val) => {\r\n  const arr = typeof val === 'string' ? getAll(val) : [...val];\r\n  arr.forEach((i) => {\r\n    i.style.display = 'none';\r\n  });\r\n};\r\n\r\nconst show = (val) => {\r\n  const arr = typeof val === 'string' ? getAll(val) : [...val];\r\n  arr.forEach((i) => {\r\n    i.style.display = '';\r\n  });\r\n};\r\n\r\n// Определение наличия, добавление/удаление класса\r\nconst hasClass = (el, str, part = false) =>\r\n  !part ? el.classList.contains(str) : el.className.includes(str);\r\n\r\nconst addClass = (el, str, part = false) =>\r\n  !part ? (el.className = str) : el.classList.add(str);\r\n\r\nconst removeClass = (el, str, part = false) =>\r\n  !part ? (el.className = '') : el.classList.remove(str);\r\n\r\n// Запуск функции при клике за пределами/внутри элемента\r\nconst onClickOutside = (el, cb) => {\r\n  document.addEventListener('click', ({ target }) => {\r\n    if (!el.contains(target)) cb();\r\n  });\r\n};\r\n\r\nconst onClickInside = (el, cb) => {\r\n  document.addEventListener('click', ({ target }) => {\r\n    if (el.contains(target)) cb();\r\n  });\r\n};\r\n\r\n//==================\r\n\r\n//Находится ли элемент в области просмотра?\r\nconst isVisible = (el, part = false) => {\r\n  const { top, left, bottom, right } = el.getBoundingClientRect();\r\n  const { innerHeight, innerWidth } = window;\r\n\r\n  return part\r\n    ? ((top > 0 && top < innerHeight) ||\r\n        (bottom > 0 && bottom < innerHeight)) &&\r\n        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))\r\n    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;\r\n};\r\n\r\n//Определение величины прокрутки\r\nconst getScrollPosition = (el = window) => ({\r\n  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\r\n  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\r\n});\r\n\r\n//обрезать первый символ и сделать с большой буквы\r\nconst capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);\r\n\r\n//Создание элемента с помощью шаблонных литералов\r\nconst createElFromStr = (str) => {\r\n  const el = document.createElement('div');\r\n  el.innerHTML = str;\r\n  const child = el.fisrtElementChild;\r\n  el.remove();\r\n  return child;\r\n};\r\n\r\n// FORM\r\n//\"Сериализация\" формы - преобразование данных формы в строку\r\nconst serializeForm = (form) =>\r\n  Array.from(new FormData(form), (field) =>\r\n    field.map(encodeURIComponent).join('=')\r\n  ).join('&');\r\n\r\n// Преобразование данных формы в объект\r\nconst convertFormToObj = (form) =>\r\n  Array.from(new FormData(form)).reduce(\r\n    (acc, [key, val]) => ({\r\n      ...acc,\r\n      [key]: val\r\n    }),\r\n    {}\r\n  );\r\n{\r\n  /* <form id=\"form\">\r\n  <div>\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" id=\"name\" name=\"name\" value=\"John\" />\r\n  </div>\r\n  <div>\r\n    <label for=\"age\">Age</label>\r\n    <input type=\"number\" id=\"age\" name=\"age\" value=\"24\" />\r\n  </div>\r\n  <button>Send</button>\r\n</form>\r\nform.onsubmit = (e) => {\r\n  e.preventDefault()\r\n\r\n  const strData = serializeForm(form)\r\n  const objData = convertFormToObj(form)\r\n\r\n  console.log(strData) // name=John&age=24\r\n  console.log(objData) // {name: 'John', age: '24'}\r\n} */\r\n}\r\n\r\n//OBSERVER\r\n//Наблюдение за изменениями, происходящими в элементе\r\nconst observeMutations = (el, cb, opt) => {\r\n  const O = new MutationObserver((ms) => ms.forEach((m) => cb(m)));\r\n\r\n  O.observe(\r\n    el,\r\n    Object.assign(\r\n      {\r\n        childList: true,\r\n        attributes: true,\r\n        attributeOldValue: true,\r\n        characterData: true,\r\n        characterDataOldValue: true,\r\n        subtree: true\r\n      },\r\n      opt\r\n    )\r\n  );\r\n\r\n  return O;\r\n};\r\n\r\n// observeMutations(document, console.log)\r\n\r\n//==================\r\n//OTHER\r\n\r\n//Получение базового URL\r\nconst getBaseURL = (url) => url.replace(/[?#].+/, '');\r\n\r\n// getBaseURL('http://example.com?name=John#anchor')\r\n// http://example.com\r\n\r\n//Перенаправление с HTTP на HTTPS\r\nconst redirect = () => {\r\n  if (window.location.protocol !== 'https:')\r\n    window.location.replace('https://' + window.location.href.split('//')[1]);\r\n};\r\n\r\n//Получение параметров строки запроса\r\nconst searchParams = Object.fromEntries(\r\n  new URLSearchParams(window.location.search).entries()\r\n);\r\n\r\n// ?name=John&age=24\r\n// console.log(searchParams)\r\n// {name: 'John', age: '24'}\r\n\r\n//Получение случайного HEX и RGBA цветов\r\nconst getRandomHexColor = () =>\r\n  `#${((Math.random() * 0xffffff) << 0).toString(16)}`;\r\n\r\n// 2\r\nconst getRandomRGBAColor = (opacity) => {\r\n  const random = () => ~~(Math.random() * 255);\r\n  return `rgba(${random()}, ${random()}, ${random()}, ${opacity})`;\r\n};\r\n//Преобразование RGB в HEX\r\nconst RGBToHex = (r, g, b) =>\r\n  `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`;\r\n\r\n// RGBToHex(255, 165, 1) // '#ffa501'\r\n\r\n//==================\r\n// ID\r\n\r\n//Генерация уникального ID\r\nconst getRandomStr = (length) =>\r\n  Math.random().toString(36).slice(2).slice(0, length);\r\n// 10 | 11 characters\r\n\r\n// ensuring uniqueness\r\nconst memo = (fn) => {\r\n  const cache = new Set();\r\n\r\n  return function inner() {\r\n    let res = fn();\r\n\r\n    if (!isNaN(res[0])) {\r\n      res = 'x' + res.slice(1);\r\n    }\r\n\r\n    if (cache.has(res)) {\r\n      return inner();\r\n    } else {\r\n      cache.add(res);\r\n      return res;\r\n    }\r\n  };\r\n};\r\n\r\nconst getUniqueID = memo(getRandomStr);\r\n// const id = getUniqueID()\r\n// console.log(id) // j34omfv6jk\r\n\r\n//Генерация UUID\r\nconst genUUID = () =>\r\n  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>\r\n    (\r\n      c ^\r\n      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))\r\n    ).toString(16)\r\n  );\r\n\r\n// genUUID() // 7982fcfe-5721-4632-bede-6000885be57d\r\n\r\n//==================\r\n\r\nconst debounce = (fn, ms) =>\r\n  function (...args) {\r\n    let prevCall = this.lastCall;\r\n    this.lastCall = Date.now();\r\n\r\n    if (prevCall && this.lastCall - prevCall <= ms) {\r\n      clearTimeout(this.timer);\r\n    }\r\n\r\n    this.timer = setTimeout(() => fn(...args), ms);\r\n  };\r\n\r\nconst throttle = (fn, ms) => {\r\n  let id = null;\r\n  return (...args) => {\r\n    if (id) return;\r\n    fn(...args);\r\n    id = setTimeout(() => {\r\n      clearTimeout(id);\r\n      id = null;\r\n    }, ms);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://modern-html-scaffolder/./src/js/utils.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var __webpack_exports__=__webpack_require__("./src/js/script.js")})();