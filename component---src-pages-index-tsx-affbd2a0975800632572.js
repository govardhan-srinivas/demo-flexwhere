(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"89ui":function(e,t,n){"use strict";var r=n("TqRt"),a=n("R8uD"),i=r(n("d+NK"));t.renderRichText=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var o=JSON.parse(n);if(!r||!r.length)return(0,a.documentToReactComponents)(o,t);var u={items:[{sys:{type:"Entry"},richText:o}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Asset",id:e.contentful_id}})}))}},c=(0,i.default)(u,{removeUnresolved:!0});return(0,a.documentToReactComponents)(c[0].richText,t)}},"9eSz":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),o=r(n("VbXa")),u=r(n("8OQS")),c=r(n("pVnL")),l=r(n("q1tI")),s=r(n("17x9")),f=function(e){var t=(0,c.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed,r=m(t||n||[]);return r&&r.src},m=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),h=function(e){var t=f(e),n=p(t);return g[n]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,b=new WeakMap;function S(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),n&&l.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function O(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function w(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:r})}))}function T(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:r})}))}function I(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var _=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),b.set(e,t)),function(){n.unobserve(e),b.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",s=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+o+u+n+r+t+i+a+c+s+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,u=l.default.createElement(R,(0,c.default)({ref:t,src:n},i,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,a(r),u):u})),R=l.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,s=e.onError,f=e.loading,d=e.draggable,p=e.ariaHidden,m=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:n,srcSet:r,src:a},m,{onLoad:o,onError:s,ref:t,loading:f,draggable:d,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:s.default.object,onError:s.default.func,onLoad:s.default.func};var A=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=E&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!y&&v&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||E&&(y||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=l.default.createRef(),n.placeholderRef=t.placeholderRef||l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=f(e),(n=p(t))&&(g[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=f(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,u=void 0===o?{}:o,s=e.placeholderStyle,d=void 0===s?{}:s,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,b=e.itemProp,O=e.loading,I=e.draggable,_=g||h;if(!_)return null;var A=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,D=(0,c.default)({opacity:A?1:0,transition:j?"opacity "+E+"ms":"none"},u),P="boolean"==typeof y?"lightgray":y,x={transitionDelay:E+"ms"},k=(0,c.default)({opacity:this.state.imgLoaded?0:1},j&&x,u,d),C={title:t,alt:this.state.isVisible?"":n,style:k,className:p,itemProp:b},M=this.state.isHydrated?m(_):_[0];if(g)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),P&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&x)}),M.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:_,generateSources:T}),M.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:_,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(_),l.default.createElement(R,{alt:n,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:O,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:n,title:t,loading:O},M,{imageVariants:_}))}}));if(h){var H=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete H.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},P&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},j&&x)}),M.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:_,generateSources:T}),M.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:_,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(_),l.default.createElement(R,{alt:n,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:O,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:n,title:t,loading:O},M,{imageVariants:_}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=s.default.shape({width:s.default.number.isRequired,height:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string,media:s.default.string}),D=s.default.shape({aspectRatio:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,sizes:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string,media:s.default.string,maxWidth:s.default.number,maxHeight:s.default.number});function P(e){return function(t,n,r){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");s.default.checkPropTypes(((a={})[n]=e,a),t,"prop",r)}}A.propTypes={resolutions:j,sizes:D,fixed:P(s.default.oneOfType([j,s.default.arrayOf(j)])),fluid:P(s.default.oneOfType([D,s.default.arrayOf(D)])),fadeIn:s.default.bool,durationFadeIn:s.default.number,title:s.default.string,alt:s.default.string,className:s.default.oneOfType([s.default.string,s.default.object]),critical:s.default.bool,crossOrigin:s.default.oneOfType([s.default.string,s.default.bool]),style:s.default.object,imgStyle:s.default.object,placeholderStyle:s.default.object,placeholderClassName:s.default.string,backgroundColor:s.default.oneOfType([s.default.string,s.default.bool]),onLoad:s.default.func,onError:s.default.func,onStartLoad:s.default.func,Tag:s.default.string,itemProp:s.default.string,loading:s.default.oneOf(["auto","lazy","eager"]),draggable:s.default.bool};var x=A;t.default=x},CcKz:function(e,t,n){},LOBU:function(e,t,n){},PGGC:function(e,t,n){},Q1PT:function(e,t,n){(function(t){var n;n=function(){"use strict";var e=Function.prototype.toString,n=Object.create,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,c=Object.prototype,l=c.hasOwnProperty,s=c.propertyIsEnumerable,f="function"==typeof o,d="function"==typeof WeakMap,p=function(t,r){if(!t.constructor)return n(null);var a=t.constructor,i=t.__proto__||u(t);if(a===r.Object)return i===r.Object.prototype?{}:n(i);if(~e.call(a).indexOf("[native code]"))try{return new a}catch(c){}return n(i)},m=function(e,t,n,r){var a=p(e,t);for(var i in r.set(e,a),e)l.call(e,i)&&(a[i]=n(e[i],r));if(f){var u=o(e),c=u.length;if(c)for(var d=0,m=void 0;d<c;d++)m=u[d],s.call(e,m)&&(a[m]=n(e[m],r))}return a},g=function(e,t,n,u){var c=p(e,t);u.set(e,c);var l=f?i(e).concat(o(e)):i(e),s=l.length;if(s)for(var d=0,m=void 0,g=void 0;d<s;d++)if("callee"!==(m=l[d])&&"caller"!==m)if(g=a(e,m)){g.get||g.set||(g.value=n(e[m],u));try{r(c,m,g)}catch(h){c[m]=g.value}}else c[m]=n(e[m],u);return c},h=Array.isArray,y="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function E(e,t){var r=!(!t||!t.isStrict),a=t&&t.realm||y,i=r?g:m;return function e(t,n){if(!t||"object"!=typeof t)return t;if(n.has(t))return n.get(t);var o,u,c,l=t.constructor;if(l===a.Object)return i(t,a,e,n);if(h(t)){if(r)return g(t,a,e,n);var s=t.length;o=new l,n.set(t,o);for(var f=0;f<s;f++)o[f]=e(t[f],n);return o}if(t instanceof a.Date)return new l(t.getTime());if(t instanceof a.RegExp)return(o=new l(t.source,t.flags||(c="",(u=t).global&&(c+="g"),u.ignoreCase&&(c+="i"),u.multiline&&(c+="m"),u.unicode&&(c+="u"),u.sticky&&(c+="y"),c))).lastIndex=t.lastIndex,o;if(a.Map&&t instanceof a.Map)return o=new l,n.set(t,o),t.forEach((function(t,r){o.set(r,e(t,n))})),o;if(a.Set&&t instanceof a.Set)return o=new l,n.set(t,o),t.forEach((function(t){o.add(e(t,n))})),o;if(a.Blob&&t instanceof a.Blob)return t.slice(0,t.size,t.type);if(a.Buffer&&a.Buffer.isBuffer(t))return o=a.Buffer.allocUnsafe?a.Buffer.allocUnsafe(t.length):new l(t.length),n.set(t,o),t.copy(o),o;if(a.ArrayBuffer){if(a.ArrayBuffer.isView(t))return o=new l(t.buffer.slice(0)),n.set(t,o),o;if(t instanceof a.ArrayBuffer)return o=t.slice(0),n.set(t,o),o}return"function"==typeof t.then||t instanceof Error||a.WeakMap&&t instanceof a.WeakMap||a.WeakSet&&t instanceof a.WeakSet?t:i(t,a,e,n)}(e,function(){if(d)return new WeakMap;var e=n({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e}())}return E.default=E,E.strict=function(e,t){return E(e,{isStrict:!0,realm:t?t.realm:void 0})},E},e.exports=n()}).call(this,n("yLpj"))},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=(n("pxef"),function(e){var t=e.children;return a.a.createElement("main",{className:"layout"},t)}),o=function(e){var t=e.backgroundImage,n=e.height,r=e.width;return a.a.createElement("div",{className:"background-wrapper",style:{position:"absolute",top:0,width:r,zIndex:-1}},a.a.createElement("div",{style:{backgroundImage:t,height:n,width:r,transform:"translate(30px, -115px) rotate(-22deg)"}}),a.a.createElement("div",{style:{backgroundImage:t,height:n,width:r,transform:"translate(30px, 440px) rotate(14deg)"}}),a.a.createElement("div",{style:{backgroundImage:t,height:n,width:r,transform:"translate(0px, 950px) rotate(-32deg)"}}))},u=n("89ui"),c=function(e){var t=e.content,n=e.className;return a.a.createElement("div",{className:n},t&&Object(u.renderRichText)(t))},l=n("9eSz"),s=n.n(l),f=(n("LOBU"),function(e){var t=e.align,n=e.content;return console.log(n.heading1),a.a.createElement("div",{className:"image-block-wrapper","img-align":t},a.a.createElement(s.a,{className:"image",fluid:n.image1.fluid,loading:"lazy",alt:"content"}),a.a.createElement("div",{className:"text"},a.a.createElement("div",{className:"text__wrapper"},a.a.createElement(c,{content:n.heading1}),n.heading2?a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{className:"image-icon",src:n.image2.file.url+"?w=40",alt:"heading icon"})," ",a.a.createElement(c,{content:n.heading2,className:"heading2 inline-block"})):a.a.createElement(a.a.Fragment,null),a.a.createElement(c,{content:n.description}),n.button?a.a.createElement("button",{className:"button"},n.button):a.a.createElement(a.a.Fragment,null))))}),d=(n("CcKz"),function(e){var t=e.heading,n=e.services;return a.a.createElement("div",{className:"expectations"},a.a.createElement("div",{className:"heading text-center"},t),a.a.createElement("div",{className:"services"},n.map((function(e,t){return a.a.createElement("div",{className:"service",key:t},a.a.createElement(s.a,{className:"image",fluid:e.image.fluid,loading:"lazy",alt:"content"}),a.a.createElement("div",{className:"title"},e.title),a.a.createElement(c,{content:e.description}))}))))});n("PGGC"),t.default=function(e){var t=e.data,n=t.allContentfulFeaturePage.nodes,r=t.allContentfulFeaturePageExpectations.nodes;return console.log(t),a.a.createElement(i,null,a.a.createElement(o,{backgroundImage:"radial-gradient(circle at top left, #ffffff 0%, #eaf1f9 63%, #d9e2ed 96%)",height:"100vh",width:"100%"}),a.a.createElement("h1",null,"   Feature Page"),a.a.createElement(f,{align:"right",content:n[0]}),a.a.createElement("div",{className:"spacer"}),a.a.createElement(f,{content:n[1]}),a.a.createElement("div",{className:"spacer"}),a.a.createElement(f,{align:"right",content:n[2]}),a.a.createElement("div",{className:"spacer"}),a.a.createElement(d,{heading:"What can you expect from us",services:r}))}},R8uD:function(e,t,n){"use strict";(function(e){n("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r,o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var c,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var a=function(e){return e&&e.Math==Math&&e},i=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof n&&n)||Function("return this")(),o=function(e){try{return!!e()}catch(t){return!0}},c=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,f={f:s&&!l.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:l},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,m="".split,g=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?m.call(e,""):Object(e)}:Object,h=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},E=function(e,t){if(!y(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!y(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,b=function(e,t){return v.call(e,t)},S=i.document,O=y(S)&&y(S.createElement),w=function(e){return O?S.createElement(e):{}},T=!c&&!o((function(){return 7!=Object.defineProperty(w("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,_={f:c?I:function(e,t){if(e=h(e),t=E(t,!0),T)try{return I(e,t)}catch(n){}if(b(e,t))return d(!f.f.call(e,t),e[t])}},N=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,R={f:c?L:function(e,t,n){if(N(e),t=E(t,!0),N(n),T)try{return L(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},A=c?function(e,t,n){return R.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{A(i,e,t)}catch(n){i[e]=t}return t},D=i["__core-js_shared__"]||j("__core-js_shared__",{}),P=Function.toString;"function"!=typeof D.inspectSource&&(D.inspectSource=function(e){return P.call(e)});var x,k,C,M=D.inspectSource,H=i.WeakMap,B="function"==typeof H&&/native code/.test(M(H)),G=r((function(e){(e.exports=function(e,t){return D[e]||(D[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),z=0,V=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++z+V).toString(36)},W=G("keys"),Y=function(e){return W[e]||(W[e]=U(e))},F={},K=i.WeakMap;if(B){var q=new K,Q=q.get,J=q.has,X=q.set;x=function(e,t){return X.call(q,e,t),t},k=function(e){return Q.call(q,e)||{}},C=function(e){return J.call(q,e)}}else{var Z=Y("state");F[Z]=!0,x=function(e,t){return A(e,Z,t),t},k=function(e){return b(e,Z)?e[Z]:{}},C=function(e){return b(e,Z)}}var $={set:x,get:k,has:C,enforce:function(e){return C(e)?k(e):x(e,{})},getterFor:function(e){return function(t){var n;if(!y(t)||(n=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=r((function(e){var t=$.get,n=$.enforce,r=String(String).split("String");(e.exports=function(e,t,a,o){var u=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof a&&("string"!=typeof t||b(a,"name")||A(a,"name",t),n(a).source=r.join("string"==typeof t?t:"")),e!==i?(u?!l&&e[t]&&(c=!0):delete e[t],c?e[t]=a:A(e,t,a)):c?e[t]=a:j(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||M(this)}))})),te=i,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(te[e])||ne(i[e]):te[e]&&te[e][t]||i[e]&&i[e][t]},ae=Math.ceil,ie=Math.floor,oe=function(e){return isNaN(e=+e)?0:(e>0?ie:ae)(e)},ue=Math.min,ce=Math.max,le=Math.min,se=function(e){return function(t,n,r){var a,i,o=h(t),u=(a=o.length)>0?ue(oe(a),9007199254740991):0,c=function(e,t){var n=oe(e);return n<0?ce(n+t,0):le(n,t)}(r,u);if(e&&n!=n){for(;u>c;)if((i=o[c++])!=i)return!0}else for(;u>c;c++)if((e||c in o)&&o[c]===n)return e||c||0;return!e&&-1}},fe={includes:se(!0),indexOf:se(!1)},de=fe.indexOf,pe=function(e,t){var n,r=h(e),a=0,i=[];for(n in r)!b(F,n)&&b(r,n)&&i.push(n);for(;t.length>a;)b(r,n=t[a++])&&(~de(i,n)||i.push(n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=me.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return pe(e,ge)}},ye={f:Object.getOwnPropertySymbols},Ee=re("Reflect","ownKeys")||function(e){var t=he.f(N(e)),n=ye.f;return n?t.concat(n(e)):t},ve=function(e,t){for(var n=Ee(t),r=R.f,a=_.f,i=0;i<n.length;i++){var o=n[i];b(e,o)||r(e,o,a(t,o))}},be=/#|\.prototype\./,Se=function(e,t){var n=we[Oe(e)];return n==Ie||n!=Te&&("function"==typeof t?o(t):!!t)},Oe=Se.normalize=function(e){return String(e).replace(be,".").toLowerCase()},we=Se.data={},Te=Se.NATIVE="N",Ie=Se.POLYFILL="P",_e=Se,Ne=_.f,Le=function(e,t){var n,r,a,o,u,c=e.target,l=e.global,s=e.stat;if(n=l?i:s?i[c]||j(c,{}):(i[c]||{}).prototype)for(r in t){if(o=t[r],a=e.noTargetGet?(u=Ne(n,r))&&u.value:n[r],!_e(l?r:c+(s?".":"#")+r,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ve(o,a)}(e.sham||a&&a.sham)&&A(o,"sham",!0),ee(n,r,o,e)}},Re=Object.keys||function(e){return pe(e,me)},Ae=f.f,je=function(e){return function(t){for(var n,r=h(t),a=Re(r),i=a.length,o=0,u=[];i>o;)n=a[o++],c&&!Ae.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},De={entries:je(!0),values:je(!1)}.values;Le({target:"Object",stat:!0},{values:function(e){return De(e)}});te.Object.values;var Pe,xe=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),ke=xe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=G("wks"),Me=i.Symbol,He=ke?Me:Me&&Me.withoutSetter||U,Be=c?Object.defineProperties:function(e,t){N(e);for(var n,r=Re(t),a=r.length,i=0;a>i;)R.f(e,n=r[i++],t[n]);return e},Ge=re("document","documentElement"),ze=Y("IE_PROTO"),Ve=function(){},Ue=function(e){return"<script>"+e+"<\/script>"},We=function(){try{Pe=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;We=Pe?function(e){e.write(Ue("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Pe):((t=w("iframe")).style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ue("document.F=Object")),e.close(),e.F);for(var n=me.length;n--;)delete We.prototype[me[n]];return We()};F[ze]=!0;var Ye,Fe=Object.create||function(e,t){var n;return null!==e?(Ve.prototype=N(e),n=new Ve,Ve.prototype=null,n[ze]=e):n=We(),void 0===t?n:Be(n,t)},Ke=(b(Ce,Ye="unscopables")||(xe&&b(Me,Ye)?Ce[Ye]=Me[Ye]:Ce[Ye]=He("Symbol."+Ye)),Ce[Ye]),qe=Array.prototype;null==qe[Ke]&&R.f(qe,Ke,{configurable:!0,value:Fe(null)});var Qe,Je=Object.defineProperty,Xe={},Ze=function(e){throw e},$e=fe.includes;Le({target:"Array",proto:!0,forced:!function(e,t){if(b(Xe,e))return Xe[e];t||(t={});var n=[][e],r=!!b(t,"ACCESSORS")&&t.ACCESSORS,a=b(t,0)?t[0]:Ze,i=b(t,1)?t[1]:void 0;return Xe[e]=!!n&&!o((function(){if(r&&!c)return!0;var e={length:-1};r?Je(e,1,{enumerable:!0,get:Ze}):e[1]=1,n.call(e,a,i)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return $e(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",qe[Ke][Qe]=!0;var et,tt,nt,rt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}},at=Function.call;et="includes",rt(at,i["Array"].prototype[et],tt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(nt||(nt={}));var it,ot=nt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(it||(it={}));var ut,ct=it,lt=[ot.PARAGRAPH,ot.HEADING_1,ot.HEADING_2,ot.HEADING_3,ot.HEADING_4,ot.HEADING_5,ot.HEADING_6,ot.OL_LIST,ot.UL_LIST,ot.HR,ot.QUOTE,ot.EMBEDDED_ENTRY,ot.EMBEDDED_ASSET],st=[ot.HR,ot.EMBEDDED_ENTRY,ot.EMBEDDED_ASSET],ft=((ut={})[ot.OL_LIST]=[ot.LIST_ITEM],ut[ot.UL_LIST]=[ot.LIST_ITEM],ut[ot.LIST_ITEM]=lt.slice(),ut[ot.QUOTE]=[ot.PARAGRAPH],ut),dt={nodeType:ot.DOCUMENT,data:{},content:[{nodeType:ot.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var pt=Object.freeze({isInline:function(e){return Object.values(ct).includes(e.nodeType)},isBlock:function(e){return Object.values(ot).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=ot,t.CONTAINERS=ft,t.EMPTY_DOCUMENT=dt,t.INLINES=ct,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=lt,t.VOID_BLOCKS=st,t.helpers=pt}));(c=l)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var s,f,d=l.BLOCKS,p=(l.CONTAINERS,l.EMPTY_DOCUMENT,l.INLINES),m=l.MARKS,g=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function h(e,t){return e.map((function(e,n){return r=y(e,t),i=n,a.isValidElement(r)&&null===r.key?a.cloneElement(r,{key:i}):r;var r,i}))}function y(e,t){var n=t.renderNode,r=t.renderMark,a=t.renderText;if(g.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),a?a(e.value):e.value);var o=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,o):i.createElement(i.Fragment,null,o)}var E=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},s[d.HR]=function(){return i.createElement("hr",null)},s[p.ASSET_HYPERLINK]=function(e){return b(p.ASSET_HYPERLINK,e)},s[p.ENTRY_HYPERLINK]=function(e){return b(p.ENTRY_HYPERLINK,e)},s[p.EMBEDDED_ENTRY]=function(e){return b(p.EMBEDDED_ENTRY,e)},s[p.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},s),v=((f={})[m.BOLD]=function(e){return i.createElement("b",null,e)},f[m.ITALIC]=function(e){return i.createElement("i",null,e)},f[m.UNDERLINE]=function(e){return i.createElement("u",null,e)},f[m.CODE]=function(e){return i.createElement("code",null,e)},f);function b(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?y(e,{renderNode:o({},E,t.renderNode),renderMark:o({},v,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},"d+NK":function(e,t,n){"use strict";n.r(t);n("E9XD");var r=n("Q1PT"),a=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u={},c=function(e){return e&&e.sys&&"Link"===e.sys.type},l=function(e){return e.type+"!"+e.id},s=function e(t,n,r,a){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":i(t))){for(var o in t)t.hasOwnProperty(o)&&(t[o]=e(t[o],n,r,a));a&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==u}));for(var t in e)e[t]===u&&delete e[t];return e}(t))}return t},f=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,a=n.id,i=l({type:r,id:a});return e.get(i)||u}(e,t);return r===u?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=a()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(o(t),o(e.includes[n]))}),[]),i=[].concat(o(n.items),o(r)),u=new Map(i.map((function(e){return[l(e.sys),e]})));return i.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,s(n,c,(function(e){return f(u,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},pxef:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-affbd2a0975800632572.js.map