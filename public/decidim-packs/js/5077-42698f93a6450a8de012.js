(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5077],{55077:function(t,e,n){"use strict";n.d(e,{Z:function(){return A}});var r=n(86638),o=n(22415),i=n(83716),a=Quill.import("delta"),u=Quill.import("parchment"),s=function t(e,n,r,o,i){return n.nodeType===n.TEXT_NODE?o.reduce((function(t,r){return r(n,t,e)}),new a):n.nodeType===n.ELEMENT_NODE?Array.from(n.childNodes||[]).reduce((function(a,u){var s=t(e,u,r,o,i);return u.nodeType===n.ELEMENT_NODE&&(s=r.reduce((function(t,n){return n(u,t,e)}),s),s=(i.get(u)||[]).reduce((function(t,n){return n(u,t,e)}),s)),a.concat(s)}),new a):new a},l=function(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;r-=1){var o=t.ops[r];if("string"!==typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e},c=function(t){return 0!==t.childNodes.length&&["address","article","blockquote","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","iframe","li","main","nav","ol","output","p","pre","section","table","td","tr","ul","video"].includes(t.tagName.toLowerCase())},f=function(t,e,n){if(!n)return null;var r=u.query(t);return r&&r.prototype instanceof i.i2?e.insert("\n"):null},p=function(t,e,n){if(!l(e,"\n")){if(n&&t.nodeType===t.ELEMENT_NODE&&"BR"===t.tagName)return e.insert({break:""});if(c(t))return e.insert("\n");if(e.length()>0&&t.nextSibling)for(var r=t.nextSibling;null!==r;){if(c(r))return e.insert("\n");var o=f(r,e,n);if(o)return o;r=r.firstChild}}return e},d=function(t,e){return l(e,"\n")||e.insert({break:""}),e};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(s){u=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){if(e&&("object"===h(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var O=Quill.import("delta"),j=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(a,t);var e,n,r,i=x(a);function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t,e)).overrideMatcher("b","b, strong"),n.overrideMatcher("br","br",d),n.matchers[1][1]=p,n.matchers[3][1]=p,n.removeMatcher(Node.ELEMENT_NODE,"matchSpacing"),n}return e=a,n=[{key:"overrideMatcher",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.matchers.findIndex((function(e){return e[0]===t}));r>=0&&(this.matchers[r][0]=e,n&&(this.matchers[r][1]=n))}},{key:"removeMatcher",value:function(t,e){var n=this.matchers.findIndex((function(n){return n[0]===t&&n[1].name===e}));n>=0&&this.matchers.splice(n,1)}},{key:"onPaste",value:function(t){if(!t.defaultPrevented&&this.quill.isEnabled()){t.preventDefault();var e=this.quill.getSelection(!0);if(null!==e){var n=t.clipboardData.getData("text/html"),r=t.clipboardData.getData("text/plain"),o=Array.from(t.clipboardData.files||[]);if(!n&&o.length>0)this.quill.uploader.upload(e,o);else{if(n&&o.length>0){var i=(new DOMParser).parseFromString(n,"text/html");if(1===i.body.childElementCount&&"IMG"===i.body.firstElementChild.tagName)return void this.quill.uploader.upload(e,o)}this.onPasteRange(e,{html:n,text:r})}}}}},{key:"onPasteRange",value:function(t,e){var n=e.text,r=e.html,o=this.quill.getFormat(t.index),i=this.convertPaste({text:n,html:r},o),a=(new O).retain(t.index).delete(t.length).concat(i);this.quill.updateContents(a,Quill.sources.USER),this.quill.setSelection(a.length()-t.length,Quill.sources.SILENT),this.quill.scrollIntoView()}},{key:"convertPaste",value:function(t){var e=t.html,n=t.text,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r[o.Z.blotName])return(new O).insert(n,b({},o.Z.blotName,r[o.Z.blotName]));if(!e)return(new O).insert(n||"");var i=this.convertPasteHTML(e);return l(i,"\n")&&(null===i.ops[i.ops.length-1].attributes||r.table)?i.compose((new O).retain(i.length()-1).delete(1)):i}},{key:"convertPasteHTML",value:function(t){var e=(new DOMParser).parseFromString(t,"text/html").body,n=new WeakMap,r=v(this.prepareMatching(e,n),2),o=r[0],i=r[1];return s(this.quill.scroll,e,o,i,n)}}],n&&g(e.prototype,n),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(Quill.import("modules/clipboard"));Quill.debug("error"),Quill.register({"modules/clipboard":j},!0);n(80477),n(93585);function S(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var E=["bold","italic","link","underline","header","list","video","image","alt","break","width","style","code","blockquote","indent"];function A(t){var e=$(t).data("toolbar"),n=$(t).data("disabled"),o=[["bold","italic","underline","linebreak"],[{list:"ordered"},{list:"bullet"}],["link","clean"],["code","blockquote"],[{indent:"-1"},{indent:"+1"}]],i=$(t).data("editorImages");"full"===e?o=[[{header:[2,3,4,5,6,!1]}]].concat(S(o),[["video"]]):"basic"===e&&(o=[].concat(S(o),[["video"]])),i&&o.push(["image"]);var a={linebreak:{},toolbar:{container:o,handlers:{linebreak:r.Z}}},u=$(t).siblings('input[type="hidden"]');t.innerHTML=u.val()||"";var s=$('meta[name="csrf-token"]').attr("content");i&&(a.imageResize={modules:["Resize","DisplaySize"]},a.imageUpload={url:$(t).data("uploadImagesPath"),method:"POST",name:"image",withCredentials:!1,headers:{"X-CSRF-Token":s},callbackOK:function(t,e){$("div.ql-toolbar").last().removeClass("editor-loading"),e(t.url)},callbackKO:function(t){$("div.ql-toolbar").last().removeClass("editor-loading"),console.log("Image upload error: ".concat(t.message))},checkBeforeSend:function(t,e){$("div.ql-toolbar").last().addClass("editor-loading"),e(t)}});var l=new Quill(t,{modules:a,formats:E,theme:"snow"});if(n&&l.disable(),l.on("text-change",(function(){var e=l.getText(),n=new CustomEvent("quill-position",{detail:l.getSelection()});if(t.dispatchEvent(n),"\n"!==e&&"\n\n"!==e||0!==l.root.querySelectorAll("iframe").length){var r="<p><br></p>",o=l.root.innerHTML.replace(new RegExp("^".concat(r,"|").concat(r,"$"),"g"),"");u.val(o)}else u.val("")})),l.emitter.emit("editor-ready"),i){var c=$(t).data("dragAndDropHelpText");$(t).after('<p class="help-text" style="margin-top:-1.5rem;">'.concat(c,"</p>"))}return l.emitter.emit("editor-ready"),l}},80477:function(t,e,n){var r,o,i,a;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}t=n.nmd(t),a=function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e){t.exports=function(t){var e=u(t);return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(22),o="object"==("undefined"===typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){return null!=t&&"object"==u(t)}},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(75),i=n(76),a=n(77),u=n(78),s=n(79);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,e,n){var r=n(8);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(16),o=n(64),i=n(87),a="[object Null]",u="[object Undefined]",s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:a:s&&s in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(73);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(11)(Object,"create");t.exports=r},function(t,e){t.exports=function(t,e){return t===e||t!==t&&e!==e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=e.overlay,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}},function(t,e,n){var r=n(21);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(48),o=n(65);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(13),o=n(30);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(5),o=n(0),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",s="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==a||e==u||e==i||e==s}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(11)(n(1),"Map");t.exports=r},function(t,e,n){var r=n(1).Symbol;t.exports=r},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(10),o=n(8);t.exports=function(t,e,n){(void 0===n||o(t[e],n))&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(41),o=n(18),i=n(46),a=n(51),u=n(0),s=n(32);t.exports=function t(e,n,l,c,f){e!==n&&i(n,(function(i,s){if(u(i))f||(f=new r),a(e,n,s,l,t,c,f);else{var p=c?c(e[s],i,s+"",e,n,f):void 0;void 0===p&&(p=i),o(e,s,p)}}),s)}},function(t,e,n){var r=n(26),o=n(89),i=n(90);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e,n){var r=n(11),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){(function(e){var n="object"==u(e)&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(107))},function(t,e,n){var r=n(88)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(47),o=n(2),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var r=n(1),o=n(102),i="object"==u(e)&&e&&!e.nodeType&&e,a=i&&"object"==u(t)&&t&&!t.nodeType&&t,s=a&&a.exports===i?r.Buffer:void 0,l=(s?s.isBuffer:void 0)||o;t.exports=l}).call(e,n(14)(t))},function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},function(t,e,n){var r=n(49),o=n(54),i=n(86),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},function(t,e,n){var r=n(43),o=n(50),i=n(12);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e,n){"use strict";e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=u(e)&&"function"!=typeof e?t:e}var i=n(9);n.d(e,"a",(function(){return a}));var a=function(t){function e(){var t,n,i;r(this,e);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display)},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.img){var t=i.getCurrentSize();if(i.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"==i.img.style.float){var e=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"})}else{var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-"+(n.width+4)+"px",bottom:"-"+(n.height+4)+"px",left:"auto"})}}},i.getCurrentSize=function(){return[i.img.width,Math.round(i.img.width/i.img.naturalWidth*i.img.naturalHeight)]},o(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+u(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(i.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=u(e)&&"function"!=typeof e?t:e}var i=n(9);n.d(e,"a",(function(){return a}));var a=function(t){function e(){var t,n,i;r(this,e);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.onCreate=function(){i.boxes=[],i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.positionBoxes()},i.onDestroy=function(){i.setCursor("")},i.positionBoxes=function(){var t=-parseFloat(i.options.handleStyles.width)/2+"px",e=-parseFloat(i.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach((function(t,e){Object.assign(i.boxes[e].style,t)}))},i.addBox=function(t){var e=document.createElement("div");Object.assign(e.style,i.options.handleStyles),e.style.cursor=t,e.style.width=i.options.handleStyles.width+"px",e.style.height=i.options.handleStyles.height+"px",e.addEventListener("mousedown",i.handleMousedown,!1),i.overlay.appendChild(e),i.boxes.push(e)},i.handleMousedown=function(t){i.dragBox=t.target,i.dragStartX=t.clientX,i.preDragWidth=i.img.width||i.img.naturalWidth,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1)},i.handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup)},i.handleDrag=function(t){if(i.img){var e=t.clientX-i.dragStartX;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?i.img.width=Math.round(i.preDragWidth-e):i.img.width=Math.round(i.preDragWidth+e),i.requestUpdate()}},i.setCursor=function(t){[document.body,i.img].forEach((function(e){e.style.cursor=t}))},o(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+u(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(i.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=u(e)&&"function"!=typeof e?t:e}var i=n(105),a=n.n(i),s=n(104),l=n.n(s),c=n(106),f=n.n(c),p=n(9);n.d(e,"a",(function(){return b}));var d=window.Quill.imports.parchment,h=new d.Attributor.Style("float","float"),v=new d.Attributor.Style("margin","margin"),y=new d.Attributor.Style("display","display"),b=function(t){function e(){var t,n,i;r(this,e);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),i.onCreate=function(){i.toolbar=document.createElement("div"),Object.assign(i.toolbar.style,i.options.toolbarStyles),i.overlay.appendChild(i.toolbar),i._defineAlignments(),i._addToolbarButtons()},i.onDestroy=function(){},i.onUpdate=function(){},i._defineAlignments=function(){i.alignments=[{icon:a.a,apply:function(){y.add(i.img,"inline"),h.add(i.img,"left"),v.add(i.img,"0 1em 1em 0")},isApplied:function(){return"left"==h.value(i.img)}},{icon:l.a,apply:function(){y.add(i.img,"block"),h.remove(i.img),v.add(i.img,"auto")},isApplied:function(){return"auto"==v.value(i.img)}},{icon:f.a,apply:function(){y.add(i.img,"inline"),h.add(i.img,"right"),v.add(i.img,"0 0 1em 1em")},isApplied:function(){return"right"==h.value(i.img)}}]},i._addToolbarButtons=function(){var t=[];i.alignments.forEach((function(e,n){var r=document.createElement("span");t.push(r),r.innerHTML=e.icon,r.addEventListener("click",(function(){t.forEach((function(t){return t.style.filter=""})),e.isApplied()?(h.remove(i.img),v.remove(i.img),y.remove(i.img)):(i._selectButton(r),e.apply()),i.requestUpdate()})),Object.assign(r.style,i.options.toolbarButtonStyles),n>0&&(r.style.borderLeftWidth="0"),Object.assign(r.children[0].style,i.options.toolbarButtonSvgStyles),e.isApplied()&&i._selectButton(r),i.toolbar.appendChild(r)}))},i._selectButton=function(t){t.style.filter="invert(20%)"},o(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+u(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(p.a)},function(t,e,n){var r=n(17),o=n(20),i=n(63),a=n(101),u=o((function(t){return t.push(void 0,i),r(a,void 0,t)}));t.exports=u},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(37),i=n.n(o),a=n(33),u=n(34),s=n(36),l=n(35),c={DisplaySize:u.a,Toolbar:s.a,Resize:l.a},f=function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.initializeModules=function(){n.removeModules(),n.modules=n.moduleClasses.map((function(t){return new(c[t]||t)(n)})),n.modules.forEach((function(t){t.onCreate()})),n.onUpdate()},this.onUpdate=function(){n.repositionElements(),n.modules.forEach((function(t){t.onUpdate()}))},this.removeModules=function(){n.modules.forEach((function(t){t.onDestroy()})),n.modules=[]},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(n.img===t.target)return;n.img&&n.hide(),n.show(t.target)}else n.img&&n.hide()},this.show=function(t){n.img=t,n.showOverlay(),n.initializeModules()},this.showOverlay=function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements()},this.hideOverlay=function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect(""))},this.repositionElements=function(){if(n.overlay&&n.img){var t=n.quill.root.parentNode,e=n.img.getBoundingClientRect(),r=t.getBoundingClientRect();Object.assign(n.overlay.style,{left:e.left-r.left-1+t.scrollLeft+"px",top:e.top-r.top+t.scrollTop+"px",width:e.width+"px",height:e.height+"px"})}},this.hide=function(){n.hideOverlay(),n.removeModules(),n.img=void 0},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(e){n.quill.root.style[e]=t,document.documentElement.style[e]=t}))},this.checkImage=function(t){n.img&&(46!=t.keyCode&&8!=t.keyCode||window.Quill.find(n.img).deleteAt(0),n.hide())},this.quill=e;var u=!1;o.modules&&(u=o.modules.slice()),this.options=i()({},o,a.a),!1!==u&&(this.options.modules=u),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]};e.default=f,window.Quill&&window.Quill.register("modules/imageResize",f)},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(66),i=n(67),a=n(68),u=n(69),s=n(70);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(80),i=n(81),a=n(82),u=n(83),s=n(84);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(3),i=n(92),a=n(93),u=n(94),s=n(95),l=n(96);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=s,r.prototype.set=l,t.exports=r},function(t,e,n){var r=n(1).Uint8Array;t.exports=r},function(t,e,n){var r=n(53),o=n(27),i=n(28),a=n(29),u=n(24),s=n(31),l=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),c=!n&&o(t),f=!n&&!c&&a(t),p=!n&&!c&&!f&&s(t),d=n||c||f||p,h=d?r(t.length,String):[],v=h.length;for(var y in t)!e&&!l.call(t,y)||d&&("length"==y||f&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,v))||h.push(y);return h}},function(t,e,n){var r=n(10),o=n(8),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];i.call(t,e)&&o(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(0),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){var r=n(62)();t.exports=r},function(t,e,n){var r=n(5),o=n(2),i="[object Arguments]";t.exports=function(t){return o(t)&&r(t)==i}},function(t,e,n){var r=n(13),o=n(74),i=n(0),a=n(97),u=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,c=s.toString,f=l.hasOwnProperty,p=RegExp("^"+c.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:u).test(a(t))}},function(t,e,n){var r=n(5),o=n(30),i=n(2),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,e,n){var r=n(0),o=n(25),i=n(85),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&n.push(u);return n}},function(t,e,n){var r=n(18),o=n(56),i=n(57),a=n(58),u=n(71),s=n(27),l=n(28),c=n(99),f=n(29),p=n(13),d=n(0),h=n(100),v=n(31),y=n(103);t.exports=function(t,e,n,b,g,m,x){var w=t[n],_=e[n],O=x.get(_);if(O)r(t,n,O);else{var j=m?m(w,_,n+"",t,e,x):void 0,S=void 0===j;if(S){var k=l(_),E=!k&&f(_),A=!k&&!E&&v(_);j=_,k||E||A?l(w)?j=w:c(w)?j=a(w):E?(S=!1,j=o(_,!0)):A?(S=!1,j=i(_,!0)):j=[]:h(_)||s(_)?(j=w,s(w)?j=y(w):(!d(w)||b&&p(w))&&(j=u(_))):S=!1}S&&(x.set(_,j),g(j,_,b,m,x),x.delete(_)),r(t,n,j)}}},function(t,e,n){var r=n(98),o=n(21),i=n(26),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){var r=n(42);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e,n){(function(t){var r=n(1),o="object"==u(e)&&e&&!e.nodeType&&e,i=o&&"object"==u(t)&&t&&!t.nodeType&&t,a=i&&i.exports===o?r.Buffer:void 0,s=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}}).call(e,n(14)(t))},function(t,e,n){var r=n(55);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(44),o=n(10);t.exports=function(t,e,n,i){var a=!n;n||(n={});for(var u=-1,s=e.length;++u<s;){var l=e[u],c=i?i(n[l],t[l],l,n,t):void 0;void 0===c&&(c=t[l]),a?o(n,l,c):r(n,l,c)}return n}},function(t,e,n){var r=n(1)["__core-js_shared__"];t.exports=r},function(t,e,n){var r=n(20),o=n(72);t.exports=function(t){return r((function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,u=i>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(i--,a):void 0,u&&o(n[0],n[1],u)&&(a=i<3?void 0:a,i=1),e=Object(e);++r<i;){var s=n[r];s&&t(e,s,r,a)}return e}))}},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var s=a[t?u:++o];if(!1===n(i[s],s,i))break}return e}}},function(t,e,n){var r=n(19),o=n(0);t.exports=function t(e,n,i,a,u,s){return o(e)&&o(n)&&(s.set(n,e),r(e,n,void 0,t,s),s.delete(n)),e}},function(t,e,n){var r=n(16),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0}catch(t){}var r=a.call(t);return e?t[u]=n:delete t[u],r}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(7);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(7),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return i.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(7),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(7),o="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}},function(t,e,n){var r=n(45),o=n(23),i=n(25);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},function(t,e,n){var r=n(8),o=n(12),i=n(24),a=n(0);t.exports=function(t,e,n){if(!a(n))return!1;var s=u(e);return!!("number"==s?o(n)&&i(e,n.length):"string"==s&&e in n)&&r(n[e],t)}},function(t,e){t.exports=function(t){var e=u(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(60),o=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(4),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(4);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(4);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(4);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(39),o=n(3),i=n(15);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(6);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e,n){var r=n(6);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(6);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){(function(t){var r=n(22),o="object"==u(e)&&e&&!e.nodeType&&e,i=o&&"object"==u(t)&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process,s=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=s}).call(e,n(14)(t))},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(17),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,u=o(i.length-e,0),s=Array(u);++a<u;)s[a]=i[e+a];a=-1;for(var l=Array(e+1);++a<e;)l[a]=i[a];return l[e]=n(s),r(t,this,l)}}},function(t,e,n){var r=n(52),o=n(91)(r);t.exports=o},function(t,e){var n=800,r=16,o=Date.now;t.exports=function(t){var e=0,i=0;return function(){var a=o(),u=r-(a-i);if(i=a,u>0){if(++e>=n)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(3);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(3),o=n(15),i=n(40),a=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!o||u.length<a-1)return u.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(u)}return n.set(t,e),this.size=n.size,this}},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,n){var r=n(12),o=n(2);t.exports=function(t){return o(t)&&r(t)}},function(t,e,n){var r=n(5),o=n(23),i=n(2),a="[object Object]",u=Function.prototype,s=Object.prototype,l=u.toString,c=s.hasOwnProperty,f=l.call(Object);t.exports=function(t){if(!i(t)||r(t)!=a)return!1;var e=o(t);if(null===e)return!0;var n=c.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==f}},function(t,e,n){var r=n(19),o=n(61)((function(t,e,n,o){r(t,e,n,o)}));t.exports=o},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(59),o=n(32);t.exports=function(t){return r(t,o(t))}},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==("undefined"===typeof window?"undefined":u(window))&&(n=window)}t.exports=n}])},"object"==u(e)&&"object"==u(t)?t.exports=a():(o=[],void 0===(i="function"===typeof(r=a)?r.apply(e,o):r)||(t.exports=i))},93585:function(){!function(){var t={};Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.ImageUpload=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t),this.quill=e,this.options=r,this.quill.getModule("toolbar").addHandler("image",this.selectLocalImage.bind(this)),this.handleDrop=this.handleDrop.bind(this),this.handlePaste=this.handlePaste.bind(this),this.quill.root.addEventListener("drop",this.handleDrop,!1),this.quill.root.addEventListener("paste",this.handlePaste,!1)}return e(t,[{key:"selectLocalImage",value:function(){var t=this,e=document.createElement("input");e.setAttribute("type","file"),e.click(),e.onchange=function(){var n=e.files[0];/^image\//.test(n.type)?(t.options.checkBeforeSend||t.checkBeforeSend.bind(t))(n,t.sendToServer.bind(t)):console.warn("You could only upload images.")}}},{key:"checkBeforeSend",value:function(t,e){e(t)}},{key:"sendToServer",value:function(t){var e=this;if(this.options.customUploader)this.options.customUploader(t,(function(t){e.insert(t)}));else{var n=this.options.url,r=this.options.method||"POST",o=this.options.name||"image",i=this.options.headers||{},a=this.options.callbackOK||this.uploadImageCallbackOK.bind(this),u=this.options.callbackKO||this.uploadImageCallbackKO.bind(this);if(n){var s=new FormData;s.append(o,t),this.options.csrf&&s.append(this.options.csrf.token,this.options.csrf.hash);var l=new XMLHttpRequest;for(var c in l.open(r,n,!0),i)l.setRequestHeader(c,i[c]);l.onload=function(){200===l.status?a(JSON.parse(l.responseText),e.insert.bind(e)):u({code:l.status,type:l.statusText,body:l.responseText})},this.options.withCredentials&&(l.withCredentials=!0),l.send(s)}else{var f=new FileReader;f.onload=function(t){a(t.target.result,e.insert.bind(e))},f.readAsDataURL(t)}}}},{key:"handleDrop",value:function(t){if(t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files.length){if(document.caretRangeFromPoint){var e=document.getSelection(),n=document.caretRangeFromPoint(t.clientX,t.clientY);e&&n&&e.setBaseAndExtent(n.startContainer,n.startOffset,n.startContainer,n.startOffset)}this.readFiles(t.dataTransfer.files,this.sendToServer.bind(this))}}},{key:"handlePaste",value:function(t){var e=this,n=Quill.import("delta");t.clipboardData&&t.clipboardData.items&&t.clipboardData.items.length&&this.readFiles(t.clipboardData.items,(function(t){var r=e.quill.getSelection();r&&e.quill.updateContents((new n).retain(r.index-1).delete(1)),setTimeout((function(){return e.sendToServer(t.getAsFile())}),0)}))}},{key:"readFiles",value:function(t,e){var n=this;[].forEach.call(t,(function(t){if(/^image\//.test(t.type)){var r=new FileReader;r.onload=function(r){(n.options.checkBeforeSend||n.checkBeforeSend.bind(n))(t,e)};var o=t.getAsFile?t.getAsFile():t;o instanceof Blob&&r.readAsDataURL(o)}}))}},{key:"insert",value:function(t){var e=(this.quill.getSelection()||{}).index||this.quill.getLength();this.quill.insertEmbed(e,"image",t,"user")}},{key:"uploadImageCallbackOK",value:function(t,e){e(t)}},{key:"uploadImageCallbackKO",value:function(t){alert(t)}}]),t}();window.Quill.register("modules/imageUpload",t.ImageUpload)}()}}]);
//# sourceMappingURL=5077-42698f93a6450a8de012.js.map