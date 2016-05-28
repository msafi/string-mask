!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(4);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(a)["default"]}});var o=t(3);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o)["default"]}});var i=t(5);Object.defineProperty(r,"safeSetSelection",{enumerable:!0,get:function(){return n(i)["default"]}});var c=t(2);Object.defineProperty(r,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return c.convertMaskToPlaceholder}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},r.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},r.maskingCharacters=["1","A","?","U","L","*"],r.placeholderCharacter="_"},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return a(e).map(function(e){return-1!==s.maskingCharacters.indexOf(e)?s.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case s.maskingCharactersEnums.numeric:return c(e);case s.maskingCharactersEnums.uppercase:case s.maskingCharactersEnums.lowercase:case s.maskingCharactersEnums.alphabetic:return u(e);case s.maskingCharactersEnums.alphanumeric:return c(e)||u(e);case s.maskingCharactersEnums.any:return!0;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case s.maskingCharactersEnums.uppercase:return e.toUpperCase();case s.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function c(e){return!isNaN(e)&&" "!==e}function u(e){return/^[a-zA-Z]+$/.test(e)}function l(e,r){for(var t=e.length>r.length?e.length:r.length,n=0;t>n;n++)if(e[n]!==r[n])return n;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.tokenize=a,r.isAcceptableCharacter=o,r.potentiallyTransformCharacter=i,r.getIndexOfFirstChange=l;var s=t(1)},function(e,r,t){"use strict";function n(e){var r=e.previousConformedInput,t=void 0===r?"":r,n=e.conformToMaskResults,i=void 0===n?{}:n,c=e.currentCaretPosition,u=void 0===c?0:c;if(0===u)return 0;var l=i.output,s=void 0===l?"":l,f=i.meta,h=void 0===f?{}:f,d=h.input,p=void 0===d?"":d,v=h.mask,g=void 0===v?"":v,m=(0,a.getIndexOfFirstChange)(t,p),C=m-u>1;if(C)return u;var b=(0,a.convertMaskToPlaceholder)(g),k=!(p.length<t.length),y=Math.abs(t.length-p.length)>1,M=1===p.length,P=y&&!k&&!M,j=k&&(t===s||s===b),_=""===t&&s===b,x=y||M?s:b,O=b[m]!==o.placeholderCharacter,A=u;if(P)return u;if(y||M)A=0;else if(j)A--;else if(k)for(var E=u;E<b.length;E++){var w=O&&!_;if(b[E]===o.placeholderCharacter){A=E+(w?1:0);break}}if(k||M){for(var T=A;T<=x.length;T++)if(x[T]===o.placeholderCharacter||T===x.length)return T>s.length?s.length:T}else for(var I=A;I>=0;I--)if(x[I-1]===o.placeholderCharacter||0===I)return I}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var a=t(2),o=t(1)},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?"":arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=t.guide,i=void 0===n?!0:n,c=t.previousConformedInput,u=(0,a.convertMaskToPlaceholder)(r),l=i===!1&&void 0!==c,s=(0,a.tokenize)(e),f=l&&!(e.length<c.length),h="";e:for(var d=0;d<u.length;d++){var p=u[d];if(p===o.placeholderCharacter){if(s.length>0)for(;s.length>0;){var v=s.shift();if(v===o.placeholderCharacter&&l!==!0){h+=o.placeholderCharacter;continue e}if((0,a.isAcceptableCharacter)(v,r[d])){h+=(0,a.potentiallyTransformCharacter)(v,r[d]);continue e}}l===!1&&(h+=u.substr(d,u.length));break}p===e[d]&&s.shift(),h+=p}if(l&&f===!1){for(var g=null,m=0;m<h.length;m++)u[m]===o.placeholderCharacter&&(g=m);h=null!==g?h.substr(0,g+1):""}return{output:h,meta:{input:e,mask:r,guide:i}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var a=t(2),o=t(1)},function(e,r){"use strict";function t(e,r){document.activeElement===e&&e.setSelectionRange(r,r,"none")}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t}])});
