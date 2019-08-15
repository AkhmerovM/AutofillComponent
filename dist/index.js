module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.r(t),n.d(t,"Autofill",function(){return f});var o=n(0),r=n.n(o);n(2);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=l(t).call(this,e),n=!a||"object"!==i(a)&&"function"!=typeof a?c(o):a,s(c(n),"handleSelectItemClick",function(e){n.setState({value:e.currentTarget.textContent},n.findCoincedents)}),s(c(n),"handleOnChangeInput",function(e){var t=n.props.onChange,o=e.target.value;n.setState({value:o,selectedId:null},n.findCoincedents),t&&t()}),s(c(n),"findCoincedents",function(){var e=n.props.options,t=void 0===e?[]:e,o=n.state.value,r=t.filter(function(e){if(o===e||!o)return null;var t=o.toLowerCase();return 0===e.toLowerCase().indexOf(t)});n.setState({options:r})}),s(c(n),"handleClearClick",function(){n.setState({value:""},n.findCoincedents)}),s(c(n),"renderItem",function(e,t){var o=n.state,i=o.value,a=o.selectedId,l=n.props.classNameItem,c=void 0===l?"":l;return r.a.createElement("div",{key:t,className:"autofill__select-item ".concat(c," ").concat(a===t?"autofill__select-item_active":""),onClick:n.handleSelectItemClick},r.a.createElement("strong",null,e.substr(0,i.length)),e.substr(i.length,e.length-i.length))}),s(c(n),"bindEvents",function(){document.addEventListener("click",function(e){n.autofill.current.contains(e.target)||n.setState({options:[],selectedId:null})}),document.addEventListener("keydown",function(e){var t=n.state,o=t.options,r=t.selectedId;if(!o.length)return null;switch(e.code){case"ArrowDown":n.setState(function(e){return e.selectedId===o.length-1||null===e.selectedId?{selectedId:0}:{selectedId:e.selectedId+1}});break;case"ArrowUp":n.setState(function(e){return 0>=e.selectedId&&null!==e.selectedId?{selectedId:o.length-1}:{selectedId:e.selectedId-1}});break;case"Enter":if(0>r)return null;n.setState(function(e){return{value:e.options[e.selectedId],selectedId:null}},n.findCoincedents)}})}),s(c(n),"componentWillUnmount",function(){document.removeEventListener("keydown"),document.removeEventListener("click")}),n.state={value:e.value||"",options:e.options||[],selectedId:null},n.autofill=r.a.createRef(),n.select=r.a.createRef(),n}var n,f,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o["Component"]),n=t,(f=[{key:"componentDidMount",value:function(){this.bindEvents()}},{key:"componentDidUpdate",value:function(){var e=this.state.selectedId;this.select.current.scrollTop=e>=5?40*(e+1-5):0}},{key:"render",value:function(){var e=this.state,t=e.value,n=void 0===t?"":t,o=e.options,i=void 0===o?[]:o,a=this.props,l=a.className,c=void 0===l?"":l,u=a.placeholder,s=void 0===u?"":u,f=a.isDisabled,d=void 0!==f&&f,p=a.name,v=void 0===p?"":p;return r.a.createElement("div",{className:"autofill ".concat(c,"  ").concat(d?"autofill_disabled":""),ref:this.autofill},r.a.createElement("div",{className:"autofill__input-wrapper"},r.a.createElement("input",{type:"text",placeholder:s,name:v,value:n,onChange:this.handleOnChangeInput,onDoubleClick:this.findCoincedents,className:"autofill__input ".concat(d?"autofill__input_disabled":"")}),n?r.a.createElement("div",{className:"autofill__close",onClick:this.handleClearClick}):null),r.a.createElement("div",{className:"autofill__select",ref:this.select},i.map(this.renderItem)))}}])&&a(n.prototype,f),d&&a(n,d),t}()},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(5)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".autofill {\n  display: inline-block;\n  position: relative;\n}\n.autofill_disabled {\n  pointer-events: none;\n  background-color: #e9e9e9;\n}\n.autofill__input {\n  padding: 0 20px 0 10px;\n  height: 40px;\n  outline: none;\n  width: 100%;\n  border: 1px solid #aeaeae;\n}\n.autofill__input:focus {\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.autofill__input_disabled {\n  background-color: #e9e9e9;\n}\n.autofill__input-wrapper {\n  display: flex;\n  align-items: center;\n}\n.autofill__select {\n  max-height: 200px;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  overflow-y: scroll;\n  border-left: 1px solid #aeaeae;\n  border-right: 1px solid #aeaeae;\n  z-index: 10;\n}\n.autofill__select-item {\n  cursor: pointer;\n  height: 40px;\n  padding: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.autofill__select-item:hover {\n  background-color: #f0efea;\n}\n.autofill__select-item_active {\n  background-color: #71aaf0;\n}\n.autofill__close {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  opacity: 0.3;\n  cursor: pointer;\n  right: 0;\n}\n.autofill__close:hover {\n  opacity: 1;\n}\n.autofill__close:before,\n.autofill__close::after {\n  position: absolute;\n  content: ' ';\n  height: 12px;\n  width: 2px;\n  background-color: #333;\n}\n.autofill__close:before {\n  transform: rotate(45deg);\n}\n.autofill__close:after {\n  transform: rotate(-45deg);\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var l=e[a];null!=l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function l(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],t))}else{for(var l=[];a<o.parts.length;a++)l.push(h(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:l}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var p=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var i=v++;n=p||(p=u(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=u(t),o=function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e,t);return c(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i],u=r[a.id];u&&(u.refs--,o.push(u))}e&&c(l(e,t),t);for(var s=0;s<o.length;s++){var f=o[s];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete r[f.id]}}}}}]);
//# sourceMappingURL=index.js.map