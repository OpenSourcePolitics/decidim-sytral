(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3373],{23373:function(t,e,n){"use strict";n(86760);var r=n(45243),o=n(48782);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}r.DivIcon.SVGIcon=o.q,r.DivIcon.SVGIcon.DecidimIcon=r.DivIcon.SVGIcon.extend({options:{fillColor:"#ef604d",opacity:0},_createPathDescription:function(){return"M14 1.17a11.685 11.685 0 0 0-11.685 11.685c0 11.25 10.23 20.61 10.665 21a1.5 1.5 0 0 0 2.025 0c0.435-.435 10.665-9.81 10.665-21A11.685 11.685 0 0 0 14 1.17Zm0 17.415A5.085 5.085 0 1 1 19.085 13.5 5.085 5.085 0 0 1 14 18.585Z"},_createCircle:function(){return""},_createSVG:function(){var t=this._createPath(),e=this._createCircle(),n=this._createText(),r="".concat(this.options.className,"-svg"),o="width:".concat(this.options.iconSize.x,"px; height:").concat(this.options.iconSize.y,"px;");return'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'.concat(r,'" style="').concat(o,'">').concat(t).concat(e).concat(n,"</svg>")}});var a={},l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"getController",value:function(t){return a[t]}},{key:"setController",value:function(t,e){a[t]=e}},{key:"findByMap",value:function(t){return Object.values(a).find((function(e){return e.getMap()===t}))}}],(n=null)&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=l.getController(e);r&&r.remove(),this.mapId=e,this.config=$.extend({popupTemplateId:"marker-popup",markerColor:"#ef604d"},n),this.map=null,this.eventHandlers={},l.setController(e,this)}var e,n,o;return e=t,(n=[{key:"getConfig",value:function(){return this.config}},{key:"getMap",value:function(){return this.map}},{key:"load",value:function(){return this.map=r.map(this.mapId),this.map.scrollWheelZoom.disable(),this.map.on("popupopen",(function(t){$(t.popup.getElement()).attr("tabindex",0).focus()})),this.map.on("popupclose",(function(t){$(t.popup._source._icon).focus()})),this.map}},{key:"start",value:function(){}},{key:"remove",value:function(){this.map&&(this.map.remove(),this.map=null)}},{key:"createIcon",value:function(){return new r.DivIcon.SVGIcon.DecidimIcon({fillColor:this.config.markerColor,iconSize:r.point(28,36)})}},{key:"setEventHandler",value:function(t,e){this.eventHandlers[t]=e}},{key:"triggerEvent",value:function(t,e){var n=this.eventHandlers[t];return"function"===typeof n?Reflect.apply(n,this,e):null}}])&&u(e.prototype,n),o&&u(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(95732);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){if(e&&("object"===p(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(a,t);var e,n,o,i=d(a);function a(){return s(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"start",value:function(){this.markerClusters=null,Array.isArray(this.config.markers)&&this.config.markers.length>0?this.addMarkers(this.config.markers):this.map.fitWorld()}},{key:"addMarkers",value:function(t){var e=this;null===this.markerClusters&&(this.markerClusters=new r.MarkerClusterGroup,this.map.addLayer(this.markerClusters)),$.template(this.config.popupTemplateId,$("#".concat(this.config.popupTemplateId)).html());var n=new r.LatLngBounds(t.map((function(t){return[t.latitude,t.longitude]})));t.forEach((function(t){var n=new r.Marker([t.latitude,t.longitude],{icon:e.createIcon(),keyboard:!0,title:t.title}),o=document.createElement("div");$.tmpl(e.config.popupTemplateId,t).appendTo(o),n.bindPopup(o,{maxwidth:640,minWidth:500,keepInView:!0,className:"map-info"}).openPopup(),e.markerClusters.addLayer(n)}));var o=this.map.getSize();o.y>=400&&o.x>=400?this.map.fitBounds(n,{padding:[100,100]}):o.y>=120&&o.x>=120?this.map.fitBounds(n,{padding:[30,30]}):this.map.fitBounds(n)}},{key:"clearMarkers",value:function(){this.map.removeLayer(this.markerClusters),this.markerClusters=new r.MarkerClusterGroup,this.map.addLayer(this.markerClusters)}}])&&f(e.prototype,n),o&&f(e,o),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){if(e&&("object"===v(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var x=window.open,O=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,n,o,i=k(a);function a(){return g(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"start",value:function(){var t=this;if(this.map.removeControl(this.map.zoomControl),this.map.dragging.disable(),this.map.touchZoom.disable(),this.map.doubleClickZoom.disable(),this.map.scrollWheelZoom.disable(),this.map.boxZoom.disable(),this.map.keyboard.disable(),this.map.tap&&this.map.tap.disable(),this.config.zoom?this.map.setZoom(this.config.zoom):this.map.setZoom(15),this.config.latitude&&this.config.longitude){var e=[this.config.latitude,this.config.longitude];this.map.panTo(e),r.marker(e,{icon:this.createIcon(),keyboard:!0,title:this.config.title}).addTo(this.map)._icon.removeAttribute("tabindex")}this.config.link&&this.map._container.addEventListener("click",(function(e){e.preventDefault(),t.map._container.focus(),x(t.config.link,"_blank")}))}}])&&_(e.prototype,n),o&&_(e,o),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);n(99831);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function L(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(t,e){if(e&&("object"===C(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var S=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(a,t);var e,n,o,i=L(a);function a(){return I(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"start",value:function(){this.config.marker?this.addMarker(this.config.marker):this.map.fitWorld()}},{key:"addMarker",value:function(t){var e=this;if(null!==t.latitude&&null!==t.longitude){var n={lat:t.latitude,lng:t.longitude};this.triggerEvent("coordinates",[n]),this.marker=r.marker(n,{icon:this.createIcon(),keyboard:!0,title:t.title,draggable:!0}),this.marker.on("drag",(function(t){e.triggerEvent("coordinates",[t.target.getLatLng()])})),this.marker.addTo(this.map);var o=parseInt(this.config.zoom,10)||14;this.map.setView(n,o)}}},{key:"getMarker",value:function(){return this.marker}},{key:"removeMarker",value:function(){this.marker&&(this.marker.remove(),this.marker=null)}}])&&P(e.prototype,n),o&&P(e,o),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);window.Decidim.createMapController=function(t,e){return"static"===e.type?new O(t,e):"drag-marker"===e.type?new S(t,e):new b(t,e)},$((function(){var t=$("[data-decidim-map]");if(t.length<1&&$("#map").length>0)throw new Error("DEPRECATION: Please update your maps customizations or include 'decidim/map/legacy.js' for legacy support!");t.each((function(t,e){var n=$(e),r=n.attr("id");r||(r="map-".concat(Math.random().toString(36).substr(2,9)),n.attr("id",r));var o=n.data("decidim-map"),i=window.Decidim.createMapController(r,o),a=i.load();n.data("map",a),n.data("map-controller",i),n.trigger("configure.decidim",[a,o]),i.start(),n.trigger("ready.decidim",[a,o])}))}))},86760:function(){!function(t,e){var n,r=t.fn.domManip,o="_tmplitem",i=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,a={},l={},u={key:0,data:{}},c=0,p=0,s=[];function f(e,n,r,o){var i={data:o||(n?n.data:{}),_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:g,nest:_,wrap:w,html:k,update:$};return e&&t.extend(i,e,{nodes:[],parent:n}),r&&(i.tmpl=r,i._ctnt=i._ctnt||i.tmpl(t,i),i.key=++c,(s.length?l:a)[c]=i),i}function m(e,n,r){var o,i=r?t.map(r,(function(t){return"string"===typeof t?e.key?t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,'$1 _tmplitem="'+e.key+'" $2'):t:m(t,e,t._ctnt)})):e;return n?i:((i=i.join("")).replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,(function(e,n,r,i){v(o=t(r).get()),n&&(o=d(n).concat(o)),i&&(o=o.concat(d(i)))})),o||d(i))}function d(e){var n=document.createElement("div");return n.innerHTML=e,t.makeArray(n.childNodes)}function h(e){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+t.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,(function(e,n,r,o,i,a,l){var u,c,p,s=t.tmpl.tag[r];if(!s)throw"Template command not found: "+r;return u=s._default||[],a&&!/\w$/.test(i)&&(i+=a,a=""),i?(i=b(i),l=l?","+b(l)+")":a?")":"",c=a?i.indexOf(".")>-1?i+a:"("+i+").call($item"+l:i,p=a?c:"(typeof("+i+")==='function'?("+i+").call($item):("+i+"))"):p=c=u.$1||"null",o=b(o),"');"+s[n?"close":"open"].split("$notnull_1").join(i?"typeof("+i+")!=='undefined' && ("+i+")!=null":"true").split("$1a").join(p).split("$1").join(c).split("$2").join(o?o.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,(function(t,e,n,r){return(r=r?","+r+")":n?")":"")?"("+e+").call($item"+r:t})):u.$2||"")+"_.push('"}))+"');}return _;")}function y(e,n){e._wrap=m(e,!0,t.isArray(n)?n:[i.test(n)?n:t(n).html()]).join("")}function b(t){return t?t.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function v(e){var n,r,i,u,s,m="_"+p,d={};for(i=0,u=e.length;i<u;i++)if(1===(n=e[i]).nodeType){for(s=(r=n.getElementsByTagName("*")).length-1;s>=0;s--)h(r[s]);h(n)}function h(e){var n,r,i,u,s=e;if(u=e.getAttribute(o)){for(;s.parentNode&&1===(s=s.parentNode).nodeType&&!(n=s.getAttribute(o)););n!==u&&(s=s.parentNode?11===s.nodeType?0:s.getAttribute(o)||0:0,(i=a[u])||((i=f(i=l[u],a[s]||l[s],null,!0)).key=++c,a[c]=i),p&&h(u)),e.removeAttribute(o)}else p&&(i=t.data(e,"tmplItem"))&&(h(i.key),a[i.key]=i,s=(s=t.data(e.parentNode,"tmplItem"))?s.key:0);if(i){for(r=i;r&&r.key!=s;)r.nodes.push(e),r=r.parent;delete i._ctnt,delete i._wrap,t.data(e,"tmplItem",i)}function h(t){i=d[t+=m]=d[t]||f(i,a[i.parent.key+m]||i.parent,null,!0)}}}function g(t,e,n,r){if(!t)return s.pop();s.push({_:t,tmpl:e,item:this,data:n,options:r})}function _(e,n,r){return t.tmpl(t.template(e),n,r,this)}function w(e,n){var r=e.options||{};return r.wrapped=n,t.tmpl(t.template(e.tmpl),e.data,r,e.item)}function k(e,n){var r=this._wrap;return t.map(t(t.isArray(r)?r.join(""):r).filter(e||"*"),(function(t){return n?t.innerText||t.textContent:t.outerHTML||(e=t,(r=document.createElement("div")).appendChild(e.cloneNode(!0)),r.innerHTML);var e,r}))}function $(){var e=this.nodes;t.tmpl(null,null,null,this).insertBefore(e[0]),t(e).remove()}t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,r){t.fn[e]=function(o){var i,l,u,c,s=[],f=t(o),m=1===this.length&&this[0].parentNode;if(n=a||{},m&&11===m.nodeType&&1===m.childNodes.length&&1===f.length)f[r](this[0]),s=this;else{for(l=0,u=f.length;l<u;l++)p=l,i=(l>0?this.clone(!0):this).get(),t.fn[r].apply(t(f[l]),i),s=s.concat(i);p=0,s=this.pushStack(s,e,f.selector)}return c=n,n=null,t.tmpl.complete(c),s}})),t.fn.extend({tmpl:function(e,n,r){return t.tmpl(this[0],e,n,r)},tmplItem:function(){return t.tmplItem(this[0])},template:function(e){return t.template(e,this[0])},domManip:function(e,o,i,l){if(e[0]&&e[0].nodeType){for(var u,c=t.makeArray(arguments),s=e.length,f=0;f<s&&!(u=t.data(e[f++],"tmplItem")););s>1&&(c[0]=[t.makeArray(e)]),u&&p&&(c[2]=function(e){t.tmpl.afterManip(this,e,i)}),r.apply(this,c)}else r.apply(this,arguments);return p=0,n||t.tmpl.complete(a),this}}),t.extend({tmpl:function(e,n,r,o){var i,c=!o;if(c)o=u,e=t.template[e]||t.template(null,e),l={};else if(!e)return e=o.tmpl,a[o.key]=o,o.nodes=[],o.wrapped&&y(o,o.wrapped),t(m(o,null,o.tmpl(t,o)));return e?("function"===typeof n&&(n=n.call(o||{})),r&&r.wrapped&&y(r,r.wrapped),i=t.isArray(n)?t.map(n,(function(t){return t?f(r,o,e,t):null})):[f(r,o,e,n)],c?t(m(o,null,i)):i):[]},tmplItem:function(e){var n;for(e instanceof t&&(e=e[0]);e&&1===e.nodeType&&!(n=t.data(e,"tmplItem"))&&(e=e.parentNode););return n||u},template:function(e,n){return n?("string"===typeof n?n=h(n):n instanceof t&&(n=n[0]||{}),n.nodeType&&(n=t.data(n,"tmpl")||t.data(n,"tmpl",h(n.innerHTML))),"string"===typeof e?t.template[e]=n:n):e?"string"!==typeof e?t.template(null,e):t.template[e]||t.template(null,i.test(e)?e:t(e)):null},encode:function(t){return(""+t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),t.extend(t.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},if:{open:"if(($notnull_1) && $1a){",close:"}"},else:{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(t){a={}},afterManip:function(e,n,r){var o=11===n.nodeType?t.makeArray(n.childNodes):1===n.nodeType?[n]:[];r.call(e,n),v(o),p++}})}(jQuery)},99831:function(){L.TileLayer.HERE=L.TileLayer.extend({options:{subdomains:"1234",minZoom:2,maxZoom:18,scheme:"normal.day",resource:"maptile",mapId:"newest",format:"png8",appId:"",appCode:"",useCIT:!1,useHTTPS:!0,language:"",language2:""},initialize:function(t){var e=(t=L.setOptions(this,t)).scheme.split(".")[0];t.tileResolution=256;var n=["apiKey="+encodeURIComponent(t.apiKey)];t.apiKey||(n=["app_id="+encodeURIComponent(t.appId),"app_code="+encodeURIComponent(t.appCode)]),t.language&&n.push("lg="+encodeURIComponent(t.language)),t.language2&&n.push("lg2="+encodeURIComponent(t.language2));var r="/maptile/2.1/{resource}/{mapId}/{scheme}/{z}/{x}/{y}/{tileResolution}/{format}"+("?"+n.join("&")),o="/maptile/2.1/copyright/{mapId}?apiKey={apiKey}",i="maps.ls.hereapi.com";t.apiKey||(i="maps"+(t.useCIT?".cit":"")+".api.here.com",o="/maptile/2.1/copyright/{mapId}?app_id={appId}&app_code={appCode}");var a="base."+i;"satellite"!=e&&"terrain"!=e&&"hybrid"!=e||(a="aerial."+i),-1!==t.scheme.indexOf(".traffic.")&&(a="traffic"+i);var l="http"+(t.useHTTPS?"s":""),u=l+"://{s}."+a+r;this._attributionUrl=L.Util.template(l+"://1."+a+o,this.options),L.TileLayer.prototype.initialize.call(this,u,t),this._attributionText=""},onAdd:function(t){L.TileLayer.prototype.onAdd.call(this,t),this._attributionBBoxes||this._fetchAttributionBBoxes()},onRemove:function(t){this._map.attributionControl.removeAttribution(this._attributionText),this._attributionText="",this._map.off("moveend zoomend resetview",this._findCopyrightBBox,this),L.TileLayer.prototype.onRemove.call(this,t)},_fetchAttributionBBoxes:function(){var t=new XMLHttpRequest;t.onreadystatechange=L.bind((function(){4==t.readyState&&200==t.status&&this._parseAttributionBBoxes(JSON.parse(t.responseText))}),this),t.open("GET",this._attributionUrl,!0),t.send()},_parseAttributionBBoxes:function(t){if(this._map){for(var e=t[this.options.scheme.split(".")[0]]||t.normal,n=0;n<e.length;n++)if(e[n].boxes)for(var r=0;r<e[n].boxes.length;r++){var o=e[n].boxes[r];e[n].boxes[r]=L.latLngBounds([[o[0],o[1]],[o[2],o[3]]])}this._map.on("moveend zoomend resetview",this._findCopyrightBBox,this),this._attributionProviders=e,this._findCopyrightBBox()}},_findCopyrightBBox:function(){if(this._map){for(var t=this._attributionProviders,e=[],n=this._map.getZoom(),r=this._map.getBounds(),o=0;o<t.length;o++)if(t[o].minLevel<=n&&t[o].maxLevel>=n)if(t[o].boxes)for(var i=0;i<t[o].boxes.length;i++){var a=t[o].boxes[i];if(r.intersects(a)){e.push(t[o]);break}}else e.push(t[o]);var l=['<a href="https://legal.here.com/en-gb/terms" target="_blank" rel="noopener noreferrer">HERE maps</a>'];for(o=0;o<e.length;o++){var u=e[o];l.push('<abbr title="'+u.alt+'">'+u.label+"</abbr>")}var c="\xa9 "+l.join(", ")+". ";c!==this._attributionText&&(this._map.attributionControl.removeAttribution(this._attributionText),this._map.attributionControl.addAttribution(this._attributionText=c))}}}),L.tileLayer.here=function(t){return new L.TileLayer.HERE(t)}}}]);
//# sourceMappingURL=3373-94a2d415e346f7ecc30c.js.map