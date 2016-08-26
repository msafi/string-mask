!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/core"),require("@angular/forms")):"function"==typeof define&&define.amd?define(["@angular/core","@angular/forms"],t):"object"==typeof exports?exports.angular2TextMask=t(require("@angular/core"),require("@angular/forms")):e.angular2TextMask=t(e.ng.core,e.ng.forms)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=r(6),a=r(7),u=r(5),s=new i.Provider(a.NG_VALUE_ACCESSOR,{useExisting:i.forwardRef(function(){return l}),multi:!0}),l=function(){function e(e){this.textMaskConfig={mask:"",guide:!0,placeholderChar:"_",pipe:void 0,keepCharPositions:!1,onReject:void 0,onAccept:void 0},this.inputElement=e.nativeElement}return e.prototype.writeValue=function(e){this.value=e},e.prototype.registerOnChange=function(e){this.propagateChange=e},e.prototype.registerOnTouched=function(e){this.propagateTouched=e},e.prototype.ngAfterContentInit=function(){this.textMaskInputElement=u["default"](Object.assign({inputElement:this.inputElement},this.textMaskConfig)),this.textMaskInputElement.update(this.value),this.propagateChange(this.inputElement.value)},e.prototype.onInput=function(){this.textMaskInputElement.update(),this.propagateChange(this.inputElement.value)},n([i.Input("textMask"),o("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=n([i.Directive({providers:[s],host:{"(input)":"onInput()"},selector:"input[textMask]"}),o("design:paramtypes",[i.ElementRef])],e)}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l,t.Directive=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments.length<=1||void 0===arguments[1]?u.placeholderChar:arguments[1];if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(l),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isString=o,t.isNumber=i,t.processCaretTraps=a;var u=r(1),s=[],l="[]"},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,s=e.rawValue,l=e.placeholderChar,f=e.placeholder,c=e.indexesOfPipedChars,d=void 0===c?n:c,p=e.caretTrapIndexes,h=void 0===p?n:p;if(0===a)return 0;var v=s.length,g=r.length,m=f.length,y=u.length,C=v-g,b=C>0,x=0===g,k=C>1&&!b&&!x;if(k)return a;var O=b&&(r===u||u===f),j=0;if(O?j=a-C:!function(){for(var e=u.toLowerCase(),t=s.toLowerCase(),r=t.substr(0,a).split(o),n=r.filter(function(t){return e.indexOf(t)!==-1}),i=n[n.length-1],c=d.map(function(t){return e[t]}),p=c.filter(function(e){return e===i}).length,h=n.filter(function(e){return e===i}).length,v=f.substr(0,f.indexOf(l)).split(o).filter(function(e,t){return e===i&&s[t]!==e}).length,g=v+h+p,m=0,C=0;C<y;C++){var b=e[C];if(j=C+1,b===i&&m++,m>=g)break}}(),b){for(var P=j,M=j;M<=m;M++)if(f[M]===l&&(P=M),f[M]===l||h.indexOf(M)!==-1||M===m)return P}else for(var _=j;_>=0;_--)if(f[_-1]===l||h.indexOf(_)!==-1||0===_)return _}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var n=[],o=""},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?a:arguments[0],t=arguments.length<=1||void 0===arguments[1]?a:arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,u=void 0===n||n,s=r.previousConformedValue,l=void 0===s?a:s,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,d=r.placeholder,p=void 0===d?(0,o.convertMaskToPlaceholder)(t,c):d,h=r.currentCaretPosition,v=r.keepCharPositions,g=u===!1&&void 0!==l,m=e.length,y=l.length,C=p.length,b=t.length,x=m-y,k=x>0,O=h+(k?-x:0),j=O+Math.abs(x);if(v===!0&&!k){for(var P=a,M=O;M<j;M++)p[M]===c&&(P+=c);e=e.slice(0,O)+P+e.slice(O,m)}for(var _=e.split(a).map(function(e,t){return{"char":e,isNew:t>=O&&t<j}}),w=m-1;w>=0;w--){var T=_[w]["char"];if(T!==c){var V=w>=O&&y===b;T===p[V?w-x:w]&&_.splice(w,1)}}var E=a,R=!1;e:for(var S=0;S<C;S++){var N=p[S];if(N===c){if(_.length>0)for(;_.length>0;){var I=_.shift(),A=I["char"],q=I.isNew;if(A===c&&g!==!0){E+=c;continue e}if(t[S].test(A)){if(v===!0&&q!==!1&&l!==a&&u!==!1&&k){for(var D=_.length,J=null,L=0;L<D;L++){var W=_[L];if(W["char"]!==c&&W.isNew===!1)break;if(W["char"]===c){J=L;break}}null!==J?(E+=A,_.splice(J,1)):S--}else E+=A;continue e}R=!0}g===!1&&(E+=p.substr(S,C));break}E+=N}if(g&&k===!1){for(var G=null,U=0;U<E.length;U++)p[U]===c&&(G=U);E=null!==G?E.substr(0,G+1):a}return{conformedValue:E,meta:{someCharsRejected:R}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(2),i=r(1),a=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.inputElement,r=e.mask,n=e.guide,o=e.pipe,l=e.placeholderChar,c=void 0===l?h.placeholderChar:l,y=e.onAccept,C=e.onReject,b=e.keepCharPositions,x=void 0!==b&&b;"object"===("undefined"==typeof r?"undefined":s(r))&&void 0!==r.pipe&&void 0!==r.mask&&(o=r.pipe,r=r.mask);var k={previousConformedValue:m},O=void 0,j=void 0;return r instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(r,c)),t.placeholder===m&&t.setAttribute(v,O),{state:k,update:function(){var e=arguments.length<=0||void 0===arguments[0]?t.value:arguments[0];if(e!==k.previousConformedValue){var l=a(e),h=t.selectionStart,v=k.previousConformedValue,b=void 0;if(("undefined"==typeof r?"undefined":s(r))===g){j=r(l,{currentCaretPosition:h,previousConformedValue:v,placeholderChar:c});var P=(0,p.processCaretTraps)(j),M=P.maskWithoutCaretTraps,_=P.indexes;j=M,b=_,O=(0,p.convertMaskToPlaceholder)(j,c)}else j=r;var w={previousConformedValue:v,guide:n,placeholderChar:c,pipe:o,placeholder:O,currentCaretPosition:h,keepCharPositions:x},T=(0,d["default"])(l,j,w),V=T.conformedValue,E=T.meta.someCharsRejected,R=("undefined"==typeof o?"undefined":s(o))===g,S={};R&&(S=o(V,u({rawValue:l},w)),S===!1?S={value:v,rejected:!0}:(0,p.isString)(S)&&(S={value:S}));var N=R?S.value:V,I=(0,f["default"])({previousConformedValue:v,conformedValue:N,placeholder:O,rawValue:l,currentCaretPosition:h,placeholderChar:c,indexesOfPipedChars:S.indexesOfPipedChars,caretTrapIndexes:b}),A=N===O&&0===I,q=A?m:N;t.value=q,i(t,I),k.previousConformedValue=q,("undefined"==typeof y?"undefined":s(y))===g&&q!==v&&y();var D=l.length<v.length;("undefined"==typeof C?"undefined":s(C))===g&&(E||S.rejected)&&D===!1&&C({conformedValue:N,pipeRejection:S.rejected,maskRejection:E})}}}}function i(e,t){document.activeElement===e&&e.setSelectionRange(t,t,y)}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=o;var l=r(3),f=n(l),c=r(4),d=n(c),p=r(2),h=r(1),v="placeholder",g="function",m="",y=""},function(t,r){t.exports=e},function(e,r){e.exports=t}])});