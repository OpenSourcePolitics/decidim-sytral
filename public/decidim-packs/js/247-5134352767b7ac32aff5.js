(self.webpackChunkapp=self.webpackChunkapp||[]).push([[247],{82186:function(e,t,n){"use strict";n(92087),n(84633),n(35666),n(62172),n(85392);var r=n(23972),o=n.n(r);n(39281),n(41438),n(65205),n(96524),n(19976),n(89743);var i=n(78265),a=n(73935),c=function(e){var t=document.querySelector(".layout-nav");e.preventDefault(),t.classList.toggle("is-nav-open")};var l=n(64112);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var d=u((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),$(t).length>0&&(0,l.Z)(t,n)[0].addEventListener("sortupdate",(function(e){var t=$(e.target).children();n.onSortUpdate&&n.onSortUpdate(t)}))}));function p(e,t){return new d(e,t)}var f=n(55077),h=n(91776),v=n(80318),m=n(9669),b=n.n(m),g=n(43129),y=n(45697),w=n.n(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===S(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o=C(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).minCharactersToSearch=3,t.handleChange=function(e){t.setState({selectedOption:e}),t.props.changeURL&&b().get(t.props.changeURL,{headers:{Accept:"text/javascript"},withCredentials:!0,params:{id:e.value}}).then((function(e){var t=document.createElement("script");t.type="text/javascript",t.innerHTML=e.data,document.getElementsByTagName("head")[0].appendChild(t)})).catch((function(e){b().isCancel(e)}))},t.filterOptions=function(e,t,n){return e},t.onInputChange=function(e){e.length<t.minCharactersToSearch?t.setState({noResultsText:t.props.searchPromptText}):t.setState({noResultsText:t.props.noResultsText})},t.loadOptions=function(e,n){var r=e.toLowerCase();if(t.cancelTokenSource&&t.cancelTokenSource.cancel(),r.length<t.minCharactersToSearch)return n(null,{options:[],complete:!1});t.cancelTokenSource=b().CancelToken.source(),b().get(t.props.searchURL,{cancelToken:t.cancelTokenSource.token,headers:{Accept:"application/json"},withCredentials:!0,params:{term:r}}).then((function(e){return n(null,{options:e.data,complete:!0})})).catch((function(e){if(!b().isCancel(e))return n(e,{options:[],complete:!1})}))},t.state={options:e.options,selectedOption:e.selected,searchPromptText:e.searchPromptText,noResultsText:e.noResultsText},t}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.autoload,n=e.name,r=e.placeholder,o=this.state,a=o.selectedOption,c=o.options,l=o.searchPromptText,s=o.noResultsText;return i.createElement("div",{className:"autocomplete-field"},i.createElement(g.e2,{cache:!1,name:n,value:a,options:c,placeholder:r,searchPromptText:l,noResultsText:s,onChange:this.handleChange,onInputChange:this.onInputChange,loadOptions:this.loadOptions,filterOptions:this.filterOptions,autoload:t,removeSelected:!0,escapeClearsValue:!1,onCloseResetsInput:!1}))}}])&&_(t.prototype,n),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Component);x.defaultProps={autoload:!1},x.propTypes={changeURL:w().string,searchPromptText:w().string,noResultsText:w().string,searchURL:w().string,selected:w().string,options:w().array,autoload:w().bool,name:w().string,placeholder:w().string};var F=x,P=n(49400),j=n(80461);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A="%count%",D={charactersAtLeast:{one:"at least ".concat(A," character"),other:"at least ".concat(A," characters")},charactersLeft:{one:"".concat(A," character left"),other:"".concat(A," characters left")}},B=D,L=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$input=t,this.$target=$(this.$input.data("remaining-characters")),this.minCharacters=parseInt(this.$input.attr("minlength"),10),this.maxCharacters=parseInt(this.$input.attr("maxlength"),10),this.$target.length<1){var n=null;n=this.$input.attr("id")&&this.$input.attr("id").length>0?"".concat(this.$input.attr("id"),"_characters"):"characters_".concat(Math.random().toString(36).substr(2,9)),this.$target=$('<span id="'.concat(n,'" class="form-input-extra-before" />')),this.$input.parent().is(".editor")?this.$input.parent().after(this.$target):this.$input.parent().is(".columns")&&this.$input.parent().parent().is(".row")?this.$input.parent().parent().after(this.$target):this.$input.after(this.$target)}this.$target.length>0&&(this.maxCharacters>0||this.minCharacters>0)&&this.bindEvents()}var t,n,r;return t=e,r=[{key:"configureMessages",value:function(e){B=$.extend(D,e)}}],(n=[{key:"bindEvents",value:function(){var e=this;Quill&&this.$input.parent().is(".editor")&&setTimeout((function(){Quill.find(e.$input.siblings(".editor-container")[0]).on("text-change",(function(){e.updateStatus()}))})),this.$input.on("keyup",(function(){e.updateStatus()})),null!==this.$input.get(0)&&this.$input.get(0).addEventListener("emoji.added",(function(){e.updateStatus()})),this.updateStatus()}},{key:"updateStatus",value:function(){var e=this.$input.val().length,t=[];if(this.minCharacters>0){var n=B.charactersAtLeast.other;1===this.minCharacters&&(n=B.charactersAtLeast.one),t.push(n.replace(A,this.minCharacters))}if(this.maxCharacters>0){var r=this.maxCharacters-e,o=B.charactersLeft.other;1===r&&(o=B.charactersLeft.one),this.$input[0].dispatchEvent(new CustomEvent("characterCounter",{detail:{remaining:r}})),t.push(o.replace(A,r))}this.$target.text(t.join(", "))}}])&&E(t.prototype,n),r&&E(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}$((function(){$("input[type='text'], textarea, .editor>input[type='hidden']").each((function(e,t){var n=$(t);(n.is("[minlength]")||n.is("[maxlength]"))&&function(e){e.data("remaining-characters-counter",new L(e))}(n)}))}));var R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};U(this,e),this.controllerSelect=t.controllerSelect,this.subformWrapperClass=t.subformWrapperClass,this.globalWrapperSelector=t.globalWrapperSelector,this._bindEvent(),this._runAll()}var t,n,r;return t=e,(n=[{key:"_runAll",value:function(){var e=this;this.controllerSelect.each((function(t,n){e.run(n)}))}},{key:"run",value:function(e){var t=$(e),n=this.subformWrapperClass,r=t.val(),o=t.parents(this.globalWrapperSelector).find(".".concat(n)),i=o.filter("#".concat(n,"-").concat(r));o.find("input,textarea,select").prop("disabled",!0),o.hide(),i.find("input,textarea,select").prop("disabled",!1),i.show()}},{key:"_bindEvent",value:function(){var e=this;this.controllerSelect.on("change",(function(t){e.run(t.target)}))}}])&&I(t.prototype,n),r&&I(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.Decidim=window.Decidim||{},window.Decidim.managedUsersForm=function(){new R({controllerSelect:$("select#impersonate_user_authorization_handler_name"),subformWrapperClass:"authorization-handler",globalWrapperSelector:"form"}).run()},window.Decidim.config=new j.Z,window.Decidim.InputCharacterCounter=L;var z=function(e){window.$(e).each((function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},window.$(t).data("autocomplete"));a.render(i.createElement(F,n),t)}))};function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}$((function(){var e;window.theDataPicker=new v.Z($(".data-picker")),$(document).foundation(),(e=document.querySelector(".menu-trigger"))&&e.addEventListener("click",c),z('[data-plugin="autocomplete"]'),p("#steps tbody",{placeholder:$('<tr style="border-style: dashed; border-color: #000"><td colspan="4">&nbsp;</td></tr>')[0],onSortUpdate:function(e){var t=$("#steps tbody").data("sort-url"),n=e.map((function(e,t){return $(t).data("id")})).toArray();$.ajax({method:"POST",url:t,contentType:"application/json",data:JSON.stringify({items_ids:n})})}}),(0,h.Z)(),$(".editor-container").each((function(e,t){(0,f.Z)(t)})),$("form.new_filter").each((function(){new P.Z($(this)).mountComponent()}))}));var Z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};q(this,e),this.controllerSelect=t.controllerSelect,this.subformWrapperClass=t.subformWrapperClass,this.globalWrapperSelector=t.globalWrapperSelector,this._bindEvent(),this._runAll()}var t,n,r;return t=e,(n=[{key:"_runAll",value:function(){var e=this;this.controllerSelect.each((function(t,n){e.run(n)}))}},{key:"run",value:function(e){var t=$(e),n=this.subformWrapperClass,r=t.val(),o=t.parents(this.globalWrapperSelector).find("#".concat(n,"-").concat(r));t.prop("checked")?(o.find("input,textarea,select").prop("disabled",!1),o.show()):(o.find("input,textarea,select").prop("disabled",!0),o.hide())}},{key:"_bindEvent",value:function(){var e=this;this.controllerSelect.on("change",(function(t){e.run(t.target)}))}}])&&H(t.prototype,n),r&&H(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();$((function(){new Z({controllerSelect:$("input[name$=\\[authorization_handlers\\]\\[\\]]"),subformWrapperClass:"authorization-handler",globalWrapperSelector:"fieldset"}).run()}));n(58517),n(66126),n(38015),n(49254);function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N(this,e),this.ruleCheckboxes=t.ruleCheckboxes,this._runAll()}var t,n,r;return t=e,(n=[{key:"_runAll",value:function(){var e=this;this.ruleCheckboxes.each((function(t,n){e._bindEvent(n),e.run(n)}))}},{key:"_bindEvent",value:function(e){var t=this;$(e).on("change",(function(e){t.run(e.target)}))}},{key:"run",value:function(e){var t=this;this.toggleTextInput(e),$(e).prop("checked")&&this.ruleCheckboxes.filter((function(t,n){return n!==e})).prop("checked",!1).each((function(e,n){t.toggleTextInput(n)}))}},{key:"toggleTextInput",value:function(e){var t=$(e).closest("div");if(!(t.length<1)){var n=t.attr("class").replace(/^vote_rule_/,"vote_").replace(/_enabled_container$/,""),r=$('[class^="'.concat(n,'"][class$="_container"]'));$(e).prop("checked")?r.slideDown():r.slideUp()}}}])&&J(t.prototype,n),r&&J(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}$((function(){new Q({ruleCheckboxes:$("input[id^='component_settings_vote_rule_']")}).run(),$(".readonly_container input").click((function(e){return e.preventDefault(),!1}));var e=$("input#component_settings_amendments_enabled");if(e.length>0){var t=$(".amendments_wizard_help_text_container, .amendments_visibility_container, .amendment_creation_enabled_container, .amendment_reaction_enabled_container, .amendment_promotion_enabled_container");e.is(":not(:checked)")&&t.hide(),e.click((function(){t.toggle()}))}}));var K=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};V(this,e),this.listSelector=t.listSelector,this.hideOnFirstSelector=t.hideOnFirstSelector,this.hideOnLastSelector=t.hideOnLastSelector,this.run()}var t,n,r;return t=e,(n=[{key:"run",value:function(){var e=$(this.listSelector),t=this.hideOnFirstSelector,n=this.hideOnLastSelector;if(1===e.length){var r=e.first();r.find(t).hide(),r.find(n).hide()}else e.each((function(r,o){o.id===e.first().attr("id")?($(o).find(t).hide(),$(o).find(n).show()):o.id===e.last().attr("id")?($(o).find(n).hide(),$(o).find(t).show()):($(o).find(n).show(),$(o).find(t).show())}))}}])&&G(t.prototype,n),r&&G(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ee=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};X(this,e),this.listSelector=t.listSelector,this.labelSelector=t.labelSelector,this.onPositionComputed=t.onPositionComputed,this.run()}var t,n,r;return t=e,(n=[{key:"run",value:function(){var e=this;$(this.listSelector).each((function(t,n){var r=$(n).find(e.labelSelector),o=r.html();o.match(/#(\d+)/)?r.html(o.replace(/#(\d+)/,"#".concat(t+1))):r.html("".concat(o," #").concat(t+1)),e.onPositionComputed&&e.onPositionComputed(n,t)}))}}])&&Y(t.prototype,n),r&&Y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};te(this,e),this.wrapperSelector=t.wrapperSelector,this.containerSelector=t.containerSelector,this.fieldSelector=t.fieldSelector,this.addFieldButtonSelector=t.addFieldButtonSelector,this.addSeparatorButtonSelector=t.addSeparatorButtonSelector,this.addTitleAndDescriptionButtonSelector=t.addTitleAndDescriptionButtonSelector,this.fieldTemplateSelector=t.fieldTemplateSelector,this.separatorTemplateSelector=t.separatorTemplateSelector,this.TitleAndDescriptionTemplateSelector=t.TitleAndDescriptionTemplateSelector,this.removeFieldButtonSelector=t.removeFieldButtonSelector,this.moveUpFieldButtonSelector=t.moveUpFieldButtonSelector,this.moveDownFieldButtonSelector=t.moveDownFieldButtonSelector,this.onAddField=t.onAddField,this.onRemoveField=t.onRemoveField,this.onMoveUpField=t.onMoveUpField,this.onMoveDownField=t.onMoveDownField,this.placeholderId=t.placeholderId,this.elementCounter=0,this._enableInterpolation(),this._activateFields(),this._bindEvents()}var t,n,r;return t=e,n=[{key:"_enableInterpolation",value:function(){$.fn.replaceAttribute=function(e,t,n){return $(this).find("[".concat(e,"*=").concat(t,"]")).addBack("[".concat(e,"*=").concat(t,"]")).each((function(r,o){$(o).attr(e,$(o).attr(e).replace(t,n))})),this},$.fn.template=function(e,t){var n=$(this).find("template, .decidim-template");n.length>0&&n.html((function(n,r){return $(r).template(e,t)[0].outerHTML}));var r=$(this).find("[data-template]");return r.length>0&&r.each((function(n,r){var o=$(r),i=$(o.data("template")),a=$(i[0].outerHTML),c="".concat(i.attr("id"),"-").concat(t),l="#".concat(c);a.attr("id",c),o.attr("data-template",l).data("template",l),i.after(a),a.html((function(n,r){return $(r).template(e,t)[0].outerHTML}))})),$(this).replaceAttribute("id",e,t),$(this).replaceAttribute("name",e,t),$(this).replaceAttribute("data-tabs-content",e,t),$(this).replaceAttribute("for",e,t),$(this).replaceAttribute("tabs_id",e,t),$(this).replaceAttribute("href",e,t),$(this).replaceAttribute("value",e,t),this}}},{key:"_bindEvents",value:function(){var e=this;$(this.wrapperSelector).on("click",this.addFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.fieldTemplateSelector)}))})),this.addSeparatorButtonSelector&&$(this.wrapperSelector).on("click",this.addSeparatorButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.separatorTemplateSelector)}))})),this.addTitleAndDescriptionButtonSelector&&$(this.wrapperSelector).on("click",this.addTitleAndDescriptionButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.TitleAndDescriptionTemplateSelector)}))})),$(this.wrapperSelector).on("click",this.removeFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._removeField(t)}))})),this.moveUpFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveUpFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveUpField(t)}))})),this.moveDownFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveDownFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveDownField(t)}))}))}},{key:"_bindSafeEvent",value:function(e,t){e.preventDefault(),e.stopPropagation();try{return t(e.target)}catch(n){return console.error(n),n}}},{key:"_addField",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".decidim-template",t=$(this.wrapperSelector),n=t.find(this.containerSelector),r=t.data("template"),o=null;r&&(o=$(r)),(null===o||o.length<1)&&(o=t.children("template, ".concat(e)));var i=$(o.html()).template(this.placeholderId,this._getUID());i.find("ul.tabs").attr("data-tabs",!0);var a=n.find(this.fieldSelector).last();a.length>0?a.after(i):i.appendTo(n),i.foundation(),this.onAddField&&this.onAddField(i)}},{key:"_removeField",value:function(e){var t=$(e).parents(this.fieldSelector);if(t.find("input").filter((function(e,t){return t.name.match(/id/)})).length>0){var n=t.find("input").filter((function(e,t){return t.name.match(/delete/)}));n.length>0&&$(n[0]).val(!0),t.addClass("hidden"),t.hide()}else t.remove();this.onRemoveField&&this.onRemoveField(t)}},{key:"_moveUpField",value:function(e){var t=$(e).parents(this.fieldSelector);t.prev().before(t),this.onMoveUpField&&this.onMoveUpField(t)}},{key:"_moveDownField",value:function(e){var t=$(e).parents(this.fieldSelector);t.next().after(t),this.onMoveDownField&&this.onMoveDownField(t)}},{key:"_activateFields",value:function(){var e=this,t=$(this.wrapperSelector).find(this.containerSelector);t.append(t.find("script")),$(this.fieldSelector).each((function(t,n){$(n).template(e.placeholderId,e._getUID()),$(n).find("ul.tabs").attr("data-tabs",!0)}))}},{key:"_getUID",value:function(){return this.elementCounter+=1,(new Date).getTime()+this.elementCounter}}],n&&ne(t.prototype,n),r&&ne(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();$((function(){[{placeHolderId:"external-domain-id",wrapperSelector:".external-domains",fieldSelector:".external-domain",addFieldSelector:".add-external-domain"}].forEach((function(e){var t,n=e.fieldSelector.replace(".",""),r=new K({listSelector:"".concat(e.fieldSelector,":not(.hidden)"),hideOnFirstSelector:".move-up-question",hideOnLastSelector:".move-down-question"}),o=new ee({listSelector:"".concat(e.fieldSelector,":not(.hidden)"),labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find("input[name$=\\[position\\]]").val(t)}}),i=function(){p(".external-domains-list:not(.published)",{handle:".external-domain-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){o.run(),r.run()}})};t={placeholderId:e.placeHolderId,wrapperSelector:e.wrapperSelector,containerSelector:"".concat(e.wrapperSelector,"-list"),fieldSelector:e.fieldSelector,addFieldButtonSelector:e.addFieldSelector,removeFieldButtonSelector:".remove-".concat(n),moveUpFieldButtonSelector:".move-up-question",moveDownFieldButtonSelector:".move-down-question",onAddField:function(){i(),o.run(),r.run()},onRemoveField:function(e){o.run(),r.run(),$("input",e).removeAttr("required")},onMoveUpField:function(){o.run(),r.run()},onMoveDownField:function(){o.run(),r.run()}},new re(t),i(),$(e.fieldSelector).each((function(e,t){!function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide(),$("input",e).removeAttr("required"))}($(t))})),o.run(),r.run()}))}));n(5428);function oe(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}$((function(){var e=$(".draggable-list"),t=[];e.each((function(e,n){t=[].concat(oe(t),[".".concat(n.className.split(" ").filter((function(e){return/js-list.*/.test(e)}))[0])])})),document.addEventListener("drag",(function(t){e.not(t.target.parentElement).addClass("dragging")})),document.addEventListener("dragend",(function(){e.removeClass("dragging")})),p(t.join(", "),{handle:"li",forcePlaceholderSize:!0,connectWith:".js-connect"})})),$((function(){var e=".js-sortable";$(e).each((function(t,n){p(n.id?"#".concat(n.id):e,{handle:"li",forcePlaceholderSize:!0,placeholderClass:"sort-placeholder"})}))}));n(99101),n(94729),n(4043),n(83192),n(59583),n(30223),n(81584),n(8588),n(19090),n(9752);o().start(),window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("select.language-change").forEach((function(e){e.addEventListener("change",(function(){var t=e.value,n=e.parentElement.parentElement.nextElementSibling;n.querySelector(".is-active").classList.remove("is-active"),n.querySelector(t).classList.add("is-active")}))}))}))},94729:function(){$((function(){var e=$(".moderation-details"),t=e.find(".toggle-content"),n=e.find(".reported-content"),r=n.find(".current"),o=n.find(".original");o.hide(),t.on("click",(function(){r.toggle(),o.toggle(),r.is(":hidden")?t.html(t.data("see-current-button-label")):t.html(t.data("see-original-button-label"))}))}))},66126:function(){$((function(){var e=$(".form.newsletter_deliver");if(e.length>0){var t=e.find("#send_newsletter_to_all_users"),n=e.find("#send_newsletter_to_followers"),r=e.find("#send_newsletter_to_participants"),o=e.find("#participatory_spaces_for_select"),i=n.find("input[type='checkbox']").prop("checked"),a=r.find("input[type='checkbox']").prop("checked");t.on("change",(function(e){var t=e.target.checked;t?(n.find("input[type='checkbox']").prop("checked",!t),r.find("input[type='checkbox']").prop("checked",!t),o.hide()):(n.find("input[type='checkbox']").prop("checked",!t),r.find("input[type='checkbox']").prop("checked",!t),o.show())})),n.on("change",(function(e){var n=e.target.checked,i=r.find("input[type='checkbox']").prop("checked");n?(t.find("input[type='checkbox']").prop("checked",!n),o.show()):i||(t.find("input[type='checkbox']").prop("checked",!0),o.hide())})),r.on("change",(function(e){var r=e.target.checked,i=n.find("input[type='checkbox']").prop("checked");r?(t.find("input[type='checkbox']").prop("checked",!r),o.show()):i||(t.find("input[type='checkbox']").prop("checked",!0),o.hide())})),i||a?o.show():o.hide(),$(".form .spaces-block-tag").each((function(e,t){var n=$(t).find(".chosen-select");n.change((function(){var e=n.find("option:selected").val();"all"===e?(n.find("option").not(":first").prop("selected",!0),n.find("option[value='all']").prop("selected",!1)):""===e&&n.find("option").not(":first").prop("selected",!1)}))})),e.on("change",(function(){var t=e.serializeJSON().newsletter,n=e.data("recipients-count-newsletter-path"),r=$("#recipients_count_spinner");r.removeClass("hide"),$.get(n,{data:t},(function(e){$("#recipients_count").text(e)})).always((function(){r.addClass("hide")}))}))}}))},8588:function(){$((function(){var e=$("#show-email-modal");if(0!==e.length){var t=$("[data-open=user_email]",e),n=$("#user_email",e),r=$("#user_full_name",e);$("[data-toggle=show-email-modal]").on("click",(function(e){e.preventDefault(),t.show(),t.attr("data-open-url",e.currentTarget.href),r.text($(e.currentTarget).data("full-name")),n.html("")}))}}))},49254:function(){$((function(){var e=$("label[for='component_settings_proposal_edit_time_limited']"),t=$("#component_settings_proposal_edit_time_limited"),n=$("#component_settings_proposal_edit_time_infinite"),r=$(".proposal_edit_before_minutes_container");r.detach().appendTo(e),n.is(":checked")&&r.hide(),t.on("click",(function(){r.show()})),n.on("click",(function(){r.hide()}))}))},38015:function(){$((function(){var e=$("#component_settings_scopes_enabled"),t=$("#component_settings_scope_id");$(".edit_component, .new_component").length>0&&(e.on("change",(function(e){var n=e.target.checked;window.theDataPicker.enabled(t,n)})),window.theDataPicker.enabled(t,e.prop("checked")))}))},89743:function(){$((function(){$("[data-tabs]").on("change.zf.tabs",(function(e){var t=$(e.target).next(".tabs-content .tabs-panel.is-active"),n=t.find(".editor .ql-editor");(n.length>0||(n=t.find("input:first")).length>0)&&n.focus()}))}))},58517:function(){$((function(){var e=$("#welcome-notification-details"),t=$("#organization_send_welcome_notification",e),n=$("#organization_customize_welcome_notification",e),r=function(){t.is(":checked")?$(".send-welcome-notification-details",e).show():$(".send-welcome-notification-details",e).hide(),n.is(":checked")?$(".customize-welcome-notification-details",e).show():$(".customize-welcome-notification-details",e).hide()};$(t).click((function(){return r()})),$(n).click((function(){return r()})),r()}))},60805:function(e,t,n){"use strict";n.d(t,{AP:function(){return i},SB:function(){return l},jC:function(){return o},lO:function(){return c},qA:function(){return a}});var r={};function o(e,t){r[e]=t}var i=function(e){r[e]=null},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.history&&window.history.pushState(t,null,e)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.history&&window.history.replaceState(t,null,e)},l=function(){return window.history?window.history.state:null};window.onpopstate=function(e){if(e.isTrusted)for(var t in r)r.hasOwnProperty(t)&&r[t](e.state)}},9752:function(){$((function(){var e=$(".slug"),t=e.find("input"),n=e.find("span.slug-url-value");t.on("keyup",(function(e){n.html(e.target.value)}))}))}}]);
//# sourceMappingURL=247-5134352767b7ac32aff5.js.map