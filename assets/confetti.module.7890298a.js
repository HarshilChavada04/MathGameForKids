import{A as Je,r as Q,v as pe,w as X,f as B,Z as Xe,u as de,i as Ge,x as be,_ as et,$ as tt,a0 as Le,V as at,n as se,a1 as nt,a2 as rt,l as O,X as ce,W as lt,a3 as ot,a4 as it,j as ut,S as Be}from"./index.66a2f53f.js";import{a as qe,b as st}from"./QBtn.000ce7e1.js";import{a as dt,u as ct}from"./QPage.e7122409.js";import{h as fe}from"./render.fb9d86c6.js";let Me,ve=0;const H=new Array(256);for(let e=0;e<256;e++)H[e]=(e+256).toString(16).substring(1);const ft=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return r=>{const u=new Uint8Array(r);return e.getRandomValues(u),u}}return r=>{const u=[];for(let c=r;c>0;c--)u.push(Math.floor(Math.random()*256));return u}})(),Te=4096;function Ce(){(Me===void 0||ve+16>Te)&&(ve=0,Me=ft(Te));const e=Array.prototype.slice.call(Me,ve,ve+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,H[e[0]]+H[e[1]]+H[e[2]]+H[e[3]]+"-"+H[e[4]]+H[e[5]]+"-"+H[e[6]]+H[e[7]]+"-"+H[e[8]]+H[e[9]]+"-"+H[e[10]]+H[e[11]]+H[e[12]]+H[e[13]]+H[e[14]]+H[e[15]]}function vt(e){return e==null?null:e}function Ve(e,r){return e==null?r===!0?`f_${Ce()}`:null:e}function ht({getValue:e,required:r=!0}={}){if(Je.value===!0){const u=e!==void 0?Q(vt(e())):Q(null);return r===!0&&u.value===null&&pe(()=>{u.value=`f_${Ce()}`}),e!==void 0&&X(e,c=>{u.value=Ve(c,r)}),u}return e!==void 0?B(()=>Ve(e(),r)):Q(`f_${Ce()}`)}const Ie=/^on[A-Z]/;function mt(){const{attrs:e,vnode:r}=de(),u={listeners:Q({}),attributes:Q({})};function c(){const p={},b={};for(const y in e)y!=="class"&&y!=="style"&&Ie.test(y)===!1&&(p[y]=e[y]);for(const y in r.props)Ie.test(y)===!0&&(b[y]=r.props[y]);u.attributes.value=p,u.listeners.value=b}return Xe(c),c(),u}function gt({validate:e,resetValidation:r,requiresQForm:u}){const c=Ge(et,!1);if(c!==!1){const{props:p,proxy:b}=de();Object.assign(b,{validate:e,resetValidation:r}),X(()=>p.disable,y=>{y===!0?(typeof r=="function"&&r(),c.unbindComponent(b)):c.bindComponent(b)}),pe(()=>{p.disable!==!0&&c.bindComponent(b)}),be(()=>{p.disable!==!0&&c.unbindComponent(b)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const _e=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Oe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,he=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,me=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,we={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>_e.test(e),hexaColor:e=>Pe.test(e),hexOrHexaColor:e=>Oe.test(e),rgbColor:e=>he.test(e),rgbaColor:e=>me.test(e),rgbOrRgbaColor:e=>he.test(e)||me.test(e),hexOrRgbColor:e=>_e.test(e)||he.test(e),hexaOrRgbaColor:e=>Pe.test(e)||me.test(e),anyColor:e=>Oe.test(e)||he.test(e)||me.test(e)},pt=[!0,!1,"ondemand"],bt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>pt.includes(e)}};function yt(e,r){const{props:u,proxy:c}=de(),p=Q(!1),b=Q(null),y=Q(!1);gt({validate:Y,resetValidation:W});let q=0,j;const T=B(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),A=B(()=>u.disable!==!0&&T.value===!0&&r.value===!1),x=B(()=>u.error===!0||p.value===!0),oe=B(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:b.value);X(()=>u.modelValue,()=>{y.value=!0,A.value===!0&&u.lazyRules===!1&&k()});function Z(){u.lazyRules!=="ondemand"&&A.value===!0&&y.value===!0&&k()}X(()=>u.reactiveRules,G=>{G===!0?j===void 0&&(j=X(()=>u.rules,Z,{immediate:!0,deep:!0})):j!==void 0&&(j(),j=void 0)},{immediate:!0}),X(()=>u.lazyRules,Z),X(e,G=>{G===!0?y.value=!0:A.value===!0&&u.lazyRules!=="ondemand"&&k()});function W(){q++,r.value=!1,y.value=!1,p.value=!1,b.value=null,k.cancel()}function Y(G=u.modelValue){if(u.disable===!0||T.value===!1)return!0;const N=++q,ae=r.value!==!0?()=>{y.value=!0}:()=>{},ee=(I,V)=>{I===!0&&ae(),p.value=I,b.value=V||null,r.value=!1},J=[];for(let I=0;I<u.rules.length;I++){const V=u.rules[I];let z;if(typeof V=="function"?z=V(G,we):typeof V=="string"&&we[V]!==void 0&&(z=we[V](G)),z===!1||typeof z=="string")return ee(!0,z),!1;z!==!0&&z!==void 0&&J.push(z)}return J.length===0?(ee(!1),!0):(r.value=!0,Promise.all(J).then(I=>{if(I===void 0||Array.isArray(I)===!1||I.length===0)return N===q&&ee(!1),!0;const V=I.find(z=>z===!1||typeof z=="string");return N===q&&ee(V!==void 0,V),V===void 0},I=>(N===q&&(console.error(I),ee(!0)),!1)))}const k=tt(Y,0);return be(()=>{j!==void 0&&j(),k.cancel()}),Object.assign(c,{resetValidation:W,validate:Y}),Le(c,"hasError",()=>x.value),{isDirtyModel:y,hasRules:T,hasError:x,errorMessage:oe,validate:Y,resetValidation:W}}let xe=[],Mt=[];function De(e){Mt.length===0?e():xe.push(e)}function wt(e){xe=xe.filter(r=>r!==e)}function ke(e){return e!=null&&(""+e).length!==0}const Ct={...ct,...bt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},xt={...Ct,maxlength:[Number,String]},kt=["update:modelValue","clear","focus","blur"];function St({requiredForAttr:e=!0,tagProp:r,changeEvent:u=!1}={}){const{props:c,proxy:p}=de(),b=dt(c,p.$q),y=ht({required:e,getValue:()=>c.for});return{requiredForAttr:e,changeEvent:u,tag:r===!0?B(()=>c.tag):{value:"label"},isDark:b,editable:B(()=>c.disable!==!0&&c.readonly!==!0),innerLoading:Q(!1),focused:Q(!1),hasPopupOpen:!1,splitAttrs:mt(),targetUid:y,rootRef:Q(null),targetRef:Q(null),controlRef:Q(null)}}function Rt(e){const{props:r,emit:u,slots:c,attrs:p,proxy:b}=de(),{$q:y}=b;let q=null;e.hasValue===void 0&&(e.hasValue=B(()=>ke(r.modelValue))),e.emitValue===void 0&&(e.emitValue=d=>{u("update:modelValue",d)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:l}),Object.assign(e,{clearValue:f,onControlFocusin:o,onControlFocusout:l,focus:V}),e.computedCounter===void 0&&(e.computedCounter=B(()=>{if(r.counter!==!1){const d=typeof r.modelValue=="string"||typeof r.modelValue=="number"?(""+r.modelValue).length:Array.isArray(r.modelValue)===!0?r.modelValue.length:0,C=r.maxlength!==void 0?r.maxlength:r.maxValues;return d+(C!==void 0?" / "+C:"")}}));const{isDirtyModel:j,hasRules:T,hasError:A,errorMessage:x,resetValidation:oe}=yt(e.focused,e.innerLoading),Z=e.floatingLabel!==void 0?B(()=>r.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):B(()=>r.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),W=B(()=>r.bottomSlots===!0||r.hint!==void 0||T.value===!0||r.counter===!0||r.error!==null),Y=B(()=>r.filled===!0?"filled":r.outlined===!0?"outlined":r.borderless===!0?"borderless":r.standout?"standout":"standard"),k=B(()=>`q-field row no-wrap items-start q-field--${Y.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(r.rounded===!0?" q-field--rounded":"")+(r.square===!0?" q-field--square":"")+(Z.value===!0?" q-field--float":"")+(N.value===!0?" q-field--labeled":"")+(r.dense===!0?" q-field--dense":"")+(r.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(A.value===!0?" q-field--error":"")+(A.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(r.hideBottomSpace!==!0&&W.value===!0?" q-field--with-bottom":"")+(r.disable===!0?" q-field--disabled":r.readonly===!0?" q-field--readonly":"")),G=B(()=>"q-field__control relative-position row no-wrap"+(r.bgColor!==void 0?` bg-${r.bgColor}`:"")+(A.value===!0?" text-negative":typeof r.standout=="string"&&r.standout.length!==0&&e.focused.value===!0?` ${r.standout}`:r.color!==void 0?` text-${r.color}`:"")),N=B(()=>r.labelSlot===!0||r.label!==void 0),ae=B(()=>"q-field__label no-pointer-events absolute ellipsis"+(r.labelColor!==void 0&&A.value!==!0?` text-${r.labelColor}`:"")),ee=B(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:Z.value,modelValue:r.modelValue,emitValue:e.emitValue})),J=B(()=>{const d={};return e.targetUid.value&&(d.for=e.targetUid.value),r.disable===!0&&(d["aria-disabled"]="true"),d});function I(){const d=document.activeElement;let C=e.targetRef!==void 0&&e.targetRef.value;C&&(d===null||d.id!==e.targetUid.value)&&(C.hasAttribute("tabindex")===!0||(C=C.querySelector("[tabindex]")),C&&C!==d&&C.focus({preventScroll:!0}))}function V(){De(I)}function z(){wt(I);const d=document.activeElement;d!==null&&e.rootRef.value.contains(d)&&d.blur()}function o(d){q!==null&&(clearTimeout(q),q=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",d))}function l(d,C){q!==null&&clearTimeout(q),q=setTimeout(()=>{q=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",d)),C!==void 0&&C())})}function f(d){at(d),y.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),r.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),e.changeEvent===!0&&u("change",null),u("clear",r.modelValue),se(()=>{const C=j.value;oe(),j.value=C})}function i(d){[13,32].includes(d.keyCode)&&f(d)}function S(){const d=[];return c.prepend!==void 0&&d.push(O("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ce},c.prepend())),d.push(O("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},M())),A.value===!0&&r.noErrorIcon===!1&&d.push(w("error",[O(qe,{name:y.iconSet.field.error,color:"negative"})])),r.loading===!0||e.innerLoading.value===!0?d.push(w("inner-loading-append",c.loading!==void 0?c.loading():[O(st,{color:r.color})])):r.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&d.push(w("inner-clearable-append",[O(qe,{class:"q-field__focusable-action",name:r.clearIcon||y.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":y.lang.label.clear,onKeyup:i,onClick:f})])),c.append!==void 0&&d.push(O("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ce},c.append())),e.getInnerAppend!==void 0&&d.push(w("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&d.push(e.getControlChild()),d}function M(){const d=[];return r.prefix!==void 0&&r.prefix!==null&&d.push(O("div",{class:"q-field__prefix no-pointer-events row items-center"},r.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&d.push(e.getShadowControl()),e.getControl!==void 0?d.push(e.getControl()):c.rawControl!==void 0?d.push(c.rawControl()):c.control!==void 0&&d.push(O("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":r.autofocus===!0||void 0},c.control(ee.value))),N.value===!0&&d.push(O("div",{class:ae.value},fe(c.label,r.label))),r.suffix!==void 0&&r.suffix!==null&&d.push(O("div",{class:"q-field__suffix no-pointer-events row items-center"},r.suffix)),d.concat(fe(c.default))}function _(){let d,C;A.value===!0?x.value!==null?(d=[O("div",{role:"alert"},x.value)],C=`q--slot-error-${x.value}`):(d=fe(c.error),C="q--slot-error"):(r.hideHint!==!0||e.focused.value===!0)&&(r.hint!==void 0?(d=[O("div",r.hint)],C=`q--slot-hint-${r.hint}`):(d=fe(c.hint),C="q--slot-hint"));const a=r.counter===!0||c.counter!==void 0;if(r.hideBottomSpace===!0&&a===!1&&d===void 0)return;const t=O("div",{key:C,class:"q-field__messages col"},d);return O("div",{class:"q-field__bottom row items-start q-field__bottom--"+(r.hideBottomSpace!==!0?"animated":"stale"),onClick:ce},[r.hideBottomSpace===!0?t:O(lt,{name:"q-transition--field-message"},()=>t),a===!0?O("div",{class:"q-field__counter"},c.counter!==void 0?c.counter():e.computedCounter.value):null])}function w(d,C){return C===null?null:O("div",{key:d,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},C)}let E=!1;return nt(()=>{E=!0}),rt(()=>{E===!0&&r.autofocus===!0&&b.focus()}),r.autofocus===!0&&pe(()=>{b.focus()}),be(()=>{q!==null&&clearTimeout(q)}),Object.assign(b,{focus:V,blur:z}),function(){const C=e.getControl===void 0&&c.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":r.autofocus===!0||void 0,...J.value}:J.value;return O(e.tag.value,{ref:e.rootRef,class:[k.value,p.class],style:p.style,...C},[c.before!==void 0?O("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ce},c.before()):null,O("div",{class:"q-field__inner relative-position col self-stretch"},[O("div",{ref:e.controlRef,class:G.value,tabindex:-1,...e.controlEvents},S()),W.value===!0?_():null]),c.after!==void 0?O("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ce},c.after()):null])}}const $e={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ge={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},je=Object.keys(ge);je.forEach(e=>{ge[e].regex=new RegExp(ge[e].pattern)});const Ft=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+je.join("")+"])|(.)","g"),Ne=/[.*+?^${}()|[\]\\]/g,U=String.fromCharCode(1),Et={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function At(e,r,u,c){let p,b,y,q,j,T;const A=Q(null),x=Q(Z());function oe(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}X(()=>e.type+e.autogrow,Y),X(()=>e.mask,o=>{if(o!==void 0)k(x.value,!0);else{const l=V(x.value);Y(),e.modelValue!==l&&r("update:modelValue",l)}}),X(()=>e.fillMask+e.reverseFillMask,()=>{A.value===!0&&k(x.value,!0)}),X(()=>e.unmaskedValue,()=>{A.value===!0&&k(x.value)});function Z(){if(Y(),A.value===!0){const o=J(V(e.modelValue));return e.fillMask!==!1?z(o):o}return e.modelValue}function W(o){if(o<p.length)return p.slice(-o);let l="",f=p;const i=f.indexOf(U);if(i!==-1){for(let S=o-f.length;S>0;S--)l+=U;f=f.slice(0,i)+l+f.slice(i)}return f}function Y(){if(A.value=e.mask!==void 0&&e.mask.length!==0&&oe(),A.value===!1){q=void 0,p="",b="";return}const o=$e[e.mask]===void 0?e.mask:$e[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",f=l.replace(Ne,"\\$&"),i=[],S=[],M=[];let _=e.reverseFillMask===!0,w="",E="";o.replace(Ft,(t,n,s,g,m)=>{if(g!==void 0){const h=ge[g];M.push(h),E=h.negate,_===!0&&(S.push("(?:"+E+"+)?("+h.pattern+"+)?(?:"+E+"+)?("+h.pattern+"+)?"),_=!1),S.push("(?:"+E+"+)?("+h.pattern+")?")}else if(s!==void 0)w="\\"+(s==="\\"?"":s),M.push(s),i.push("([^"+w+"]+)?"+w+"?");else{const h=n!==void 0?n:m;w=h==="\\"?"\\\\\\\\":h.replace(Ne,"\\\\$&"),M.push(h),i.push("([^"+w+"]+)?"+w+"?")}});const d=new RegExp("^"+i.join("")+"("+(w===""?".":"[^"+w+"]")+"+)?"+(w===""?"":"["+w+"]*")+"$"),C=S.length-1,a=S.map((t,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+t):n===C?new RegExp("^"+t+"("+(E===""?".":E)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+t));y=M,q=t=>{const n=d.exec(e.reverseFillMask===!0?t:t.slice(0,M.length+1));n!==null&&(t=n.slice(1).join(""));const s=[],g=a.length;for(let m=0,h=t;m<g;m++){const v=a[m].exec(h);if(v===null)break;h=h.slice(v.shift().length),s.push(...v)}return s.length!==0?s.join(""):t},p=M.map(t=>typeof t=="string"?t:U).join(""),b=p.split(U).join(l)}function k(o,l,f){const i=c.value,S=i.selectionEnd,M=i.value.length-S,_=V(o);l===!0&&Y();const w=J(_),E=e.fillMask!==!1?z(w):w,d=x.value!==E;i.value!==E&&(i.value=E),d===!0&&(x.value=E),document.activeElement===i&&se(()=>{if(E===b){const a=e.reverseFillMask===!0?b.length:0;i.setSelectionRange(a,a,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const a=i.selectionEnd;let t=S-1;for(let n=j;n<=t&&n<a;n++)p[n]!==U&&t++;N.right(i,t);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)!==-1){const a=e.reverseFillMask===!0?S===0?E.length>w.length?1:0:Math.max(0,E.length-(E===b?0:Math.min(w.length,M)+1))+1:S;i.setSelectionRange(a,a,"forward");return}if(e.reverseFillMask===!0)if(d===!0){const a=Math.max(0,E.length-(E===b?0:Math.min(w.length,M+1)));a===1&&S===1?i.setSelectionRange(a,a,"forward"):N.rightReverse(i,a)}else{const a=E.length-M;i.setSelectionRange(a,a,"backward")}else if(d===!0){const a=Math.max(0,p.indexOf(U),Math.min(w.length,S)-1);N.right(i,a)}else{const a=S-1;N.right(i,a)}});const C=e.unmaskedValue===!0?V(E):E;String(e.modelValue)!==C&&(e.modelValue!==null||C!=="")&&u(C,!0)}function G(o,l,f){const i=J(V(o.value));l=Math.max(0,p.indexOf(U),Math.min(i.length,l)),j=l,o.setSelectionRange(l,f,"forward")}const N={left(o,l){const f=p.slice(l-1).indexOf(U)===-1;let i=Math.max(0,l-1);for(;i>=0;i--)if(p[i]===U){l=i,f===!0&&l++;break}if(i<0&&p[l]!==void 0&&p[l]!==U)return N.right(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},right(o,l){const f=o.value.length;let i=Math.min(f,l+1);for(;i<=f;i++)if(p[i]===U){l=i;break}else p[i-1]===U&&(l=i);if(i>f&&p[l-1]!==void 0&&p[l-1]!==U)return N.left(o,f);o.setSelectionRange(l,l,"forward")},leftReverse(o,l){const f=W(o.value.length);let i=Math.max(0,l-1);for(;i>=0;i--)if(f[i-1]===U){l=i;break}else if(f[i]===U&&(l=i,i===0))break;if(i<0&&f[l]!==void 0&&f[l]!==U)return N.rightReverse(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},rightReverse(o,l){const f=o.value.length,i=W(f),S=i.slice(0,l+1).indexOf(U)===-1;let M=Math.min(f,l+1);for(;M<=f;M++)if(i[M-1]===U){l=M,l>0&&S===!0&&l--;break}if(M>f&&i[l-1]!==void 0&&i[l-1]!==U)return N.leftReverse(o,f);o.setSelectionRange(l,l,"forward")}};function ae(o){r("click",o),T=void 0}function ee(o){if(r("keydown",o),ot(o)===!0||o.altKey===!0)return;const l=c.value,f=l.selectionStart,i=l.selectionEnd;if(o.shiftKey||(T=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&T===void 0&&(T=l.selectionDirection==="forward"?f:i);const S=N[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),S(l,T===f?i:f),o.shiftKey){const M=l.selectionStart;l.setSelectionRange(Math.min(T,M),Math.max(T,M),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&f===i?(N.left(l,f),l.setSelectionRange(l.selectionStart,i,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&f===i&&(N.rightReverse(l,i),l.setSelectionRange(f,l.selectionEnd,"forward"))}function J(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return I(o);const l=y;let f=0,i="";for(let S=0;S<l.length;S++){const M=o[f],_=l[S];if(typeof _=="string")i+=_,M===_&&f++;else if(M!==void 0&&_.regex.test(M))i+=_.transform!==void 0?_.transform(M):M,f++;else return i}return i}function I(o){const l=y,f=p.indexOf(U);let i=o.length-1,S="";for(let M=l.length-1;M>=0&&i!==-1;M--){const _=l[M];let w=o[i];if(typeof _=="string")S=_+S,w===_&&i--;else if(w!==void 0&&_.regex.test(w))do S=(_.transform!==void 0?_.transform(w):w)+S,i--,w=o[i];while(f===M&&w!==void 0&&_.regex.test(w));else return S}return S}function V(o){return typeof o!="string"||q===void 0?typeof o=="number"?q(""+o):o:q(o)}function z(o){return b.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?b.slice(0,-o.length)+o:o+b.slice(o.length)}return{innerValue:x,hasMask:A,moveCursorForPaste:G,updateMaskValue:k,onMaskedKeydown:ee,onMaskedClick:ae}}const Bt={name:String};function qt(e){return B(()=>e.name||e.for)}function Tt(e,r){function u(){const c=e.modelValue;try{const p="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(c)===c&&("length"in c?Array.from(c):[c]).forEach(b=>{p.items.add(b)}),{files:p.files}}catch{return{files:void 0}}}return r===!0?B(()=>{if(e.type==="file")return u()}):B(u)}const Vt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,It=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,_t=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Pt=/[a-z0-9_ -]$/i;function Ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(it.is.firefox===!0?Pt.test(u.data)===!1:Vt.test(u.data)===!0||It.test(u.data)===!0||_t.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var jt=ut({name:"QInput",inheritAttrs:!1,props:{...xt,...Et,...Bt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...kt,"paste","change","keydown","click","animationend"],setup(e,{emit:r,attrs:u}){const{proxy:c}=de(),{$q:p}=c,b={};let y=NaN,q,j,T=null,A;const x=Q(null),oe=qt(e),{innerValue:Z,hasMask:W,moveCursorForPaste:Y,updateMaskValue:k,onMaskedKeydown:G,onMaskedClick:N}=At(e,r,w,x),ae=Tt(e,!0),ee=B(()=>ke(Z.value)),J=Ot(M),I=St({changeEvent:!0}),V=B(()=>e.type==="textarea"||e.autogrow===!0),z=B(()=>V.value===!0||["text","search","url","tel","password"].includes(e.type)),o=B(()=>{const n={...I.splitAttrs.listeners.value,onInput:M,onPaste:S,onChange:d,onBlur:C,onFocus:Be};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=J,W.value===!0&&(n.onKeydown=G,n.onClick=N),e.autogrow===!0&&(n.onAnimationend=_),n}),l=B(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:oe.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return V.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});X(()=>e.type,()=>{x.value&&(x.value.value=e.modelValue)}),X(()=>e.modelValue,n=>{if(W.value===!0){if(j===!0&&(j=!1,String(n)===y))return;k(n)}else Z.value!==n&&(Z.value=n,e.type==="number"&&b.hasOwnProperty("value")===!0&&(q===!0?q=!1:delete b.value));e.autogrow===!0&&se(E)}),X(()=>e.autogrow,n=>{n===!0?se(E):x.value!==null&&u.rows>0&&(x.value.style.height="auto")}),X(()=>e.dense,()=>{e.autogrow===!0&&se(E)});function f(){De(()=>{const n=document.activeElement;x.value!==null&&x.value!==n&&(n===null||n.id!==I.targetUid.value)&&x.value.focus({preventScroll:!0})})}function i(){x.value!==null&&x.value.select()}function S(n){if(W.value===!0&&e.reverseFillMask!==!0){const s=n.target;Y(s,s.selectionStart,s.selectionEnd)}r("paste",n)}function M(n){if(!n||!n.target)return;if(e.type==="file"){r("update:modelValue",n.target.files);return}const s=n.target.value;if(n.target.qComposing===!0){b.value=s;return}if(W.value===!0)k(s,!1,n.inputType);else if(w(s),z.value===!0&&n.target===document.activeElement){const{selectionStart:g,selectionEnd:m}=n.target;g!==void 0&&m!==void 0&&se(()=>{n.target===document.activeElement&&s.indexOf(n.target.value)===0&&n.target.setSelectionRange(g,m)})}e.autogrow===!0&&E()}function _(n){r("animationend",n),E()}function w(n,s){A=()=>{T=null,e.type!=="number"&&b.hasOwnProperty("value")===!0&&delete b.value,e.modelValue!==n&&y!==n&&(y=n,s===!0&&(j=!0),r("update:modelValue",n),se(()=>{y===n&&(y=NaN)})),A=void 0},e.type==="number"&&(q=!0,b.value=n),e.debounce!==void 0?(T!==null&&clearTimeout(T),b.value=n,T=setTimeout(A,e.debounce)):A()}function E(){requestAnimationFrame(()=>{const n=x.value;if(n!==null){const s=n.parentNode.style,{scrollTop:g}=n,{overflowY:m,maxHeight:h}=p.platform.is.firefox===!0?{}:window.getComputedStyle(n),v=m!==void 0&&m!=="scroll";v===!0&&(n.style.overflowY="hidden"),s.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",v===!0&&(n.style.overflowY=parseInt(h,10)<n.scrollHeight?"auto":"hidden"),s.marginBottom="",n.scrollTop=g}})}function d(n){J(n),T!==null&&(clearTimeout(T),T=null),A!==void 0&&A(),r("change",n.target.value)}function C(n){n!==void 0&&Be(n),T!==null&&(clearTimeout(T),T=null),A!==void 0&&A(),q=!1,j=!1,delete b.value,e.type!=="file"&&setTimeout(()=>{x.value!==null&&(x.value.value=Z.value!==void 0?Z.value:"")})}function a(){return b.hasOwnProperty("value")===!0?b.value:Z.value!==void 0?Z.value:""}be(()=>{C()}),pe(()=>{e.autogrow===!0&&E()}),Object.assign(I,{innerValue:Z,fieldClass:B(()=>`q-${V.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:B(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:x,emitValue:w,hasValue:ee,floatingLabel:B(()=>ee.value===!0&&(e.type!=="number"||isNaN(Z.value)===!1)||ke(e.displayValue)),getControl:()=>O(V.value===!0?"textarea":"input",{ref:x,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...o.value,...e.type!=="file"?{value:a()}:ae.value}),getShadowControl:()=>O("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(V.value===!0?"":" text-no-wrap")},[O("span",{class:"invisible"},a()),O("span",e.shadowText)])});const t=Rt(I);return Object.assign(c,{focus:f,select:i,getNativeElement:()=>x.value}),Le(c,"nativeEl",()=>x.value),t}}),Se={};(function e(r,u,c,p){var b=!!(r.Worker&&r.Blob&&r.Promise&&r.OffscreenCanvas&&r.OffscreenCanvasRenderingContext2D&&r.HTMLCanvasElement&&r.HTMLCanvasElement.prototype.transferControlToOffscreen&&r.URL&&r.URL.createObjectURL),y=typeof Path2D=="function"&&typeof DOMMatrix=="function",q=function(){if(!r.OffscreenCanvas)return!1;var a=new OffscreenCanvas(1,1),t=a.getContext("2d");t.fillRect(0,0,1,1);var n=a.transferToImageBitmap();try{t.createPattern(n,"no-repeat")}catch{return!1}return!0}();function j(){}function T(a){var t=u.exports.Promise,n=t!==void 0?t:r.Promise;return typeof n=="function"?new n(a):(a(j,j),null)}var A=function(a,t){return{transform:function(n){if(a)return n;if(t.has(n))return t.get(n);var s=new OffscreenCanvas(n.width,n.height),g=s.getContext("2d");return g.drawImage(n,0,0),t.set(n,s),s},clear:function(){t.clear()}}}(q,new Map),x=function(){var a=Math.floor(16.666666666666668),t,n,s={},g=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(m){var h=Math.random();return s[h]=requestAnimationFrame(function v(R){g===R||g+a-1<R?(g=R,delete s[h],m()):s[h]=requestAnimationFrame(v)}),h},n=function(m){s[m]&&cancelAnimationFrame(s[m])}):(t=function(m){return setTimeout(m,a)},n=function(m){return clearTimeout(m)}),{frame:t,cancel:n}}(),oe=function(){var a,t,n={};function s(g){function m(h,v){g.postMessage({options:h||{},callback:v})}g.init=function(v){var R=v.transferControlToOffscreen();g.postMessage({canvas:R},[R])},g.fire=function(v,R,P){if(t)return m(v,null),t;var L=Math.random().toString(36).slice(2);return t=T(function($){function D(K){K.data.callback===L&&(delete n[L],g.removeEventListener("message",D),t=null,A.clear(),P(),$())}g.addEventListener("message",D),m(v,L),n[L]=D.bind(null,{data:{callback:L}})}),t},g.reset=function(){g.postMessage({reset:!0});for(var v in n)n[v](),delete n[v]}}return function(){if(a)return a;if(!c&&b){var g=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([g])))}catch(m){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",m),null}s(a)}return a}}(),Z={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function W(a,t){return t?t(a):a}function Y(a){return a!=null}function k(a,t,n){return W(a&&Y(a[t])?a[t]:Z[t],n)}function G(a){return a<0?0:Math.floor(a)}function N(a,t){return Math.floor(Math.random()*(t-a))+a}function ae(a){return parseInt(a,16)}function ee(a){return a.map(J)}function J(a){var t=String(a).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:ae(t.substring(0,2)),g:ae(t.substring(2,4)),b:ae(t.substring(4,6))}}function I(a){var t=k(a,"origin",Object);return t.x=k(t,"x",Number),t.y=k(t,"y",Number),t}function V(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function z(a){var t=a.getBoundingClientRect();a.width=t.width,a.height=t.height}function o(a){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=a,t}function l(a,t,n,s,g,m,h,v,R){a.save(),a.translate(t,n),a.rotate(m),a.scale(s,g),a.arc(0,0,1,h,v,R),a.restore()}function f(a){var t=a.angle*(Math.PI/180),n=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function i(a,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,s=t.x+t.random*t.tiltCos,g=t.y+t.random*t.tiltSin,m=t.wobbleX+t.random*t.tiltCos,h=t.wobbleY+t.random*t.tiltSin;if(a.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",a.beginPath(),y&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))a.fill(E(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(m-s)*.1,Math.abs(h-g)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var v=Math.PI/10*t.wobble,R=Math.abs(m-s)*.1,P=Math.abs(h-g)*.1,L=t.shape.bitmap.width*t.scalar,$=t.shape.bitmap.height*t.scalar,D=new DOMMatrix([Math.cos(v)*R,Math.sin(v)*R,-Math.sin(v)*P,Math.cos(v)*P,t.x,t.y]);D.multiplySelf(new DOMMatrix(t.shape.matrix));var K=a.createPattern(A.transform(t.shape.bitmap),"no-repeat");K.setTransform(D),a.globalAlpha=1-n,a.fillStyle=K,a.fillRect(t.x-L/2,t.y-$/2,L,$),a.globalAlpha=1}else if(t.shape==="circle")a.ellipse?a.ellipse(t.x,t.y,Math.abs(m-s)*t.ovalScalar,Math.abs(h-g)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):l(a,t.x,t.y,Math.abs(m-s)*t.ovalScalar,Math.abs(h-g)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var F=Math.PI/2*3,te=4*t.scalar,ne=8*t.scalar,re=t.x,ie=t.y,ue=5,le=Math.PI/ue;ue--;)re=t.x+Math.cos(F)*ne,ie=t.y+Math.sin(F)*ne,a.lineTo(re,ie),F+=le,re=t.x+Math.cos(F)*te,ie=t.y+Math.sin(F)*te,a.lineTo(re,ie),F+=le;else a.moveTo(Math.floor(t.x),Math.floor(t.y)),a.lineTo(Math.floor(t.wobbleX),Math.floor(g)),a.lineTo(Math.floor(m),Math.floor(h)),a.lineTo(Math.floor(s),Math.floor(t.wobbleY));return a.closePath(),a.fill(),t.tick<t.totalTicks}function S(a,t,n,s,g){var m=t.slice(),h=a.getContext("2d"),v,R,P=T(function(L){function $(){v=R=null,h.clearRect(0,0,s.width,s.height),A.clear(),g(),L()}function D(){c&&!(s.width===p.width&&s.height===p.height)&&(s.width=a.width=p.width,s.height=a.height=p.height),!s.width&&!s.height&&(n(a),s.width=a.width,s.height=a.height),h.clearRect(0,0,s.width,s.height),m=m.filter(function(K){return i(h,K)}),m.length?v=x.frame(D):$()}v=x.frame(D),R=$});return{addFettis:function(L){return m=m.concat(L),P},canvas:a,promise:P,reset:function(){v&&x.cancel(v),R&&R()}}}function M(a,t){var n=!a,s=!!k(t||{},"resize"),g=!1,m=k(t,"disableForReducedMotion",Boolean),h=b&&!!k(t||{},"useWorker"),v=h?oe():null,R=n?V:z,P=a&&v?!!a.__confetti_initialized:!1,L=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,$;function D(F,te,ne){for(var re=k(F,"particleCount",G),ie=k(F,"angle",Number),ue=k(F,"spread",Number),le=k(F,"startVelocity",Number),ze=k(F,"decay",Number),Ue=k(F,"gravity",Number),Ze=k(F,"drift",Number),Re=k(F,"colors",ee),Ke=k(F,"ticks",Number),Fe=k(F,"shapes"),He=k(F,"scalar"),We=!!k(F,"flat"),Ee=I(F),Ae=re,ye=[],Qe=a.width*Ee.x,Ye=a.height*Ee.y;Ae--;)ye.push(f({x:Qe,y:Ye,angle:ie,spread:ue,startVelocity:le,color:Re[Ae%Re.length],shape:Fe[N(0,Fe.length)],ticks:Ke,decay:ze,gravity:Ue,drift:Ze,scalar:He,flat:We}));return $?$.addFettis(ye):($=S(a,ye,R,te,ne),$.promise)}function K(F){var te=m||k(F,"disableForReducedMotion",Boolean),ne=k(F,"zIndex",Number);if(te&&L)return T(function(le){le()});n&&$?a=$.canvas:n&&!a&&(a=o(ne),document.body.appendChild(a)),s&&!P&&R(a);var re={width:a.width,height:a.height};v&&!P&&v.init(a),P=!0,v&&(a.__confetti_initialized=!0);function ie(){if(v){var le={getBoundingClientRect:function(){if(!n)return a.getBoundingClientRect()}};R(le),v.postMessage({resize:{width:le.width,height:le.height}});return}re.width=re.height=null}function ue(){$=null,s&&(g=!1,r.removeEventListener("resize",ie)),n&&a&&(document.body.contains(a)&&document.body.removeChild(a),a=null,P=!1)}return s&&!g&&(g=!0,r.addEventListener("resize",ie,!1)),v?v.fire(F,re,ue):D(F,re,ue)}return K.reset=function(){v&&v.reset(),$&&$.reset()},K}var _;function w(){return _||(_=M(null,{useWorker:!0,resize:!0})),_}function E(a,t,n,s,g,m,h){var v=new Path2D(a),R=new Path2D;R.addPath(v,new DOMMatrix(t));var P=new Path2D;return P.addPath(R,new DOMMatrix([Math.cos(h)*g,Math.sin(h)*g,-Math.sin(h)*m,Math.cos(h)*m,n,s])),P}function d(a){if(!y)throw new Error("path confetti are not supported in this browser");var t,n;typeof a=="string"?t=a:(t=a.path,n=a.matrix);var s=new Path2D(t),g=document.createElement("canvas"),m=g.getContext("2d");if(!n){for(var h=1e3,v=h,R=h,P=0,L=0,$,D,K=0;K<h;K+=2)for(var F=0;F<h;F+=2)m.isPointInPath(s,K,F,"nonzero")&&(v=Math.min(v,K),R=Math.min(R,F),P=Math.max(P,K),L=Math.max(L,F));$=P-v,D=L-R;var te=10,ne=Math.min(te/$,te/D);n=[ne,0,0,ne,-Math.round($/2+v)*ne,-Math.round(D/2+R)*ne]}return{type:"path",path:t,matrix:n}}function C(a){var t,n=1,s="#000000",g='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof a=="string"?t=a:(t=a.text,n="scalar"in a?a.scalar:n,g="fontFamily"in a?a.fontFamily:g,s="color"in a?a.color:s);var m=10*n,h=""+m+"px "+g,v=new OffscreenCanvas(m,m),R=v.getContext("2d");R.font=h;var P=R.measureText(t),L=Math.ceil(P.actualBoundingBoxRight+P.actualBoundingBoxLeft),$=Math.ceil(P.actualBoundingBoxAscent+P.actualBoundingBoxDescent),D=2,K=P.actualBoundingBoxLeft+D,F=P.actualBoundingBoxAscent+D;L+=D+D,$+=D+D,v=new OffscreenCanvas(L,$),R=v.getContext("2d"),R.font=h,R.fillStyle=s,R.fillText(t,K,F);var te=1/n;return{type:"bitmap",bitmap:v.transferToImageBitmap(),matrix:[te,0,0,te,-L*te/2,-$*te/2]}}u.exports=function(){return w().apply(this,arguments)},u.exports.reset=function(){w().reset()},u.exports.create=M,u.exports.shapeFromPath=d,u.exports.shapeFromText=C})(function(){return typeof window!="undefined"?window:typeof self!="undefined"?self:this||{}}(),Se,!1);var zt=Se.exports;Se.exports.create;export{jt as Q,zt as c};