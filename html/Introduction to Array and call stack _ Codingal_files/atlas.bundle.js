(function(){"use strict";var fi=typeof document<"u"?document.currentScript:null,pe=(e=>(e.FULL_SCREEN="fullScreen",e.BOTTOM_RIGHT="bottomRight",e.BOTTOM_LEFT="bottomLeft",e.TOP_RIGHT="topRight",e.TOP_LEFT="topLeft",e))(pe||{}),Yn=(e=>(e.NO_LABEL="noLabel",e.WITH_LABEL="withLabel",e))(Yn||{}),di=(e=>(e.WEEKDAYS="weekdays",e.WEEKENDS="Weekends",e.ALL="all",e))(di||{}),va=(e=>(e.RECORD_ALL="recordAll",e.MASK_ALL="maskAll",e))(va||{}),gi=(e=>(e.MASK="mask",e.RECORD="record",e))(gi||{}),vn,K,pa,Bt,Aa,wa,hi,ma,pn={},Ca=[],Ku=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Jn=Array.isArray;function dt(e,t){for(var n in t)e[n]=t[n];return e}function ba(e){var t=e.parentNode;t&&t.removeChild(e)}function We(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?vn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return An(e,o,r,i,null)}function An(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++pa,__i:-1,__u:0};return i==null&&K.vnode!=null&&K.vnode(a),a}function Yu(){return{current:null}}function Se(e){return e.children}function it(e,t){this.props=e,this.context=t}function zt(e,t){if(t==null)return e.__?zt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?zt(e):null}function Pa(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Pa(e)}}function vi(e){(!e.__d&&(e.__d=!0)&&Bt.push(e)&&!Zn.__r++||Aa!==K.debounceRendering)&&((Aa=K.debounceRendering)||wa)(Zn)}function Zn(){var e,t,n,r,i,a,o,s,l;for(Bt.sort(hi);e=Bt.shift();)e.__d&&(t=Bt.length,r=void 0,a=(i=(n=e).__v).__e,s=[],l=[],(o=n.__P)&&((r=dt({},i)).__v=i.__v+1,K.vnode&&K.vnode(r),pi(o,r,i,n.__n,o.ownerSVGElement!==void 0,32&i.__u?[a]:null,s,a??zt(i),!!(32&i.__u),l),r.__.__k[r.__i]=r,Sa(s,r,l),r.__e!=a&&Pa(r)),Bt.length>t&&Bt.sort(hi));Zn.__r=0}function ya(e,t,n,r,i,a,o,s,l,c,g){var u,h,d,v,w,A=r&&r.__k||Ca,Q=t.length;for(n.__d=l,Ju(n,t,A),l=n.__d,u=0;u<Q;u++)(d=n.__k[u])!=null&&typeof d!="boolean"&&typeof d!="function"&&(h=d.__i===-1?pn:A[d.__i]||pn,d.__i=u,pi(e,d,h,i,a,o,s,l,c,g),v=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&Ai(h.ref,null,d),g.push(d.ref,d.__c||v,d)),w==null&&v!=null&&(w=v),65536&d.__u||h.__k===d.__k?l=Qa(d,l,e):typeof d.type=="function"&&d.__d!==void 0?l=d.__d:v&&(l=v.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=l,n.__e=w}function Ju(e,t,n){var r,i,a,o,s,l=t.length,c=n.length,g=c,u=0;for(e.__k=[],r=0;r<l;r++)(i=e.__k[r]=(i=t[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?An(null,i,null,null,i):Jn(i)?An(Se,{children:i},null,null,null):i.__b>0?An(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,s=Zu(i,n,o=r+u,g),i.__i=s,a=null,s!==-1&&(g--,(a=n[s])&&(a.__u|=131072)),a==null||a.__v===null?(s==-1&&u--,typeof i.type!="function"&&(i.__u|=65536)):s!==o&&(s===o+1?u++:s>o?g>l-o?u+=s-o:u--:u=s<o&&s==o-1?s-o:0,s!==r+u&&(i.__u|=65536))):(a=n[r])&&a.key==null&&a.__e&&(a.__e==e.__d&&(e.__d=zt(a)),wi(a,a,!1),n[r]=null,g--);if(g)for(r=0;r<c;r++)(a=n[r])!=null&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=zt(a)),wi(a,a))}function Qa(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Qa(r[i],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function gt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Jn(e)?e.some(function(n){gt(n,t)}):t.push(e)),t}function Zu(e,t,n,r){var i=e.key,a=e.type,o=n-1,s=n+1,l=t[n];if(l===null||l&&i==l.key&&a===l.type)return n;if(r>(l!=null&&!(131072&l.__u)?1:0))for(;o>=0||s<t.length;){if(o>=0){if((l=t[o])&&!(131072&l.__u)&&i==l.key&&a===l.type)return o;o--}if(s<t.length){if((l=t[s])&&!(131072&l.__u)&&i==l.key&&a===l.type)return s;s++}}return-1}function xa(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ku.test(t)?n:n+"px"}function jn(e,t,n,r,i){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||xa(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||xa(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,a?ka:Ia,a)):e.removeEventListener(t,a?ka:Ia,a);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ia(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(K.event?K.event(e):e)}function ka(e){return this.l[e.type+!0](K.event?K.event(e):e)}function pi(e,t,n,r,i,a,o,s,l,c){var g,u,h,d,v,w,A,Q,m,I,b,C,p,P,E,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[s=t.__e=n.__e]),(g=K.__b)&&g(t);e:if(typeof k=="function")try{if(Q=t.props,m=(g=k.contextType)&&r[g.__c],I=g?m?m.props.value:g.__:r,n.__c?A=(u=t.__c=n.__c).__=u.__E:("prototype"in k&&k.prototype.render?t.__c=u=new k(Q,I):(t.__c=u=new it(Q,I),u.constructor=k,u.render=Xu),m&&m.sub(u),u.props=Q,u.state||(u.state={}),u.context=I,u.__n=r,h=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),k.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=dt({},u.__s)),dt(u.__s,k.getDerivedStateFromProps(Q,u.__s))),d=u.props,v=u.state,u.__v=t,h)k.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(k.getDerivedStateFromProps==null&&Q!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(Q,I),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(Q,u.__s,I)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(u.props=Q,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(y){y&&(y.__=t)}),b=0;b<u._sb.length;b++)u.__h.push(u._sb[b]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(Q,u.__s,I),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,v,w)})}if(u.context=I,u.props=Q,u.__P=e,u.__e=!1,C=K.__r,p=0,"prototype"in k&&k.prototype.render){for(u.state=u.__s,u.__d=!1,C&&C(t),g=u.render(u.props,u.state,u.context),P=0;P<u._sb.length;P++)u.__h.push(u._sb[P]);u._sb=[]}else do u.__d=!1,C&&C(t),g=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++p<25);u.state=u.__s,u.getChildContext!=null&&(r=dt(dt({},r),u.getChildContext())),h||u.getSnapshotBeforeUpdate==null||(w=u.getSnapshotBeforeUpdate(d,v)),ya(e,Jn(E=g!=null&&g.type===Se&&g.key==null?g.props.children:g)?E:[E],t,n,r,i,a,o,s,l,c),u.base=t.__e,t.__u&=-161,u.__h.length&&o.push(u),A&&(u.__E=u.__=null)}catch(y){t.__v=null,l||a!=null?(t.__e=s,t.__u|=l?160:32,a[a.indexOf(s)]=null):(t.__e=n.__e,t.__k=n.__k),K.__e(y,t,n)}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ju(n.__e,t,n,r,i,a,o,l,c);(g=K.diffed)&&g(t)}function Sa(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Ai(n[r],n[++r],n[++r]);K.__c&&K.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){K.__e(a,i.__v)}})}function ju(e,t,n,r,i,a,o,s,l){var c,g,u,h,d,v,w,A=n.props,Q=t.props,m=t.type;if(m==="svg"&&(i=!0),a!=null){for(c=0;c<a.length;c++)if((d=a[c])&&"setAttribute"in d==!!m&&(m?d.localName===m:d.nodeType===3)){e=d,a[c]=null;break}}if(e==null){if(m===null)return document.createTextNode(Q);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,Q.is&&Q),a=null,s=!1}if(m===null)A===Q||s&&e.data===Q||(e.data=Q);else{if(a=a&&vn.call(e.childNodes),A=n.props||pn,!s&&a!=null)for(A={},c=0;c<e.attributes.length;c++)A[(d=e.attributes[c]).name]=d.value;for(c in A)d=A[c],c=="children"||(c=="dangerouslySetInnerHTML"?u=d:c==="key"||c in Q||jn(e,c,null,d,i));for(c in Q)d=Q[c],c=="children"?h=d:c=="dangerouslySetInnerHTML"?g=d:c=="value"?v=d:c=="checked"?w=d:c==="key"||s&&typeof d!="function"||A[c]===d||jn(e,c,d,A[c],i);if(g)s||u&&(g.__html===u.__html||g.__html===e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(u&&(e.innerHTML=""),ya(e,Jn(h)?h:[h],t,n,r,i&&m!=="foreignObject",a,o,a?a[0]:n.__k&&zt(n,0),s,l),a!=null)for(c=a.length;c--;)a[c]!=null&&ba(a[c]);s||(c="value",v!==void 0&&(v!==e[c]||m==="progress"&&!v||m==="option"&&v!==A[c])&&jn(e,c,v,A[c],!1),c="checked",w!==void 0&&w!==e[c]&&jn(e,c,w,A[c],!1))}return e}function Ai(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){K.__e(r,n)}}function wi(e,t,n){var r,i;if(K.unmount&&K.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ai(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){K.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&wi(r[i],t,n||typeof e.type!="function");n||e.__e==null||ba(e.__e),e.__=e.__e=e.__d=void 0}function Xu(e,t,n){return this.constructor(e,n)}function mt(e,t,n){var r,i,a,o;K.__&&K.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],o=[],pi(t,e=(!r&&n||t).__k=We(Se,null,[e]),i||pn,pn,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?vn.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),Sa(a,e,o)}function Ba(e,t){mt(e,t,Ba)}function qu(e,t,n){var r,i,a,o,s=dt({},e.props);for(a in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)a=="key"?r=t[a]:a=="ref"?i=t[a]:s[a]=t[a]===void 0&&o!==void 0?o[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?vn.call(arguments,2):n),An(e.type,s,r||e.key,i||e.ref,null)}function mi(e,t){var n={__c:t="__cC"+ma++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,a;return this.getChildContext||(i=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(s){s.__e=!0,vi(s)})},this.sub=function(o){i.push(o);var s=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),s&&s.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}vn=Ca.slice,K={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(s){e=s}throw e}},pa=0,it.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=dt({},this.state),typeof e=="function"&&(e=e(dt({},n),this.props)),e&&dt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),vi(this))},it.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),vi(this))},it.prototype.render=Se,Bt=[],wa=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hi=function(e,t){return e.__v.__b-t.__v.__b},Zn.__r=0,ma=0;var Ct,Qe,Ci,Oa,Wt=0,Da=[],Xn=[],Ea=K.__b,Ta=K.__r,Ra=K.diffed,Ma=K.__c,Na=K.unmount;function Ut(e,t){K.__h&&K.__h(Qe,e,Wt||t),Wt=0;var n=Qe.__H||(Qe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Xn}),n.__[e]}function Z(e){return Wt=1,Fa(_a,e)}function Fa(e,t,n){var r=Ut(Ct++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):_a(void 0,t),function(s){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,s);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=Qe,!Qe.u)){var i=function(s,l,c){if(!r.__c.__H)return!0;var g=r.__c.__H.__.filter(function(h){return h.__c});if(g.every(function(h){return!h.__N}))return!a||a.call(this,s,l,c);var u=!1;return g.forEach(function(h){if(h.__N){var d=h.__[0];h.__=h.__N,h.__N=void 0,d!==h.__[0]&&(u=!0)}}),!(!u&&r.__c.props===s)&&(!a||a.call(this,s,l,c))};Qe.u=!0;var a=Qe.shouldComponentUpdate,o=Qe.componentWillUpdate;Qe.componentWillUpdate=function(s,l,c){if(this.__e){var g=a;a=void 0,i(s,l,c),a=g}o&&o.call(this,s,l,c)},Qe.shouldComponentUpdate=i}return r.__N||r.__}function ne(e,t){var n=Ut(Ct++,3);!K.__s&&yi(n.__H,t)&&(n.__=e,n.i=t,Qe.__H.__h.push(n))}function $t(e,t){var n=Ut(Ct++,4);!K.__s&&yi(n.__H,t)&&(n.__=e,n.i=t,Qe.__h.push(n))}function re(e){return Wt=5,Y(function(){return{current:e}},[])}function bi(e,t,n){Wt=6,$t(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Y(e,t){var n=Ut(Ct++,7);return yi(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function j(e,t){return Wt=8,Y(function(){return e},t)}function ee(e){var t=Qe.context[e.__c],n=Ut(Ct++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Qe)),t.props.value):e.__}function ef(e,t){K.useDebugValue&&K.useDebugValue(t?t(e):e)}function tf(){var e=Ut(Ct++,11);if(!e.__){for(var t=Qe.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function nf(){for(var e;e=Da.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(qn),e.__H.__h.forEach(Pi),e.__H.__h=[]}catch(t){e.__H.__h=[],K.__e(t,e.__v)}}K.__b=function(e){Qe=null,Ea&&Ea(e)},K.__r=function(e){Ta&&Ta(e),Ct=0;var t=(Qe=e.__c).__H;t&&(Ci===Qe?(t.__h=[],Qe.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Xn,n.__N=n.i=void 0})):(t.__h.forEach(qn),t.__h.forEach(Pi),t.__h=[],Ct=0)),Ci=Qe},K.diffed=function(e){Ra&&Ra(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Da.push(t)!==1&&Oa===K.requestAnimationFrame||((Oa=K.requestAnimationFrame)||rf)(nf)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Xn&&(n.__=n.__V),n.i=void 0,n.__V=Xn})),Ci=Qe=null},K.__c=function(e,t){t.some(function(n){try{n.__h.forEach(qn),n.__h=n.__h.filter(function(r){return!r.__||Pi(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],K.__e(r,n.__v)}}),Ma&&Ma(e,t)},K.unmount=function(e){Na&&Na(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{qn(r)}catch(i){t=i}}),n.__H=void 0,t&&K.__e(t,n.__v))};var La=typeof requestAnimationFrame=="function";function rf(e){var t,n=function(){clearTimeout(r),La&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);La&&(t=requestAnimationFrame(n))}function qn(e){var t=Qe,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Qe=t}function Pi(e){var t=Qe;e.__c=e.__(),Qe=t}function yi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function _a(e,t){return typeof t=="function"?t(e):t}function Ha(e,t){for(var n in t)e[n]=t[n];return e}function Qi(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function xi(e){this.props=e}function of(e,t){function n(i){var a=this.props.ref,o=a==i.ref;return!o&&a&&(a.call?a(null):a.current=null),t?!t(this.props,i)||!o:Qi(this.props,i)}function r(i){return this.shouldComponentUpdate=n,We(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(xi.prototype=new it).isPureReactComponent=!0,xi.prototype.shouldComponentUpdate=function(e,t){return Qi(this.props,e)||Qi(this.state,t)};var Ga=K.__b;K.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ga&&Ga(e)};var af=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function wn(e){function t(n){var r=Ha({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=af,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var za=function(e,t){return e==null?null:gt(gt(e).map(t))},sf={map:za,forEach:za,count:function(e){return e?gt(e).length:0},only:function(e){var t=gt(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:gt},lf=K.__e;K.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}lf(e,t,n,r)};var Wa=K.unmount;function Ua(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Ha({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Ua(r,t,n)})),e}function $a(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return $a(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function er(){this.__u=0,this.t=null,this.__b=null}function Va(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function cf(e){var t,n,r;function i(a){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return We(n,a)}return i.displayName="Lazy",i.__f=!0,i}function mn(){this.u=null,this.o=null}K.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Wa&&Wa(e)},(er.prototype=new it).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Va(r.__v),a=!1,o=function(){a||(a=!0,n.__R=null,i?i(s):s())};n.__R=o;var s=function(){if(!--r.__u){if(r.state.__a){var l=r.state.__a;r.__v.__k[0]=$a(l,l.__c.__P,l.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.t.pop();)c.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},er.prototype.componentWillUnmount=function(){this.t=[]},er.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Ua(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&We(Se,null,e.fallback);return i&&(i.__u&=-33),[We(Se,null,t.__a?null:e.children),i]};var Ka=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function uf(e){return this.getChildContext=function(){return e.context},e.children}function ff(e){var t=this,n=e.i;t.componentWillUnmount=function(){mt(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),mt(We(uf,{context:t.context},e.__v),t.l)}function df(e,t){var n=We(ff,{__v:e,i:t});return n.containerInfo=t,n}(mn.prototype=new it).__a=function(e){var t=this,n=Va(t.__v),r=t.o.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Ka(t,e,r)):i()};n?n(a):a()}},mn.prototype.render=function(e){this.u=null,this.o=new Map;var t=gt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},mn.prototype.componentDidUpdate=mn.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Ka(e,n,t)})};var Ya=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,gf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,hf=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,vf=/[A-Z0-9]/g,pf=typeof document<"u",Af=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function wf(e,t,n){return t.__k==null&&(t.textContent=""),mt(e,t),typeof n=="function"&&n(),e?e.__c:null}function mf(e,t,n){return Ba(e,t),typeof n=="function"&&n(),e?e.__c:null}it.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(it.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ja=K.event;function Cf(){}function bf(){return this.cancelBubble}function Pf(){return this.defaultPrevented}K.event=function(e){return Ja&&(e=Ja(e)),e.persist=Cf,e.isPropagationStopped=bf,e.isDefaultPrevented=Pf,e.nativeEvent=e};var Ii,yf={enumerable:!1,configurable:!0,get:function(){return this.class}},Za=K.vnode;K.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var a in n){var o=n[a];if(!(a==="value"&&"defaultValue"in n&&o==null||pf&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&o===!0?o="":s==="ondoubleclick"?a="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Af(n.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":hf.test(a)?a=s:r.indexOf("-")===-1&&gf.test(a)?a=a.replace(vf,"-$&").toLowerCase():o===null&&(o=void 0):s=a="oninput",s==="oninput"&&i[a=s]&&(a="oninputCapture"),i[a]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=gt(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=gt(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",yf)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=Ya,Za&&Za(e)};var ja=K.__r;K.__r=function(e){ja&&ja(e),Ii=e.__c};var Xa=K.diffed;K.diffed=function(e){Xa&&Xa(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Ii=null};var Qf={ReactCurrentDispatcher:{current:{readContext:function(e){return Ii.__n[e.__c].props.value}}}};function xf(e){return We.bind(null,e)}function tr(e){return!!e&&e.$$typeof===Ya}function If(e){return tr(e)&&e.type===Se}function kf(e){return tr(e)?qu.apply(null,arguments):e}function Sf(e){return!!e.__k&&(mt(null,e),!0)}function Bf(e){return e&&(e.base||e.nodeType===1&&e)||null}var Of=function(e,t){return e(t)},Df=function(e,t){return e(t)},Ef=Se;function qa(e){e()}function Tf(e){return e}function Rf(){return[!1,qa]}var Mf=$t,Nf=tr;function Ff(e,t){var n=t(),r=Z({h:{__:n,v:t}}),i=r[0].h,a=r[1];return $t(function(){i.__=n,i.v=t,ki(i)&&a({h:i})},[e,n,t]),ne(function(){return ki(i)&&a({h:i}),e(function(){ki(i)&&a({h:i})})},[e]),n}function ki(e){var t,n,r=e.v,i=e.__;try{var a=r();return!((t=i)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var Ae={useState:Z,useId:tf,useReducer:Fa,useEffect:ne,useLayoutEffect:$t,useInsertionEffect:Mf,useTransition:Rf,useDeferredValue:Tf,useSyncExternalStore:Ff,startTransition:qa,useRef:re,useImperativeHandle:bi,useMemo:Y,useCallback:j,useContext:ee,useDebugValue:ef,version:"17.0.2",Children:sf,render:wf,hydrate:mf,unmountComponentAtNode:Sf,createPortal:df,createElement:We,createContext:mi,createFactory:xf,cloneElement:kf,createRef:Yu,Fragment:Se,isValidElement:tr,isElement:Nf,isFragment:If,findDOMNode:Bf,Component:it,PureComponent:xi,memo:of,forwardRef:wn,flushSync:Df,unstable_batchedUpdates:Of,StrictMode:Ef,Suspense:er,SuspenseList:mn,lazy:cf,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Qf},nr,Lf=new Uint8Array(16);function _f(){if(!nr&&(nr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!nr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nr(Lf)}const Hf=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Gf(e){return typeof e=="string"&&Hf.test(e)}for(var _e=[],Si=0;Si<256;++Si)_e.push((Si+256).toString(16).substr(1));function zf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(_e[e[t+0]]+_e[e[t+1]]+_e[e[t+2]]+_e[e[t+3]]+"-"+_e[e[t+4]]+_e[e[t+5]]+"-"+_e[e[t+6]]+_e[e[t+7]]+"-"+_e[e[t+8]]+_e[e[t+9]]+"-"+_e[e[t+10]]+_e[e[t+11]]+_e[e[t+12]]+_e[e[t+13]]+_e[e[t+14]]+_e[e[t+15]]).toLowerCase();if(!Gf(n))throw TypeError("Stringified UUID is invalid");return n}function es(e,t,n){e=e||{};var r=e.random||(e.rng||_f)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,zf(r)}var X=(e=>(e[e.CUSTOMER=1]="CUSTOMER",e[e.AGENT=2]="AGENT",e[e.BOT=3]="BOT",e))(X||{}),Ot=(e=>(e[e.EXTERNAL=1]="EXTERNAL",e[e.NOTE=2]="NOTE",e[e.FORM=3]="FORM",e))(Ot||{}),Ke=(e=>(e.OPEN="OPEN",e.SNOOZED="SNOOZED",e.CLOSED="CLOSED",e))(Ke||{});const Wf="ai-chatbot";var rr=(e=>(e.CSAT_QUESTION="CSAT_QUESTION",e.CSAT_RESPONSE="CSAT_RESPONSE",e.ESCALATE_TO_HUMAN="ESCALATE_TO_HUMAN",e))(rr||{}),Bi=(e=>(e[e.YesNo=0]="YesNo",e[e.Emoticons=1]="Emoticons",e))(Bi||{});function Ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oi={exports:{}},ts;function Uf(){return ts||(ts=1,function(e,t){var n={};(function(r,i){e.exports=i()})(n,function(){return function(r){var i={};function a(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=r,a.c=i,a.d=function(o,s,l){a.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,s){if(1&s&&(o=a(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var c in o)a.d(l,c,(function(g){return o[g]}).bind(null,c));return l},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=0)}([function(r,i,a){a.r(i);var o,s=function(){for(var k=0,y=0,O=arguments.length;y<O;y++)k+=arguments[y].length;var M=Array(k),S=0;for(y=0;y<O;y++)for(var R=arguments[y],x=0,B=R.length;x<B;x++,S++)M[S]=R[x];return M},l=function(){function k(y){this.isDone=!1,this.args=[],this.workModule=y}return k.prototype.with=function(y){return this.args=y,this},k.prototype.execute=function(){var y=this;return new Promise(function(O,M){try{var S=y.workModule.get();O(S.call.apply(S,s([null],y.args)))}catch(R){M(R)}}).finally(function(){return y.isDone=!0})},k}();(function(k){k.START="$$_KELDA_START",k.DONE="$$_KELDA_DONE",k.ERROR="$$_KELDA_ERROR"})(o||(o={}));var c,g=function(){function k(y){this.isDone=!1,this.worker=null,this.args=[],this.cleanUp=this.cleanUp.bind(this),this.workModule=y}return k.prototype.with=function(y){return this.args=y,this},k.prototype.execute=function(){return this.url=this.getWorkerUrl(),this.getWorkPromise().finally(this.cleanUp)},k.prototype.cleanUp=function(){var y;this.url&&URL.revokeObjectURL(this.url),(y=this.worker)===null||y===void 0||y.terminate(),this.isDone=!0},k.prototype.getWorkPromise=function(){var y=this;return new Promise(function(O,M){try{y.doWorkInWorker(O,M)}catch(S){M(S)}})},k.prototype.doWorkInWorker=function(y,O){this.url=this.getWorkerUrl(),this.worker=new Worker(this.url),this.initWorkerMessageHandling(y,O),this.startWork()},k.prototype.startWork=function(){var y;(y=this.worker)===null||y===void 0||y.postMessage({type:o.START,args:this.args})},k.prototype.initWorkerMessageHandling=function(y,O){var M;(M=this.worker)===null||M===void 0||M.addEventListener("message",function(S){var R=S.data,x=R.type,B=R.result,F=R.error;switch(x){case o.DONE:y(B);break;case o.ERROR:O(F)}})},k.prototype.getWorkerUrl=function(){var y=this.getWorkerScript(),O=new Blob([y],{type:"text/javascript"});return URL.createObjectURL(O)},k.prototype.getWorkerScript=function(){return"("+function(y,O){var M=!1;self.onmessage=function(S){var R,x;if(!M&&((R=S.data)===null||R===void 0?void 0:R.type)==="$$_KELDA_START")try{if(typeof y()!="object")throw new Error("Provided work script did not evaluate to a module object");var B=y()[O];if(!B)throw new Error("Export '"+O+"' was not found in provided work module");var F=((x=S.data)===null||x===void 0?void 0:x.args)||[],L=B.apply(null,F);L instanceof Promise?L.then(function(T){self.postMessage({type:"$$_KELDA_DONE",result:T})}):self.postMessage({type:"$$_KELDA_DONE",result:L})}catch(T){self.postMessage({type:"$$_KELDA_ERROR",error:T})}finally{M=!0}}}+")("+this.workModule+', "'+this.workModule.exportName+'")'},k}(),u=function(){function k(){}return k.getJob=function(y){var O;return!((O=window)===null||O===void 0)&&O.Worker?new g(y):new l(y)},k}(),h=function(){function k(){this.isIdle=!0}return k.prototype.do=function(y){var O=this;return this.isIdle=!1,y.execute().finally(function(){return O.isIdle=!0})},k}(),d=(c=function(k,y){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(O,M){O.__proto__=M}||function(O,M){for(var S in M)M.hasOwnProperty(S)&&(O[S]=M[S])})(k,y)},function(k,y){function O(){this.constructor=k}c(k,y),k.prototype=y===null?Object.create(y):(O.prototype=y.prototype,new O)}),v=function(k){function y(O){var M=k.call(this,O)||this;return M.message=O,M.name="KeldaError",M}return d(y,k),y}(Error),w=function(){function k(y){this.queue=[],k.validate(y),this.threads=this.populateThreads(y),this.doFromQueue=this.doFromQueue.bind(this)}return k.validate=function(y){if(y<=0)throw new v("threadPoolDepth must be greater than 0")},k.prototype.schedule=function(y){var O=this,M=this.getThread();return M?M.do(y).finally(this.doFromQueue):new Promise(function(S,R){var x=[y,S,R];O.queue.push(x)})},k.prototype.doFromQueue=function(){var y=this.getThread();if(y&&this.queue.length){var O=this.queue.shift(),M=O[0],S=O[1],R=O[2];y.do(M).then(S).catch(R).finally(this.doFromQueue)}},k.prototype.populateThreads=function(y){return Array(y).fill(null).map(function(){return new h})},k.prototype.getThread=function(){return this.threads.find(function(y){return y.isIdle})},k}(),A=function(){function k(y,O){this.source=y,this.exportName=O}return k.prototype.get=function(){return Function('"use-strict"; return '+this.source+";").call(null)[this.exportName]},k.prototype.toString=function(){return`function(){
      return `+this.source+`
    }`},k}(),Q=function(k,y,O,M){return new(O||(O=Promise))(function(S,R){function x(L){try{F(M.next(L))}catch(T){R(T)}}function B(L){try{F(M.throw(L))}catch(T){R(T)}}function F(L){var T;L.done?S(L.value):(T=L.value,T instanceof O?T:new O(function(H){H(T)})).then(x,B)}F((M=M.apply(k,[])).next())})},m=function(k,y){var O,M,S,R,x={label:0,sent:function(){if(1&S[0])throw S[1];return S[1]},trys:[],ops:[]};return R={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(R[Symbol.iterator]=function(){return this}),R;function B(F){return function(L){return function(T){if(O)throw new TypeError("Generator is already executing.");for(;x;)try{if(O=1,M&&(S=2&T[0]?M.return:T[0]?M.throw||((S=M.return)&&S.call(M),0):M.next)&&!(S=S.call(M,T[1])).done)return S;switch(M=0,S&&(T=[2&T[0],S.value]),T[0]){case 0:case 1:S=T;break;case 4:return x.label++,{value:T[1],done:!1};case 5:x.label++,M=T[1],T=[0];continue;case 7:T=x.ops.pop(),x.trys.pop();continue;default:if(!(S=(S=x.trys).length>0&&S[S.length-1])&&(T[0]===6||T[0]===2)){x=0;continue}if(T[0]===3&&(!S||T[1]>S[0]&&T[1]<S[3])){x.label=T[1];break}if(T[0]===6&&x.label<S[1]){x.label=S[1],S=T;break}if(S&&x.label<S[2]){x.label=S[2],x.ops.push(T);break}S[2]&&x.ops.pop(),x.trys.pop();continue}T=y.call(k,x)}catch(H){T=[6,H],M=0}finally{O=S=0}if(5&T[0])throw T[1];return{value:T[0]?T[1]:void 0,done:!0}}([F,L])}}},I=function(){function k(y,O){O===void 0&&(O="default"),this.url=y,this.exportName=O}return k.prototype.get=function(){return Q(this,void 0,void 0,function(){var y;return m(this,function(O){switch(O.label){case 0:return this.script=this.script||this.loadScript(this.url),y=A.bind,[4,this.script];case 1:return[2,new(y.apply(A,[void 0,O.sent(),this.exportName]))]}})})},k.prototype.loadScript=function(y){return new Promise(function(O,M){var S=new XMLHttpRequest;S.onreadystatechange=function(){var R=S.readyState,x=S.status,B=S.responseText;R===S.DONE&&(x>=200&&x<400?O(B):M(new v("Could not load work from url: '"+y+"'")))},S.open("GET",y),S.send()})},k}(),b=function(){function k(y){this.exportName="default",this.work=y}return k.prototype.get=function(){return this.work},k.prototype.toString=function(){return`function(){
      return {
        default: `+this.work+`
      }
    }`},k}(),C=function(k,y,O,M){return new(O||(O=Promise))(function(S,R){function x(L){try{F(M.next(L))}catch(T){R(T)}}function B(L){try{F(M.throw(L))}catch(T){R(T)}}function F(L){var T;L.done?S(L.value):(T=L.value,T instanceof O?T:new O(function(H){H(T)})).then(x,B)}F((M=M.apply(k,[])).next())})},p=function(k,y){var O,M,S,R,x={label:0,sent:function(){if(1&S[0])throw S[1];return S[1]},trys:[],ops:[]};return R={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(R[Symbol.iterator]=function(){return this}),R;function B(F){return function(L){return function(T){if(O)throw new TypeError("Generator is already executing.");for(;x;)try{if(O=1,M&&(S=2&T[0]?M.return:T[0]?M.throw||((S=M.return)&&S.call(M),0):M.next)&&!(S=S.call(M,T[1])).done)return S;switch(M=0,S&&(T=[2&T[0],S.value]),T[0]){case 0:case 1:S=T;break;case 4:return x.label++,{value:T[1],done:!1};case 5:x.label++,M=T[1],T=[0];continue;case 7:T=x.ops.pop(),x.trys.pop();continue;default:if(!(S=(S=x.trys).length>0&&S[S.length-1])&&(T[0]===6||T[0]===2)){x=0;continue}if(T[0]===3&&(!S||T[1]>S[0]&&T[1]<S[3])){x.label=T[1];break}if(T[0]===6&&x.label<S[1]){x.label=S[1],S=T;break}if(S&&x.label<S[2]){x.label=S[2],x.ops.push(T);break}S[2]&&x.ops.pop(),x.trys.pop();continue}T=y.call(k,x)}catch(H){T=[6,H],M=0}finally{O=S=0}if(5&T[0])throw T[1];return{value:T[0]?T[1]:void 0,done:!0}}([F,L])}}},P={threadPoolDepth:1},E=function(){function k(y){var O=(y===void 0?P:y).threadPoolDepth;this.cache={},this.threadPool=new w(O)}return k.prototype.orderWork=function(y){for(var O=[],M=1;M<arguments.length;M++)O[M-1]=arguments[M];return C(this,void 0,void 0,function(){var S,R,x;return p(this,function(B){switch(B.label){case 0:return B.trys.push([0,3,,4]),[4,this.getWorkModule(y)];case 1:return S=B.sent(),R=u.getJob(S).with(O),[4,this.threadPool.schedule(R)];case 2:return[2,B.sent()];case 3:return x=B.sent(),this.toKeldaError(x),[3,4];case 4:return[2]}})})},k.prototype.load=function(y){var O=y.url,M=y.exportName;return C(this,void 0,void 0,function(){var S,R;return p(this,function(x){switch(x.label){case 0:return[4,(S=new I(O,M)).get()];case 1:return x.sent(),R=Object.keys(this.cache).length+1,this.cache[R]=S,[2,R]}})})},k.prototype.lazy=function(y){var O=y.url,M=y.exportName,S=Object.keys(this.cache).length+1;return this.cache[S]=new I(O,M),S},k.prototype.getWorkModule=function(y){return C(this,void 0,void 0,function(){var O,M,S;return p(this,function(R){switch(typeof y){case"function":return[2,new b(y)];case"object":return O=y.url,M=y.exportName,[2,new I(O,M).get()];case"number":if(!(S=this.cache[y]))throw new v("Invalid work id: '"+y+"'");return[2,S.get()]}return[2]})})},k.prototype.toKeldaError=function(y){var O=y.message||"Something went wrong while processing work";throw new v(O)},k}();i.default=E}]).default})}(Oi)),Oi.exports}var $f=Uf();const Vf=Ze($f),Cn="https://app.atlas.so",Kf="wss://app.atlas.so",Yf="eaeaca6e96664b2e83a9a778c9923215",ae="atlas-chat",Jf="3000",Zf=!!~(Cn==null?void 0:Cn.indexOf("localhost")),Di=async({method:e="GET",url:t,query:n,body:r,headers:i})=>{const a=s=>Object.keys(s).map(l=>{const c=s[l];if(typeof c<"u"&&c!==null)return`${encodeURIComponent(l)}=${encodeURIComponent(c)}`}).filter(Boolean).join("&"),o=(s,l)=>l?`${s}${~s.indexOf("?")?"&":"?"}${a(l)}`:s;return new Promise(s=>{const l=new XMLHttpRequest;l.open(e,o(t,n),!0),i&&Object.entries(i).forEach(([c,g])=>{l.setRequestHeader(c,g)}),l.onload=function(){let c;try{c=l.responseText&&JSON.parse(l.responseText)}catch{c=l.responseText}s({body:c,error:l.status<200||l.status>=300,status:l.status})},l.onerror=function(){s({body:void 0,error:!1,status:0})},l.send(r||null)})},ns=function(){let e=!0,t;const n=()=>(t||(t=new Vf({threadPoolDepth:5})),t);return async r=>{jf()||(e=!1);const{recordInternal:i,...a}=r;let o;try{o=e?await n().orderWork(Di,a):await Di(a)}catch(s){Zf&&console.error(s),e=!1,o=await Di(a)}return i&&i({status:o.status,url:r.url,method:r.method||"GET"}),o}}();function jf(){var t;const e=(t=window.Atlas)==null?void 0:t.allowWebWorkers;return typeof e=="boolean"?e:!0}var ir={exports:{}},Xf=ir.exports,rs;function qf(){return rs||(rs=1,function(e,t){(function(n,r){e.exports=r()})(Xf,function(){var n=1e3,r=6e4,i=36e5,a="millisecond",o="second",s="minute",l="hour",c="day",g="week",u="month",h="quarter",d="year",v="date",w="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var x=["th","st","nd","rd"],B=R%100;return"["+R+(x[(B-20)%10]||x[B]||x[0])+"]"}},I=function(R,x,B){var F=String(R);return!F||F.length>=x?R:""+Array(x+1-F.length).join(B)+R},b={s:I,z:function(R){var x=-R.utcOffset(),B=Math.abs(x),F=Math.floor(B/60),L=B%60;return(x<=0?"+":"-")+I(F,2,"0")+":"+I(L,2,"0")},m:function R(x,B){if(x.date()<B.date())return-R(B,x);var F=12*(B.year()-x.year())+(B.month()-x.month()),L=x.clone().add(F,u),T=B-L<0,H=x.clone().add(F+(T?-1:1),u);return+(-(F+(B-L)/(T?L-H:H-L))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:u,y:d,w:g,d:c,D:v,h:l,m:s,s:o,ms:a,Q:h}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},C="en",p={};p[C]=m;var P="$isDayjsObject",E=function(R){return R instanceof M||!(!R||!R[P])},k=function R(x,B,F){var L;if(!x)return C;if(typeof x=="string"){var T=x.toLowerCase();p[T]&&(L=T),B&&(p[T]=B,L=T);var H=x.split("-");if(!L&&H.length>1)return R(H[0])}else{var N=x.name;p[N]=x,L=N}return!F&&L&&(C=L),L||!F&&C},y=function(R,x){if(E(R))return R.clone();var B=typeof x=="object"?x:{};return B.date=R,B.args=arguments,new M(B)},O=b;O.l=k,O.i=E,O.w=function(R,x){return y(R,{locale:x.$L,utc:x.$u,x:x.$x,$offset:x.$offset})};var M=function(){function R(B){this.$L=k(B.locale,null,!0),this.parse(B),this.$x=this.$x||B.x||{},this[P]=!0}var x=R.prototype;return x.parse=function(B){this.$d=function(F){var L=F.date,T=F.utc;if(L===null)return new Date(NaN);if(O.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var H=L.match(A);if(H){var N=H[2]-1||0,_=(H[7]||"0").substring(0,3);return T?new Date(Date.UTC(H[1],N,H[3]||1,H[4]||0,H[5]||0,H[6]||0,_)):new Date(H[1],N,H[3]||1,H[4]||0,H[5]||0,H[6]||0,_)}}return new Date(L)}(B),this.init()},x.init=function(){var B=this.$d;this.$y=B.getFullYear(),this.$M=B.getMonth(),this.$D=B.getDate(),this.$W=B.getDay(),this.$H=B.getHours(),this.$m=B.getMinutes(),this.$s=B.getSeconds(),this.$ms=B.getMilliseconds()},x.$utils=function(){return O},x.isValid=function(){return this.$d.toString()!==w},x.isSame=function(B,F){var L=y(B);return this.startOf(F)<=L&&L<=this.endOf(F)},x.isAfter=function(B,F){return y(B)<this.startOf(F)},x.isBefore=function(B,F){return this.endOf(F)<y(B)},x.$g=function(B,F,L){return O.u(B)?this[F]:this.set(L,B)},x.unix=function(){return Math.floor(this.valueOf()/1e3)},x.valueOf=function(){return this.$d.getTime()},x.startOf=function(B,F){var L=this,T=!!O.u(F)||F,H=O.p(B),N=function(fe,le){var ce=O.w(L.$u?Date.UTC(L.$y,le,fe):new Date(L.$y,le,fe),L);return T?ce:ce.endOf(c)},_=function(fe,le){return O.w(L.toDate()[fe].apply(L.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(le)),L)},W=this.$W,U=this.$M,J=this.$D,q="set"+(this.$u?"UTC":"");switch(H){case d:return T?N(1,0):N(31,11);case u:return T?N(1,U):N(0,U+1);case g:var oe=this.$locale().weekStart||0,te=(W<oe?W+7:W)-oe;return N(T?J-te:J+(6-te),U);case c:case v:return _(q+"Hours",0);case l:return _(q+"Minutes",1);case s:return _(q+"Seconds",2);case o:return _(q+"Milliseconds",3);default:return this.clone()}},x.endOf=function(B){return this.startOf(B,!1)},x.$set=function(B,F){var L,T=O.p(B),H="set"+(this.$u?"UTC":""),N=(L={},L[c]=H+"Date",L[v]=H+"Date",L[u]=H+"Month",L[d]=H+"FullYear",L[l]=H+"Hours",L[s]=H+"Minutes",L[o]=H+"Seconds",L[a]=H+"Milliseconds",L)[T],_=T===c?this.$D+(F-this.$W):F;if(T===u||T===d){var W=this.clone().set(v,1);W.$d[N](_),W.init(),this.$d=W.set(v,Math.min(this.$D,W.daysInMonth())).$d}else N&&this.$d[N](_);return this.init(),this},x.set=function(B,F){return this.clone().$set(B,F)},x.get=function(B){return this[O.p(B)]()},x.add=function(B,F){var L,T=this;B=Number(B);var H=O.p(F),N=function(U){var J=y(T);return O.w(J.date(J.date()+Math.round(U*B)),T)};if(H===u)return this.set(u,this.$M+B);if(H===d)return this.set(d,this.$y+B);if(H===c)return N(1);if(H===g)return N(7);var _=(L={},L[s]=r,L[l]=i,L[o]=n,L)[H]||1,W=this.$d.getTime()+B*_;return O.w(W,this)},x.subtract=function(B,F){return this.add(-1*B,F)},x.format=function(B){var F=this,L=this.$locale();if(!this.isValid())return L.invalidDate||w;var T=B||"YYYY-MM-DDTHH:mm:ssZ",H=O.z(this),N=this.$H,_=this.$m,W=this.$M,U=L.weekdays,J=L.months,q=L.meridiem,oe=function(le,ce,ve,Ee){return le&&(le[ce]||le(F,T))||ve[ce].slice(0,Ee)},te=function(le){return O.s(N%12||12,le,"0")},fe=q||function(le,ce,ve){var Ee=le<12?"AM":"PM";return ve?Ee.toLowerCase():Ee};return T.replace(Q,function(le,ce){return ce||function(ve){switch(ve){case"YY":return String(F.$y).slice(-2);case"YYYY":return O.s(F.$y,4,"0");case"M":return W+1;case"MM":return O.s(W+1,2,"0");case"MMM":return oe(L.monthsShort,W,J,3);case"MMMM":return oe(J,W);case"D":return F.$D;case"DD":return O.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return oe(L.weekdaysMin,F.$W,U,2);case"ddd":return oe(L.weekdaysShort,F.$W,U,3);case"dddd":return U[F.$W];case"H":return String(N);case"HH":return O.s(N,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return fe(N,_,!0);case"A":return fe(N,_,!1);case"m":return String(_);case"mm":return O.s(_,2,"0");case"s":return String(F.$s);case"ss":return O.s(F.$s,2,"0");case"SSS":return O.s(F.$ms,3,"0");case"Z":return H}return null}(le)||H.replace(":","")})},x.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},x.diff=function(B,F,L){var T,H=this,N=O.p(F),_=y(B),W=(_.utcOffset()-this.utcOffset())*r,U=this-_,J=function(){return O.m(H,_)};switch(N){case d:T=J()/12;break;case u:T=J();break;case h:T=J()/3;break;case g:T=(U-W)/6048e5;break;case c:T=(U-W)/864e5;break;case l:T=U/i;break;case s:T=U/r;break;case o:T=U/n;break;default:T=U}return L?T:O.a(T)},x.daysInMonth=function(){return this.endOf(u).$D},x.$locale=function(){return p[this.$L]},x.locale=function(B,F){if(!B)return this.$L;var L=this.clone(),T=k(B,F,!0);return T&&(L.$L=T),L},x.clone=function(){return O.w(this.$d,this)},x.toDate=function(){return new Date(this.valueOf())},x.toJSON=function(){return this.isValid()?this.toISOString():null},x.toISOString=function(){return this.$d.toISOString()},x.toString=function(){return this.$d.toUTCString()},R}(),S=M.prototype;return y.prototype=S,[["$ms",a],["$s",o],["$m",s],["$H",l],["$W",c],["$M",u],["$y",d],["$D",v]].forEach(function(R){S[R[1]]=function(x){return this.$g(x,R[0],R[1])}}),y.extend=function(R,x){return R.$i||(R(x,M,y),R.$i=!0),y},y.locale=k,y.isDayjs=E,y.unix=function(R){return y(1e3*R)},y.en=p[C],y.Ls=p,y.p={},y})}(ir)),ir.exports}var ed=qf();const ke=Ze(ed);var or={exports:{}},td=or.exports,is;function nd(){return is||(is=1,function(e,t){(function(n,r){e.exports=r()})(td,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(a,o,s){var l=o.prototype;s.utc=function(w){var A={date:w,utc:!0,args:arguments};return new o(A)},l.utc=function(w){var A=s(this.toDate(),{locale:this.$L,utc:!0});return w?A.add(this.utcOffset(),n):A},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var c=l.parse;l.parse=function(w){w.utc&&(this.$u=!0),this.$utils().u(w.$offset)||(this.$offset=w.$offset),c.call(this,w)};var g=l.init;l.init=function(){if(this.$u){var w=this.$d;this.$y=w.getUTCFullYear(),this.$M=w.getUTCMonth(),this.$D=w.getUTCDate(),this.$W=w.getUTCDay(),this.$H=w.getUTCHours(),this.$m=w.getUTCMinutes(),this.$s=w.getUTCSeconds(),this.$ms=w.getUTCMilliseconds()}else g.call(this)};var u=l.utcOffset;l.utcOffset=function(w,A){var Q=this.$utils().u;if(Q(w))return this.$u?0:Q(this.$offset)?u.call(this):this.$offset;if(typeof w=="string"&&(w=function(C){C===void 0&&(C="");var p=C.match(r);if(!p)return null;var P=(""+p[0]).match(i)||["-",0,0],E=P[0],k=60*+P[1]+ +P[2];return k===0?0:E==="+"?k:-k}(w),w===null))return this;var m=Math.abs(w)<=16?60*w:w,I=this;if(A)return I.$offset=m,I.$u=w===0,I;if(w!==0){var b=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(I=this.local().add(m+b,n)).$offset=m,I.$x.$localOffset=b}else I=this.utc();return I};var h=l.format;l.format=function(w){var A=w||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,A)},l.valueOf=function(){var w=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*w},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var d=l.toDate;l.toDate=function(w){return w==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var v=l.diff;l.diff=function(w,A,Q){if(w&&this.$u===w.$u)return v.call(this,w,A,Q);var m=this.local(),I=s(w).local();return v.call(m,I,A,Q)}}})}(or)),or.exports}var rd=nd();const Ei=Ze(rd);var ar={exports:{}},id=ar.exports,os;function od(){return os||(os=1,function(e,t){(function(n,r){e.exports=r()})(id,function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},r={};return function(i,a,o){var s,l=function(h,d,v){v===void 0&&(v={});var w=new Date(h),A=function(Q,m){m===void 0&&(m={});var I=m.timeZoneName||"short",b=Q+"|"+I,C=r[b];return C||(C=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:Q,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:I}),r[b]=C),C}(d,v);return A.formatToParts(w)},c=function(h,d){for(var v=l(h,d),w=[],A=0;A<v.length;A+=1){var Q=v[A],m=Q.type,I=Q.value,b=n[m];b>=0&&(w[b]=parseInt(I,10))}var C=w[3],p=C===24?0:C,P=w[0]+"-"+w[1]+"-"+w[2]+" "+p+":"+w[4]+":"+w[5]+":000",E=+h;return(o.utc(P).valueOf()-(E-=E%1e3))/6e4},g=a.prototype;g.tz=function(h,d){h===void 0&&(h=s);var v=this.utcOffset(),w=this.toDate(),A=w.toLocaleString("en-US",{timeZone:h}),Q=Math.round((w-new Date(A))/1e3/60),m=o(A,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(w.getTimezoneOffset()/15)-Q,!0);if(d){var I=m.utcOffset();m=m.add(v-I,"minute")}return m.$x.$timezone=h,m},g.offsetName=function(h){var d=this.$x.$timezone||o.tz.guess(),v=l(this.valueOf(),d,{timeZoneName:h}).find(function(w){return w.type.toLowerCase()==="timezonename"});return v&&v.value};var u=g.startOf;g.startOf=function(h,d){if(!this.$x||!this.$x.$timezone)return u.call(this,h,d);var v=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return u.call(v,h,d).tz(this.$x.$timezone,!0)},o.tz=function(h,d,v){var w=v&&d,A=v||d||s,Q=c(+o(),A);if(typeof h!="string")return o(h).tz(A);var m=function(p,P,E){var k=p-60*P*1e3,y=c(k,E);if(P===y)return[k,P];var O=c(k-=60*(y-P)*1e3,E);return y===O?[k,y]:[p-60*Math.min(y,O)*1e3,Math.max(y,O)]}(o.utc(h,w).valueOf(),Q,A),I=m[0],b=m[1],C=o(I).utcOffset(b);return C.$x.$timezone=A,C},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(h){s=h}}})}(ar)),ar.exports}var ad=od();const as=Ze(ad);var sr={exports:{}},sd=sr.exports,ss;function ld(){return ss||(ss=1,function(e,t){(function(n,r){e.exports=r()})(sd,function(){return function(n,r){var i=r.prototype,a=i.format;i.format=function(o){var s=this,l=this.$locale();if(!this.isValid())return a.bind(this)(o);var c=this.$utils(),g=(o||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(u){switch(u){case"Q":return Math.ceil((s.$M+1)/3);case"Do":return l.ordinal(s.$D);case"gggg":return s.weekYear();case"GGGG":return s.isoWeekYear();case"wo":return l.ordinal(s.week(),"W");case"w":case"ww":return c.s(s.week(),u==="w"?1:2,"0");case"W":case"WW":return c.s(s.isoWeek(),u==="W"?1:2,"0");case"k":case"kk":return c.s(String(s.$H===0?24:s.$H),u==="k"?1:2,"0");case"X":return Math.floor(s.$d.getTime()/1e3);case"x":return s.$d.getTime();case"z":return"["+s.offsetName()+"]";case"zzz":return"["+s.offsetName("long")+"]";default:return u}});return a.bind(this)(g)}}})}(sr)),sr.exports}var cd=ld();const ud=Ze(cd);ke.extend(Ei),ke.extend(as),ke.extend(ud);const fd=e=>Object.fromEntries(Object.entries(e).filter(([t,n])=>n!==void 0)),bn=e=>ke.utc(e).local(),ls=e=>ke(e).format("D MMMM YYYY, hh:mm A (z)"),cs=e=>ke(e).format("D MMMM YYYY"),dd=(e,t)=>e.type==="boolean"?t==="on":e.type==="date"&&t?cs(t):e.type==="datetime-local"&&t?ls(t):t;function us(e){if(e===null)return null;try{return JSON.parse(e)}catch(t){console.error(`Could not parse JSON string: ${e}
`,t);return}}const gd=window.sessionStorage.getItem.bind(window.sessionStorage),hd=window.sessionStorage.setItem.bind(window.sessionStorage),vd=window.sessionStorage.removeItem.bind(window.sessionStorage),pd=window.sessionStorage.hasOwnProperty.bind(window.sessionStorage),Ad=window.JSON.stringify.bind(window.JSON),lr=new Map,se={read(e,t=null){if(!pd(e)){if(!lr.has(e))return t;const r=lr.get(e);se.write(e,r)}const n=gd(e);return us(n)??t},write(e,t){try{lr.set(e,t),hd(e,Ad(t))}catch(n){console.error("Session Storage write failed",n)}},remove(e){lr.delete(e),vd(e)}},Ti="atlas-base-domain",wd=e=>{const t=new Date;return t.setTime(t.getTime()+e*24*60*60*1e3),"expires="+t.toUTCString()};function md(e,t,n){try{let r=e+"="+encodeURIComponent(t);if(typeof n=="number"&&(r+="; "+wd(n)),r+="; path=/",!window.navigator.userAgent.includes("Android 5")){const i=se.read(Ti,"");i&&(r+="; domain="+i)}return location.protocol==="https:"&&(r+="; secure"),document.cookie=r,!0}catch{return typeof t=="string"&&se.write("cookie/"+e,t),!1}}function Cd(e){try{const t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"),n=(t==null?void 0:t.pop())||"";return n?decodeURIComponent(n):""}catch{return se.read("cookie/"+e)??""}}function bd(e){try{const t=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`,n=!window.navigator.userAgent.includes("Android 5")&&se.read(Ti,"");n?document.cookie=t+"; domain="+n:document.cookie=t}catch{}se.remove("cookie/"+e)}const ot={write:md,read:Cd,remove:bd},Pd=window.localStorage.getItem.bind(window.localStorage),yd=window.localStorage.setItem.bind(window.localStorage),Qd=window.localStorage.removeItem.bind(window.localStorage),xd=window.JSON.stringify.bind(window.JSON),ht={read(e,t=null){const n=Pd(e);return us(n)??t},write(e,t){try{yd(e,xd(t))}catch(n){console.error("Session Storage write failed",n)}},remove(e){Qd(e)}},Ri=e=>{const t=e.fields&&Object.entries(e.fields).reduce((r,[i,a])=>Object.assign(r,{[i]:a}),{}),n=Id(e.alternateIdentities);return{atlasId:e.id,companyId:e.companyId,createdAt:Date.now(),email:e.email,isVisitor:e.isVisitor,name:[e.firstName,e.lastName].filter(Boolean).join(" "),userId:e.externalUserId,fields:t,customFields:e.customFields,phoneNumber:e.phoneNumber,account:e.account,integrations:n}},Id=e=>{const t={};return e&&e.forEach(n=>{const r=n.split("::");(r.length==2||r.length==3)&&(t[r[0]]=n)}),t};function kd(e){return Be.post("/api/client-app/company/identify",e,{errorLabel:"Authentication failed"}).then(t=>{if(t)return Ri(t)})}const Mi=30,Sd=1e3*60*60*24*Mi,at="atlasIdentity",Ni="atlasUserHash",fs=5;function ds(){const e=ht.read(at);if(!e)return;const t=ot.read(at+e.appId);if(t&&e.atlasId!==t){Fi(e.appId);return}if(!e.version||e.version<fs||e.createdAt<Date.now()-Sd){ht.remove(at),ot.remove(at+e.appId),ot.remove(Ni+e.appId);return}return e}function Bd(e){return e.version=fs,ht.write(at,e),ot.write(at+e.appId,e.atlasId,Mi),e.userHash&&ot.write(Ni+e.appId,e.userHash,Mi),e}function Fi(e){var n;const t=e||((n=ht.read(at))==null?void 0:n.appId);t&&(ot.remove(at+t),ot.remove(Ni+t)),ht.remove(at)}function gs(){return!!ds()}async function Od(e){const t=ot.read(at+e);if(!t){Fi(e);return}if(gs())return;const n=await Be.get(`/api/client-app/company/get-visitor/${e}/${t}`,null,{errorLabel:"Failed to receive visitor details"});if(n)return{appId:e,...Ri(n)}}const De={get:ds,set:Bd,remove:Fi,exists:gs,fetchFromCookie:Od},Li=window.Atlas.proxyUrl||Cn,Dd=window.JSON.stringify.bind(window.JSON),Ed=(e,t)=>{if(!e.error)return Promise.resolve(e.body);if(!t.errorLabel)return Promise.reject(e.body);const n=e.body?e.body instanceof Object&&e.body.detail||e.body:null;return n?Promise.reject(`${t.errorLabel} (${typeof n=="string"?n:JSON.stringify(n)})`):Promise.reject(t.errorLabel)};function Be(e,t={}){var a;const n=De.get(),r={"Content-Type":"application/json",Accept:"application/json"},i=`${t.base||Li}${e.startsWith("/")?e:`/${e}`}`;return n!=null&&n.userHash&&i.startsWith(Li)&&(r["X-Atlas-User-Hash"]=n.userHash),n!=null&&n.atlasId&&i.startsWith(Li)&&(r["X-Atlas-User-Id"]=n.atlasId),ns({url:i,headers:r,method:t.method,query:t.query,recordInternal:(a=window.Atlas.recording)==null?void 0:a.recordInternal,...t.body&&{body:Dd(fd(t.body))}}).then(o=>Ed(o,t))}function Td(e,t,n={}){return Be(e,{...n,query:t,method:"GET"})}function Rd(e,t,n={}){return Be(e,{...n,body:t,method:"POST"})}Be.get=Td,Be.post=Rd;const Pn="requested-chatbots",cr=[];async function Vt(e,t,n){const r=Be.post(`/api/client-app/chatbots/start-chat/${e}`,{trigger:t,options:n},{errorLabel:"Failed to start chatbot"}).then(i=>{if(typeof i=="string"){const a=se.read(Pn)??[];se.write(Pn,[...a,i])}return vs(r),i??null},()=>(vs(r),null));return cr.push(r),r}async function hs(e,t){const n=se.read(Pn);n!=null&&n.includes(e)?(se.write(Pn,n.filter(r=>r!==e)),t()):Promise.all(cr).then(r=>{r.includes(e)&&(se.write(Pn,r.filter(i=>i!==e)),t())})}function vs(e){const t=cr.indexOf(e);t!==-1&&cr.splice(t,1)}const Md=async(e,t,n)=>{await e({channel_id:t,channel_kind:"CUSTOMER",packet_type:"CHATBOT_FE_TRIGGER",payload:n})},Nd=(e,t)=>{const n=re(),r=re({}),i=re({}),[a,o]=Z([]);return ne(()=>{const s=[];for(const l of a){if("onElementClick"in l&&l.onElementClick&&l.selector){if(l.selector in i.current)continue;const c=g=>{let u=g.target;for(;u;){if(u.matches(l.selector)){Vt(e,"element_click",{url:window.location.href,selector:l.selector});break}u=u.parentElement}};window.document.addEventListener("click",c),i.current[l.selector]=c,s.push(()=>{delete i.current[l.selector],window.document.removeEventListener("click",c)})}if("onVisit"in l&&l.onVisit){if(n.current)continue;n.current=setTimeout(async()=>await Vt(e,"visit",{url:window.location.href}),1e3)}if("continueAfter"in l){const c=`continueAfter::${l.stepId}`;c in r.current&&(clearTimeout(r.current[c]),delete r.current[c]),r.current[c]=setTimeout(async()=>{await Md(t,e,{stepId:l.stepId}),o(g=>g.filter(u=>u!==l))},l.continueAfter*1e3)}}return()=>{for(const l of s)l()}},[a]),{triggersLoaded:s=>{o(l=>[...l,...s])},update:()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(async()=>await Vt(e,"visit",{url:window.location.href}),1e3)}}};function Re(e){const t=re(e);return t.current=e,t}function _i(e,t){return e?t(e)?e:_i(e.parentElement,t):null}function yn(e){return!!_i(e,t=>t.id===ae)}const Hi="atlas-client-draft";function ps(e,t){se.write(`${Hi}-${e}`,t)}function Gi(e){return se.read(`${Hi}-${e}`)}const ur="atlas-chat-view",zi="atlas-chat-opened",Wi="atlas-chat-history",Ui="atlas-chat-last-update",Fd=1e3*60*60*24*30;function Ld({settings:e,conversations:t,openConversations:n,unreadConversations:r,whenSocketReady:i,focusParkingRef:a,widgetElementRef:o}){const s=Re(t),l=Re(e),c=e.enableHelpMenu&&!e.hideMenu&&e.helpMenuOptions.length>0,[g,u]=Z(null),h=Re(g),d=j(()=>{var W;const N=(W=De.get())==null?void 0:W.atlasId;if(!N)return console.error("Atlas: Cannot start chatbot without identity"),Promise.resolve(!1);if(h.current)return h.current;const _=new Promise(U=>{i(()=>{Vt(N,"chat",{url:window.location.href}).then(U)})});return u(_),_.then(U=>!U&&u(null),()=>u(null)),_},[i]),[v,w]=Z(()=>{const N=se.read(zi);if(typeof N!="boolean"){const _=se.read(ur);return _!=="closed"&&!!_}return N||!1});ne(()=>{se.write(zi,v),As()},[v]);const[A,Q]=Z(()=>{let N=se.read(Wi);if(N&&!c&&(N=N.filter(W=>W!=="menu")),N!=null&&N.length)return N.length===1&&(N[0]==="new"||N[0][0]==="new")&&s.current.length?["list",N[0]]:N;const _=se.read(ur);return _?(se.remove(ur),_==="new"||_[0]==="new"?t.length?["list",_]:[_]:_[0]==="conversation"?t.length<1?[_]:t.length===1&&t[0].messages.length===1&&t[0].messages[0].side===X.BOT&&"widget"in t[0].messages[0]?[_]:["list",_]:_[0]==="article"?t.length?["list",_]:[_]:[_]):c?["menu"]:["list"]}),m=Re(A),I=j(function(_){let W=!1;return Q(function(J){return typeof _=="function"&&(_=_(J)),_.length>1&&_[_.length-1][0]==="conversation"&&_[_.length-2][0]==="conversation"&&(_=_.slice(0,-2).concat(_.slice(-1))),_!==J&&(W=!0,m.current=_),_}),u(null),W},[Q]);ne(()=>{se.write(Wi,A),As()},[A]);const b=Y(()=>A[A.length-1]||(c?"menu":s.current.length?"list":"new"),[A,s,c]),C=b==="new"||b[0]==="new"&&!b[1];ne(()=>{C&&e.enabledChatbots&&d()},[C]),ne(function(){const _=A[A.length-1];_[0]==="conversation"&&t.every(W=>W.id!==_[1])&&(A.length===1&&w(!1),I(W=>W.slice(0,-1)))},[A,t]);const p=(N,_)=>{var W;yn(document.activeElement)&&((W=o.current)==null||W.focus()),I(U=>{const J=U[U.length-1];if((J===N||Array.isArray(N)&&N.every((q,oe)=>q===J[oe]))&&(!_||U.length===1))return U;if(_)return[N];if(N[0]==="conversation"){const q=c?["menu","list",N]:["list",N];if(!U.length)return q;if(J==="menu")return U.concat(["list",N]);if(J==="new"||J[0]==="new")return!U[U.length-2]||U[U.length-2]==="menu"?q:U.slice(0,-1).concat([N])}return N[0]==="article-search"&&J[0]==="article-search"?N[1]===J[1]?U:U.slice(0,-1).concat([N]):(N==="new"||N[0]==="new")&&(J==="new"||J[0]==="new")?U.slice(0,-1).concat([N]):U.concat([N])}),w(!0)},P=N=>{if(N!=null&&N.ticketId){const _=s.current.some(W=>W.id===N.ticketId);p(_?["conversation",N.ticketId,N]:["new",N])}else{const _=s.current.filter(W=>W.status===Ke.OPEN).sort((W,U)=>{var J,q;return new Date(((J=U.lastMessage)==null?void 0:J.sentAt)??0).getTime()-new Date(((q=W.lastMessage)==null?void 0:q.sentAt)??0).getTime()})[0];p(_?["conversation",_.id,N]:["new"])}},E=N=>{if(e.withChatbot){const _=Array.isArray(e.withChatbot)?e.withChatbot[0]:e.withChatbot;if(x(_,N))return}p(N?["new",N]:["new"])},k=()=>p("list"),y=(N,_)=>p(["conversation",N,_]),O=(N,_)=>p(["article",N,_]),M=N=>{const _=N!=null&&N.categorySlug?["article-category",N.categorySlug]:["article-category"];p(_,!!(N!=null&&N.replace))},S=N=>p(["article-search",N]),R=re(null),x=(N,_)=>{var U;const W=(U=De.get())==null?void 0:U.atlasId;return W?(R.current===N||(R.current=N,i(J=>{J.chatbotInitialText=_==null?void 0:_.text,Vt(W,"sdk",{url:window.location.href,key:N}).then(q=>{R.current===N&&(R.current=null),!q&&(w(!0),p(["new"]),console.error(`Atlas Open Error: Could not initialize chatbot "${N}"`))},q=>{throw J.chatbotInitialText=void 0,R.current===N&&(R.current=null),q})})),!0):(console.error("Atlas Open Error: User is not identified"),!1)},B=N=>{var te,fe;if(v)return;const _=m.current;if(N&&((te=a.current)==null||te.focus({preventScroll:!0})),e.withChatbot){const le=Array.isArray(e.withChatbot)?e.withChatbot[0]:e.withChatbot,ce=Array.isArray(e.withChatbot)&&((fe=e.withChatbot[1])==null?void 0:fe.prefer)||"new";if(_.length===1&&(_[0]==="menu"||_[0]==="list")||_.length===2&&_[0]==="menu"&&_[1]==="list"){const Ee=ce==="last"?n.find(Ye=>Ye.chatbotKey===le):null;if(Ee){y(Ee.id);return}if(x(le))return}}w(!0);const W=c?["menu","list"]:["list"],U=r.length===1?r[0]:void 0;if(U){I(W.concat([["conversation",U.id]]));return}const J=s.current.length===1&&s.current[0].messages.length===1&&s.current[0].messages[0].side===X.BOT&&"widget"in s.current[0].messages[0]&&s.current[0].messages[0];if(J){I(W.concat([["conversation",J.conversationId]]));return}const q=c?["menu"]:n.length?n.length===1?["list",["conversation",n[0].id]]:["list"]:s.current.length?["list","new"]:["new"];if(!_.length){I(q);return}const oe=_[_.length-1];if(oe==="menu"||oe==="list"){I(q);return}if((oe==="new"||oe[0]==="new")&&!oe[1]&&!Gi("new")&&(_.length!==2||_[0]!=="list")){I(q);return}},F=()=>{(!b||!v)&&B()};ne(()=>{e.alwaysOn&&F()},[e.alwaysOn]);const L=j(()=>{l.current.alwaysOn||w(!1)},[l]),T=Y(()=>A.length>1,[A]),H=j(()=>{var N;yn(document.activeElement)&&((N=o.current)==null||N.focus()),I(_=>_.slice(0,-1))},[I]);return{opened:v,open:B,ensureOpened:F,close:L,currentView:b,initializingChatbot:!!g,chat:P,newChat:E,list:k,conversation:y,article:O,articleCategory:M,articleSearch:S,canGoBack:T,back:H,history:A}}function As(){se.write(Ui,Date.now())}function ws(e){if(e==="expired"){const t=se.read(Ui);if(t&&Date.now()-t<Fd)return}se.remove(ur),se.remove(zi),se.remove(Wi),se.remove(Ui)}const _d=1e4,Hd=2e3,Gd=(e,t,n,r)=>{var c;const i=re(),a=re([]),o=re(),s=Re(n),l=()=>{var u;o.current&&clearTimeout(o.current);const g=!!i.current;(u=i.current)==null||u.close(),i.current=new WebSocket(e),i.current.onopen=function(){var v,w;const d={channel_id:t,channel_kind:"CUSTOMER",packet_type:"SUBSCRIBE",payload:{}};this.send(JSON.stringify(d)),(v=a.current)==null||v.forEach(A=>this.send(A)),a.current=null,g&&((w=r==null?void 0:r.onReconnect)==null||w.call(r))},i.current.onmessage=h=>{o.current&&clearTimeout(o.current),s.current(h)},i.current.onclose=()=>{var h;return(h=r==null?void 0:r.onClose)==null?void 0:h.call(r)}};return ne(()=>(l(),()=>{var g;(g=i.current)==null||g.close()}),[]),ne(()=>{const g=setInterval(()=>{var u;if(((u=i.current)==null?void 0:u.readyState)===WebSocket.OPEN){const h={channel_id:t,channel_kind:"CUSTOMER",packet_type:"PING",payload:{}};i.current.send(JSON.stringify(h))}o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{l()},Hd)},_d);return()=>{clearInterval(g),clearTimeout(o.current)}},[]),[g=>{const u=JSON.stringify(g);!i.current||a.current||i.current&&i.current.readyState!==WebSocket.OPEN?(a.current=a.current||[],a.current.push(u)):i.current.send(u)},((c=i.current)==null?void 0:c.readyState)===WebSocket.OPEN]},zd=5e3,Wd=1e4,ms=2500;function Ud({wsUrl:e,routing:t,agentTypingTimeout:n,setOnlineAgents:r,newAgentMessageCallback:i,identity:a,conversationsState:o,markReadIfOpenedAndFocused:s,triggersLoaded:l,onCustomerSwitched:c,onReceive:g,onNewTicket:u,onNewChatbotTicket:h,onConnectionClose:d,socketStateRef:v}){const[w]=Gd(`${e}/ws/CUSTOMER::${a.atlasId}/${a.appId}`,a.atlasId,function(Q){var I;const m=JSON.parse(Q.data);switch(g==null||g(m),m.packet_type){case"ONLINE_LIST":r(m.payload.agents);break;case"ONLINE":r(b=>{const C=new Set(b);return C.add(m.payload.agentId),[...C.values()]});break;case"OFFLINE":r(b=>b.filter(C=>C!=m.payload.agentId));break;case"CONVERSATION_UPDATED":o.updateConversation(m.payload.conversation),s(m.payload.conversation.id);break;case"AGENT_MESSAGE":{const b=JSON.parse(m.payload.message),C=JSON.parse(m.payload.conversation);if(r(p=>{const P=new Set(p);return P.add(b.agent.id),[...P.values()]}),o.containsConversation(C.id)){const p=o.conversations.find(P=>P.id===C.id);p&&"agentTyping"in p&&((I=p.agentTyping)==null?void 0:I.id)===b.agent.id&&o.setTypingAgent(C.id,null),o.addMessage(b)}else o.addConversation(C);s(C.id),i(b),setTimeout(()=>{w({channel_id:a.atlasId,channel_kind:"CUSTOMER",packet_type:"MESSAGE_DELIVERED",payload:{external_id:b.externalId}})},100);break}case"AGENT_TYPING":{const b=m.payload.conversation_id,C=o.conversations.find(p=>p.id===b);if(!C||!("agentTyping"in C)||!C.agentTyping||C.agentTyping.id===m.payload.agent.id){const p={id:m.payload.agent.id,firstName:m.payload.agent.first_name,lastName:m.payload.agent.last_name,profileUrl:m.payload.agent.profile_url};o.setTypingAgent(b,p),n[b]&&clearTimeout(n[b]),n[b]=setTimeout(()=>{o.setTypingAgent(b,null)},zd)}break}case"BOT_TYPING":{const b=m.payload.conversation_id,C=o.conversations.find(p=>p.id===b);C&&(!("botTyping"in C)||!C.botTyping)&&(o.setTypingBot(b,!0),n[b]&&clearTimeout(n[b]),n[b]=setTimeout(()=>{o.setTypingAgent(b,null)},Wd));break}case"CLIENT_MESSAGE":{const b=JSON.parse(m.payload.message);if(b.fingerprintId=m.payload.fingerprint_id||null,o.containsConversation(b.conversationId))o.updateMessage(b);else{const C=JSON.parse(m.payload.conversation);m.payload.originId&&(C.originId=m.payload.originId),o.addConversation(C),setTimeout(()=>{o.updateConversation({...C,originId:void 0})},100)}m.payload.forceOpen&&t.conversation(b.conversationId),m.payload.newChatbotTicket&&u(b.conversationId);break}case"BOT_MESSAGE":{const b=JSON.parse(m.payload.message);m.payload.fingerprint_id&&(b.fingerprintId=m.payload.fingerprint_id),!o.containsConversation(b.conversationId)?(o.addMessage(b),hs(b.conversationId,function(){var E;if(m.payload.chatbot){const k=JSON.parse(m.payload.chatbot);h(k.ticketId,k.key)}const P=((E=v.current)==null?void 0:E.chatbotInitialText)??"";v.current.chatbotInitialText=void 0,setTimeout(function(){t.chat({ticketId:b.conversationId,text:P})})})):(o.updateMessage(b),o.setTypingBot(b.conversationId,!1)),s(b.conversationId);break}case"OPEN_CONVERSATION":{hs(m.payload.id,function(){t.conversation(m.payload.id)});break}case"MESSAGE_READ":{const b=m.payload.conversationId;o.markRead(b);break}case"CHATBOT_TRIGGERS":{l(m.payload.triggers);break}case"CHATBOT_WIDGET_RESPONSE":{const b=JSON.parse(m.payload.message);o.updateMessage(b),o.setTypingBot(b.conversationId,!1);break}case"CONVERSATION_HIDDEN":{o.deleteConversation(m.payload.conversationId);break}case"CUSTOMER_SWITCHED":{const b=JSON.parse(m.payload.customer);c(b);break}}},{onReconnect:()=>o.reload(),onClose:d});return w}var Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ne.apply(this,arguments)};function Kt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var xe="-ms-",Qn="-moz-",ge="-webkit-",Cs="comm",fr="rule",$i="decl",$d="@import",bs="@keyframes",Vd="@layer",Ps=Math.abs,Vi=String.fromCharCode,Ki=Object.assign;function Kd(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function ys(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,n){return e.replace(t,n)}function dr(e,t,n){return e.indexOf(t,n)}function Fe(e,t){return e.charCodeAt(t)|0}function Yt(e,t,n){return e.slice(t,n)}function st(e){return e.length}function Qs(e){return e.length}function xn(e,t){return t.push(e),e}function Yd(e,t){return e.map(t).join("")}function xs(e,t){return e.filter(function(n){return!vt(n,t)})}var gr=1,Jt=1,Is=0,Xe=0,Te=0,Zt="";function hr(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:gr,column:Jt,length:o,return:"",siblings:s}}function bt(e,t){return Ki(hr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jt(e){for(;e.root;)e=bt(e.root,{children:[e]});xn(e,e.siblings)}function Jd(){return Te}function Zd(){return Te=Xe>0?Fe(Zt,--Xe):0,Jt--,Te===10&&(Jt=1,gr--),Te}function et(){return Te=Xe<Is?Fe(Zt,Xe++):0,Jt++,Te===10&&(Jt=1,gr++),Te}function Dt(){return Fe(Zt,Xe)}function vr(){return Xe}function pr(e,t){return Yt(Zt,e,t)}function Yi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jd(e){return gr=Jt=1,Is=st(Zt=e),Xe=0,[]}function Xd(e){return Zt="",e}function Ji(e){return ys(pr(Xe-1,Zi(e===91?e+2:e===40?e+1:e)))}function qd(e){for(;(Te=Dt())&&Te<33;)et();return Yi(e)>2||Yi(Te)>3?"":" "}function eg(e,t){for(;--t&&et()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return pr(e,vr()+(t<6&&Dt()==32&&et()==32))}function Zi(e){for(;et();)switch(Te){case e:return Xe;case 34:case 39:e!==34&&e!==39&&Zi(Te);break;case 40:e===41&&Zi(e);break;case 92:et();break}return Xe}function tg(e,t){for(;et()&&e+Te!==57;)if(e+Te===84&&Dt()===47)break;return"/*"+pr(t,Xe-1)+"*"+Vi(e===47?e:et())}function ng(e){for(;!Yi(Dt());)et();return pr(e,Xe)}function rg(e){return Xd(Ar("",null,null,null,[""],e=jd(e),0,[0],e))}function Ar(e,t,n,r,i,a,o,s,l){for(var c=0,g=0,u=o,h=0,d=0,v=0,w=1,A=1,Q=1,m=0,I="",b=i,C=a,p=r,P=I;A;)switch(v=m,m=et()){case 40:if(v!=108&&Fe(P,u-1)==58){dr(P+=ie(Ji(m),"&","&\f"),"&\f",Ps(c?s[c-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:P+=Ji(m);break;case 9:case 10:case 13:case 32:P+=qd(v);break;case 92:P+=eg(vr()-1,7);continue;case 47:switch(Dt()){case 42:case 47:xn(ig(tg(et(),vr()),t,n,l),l);break;default:P+="/"}break;case 123*w:s[c++]=st(P)*Q;case 125*w:case 59:case 0:switch(m){case 0:case 125:A=0;case 59+g:Q==-1&&(P=ie(P,/\f/g,"")),d>0&&st(P)-u&&xn(d>32?Ss(P+";",r,n,u-1,l):Ss(ie(P," ","")+";",r,n,u-2,l),l);break;case 59:P+=";";default:if(xn(p=ks(P,t,n,c,g,i,s,I,b=[],C=[],u,a),a),m===123)if(g===0)Ar(P,t,p,p,b,a,u,s,C);else switch(h===99&&Fe(P,3)===110?100:h){case 100:case 108:case 109:case 115:Ar(e,p,p,r&&xn(ks(e,p,p,0,0,i,s,I,i,b=[],u,C),C),i,C,u,s,r?b:C);break;default:Ar(P,p,p,p,[""],C,0,s,C)}}c=g=d=0,w=Q=1,I=P="",u=o;break;case 58:u=1+st(P),d=v;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&Zd()==125)continue}switch(P+=Vi(m),m*w){case 38:Q=g>0?1:(P+="\f",-1);break;case 44:s[c++]=(st(P)-1)*Q,Q=1;break;case 64:Dt()===45&&(P+=Ji(et())),h=Dt(),g=u=st(I=P+=ng(vr())),m++;break;case 45:v===45&&st(P)==2&&(w=0)}}return a}function ks(e,t,n,r,i,a,o,s,l,c,g,u){for(var h=i-1,d=i===0?a:[""],v=Qs(d),w=0,A=0,Q=0;w<r;++w)for(var m=0,I=Yt(e,h+1,h=Ps(A=o[w])),b=e;m<v;++m)(b=ys(A>0?d[m]+" "+I:ie(I,/&\f/g,d[m])))&&(l[Q++]=b);return hr(e,t,n,i===0?fr:s,l,c,g,u)}function ig(e,t,n,r){return hr(e,t,n,Cs,Vi(Jd()),Yt(e,2,-2),0,r)}function Ss(e,t,n,r,i){return hr(e,t,n,$i,Yt(e,0,r),Yt(e,r+1,-1),r,i)}function Bs(e,t,n){switch(Kd(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 4789:return Qn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+Qn+e+xe+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ge+e+xe+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+xe+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+xe+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ge+e+xe+e+e;case 6165:return ge+e+xe+"flex-"+e+e;case 5187:return ge+e+ie(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ge+e+xe+"flex-item-"+ie(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":xe+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return ge+e+xe+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return ge+e+xe+ie(e,"shrink","negative")+e;case 5292:return ge+e+xe+ie(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+ie(e,"-grow","")+ge+e+xe+ie(e,"grow","positive")+e;case 4554:return ge+ie(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4200:if(!vt(e,/flex-|baseline/))return xe+"grid-column-align"+Yt(e,t)+e;break;case 2592:case 3360:return xe+ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,vt(r.props,/grid-\w+-end/)})?~dr(e+(n=n[t].value),"span",0)?e:xe+ie(e,"-start","")+e+xe+"grid-row-span:"+(~dr(n,"span",0)?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":xe+ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:xe+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Qn+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~dr(e,"stretch",0)?Bs(ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,c){return xe+i+":"+a+c+(o?xe+i+"-span:"+(s?l:+l-+a)+c:"")+e});case 4949:if(Fe(e,t+6)===121)return ie(e,":",":"+ge)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+xe+"$2box$3")+e;case 100:return ie(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function wr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function og(e,t,n,r){switch(e.type){case Vd:if(e.children.length)break;case $d:case $i:return e.return=e.return||e.value;case Cs:return"";case bs:return e.return=e.value+"{"+wr(e.children,r)+"}";case fr:if(!st(e.value=e.props.join(",")))return""}return st(n=wr(e.children,r))?e.return=e.value+"{"+n+"}":""}function ag(e){var t=Qs(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function sg(e){return function(t){t.root||(t=t.return)&&e(t)}}function lg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $i:e.return=Bs(e.value,e.length,n);return;case bs:return wr([bt(e,{value:ie(e.value,"@","@"+ge)})],r);case fr:if(e.length)return Yd(n=e.props,function(i){switch(vt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jt(bt(e,{props:[ie(i,/:(read-\w+)/,":"+Qn+"$1")]})),jt(bt(e,{props:[i]})),Ki(e,{props:xs(n,r)});break;case"::placeholder":jt(bt(e,{props:[ie(i,/:(plac\w+)/,":"+ge+"input-$1")]})),jt(bt(e,{props:[ie(i,/:(plac\w+)/,":"+Qn+"$1")]})),jt(bt(e,{props:[ie(i,/:(plac\w+)/,xe+"input-$1")]})),jt(bt(e,{props:[i]})),Ki(e,{props:xs(n,r)});break}return""})}}var cg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Os="active",Ds="data-styled-version",mr="6.1.9",ji=`/*!sc*/
`,Xi=typeof window<"u"&&"HTMLElement"in window,ug=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY),fg={},Cr=Object.freeze([]),qt=Object.freeze({});function Es(e,t,n){return n===void 0&&(n=qt),e.theme!==n.theme&&e.theme||t||n.theme}var Ts=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gg=/(^-|-$)/g;function Rs(e){return e.replace(dg,"-").replace(gg,"")}var hg=/(a)(d)/gi,br=52,Ms=function(e){return String.fromCharCode(e+(e>25?39:97))};function qi(e){var t,n="";for(t=Math.abs(e);t>br;t=t/br|0)n=Ms(t%br)+n;return(Ms(t%br)+n).replace(hg,"$1-$2")}var eo,Ns=5381,en=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fs=function(e){return en(Ns,e)};function to(e){return qi(Fs(e)>>>0)}function vg(e){return e.displayName||e.name||"Component"}function no(e){return typeof e=="string"&&!0}var Ls=typeof Symbol=="function"&&Symbol.for,_s=Ls?Symbol.for("react.memo"):60115,pg=Ls?Symbol.for("react.forward_ref"):60112,Ag={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mg=((eo={})[pg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eo[_s]=Hs,eo);function Gs(e){return("type"in(t=e)&&t.type.$$typeof)===_s?Hs:"$$typeof"in e?mg[e.$$typeof]:Ag;var t}var Cg=Object.defineProperty,bg=Object.getOwnPropertyNames,zs=Object.getOwnPropertySymbols,Pg=Object.getOwnPropertyDescriptor,yg=Object.getPrototypeOf,Ws=Object.prototype;function Us(e,t,n){if(typeof t!="string"){if(Ws){var r=yg(t);r&&r!==Ws&&Us(e,r,n)}var i=bg(t);zs&&(i=i.concat(zs(t)));for(var a=Gs(e),o=Gs(t),s=0;s<i.length;++s){var l=i[s];if(!(l in wg||n&&n[l]||o&&l in o||a&&l in a)){var c=Pg(t,l);try{Cg(e,l,c)}catch{}}}}return e}function Et(e){return typeof e=="function"}function ro(e){return typeof e=="object"&&"styledComponentId"in e}function Tt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pr(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function In(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function io(e,t,n){if(n===void 0&&(n=!1),!n&&!In(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=io(e[r],t[r]);else if(In(t))for(var r in t)e[r]=io(e[r],t[r]);return e}function oo(e,t){Object.defineProperty(e,"toString",{value:t})}function Pt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw Pt(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(ji);return n},e}(),yr=new Map,Qr=new Map,xr=1,Ir=function(e){if(yr.has(e))return yr.get(e);for(;Qr.has(xr);)xr++;var t=xr++;return yr.set(e,t),Qr.set(t,e),t},xg=function(e,t){xr=t+1,yr.set(e,t),Qr.set(t,e)},Ig="style[".concat(Xt,"][").concat(Ds,'="').concat(mr,'"]'),kg=new RegExp("^".concat(Xt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sg=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Bg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ji),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(kg);if(l){var c=0|parseInt(l[1],10),g=l[2];c!==0&&(xg(g,c),Sg(e,g,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function Og(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $s=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Xt,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Xt,Os),r.setAttribute(Ds,mr);var o=Og();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Dg=function(){function e(t){this.element=$s(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw Pt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Eg=function(){function e(t){this.element=$s(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Tg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vs=Xi,Rg={isServer:!Xi,useCSSOMInjection:!ug},kr=function(){function e(t,n,r){t===void 0&&(t=qt),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},Rg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xi&&Vs&&(Vs=!1,function(a){for(var o=document.querySelectorAll(Ig),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(Xt)!==Os&&(Bg(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),oo(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",c=function(u){var h=function(Q){return Qr.get(Q)}(u);if(h===void 0)return"continue";var d=a.names.get(h),v=o.getGroup(u);if(d===void 0||v.length===0)return"continue";var w="".concat(Xt,".g").concat(u,'[id="').concat(h,'"]'),A="";d!==void 0&&d.forEach(function(Q){Q.length>0&&(A+="".concat(Q,","))}),l+="".concat(v).concat(w,'{content:"').concat(A,'"}').concat(ji)},g=0;g<s;g++)c(g);return l}(i)})}return e.registerId=function(t){return Ir(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Tg(i):r?new Dg(i):new Eg(i)}(this.options),new Qg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ir(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ir(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ir(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Mg=/&/g,Ng=/^\s*\/\/.*$/gm;function Ks(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ks(n.children,t)),n})}function Fg(e){var t,n,r,i=qt,a=i.options,o=a===void 0?qt:a,s=i.plugins,l=s===void 0?Cr:s,c=function(h,d,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},g=l.slice();g.push(function(h){h.type===fr&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Mg,n).replace(r,c))}),o.prefix&&g.push(lg),g.push(og);var u=function(h,d,v,w){d===void 0&&(d=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=d,r=new RegExp("\\".concat(n,"\\b"),"g");var A=h.replace(Ng,""),Q=rg(v||d?"".concat(v," ").concat(d," { ").concat(A," }"):A);o.namespace&&(Q=Ks(Q,o.namespace));var m=[];return wr(Q,ag(g.concat(sg(function(I){return m.push(I)})))),m};return u.hash=l.length?l.reduce(function(h,d){return d.name||Pt(15),en(h,d.name)},Ns).toString():"",u}var Lg=new kr,ao=Fg(),Ys=Ae.createContext({shouldForwardProp:void 0,styleSheet:Lg,stylis:ao});Ys.Consumer,Ae.createContext(void 0);function so(){return ee(Ys)}var Js=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=ao);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,oo(this,function(){throw Pt(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ao),this.name+t.hash},e}(),_g=function(e){return e>="A"&&e<="Z"};function Zs(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_g(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var js=function(e){return e==null||e===!1||e===""},Xs=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!js(a)&&(Array.isArray(a)&&a.isCss||Et(a)?r.push("".concat(Zs(i),":"),a,";"):In(a)?r.push.apply(r,Kt(Kt(["".concat(i," {")],Xs(a),!1),["}"],!1)):r.push("".concat(Zs(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in cg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yt(e,t,n,r){if(js(e))return[];if(ro(e))return[".".concat(e.styledComponentId)];if(Et(e)){if(!Et(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return yt(i,t,n,r)}var a;return e instanceof Js?n?(e.inject(n,r),[e.getName(r)]):[e]:In(e)?Xs(e):Array.isArray(e)?Array.prototype.concat.apply(Cr,e.map(function(o){return yt(o,t,n,r)})):[e.toString()]}function qs(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Et(n)&&!ro(n))return!1}return!0}var Hg=Fs(mr),Gg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qs(t),this.componentId=n,this.baseHash=en(Hg,n),this.baseStyle=r,kr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Tt(i,this.staticRulesId);else{var a=Pr(yt(this.rules,t,n,r)),o=qi(en(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Tt(i,o),this.staticRulesId=o}else{for(var l=en(this.baseHash,r.hash),c="",g=0;g<this.rules.length;g++){var u=this.rules[g];if(typeof u=="string")c+=u;else if(u){var h=Pr(yt(u,t,n,r));l=en(l,h+g),c+=h}}if(c){var d=qi(l>>>0);n.hasNameForId(this.componentId,d)||n.insertRules(this.componentId,d,r(c,".".concat(d),void 0,this.componentId)),i=Tt(i,d)}}return i},e}(),tn=Ae.createContext(void 0);tn.Consumer;function lo(){var e=ee(tn);if(!e)throw Pt(18);return e}function zg(e){var t=Ae.useContext(tn),n=Y(function(){return function(r,i){if(!r)throw Pt(14);if(Et(r)){var a=r(i);return a}if(Array.isArray(r)||typeof r!="object")throw Pt(8);return i?Ne(Ne({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ae.createElement(tn.Provider,{value:n},e.children):null}var co={};function Wg(e,t,n){var r=ro(e),i=e,a=!no(e),o=t.attrs,s=o===void 0?Cr:o,l=t.componentId,c=l===void 0?function(b,C){var p=typeof b!="string"?"sc":Rs(b);co[p]=(co[p]||0)+1;var P="".concat(p,"-").concat(to(mr+p+co[p]));return C?"".concat(C,"-").concat(P):P}(t.displayName,t.parentComponentId):l,g=t.displayName,u=g===void 0?function(b){return no(b)?"styled.".concat(b):"Styled(".concat(vg(b),")")}(e):g,h=t.displayName&&t.componentId?"".concat(Rs(t.displayName),"-").concat(t.componentId):t.componentId||c,d=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;v=function(b,C){return w(b,C)&&A(b,C)}}else v=w}var Q=new Gg(n,h,r?i.componentStyle:void 0);function m(b,C){return function(p,P,E){var k=p.attrs,y=p.componentStyle,O=p.defaultProps,M=p.foldedComponentIds,S=p.styledComponentId,R=p.target,x=Ae.useContext(tn),B=so(),F=p.shouldForwardProp||B.shouldForwardProp,L=Es(P,x,O)||qt,T=function(J,q,oe){for(var te,fe=Ne(Ne({},q),{className:void 0,theme:oe}),le=0;le<J.length;le+=1){var ce=Et(te=J[le])?te(fe):te;for(var ve in ce)fe[ve]=ve==="className"?Tt(fe[ve],ce[ve]):ve==="style"?Ne(Ne({},fe[ve]),ce[ve]):ce[ve]}return q.className&&(fe.className=Tt(fe.className,q.className)),fe}(k,P,L),H=T.as||R,N={};for(var _ in T)T[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&T.theme===L||(_==="forwardedAs"?N.as=T.forwardedAs:F&&!F(_,H)||(N[_]=T[_]));var W=function(J,q){var oe=so(),te=J.generateAndInjectStyles(q,oe.styleSheet,oe.stylis);return te}(y,T),U=Tt(M,S);return W&&(U+=" "+W),T.className&&(U+=" "+T.className),N[no(H)&&!Ts.has(H)?"class":"className"]=U,N.ref=E,We(H,N)}(I,b,C)}m.displayName=u;var I=Ae.forwardRef(m);return I.attrs=d,I.componentStyle=Q,I.displayName=u,I.shouldForwardProp=v,I.foldedComponentIds=r?Tt(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=h,I.target=r?i.target:e,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(C){for(var p=[],P=1;P<arguments.length;P++)p[P-1]=arguments[P];for(var E=0,k=p;E<k.length;E++)io(C,k[E],!0);return C}({},i.defaultProps,b):b}}),oo(I,function(){return".".concat(I.styledComponentId)}),a&&Us(I,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function el(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var tl=function(e){return Object.assign(e,{isCss:!0})};function $(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Et(e)||In(e))return tl(yt(el(Cr,Kt([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yt(r):tl(yt(el(r,t)))}function uo(e,t,n){if(n===void 0&&(n=qt),!t)throw Pt(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,$.apply(void 0,Kt([i],a,!1)))};return r.attrs=function(i){return uo(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return uo(e,t,Ne(Ne({},n),i))},r}var nl=function(e){return uo(Wg,e)},D=nl;Ts.forEach(function(e){D[e]=nl(e)});var Ug=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=qs(t),kr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(Pr(yt(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&kr.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function $g(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$.apply(void 0,Kt([e],t,!1)),i="sc-global-".concat(to(JSON.stringify(r))),a=new Ug(r,i),o=function(l){var c=so(),g=Ae.useContext(tn),u=Ae.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(u,l,c.styleSheet,g,c.stylis),Ae.useLayoutEffect(function(){if(!c.styleSheet.server)return s(u,l,c.styleSheet,g,c.stylis),function(){return a.removeStyles(u,c.styleSheet)}},[u,l,c.styleSheet,g,c.stylis]),null};function s(l,c,g,u,h){if(a.isStatic)a.renderStyles(l,fg,g,h);else{var d=Ne(Ne({},c),{theme:Es(c,u,o.defaultProps)});a.renderStyles(l,d,g,h)}}return Ae.memo(o)}function we(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Pr($.apply(void 0,Kt([e],t,!1))),i=to(r);return new Js(i,r)}var Vg=0;function f(e,t,n,r,i,a){var o,s,l={};for(s in t)s=="ref"?o=t[s]:l[s]=t[s];var c={type:e,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Vg,__i:-1,__u:0,__source:i,__self:a};if(typeof e=="function"&&(o=e.defaultProps))for(s in o)l[s]===void 0&&(l[s]=o[s]);return K.vnode&&K.vnode(c),c}function rl(e){return f("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",className:e.className,fill:"currentColor",children:f("path",{d:"M20.8302 10.6917L1.22469 0.86203C1.145 0.822186 1.05359 0.812811 0.966873 0.833905C0.767654 0.883124 0.643435 1.08469 0.692654 1.28625L2.71297 9.54094C2.74344 9.66515 2.83484 9.76594 2.95672 9.80578L6.41844 10.9941L2.95906 12.1823C2.83719 12.2245 2.74578 12.323 2.71765 12.4472L0.692654 20.7136C0.67156 20.8003 0.680936 20.8917 0.720779 20.9691C0.812186 21.1542 1.03719 21.2292 1.22469 21.1378L20.8302 11.3644C20.9028 11.3292 20.9614 11.2683 20.9989 11.198C21.0903 11.0105 21.0153 10.7855 20.8302 10.6917ZM3.00359 18.3652L4.1825 13.5464L11.1012 11.1722C11.1552 11.1534 11.1997 11.1112 11.2184 11.055C11.2512 10.9566 11.1997 10.8511 11.1012 10.8159L4.1825 8.44406L3.00828 3.64406L17.727 11.0245L3.00359 18.3652V18.3652Z"})})}function fo(e){const{disabled:t,onClick:n,...r}=e,i=Re(n),[a,o]=Z(!1),s=Re(a),l=Y(()=>typeof t<"u"?t:a,[t,a]),c=j(g=>{var h;if(s.current){g.preventDefault();return}const u=(h=i.current)==null?void 0:h.call(i,g);u instanceof Promise&&(o(!0),u.finally(()=>o(!1)))},[i,s]);return f(Kg,{type:"button",...r,disabled:l,onClick:c})}const Kg=D.button`
    #atlas-chat && {
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 0;
        margin: 0;
        height: 17px;
        width: 15px;
        color: ${e=>e.theme.textFadeColor};
        transform: scale(1);
        transition: transform 0.2s ease;

        &:hover,
        &:focus {
            color: ${e=>e.theme.textColor};
        }

        &:active {
            transform: scale(0.9);
        }

        &[disabled] {
            color: ${e=>e.theme.textSuperFadeColor};
        }
    }
`;function go(e){const{children:t,disabled:n,onSubmit:r,...i}=e,a=j(o=>{n||r==null||r(o)},[n,r]);return f(Yg,{...i,onSubmit:a,children:[t,f(il,{children:f(fo,{type:"submit",disabled:n,children:f(rl,{})})})]})}const il=D.div`
    #atlas-chat && {
        text-align: right;
    }
`,Yg=D.form`
    #atlas-chat && {
        width: 100%;

        & > * {
            margin-top: 19px;
        }

        & > :first-child {
            margin-top: 6px;
        }

        ${il} {
            margin-top: 10px;
        }
    }
`;function Jg(e,t){const{error:n,suffix:r,placeholder:i,...a}=e,[o,s]=Ae.useState(!1),l={...a,onFocus:g=>{var u;(u=a.onFocus)==null||u.call(a,g),s(!0)},onBlur:g=>{var u;(u=a.onBlur)==null||u.call(a,g),s(!!g.target.value)},placeholder:i,...a.multiline&&{as:"textarea"},ref:t,"data-invalid":!!n};return f(Se,{children:[f(jg,{children:[i&&f(ol,{...{$isFocused:o,$cropped:!!r,title:i},children:i}),f(qg,{children:[f(eh,{...l}),r&&f(Sr,{children:r})]})]}),n&&f(Xg,{children:n})]})}const lt=Ae.forwardRef(Jg),Zg=we`
0% {
    opacity: 0;
    transform: scale(1, .8);
}
100% {
    opacity: 1;
    transform: scale(1, 1);
}
`,jg=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`,ol=D.label`
    #atlas-chat && {
        position: relative;
        bottom: -20px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        transition: 0.2s ease-in-out;
        color: ${e=>e.theme.atlasText};
        font-weight: 600;
        font-size: 12px;

        ${e=>e.$isFocused&&$`
                bottom: 0;
                color: ${t=>t.theme.borderActiveColor};
            `}

        ${e=>e.$cropped&&$`
                width: calc(100% - 50px);
            `}
    }
`,Xg=D.div`
    // Three class names are used to override margins of parent block
    #atlas-chat &&& {
        color: ${e=>e.theme.inputErrorColor};
        margin-top: 5px;
        font-size: 13px;
        line-height: 15px;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${Zg} 0.3s ease-in-out
                          forwards;
                  `}
    }
`,qg=D.div`
    #atlas-chat && {
        display: flex;
        width: 100%;
    }
`,Sr=D.div`
    #atlas-chat && {
        border-bottom: ${e=>e.theme.inputBorder};
        font-size: 12px;
        padding-top: 4px;
        color: ${e=>e.theme.textActiveColor};
    }
`,eh=D.input`
    #atlas-chat && {
        width: 100%;
        height: 25px;
        background: transparent;
        border: none;
        border-radius: 0;
        border-bottom: ${e=>e.theme.inputBorder};
        color: inherit;
        padding: 2px 0;
        font-size: 16px; // if input size is 16px, it prevents mobile Safari from zooming in
        line-height: 20px;
        font-family: inherit;

        @media (min-width: 450px) and (min-height: 400px) {
            font-size: 13px;
        }

        &::placeholder {
            color: ${e=>e.theme.textFadeColor};
        }

        &[disabled],
        &[disabled] + ${Sr} {
            color: ${e=>e.theme.textSuperFadeColor};

            &::placeholder {
                color: ${e=>e.theme.textSuperFadeColor};
            }
        }

        &[data-invalid='true'],
        &[data-invalid='true'] + ${Sr} {
            border-color: ${e=>e.theme.inputErrorColor};
        }

        &:focus,
        &:focus + ${Sr} {
            outline: none;
            border-color: ${e=>e.theme.borderActiveColor};
        }

        &::placeholder,
        &::-webkit-input-placeholder {
            color: transparent;
            font-size: 0px; // to prevent wrong height calculation in MultilineTextInput
        }

        &:-ms-input-placeholder {
            color: transparent;
            font-size: 0px; // to prevent wrong height calculation in MultilineTextInput
        }

        &:-moz-placeholder,
        &::-moz-placeholder {
            color: transparent;
            font-size: 0px; // to prevent wrong height calculation in MultilineTextInput
        }
    }
`;function al(e,t){return e?t(e)?e:al(e.parentElement,t):null}function th(e,t){const{onInput:n,onKeyDown:r,suffix:i,...a}=e,[o,s]=Z(null),l=re(o);l.current=o,bi(t,()=>o,[o]);const c=re(n);c.current=n;const g=j(()=>{const d=l.current;!d||!d.scrollHeight||(d.style.height="",d.style.height=`${d.scrollHeight+1}px`)},[l]),u=j(d=>{var v;g(),(v=c.current)==null||v.call(c,d)},[c]);ne(g,[o,e.value]);const h=j(d=>{if(d.key==="Enter"&&!d.shiftKey&&!d.altKey&&!d.metaKey&&!d.ctrlKey){const v=al(d.currentTarget,w=>w.nodeName==="FORM");if(v){const w=new Event("submit",{bubbles:!0,cancelable:!0});v.dispatchEvent(w),d.preventDefault()}}r==null||r(d)},[r]);return f(nh,{...a,onKeyDown:h,ref:s,multiline:!0,onInput:u,suffix:i})}const Br=Ae.forwardRef(th),nh=D(lt)`
    #atlas-chat && {
        max-height: 60px;
        resize: none;
    }
`,sl=["👎","👍"],ll=["😢","🙁","😐","🙂","😄"];function rh({onSubmit:e}){const[t,n]=Z("");return f(go,{onSubmit:i=>{i.preventDefault(),e(t)},disabled:!t.trim(),children:f(Br,{placeholder:"Add your feedback here",maxLength:150,onChange:i=>n(i.currentTarget.value)})})}var Pe=(e=>(e.PENDING="PENDING",e.DONE="DONE",e))(Pe||{});const ih=["csat_question","csat_answer","csat_comment_question","csat_comment","csat_thanks","escalate-to-human"],oh=1e3*60*60*24*7;function ah(e,t){const r=e.messages.filter(i=>!("widget"in i)||!i.widget||!ih.includes(i.widget.id)).concat(t).sort((i,a)=>+new Date(i.sentAt)-+new Date(a.sentAt));return{...e,messages:r,lastMessage:r[r.length-1]}}function sh(e,t,n){var w;if(!("activities"in e)||!((w=e.activities)!=null&&w.length))return[];const r=e.activities.find(A=>A.type===rr.CSAT_QUESTION);if(!r)return[];const i=e.activities.find(A=>A.type===rr.CSAT_RESPONSE),a=i&&typeof i.data.rating_answer=="number"?Bi.YesNo===r.data.rating_style?sl[i.data.rating_answer]:ll[i.data.rating_answer]:void 0,o=r.createdAt,s=i==null?void 0:i.createdAt,l=new Date(`${o}Z`).valueOf(),c=Date.now(),g=l>=c-oh,u=[];(a||t.enableCsat&&n&&new Date(n)<new Date(o)&&g)&&u.push({side:X.BOT,id:"csat_question",conversationId:e.id,sentAt:o,widget:{id:"csat_question",userInput:{},state:a?Pe.DONE:Pe.PENDING,widget:{type:"csat_question",text:r.data.csat_question,ratingStyle:r.data.rating_style}}}),a&&s&&u.push({side:X.BOT,id:"csat_answer",conversationId:e.id,sentAt:s,widget:{id:"csat_answer",userInput:{},state:Pe.DONE,widget:{type:"csat_answer",text:a}}});const h=a&&r.data.comment_question,d=i&&i.data.csat_comment;s&&h&&(d||t.enableCsat&&t.enableComments&&n&&new Date(n)<new Date(s))&&u.push({side:X.BOT,id:"csat_comment_question",conversationId:e.id,sentAt:s+1,widget:{id:"csat_comment_question",userInput:{},state:d?Pe.DONE:Pe.PENDING,widget:{type:"csat_comment_question",text:h}}}),d&&s&&u.push({side:X.BOT,id:"csat_comment",conversationId:e.id,sentAt:s+2,widget:{id:"csat_comment",userInput:{},state:Pe.DONE,widget:{type:"csat_comment",text:d}}});const v=r.data.survey_completed_message;return v&&s&&(d||a&&(!t.enableComments||!t.enableCsat))&&u.push({side:X.BOT,id:"csat_thanks",conversationId:e.id,sentAt:s+3,widget:{id:"csat_thanks",userInput:{},state:Pe.DONE,widget:{type:"csat_thanks",text:v}}}),u}function lh(e){var r;if(!("activities"in e)||!((r=e.activities)!=null&&r.length))return[];const t=e.activities.find(i=>i.type===rr.ESCALATE_TO_HUMAN);if(!t)return[];const n=[];return n.push({side:X.BOT,id:"escalate-to-human",sentAt:t.createdAt,conversationId:(e==null?void 0:e.id)??"",widget:{id:"escalate-to-human",userInput:{},state:Pe.PENDING,widget:{type:"system_notification",text:"Your conversation has been escalated to a human."}}}),n}function kn(e,t,n){const r=[],i=!e||!e.status||e.status==Ke.OPEN||e.status==Ke.SNOOZED||!!t.allowChatInClosedTicket,a=e&&("closedAt"in e&&e.closedAt||"updatedAt"in e&&e.updatedAt)||new Date().toISOString().slice(0,-1);return!i&&a&&r.push({side:X.BOT,id:"closing",sentAt:a,conversationId:(e==null?void 0:e.id)??"",widget:{id:"closing-ticket",userInput:{},state:Pe.DONE,widget:{type:"system_notification",text:"Your conversation has ended."}}}),e.chatbotKey===Wf&&r.push(...lh(e)),r.push(...sh(e,n,a)),ah(e,r)}class cl{constructor(){this.getCustomerConversations=async t=>{var n;return(n=await Be.get(`/api/client-app/conversations/${t}`,null,{errorLabel:"Failed to load conversations"}))==null?void 0:n.data},this.updateTicketFields=async(t,n,r)=>{await Be.post(`/api/client-app/ticket/${t}/update_custom_fields`,{customFields:r,conversationId:n},{errorLabel:"Failed to update ticket custom fields"})}}}function ch(e,t,n,r){const[i,a]=Z(()=>ho(t.map(b=>kn(b,n,r)))),o=(b=!1)=>{new cl().getCustomerConversations(e.atlasId).then(C=>{C&&a(p=>{const P=b?[]:p.filter(k=>C.every(y=>y.id!==k.id)),E=ho(C.concat(P).map(k=>kn(k,n,r)));return P.length&&o(!0),E})})},s=b=>{a(C=>ho(b(C)))},l=b=>s(C=>{const{conversationId:p}=b,P=C.findIndex(E=>E.id===p);return P===-1?[...C,{id:p,status:Ke.OPEN,messages:[b],lastMessage:b,assignedAgent:null,closedAt:null}]:[...C.slice(0,P),{...C[P],lastMessage:b,messages:[...C[P].messages,b]},...C.slice(P+1)]}),c=b=>s(C=>{const p=C.findIndex(k=>k.id===b.conversationId);if(!C[p])return C;const P=(()=>{const k=C[p].messages.findIndex(M=>"fingerprintId"in b&&"fingerprintId"in M?b.fingerprintId===M.fingerprintId:M.id===b.id);if(k!==-1)return k;const y=new Date(b.sentAt).getTime();return C[p].messages.findIndex(M=>new Date(M.sentAt).getTime()>y)})(),E=P===-1?[...C[p].messages,b]:[...C[p].messages.slice(0,P),{...b,sentAt:C[p].messages[P].sentAt},...C[p].messages.slice(P+1)];return P===-1&&(C[p].lastMessage=E[E.length-1]),[...C.slice(0,p),kn({...C[p],messages:E},n,r),...C.slice(p+1)]}),g=b=>{s(C=>[...C,kn(b,n,r)])},u=b=>{s(C=>{const p=C.findIndex(P=>P.id===b.id);return b=kn(b,n,r),p===-1?[...C,b]:[...C.slice(0,p),b,...C.slice(p+1)]})},h=b=>{s(C=>{const p=C.findIndex(k=>k.id===b);let P=!1;const E=C[p].messages.map(k=>(k.side===X.AGENT&&!k.read&&(P=!0,k.read=!0),k));return P?[...C.slice(0,p),{...C[p],messages:E},...C.slice(p+1)]:C})},[d,v]=Y(()=>{const b=i.reduce((C,p)=>(p.messages.filter(E=>E.side===X.AGENT&&!E.read).length?C.unread.push(p):C.read.push(p),C),{read:[],unread:[]});return[b.read,b.unread]},[i]);return{conversations:i,readConversations:d,unreadConversations:v,addMessage:l,updateMessage:c,addConversation:g,updateConversation:u,markRead:h,setTypingAgent:(b,C)=>{s(p=>{const P=p.findIndex(E=>E.id===b);return[...p.slice(0,P),{...p[P],agentTyping:C},...p.slice(P+1)]})},setTypingBot:(b,C)=>{s(p=>{const P=p.findIndex(E=>E.id===b);return[...p.slice(0,P),{...p[P],botTyping:C},...p.slice(P+1)]})},getOpenConversations:()=>i.filter(C=>C.status===Ke.OPEN||C.status===Ke.SNOOZED),deleteConversation:b=>{s(C=>C.filter(p=>p.id!=b))},containsConversation:b=>i.some(C=>C.id===b),reload:o}}function ho(e){return[...e].sort((t,n)=>t.lastMessage?n.lastMessage?t.lastMessage.sentAt===n.lastMessage.sentAt?0:new Date(t.lastMessage.sentAt)>new Date(n.lastMessage.sentAt)?-1:1:1:-1)}function uh(e,t){const[n,r]=Z([{},{}]),i=j(s=>{r(l=>[typeof s=="function"?s(l[0]):s,l[1]])},[r]),a=j(s=>{r(l=>[l[0],typeof s=="function"?s(l[1]):s])},[r]);return[Y(()=>{const s=Object.assign({},e,n[0],t,n[1]);return!Object.keys(pe).includes(s.chatPosition)&&fh(s.chatPosition)&&(s.alwaysOn=!0),s},[e,t,n]),i,a]}function fh(e){try{return!!document.querySelector(e)}catch{return!1}}function dh(){return Be.get("/v1/",{api_key:Yf,fields:"ip_address,city,region_iso_code,country_code"},{base:"https://ipgeolocation.abstractapi.com",errorLabel:"Can not receive requestor details"})}async function ul(){const e=ht.read(Or);if(e&&!hh(e))return[e,!1];const t=await dh();if(!t)return[null,!1];const{city:n,region_iso_code:r,country_code:i,ip_address:a}=t,s={location:[n,i==="US"?r:null,i].filter(Boolean).join(", "),ipAddress:a,recordedAt:Date.now()};return ht.write(Or,s),[s,!0]}const Or="atlasLocation",gh=864e5;function hh(e){return typeof(e==null?void 0:e.recordedAt)!="number"||Date.now()-e.recordedAt>gh}const fl=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function vh(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r}function ph(e){var t=re(e);t.current=e;var n=j(function(){for(var r,i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];return(r=t.current)===null||r===void 0?void 0:r.call.apply(r,vh([t],i))},[]);return t.current&&n}const Sn=typeof window<"u"?window:void 0,vo=Sn||globalThis;vo._atlas=vo._atlas||{};const dl=vo._atlas,pt=dl.CONSTANTS||{},Bn={AUTH0_DOMAIN:pt.AUTH0_DOMAIN,AUTH0_API_AUDIENCE:pt.AUTH0_API_AUDIENCE,AUTH0_SPA_CLIENT_ID:pt.AUTH0_SPA_CLIENT_ID,WS_PROTOCOL:pt.WS_PROTOCOL,DEMO_ACCOUNTS:pt.DEMO_ACCOUNTS,STRIPE_PAYMENT_LINK:pt.STRIPE_PAYMENT_LINK,ANALYTIC_PROVIDERS:pt.ANALYTIC_PROVIDERS,ENABLED_ANALYTIC_PROVIDERS:pt.ENABLED_ANALYTIC_PROVIDERS,SHOPIFY_INSTALLATION_URL:pt.SHOPIFY_INSTALLATION_URL,FILE_PICKER_API_KEY:"AsyAkZKX5QaueSd7BCjgnz",FILE_PICKER_CDN:"https://cdn.fs.atlas.so",FILE_UPLOADS_CDN:"https://files.atlas.so",SUPPORT_EMAIL:"support@getatlas.io",CSRF_TOKEN:dl.csrfToken},gl={};function Ah(e){const t=gl[e];if(t)return t;const n=new Promise((r,i)=>{const a=document.createElement("script");a.src=e,a.onload=()=>r(),a.onerror=()=>i(new Error(`Error loading script: ${e}`)),document.head.appendChild(a)});return gl[e]=n,n}async function wh(e={}){if(Dr)return Dr;const{useAtlasCname:t=!0,scriptSrc:n,apiKey:r=Bn.FILE_PICKER_API_KEY}=e,a=n||`//static.${t?"fs.atlas.so":"filestackapi.com"}/filestack-js/3.x.x/filestack.min.js`,o=t?{cname:"fs.atlas.so"}:{};if(await Ah(a),!Sn||Sn&&!Sn.filestack)throw new Error("FileStack is not initialized");return Dr=Promise.resolve(Sn.filestack.init(r,o)),Dr}const mh={fromSources:["local_file_system","url"]};let Dr=null;function po(e){const{container:t,filename:n,handle:r,key:i,size:a}=e,o=bh(encodeURIComponent(i)),s=t===Ch?`${Bn.FILE_UPLOADS_CDN}/${o}`:`https://${t}.s3.amazonaws.com/${o}`;return{name:n,handle:r,size:a,url:s}}const Ch="atlas-prod-uploads";function bh(e){return["'","(",")"].reduce((n,r)=>n.replace(new RegExp(`\\${r}`,"g"),`%${r.charCodeAt(0).toString(16)}`),e||"")}async function hl(e,t={}){try{t={...mh,...t};const n=await Ao(e);return new Promise((r,i)=>{t.onUploadDone=async a=>{a.filesFailed.length&&i(new Error("Uploading file failed")),r(a.filesUploaded.map(po))},t.onCancel=()=>r([]),t.onFileUploadFailed=()=>i(new Error("Uploading file failed")),t.container||(t.container="#atlas-chat"),n.picker(t).open()})}catch(n){return console.warn("Error uploading files",n),[]}}function Ao(e){return wh({useAtlasCname:!1,scriptSrc:"https://files.atlas.so/filestack.min.js",apiKey:e})}function Er(e){return!!e}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var wo,vl;function Ph(){if(vl)return wo;vl=1;var e=/["'&<>]/;wo=t;function t(n){var r=""+n,i=e.exec(r);if(!i)return r;var a,o="",s=0,l=0;for(s=i.index;s<r.length;s++){switch(r.charCodeAt(s)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}l!==s&&(o+=r.substring(l,s)),l=s+1,o+=a}return l!==s?o+r.substring(l,s):o}return wo}var yh=Ph();const Qh=Ze(yh);function xh({handle:e,url:t},n){const r=e??t;if(!r)return"";if(!n)return t??`${Bn.FILE_PICKER_CDN}/${e}`;const i=e?"":Bn.FILE_PICKER_API_KEY,a=n.output==="auto"?"auto_image":n.output?`output=format:${n.output}`:"",o="resize="+Object.entries(n.resize).filter(([c,g])=>Er(g)).map(([c,g])=>`${c}:${g}`).join(","),s=[i,a,o,r].filter(Er);return new URL(s.join("/"),Bn.FILE_PICKER_CDN).href}function Ih(e,t){let n=!1;return e.url&&(n=Er(e.url.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/i))),xh(e,{output:n?"auto":"jpg",resize:{height:t,fit:"clip"}})}const kh=()=>f("svg",{width:"9",height:"9",viewBox:"0 0 9 9",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:f("path",{fillRule:"evenodd","clip-rule":"evenodd",d:"M8.1128 6.69858C8.50332 7.08911 8.50332 7.72227 8.1128 8.1128C7.72228 8.50332 7.08911 8.50332 6.69859 8.1128L4.20285 5.61706L1.70711 8.1128C1.31658 8.50332 0.683417 8.50332 0.292893 8.1128C-0.0976312 7.72228 -0.097631 7.08911 0.292893 6.69859L2.78864 4.20285L0.292893 1.70711C-0.097631 1.31658 -0.0976312 0.683418 0.292893 0.292893C0.683417 -0.097631 1.31658 -0.097631 1.70711 0.292893L4.20285 2.78863L6.69859 0.292897C7.08911 -0.0976275 7.72228 -0.0976272 8.1128 0.292897C8.50332 0.683422 8.50332 1.31659 8.1128 1.70711L5.61706 4.20285L8.1128 6.69858Z"})}),Sh=e=>{var t;return(t=e.match(Bh))==null?void 0:t[1]},Bh=/\.([a-zA-Z0-9]+)$/;function Oh(e){return typeof e=="number"?`${e/10}rem`:typeof e=="string"?e.match(/^\d+(\.\d+)?$/)?`${parseFloat(e)/10}rem`:e:e??void 0}const Dh=Ae.memo(Ae.forwardRef(function(t,n){const{size:r,color:i,background:a,...o}=t;return f(Eh,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",fill:"currentColor",$size:r,$color:i,$background:a,...o,ref:n})})),Eh=D.svg`
    --icon-size: ${e=>typeof e.$size>"u"?"1.692em":Oh(e.$size)};

    width: var(--icon-size);
    height: var(--icon-size);

    color: ${e=>(e.$color&&(e.theme.color[e.$color]||e.$color))??"inherit"};
    background: ${e=>(e.$background&&(e.theme.color[e.$background]||e.$background))??"transparent"};

    line-height: 1;
    vertical-align: middle;
`,Th=Ae.memo(function(t){return f(Dh,{"aria-label":"Empty File",...t,children:f("path",{d:"M18.3605 6.20039L13.7371 1.57695C13.6082 1.44805 13.4342 1.375 13.2516 1.375H4.125C3.74473 1.375 3.4375 1.68223 3.4375 2.0625V19.9375C3.4375 20.3178 3.74473 20.625 4.125 20.625H17.875C18.2553 20.625 18.5625 20.3178 18.5625 19.9375V6.68809C18.5625 6.50547 18.4895 6.3293 18.3605 6.20039ZM16.977 7.00391H12.9336V2.96055L16.977 7.00391ZM17.0156 19.0781H4.98438V2.92188H11.4727V7.5625C11.4727 7.80182 11.5677 8.03133 11.7369 8.20055C11.9062 8.36978 12.1357 8.46484 12.375 8.46484H17.0156V19.0781Z"})})}),pl=10;function Rh(e){const{attachment:t,onRemove:n,size:r=100,...i}=e,[a,o]=Z(!1),s=!t.handle||a,l=Y(()=>Sh(t.url),[]),c=j(g=>{g.preventDefault(),g.stopPropagation(),n==null||n()},[n]);return f(Lh,{...i,title:typeof e.title<"u"?e.title:t.name,$missing:s,$size:r,children:[n&&f(Nh,{type:"button",onClick:c,children:f(kh,{})}),s?f(Fh,{children:l||f(Th,{})}):f(Mh,{loading:"lazy",src:Ih(t,100),alt:t.name,onError:()=>o(!0)})]})}const Mh=D.img`
    #atlas-chat && {
        border-radius: inherit;
        height: 100%;
        object-fit: cover;
        object-position: left;
    }
`,Nh=D.button`
    #atlas-chat && {
        box-sizing: border-box;
        background: ${e=>e.theme.attachmentRemoveButtonBackground};
        width: 22px;
        height: 22px;
        border: 2px solid ${e=>e.theme.backgroundColor};
        border-radius: 50%;
        position: absolute;
        top: -11px;
        right: -11px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        cursor: pointer;
    }
`,Fh=D.span`
    #atlas-chat && {
        display: inline-block;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${e=>e.theme.attachmentText};
        font-size: 30px;
        line-height: inherit;
    }
`,Lh=D.div`
    #atlas-chat && {
        position: relative;
        overflow: visible;
        border-radius: 8px;
        display: inline-block;
        line-height: 1;
        height: ${e=>e.$size}px;
        box-sizing: border-box;
        vertical-align: bottom;
        border: ${e=>e.theme.inputBorder};
        line-height: ${e=>e.$size-pl*2}px;

        ${e=>e.$missing?$`
                      width: ${e.$size}px;
                      text-align: center;
                      background: ${t=>t.theme.backgroundColor};
                      padding: ${pl}px;
                  `:""}
    }
`,_h=Ae.memo(function(t){const{horizontalFit:n,verticalFit:r,...i}=t;return n||r?f(zh,{$verticalFit:r,$horizontalFit:n,children:f(wl,{...i,version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:f(Al,{})})}):f(wl,{...i,version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:f(Al,{})})}),Hh=we`
	0% {transform: rotate(0deg); }
	100% {transform: rotate(360deg); }
`,Gh=we`
    0% {
        stroke-dasharray: 7,42;
        stroke-dashoffset: 0;
        stroke: #0000FF;
    }
    50% {
        stroke-dasharray: 21,8;
        stroke-dashoffset: -4;
        stroke: #A056FF;
    }
    100% {
        stroke-dasharray: 21,42;
        stroke-dashoffset: -35;
        stroke: #0000FF;
    }
`,Al=D.circle`
    cx: 7px;
    cy: 7px;
    r: 5px;
    transform-origin: center;
    animation: ${Gh} 2s ease infinite,
        ${Hh} 2s linear infinite;
`,wl=D.svg`
    fill: transparent;
    /*stroke: #49BDE4;*/
    stroke-width: 2px;
    width: 14px;
    height: 14px;
`,zh=D.div`
    display: flex;

    ${({$horizontalFit:e})=>e&&"width: 100%; justify-content: center;"};
    ${({$verticalFit:e})=>e&&"height: 100%; align-items: center;"};
`;function mo(e){const{attachments:t,onRemove:n,size:r,uploading:i,...a}=e;return!(t!=null&&t.length)&&!i?null:f(Uh,{...a,$removable:!!n,children:[t!=null&&t.length?t.map(o=>f(Wh,{href:o.url,target:"_blank",title:o.name,children:f(Rh,{attachment:o,onRemove:n&&(()=>n(o)),size:r})},o.url)):null,i&&i>0?f($h,{children:[f(_h,{}),f("span",{children:`${i} ${i>1?"files are":"file is"} uploading`})]}):null]})}const Wh=D.a`
    #atlas-chat && {
        color: ${e=>e.theme.attachmentText};
        display: inline-block;
    }
`,Uh=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: ${e=>e.$removable?"13px":"5px"};
        padding-top: ${e=>e.$removable?"9px":0};
        padding-right: ${e=>e.$removable?"8px":0};
    }
`,$h=D.span`
    #atlas-chat && {
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }
`;function ml(e){return f("svg",{viewBox:"0 0 20 22",xmlns:"http://www.w3.org/2000/svg",className:e.className,fill:"currentColor",children:f("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.841 4.252a2.25 2.25 0 0 0-3.182 0l-7.425 7.424a3.75 3.75 0 1 0 5.304 5.304l6.46-6.46a.75.75 0 1 1 1.06 1.06l-6.46 6.46a5.25 5.25 0 1 1-7.424-7.424l7.424-7.425a3.75 3.75 0 0 1 5.304 5.303l-7.618 7.618a2.25 2.25 0 0 1-3.182-3.182l6.653-6.653a.75.75 0 0 1 1.061 1.06L7.163 13.99a.75.75 0 0 0 1.06 1.061l7.618-7.617a2.25 2.25 0 0 0 0-3.182Z"})})}function Co(e,t){const n=re(),r=Y(()=>n.current=e(n.current),t),i=Z(r)[1],a=j(o=>{const s=o instanceof Function?o(n.current):o;n.current=s,i(s)},[i]);return[n.current,a]}const Tr=.1,Vh=.1;function Kh(e,t){const{attachments:n,onPickAttachments:r,onRemoveAttachment:i,uploadingAttachments:a,value:o,onInput:s,onSubmit:l,disabled:c,...g}=e,[u,h]=Z(!1),d=Re(u),[v,w]=Co(()=>!!(o!=null&&o.trim()||n!=null&&n.length),[o,n,a]),A=re(o);A.current=o;const Q=j(b=>{typeof A.current>"u"&&w(()=>!!(b.currentTarget.value.trim()||n!=null&&n.length)),s==null||s(b)},[s,w,A]),m=j(async b=>{if(b.preventDefault(),!d.current&&v&&l&&!a){h(!0);try{const C=Date.now();await l();const p=(Tr+Vh)*1e3-(Date.now()-C);p>0&&await new Promise(P=>setTimeout(P,p))}catch(C){console.error(C)}h(!1)}},[v,l,h]),I=j(b=>{b.key==="Enter"&&(b.shiftKey||b.shiftKey||b.ctrlKey||b.altKey||m(b))},[m]);return f(nv,{"aria-label":"atlas-composer",...g,onKeyDown:I,children:[f(ev,{children:[f(Zh,{children:f(Jh,{ref:t,placeholder:"Write a message...",value:u?void 0:o,onInput:Q,$submitting:u,disabled:c})}),f(qh,{children:[r&&f(fo,{onClick:r,disabled:c,title:"Attach files by clicking or dropping files here",children:f(Xh,{})}),l&&f(fo,{type:"submit",onClick:m,disabled:u||!v||c||!!a,children:f(jh,{})})]})]}),f(tv,{attachments:n,onRemove:i,uploading:a,size:80})]})}const Yh=Ae.forwardRef(Kh),Cl=$`
    #atlas-chat && {
        display: inline-block;
        vertical-align: top;
    }
`,Jh=D(Br)`
    #atlas-chat && {
        max-height: 90px;
        margin: 0;
        border: none;

        transition: opacity ${Tr}s ease;
        translate: 0px 0px;
        opacity: 1;

        ${e=>e.$submitting?$`
                      transition: translate ${Tr}s ease,
                          opacity ${Tr}s ease;
                      translate: 2% -100%;
                      opacity: 0;
                      caret-color: transparent;
                  `:""}

        &::placeholder,
        &::-webkit-input-placeholder {
            color: ${e=>e.theme.textFadeColor};
            font-size: revert;
        }

        &:-ms-input-placeholder {
            color: ${e=>e.theme.textFadeColor};
            font-size: revert;
        }

        &:-moz-placeholder,
        &::-moz-placeholder {
            color: ${e=>e.theme.textFadeColor};
            font-size: revert;
        }
    }
`,Zh=D.div`
    #atlas-chat && {
        display: flex;
        align-items: center;
        flex: 1 0 auto;

        ${ol} {
            display: none;
        }
    }
`,jh=D(rl)`
    ${Cl}
`,Xh=D(ml)`
    ${Cl}
`,qh=D.div`
    #atlas-chat && {
        height: 37px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        & > * {
            margin-left: 10px; // Because gap doesn't work in Android 5
        }
    }
`,ev=D.div`
    #atlas-chat && {
        display: flex;
    }
`,tv=D(mo)`
    #atlas-chat && {
        flex-direction: row;
        overflow: auto;

        & > * {
            flex: 0 0 auto;
        }
    }
`,nv=D.div`
    #atlas-chat && {
        position: relative;
    }
`;function bl(e){return f(rv,{type:"button",...e})}const rv=D.button`
    #atlas-chat && {
        background-color: transparent;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 0;
        height: 22px;
        width: 22px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: ${e=>e.theme.headerButtonBackground};
        }

        svg {
            transform: scale(1) translateX(0px);
            transition: transform 0.2s ease;
        }

        &:active svg {
            transform: scale(0.7);
        }
    }
`;function iv(e){return f(ov,{id:"atlas-back-button","aria-label":"atlas-back-button",type:"button",...e,children:f("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:f("path",{d:"M6.87224 0.745469C7.22467 1.11855 7.22499 1.70175 6.87296 2.07521L3.17341 6L6.87296 9.92479C7.22499 10.2982 7.22467 10.8815 6.87224 11.2545C6.48996 11.6592 5.84607 11.6592 5.46379 11.2545L1.14871 6.68671C0.784622 6.30129 0.784622 5.69871 1.14871 5.31329L5.4638 0.745468C5.84607 0.340798 6.48996 0.340799 6.87224 0.745469Z"})})})}const ov=D(bl)`
    #atlas-chat && {
        &:active svg {
            transform: scale(0.7) translateX(-3px);
        }
    }
`;function av(e){return f(bl,{type:"button",...e,children:f("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:f("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.7061 6.70694C17.0965 6.31632 17.0964 5.68316 16.7057 5.29273C16.3151 4.90229 15.682 4.90244 15.2915 5.29306L10.9994 9.58723L6.70728 5.29306C6.31685 4.90244 5.68369 4.90229 5.29307 5.29273C4.90245 5.68316 4.9023 6.31632 5.29273 6.70694L9.58553 11.0018L5.29273 15.2966C4.90229 15.6872 4.90244 16.3204 5.29306 16.7108C5.68368 17.1013 6.31684 17.1011 6.70727 16.7105L10.9994 12.4163L15.2915 16.7105C15.682 17.1011 16.3151 17.1013 16.7058 16.7108C17.0964 16.3204 17.0965 15.6872 16.7061 15.2966L12.4133 11.0018L16.7061 6.70694Z"})},"close-icon")})}const sv=.2;function Pl(e){const{label:t,pulse:n,...r}=e;return f(cv,{...r,$pulse:n,children:t})}const lv=we`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
`,cv=D.div`
    #atlas-chat && {
        font-size: 12px;
        line-height: 16px;
        background: ${e=>e.theme.highlightColor};
        color: ${e=>e.theme.highlightReverseColor};
        text-align: center;
        border-radius: 10px;
        height: 20px;
        min-width: 20px;
        box-sizing: border-box;
        display: inline-block;
        padding: 2px 4px;

        ${e=>e.$pulse?$`
                      animation: ${lv} 1s ease-in-out infinite;
                      animation-delay: ${sv}s;
                  `:""}
    }
`;function yl(e){const{unread:t,pulse:n,...r}=e,i=Y(()=>t>9?"9+":t,[t]);return f(uv,{...r,children:f(Pl,{label:i,pulse:n})})}const uv=D.div`
    #atlas-chat && {
        display: inline-block;
        width: 20px;
        height: 20px;
    }
`,fv=12,bo=8,dv=8,Ql=20;function Po(e){const{children:t,onBack:n,onClose:r,forceCloseVisibility:i,centered:a,unread:o,extension:s,...l}=e,c=!!((n||r)&&a),g=!!(o&&a);return f(wv,{...l,$withBack:!!n,children:[f(xl,{children:[(n||c)&&f(hv,{onClick:n,style:{visibility:n?void 0:"hidden"}}),!!o&&f(yo,{pulse:!0,unread:o??0}),f(Av,{$centered:a,children:t}),g&&f(yo,{$invisible:!0,unread:0}),(r||c)&&f(mv,{onClick:r,$requirePresence:a,$requireVisibility:!!i,$invisible:!r})]}),s&&f(xl,{children:s})]})}const gv=we`
    0% {
        translate: -${Ql}px 0px;
    }
    100% {
        translate: 0;
    }
`,hv=D(iv)`
    #atlas-chat && {
        ${e=>e.theme.noAnimation?"":$`
                      translate: -${Ql}px 0px;
                      animation: ${gv} 0.3s ease
                          forwards;
                  `}
    }
`,vv=we`
    0% {
        margin-left: -28px;
        opacity: 0;
        transform: scale(0.9);
    }

    80% {
        transform: scale(1.1);
    }

    100% {
        margin-left: 0;
        opacity: 1;
        transform: scale(1);
    }
`,yo=D(yl)`
    #atlas-chat && {
        flex: 0 0 20px;
        visibility: ${e=>e.$invisible?"hidden":"visible"};

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${vv} 0.2s ease forwards;
                  `}
    }
`,pv=we`
  0% {
    opacity: 0.3;
    translate: ${dv}px 0px;
  }
  100% {
    opacity: 1;
    translate: 0px 0px;
  }
`,xl=D.div`
    #atlas-chat && {
        display: flex;
        align-items: center;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${pv} 0.3s ease
                          forwards;
                  `}

        & > * {
            margin-left: ${bo}px; // Because gap doesn't work in Android 5
        }

        & > :first-child {
            margin-left: 0;
        }

        & + & {
            margin-left: ${bo}px; // Because gap doesn't work in Android 5
        }

        ${yo} > * {
            vertical-align: top; // Fix for Android 5
        }
    }
`,Av=D.div`
    #atlas-chat && {
        flex: 1;
        justify-content: ${e=>e.$centered?"center":"flex-start"};
        text-align: ${e=>e.$centered?"center":"left"};

        display: flex;
        align-items: center;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 8px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
`,wv=D.div`
    #atlas-chat && {
        padding: ${fv}px
            ${e=>(e.$withBack?1:2)*bo}px;
        background: ${e=>e.theme.brandColor};
        color: ${e=>e.theme.brandTextColor};
        font-size: 16px;
        line-height: 24px;
        z-index: 1;
        border-bottom: ${e=>e.theme.border};
        position: relative;

        svg {
            fill: ${e=>e.theme.brandTextColor};
        }
    }
`,mv=D(av)`
    #atlas-chat && {
        @media (min-width: 450px) and (min-height: 400px) {
            ${e=>e.$requireVisibility?$`
                          visibility: visible;
                      `:t=>t.$requirePresence?$`
                                    visibility: hidden;
                                `:$`
                                    display: none;
                                `}
        }

        ${e=>e.$invisible&&$`
                opacity: 0;
            `}
    }
`,Cv=.3;function bv(e){const{src:t,onLoad:n,...r}=e,[i,a]=Z(!1),o=j(l=>{l&&a(l.complete)},[]),s=j(l=>{a(!0),n==null||n(l)},[n]);return We(Pv,{...r,key:t,ref:o,src:t,onLoad:s,$loaded:i})}const Pv=D.img`
    #atlas-chat && {
        opacity: ${e=>e.$loaded?1:0};
        transition: opacity ${Cv}s ease;
    }
`,Qo={chatScreenOffsetXY:[18,18],chatBubbleMorph:0,customBotEmoji:"",noAnimation:!1,isDarkTextSelected:!0,isDark:!1,colorScheme:"light",brandColor:"#4b2f3a",brandTextColor:"#fff",backgroundColor:"#fff",tileBackground:"#fff",avatarBackgroundColor:"#f0f0f0",backgroundFadeColor:"#f0f0f0",backgroundNotificationColor:"#fbf9f6",skeletonBackground:"#f6f4ee",menuHoverBackground:"#ebe9e3",borderDarkColor:"#777",textColor:"#262626",avatarTextColor:"#262626",textFadeColor:"#767676",sectionTitleText:"#767676",textActiveColor:"#a4a4a4",disabledHeaderTextColor:"#a4a4a4",disabledHeaderLightTextColor:"#33333399",placeholderHeaderTextColor:"#ffffff99",placeholderHeaderLightTextColor:"#00000099",atlasText:"#a4a4a4",textSuperFadeColor:"#ebe9e3",highlightColor:"#f73c3c",highlightReverseColor:"#fff",shadowColor:"#cccccc",previewShadowColor:"#ededed",articleQuoteBorder:"#dcdcdc",articleCalloutBackground:"#f3f2ef",articleCalloutText:"#657b83",articleCalloutIconBackground:"#dedacc",articleCalloutBorder:"#dcdcdc",articleCodeBackground:"#fdf6e3",articleCodeText:"#657b83",articleHorizontalLine:"#cccccc",articleLeafCodeBackground:"#dddddd",articleLeafCodeText:"#ec5b5c",articleLeafLinkText:"#2942ee",articleTableBorder:"#d3d3d3",attachmentRemoveButtonBackground:"#a4a4a4",attachmentText:"#1890ff",userStatusBackground:"#16d18e",userStatusBorder:"ffffff",messagePreBackground:"#fdf6e3",messagePreText:"#657b83",messageCodeBackground:"#fdf6e3",messageCodeText:"#657b83",messageQuoteBorder:"#cccccc",messageMentionText:"#4c48f3",messageUnreadBadgeColor:"#ff0000",messageButtonColor:"#4c48f3",typingDotDownColor:"#a4a4a4",typingDotUpColor:"#747474",inputCheckboxBackground:"#0d6efd",inputCheckboxBorder:"#0d6efd",inputCheckboxFocusBorder:"#18043d",inputErrorColor:"#ff0000",headerButtonBackground:"rgba(255, 255, 255, 0.18)",buttonFocusBackground:"linear-gradient(180deg, rgba(4, 2, 12, 0.12) 0%, rgba(24, 4, 61, 0.12) 85.94%)",border:"1px solid #ebe9e3",inputBorder:"1px solid #ece8db",borderActiveColor:"#747474",separator:"1px solid #ebe9e3",dropZoneIconBackground:"#e0e0ff80",dropZoneIconColor:"#2942ee",dropZoneText:"#262626",dropZoneBorder:"4px dashed #e0e0ff",dropZoneBackground:"#ffffffe5",conversationsTitleWeight:600},xo=Object.assign({},Qo,{isDark:!0,colorScheme:"dark",brandColor:"linear-gradient(180deg, #04020C 0%,#18043D 86%)",brandTextColor:"#ffffff",tileBackground:"#27292a",backgroundColor:"#202122",avatarBackgroundColor:"#fbf9f6",backgroundFadeColor:"#27292A",backgroundNotificationColor:"#27292a",menuHoverBackground:"#27292a",textColor:"#f8f8f8",avatarTextColor:"#747474",textFadeColor:"#b9b9b9",sectionTitleText:"#f8f8f8",textActiveColor:"#515253",textSuperFadeColor:"#1b1c1d",shadowColor:"#111111",previewShadowColor:"#ededed00",articleQuoteBorder:"#313435",articleCalloutBackground:"#202122",articleCalloutText:"#e5e5e5",articleCalloutIconBackground:"#202122",articleCalloutBorder:"#202122",articleCodeBackground:"#313435",articleCodeText:"#e5e5e5",messagePreBackground:"#46443e",messagePreText:"#f8fdff",messageCodeBackground:"#46443e",messageCodeText:"#f8fdff",messageQuoteText:"#aaaaaa",messageMentionText:"#c6ccf3",border:"0px solid transparent",inputBorder:"1px solid #27292A",borderActiveColor:"#f8f8f8",separator:"1px solid #27292A",dropZoneIconBackground:"#97a6ef66",dropZoneIconColor:"#97a6ef",dropZoneText:"#e5e5e5",dropZoneBorder:"4px dashed #97a6ef",dropZoneBackground:"#262626cc",conversationsTitleWeight:400});function yv(e){const{children:t,inheritFont:n,...r}=e,i=Y(()=>window.matchMedia("(prefers-color-scheme: dark)"),[]),[a,o]=Co(()=>r.colorScheme==="dark"||r.colorScheme==="auto"&&i.matches?xo:Qo,[r.colorScheme]);ne(()=>{if(r.colorScheme!=="auto")return;const l=c=>{o(c.matches?xo:Qo)};return i.addEventListener("change",l),()=>i.removeEventListener("change",l)},[r.colorScheme]);const s=Y(()=>{const l=Object.entries(r).filter(c=>typeof c[1]<"u").reduce((c,[g,u])=>{if(Qv.includes(g)){const h=`${g}${a.isDark?Iv:xv}`,d=r[h];if(typeof d<"u")return Object.assign(c,{[g]:d})}return Object.assign(c,{[g]:u})},{isDarkTextSelected:r.brandTextColor!==a.textColor});return{...a,...l}},[a,r]);return f(zg,{theme:s,children:[f(kv,{inheritFont:n}),t]})}const Qv=["brandColor","brandTextColor"],xv="Light",Iv="Dark",kv=$g`
    #atlas-chat {
        &.atlas-chat-embedded {
            flex: 1; // For embedding the chat widget in flex-box
            height: 100%;
        }

        *:where(
                :not(iframe, canvas, img, svg, video, ul, ol, li, u, s, .fsp-picker-holder):not(
                        svg *,
                        symbol *,
                        .article-view *,
                        .fsp-picker-holder *
                    )
            ) {
            all: unset;
            display: revert;
            font-size: 13px;
            ${e=>!e.inheritFont&&$`
                    font-family: Inter, -apple-system, helvetica, ubuntu, roboto,
                        'segoe ui', arial, sans-serif;
                `};
        }

        /* Preferred box-sizing value */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        /* Reapply the pointer cursor for anchor tags */
        a {
            cursor: revert;
        }

        ol,
        ul {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }

        /* For images to not be able to exceed their container */
        img {
            max-width: 100%;
        }

        /* removes spacing between cells in tables */
        table {
            border-collapse: collapse;
        }

        /* revert the 'white-space' property for textarea elements on Safari */
        textarea {
            white-space: revert;
            color: ${e=>e.theme.textColor};
        }

        /* fix the feature of 'hidden' attribute.
        display:revert; revert to element instead of attribute */
        :where([hidden]) {
            display: none;
        }

        /* revert for bug in Chromium browsers
        - fix for the content editable attribute will work properly. */
        :where([contenteditable='true']) {
            -moz-user-modify: read-write;
            -webkit-user-modify: read-write;
            overflow-wrap: break-word;
            word-break: break-word;
            word-wrap: break-word;
            -webkit-line-break: after-white-space;
        }

        /* apply back the draggable feature - exist only in Chromium and Safari */
        :where([draggable='true']) {
            -webkit-user-drag: element;
        }

        @media print {
            display: none;
        }
    }
`;function Rr(e){const{name:t,src:n,bot:r,children:i,online:a,...o}=e;return f(Dv,{title:t,...o,$bot:r,$online:a,children:i||r||(n?f(Bv,{src:n,alt:t}):Sv(t))})}function Sv(e){return(e==null?void 0:e.split(" ").map(t=>t[0]).slice(0,2).filter(Boolean).join(""))||"?"}const Bv=D(bv)`
    #atlas-chat && {
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
`,Ov=e=>we`
    0% {
        background-color: transparent;
    }
    100% {
        background-color: ${e};
    }
`,Dv=D.div`
    #atlas-chat && {
        width: 32px;
        height: 32px;
        position: relative;
        border-radius: 50%;
        color: ${e=>e.theme.avatarTextColor};
        font-size: 16px;
        line-height: 24px;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        ${e=>e.theme.noAnimation?$`
                      background-color: ${e.theme.avatarBackgroundColor};
                  `:$`
                      background-color: transparent;
                      animation: ${Ov(e.theme.avatarBackgroundColor)}
                          0.5s ease forwards;
                  `}

        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            border: 1px solid ${e=>e.theme.userStatusBorder};
            border-radius: 50%;
            background-color: ${e=>e.theme.userStatusBackground};
            bottom: 0;
            right: 0;

            transition: opacity 0.2s ease;
            opacity: ${e=>e.$online?1:0};
        }

        ${e=>e.$bot?e.theme.customBotEmoji?$`
                          background: url('${e.theme.customBotEmoji}') center
                              no-repeat;
                          background-size: 100% 100%;
                      `:$`
                          &::before {
                              content: '🤖';
                          }
                      `:""}
    }
`;function Ev(e){return f("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:[f("g",{"clip-path":"url(#clip0_2371_47436)",children:f("path",{fillRule:"evenodd","clip-rule":"evenodd",d:"M11 11.25C13.0711 11.25 14.75 9.57107 14.75 7.5C14.75 5.42893 13.0711 3.75 11 3.75C8.92893 3.75 7.25 5.42893 7.25 7.5C7.25 9.57107 8.92893 11.25 11 11.25ZM16.5 7.5C16.5 9.32183 15.6142 10.9368 14.2498 11.9376C17.0486 13.1834 19 15.9888 19 19.25H17.25C17.25 15.7982 14.4518 13 11 13C7.54822 13 4.75 15.7982 4.75 19.25H3C3 15.9888 4.95136 13.1834 7.75017 11.9376C6.38578 10.9368 5.5 9.32183 5.5 7.5C5.5 4.46243 7.96243 2 11 2C14.0376 2 16.5 4.46243 16.5 7.5ZM3.58152 22.25C4.76829 25.1818 7.64262 27.25 11 27.25C14.3574 27.25 17.2317 25.1818 18.4185 22.25H16.4843C15.4225 24.1868 13.3646 25.5 11 25.5C8.63539 25.5 6.57748 24.1868 5.51574 22.25H3.58152Z"})}),f("defs",{children:f("clipPath",{id:"clip0_2371_47436",children:f("rect",{width:"22",height:"22",rx:"4"})})})]})}function Mr(e){const{message:t,hideStatus:n,...r}=e,{onlineAgents:i}=ee(Io);return t.side===2?f(Rr,{"aria-label":"atlas-message-author-avatar",...r,name:[t.agent.firstName,t.agent.lastName].filter(Boolean).join(" "),src:t.agent.profileUrl,online:!n&&i.includes(t.agent.id)}):t.side===3?f(Rr,{"aria-label":"atlas-message-author-avatar",...r,bot:!0}):f(Rr,{"aria-label":"atlas-message-author-avatar",...r,name:"You",children:f(Ev,{})})}function Tv(e){const t=Y(()=>[e.agentMessage.agent.firstName,e.agentMessage.agent.lastName].filter(Boolean).join(" ")||"Agent",[e.agentMessage]);return f(Se,{children:[f(Mv,{children:f(Mr,{message:e.agentMessage})}),f(Rv,{children:["Chatting with ",t]})]})}const Rv=D.div`
    #atlas-chat && {
        font-weight: 600;
        margin-top: 8px;
        margin-bottom: 8px;
    }
`,Mv=D.div`
    #atlas-chat && {
        width: 32px;
        height: 32px;
    }
`,Il=()=>({onlineAgents:[],backwards:!1}),Io=Ae.createContext(Il());function Nv(e){const{children:t,...n}=e,r=Object.entries(n),i=Y(()=>r.filter(a=>typeof a[1]<"u").reduce((a,[o,s])=>Object.assign(a,{[o]:s}),Il()),r);return f(Io.Provider,{value:i,children:t})}function kl(e){const{...t}=e;return f(Fv,{...t,children:["Powered by"," ",f(Lv,{href:"https://atlas.so",target:"_blank",children:"Atlas"})]})}const Fv=D.div`
    #atlas-chat && {
        font-size: 12px;
        color: ${e=>e.theme.atlasText};
    }
`,Lv=D.a`
    #atlas-chat && {
        font-size: inherit;
        color: inherit;
        text-decoration: underline;
    }
`;function _v(){return f(Hv,{children:[f("div",{}),f("div",{}),f("div",{}),f("div",{})]})}const Hv=D.div`
    #atlas-chat && {
        color: inherit;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 40px;

        & div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 32px;
            height: 32px;
            margin: 4px;
            border: 4px solid currentColor;
            border-radius: 50%;
            animation: loading-anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: currentColor transparent transparent transparent;
        }
        & div:nth-child(1) {
            animation-delay: -0.45s;
        }
        & div:nth-child(2) {
            animation-delay: -0.3s;
        }
        & div:nth-child(3) {
            animation-delay: -0.15s;
        }

        @keyframes loading-anim {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;function Gv(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 36 28",fill:"currentColor",children:[f("rect",{x:"1",width:"34",height:"28",rx:"2",stroke:"currentColor","stroke-width":"6",fill:"none"}),f("circle",{cx:"15.5",cy:"9",r:"3"}),f("path",{d:"M3 21L6.6993 17.5473C8.23612 16.1129 10.621 16.1129 12.1578 17.5473L12.8676 18.2098C14.5079 19.7407 17.0863 19.6233 18.5807 17.9496L23.6294 12.295C25.2049 10.5305 27.9592 10.5112 29.5593 12.2535L33 16",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",fill:"none"})]})}function zv({showDropZone:e}){return e?f(Wv,{children:e!=null&&e.isLoading?f(_v,{}):f($v,{children:[f(Uv,{children:f(Gv,{})}),f(Vv,{children:"Drop file to attach"})]})}):null}const Wv=D.div`
    #atlas-chat && {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        border: ${e=>e.theme.dropZoneBorder};
        background: ${e=>e.theme.dropZoneBackground};
        color: ${e=>e.theme.dropZoneIconColor};
        border-radius: 0 0 14px 14px;
        padding-top: 160px;
    }
`,Uv=D.div`
    #atlas-chat && {
        display: flex;
        align-items: center;
        padding: 24px 22px;
        border-radius: 100%;
        background-color: ${e=>e.theme.dropZoneIconBackground};
        color: ${e=>e.theme.dropZoneIconColor};
    }
`,$v=D.div`
    #atlas-chat && {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
    }
`,Vv=D.span`
    #atlas-chat && {
        color: ${e=>e.theme.dropZoneText};
        font-weight: 600;
        font-size: 16px;
    }
`,ko=.3,Kv="10px",Yv="16px",Sl=50,Bl={},Ol=Ae.createContext({...Bl,setState:()=>{}});function Jv(e){const{children:t,contentRef:n,bottom:r,bottomFlex:i,noBottomScroll:a,noScroll:o,showAtlasCredentials:s,showDropZone:l,...c}=e,{backwards:g}=ee(Io);return f(ip,{...c,children:[f(zv,{showDropZone:l}),f(qv,{$backwards:g,$scroll:!o,ref:n,tabIndex:-1,children:t}),typeof r<"u"&&r!==null&&f(ep,{$scroll:typeof a=="boolean"?!a:!o,children:f(np,{$flex:i,children:r})}),s&&f(rp,{})]})}function Zv(e){const[t,n]=Z(Bl),r=Y(()=>({...t,setState:n}),[t]);return f(Ol.Provider,{value:r,children:f(Jv,{...e,...typeof t.noBottomScroll=="boolean"&&t})})}const jv=we`
    0% {
        translate: ${Sl}px 0px;
        opacity: 0.5;
    }
    100% {
        translate: 0px 0px;
        opacity: 1;
    }
`,Xv=we`
    0% {
        translate: -${Sl}px 0px;
        opacity: 0.5;
    }
    100% {
        translate: 0px 0px;
        opacity: 1;
    }
`,qv=D.div`
    #atlas-chat && {
        flex: 1 1 200px;
        overflow: ${e=>e.$scroll?"auto":"visible"};

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${e.$backwards?Xv:jv}
                          ${ko}s ease forwards;
                      animation-delay: 0.1s;
                  `}
    }
`,ep=D.div`
    #atlas-chat && {
        overflow: ${e=>e.$scroll?"auto":"visible"};
        min-height: 58px;
    }
`,tp=we`
  0% {
    transform: translate(0px, 50%);
    opacity: 0.2;
  }
  100% {
    transform: translate(0px, 0%);
    opacity: 1;
  }
`,np=D.div`
    #atlas-chat && {
        border-top: ${e=>e.theme.separator};
        padding: ${Kv} ${Yv};

        ${e=>e.$flex?$`
                      display: flex;
                      justify-content: ${e.$flex};
                  `:""}

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${tp} ${ko}s
                          ease forwards;
                      animation-delay: 0.1s;
                  `}
    }
`,rp=D(kl)`
    #atlas-chat && {
        background-color: ${e=>e.theme.backgroundNotificationColor};
        text-align: center;
        padding: 8px 0;
    }
`,ip=D.div`
    #atlas-chat && {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: ${e=>e.theme.backgroundColor};
        color: ${e=>e.theme.textColor};
        padding-bottom: env(safe-area-inset-bottom);
        position: relative;
    }
`;function On({onSend:e,defaultValue:t,noFiles:n,onInput:r=()=>{}}){const[i,a]=Z(!1),[o,s]=Z(t||""),[l,c]=Z(0),[g,u]=Z(0),{attachments:h,setAttachments:d,attachmentsMax:v,setIsDropActive:w}=ee(he);ne(()=>{i||s(t||"")},[t]);const A=re(null),{settings:Q,routing:{currentView:m}}=ee(he),[I]=Z(m);ne(()=>{m===I||fl||setTimeout(()=>{var S;return(S=A.current)==null?void 0:S.focus()},ko)},[m,I,A,fl]);const b=async()=>{var R;const S=Qh(o.trim());!S&&h.length===0||(r==null||r(""),await e(S,h),s(""),d([]),c(l+1),(R=A.current)==null||R.focus())},C=j(S=>{i||a(!0),s(S.currentTarget.value),r==null||r(S.currentTarget.value)},[r]),[p,P]=Z(!1),[E,k]=Z(!1),y=Y(()=>op||n||E||v===0?void 0:()=>(P(!0),hl(Q.uploaderApiKey,{maxFiles:Dl-h.length}).then(S=>d(R=>[...R,...S])).catch(()=>{k(!0)}).finally(()=>{P(!1)})),[n,E,h.length]),O=j(S=>{d(R=>R.includes(S)?R.filter(x=>x!==S):R)},[]);ne(()=>(w(!0),()=>w(!1)),[]);const M=ph(S=>{var x;const R=Array.from((x=S.clipboardData)==null?void 0:x.items).map(B=>B.getAsFile()).filter(Er);R.length&&(S.preventDefault(),u(B=>B+R.length),R.forEach(B=>{Ao(Q.uploaderApiKey).then(F=>F.upload(B,{}).then(po).then(L=>{d(T=>T.concat(L))})).finally(()=>u(F=>F-1))}))});return f(Yh,{ref:A,attachments:h,onPickAttachments:y,uploadingAttachments:g,onRemoveAttachment:O,value:o,onSubmit:b,onInput:C,disabled:p,onPaste:M})}const Dl=10,op="atlasIsInEs5Mode"in window&&!!window.atlasIsInEs5Mode,he=mi({}),ap=({children:e,identity:t,wsUrl:n,conversations:r,onConversationsChange:i,systemSettings:a,userSettings:o,csatSettings:s,atlas:l,privateActionHandlers:c})=>{const[g,u,h]=uh(a,o),d=re({}),v=ch(t,r,g,s),w=Re(v),A=Re(i);ne(()=>{var G;return(G=A.current)==null?void 0:G.call(A,v.conversations)},[v.conversations,A]);const Q=re(null),m=re(null),[I,b]=Z([]),[C,p]=Z([]),P=Y(()=>Dl-C.length,[C.length]),[E,k]=Z(!1),y=re({}),O=G=>{const V=g.onNewAgentMessage;if(!V)return;const ue={id:G.id,conversationId:G.conversationId,text:G.text,sentAt:G.sentAt,attachments:G.attachments};setTimeout(V,0,ue)},M=j(G=>{oe.current?oe.current.push(G):G(d.current)},[]),S=re(),R=j(G=>{var V;return(V=S.current)==null?void 0:V.call(S,G)},[S]),x=v.readConversations,B=v.unreadConversations,F=v.getOpenConversations(),L=()=>h(G=>({...G,hideBubble:!1})),T=()=>h(G=>({...G,hideBubble:!0})),H=Ld({settings:g,conversations:v.conversations,openConversations:F,unreadConversations:B,whenSocketReady:M,focusParkingRef:Q,widgetElementRef:m});ne(()=>{g.alwaysOn&&H.ensureOpened()},[g.alwaysOn]);const N=Re(g.onWindowVisibilityChange);ne(()=>{var G;return(G=N.current)==null?void 0:G.call(N,H.opened)},[H.opened]);const{currentView:_}=H,W=Re(H.currentView),U=G=>{if(!H.opened||_[0]!=="conversation"||G!==_[1]||!(document.hasFocus()||g.chatPosition===pe.FULL_SCREEN))return;const ue=v.conversations.find(Oe=>Oe.id===G);if(!(ue==null?void 0:ue.messages.some(Oe=>Oe.side===X.AGENT&&!Oe.read)))return;v.markRead(G);const $e={channel_id:t.atlasId,channel_kind:"CUSTOMER",packet_type:"MESSAGE_READ",payload:{conversation_id:G}};te($e)},J=Re(U);ne(()=>{const G=()=>{const V=W.current;V[0]==="conversation"&&J.current(V[1])};return window.addEventListener("focus",G),()=>window.removeEventListener("focus",G)},[]);const q=Re(v.conversations);ne(()=>{_[0]!=="conversation"||!q.current.find(V=>V.id===_[1])||J.current(_[1])},[_]);const oe=re([]),te=Ud({wsUrl:n,routing:H,agentTypingTimeout:y.current,setOnlineAgents:b,newAgentMessageCallback:O,identity:t,conversationsState:v,markReadIfOpenedAndFocused:U,triggersLoaded:R,onCustomerSwitched:c.onCustomerSwitched,onReceive:()=>{var G;(G=oe.current)==null||G.forEach(V=>V(d.current)),oe.current=null},onNewTicket:G=>{l.triggerCallback("onNewTicket",{ticketId:G})},onNewChatbotTicket:(G,V)=>{l.triggerCallback("onChatStart",{ticketId:G,chatbotKey:V}),l.triggerCallback("onNewChatbotTicket",{ticketId:G,chatbotKey:V})},onConnectionClose:()=>{oe.current=oe.current||[]},socketStateRef:d}),fe=Nd(t.atlasId,te);S.current=fe.triggersLoaded,ne(()=>{var V,ue;const G=[];for(const de of r)if(!(!de.lastMessage||de.status!==Ke.OPEN)&&"widget"in de.lastMessage&&((V=de.lastMessage.widget)==null?void 0:V.widget.type)==="delay"){let $e=0;de.lastMessage.widget.widget.value&&de.lastMessage.widget.widget.units&&($e=ke.utc(de.lastMessage.sentAt).add(de.lastMessage.widget.widget.value,de.lastMessage.widget.widget.units).diff(ke().utc(),"seconds")),G.push({continueAfter:$e>0?$e:0,stepId:de.lastMessage.id}),(ue=S.current)==null||ue.call(S,G)}},[]);const le=async(G,V,ue,de={})=>{const $e=es(),Oe=new Date,nt=!v.containsConversation(G);nt&&l.recording.dispatchNewDialogue(G);const ft=ht.read(Or),Je={pageUrl:window.location.href,pageTitle:document.title,location:ft==null?void 0:ft.location,ipAddress:ft==null?void 0:ft.ipAddress,userAgent:window.navigator.userAgent};let rt;de.resend&&de.resendMeta?rt=de.resendMeta:(rt={id:void 0,fingerprintId:$e,text:V,sentAt:Oe.toISOString().slice(0,-1),conversationId:G,side:X.CUSTOMER,type:de.messageType||Ot.EXTERNAL,attachments:ue},w.current.addMessage(rt));try{const ha={customerId:t.atlasId,text:rt.text,conversation_id:rt.conversationId,attachments:rt.attachments,messageType:rt.type,fingerprintId:rt.fingerprintId,customerMeta:Je,...(de==null?void 0:de.customFields)&&{customFields:de.customFields}};if(!await Be.post("/api/client-app/messages/send",ha,{errorLabel:"Failed to send message"}))throw new Error("Failed to send message")}catch(ha){w.current.updateMessage({...rt,sendFailed:!0}),console.error(`Failed to send message '${V}' from ${t.atlasId}. Reason: ${ha}`)}return nt&&(l.triggerCallback("onChatStart",{ticketId:G}),l.triggerCallback("onNewTicket",{ticketId:G})),G},ce=G=>{const V={channel_id:t.atlasId,channel_kind:"CUSTOMER",packet_type:"CUSTOMER_TYPING",payload:{conversation_id:G}};te(V)},[ve,Ee]=Z(!1),Ye=()=>Ee(G=>!G);ne(()=>{ve&&_[0]!=="article"&&Ee(!1)},[ve,_]);const ut=(G,V,ue)=>{const de={channel_id:t.atlasId,channel_kind:"CUSTOMER",packet_type:"CSAT_RATING",payload:{conversation_id:G,rating_value:V,rating_style:ue}};te(de)},Ht=(G,V)=>{const ue={channel_id:t.atlasId,channel_kind:"CUSTOMER",packet_type:"CSAT_COMMENT",payload:{conversation_id:G,comment:V}};te(ue)},Gt=j((G,...V)=>l.triggerCallback(G,...V),[l]),ci=j(G=>{var V;return((V=q.current.find(ue=>!!("originId"in ue&&ue.originId&&ue.id===G)))==null?void 0:V.originId)||G},[q]),{visibilityMode:gn,visibilityList:St}=g,hn=j(G=>{if(fe.update(),G&&h(Oe=>({...Oe,...G})),gn==="always")return u(Oe=>{if("hideBubble"in Oe){const{...nt}=Oe;return delete nt.hideBubble,nt}return Oe});const V=window.location.href,ue=window.location.origin,de=St.some(Oe=>{const ft="^"+(Oe.startsWith("/")?ue:"")+Oe.split("*").map(Je=>Je.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")).join(".*")+"$";return new RegExp(ft).test(V)}),$e=gn==="showWhenNotMatching"?de:!de;return u(Oe=>({...Oe,hideBubble:$e}))},[gn,St]);ne(hn,[hn]);const ui={conversations:v.conversations,mapOriginConversationId:ci,sendMessage:le,routing:H,customer:t,onlineAgents:I,settings:g,csatSettings:s,readConversations:x,unreadConversations:B,sendCsatRatingMessage:ut,sendCsatCommentMessage:Ht,sendCustomerTypingMessage:ce,attachments:C,setAttachments:p,attachmentsMax:P,expanded:ve,toggleExpand:Ye,isDropActive:E,setIsDropActive:k,widgetInteraction:(G,V,ue)=>{const de={channel_id:t.atlasId,channel_kind:"CUSTOMER",packet_type:"CHATBOT_WIDGET_INTERACTION",payload:{conversation_id:G,message_id:V,data:ue}};te(de)},focusParkingRef:Q,widgetElementRef:m,triggerAtlasCallback:Gt,showBubble:L,hideBubble:T,update:hn};return f(he.Provider,{value:ui,children:e})},At=.2,sp=12;function lp(e,t){const{morph:n,label:r,size:i,opened:a,message:o,hasMenu:s,icon:l,iconDark:c,...g}=e,u=lo(),[h,d]=Co(()=>!!a,[a]),v=re(e.onClick);v.current=e.onClick;const w=typeof a>"u",A=j(P=>{var E;w&&d(k=>!k),(E=v.current)==null||E.call(v,P)},[w,v]),Q=!!o,m=re(null),I=j(()=>{if(!m.current)return;if(h||Q){m.current.style.maxWidth="0px";return}m.current.style.maxWidth="none";const P=`${m.current.offsetWidth+1}px`;m.current.style.maxWidth=P},[h,Q]);ne(()=>{I()},[r,i,I]),ne(()=>{var P;(P=document.fonts)!=null&&P.ready&&document.fonts.ready.then(I)},[]);const b=Y(()=>i&&i>=9&&i<=30?Math.round(i):sp,[i]),C=Y(()=>Math.round(b/3),[b]),p=u.isDark?c:l;return f(vp,{ref:t,type:"button",...g,onClick:A,$hasMessage:Q,$opened:h,$baseSize:C,$fontSize:b,$customIcon:!!p&&!h,"data-morph":r?0:n||u.chatBubbleMorph,"data-label":r||void 0,children:[h?f(ct,{className:"close-icon",width:"22",height:"22",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:f("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.7061 6.70694C17.0965 6.31632 17.0964 5.68316 16.7057 5.29273C16.3151 4.90229 15.682 4.90244 15.2915 5.29306L10.9994 9.58723L6.70728 5.29306C6.31685 4.90244 5.68369 4.90229 5.29307 5.29273C4.90245 5.68316 4.9023 6.31632 5.29273 6.70694L9.58553 11.0018L5.29273 15.2966C4.90229 15.6872 4.90244 16.3204 5.29306 16.7108C5.68368 17.1013 6.31684 17.1011 6.70727 16.7105L10.9994 12.4163L15.2915 16.7105C15.682 17.1011 16.3151 17.1013 16.7058 16.7108C17.0964 16.3204 17.0965 15.6872 16.7061 15.2966L12.4133 11.0018L16.7061 6.70694Z"})},"close-icon"):o?f(So,{message:o,hideStatus:!0,$baseSize:C}):s?p?f(ct,{as:"img",src:p}):f(ct,{width:"22",height:"22",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:f("path",{style:{translate:"23% 9%"},d:"M6.84244 12.8545C6.81857 12.6159 6.81857 12.5204 6.81857 12.4011C6.81857 11.4704 7.1288 10.6113 7.86857 10.1102L8.9663 9.37042C10.3504 8.43974 11.4004 7.12724 11.4004 5.21815C11.4004 2.78407 9.51516 0.42157 6.17425 0.42157C2.49925 0.42157 0.900391 3.11816 0.900391 5.31361C0.900391 5.49987 0.909365 5.67716 0.927315 5.84548C0.96656 6.2135 1.29874 6.45906 1.66885 6.45906H2.55944C2.94295 6.45906 3.20522 6.073 3.19304 5.68969C3.19189 5.6535 3.1913 5.61571 3.1913 5.57611C3.1913 4.0727 4.09812 2.52157 6.17425 2.52157C8.08334 2.52157 9.01403 3.83406 9.01403 5.24202C9.01403 6.1727 8.56062 7.03179 7.74925 7.58065L6.69925 8.29656C5.2913 9.2511 4.71857 10.4443 4.71857 12.0193C4.71857 12.3295 4.71857 12.5681 4.74244 12.8545H6.84244ZM4.21744 16.267C4.21744 17.1261 4.90948 17.8181 5.76857 17.8181C6.62766 17.8181 7.34357 17.1261 7.34357 16.267C7.34357 15.4079 6.62766 14.692 5.76857 14.692C4.90948 14.692 4.21744 15.4079 4.21744 16.267Z"})},"open-menu-icon"):p?f(ct,{as:"img",src:p}):f(Dn,{as:"span"},"open-messages-icon"),r&&f(Rl,{ref:m,children:r})]})}const cp=wn(lp),up=we`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`,So=D(Mr)`
    #atlas-chat && {
        width: ${e=>e.$baseSize*12}px;
        height: ${e=>e.$baseSize*12}px;
        position: relative;
        border-radius: inherit;
    }
`,El=we`
    0% {
        opacity: 0;
        transform: scale(.2) rotate(-180deg);
    }

    100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
`,fp=we`
    0% {
        opacity: 0;
        transform: scale(.2) rotate(180deg);
    }

    100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
`,Tl=we`
    0% {
        opacity: 0;
        transform: rotate(-120deg) scale(0.2);
    }

    80% {
        opacity: 1;
        transform: rotate(15deg) scale(1.1);
    }

    100% {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
`,dp=we`
    0% {
        opacity: 0;
        transform: scale(0.2);
    }

    80% {
        opacity: 1;
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`,gp=we`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    to {
        background-position: 0 50%;
    }
`,hp=we`
    0% {
        border-radius: 51% 49% 34% 66% / 39% 66% 34% 61%;
    }
    10% {
        border-radius: 39% 61% 38% 62% / 53% 54% 46% 47%;
    }
    20% {
        border-radius: 56% 44% 52% 48% / 57% 35% 65% 43%;
    }
    30% {
        border-radius: 41% 59% 45% 55% / 33% 56% 44% 67%;
    }
    40% {
        border-radius: 46% 54% 60% 40% / 55% 74% 26% 45%;
    }
    50% {
        border-radius: 44% 56% 22% 78% / 31% 74% 26% 69%;
    }
    60% {
        border-radius: 31% 69% 32% 68% / 31% 71% 29% 69%;
    }
    70% {
        border-radius: 44% 56% 60% 40% / 63% 36% 64% 37%;
    }
    80% {
        border-radius: 46% 54% 38% 62% / 44% 48% 52% 56%;
    }
    90% {
        border-radius: 66% 34% 57% 43% / 49% 51% 49% 51%;
    }
    100% {
        border-radius: 51% 49% 34% 66% / 39% 66% 34% 61%;
    }
`,Rl=D.span`
    #atlas-chat && {
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        max-width: 0px;
        transition: max-width ${At*.71}s ease-out;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;

        /* font-family: 'Roboto', sans-serif; */

        &::before,
        &::after {
            content: '';
            display: inline-block;
            width: 4px;
        }
    }
`,ct=D.svg`
    #atlas-chat && {
        display: inline-block;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${El} ${At}s ease forwards;

                      &.close-icon {
                          animation: ${fp} ${At}s
                              ease forwards;
                      }
                  `}
    }
`,Dn=D(ct)`
    #atlas-chat && {
        border-radius: 50%;
        background: ${e=>e.theme.brandTextColor};
        width: 16px;
        height: 16px;
        position: relative;

        &::after {
            content: '';
            background: ${e=>e.theme.brandTextColor};
            width: 50%;
            height: 50%;
            position: absolute;
            bottom: 0;
            right: 0;
        }

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${El} ${At}s ease forwards;
                  `}
    }
`,vp=D.button`
    #atlas-chat && {
        max-width: 100%;
        border: 0;
        cursor: pointer;

        display: inline-flex;
        justify-content: center;
        align-items: center;

        background: ${e=>e.theme.brandColor};
        color: ${e=>e.theme.brandTextColor};

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${Tl} ${At}s ease
                          forwards;
                  `}

        transition: transform 0.1s ease-out, border-radius 0.1s ease-out;
        transform: scale(1);

        &[data-label] {
            ${e=>e.theme.noAnimation?"":$`
                          opacity: 0;
                          animation: ${dp}
                              ${At}s ease forwards;
                      `}
        }

        &:focus {
            outline: none;
        }

        ${Dn} {
            transition: scale 0.2s ease-out;
        }

        &:hover ${ct}, &:hover ${Dn} {
            scale: 1.3; // Using scale instead of transform to prevent style conflicts
        }

        ${So}, ${ct}, ${Dn} {
            flex-shrink: 0;
        }

        ${ct} {
            transform: scale(1);
            opacity: 1;
            transition: transform 0.1s ease-out, opacity 0.1s ease-out,
                scale 0.2s ease-out;
        }

        &:active {
            transform: scale(0.95);

            ${e=>e.$customIcon?"":$`
                          ${ct} {
                              transform: scale(0.7);
                              opacity: 0.9;
                          }
                      `}
        }

        &[data-morph='1'] {
            border-radius: 51% 49% 34% 66% / 39% 66% 34% 61%;
        }

        &[data-morph='2'] {
            border-radius: 39% 61% 38% 62% / 53% 54% 46% 47%;
        }

        &[data-morph='3'] {
            border-radius: 56% 44% 52% 48% / 57% 35% 65% 43%;
        }

        &[data-morph='4'] {
            border-radius: 41% 59% 45% 55% / 33% 56% 44% 67%;
        }

        &[data-morph='5'] {
            border-radius: 46% 54% 60% 40% / 55% 74% 26% 45%;
        }

        &[data-morph='6'] {
            border-radius: 44% 56% 22% 78% / 31% 74% 26% 69%;
        }

        &[data-morph='7'] {
            border-radius: 31% 69% 32% 68% / 31% 71% 29% 69%;
        }

        &[data-morph='8'] {
            border-radius: 44% 56% 60% 40% / 63% 36% 64% 37%;
        }

        &[data-morph='9'] {
            border-radius: 46% 54% 38% 62% / 44% 48% 52% 56%;
        }

        &[data-morph='10'] {
            border-radius: 66% 34% 57% 43% / 49% 51% 49% 51%;
        }

        &[data-morph='11'] {
            border-radius: 51% 49% 34% 66% / 39% 66% 34% 61%;
        }

        &[data-morph='12'] {
            background-size: 1000%;
            background-repeat: repeat;

            ${e=>e.theme.noAnimation?"":$`
                          opacity: 0;
                          animation: ${Tl} ${At}s ease
                                  forwards,
                              ${gp} ${At*100}s linear
                                  infinite forwards,
                              ${hp} ${At*50}s linear
                                  infinite forwards;
                      `}
        }

        ${e=>e.$hasMessage&&!e.$opened?$`
                      &::before {
                          content: '';
                          position: absolute;
                          width: 12px;
                          height: 12px;
                          border-radius: 50%;
                          background-color: ${t=>t.theme.messageUnreadBadgeColor};
                          top: 0;
                          right: 0;
                          animation: ${up} 1s ease-in-out infinite;
                          z-index: 1;
                      }
                  `:""}

        /* Dynamic sizing */

        min-width: ${e=>e.$baseSize*12}px;
        height: ${e=>e.$baseSize*12}px;
        border-radius: ${e=>e.$baseSize*6}px;
        box-shadow: 0px 4px 28px 6px rgba(38, 38, 38, 0.08);

        padding: ${e=>e.$baseSize*(e.$customIcon?1.5:3)}px;

        ${Rl} {
            font-size: ${e=>e.$fontSize}px;

            &::before {
                width: ${e=>e.$baseSize*2}px;
            }

            &::after {
                width: ${e=>e.$baseSize*(e.$customIcon?3:1)}px;
            }
        }

        ${ct} {
            width: ${e=>e.$baseSize*(e.$customIcon?7:5.5)}px;
            height: ${e=>e.$baseSize*(e.$customIcon?7:5.5)}px;
        }

        ${Dn} {
            width: ${e=>e.$baseSize*4}px;
            height: ${e=>e.$baseSize*4}px;
        }

        ${So} {
            width: ${e=>e.$baseSize*12}px;
            height: ${e=>e.$baseSize*12}px;
            margin: 0px -${e=>e.$baseSize*3}px;
        }
    }
`;function pp({className:e,onBlur:t},n){var g;const{unreadConversations:r,routing:i,settings:a}=ee(he),o=Re(i),s=j(()=>o.current.opened?o.current.close():o.current.open(),[]),l=((g=r[0])==null?void 0:g.lastMessage)||void 0,c=a.chatBubbleStyle===Yn.WITH_LABEL?a.chatLabel||"Chat with us":void 0;return f(cp,{id:"atlas-launcher","aria-label":"atlas-launcher",ref:n,className:e,onClick:s,onBlur:t,opened:i.opened,message:l,hasMenu:a.enableHelpMenu,label:c,size:a.chatLabelSize,icon:a.launcherIcon,iconDark:a.launcherIconDark})}const Ap=wn(pp),Ml=e=>e.reduce((t,n)=>Object.assign(t,{[n.id]:n.messages}),{});function Nl(e){const t=re();t.current=e;const{conversations:n}=ee(he),[r]=Z(()=>Ml(n)),i=re(r);ne(()=>{const a=Ml(n),o=Object.entries(a).reduce((s,[l,c])=>{var g;return s.concat(c.slice(((g=i.current[l])==null?void 0:g.length)||0))},[]);i.current=a,o.length&&t.current&&t.current(o)},[n])}const wp="data:audio/wav;base64,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",Bo=window.Audio&&new window.Audio(new URL(wp,fi&&fi.tagName.toUpperCase()==="SCRIPT"&&fi.src||new URL("atlas.bundle.js",document.baseURI).href).href);function mp(){Bo==null||Bo.play().catch(e=>{console.info("Notification sound is muted, reason:",e)})}const Cp="keydown";function En(e,t){const n=Re(e);ne(()=>{const r=a=>{if(!(!t.prevented&&a.defaultPrevented)&&a.key===t.key&&a.altKey===!!t.altKey&&a.ctrlKey===!!t.ctrlKey&&a.metaKey===!!t.metaKey&&a.shiftKey===!!t.shiftKey)if(t.targetRef){if(!t.targetRef.current)return;if(a.target instanceof HTMLElement){let o=a.target;for(;o!==null;){if(o===t.targetRef.current){n.current(a),t.prevent&&a.preventDefault();return}o=o.parentElement}}}else n.current(a),t.prevent&&a.preventDefault()},i=t.type||Cp;return window.addEventListener(i,r),()=>window.removeEventListener(i,r)},[t.key,t.altKey,t.ctrlKey,t.metaKey,t.shiftKey,t.prevent,t.targetRef])}function Fl(e){const{icon:t,label:n,badge:r,...i}=e;return f(Pp,{type:"button",...i,children:[t&&f(bp,{children:t})," ",n," ",r&&f(yp,{label:r})]})}const bp=D.span`
    #atlas-chat && {
        margin-right: 5px;
        font-size: 16px;
    }
`,Pp=D.button`
    #atlas-chat && {
        border: none;
        border-radius: 5px;
        background: transparent;
        box-shadow: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: ${e=>e.theme.textColor};
        text-align: left;
        width: 100%;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 6px 8px;

        &:hover,
        &:focus-visible {
            background: ${e=>e.theme.menuHoverBackground};
        }
    }
`,yp=D(Pl)`
    #atlas-chat && {
        margin-left: 1em;
        float: right;
    }
`;function Qp(e){const{items:t,onClose:n,requireCloseVisibility:r,showAtlasCredentials:i,...a}=e;return f(Ip,{...a,$requireCloseVisibility:r,children:[t.map(o=>f(Fl,{label:o.label,icon:o.icon,badge:o.badge,onClick:o.onClick},o.label)),i&&f(kp,{})]})}const xp=D(Fl)``,Ip=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;
        background: ${e=>e.theme.backgroundColor};
        padding: 8px;

        @media (min-width: 450px) and (min-height: 400px) {
            ${xp} {
                ${e=>!e.$requireCloseVisibility&&$`
                        display: none;
                    `};
            }
        }
    }
`,kp=D(kl)`
    #atlas-chat && {
        padding: 4px 8px;
    }
`;function Ll(e,t=0){const n=performance.now(),r={};function i(){r.id=requestAnimationFrame(a=>{a-n>t?e():i()})}return i(),r}function _l(e){e.id&&cancelAnimationFrame(e.id)}function Hl(e,t){const[n,r]=Z(e?"enter":"from"),i=re({}),[a,o]=Z(e);return ne(function(){return _l(i.current),e?(r("from"),o(!0),Ll(()=>{r("enter")})):(r("leave"),i.current=Ll(()=>{o(!1)},t)),()=>{_l(i.current)}},[e,t]),{stage:n,shouldMount:a}}function Sp(e,t){const n=re(e),r=re(t);return n.current!==e&&(r.current=n.current,n.current=e),r.current}function Bp(e,t){return f(Dp,{...e,ref:t})}const Op=Ae.forwardRef(Bp),Dp=D.div`
    #atlas-chat && {
        padding: 1px 12px 0;
        font-size: 12px;
        font-weight: ${e=>e.theme.conversationsTitleWeight};
        color: ${e=>e.theme.sectionTitleText};
        background: ${e=>e.theme.backgroundColor};
        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: box-shadow 0.2s ease, border-bottom-color 0.1s ease;
        box-shadow: 0px 0px 0px -4px ${e=>e.theme.shadowColor};
        border-bottom: 1px solid transparent;

        &:not(:first-child) {
            margin-top: 20px;
        }
    }
`;function Gl(e){const{content:t,...n}=e;return f(Ep,{"aria-label":"atlas-message-text",...n,dangerouslySetInnerHTML:{__html:t}})}const Ep=D.div`
    #atlas-chat && {
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        max-width: 100%;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 0.8rem;

            &:first-child {
                margin-top: 0;
            }
        }

        // Blocks

        h1 {
            font-weight: 500;
            font-size: 1.75em;
            line-height: 1.3;
            margin: 0;
        }

        h2 {
            font-weight: 500;
            font-size: 1.35em;
            line-height: 1.3;
            margin: 0;
        }

        p,
        div {
            margin: 0;
            line-height: 1.6;
        }

        > p,
        > div {
            text-overflow: ellipsis;
            overflow: hidden;
        }

        ul,
        ol {
            margin: 0;
            padding-left: 2.5em;
        }

        ul,
        ol {
            margin: 0;
            padding-left: 2em;
        }

        ol ol,
        ul ul {
            padding-left: 1em;
        }

        // 1, 4, 7, 10
        ol > li,
        ol ol ol ol > li,
        ol ol ol ol ol ol ol > li,
        ol ol ol ol ol ol ol ol ol ol > li {
            list-style-type: decimal;
        }

        // 2, 5, 8
        ol ol > li,
        ol ol ol ol ol > li,
        ol ol ol ol ol ol ol ol > li {
            list-style-type: lower-latin;
        }

        // 3, 6, 9
        ol ol ol > li,
        ol ol ol ol ol ol > li,
        ol ol ol ol ol ol ol ol ol > li {
            list-style-type: lower-roman;
        }

        // 1, 4, 7, 10
        ul > li,
        ul ul ul ul > li,
        ul ul ul ul ul ul ul > li,
        ul ul ul ul ul ul ul ul ul ul > li {
            list-style-type: disc;
        }

        // 2, 5, 8
        ul ul > li,
        ul ul ul ul ul > li,
        ul ul ul ul ul ul ul ul > li {
            list-style-type: circle;
        }

        // 3, 6, 9
        ul ul ul > li,
        ul ul ul ul ul ul > li,
        ul ul ul ul ul ul ul ul ul > li {
            list-style-type: square;
        }

        pre {
            font-size: 0.85em;
            margin: 0 -8px;
            overflow: auto;
            padding: 2px 8px;
            background: ${e=>e.theme.messagePreBackground};
            color: ${e=>e.theme.messagePreText};
            white-space: nowrap;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
        }

        blockquote {
            border-left: 2px solid ${e=>e.theme.messageQuoteBorder};
            margin: 0;
            padding-left: 10px;
            color: ${e=>e.theme.messageQuoteText};
            font-style: italic;
        }

        h1,
        h2,
        p,
        ul,
        ol,
        li {
            color: inherit;
        }

        // Inlines

        a {
            cursor: revert;
            color: inherit;
            text-decoration: underline;
        }

        code {
            background: ${e=>e.theme.messageCodeBackground} !important;
            color: ${e=>e.theme.messageCodeText} !important;
            padding: 3px;
        }

        strong {
            font-weight: bolder;
        }

        em {
            font-style: italic;
        }

        [data-mentioned] {
            white-space: nowrap;
            color: ${e=>e.theme.messageMentionText};
            font-weight: 500;
        }

        [style*='white-space: pre'] {
            // Fix for Perfect Venue case: https://app.atlas.so/customer-timeline/4fbda01a-80a9-4af4-8c4c-f6492e7bccdb?conversationId=aae47b48-d99b-4436-abd1-9c7f1c87813a
            white-space: pre-wrap !important;
        }
    }
`;function Tp(e){const{children:t,content:n,attachments:r,reverse:i,selected:a,...o}=e;return!t&&!n&&!(r!=null&&r.length)?null:f(Mp,{"aria-label":"atlas-message-bubble",...o,$reverse:i,$selected:a,children:[t,n&&f(Gl,{content:n}),f(Rp,{attachments:r})]})}const Rp=D(mo)`
    #atlas-chat && {
        margin-top: 8px;

        &:first-child {
            margin-top: 0;
        }
    }
`,Mp=D.div`
    #atlas-chat && {
        padding: 8px;
        border-radius: 8px;
        border: ${e=>e.theme.border};
        overflow-wrap: break-word;
        word-break: break-word;
        word-wrap: break-word;
        font-size: 13px;
        line-height: 21px;
        font-weight: 400;
        min-width: 40px;
        max-width: 100%;
        transition: box-shadow 0.2s ease;

        background: ${e=>e.$reverse?e.theme.brandColor:e.theme.backgroundFadeColor};
        color: ${e=>e.$reverse?e.theme.brandTextColor:e.theme.textColor};

        ${e=>e.$selected?$`
                      box-shadow: -4px 4px 14px 0px
                          ${t=>t.theme.shadowColor};
                  `:""}
    }
`;ke.extend(Ei);function zl(e){return ke.utc(e).local()}function Np(e){return f(Lp,{...e,children:[f(Oo,{}),f(Oo,{}),f(Oo,{})]})}const Fp=e=>we`
    0% {
        translate: 0px 0%;
        background: ${e.theme.typingDotDownColor};
    }
    24% {
        translate: 0px -100%;
        background: ${e.theme.typingDotUpColor};
    }
    26% {
        translate: 0px -100%;
        background: ${e.theme.typingDotUpColor};
    }
    50% {
        translate: 0px 0%;
        background: ${e.theme.typingDotDownColor};
    }
`,Oo=D.i`
    #atlas-chat && {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${e=>e.theme.typingDotDownColor};

        animation: ${Fp} 1s ease infinite;

        &:nth-child(2) {
            animation-delay: 0.1s;
        }

        &:nth-child(3) {
            animation-delay: 0.2s;
        }
    }
`,Lp=D.span`
    #atlas-chat && {
        display: inline-flex;
        padding: 0 5px;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 5px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
`;function Do(e){const{icon:t,title:n,description:r,note:i,...a}=e;return f(zp,{target:"_blank",...a,children:[f(Gp,{children:[t," ",n]}),r&&f(Hp,{children:r}),i&&f(_p,{children:i})]})}const _p=D.div`
    #atlas-chat && {
        margin-top: 5px;
        color: ${e=>e.theme.textFadeColor};
        line-height: 20px;
    }
`,Hp=D.div`
    #atlas-chat && {
        margin-top: 5px;
    }
`,Gp=D.div`
    #atlas-chat && {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
        vertical-align: middle;
    }
`,zp=D.a`
    #atlas-chat && {
        display: block;
        padding: 10px 16px;
        border-radius: 5px;
        font-size: 13px;
        line-height: 16px;
        font-weight: 400;
        min-width: 40px;
        background: inherit;
        border: ${e=>e.theme.border};
        background: ${e=>e.theme.tileBackground};

        text-decoration: none;
        color: inherit;

        box-shadow: 0px 4px 14px 0px ${e=>e.theme.previewShadowColor};
        transform: scale(1);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
        &:hover {
            box-shadow: 0px 3px 6px 0px ${e=>e.theme.previewShadowColor};
            transform: scale(0.99);
        }
    }
`;function Wp(e){return f(Nr,{...e})}const Nr=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 5px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
`;function Up(e){return f("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-label":"atlas-sent-icon",...e,children:f("path",{fillRule:"evenodd","clip-rule":"evenodd",d:"M7.37707 10.5229C7.32612 10.4981 7.27023 10.4852 7.21359 10.4852H6.39445C6.32144 10.4852 6.27883 10.5632 6.31184 10.6231C6.27888 10.5632 6.32149 10.4852 6.39448 10.4852H7.21362C7.27026 10.4853 7.32615 10.4982 7.37709 10.5229C7.42804 10.5477 7.47271 10.5837 7.50776 10.6282L9.82456 13.5637L14.6562 7.44302C14.7265 7.35278 14.8355 7.30005 14.9503 7.30005H15.7695C15.8069 7.30005 15.8363 7.32053 15.8517 7.34844C15.8363 7.32051 15.8069 7.3 15.7695 7.3H14.9503C14.8355 7.3 14.7265 7.35273 14.6562 7.44297L9.82453 13.5637L7.50773 10.6281C7.47268 10.5836 7.42801 10.5476 7.37707 10.5229ZM16.0771 7.63797L16.0783 7.63651C16.2863 7.37545 16.0928 7 15.7695 7H14.9503C14.7444 7 14.548 7.09421 14.4202 7.25776L14.4195 7.25857L9.82455 13.0795L7.74322 10.4423C7.68017 10.3623 7.59982 10.2976 7.50821 10.2531C7.41652 10.2085 7.31555 10.1853 7.21359 10.1852H6.39445C6.0657 10.1852 5.88175 10.5642 6.08514 10.8222L9.295 14.8887C9.56557 15.2312 10.0837 15.2297 10.3545 14.8896L16.0771 7.63797Z"})})}function $p(e){return f("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-label":"atlas-warning-icon",...e,children:f("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.4815 16.5765L11.2138 5.37122C11.1234 5.20959 10.8908 5.20959 10.8004 5.37122L4.53265 16.5765C4.44435 16.7344 4.55846 16.929 4.73936 16.929H17.2748C17.4557 16.929 17.5698 16.7344 17.4815 16.5765ZM12.5229 4.63896C11.8599 3.45368 10.1542 3.45368 9.49125 4.63896L3.22353 15.8443C2.57595 17.002 3.41282 18.429 4.73936 18.429H17.2748C18.6013 18.429 19.4382 17.002 18.7906 15.8443L12.5229 4.63896ZM10.9016 13.429C10.6254 13.429 10.4016 13.2051 10.4016 12.929V8.929C10.4016 8.65286 10.6254 8.429 10.9016 8.429H11.1126C11.3887 8.429 11.6126 8.65286 11.6126 8.929V12.929C11.6126 13.2051 11.3887 13.429 11.1126 13.429H10.9016ZM10.4016 15.429C10.4016 15.7051 10.6254 15.929 10.9016 15.929H11.1126C11.3887 15.929 11.6126 15.7051 11.6126 15.429V14.929C11.6126 14.6529 11.3887 14.429 11.1126 14.429H10.9016C10.6254 14.429 10.4016 14.6529 10.4016 14.929V15.429Z"})})}function Fr(e){return f(Vp,{type:"button",...e})}const Vp=D.button`
    #atlas-chat && {
        background-color: transparent;
        border: none;
        border-radius: 5px;
        padding: 10px;
        display: inline-block;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: ${e=>e.theme.textFadeColor};
        white-space: nowrap;
        transition: transform 0.1s ease-out;
        transform: scale(1);

        &:disabled {
            color: ${e=>e.theme.textSuperFadeColor};
        }

        &:not(:disabled) {
            cursor: pointer;
        }

        &:hover:not(:disabled),
        &:focus-visible {
            background: ${e=>e.theme.buttonFocusBackground};
            color: ${e=>e.theme.textColor};
        }

        &:active {
            transform: scale(0.96);
        }
    }
`;function Wl(e){const t=Y(()=>typeof e.radius=="boolean"?e.radius?"50%":"0":`${e.radius??0}px`,[e.radius]),[n,r]=Y(()=>e.width&&e.height?[e.height,e.width]:e.width&&!e.height?[typeof e.width=="string"?32:e.width,e.width]:e.height&&!e.width?[e.height,e.block?null:e.height]:[32,e.block?null:32],[e.width,e.height,e.block]);return f(Yp,{className:e.className,$block:e.block,$radius:t,$height:n+"px",$width:r===null?"auto":typeof r=="number"?r+"px":r})}const Kp=we`
    0% {
        transform: translate(-37.5%);
    }
    100% {
        transform: translate(37.5%);
    }
`,Yp=D.span`
    #atlas-chat && {
        display: ${e=>e.$block?"block":"inline-block"};
        width: ${e=>e.$width};
        height: ${e=>e.$height};
        border-radius: ${e=>e.$radius};

        background: ${e=>e.theme.skeletonBackground};
        position: relative;
        z-index: 0;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            inset: 0 -150%;
            background: linear-gradient(
                90deg,
                transparent 25%,
                rgba(129, 129, 129, 0.1) 37%,
                transparent 63%
            );

            ${e=>e.theme.noAnimation?"":$`
                          transform: translate(-37.5%);
                          animation: ${Kp} 1.4s ease infinite;
                      `}
        }
    }
`,Lr=.3,Eo=document.createElement("i");function Ve(e){const{children:t,message:n,onResendClick:r,...i}=e,a=n.side===1,o=(n.side===2||n.side===3)&&n.typing,s=Y(()=>n.sentAt&&zl(n.sentAt),[n.sentAt]),l=Y(()=>s==null?void 0:s.isSame(new Date,"year"),[s]),[c,g]=Y(()=>{var d;if(!((d=n.text)!=null&&d.includes("data-article")))return[n.text,[]];Eo.innerHTML=n.text;const u=Array.from(Eo.querySelectorAll("a[data-article]")),h=u.map(v=>({title:v.innerText,href:v.href,icon:v.dataset.icon,description:v.dataset.description})).filter((v,w,A)=>A.length<=w+1?!0:A.slice(w+1).every(Q=>Q.href!==v.href));return u.forEach(v=>v.remove()),h.length&&Eo.innerText.replace(/[\s,;]/g,"")?[n.text,h]:[void 0,h]},[n.text]);return f(Yl,{"aria-label":"atlas-message",...i,$outgoing:a,children:[a?null:f(Kl,{message:n}),f(Vl,{$outgoing:a,title:s==null?void 0:s.format(`dddd, MMMM D${l?"":", YYYY"}, h:mm A`),children:[f(Tp,{reverse:a,content:c,attachments:n.attachments,children:o?f(Np,{}):t}),g==null?void 0:g.map(u=>f(nA,{title:u.title,href:u.href,icon:u.icon,description:u.description},u.href)),(n.sentAt||o||n.sendFailed)&&f($l,{...o&&{dangerouslySetInnerHTML:{__html:"&nbsp;"}},children:[n.sendFailed&&f(Xp,{}),a&&!!n.id&&f(jp,{}),s==null?void 0:s.format("h:mm A"),n.sendFailed&&r&&f(Se,{children:[f(qp,{children:"Failed to send"}),f(eA,{onClick:()=>r(n),children:"Resend"})]})]})]})]})}function Ul(e){return f(Yl,{children:[f(Jp,{radius:!0}),f(Vl,{children:f(Wl,{block:!0,height:e.height??40,width:e.width??"50%",radius:8})})]})}const Jp=D(Wl)`
    #atlas-chat && {
        position: absolute;
    }
`,Zp=we`
    0% {
        opacity: 0;
        translate: 0px 10px;
    }

    100% {
        opacity: 1;
        translate: 0px 0px;
    }
`,jp=D(Up)`
    #atlas-chat && {
        display: inline-block;
        height: 18px;
        width: 20px;
        vertical-align: middle;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${Zp} ${Lr}s ease
                          forwards;
                      animation-delay: ${Lr}s;
                  `}
    }
`,Xp=D($p)`
    #atlas-chat && {
        height: 19px;
        vertical-align: bottom;
        fill: ${e=>e.theme.highlightColor};
    }
`,qp=D.span`
    #atlas-chat && {
        margin-left: 4px;
        color: ${e=>e.theme.textActiveColor};
    }
`,eA=D(Fr)`
    #atlas-chat && {
        padding: 0;
        margin-left: 4px;
        color: ${e=>e.theme.messageButtonColor};
    }
`,tA=we`
    0% {
        translate: 0px 10px;
        opacity: 0;
    }

    100% {
        translate: 0px 0px;
        opacity: 1;
    }
`,$l=D.div`
    #atlas-chat && {
        font-size: 12px;
        line-height: 18px;
        color: ${e=>e.theme.textFadeColor};
        margin-top: 2px;

        ${e=>e.theme.noAnimation?"":$`
                      translate: 0px 10px;
                      opacity: 0;
                      animation: ${tA} ${Lr}s ease
                          forwards;
                      animation-delay: 0.1s;
                  `}
    }
`,nA=D(Do)`
    #atlas-chat && {
        margin-top: 5px;
        width: 98%;
    }
`,Vl=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;
        align-items: ${e=>e.$outgoing?"flex-end":"flex-start"};
        margin-left: ${e=>e.$outgoing?0:44}px;
    }
`,Kl=D(Mr)`
    #atlas-chat && {
        position: absolute;
    }
`,rA=we`
    0% {
        translate: 0px 30px;
        opacity: 0;
    }

    100% {
        translate: 0px 0px;
        opacity: 1;
    }
`,iA=we`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`,Yl=D.div`
    #atlas-chat && {
        line-height: 21px;

        ${e=>e.$outgoing?$`
                      padding-left: 20px;
                      flex-direction: row-reverse;
                  `:""}

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${e.$outgoing?rA:iA}
                          ${Lr}s ease forwards;
                  `}
    }

    #atlas-chat ${Nr} &&:not(:first-child) {
        ${Kl} {
            visibility: hidden;
        }
    }

    #atlas-chat ${Nr} &&:not(:last-child) {
        ${$l} {
            display: none;
        }
    }
`,Jl=8,Zl=1;function _r(e){return"href"in e?f(Xl,{as:"a",...e,children:f(jl,{children:e.title})}):f(Xl,{type:"button",...e,children:f(jl,{children:e.title})})}const jl=D.span`
    #atlas-chat && {
        position: relative;
        z-index: 1;
    }
`,Xl=D.button`
    #atlas-chat && {
        display: inline-block;
        position: relative;
        cursor: pointer;
        padding: 7px 9px;
        border-radius: ${Jl}px;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        vertical-align: bottom;
        background: ${e=>e.theme.brandColor};
        color: ${e=>e.theme.textColor};
        text-decoration: none;
        border: 0;
        transition: background-color 0.1s ease, transform 0.1s ease;
        transform: scale(1);

        &::before {
            content: '';
            z-index: 1;
            position: absolute;
            inset: ${Zl}px;
            border-radius: ${Jl-Zl}px;
            background-color: ${e=>e.theme.backgroundColor};
        }

        &:hover {
            color: ${e=>e.theme.brandTextColor};

            &::before {
                background-color: transparent;
            }
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;function oA(e){return f("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",className:e.className,fill:"currentColor",children:f("path",{d:"M20.8302 10.6917L1.22469 0.86203C1.145 0.822186 1.05359 0.812811 0.966873 0.833905C0.767654 0.883124 0.643435 1.08469 0.692654 1.28625L2.71297 9.54094C2.74344 9.66515 2.83484 9.76594 2.95672 9.80578L6.41844 10.9941L2.95906 12.1823C2.83719 12.2245 2.74578 12.323 2.71765 12.4472L0.692654 20.7136C0.67156 20.8003 0.680936 20.8917 0.720779 20.9691C0.812186 21.1542 1.03719 21.2292 1.22469 21.1378L20.8302 11.3644C20.9028 11.3292 20.9614 11.2683 20.9989 11.198C21.0903 11.0105 21.0153 10.7855 20.8302 10.6917ZM3.00359 18.3652L4.1825 13.5464L11.1012 11.1722C11.1552 11.1534 11.1997 11.1112 11.2184 11.055C11.2512 10.9566 11.1997 10.8511 11.1012 10.8159L4.1825 8.44406L3.00828 3.64406L17.727 11.0245L3.00359 18.3652V18.3652Z"})})}function To(e){const{routing:t}=ee(he);return f(Fr,{onClick:()=>t.newChat(),children:[f(sA,{children:typeof e.text<"u"?e.text:"Send us a new message"}),f(aA,{})]})}const aA=D(oA)`
    #${ae} && {
        height: 14px;
        margin-top: -2px;
        margin-left: 8px;
        vertical-align: middle;
        display: inline-block;
    }
`,sA=D.span`
    #${ae} && {
        font-weight: 600;
    }
`;function qe(){return f(lA,{children:f(To,{})})}const lA=D.div`
    #${ae} && {
        width: 100%;
        text-align: center;
    }
`,Ro=.2,cA={component:({message:e})=>{const t=e.widget.widget;return f(Se,{children:[t.title&&f(Ve,{message:{text:t.title,sentAt:e.sentAt,side:X.BOT}}),e.widget.state===Pe.DONE&&f(Ve,{message:{text:t.options[e.widget.userInput.selected],sentAt:e.sentAt,side:X.CUSTOMER}})]})},footerComponent:({conversation:e})=>{const t=e.lastMessage;if(!t||!("widget"in t)||t.widget.widget.type!=="quick_reply")return null;if(t.widget.state===Pe.DONE)return f(qe,{});const{widgetInteraction:n}=ee(he),r=t.widget.widget,[i,a]=Z(),o=l=>{i||(a(l),setTimeout(()=>n(t.conversationId,t.id,{selected:l}),Ro*1e3))},s=r.order||Object.keys(r.options);return f("div",{children:f(fA,{children:s.map(l=>f(uA,{title:r.options[l],onClick:()=>o(l),$selected:i===l,$skipped:!!i&&i!==l},l))})})},tryPreviousPreview:!0,preview:(e,t,n)=>{const r=t.widget.widget;return t.widget.state===Pe.PENDING?n&&n()||"Please choose an option":r.options[t.widget.userInput.selected]}},uA=D(_r)`
    #${ae} && {
        transition: transform ${Ro}s ease, opacity ${Ro}s ease;
        transform: scale(${e=>e.$skipped?.9:1})
            translate(
                0px,
                ${e=>e.$skipped?10:e.$selected?-10:0}px
            );
        opacity: ${e=>e.$skipped||e.$selected?0:1};
    }
`,fA=D.div`
    #${ae} && {
        display: flex;
        flex-wrap: wrap;

        // Because gap doesn't work in Android 5
        margin-top: -5px;
        margin-left: -5px;

        & > * {
            margin-top: 5px;
            margin-left: 5px;
        }
    }
`;function ql(e,t=300){let n=!1,r=null;return function(...i){if(n){r=i;return}r||e(...i),n=!0,setTimeout(function(){n=!1,r&&(e(...r),r=null)},t)}}const dA=["I","EM","B","STRONG","A","SPAN","FONT","MARK","SUB","SUP"];function Mo(e,t){const n=document.createElement("i"),r=e.split(/(<br\s*\/?>|\n)/);let i="";for(let s=0;s<r.length;s++){n.innerHTML=r[s];const l=n.childNodes;for(let c=0;c<l.length;c++){const g=l[c];if(i.length&&g.nodeType!==Node.TEXT_NODE&&(g.nodeType!==Node.ELEMENT_NODE||!dA.includes(g.tagName)))break;i+=[Node.ELEMENT_NODE,Node.TEXT_NODE].includes(g.nodeType)&&(g.innerText||g.textContent||"")||""}if(i.trim().length)break}const a=t!=null&&t.length?t.length===1?t[0].name.match(/\.(jpe?g|gif|png|bmp|webp)$/i)?"🖼️":t[0].name.match(/.(mp4|mov|wmv|avi|flv|webm|mkv)$/i)?"📹":"📎":"📎":null,o=i?null:t==null?void 0:t.map(s=>s.name).join(", ");return[a,i,o].filter(Boolean).join(" ")}const ec=({conversation:e})=>{const{sendMessage:t,sendCustomerTypingMessage:n,settings:r}=ee(he),i=j((l,c)=>t(e.id,l,c),[t,e.id]),a=Y(()=>Gi(e.id)||"",[e.id]),o=Y(()=>{const l=ql(()=>{if(!e)return null;n(e.id)},ms);return c=>{ps(e.id,c),l()}},[e,n]);return!e||!(e.status==Ke.OPEN||e.status==Ke.SNOOZED||r.allowChatInClosedTicket)?null:f(On,{onSend:i,onInput:o,defaultValue:a},e.id)},gA={component:Ve,preview:(e,t)=>{const n=t;return Mo(n.text,"attachments"in n?n.attachments:[])},footerComponent:ec},hA={component:({message:e})=>{const t=e.widget.widget;return f(Ve,{message:{text:t.text,sentAt:e.sentAt,side:X.BOT}})},footerComponent:()=>f(qe,{}),preview:(e,t)=>{const n=t.widget.widget;return Mo(n.text)}};function tc(e){return e.messages.length?!(e.messages.some(r=>r.side===X.CUSTOMER)||e.messages.some(r=>r.side===X.BOT&&"widget"in r&&r.widget.state===Pe.DONE&&r.widget.userInput)):!0}const vA={component:({message:e})=>e.widget.state===Pe.PENDING?null:f(Ve,{message:{side:X.CUSTOMER,text:e.widget.userInput.text,attachments:e.widget.userInput.attachments,sentAt:e.sentAt}}),tryPreviousPreview:!0,preview:(e,t,n)=>{var r;return((r=t.widget.userInput)==null?void 0:r.text)||n&&n()||"Please give your response"},footerComponent:({conversation:e,chatOptions:t})=>{const{widgetInteraction:n}=ee(he),{lastMessage:r}=e;if(!r||!("widget"in r)||r.widget.widget.type!=="user_input")return null;if(r.widget.state===Pe.DONE)return f(qe,{});const i=tc(e);return f(On,{onSend:async(a,o)=>{await n(e.id,r.id,{text:a,attachments:o})},onInput:()=>{},defaultValue:i?t==null?void 0:t.text:void 0},e.id)}};function pA(e,t){const{label:n,name:r,disabled:i,checked:a,radio:o,value:s,error:l,...c}=e;return f(Se,{children:[f(bA,{...c,children:[f(CA,{type:o?"radio":"checkbox",ref:t,name:r,value:s,disabled:i,checked:a})," ",f("span",{children:n})]}),l&&f(mA,{children:l})]})}const nc=Ae.forwardRef(pA),AA=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")`,wA=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")`,mA=D.div`
    #atlas-chat && {
        color: ${e=>e.theme.inputErrorColor};
        margin-top: 5px;
    }
`,CA=D.input`
    #atlas-chat && {
        all: unset;
        width: 16px;
        height: 16px;
        background: transparent;
        font-weight: 400;
        border: 1px solid ${e=>e.theme.textActiveColor};
        flex-shrink: 0;
        align-self: flex-start;

        border-radius: ${e=>e.type==="radio"?8:4}px;

        &:focus-visible {
            border-color: ${e=>e.theme.inputCheckboxFocusBorder};
        }

        &:checked {
            background-image: ${e=>e.type==="radio"?wA:AA};
            background-color: ${e=>e.theme.inputCheckboxBackground};
            border-color: ${e=>e.theme.inputCheckboxBorder};
        }
    }
`,bA=D.label`
    #atlas-chat && {
        color: inherit;
        font-size: 13px;
        line-height: 20px;
        cursor: pointer;

        display: flex;
        align-items: center;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 5px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
`,PA=()=>f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",fill:"currentColor",children:f("path",{d:"M18.9062 3.95312H15.2969V2.57812C15.2969 2.48359 15.2195 2.40625 15.125 2.40625H13.9219C13.8273 2.40625 13.75 2.48359 13.75 2.57812V3.95312H8.25V2.57812C8.25 2.48359 8.17266 2.40625 8.07812 2.40625H6.875C6.78047 2.40625 6.70312 2.48359 6.70312 2.57812V3.95312H3.09375C2.71348 3.95312 2.40625 4.26035 2.40625 4.64062V18.9062C2.40625 19.2865 2.71348 19.5938 3.09375 19.5938H18.9062C19.2865 19.5938 19.5938 19.2865 19.5938 18.9062V4.64062C19.5938 4.26035 19.2865 3.95312 18.9062 3.95312ZM18.0469 18.0469H3.95312V9.88281H18.0469V18.0469ZM3.95312 8.42188V5.5H6.70312V6.53125C6.70312 6.62578 6.78047 6.70312 6.875 6.70312H8.07812C8.17266 6.70312 8.25 6.62578 8.25 6.53125V5.5H13.75V6.53125C13.75 6.62578 13.8273 6.70312 13.9219 6.70312H15.125C15.2195 6.70312 15.2969 6.62578 15.2969 6.53125V5.5H18.0469V8.42188H3.95312Z"})});function yA(e){const{label:t,name:n,value:r,error:i,type:a,optional:o,...s}=e,l=re(null),c=re(null),g=lo(),u=h=>{if(!(!h.target.value||!c.current||!l.current)){if(a==="date"){c.current.value=cs(h.target.value);return}c.current.value=ls(h.target.value)}};return f(Se,{children:[f(kA,{...s,children:[f(lt,{onFocus:h=>h.target.blur(),onClick:()=>{var h;(h=l==null?void 0:l.current)==null||h.showPicker()},placeholder:e.label,suffix:f(BA,{children:[f(PA,{}),o&&f(OA,{children:"Optional"})]}),ref:c}),f(SA,{type:a,ref:l,name:n,value:r,onChange:u,$isDark:g.isDark})]}),i&&f(IA,{children:i})]})}const QA=Ae.forwardRef(yA),xA=we`
0% {
    opacity: 0;
    transform: scale(1, .8);
}
100% {
    opacity: 1;
    transform: scale(1, 1);
}
`,IA=D.div`
    // Three class names are used to override margins of parent block
    #atlas-chat &&& {
        color: ${e=>e.theme.inputErrorColor};
        margin-top: 5px;
        font-size: 13px;
        line-height: 15px;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${xA} 0.3s ease-in-out
                          forwards;
                  `}
    }
`,kA=D.label`
    #atlas-chat && {
        color: inherit;
        font-size: 13px;
        line-height: 20px;
        cursor: pointer;

        display: flex;
        flex-direction: column;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 5px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
`,SA=D.input`
    #atlas-chat && {
        color-scheme: ${e=>e.$isDark?"dark":"light"};
        height: 0;
        visibility: hidden;
    }
`,BA=D.div`
    #atlas-chat && {
        display: flex;
        align-items: center;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 8px;

            &:first-child {
                margin-left: 0;
            }
        }

        svg {
            width: 15px;
        }
    }
`,OA=D.span`
    #atlas-chat && {
        display: inline-block;
        font-size: 12px;
        color: ${e=>e.theme.textFadeColor};
        font-weight: 400;
    }
`;function DA(e){const{title:t,name:n,options:r,error:i,optional:a,...o}=e;return f(Se,{children:[f(RA,{...o,children:[f(TA,{children:[t,a&&f(MA,{children:"Optional"})]}),r.map(s=>f(nc,{radio:!0,label:typeof s.title<"u"?s.title:s.value,name:n,value:s.value,checked:s.checked},s.title))]}),i&&f(EA,{children:i})]})}const EA=D.div`
    #atlas-chat && {
        color: ${e=>e.theme.inputErrorColor};
        margin-top: 5px;
    }
`,TA=D.div`
    #atlas-chat && {
        font-weight: 600;
        margin-bottom: 4px;
        font-size: 13px;
        font-weight: 600;
    }
`,RA=D.div`
    #atlas-chat && {
        color: inherit;
        font-size: 13px;
        line-height: 20px;
        cursor: pointer;

        display: flex;
        flex-direction: column;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 5px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
`,MA=D.span`
    #atlas-chat && {
        display: inline-block;
        font-size: 12px;
        color: ${e=>e.theme.textFadeColor};
        font-weight: 400;
        padding-left: 8px;
    }
`;function NA(e){const{title:t,name:n,attachments:r=[],onAttach:i,onRemove:a,optional:o}=e;return f(FA,{children:[f("div",{onClick:i,children:f(lt,{onFocus:s=>s.preventDefault(),placeholder:t??"Add attachment(s)",suffix:f(GA,{children:[f(ml,{}),o&&f(_A,{children:"Optional"})]})})}),f("select",{name:n,multiple:!0,hidden:!0,children:r.map(s=>f("option",{value:s.url,selected:!0,children:s.name},s.url))}),f(HA,{attachments:r,onRemove:a,size:80}),e.error&&f(LA,{children:e.error})]})}const FA=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 5px;

            &:first-child {
                margin-top: 0;
            }
        }

        &:hover {
            cursor: pointer;
        }

        & > select {
            display: none;
        }
    }
`,LA=D.div`
    #atlas-chat && {
        color: ${e=>e.theme.inputErrorColor};
        margin-top: 5px;
    }
`,_A=D.span`
    #atlas-chat && {
        display: inline-block;
        font-size: 12px;
        color: ${e=>e.theme.textFadeColor};
        font-weight: 400;
    }
`,HA=D(mo)`
    #atlas-chat && {
        flex-direction: row;
        overflow: hidden;
        margin-top: 11px;

        & > * {
            flex: 0 0 auto;
        }
    }
`,GA=D.div`
    #atlas-chat && {
        display: flex;
        align-items: center;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 8px;

            &:first-child {
                margin-left: 0;
            }
        }

        svg {
            width: 15px;
        }
    }
`,zA=/(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*$|^"([\001-\010\013\014\016-\037!#-[\]-\177]|\\[\001-\011\013\014\016-\177])*"$)/i,WA=/(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?$)|^\[(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\]$/i,UA=/^[^*,!'"#$%&/() ¿?¡~{}^`\\<>;:áéíóúñ¡|¬°=[\]]*$/i;function rc(e,t,n=1){const r=e.split(t);return n?[r.slice(0,-n).join(t)].concat(r.slice(-n)):r}function No(e){if(!e||e.indexOf("@")===-1||!UA.test(e))return!1;const[t,n]=rc(e,"@",1);return!!(zA.test(t)&&WA.test(n))}function $A(e){return e?/^[+]?[0-9]{1,3}[-\s]?[(]?[0-9]{1,4}[)]?([-\s]?[0-9]){6,10}$/.test(e):!1}const VA=["arpa","invalid","local","localhost","onion","test"],ic=e=>{if(!No(e))return!1;const n=rc(e,"@",1)[1].split("."),r=n[n.length-1];return!VA.includes(r)},KA=e=>{const t=e.keyCode;return t>=48&&t<=57||t>=96&&t<=105},oc=e=>{const t=e.keyCode;return e.shiftKey===!0||t===35||t===36||t===8||t===9||t===13||t===46||t>36&&t<41||(e.ctrlKey===!0||e.metaKey===!0)&&(t===65||t===67||t===86||t===88||t===90)},YA=e=>{!KA(e)&&!oc(e)&&e.preventDefault()},JA=e=>{if(!oc(e)&&e.target instanceof HTMLInputElement){const t=e.target.value.replace(/\D/g,"").substring(0,10),n=t.substring(0,3),r=t.substring(3,6),i=t.substring(6,10);t.length>6?e.target.value=`(${n}) ${r} - ${i}`:t.length>3?e.target.value=`(${n}) ${r}`:t.length>0&&(e.target.value=`(${n}`)}},ZA=({message:e})=>{if(e.widget.state===Pe.PENDING)return null;const t=e.widget.widget;return f(Ve,{message:{text:t.fields.map(n=>{const r=n.title,i=e.widget.userInput[n.name];return`<div>${r}: ${i?`<strong>${i}</strong>`:"<em>not set</em>"}</div>`}).join(""),sentAt:e.sentAt,side:X.CUSTOMER}})};function jA({conversation:e}){const t=e.lastMessage;if(!t||!("widget"in t)||t.widget.widget.type!=="send_form")return null;const[n,r]=Z({});if(t.widget.state===Pe.DONE)return f(qe,{});const i=t.widget.widget,{widgetInteraction:a}=ee(he),o=l=>{l.preventDefault();const c=new FormData(l.currentTarget),g=Object.fromEntries(i.fields.map(h=>{var v;const d=(v=c.getAll(h.name))==null?void 0:v.toString();return[h.name,dd(h,d)]})),u=i.fields.reduce((h,d)=>{var w;const v=g[d.name];return d.type!=="boolean"&&!((w=d.data)!=null&&w.optional)&&!v?Object.assign(h,{[d.name]:"This field is required"}):d.type==="email"&&v&&(typeof v!="string"||!ic(v))?Object.assign(h,{[d.name]:"Invalid email"}):h},{});Object.keys(u).length?r(u):a(t.conversationId,t.id,g)},s=l=>()=>r(c=>c[l]?{...c,[l]:void 0}:c);return f(go,{onSubmit:o,children:i.fields.map(l=>{var g,u,h;const c=!!((g=l.data)!=null&&g.optional);switch(l.type){case"tel":return f(lt,{placeholder:l.title,type:l.type,name:l.name,onKeyDown:YA,onKeyUp:JA,onChange:n[l.name]?s(l.name):void 0,error:n[l.name],suffix:c?"Optional":""});case"text":return f(lt,{placeholder:l.title,type:l.type,name:l.name,onChange:n[l.name]?s(l.name):void 0,error:n[l.name],suffix:c?"Optional":""});case"email":return f(lt,{placeholder:l.title,name:l.name,onChange:n[l.name]?s(l.name):void 0,error:n[l.name],suffix:c?"Optional":""});case"textarea":return f(Br,{placeholder:l.title,name:l.name,onChange:n[l.name]?s(l.name):void 0,error:n[l.name],suffix:c?"Optional":""});case"boolean":return f(nc,{label:l.title,name:l.name,error:n[l.name]});case"list":return f(DA,{title:l.title,name:l.name,options:(h=(u=l.data)==null?void 0:u.list)==null?void 0:h.map(d=>({value:d.title})),onChange:n[l.name]?s(l.name):void 0,error:n[l.name],optional:c});case"file":return f(XA,{title:l.title,name:l.name,error:n[l.name],onAttach:n[l.name]?s(l.name):void 0,optional:c});case"date":case"datetime-local":return f(QA,{type:l.type,label:l.title,name:l.name,error:n[l.name],onChange:n[l.name]?s(l.name):void 0,optional:c})}})})}function XA(e){const{title:t,name:n,optional:r,onAttach:i}=e,[a,o]=Z([]),{settings:s}=ee(he),l=()=>{if(!(a.length>=10)&&s.uploaderApiKey)return hl(s.uploaderApiKey,{maxFiles:10-a.length}).then(g=>{o(u=>[...u,...g]),i==null||i()})},c=j(g=>{o(u=>u.includes(g)?u.filter(h=>h!==g):u)},[]);return f(NA,{title:t,name:n,onAttach:l,onRemove:c,attachments:a,error:e.error,optional:r})}const qA={component:ZA,footerComponent:jA,tryPreviousPreview:!0,preview:(e,t,n)=>{const r=t.widget.widget;if(t.widget.state!==Pe.PENDING)return`${r.fields[0].title}: ${t.widget.userInput[r.fields[0].name]}`;const i=n&&n();return i?Mo(i):"Please give us some information"}};class ac{constructor(t,n){this.settings=void 0,this.articleDict={},this.categoriesLoadRequest=void 0,this.companySlug=t,this.setUpUrlPrefix(n)}get urlPrefix(){const{settings:t}=this;if(!t)return"";const{customDomain:n,helpCenterUrl:r}=t;return n||`${r}/${this.companySlug}`}get hasCustomDomain(){var t;return!!((t=this.settings)!=null&&t.customDomain)}async searchArticles(t){const n=await Be.get(`api/helpcenter-public/search/${this.companySlug}`,{q:t},{errorLabel:"Failed to get search results"});return n?n.map(r=>({...r,url:`${this.urlPrefix}/articles/${r.slug}`})):[]}async getArticle(t){if(Object.prototype.hasOwnProperty.call(this.articleDict,t))return this.articleDict[t];const n=await this.loadArticle(t);return n&&(this.articleDict[t]=n),n||null}async getCategories(){return this.categoriesLoadRequest||(this.categoriesLoadRequest=this.loadCategories()),await this.categoriesLoadRequest}async getCategoryArticles(t){return await this.loadCategoryArticles(t)}getUrl(){return this.urlPrefix}getLinkPathSlug(t,n){if(!this.settings)return null;const{customDomain:r,helpCenterUrl:i}=this.settings,a=`${i}/${this.companySlug}`,o=t.startsWith(`${r}${n}`)?r:t.startsWith(`${a}${n}`)?a:null;return o&&t.slice(o.length+n.length).split(/\?|#/)[0]||null}getArticleSlugAndSectionFromUrl(t){const n=this.getLinkPathSlug(t,"/articles/"),r=n&&new URL(t).hash.slice(1)||void 0;return n?[n,r]:[]}getCategorySlugFromUrl(t){return this.getLinkPathSlug(t,"/categories/")}async setUpUrlPrefix(t){const n=await Be.get(`/api/helpcenter-public/settings/${this.companySlug}`,null,{errorLabel:"Failed to receive Help Center settings"});this.settings=n,n&&(t==null||t(this))}async loadArticle(t){const n=await Be.get(`/api/helpcenter-public/article/${this.companySlug}/${t}`,null,{errorLabel:"Failed to fetch article details"});if(n)return n.url=`${this.urlPrefix}/articles/${n.slug}`,n}async loadCategories(){const t=await Be.get(`/api/helpcenter-public/categories/${this.companySlug}`,null,{errorLabel:"Failed to fetch categories"});return t?t.map(n=>({...n,url:`${this.urlPrefix}/categories/${n.slug}`})):[]}async loadCategoryArticles(t){const n=await Be.get(`/api/helpcenter-public/category/${this.companySlug}/${t}/articles`,null,{errorLabel:"Failed to fetch articles"});if(!n)return[];const r=n.map(i=>({...i,url:`${this.urlPrefix}/articles/${i.slug}`}));return r.forEach(i=>{this.articleDict[i.slug]=i}),r}}const Rt=mi({}),ew=({children:e,companySlug:t})=>{const[n,r]=Z(()=>({hcService:new ac(t,i=>{r(a=>({...a,baseUrl:i.getUrl()}))})}));return f(Rt.Provider,{value:n,children:e})},tw={component:({message:e})=>{const t=e.widget.widget,{baseUrl:n}=ee(Rt);return f(Se,{children:[f(Ve,{message:{text:"Check these articles for help",sentAt:e.sentAt,side:X.BOT}}),t.articles.map(r=>{const i=`<a data-article href="${r.href||(n?`${n}/articles/${r.slug}`:"")}" data-icon="${r.icon||""}" data-description="${r.description||""}">${r.title}</a>`;return f(Ve,{message:{text:i,sentAt:e.sentAt,side:X.BOT}},r.slug)})]})},footerComponent:()=>f(qe,{}),tryPreviousPreview:!0,preview:(e,t)=>{const r=t.widget.widget.articles.map(i=>i.title);return r.length?`Articles: ${r.join(", ")}`:"Check these articles for help"}},sc=.3;function nw(e){const{children:t,...n}=e;return f(rw,{...n,children:t})}const rw=D.div`
    #atlas-chat && {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        transition: width ${sc}s ease, height ${sc}s ease;
    }
`;function iw(e){return f(aw,{...e})}const ow=we`
    0% {
        opacity: 0;
        translate: 0px 15px;
    }

    100% {
        opacity: 1;
        translate: 0px;
    }
`,aw=D.div`
    #atlas-chat && {
        margin: 0 auto;
        padding: 12px;
        color: ${e=>e.theme.textFadeColor};
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${ow} 0.2s ease forwards;
                  `}
    }
`,sw={component:({message:e})=>f(iw,{children:e.widget.widget.text}),footerComponent:()=>f(qe,{}),tryPreviousPreview:!0,preview:(e,t,n)=>(n==null?void 0:n())||""},lw=["csat_answer","csat_comment"],Tn={component:e=>{const t=Y(()=>lw.includes(e.message.widget.widget.type)?{side:X.CUSTOMER,id:e.message.id,conversationId:e.message.conversationId,text:e.message.widget.widget.text,sentAt:e.message.sentAt,type:Ot.FORM}:{side:X.BOT,id:e.message.id,conversationId:e.message.conversationId,text:e.message.widget.widget.text,sentAt:e.message.sentAt},[e.message]);return f(Ve,{message:t})},footerComponent:({conversation:e})=>{var a;const{sendCsatRatingMessage:t,sendCsatCommentMessage:n,settings:{allowChatInClosedTicket:r}}=ee(he),i=e.lastMessage&&"widget"in e.lastMessage&&((a=e.lastMessage.widget)==null?void 0:a.widget)||null;if((i==null?void 0:i.type)==="csat_question"){const o=i.ratingStyle===Bi.Emoticons?ll:sl;return f(cw,{children:o.map((s,l)=>f(_r,{title:s,onClick:()=>t(e.id,l,i.ratingStyle)}))})}return(i==null?void 0:i.type)==="csat_comment_question"?f(rh,{onSubmit:o=>n(e.id,o)}):r?f(ec,{conversation:e}):f(qe,{})},preview:(e,t)=>{const n=t;return n.widget.widget.type==="csat_thanks"?e.messages.filter(r=>"widget"in r&&r.widget&&(r.widget.widget.type==="csat_answer"||r.widget.widget.type==="csat_comment")).map(r=>r.widget.widget.text).join(" "):n.widget.widget.text}},cw=D.div`
    #${ae} && {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        // Because gap doesn't work in Android 5
        margin-right: -5px;
        margin-top: -5px;

        & > * {
            margin-right: 5px;
            margin-top: 5px;
        }
    }
`,uw={component:e=>null,footerComponent:()=>null,tryPreviousPreview:!0,preview:(e,t,n)=>(n==null?void 0:n())||""},lc=8,cc=1;function fw(e){return f(uc,{type:"button",...e,children:[f(Fo,{children:e.label}),f(Fo,{$fadeColor:!0,children:e.description})]})}const Fo=D.div`
    #atlas-chat && {
        position: relative;
        z-index: 1;
        font-size: 13px;
        line-height: 22px;
        min-height: 22px;
        color: ${e=>e.$fadeColor?e.theme.textFadeColor:e.theme.textColor};
    }
`,uc=D.button`
    #atlas-chat && {
        position: relative;
        cursor: pointer;
        padding: 7px 9px;
        border-radius: ${lc}px;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        vertical-align: bottom;
        background: ${e=>e.theme.brandColor};
        text-decoration: none;
        border: 0;
        transition: background-color 0.1s ease, transform 0.1s ease;
        transform: scale(1);

        &::before {
            content: '';
            z-index: 1;
            position: absolute;
            inset: ${cc}px;
            border-radius: ${lc-cc}px;
            background-color: ${e=>e.theme.backgroundColor};
        }

        &:hover {
            ${Fo} {
                color: ${e=>e.theme.brandTextColor};
            }

            &::before {
                background-color: transparent;
            }
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;function dw(e){const{children:t,...n}=e;return f(gw,{...n,children:t})}const gw=D.div`
    #atlas-chat && {
        display: flex;
        flex-wrap: wrap;

        // Because gap doesn't work in Android 5
        margin-top: -8px;
        margin-left: -8px;

        & > * {
            margin-top: 8px;
            margin-left: 8px;
        }

        & > ${uc} {
            flex-grow: 1;
        }
    }
`;function hw({dir:e="right",...t}){return f(vw,{viewBox:"0 0 20 22",xmlns:"http://www.w3.org/2000/svg",className:t.className,$dir:e,fill:"currentColor",children:f("path",{d:"M8.12776 5.74547C7.77533 6.11855 7.77501 6.70175 8.12704 7.07521L11.8266 11L8.12704 14.9248C7.77501 15.2982 7.77533 15.8815 8.12776 16.2545C8.51004 16.6592 9.15393 16.6592 9.53621 16.2545L13.8513 11.6867C14.2154 11.3013 14.2154 10.6987 13.8513 10.3133L9.5362 5.74547C9.15393 5.3408 8.51004 5.3408 8.12776 5.74547Z"})})}const vw=D.svg`
    path {
        transition: rotate 0.2s ease;
        transform-origin: center;
        rotate: ${e=>e.$dir==="left"?"180deg":e.$dir==="up"?"-90deg":e.$dir==="down"?"90deg":0};
    }
`,fc=5;function pw(e){e==null||e.focus()}function Aw({placeholder:e="Select...",defaultValue:t,options:n,onChange:r,...i}){const[a,o]=Z(t),[s,l]=Z(!1),[c,g]=Z({}),u=re(null),h=re(null),d=()=>{var b;if(!u.current)return;const m=(b=u.current.closest('[aria-label="atlas-ticket"]'))==null?void 0:b.getBoundingClientRect(),I=u.current.getBoundingClientRect();g({width:I.width+"px",...m&&{maxHeight:I.top-m.top-10+"px"}})},v=m=>{const I=m.target;u.current&&h.current&&!u.current.contains(I)&&!h.current.contains(I)&&l(!1)},w=()=>l(m=>!m),A=j(m=>{r==null||r(m),o(m),l(!1)},[r]),Q=j(()=>l(!1),[]);return ne(()=>()=>l(!1),[]),ne(()=>(s&&(d(),window.addEventListener("resize",d),window.addEventListener("mousedown",v)),()=>{window.removeEventListener("resize",d),window.removeEventListener("mousedown",v)}),[s]),f("div",{ref:u,children:[f(ww,{...i,menuRef:h,open:s,options:n,onSelect:A,onClose:Q,style:c}),f(Cw,{onClick:w,children:[f(dc,{children:a?a.label:e}),f(hw,{dir:s?"up":"down"})]})]})}function ww({menuRef:e,open:t,style:n,options:r,onSelect:i,onClose:a,optionRenderer:o}){const[s,l]=Z(""),c=Y(()=>s?r.filter(d=>d.label.toLowerCase().includes(s.toLowerCase())):r,[r,s]),g=ee(Ol);ne(()=>(g.setState(d=>({...d,noBottomScroll:t})),()=>g.setState(d=>({...d,noBottomScroll:void 0}))),[t]);const u=j(d=>l(d.target.value),[]),h=j(d=>{d.key==="Escape"&&(l(""),a())},[]);return t?f(Pw,{ref:e,style:n,children:[f(gc,{placeholder:"Search...",onChange:u,onKeyDown:h,ref:pw}),f(hc,{children:[c.length===0&&s&&f(dc,{children:"No results found"}),c.map(d=>f("div",{onClick:()=>i(d),children:f(bw,{children:o?o(d):f("span",{children:d.label})})},d.key))]})]}):null}const mw=we`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,dc=D.div`
    #atlas-chat && {
        position: relative;
        z-index: 1;
        font-size: 13px;
        line-height: 22px;
        min-height: 22px;
        color: ${e=>e.theme.textColor};
    }
`,Cw=D(Fr)`
    #atlas-chat && {
        display: flex;
        justify-content: space-between;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 8px;

            &:first-child {
                margin-left: 0;
            }
        }

        width: 100%;
        text-align: left;
        border: ${e=>e.theme.inputBorder};

        svg {
            width: 22px;
        }

        &:hover:not(:disabled) {
            background: ${e=>e.theme.backgroundNotificationColor};
        }
    }
`,gc=D(lt)`
    #atlas-chat && {
        color: ${e=>e.theme.textColor};
        margin-bottom: 4px;
        padding: 2px 4px;
    }
`,hc=D.div`
    #atlas-chat && {
        max-height: 400px;
        overflow-y: auto;
    }
`,bw=D.div`
    #atlas-chat && {
        padding: 4px;
        font-size: 13px;
        border-radius: ${fc}px;
        color: ${e=>e.theme.textColor};
        transition: background-color 0.1s ease;
        cursor: pointer;

        &:hover {
            background: ${e=>e.theme.backgroundNotificationColor};
        }
    }
`,Pw=D.div`
    #atlas-chat && {
        box-sizing: border-box;
        font-family: Inter, -apple-system, helvetica, ubuntu, roboto, 'segoe ui',
            arial, sans-serif;

        position: fixed;
        z-index: 10;
        transform: translateY(-100%);
        padding: 4px;
        box-shadow: 0 4px 14px 0 ${e=>e.theme.shadowColor};
        background-color: ${e=>e.theme.backgroundColor};
        border-radius: ${fc}px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        ${e=>e.theme.noAnimation?"":$`
                      opacity: 0;
                      animation: ${mw} 0.25s forwards;
                  `}

        ${gc} {
            flex-shrink: 0;
        }

        ${hc} {
            flex: 1;
        }
    }
`,Lo=.2,yw=4,Qw={component:({message:e})=>{var r;const t=e.widget.widget,n=(r=e.widget.userInput)==null?void 0:r.selected;return f(Se,{children:[t.title&&f(Ve,{message:{text:t.title,sentAt:e.sentAt,side:X.BOT}}),e.widget.state===Pe.DONE&&f(Ve,{message:{text:t.options.find(i=>i.value===n).label,sentAt:e.sentAt,side:X.CUSTOMER}})]})},footerComponent:({conversation:e})=>{const t=e.lastMessage;if(!t||!("widget"in t)||t.widget.widget.type!=="dynamic_choices")return null;if(t.widget.state===Pe.DONE)return f(qe,{});const{widgetInteraction:n}=ee(he),r=t.widget.widget,[i,a]=Z(),o=s=>{i||(a(s),setTimeout(()=>n(t.conversationId,t.id,{selected:s}),Lo*1e3))};return r.options.length<=yw?f(dw,{children:r.options.map(s=>f(xw,{...s,onClick:()=>o(s.value),$selected:i===s.value,$skipped:!!i&&i!==s.value},s.value))}):f("div",{children:f(Aw,{onChange:s=>o(s.value),options:r.options.map(s=>({key:s.value,...s})),optionRenderer:s=>f(Iw,{children:[f("span",{children:s.label}),f(kw,{children:s.description})]})})})},tryPreviousPreview:!0,preview:(e,t,n)=>{const r=t.widget.widget;return t.widget.state===Pe.PENDING?n&&n()||"Please choose an option":r.options.find(i=>i.value===t.widget.userInput.selected).label}},xw=D(fw)`
    #${ae} && {
        transition: transform ${Lo}s ease, opacity ${Lo}s ease;
        transform: scale(${e=>e.$skipped?.9:1})
            translate(
                0px,
                ${e=>e.$skipped?10:e.$selected?-10:0}px
            );
        opacity: ${e=>e.$skipped||e.$selected?0:1};
    }
`,Iw=D.div`
    display: flex;
    flex-direction: column;

    & > * {
        // Because gap doesn't work in Android 5
        margin-top: 4px;

        &:first-child {
            margin-top: 0;
        }
    }
`,kw=D.div`
    #atlas-chat && {
        color: ${e=>e.theme.textFadeColor};
    }
`,Sw={component:Ve,tryPreviousPreview:!0,preview:(e,t,n)=>{var r;return((r=t.widget.userInput)==null?void 0:r.text)||n&&n()||"Please give your response"},footerComponent:({conversation:e})=>{const{widgetInteraction:t}=ee(he),{lastMessage:n}=e;return!n||!("widget"in n)?null:n.widget.state===Pe.DONE?f(qe,{}):f(On,{onSend:async(r,i)=>{await t(e.id,n.id,{text:r,attachments:i})},onInput:()=>{},defaultValue:""},e.id)},getMessages(e){return e.widget.widget.messages.map(t=>({side:t.role==="user"?X.CUSTOMER:X.BOT,text:t.content,sentAt:t.sentAt,conversationId:e.conversationId,id:e.id,type:Ot.EXTERNAL,fingerprintId:"",attachments:t.attachments}))}},Bw={component:Ve,tryPreviousPreview:!0,preview:(e,t,n)=>{var r;return((r=t.widget.userInput)==null?void 0:r.text)||n&&n()||"Please give your response"},footerComponent:({conversation:e})=>{const{widgetInteraction:t}=ee(he),{lastMessage:n}=e;return!n||!("widget"in n)?null:n.widget.state===Pe.DONE?f(qe,{}):f(On,{onSend:async(r,i)=>{await t(e.id,n.id,{text:r,attachments:i})},onInput:()=>{},defaultValue:""},e.id)},getMessages(e){var t;return(t=e.widget.widget.messages)==null?void 0:t.map(n=>({side:n.role==="user"?X.CUSTOMER:X.BOT,text:n.content,sentAt:n.sentAt,conversationId:e.conversationId,id:e.id,type:Ot.EXTERNAL,fingerprintId:"",attachments:n.attachments}))}};function Ow(e){return!!e.widget}const Dw={quick_reply:cA,send_form:qA,send_message:hA,user_input:vA,show_articles:tw,system_notification:sw,csat_question:Tn,csat_answer:Tn,csat_comment_question:Tn,csat_comment:Tn,csat_thanks:Tn,delay:uw,dynamic_choices:Qw,ai_classifier:Sw,ai_qna:Bw};function Mt(e){const t=r=>[r],n=Ow(e)?Dw[e.widget.widget.type]:gA;return{...n,getMessages:n.getMessages||t}}function Ew(e){if(e.lastMessage)return Mt(e.lastMessage).preview(e,e.lastMessage,()=>{const t=[...e.messages].reverse().find(n=>!Mt(n).tryPreviousPreview);if(t)return Mt(t).preview(e,t)})}function Tw(e,t){const{unread:n=0,message:r,text:i,author:a,date:o,...s}=e;return f(Gw,{...s,ref:t,children:[f(Hw,{message:r,hideStatus:!0}),f(_w,{children:[f(vc,{title:i,children:i}),f(Lw,{children:[a,o&&f(Fw,{children:o})]})]}),n>0&&f(Nw,{unread:n})]})}const Rw=Ae.forwardRef(Tw),Mw=we`
    0% {
        margin-right: -15px;
        opacity: 0;
        transform: scale(0.9);
    }

    80% {
        transform: scale(1.1);
    }

    100% {
        margin-right: 0;
        opacity: 1;
        transform: scale(1);
    }
`,Nw=D(yl)`
    #atlas-chat && {
        flex: 0 0 20px;
        margin-left: 10px; // Because gap doesn't work in Android 5
        ${e=>e.theme.noAnimation?"":$`
                      margin-right: -15px;
                      opacity: 0;
                      transform: scale(0.9);
                      animation: ${Mw} 0.2s ease forwards;
                  `}
    }
`,Fw=D.span`
    #atlas-chat &&::before {
        content: '';
        display: inline-block;
        width: 0.23em;
        height: 0.23em;
        border-radius: 50%;
        background: currentColor;
        vertical-align: middle;
        margin: 0.3em;
    }
`,Lw=D.div`
    #atlas-chat && {
        font-size: 12px;
        line-height: 18px;
        color: ${e=>e.theme.conversationMetaText};
    }
`,vc=D.div`
    #atlas-chat && {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${e=>e.theme.textColor};

        div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${e=>e.theme.textColor};
        }
    }
`,_w=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 13px;
        line-height: 21px;
        flex: 1;
        overflow: hidden;
    }
`,Hw=D(Mr)`
    #atlas-chat && {
        flex: 0 0 32px;
        margin-right: 10px; // Because gap doesn't work in Android 5
    }
`,nn=.2,Gw=D.button`
    #atlas-chat && {
        padding: 12px 10px;
        background: ${e=>e.theme.tileBackground};
        border: ${e=>e.theme.border};
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        text-align: left; // In older Android it was centered by default

        transition: transform ${nn}s ease, box-shadow ${nn}s ease,
            border-color ${nn}s ease;
        transform: scale(1);

        ${e=>e.$unread?$`
                      box-shadow: 0px 4px 14px rgba(38, 38, 38, 0.08);

                      &:hover {
                          transform: scale(0.98);
                          box-shadow: 0px 2px 6px rgba(38, 38, 38, 0.08);
                      }

                      &:focus-visible {
                          border-color: ${e.theme.textActiveColor};
                      }

                      &:active {
                          box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.08);
                          transform: scale(0.97);
                          transition: transform ${nn/2}s ease,
                              box-shadow ${nn/2}s ease,
                              border-color ${nn/2}s ease;
                      }

                      ${vc} {
                          font-weight: 600;
                      }
                  `:$`
                      &:hover,
                      &:focus-visible {
                          border-color: ${e.theme.textActiveColor};
                      }

                      &:active {
                          box-shadow: inset 0px 1px 2px rgba(38, 38, 38, 0.08);
                          transform: scale(0.99);
                      }
                  `}
    }
`;function zw(e){var t,n;return"widget"in e&&((n=(t=e.widget)==null?void 0:t.widget)==null?void 0:n.type)==="system_notification"}function Ww(e){const{messages:t}=e;for(let n=t.length;n--;)if(!zw(t[n]))return t[n];return t[t.length-1]}function Uw(e){const t=ke(),n=bn(e.sentAt);if(n.isSame(t,"day"))return n.format("h:mm A");const r=t.add(1-(t.get("day")||7),"day");return n.isSame(r,"day")||n.diff(r)>0?n.format("ddd"):n.isSame(t,"year")?n.format("MMM D"):n.format("MMM D, YYYY")}function $w(e,t){const{conversation:n,...r}=e,i=Y(()=>Ew(n)??"",[n]),a=Y(()=>n.messages.filter(c=>c.side===X.AGENT&&!c.read).length,[n.messages]),o=Y(()=>Ww(n),[n.messages]),s=Y(()=>o&&Uw(o),[o]),l=Y(()=>{if(o)return o.side===X.CUSTOMER?"You":o.side===X.BOT?"Bot":o.agent.firstName},[o]);return!o||!l?null:f(Rw,{...r,unread:a,message:o,text:i,author:l,date:s,ref:t})}const Vw=Ae.forwardRef($w),Kw="IntersectionObserver"in window&&window.IntersectionObserver;function _o(e={threshold:1}){if(!Kw)return[!1,null];const[t,n]=Z(!1),r=re();return ne(()=>{const i=r.current;if(!i)return;const a=new IntersectionObserver(([o])=>{const s=Math.round(o.boundingClientRect.top)!==Math.round(o.intersectionRect.top)||Math.round(o.boundingClientRect.height)!==Math.round(o.intersectionRect.height);n(s)},e);return a.observe(i),()=>{a.unobserve(i)}},[e]),[t,r]}const Qt=30,Ho=-1,Go=Qt-1,Yw=Qt*2-1;function Jw({className:e}){const{readConversations:t,unreadConversations:n,routing:r,widgetElementRef:i,settings:a}=ee(he),o=Y(()=>a.allowChatInClosedTicket?t:t.filter(A=>A.status!==Ke.CLOSED&&A.lastMessage&&(!("widget"in A.lastMessage)||!A.lastMessage.widget||A.lastMessage.widget.state===Pe.PENDING)),[t]),s=Y(()=>a.allowChatInClosedTicket?[]:t.filter(A=>!o.includes(A)),[a.allowChatInClosedTicket,t]),l=Y(()=>[n.length,o.length,s.length].filter(Boolean).length>1,[n,o,s]),[c,g]=_o(),[u,h]=_o(),[d,v]=_o(),w=re(null);return jw(i,()=>{var A,Q;return!!((A=w.current)!=null&&A.offsetHeight||(Q=w.current)!=null&&Q.offsetWidth)}),f(Zw,{className:e,tabIndex:-1,ref:w,"aria-label":"atlas-conversation-list",children:[l&&n.length?f(zo,{ref:g,$sticky:c,$top:Ho,children:"Unread Messages"}):null,n.map(A=>f(Rn,{conversation:A,onClick:()=>r.conversation(A.id),"data-conversation":A.id},A.id)),l&&o.length?f(zo,{ref:n.length?void 0:g,$sticky:n.length?u:c,$top:n.length?Go:Ho,children:["Read Messages",n.length?f(pc,{$top:Qt,ref:h}):null]}):null,o.map(A=>f(Rn,{conversation:A,onClick:()=>r.conversation(A.id),"data-conversation":A.id},A.id)),s.length?f(zo,{$sticky:l?d:c,ref:l?void 0:g,$top:n.length?o.length?Yw:Go:o.length?Go:Ho,children:["Closed Messages",l&&f(pc,{ref:v,$top:n.length?o.length?Qt*2:Qt:o.length?Qt:0})]}):null,s.map(A=>f(Rn,{conversation:A,onClick:()=>r.conversation(A.id),"data-conversation":A.id},A.id))]})}const Rn=D(Vw)`
    #${ae} && {
        margin: 4px 12px;
    }
`,pc=D.i`
    #${ae} && {
        height: 1px;
        display: block;
        top: -${e=>e.$top}px;
        margin-top: -1px;
        position: absolute;
    }
`,zo=D(Op)`
    #${ae} && {
        position: sticky;
        z-index: 1;
        height: ${Qt}px;
        line-height: ${Qt}px;
        top: ${e=>e.$top}px;
        ${e=>e.$sticky?$`
                      box-shadow: 0px 4px 4px -4px ${t=>t.theme.shadowColor};
                      border-bottom-color: ${t=>t.theme.textSuperFadeColor};
                  `:""}
    }
`,Zw=D.div`
    #${ae} && {
        display: flex;
        flex-direction: column;

        ${Rn}:first-child {
            margin-top: 18px;
        }

        ${Rn}:last-child {
            margin-bottom: 18px;
        }
    }
`,jw=(e,t)=>{En(i=>{var s,l,c,g,u,h;if(!t())return;const a=e.current;if(!a)return;const o=i.target;if(o)if(o.dataset.conversation){const d=(l=(s=o.nextElementSibling)==null?void 0:s.dataset)!=null&&l.conversation?o.nextElementSibling:(u=(g=(c=o.nextElementSibling)==null?void 0:c.nextElementSibling)==null?void 0:g.dataset)!=null&&u.conversation?o.nextElementSibling.nextElementSibling:void 0;d&&d.focus()}else(h=a.querySelector("button[data-conversation]"))==null||h.focus()},{key:"ArrowDown",targetRef:e}),En(i=>{var s,l,c,g,u,h;if(!t())return;const a=e.current;if(!a)return;const o=i.target;if(o)if(o.dataset.conversation){const d=(l=(s=o.previousElementSibling)==null?void 0:s.dataset)!=null&&l.conversation?o.previousElementSibling:(u=(g=(c=o.previousElementSibling)==null?void 0:c.previousElementSibling)==null?void 0:g.dataset)!=null&&u.conversation?o.previousElementSibling.previousElementSibling:void 0;d&&d.focus()}else(h=a.querySelector("button[data-conversation]"))==null||h.focus()},{key:"ArrowUp",targetRef:e})};function Xw(e){const{children:t,reverse:n,...r}=e;return f(qw,{...r,$reverse:n,children:t})}const qw=D.div`
    #atlas-chat && {
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${e=>e.$reverse?"row-reverse":"row"};

        // Because gap doesn't work in Android 5
        margin-top: -6px;
        margin-left: -6px;

        & > * {
            margin-top: 6px;
            margin-left: 6px;
        }
    }
`,em=8;function tm(e){const{articles:t,onOpen:n,helpCenterUrl:r,...i}=e;return t!=null&&t.length?f(im,{...i,children:[f(rm,{children:"Helpful Articles"}),f(Xw,{children:[t.map(a=>f(_r,{title:a.title,onClick:()=>n(a)},a.slug)),r&&t.length>em&&f(nm,{title:"View all",href:r,target:"_blank"})]})]}):null}const nm=D(_r)`
    font-weight: 600;
`,rm=D.div`
    #atlas-chat && {
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        color: ${e=>e.theme.textFadeColor};
        margin-bottom: 8px;
    }
`,im=D.div`
    #atlas-chat && {
        padding: 12px;
        border-top: ${e=>e.theme.border};
    }
`,Ac=()=>{const{customer:e,settings:t,routing:n}=ee(he),{baseUrl:r}=ee(Rt),i=e.isVisitor?t.visitorHelpcenterArticles:t.customerHelpcenterArticles,a=j(o=>o.slug==="all-articles"?n.articleCategory():n.article(o.slug),[n]);return f(tm,{articles:i,onOpen:a,helpCenterUrl:r})};function om(e,t){return f(am,{...e,ref:t})}const wc=Ae.forwardRef(om),am=D.div`
    #atlas-chat && {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
`;function sm(){const{settings:e,setAttachments:t,isDropActive:n,attachmentsMax:r}=ee(he),i=re(0),[a,o]=Z(null),s=j(u=>{if(u.preventDefault(),!n||Hr(u)||r===0)return;o({isLoading:!0});const h=Array.from(u.dataTransfer.files);return h.length>r&&h.splice(r),lm(h,e.uploaderApiKey).then(d=>{t(v=>[...v,...d.map(po)])}).finally(()=>{o(null),i.current=0})},[e.uploaderApiKey,t,r,n]),l=j(u=>{!n||Hr(u)||r===0||(i.current++,i.current===1&&o({isLoading:!1}))},[n,r]),c=j(u=>{!n||Hr(u)||r===0||(i.current--,i.current===0&&o(null))},[n,r]);return{showDropZone:a,onDrop:s,onDragEnter:l,onDragLeave:c,onDragOver:u=>{Hr(u)||u.preventDefault()}}}async function lm(e,t){try{const n=await Ao(t);return e.length===1?[await n.upload(e[0],{})]:n.multiupload(e,{})}catch(n){return console.warn("Error uploading files",n),[]}}function Hr(e){const t=e.dataTransfer.types;return!Array.from(t).some(n=>n==="Files")}function Mn({...e}){const{settings:t}=ee(he),n=sm();return f(Zv,{showAtlasCredentials:t.atlasBranded,...n,...e})}function cm(e){return f(Mn,{...e,bottomFlex:"center",bottom:f(To,{}),children:f(wc,{children:[f(um,{}),f(Ac,{})]})})}const um=D(Jw)`
    #${ae} && {
        flex: 1;
    }
`;function mc(e){return Object.prototype.toString.call(e)==="[object Object]"}function fm(e){return e.toLowerCase().replace(/^[^a-z\d]+|[^a-z\d]+$/g,"").replace(/[^a-z\d]+/g,"-")}function dm(e,t){if(!e.type.startsWith("heading-"))return;const n=e.children.reduce((i,a)=>i+a.text,""),r=fm(n);return t[r]=(t[r]||0)+1,t[r]===1?r:r+"_"+t[r]}function gm(e){let t,n;return mc(e)===!1?!1:(t=e.constructor,t===void 0?!0:(n=t.prototype,!(mc(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)))}const Cc=(e,t)=>e("span",{key:t,contentEditable:!1,style:{fontSize:0,lineHeight:0}},String.fromCodePoint(160));function hm(e){return gm(e)&&"text"in e&&typeof e.text=="string"}const vm=(e,{attributes:t,children:n})=>e("blockquote",Object.assign({},t,{className:"atlas-block atlas-block-quote"+(t.className?" "+t.className:"")}),n),pm=(e,{attributes:t,children:n,element:r})=>e("figure",Object.assign({},t,{className:"atlas-block atlas-block-icon"+(t.className?" "+t.className:""),contentEditable:!1}),[e("div",{key:"icon-text",className:"atlas-block-icon-text"},n),e("span",{key:"icon-emoji",className:"atlas-block-icon-emoji"},r.icon)]),Am=(e,{attributes:t,children:n})=>e("div",Object.assign({},t,{className:"atlas-block atlas-block-callout"+(t.className?" "+t.className:"")}),n),wm=(e,{attributes:t,children:n})=>e("div",Object.assign({},t,{className:"atlas-block atlas-block-horizontal-line"+(t.className?" "+t.className:"")}),n),mm=(e,{attributes:t,children:n,element:r,editing:i,extra:a})=>{const o=!r.align||r.align==="justify",s=r.align==="center"?"center":null,l=!o&&!s&&r.align!=="standard"?r.align:null;return e("div",Object.assign({},t,{className:"atlas-block atlas-block-image"+(t.className?" "+t.className:"")+(r.fingerprint?" atlas-block-image__placeholder":"")+(l?" atlas-block-image__float-"+l:"")+(s?" atlas-block-image__centered":"")+(o?" atlas-block-image__expanded":"")+(r.width?" atlas-block-image__sized":"")}),e(!i&&r.link?"a":"div",Object.assign({className:"atlas-block-image-container",contentEditable:!1,...!i&&r.link&&{href:r.link}},r.width?{style:{maxWidth:r.width+"px"}}:{}),[...i?[e("div",{key:"image-text",className:"atlas-block-image-text"},n)]:[],e("img",{key:"image",src:r.src||"/public/image-placeholder.svg",alt:r.alt,width:r.width}),...i&&!r.fingerprint?[e("span",{key:"image-resize-left",className:"atlas-block-image__resize-left"}),e("span",{key:"image-resize-right",className:"atlas-block-image__resize-right"}),e("span",{key:"image-resize-bottom",className:"atlas-block-image__resize-bottom"})]:[],a]))},Cm=(e,{attributes:t,children:n,element:r})=>{const i=!r.align||r.align==="justify",a=r.align==="center"?"center":null,o=!i&&!a&&r.align!=="standard"?r.align:null;return e("div",Object.assign({},t,{className:"atlas-block atlas-block-video"+(t.className?" "+t.className:"")+(o?" atlas-block-video__float-"+o:"")+(a?" atlas-block-video__centered":"")+(i?" atlas-block-video__expanded":"")}),e("div",{className:"atlas-block-video-container",contentEditable:!1},[e("div",{key:"video-text",className:"atlas-block-video-text"},n),e("video",{key:"video",controls:!0,title:r.alt,width:typeof r.width=="number"?r.width:640,height:typeof r.height=="number"?r.height:320},r.sources.map(s=>e("source",{key:s.type,src:s.url,type:s.type})))]))},bm=(e,{attributes:t,children:n,element:r})=>{const i=!r.align||r.align==="justify",a=r.align==="center"?"center":null,o=!i&&!a&&r.align!=="standard"?r.align:null,s=Object.assign({},t,{className:"atlas-block atlas-block-video-embed atlas-block-video-embed__"+r.service+(t.className?" "+t.className:"")+(o?" atlas-block-video-embed__float-"+o:"")+(a?" atlas-block-video-embed__centered":"")+(i?" atlas-block-video-embed__expanded":""),contentEditable:!1});return e("div",s,[e("div",{key:"leaf",className:"atlas-block-video-embed-text"},n),r.service==="vimeo"&&e("iframe",{key:"video-vimeo",className:"atlas-block-video-embed-iframe",src:"https://player.vimeo.com/video/"+r.resourceId,title:r.alt,allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture",width:640,height:360}),r.service==="youtube"&&e("iframe",{key:"video-youtube",className:"atlas-block-video-embed-iframe",src:"https://www.youtube.com/embed/"+r.resourceId,title:r.alt,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",width:560,height:315}),r.service==="loom"&&e("iframe",{key:"video-loom",className:"atlas-block-video-embed-iframe",src:"https://www.loom.com/embed/"+r.resourceId,title:r.alt,allowFullScreen:!0,width:640,height:400}),r.service==="clueso"&&e("iframe",{key:"video-clueso",className:"atlas-block-video-embed-iframe",src:`https://${r.cluesoSubdomain}.clueso.io/embed/${r.resourceId}`,title:r.alt,allowFullScreen:!0,width:560,height:315})])},Pm=(e,{attributes:t,children:n,element:r})=>{const i=r.source.startsWith("<"),a=Object.assign({},t,{className:"atlas-block atlas-block-embed"+(t.className?" "+t.className:""),contentEditable:!1,style:i?void 0:{height:r.height+"px"}});return e("div",a,[e("div",{key:"leaf",className:"atlas-block-embed-text"},n),i?e("div",{className:"atlas-block-embed-html",dangerouslySetInnerHTML:{__html:r.source},"data-source":r.source}):e("iframe",{className:"atlas-block-embed-iframe",key:"embed",title:r.alt,allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture",src:r.source,"data-height":r.height}),i?null:e("span",{key:"embed-resize",className:"atlas-block-embed__resize"})])},ym=(e,{attributes:t,children:n,element:r})=>{const i=r.type==="numbered-list";n=n&&Array.isArray(n)?n:[];const a=[],o=[];let s=0;for(let l=0;l<n.length;l++){const c=n[l],g=c.type==="li"||c.props.children&&c.props.children.props&&c.props.children.props.element&&c.props.children.props.element.type==="list-item";if(g&&(++s,o.push(c)),(!g||l===n.length-1)&&o.length){const u=!a.length&&"start"in r?r.start||1:s-o.length+1,h=i?"ol":"ul";a.push(e(h,{key:s,start:u,className:`atlas-block-list-${h}-element`},o.splice(0)))}g||a.push(c)}return e("div",Object.assign({},t,{className:"atlas-block atlas-block-list atlas-block-list-"+(i?"ordered":"unordered")+(t.className?" "+t.className:"")}),a)},Qm=(e,{attributes:t,children:n,element:r})=>{const i=r.align==="justify",a=r.align==="center"?"center":null,o=!i&&!a&&r.align!=="standard"?r.align:null;return e("div",{className:"atlas-block atlas-block-table"+(t.className?" "+t.className:"")+(o?" atlas-block-table__float-"+o:"")+(a?" atlas-block-table__centered":"")+(i?" atlas-block-table__expanded":"")},e("table",t,r.columns?[e("colgroup",{key:"columns"},r.columns.map((s,l)=>e("col",{key:l,width:s.width||"auto"}))),e("tbody",{key:"rows"},n)]:e("tbody",{},n)))},xm=(e,{attributes:t,children:n,element:r},i)=>{const a=r.align||null;return e("td",Object.assign({},t,{className:"atlas-block atlas-block-table-cell"+(t.className?" "+t.className:"")+(a?" atlas-block-table-cell__align-"+a:"")}),e(i,{},[n,e("span",{key:"cell-resize",className:"atlas-block-table-cell__resize"})]))};function Im(e,t,n,r={}){const i=n.element,a=n.attributes,o=n.children;switch(i.type){case"block-quote":return vm(e,{attributes:a,children:o});case"heading-one":return e("h1",Object.assign({},a,{className:"atlas-block atlas-block-heading-one"+(a.className?" "+a.className:"")}),o);case"heading-two":return e("h2",Object.assign({},a,{className:"atlas-block atlas-block-heading-two"+(a.className?" "+a.className:"")}),o);case"heading-three":return e("h3",Object.assign({},a,{className:"atlas-block atlas-block-heading-three"+(a.className?" "+a.className:"")}),o);case"code-block":return e("pre",Object.assign({},a,{className:"atlas-block atlas-block-code language-"+(a.language||"clike")+(a.className?" "+a.className:"")}),e("code",{},o));case"numbered-list":case"bulleted-list":return ym(e,{attributes:a,children:o,element:i});case"list-item":return e("li",Object.assign({},a,{className:"atlas-block atlas-block-list-item"+(a.className?" "+a.className:"")}),o);case"table":return Qm(e,{attributes:a,children:o,element:i});case"table-row":return e("tr",Object.assign({},a,{className:"atlas-block atlas-block-table-row"+(a.className?" "+a.className:"")}),o);case"table-cell":return xm(e,{attributes:a,children:o,element:i},t);case"paragraph":return e("p",Object.assign({},a,{className:"atlas-block atlas-block-paragraph"+(a.className?" "+a.className:"")}),o);case"horizontal-line":return wm(e,{attributes:a,children:o});case"image":return mm(e,{attributes:a,children:o,element:i,editing:r.editing,extra:r.extra});case"video":return Cm(e,{attributes:a,children:o,element:i});case"video-embed":return bm(e,{attributes:a,children:o,element:i});case"embed":return Pm(e,{attributes:a,children:o,element:i});case"callout":return Am(e,{attributes:a,children:o});case"icon":return pm(e,{attributes:a,children:o,element:i});default:return e("div",Object.assign({},a,{className:"atlas-block atlas-block-unknown"+(a.className?" "+a.className:"")}),o)}}function km(e,t,n,r={}){const i=n.leaf,a=n.attributes;let o=n.children;return i.code&&(o=e("code",{className:"atlas-leaf"},o)),i.bold&&(o=e("strong",{className:"atlas-leaf"},o)),i.italic&&(o=e("em",{className:"atlas-leaf"},o)),i.underline&&(o=e("u",{className:"atlas-leaf"},o)),i.strikethrough&&(o=e("s",{className:"atlas-leaf"},o)),typeof i.link=="string"&&(o=e("a",{href:i.link,className:"atlas-leaf",target:r&&r.baseUrl&&i.link.indexOf(r.baseUrl)===0?"_self":"_blank"},[Cc(e,"before"),e(t,{key:"content"},o),Cc(e,"after")])),e("span",Object.assign({},a,{className:"atlas-leaf"+(a.className?" "+a.className:"")},typeof i.constant=="string"?{"data-constant":i.constant}:{}),o)}function bc(e,t,n,r,i=void 0,a={}){if(hm(n))return km(e,t,{attributes:{key:i},leaf:n,children:n.text},a);{const o=dm(n,r);return Im(e,t,{attributes:{key:i,id:o},element:n,children:n.children.map((l,c)=>bc(e,t,l,r,c,a)),options:a})}}function Pc(e,t,n,r){const i={};return e(t,{},n.map((a,o)=>bc(e,t,a,i,o,r)))}const Sm=()=>f("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[f("path",{d:"M15.4331 8.28959L11.7378 8.74857C11.7142 8.7518 11.6902 8.74954 11.6676 8.74194C11.6451 8.73435 11.6246 8.72164 11.6077 8.70481C11.5909 8.68797 11.5782 8.66747 11.5706 8.64491C11.563 8.62234 11.5607 8.59833 11.564 8.57474L12.021 4.88138C12.0244 4.85243 12.0358 4.82502 12.0541 4.80228C12.0723 4.77954 12.0965 4.7624 12.1241 4.75281C12.1516 4.74323 12.1813 4.7416 12.2097 4.7481C12.2381 4.75461 12.2641 4.76898 12.2847 4.78959L13.353 5.85794L16.353 2.85794C16.4136 2.7974 16.5132 2.7974 16.5737 2.85794L17.4546 3.7388C17.4837 3.76817 17.5 3.80783 17.5 3.84915C17.5 3.89048 17.4837 3.93014 17.4546 3.95951L14.4566 6.95755L15.5249 8.02591C15.6148 8.11771 15.562 8.27396 15.4331 8.28959Z"}),f("path",{d:"M4.56687 11.7104L8.26219 11.2514C8.28577 11.2482 8.30979 11.2505 8.33235 11.2581C8.35492 11.2656 8.37542 11.2784 8.39225 11.2952C8.40909 11.312 8.4218 11.3325 8.42939 11.3551C8.43698 11.3777 8.43925 11.4017 8.43602 11.4253L7.97898 15.1186C7.97562 15.1476 7.96417 15.175 7.94595 15.1977C7.92772 15.2205 7.90345 15.2376 7.87593 15.2472C7.84841 15.2568 7.81874 15.2584 7.79033 15.2519C7.76193 15.2454 7.73592 15.231 7.71531 15.2104L6.64695 14.1421L3.64695 17.1421C3.58641 17.2026 3.4868 17.2026 3.42625 17.1421L2.54539 16.2612C2.51631 16.2318 2.5 16.1922 2.5 16.1508C2.5 16.1095 2.51631 16.0699 2.54539 16.0405L5.54344 13.0424L4.47508 11.9741C4.38523 11.8823 4.43797 11.726 4.56687 11.7104Z"})]}),Bm=()=>f("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:f("path",{d:"M16.6998 3.12643L13.0045 3.58541C12.8756 3.60104 12.8229 3.75729 12.9127 3.84909L13.9811 4.91745L10.983 7.91549C10.954 7.94486 10.9376 7.98452 10.9376 8.02585C10.9376 8.06717 10.954 8.10683 10.983 8.1362L11.8639 9.01706C11.9244 9.0776 12.024 9.0776 12.0846 9.01706L15.0846 6.01706L16.153 7.08541C16.1736 7.10602 16.1996 7.12039 16.228 7.1269C16.2564 7.1334 16.286 7.13177 16.3136 7.12219C16.3411 7.1126 16.3654 7.09546 16.3836 7.07272C16.4018 7.04998 16.4133 7.02257 16.4166 6.99362L16.8737 3.30026C16.8769 3.27667 16.8746 3.25266 16.867 3.23009C16.8594 3.20753 16.8467 3.18703 16.8299 3.17019C16.8131 3.15336 16.7926 3.14065 16.77 3.13306C16.7474 3.12546 16.7234 3.1232 16.6998 3.12643ZM8.13733 10.9819C8.10796 10.9528 8.0683 10.9365 8.02697 10.9365C7.98565 10.9365 7.94599 10.9528 7.91662 10.9819L4.91858 13.9819L3.85022 12.9135C3.8296 12.8929 3.8036 12.8786 3.77519 12.8721C3.74679 12.8656 3.71712 12.8672 3.6896 12.8768C3.66208 12.8864 3.63781 12.9035 3.61958 12.9262C3.60136 12.949 3.58991 12.9764 3.58654 13.0053L3.12756 16.6987C3.11584 16.8003 3.19983 16.8842 3.30139 16.8725L6.9967 16.4135C7.12561 16.3979 7.17834 16.2417 7.0885 16.1499L6.02014 15.0815L9.02014 12.0815C9.08069 12.021 9.08069 11.9214 9.02014 11.8608L8.13733 10.9819Z"})});function Om(e){return f(Dm,{...e})}const Dm=D.div`
    #atlas-chat && {
        /* Ported from /app/help-center/styles/content.module.css */
        /* Unused parts commented out in order to maintain consistent lines navigation */

        line-height: 1.5em;

        & > * {
            margin: 1.1em 0;
            white-space: pre-wrap;
        }

        & > *::before {
            content: '';
            display: block;
            overflow: hidden;
        }

        /* HEADINGS */

        .atlas-block-heading-two {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5em;
            color: inherit;
        }

        .atlas-block-heading-three {
            font-weight: 600;
            font-size: 14px;
            line-height: 1.5em;
            color: inherit;
        }

        /* CALLOUT */

        .atlas-block-callout {
            background: ${e=>e.theme.articleCalloutBackground};
            color: ${e=>e.theme.articleCalloutText};
            padding: 12px 16px;
            border-radius: 5px;
            border: 0.5px solid ${e=>e.theme.articleCalloutBorder};
            overflow: auto;
        }

        .atlas-block-callout .atlas-block-icon {
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            background: ${e=>e.theme.articleCalloutIconBackground};
            border-radius: 4px;
            margin: 0;
        }

        .atlas-block-callout .atlas-block-paragraph {
            margin: 0;
            flex: 1 0 auto;
            padding: 4px 0;
        }

        .atlas-block-callout .atlas-block-icon + .atlas-block-paragraph {
            margin-left: 44px;
        }

        /* MEDIA */

        .atlas-block-image-container,
        .atlas-block-video-container {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .atlas-block-image img,
        .atlas-block-video video,
        .atlas-block-video-embed iframe,
        .atlas-block-embed iframe {
            max-width: 100%;
            border-radius: 8px;
        }

        .atlas-block-image__expanded img {
            width: 100%;
        }

        .atlas-block-image__centered {
            text-align: center;
        }

        .atlas-block-video video {
            width: 100%;
            height: auto;
        }

        .atlas-block-image__float-left,
        .atlas-block-video__float-left,
        .atlas-block-video-embed__float-left {
            float: left;
        }

        .atlas-block-image__float-right,
        .atlas-block-video__float-right,
        .atlas-block-video-embed__float-right {
            float: right;
        }

        .atlas-block-image__centered,
        .atlas-block-image__float-left,
        .atlas-block-video__float-left,
        .atlas-block-video-embed__float-left {
            margin-right: 2em;
        }

        .atlas-block-image__centered,
        .atlas-block-image__float-right,
        .atlas-block-video__float-right,
        .atlas-block-video-embed__float-right {
            margin-left: 2em;
        }

        .atlas-block-video__centered,
        .atlas-block-video-embed__centered {
            margin-left: auto;
            margin-right: auto;
        }

        .atlas-block-image__float-left,
        .atlas-block-image__float-right {
            max-width: 60%;
        }

        .atlas-block-video__centered,
        .atlas-block-video__float-left,
        .atlas-block-video__float-right,
        .atlas-block-video-embed__centered,
        .atlas-block-video-embed__float-left,
        .atlas-block-video-embed__float-right {
            width: 60%;
        }

        .atlas-block-video-embed,
        .atlas-block-embed {
            position: relative;
            text-align: center;
        }

        .atlas-block-video-embed__youtube {
            padding-bottom: 56.3%;
        }

        .atlas-block-video-embed__clueso {
            overflow: hidden;
            padding-bottom: 60%;
            border-radius: 8px 8px 0 0;

            .atlas-block-video-embed-iframe {
                margin-top: -20px;
                border-radius: 0 0 8px 8px;
            }
        }

        .atlas-block-video-embed__clueso.atlas-block-video-embed__centered,
        .atlas-block-video-embed__clueso.atlas-block-video-embed__float-left,
        .atlas-block-video-embed__clueso.atlas-block-video-embed__float-right {
            padding-bottom: 36.8%;
        }

        .atlas-block-video-embed__youtube.atlas-block-video-embed__centered,
        .atlas-block-video-embed__youtube.atlas-block-video-embed__float-left,
        .atlas-block-video-embed__youtube.atlas-block-video-embed__float-right {
            padding-bottom: 33.8%;
        }

        .atlas-block-video-embed__vimeo {
            padding-bottom: 56.3%;
        }

        .atlas-block-video-embed__vimeo.atlas-block-video-embed__centered,
        .atlas-block-video-embed__vimeo.atlas-block-video-embed__float-left,
        .atlas-block-video-embed__vimeo.atlas-block-video-embed__float-right {
            padding-bottom: 33.8%;
        }

        .atlas-block-video-embed__loom {
            padding-bottom: 62.5%;
        }

        .atlas-block-video-embed__loom.atlas-block-video-embed__centered,
        .atlas-block-video-embed__loom.atlas-block-video-embed__float-left,
        .atlas-block-video-embed__loom.atlas-block-video-embed__float-right {
            padding-bottom: 37.5%;
        }

        .atlas-block-video-embed iframe,
        .atlas-block-embed .atlas-block-embed-iframe {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 0;
            width: 100%;
            height: 100%;
        }

        /* TABLES */

        .atlas-block-table {
            overflow: auto;
        }

        .atlas-block-table > table {
            border-collapse: collapse;
        }

        .atlas-block-table-cell {
            border: 1px solid ${e=>e.theme.articleTableBorder};
            padding: 5px 10px;
            vertical-align: top;
            min-width: 85px;
        }

        .atlas-block-table__expanded > table {
            min-width: 100%;
        }

        .atlas-block-table__centered > table {
            margin-left: auto;
            margin-right: auto;
        }

        .atlas-block-table__float-right {
            float: right;
            margin-left: 2em;
        }

        .atlas-block-table__float-left {
            float: left;
            margin-right: 2em;
        }

        .atlas-block-table-cell__align-left {
            text-align: left;
        }

        .atlas-block-table-cell__align-right {
            text-align: right;
        }

        .atlas-block-table-cell__align-center {
            text-align: center;
        }

        /* LISTS */

        .atlas-block-list > ul,
        .atlas-block-list > ol {
            margin: 0;
            padding-left: 3em;
        }

        .atlas-block-list .atlas-block-list {
            padding-left: 2em;
        }

        .atlas-block-list > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol {
            list-style-type: decimal;
        }

        .atlas-block-list .atlas-block-list > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol {
            list-style-type: lower-latin;
        }

        .atlas-block-list .atlas-block-list .atlas-block-list > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ol {
            list-style-type: lower-roman;
        }

        .atlas-block-list > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul {
            list-style-type: disc;
        }

        .atlas-block-list .atlas-block-list > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul {
            list-style-type: circle;
        }

        .atlas-block-list .atlas-block-list .atlas-block-list > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul,
        .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            .atlas-block-list
            > ul {
            list-style-type: square;
        }

        /* HORIZONTAL LINES */

        .atlas-block-horizontal-line {
            overflow: hidden;
        }

        .atlas-block-horizontal-line::after {
            content: '';
            display: block;
            background: ${e=>e.theme.articleHorizontalLine};
            height: 1px;
        }

        /* CODE */

        .atlas-block-code {
            background: ${e=>e.theme.articleCodeBackground};
            color: ${e=>e.theme.articleCodeText};
            font-family: 'JetBrains Mono', Consolas, Monaco, 'Andale Mono',
                'Ubuntu Mono', monospace;
            padding: 1em;
            border-radius: 6px;
            overflow: auto;
            tab-size: 4;
            box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
            white-space: pre;
            margin-bottom: 0;
        }

        code.atlas-leaf {
            background: ${e=>e.theme.articleLeafCodeBackground};
            color: ${e=>e.theme.articleLeafCodeText};
            padding: 0.2em 0.4em;
            border-radius: 2px;
        }

        a.atlas-leaf {
            color: ${e=>e.theme.articleLeafLinkColor};
            text-decoration: underline;
        }

        a.atlas-leaf:hover {
            text-decoration: none;
        }

        /* QUOTE */

        .atlas-block-quote {
            border-left: 4px solid ${e=>e.theme.articleQuoteBorder};
            padding-left: 0.8em;
            overflow: auto;
        }
    }
`;function Em(){return f("svg",{width:"22",height:"22",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.04688 4.44678H10.0312C10.1258 4.44678 10.2031 4.36943 10.2031 4.2749V3.07178C10.2031 2.97725 10.1258 2.8999 10.0312 2.8999H4.1875C3.80723 2.8999 3.5 3.20713 3.5 3.5874V18.4312C3.5 18.8114 3.80723 19.1187 4.1875 19.1187H17.9375C18.3178 19.1187 18.625 18.8114 18.625 18.4312V10.939C18.625 10.8444 18.5477 10.7671 18.4531 10.7671H17.25C17.1555 10.7671 17.0781 10.8444 17.0781 10.939V17.5718H5.04688V4.44678ZM15.1303 4.88314L14.0088 3.76165C13.9861 3.73882 13.9703 3.71008 13.9631 3.67868C13.9559 3.64728 13.9576 3.6145 13.9682 3.58406C13.9787 3.55362 13.9975 3.52674 14.0226 3.50648C14.0476 3.48622 14.0778 3.4734 14.1098 3.46947L17.9641 3.01829C18.0737 3.0054 18.1682 3.09779 18.1553 3.20951L17.7041 7.0638C17.687 7.2056 17.5129 7.26576 17.412 7.16478L16.2862 6.039L10.7819 11.5433C10.7153 11.6099 10.6057 11.6099 10.5391 11.5433L9.62816 10.6324C9.56156 10.5658 9.56156 10.4562 9.62816 10.3896L15.1303 4.88314Z"})})}function Tm({articleSlug:e,articleSection:t,...n}){const{hcService:r}=ee(Rt),{expanded:i,toggleExpand:a,routing:o}=ee(he),[s,l]=Z(null),c=Re(o.back),g=j(()=>s&&window.open(s==null?void 0:s.url),[s==null?void 0:s.url]);ne(()=>{r.getArticle(e).then(d=>{if(!d)throw new Error("Missing");return l(d)}).catch(d=>{console.error("Error getting article:",d),c.current()})},[e]);const u=Y(()=>Pc(We,Se,s!=null&&s.content?JSON.parse(s.content):[]),[s]),h=re(null);return ne(()=>{if(!t)return;let d=3;const v=setInterval(()=>{var A;const w=(A=h.current)==null?void 0:A.querySelector(`#${t}`);w?(clearInterval(v),w.scrollIntoView({behavior:"smooth"})):--d<=0&&clearInterval(v)},20);return()=>clearInterval(v)},[u,t]),We(Mn,{...n,contentRef:h,key:e},f("div",{className:"article-view",children:s?f(Se,{children:[f(Fm,{children:[r.hasCustomDomain&&f(yc,{onClick:g,children:f(Nm,{})}),f(yc,{type:"button",onClick:a,children:i?f(Sm,{}):f(Bm,{})})]}),f(Mm,{children:[f(Rm,{children:s.title}),f(Om,{children:u})]})]}):"..."}))}const Rm=D.div`
    #${ae} && {
        font-size: 16px;
        line-height: 1.5em;
        margin-top: 0;
    }
`,Mm=D.div`
    #${ae} && {
        margin: 8px 16px 16px;
    }
`,Nm=D(Em)`
    #${ae} && {
        transform: scale(0.9);
    }
`,yc=D.button`
    #${ae} && {
        display: none;
        align-items: center;

        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;

        color: inherit;
        font-weight: 600;
        line-height: normal;

        transform: scale(1);
        transition: transform 0.2s ease;

        &:active {
            transform: scale(0.9);
        }

        @media (min-width: 430px) {
            display: flex;
        }
    }
`,Fm=D.div`
    #${ae} && {
        margin: 16px 16px 0;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        & > * {
            // Because gap doesn't work in Android 5
            margin-left: 10px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
`;function Lm(e){return f(_m,{...e})}const _m=D(Gl)`
    #atlas-chat && {
        padding: 8px 12px;
        background: ${e=>e.theme.backgroundNotificationColor};
        color: ${e=>e.theme.textColor};
        font-size: 13px;
        line-height: 21px;
        text-align: center;
        border-bottom: ${e=>e.theme.border};
    }
`;var Gr={exports:{}},Hm=Gr.exports,Qc;function Gm(){return Qc||(Qc=1,function(e,t){(function(n,r){e.exports=r()})(Hm,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d\d/,a=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},l=function(w){return(w=+w)+(w>68?1900:2e3)},c=function(w){return function(A){this[w]=+A}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(w){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var Q=A.match(/([+-]|\d\d)/g),m=60*Q[1]+(+Q[2]||0);return m===0?0:Q[0]==="+"?-m:m}(w)}],u=function(w){var A=s[w];return A&&(A.indexOf?A:A.s.concat(A.f))},h=function(w,A){var Q,m=s.meridiem;if(m){for(var I=1;I<=24;I+=1)if(w.indexOf(m(I,0,A))>-1){Q=I>12;break}}else Q=w===(A?"pm":"PM");return Q},d={A:[o,function(w){this.afternoon=h(w,!1)}],a:[o,function(w){this.afternoon=h(w,!0)}],S:[/\d/,function(w){this.milliseconds=100*+w}],SS:[i,function(w){this.milliseconds=10*+w}],SSS:[/\d{3}/,function(w){this.milliseconds=+w}],s:[a,c("seconds")],ss:[a,c("seconds")],m:[a,c("minutes")],mm:[a,c("minutes")],H:[a,c("hours")],h:[a,c("hours")],HH:[a,c("hours")],hh:[a,c("hours")],D:[a,c("day")],DD:[i,c("day")],Do:[o,function(w){var A=s.ordinal,Q=w.match(/\d+/);if(this.day=Q[0],A)for(var m=1;m<=31;m+=1)A(m).replace(/\[|\]/g,"")===w&&(this.day=m)}],M:[a,c("month")],MM:[i,c("month")],MMM:[o,function(w){var A=u("months"),Q=(u("monthsShort")||A.map(function(m){return m.slice(0,3)})).indexOf(w)+1;if(Q<1)throw new Error;this.month=Q%12||Q}],MMMM:[o,function(w){var A=u("months").indexOf(w)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,c("year")],YY:[i,function(w){this.year=l(w)}],YYYY:[/\d{4}/,c("year")],Z:g,ZZ:g};function v(w){var A,Q;A=w,Q=s&&s.formats;for(var m=(w=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(k,y,O){var M=O&&O.toUpperCase();return y||Q[O]||n[O]||Q[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(S,R,x){return R||x.slice(1)})})).match(r),I=m.length,b=0;b<I;b+=1){var C=m[b],p=d[C],P=p&&p[0],E=p&&p[1];m[b]=E?{regex:P,parser:E}:C.replace(/^\[|\]$/g,"")}return function(k){for(var y={},O=0,M=0;O<I;O+=1){var S=m[O];if(typeof S=="string")M+=S.length;else{var R=S.regex,x=S.parser,B=k.slice(M),F=R.exec(B)[0];x.call(y,F),k=k.replace(F,"")}}return function(L){var T=L.afternoon;if(T!==void 0){var H=L.hours;T?H<12&&(L.hours+=12):H===12&&(L.hours=0),delete L.afternoon}}(y),y}}return function(w,A,Q){Q.p.customParseFormat=!0,w&&w.parseTwoDigitYear&&(l=w.parseTwoDigitYear);var m=A.prototype,I=m.parse;m.parse=function(b){var C=b.date,p=b.utc,P=b.args;this.$u=p;var E=P[1];if(typeof E=="string"){var k=P[2]===!0,y=P[3]===!0,O=k||y,M=P[2];y&&(M=P[2]),s=this.$locale(),!k&&M&&(s=Q.Ls[M]),this.$d=function(B,F,L){try{if(["x","X"].indexOf(F)>-1)return new Date((F==="X"?1e3:1)*B);var T=v(F)(B),H=T.year,N=T.month,_=T.day,W=T.hours,U=T.minutes,J=T.seconds,q=T.milliseconds,oe=T.zone,te=new Date,fe=_||(H||N?1:te.getDate()),le=H||te.getFullYear(),ce=0;H&&!N||(ce=N>0?N-1:te.getMonth());var ve=W||0,Ee=U||0,Ye=J||0,ut=q||0;return oe?new Date(Date.UTC(le,ce,fe,ve,Ee,Ye,ut+60*oe.offset*1e3)):L?new Date(Date.UTC(le,ce,fe,ve,Ee,Ye,ut)):new Date(le,ce,fe,ve,Ee,Ye,ut)}catch{return new Date("")}}(C,E,p),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),O&&C!=this.format(E)&&(this.$d=new Date("")),s={}}else if(E instanceof Array)for(var S=E.length,R=1;R<=S;R+=1){P[1]=E[R-1];var x=Q.apply(this,P);if(x.isValid()){this.$d=x.$d,this.$L=x.$L,this.init();break}R===S&&(this.$d=new Date(""))}else I.call(this,b)}}})}(Gr)),Gr.exports}var zm=Gm();const Wm=Ze(zm);var zr={exports:{}},Um=zr.exports,xc;function $m(){return xc||(xc=1,function(e,t){(function(n,r){e.exports=r()})(Um,function(){var n,r,i=1e3,a=6e4,o=36e5,s=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,g=2628e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:c,months:g,days:s,hours:o,minutes:a,seconds:i,milliseconds:1,weeks:6048e5},d=function(p){return p instanceof b},v=function(p,P,E){return new b(p,E,P.$l)},w=function(p){return r.p(p)+"s"},A=function(p){return p<0},Q=function(p){return A(p)?Math.ceil(p):Math.floor(p)},m=function(p){return Math.abs(p)},I=function(p,P){return p?A(p)?{negative:!0,format:""+m(p)+P}:{negative:!1,format:""+p+P}:{negative:!1,format:""}},b=function(){function p(E,k,y){var O=this;if(this.$d={},this.$l=y,E===void 0&&(this.$ms=0,this.parseFromMilliseconds()),k)return v(E*h[w(k)],this);if(typeof E=="number")return this.$ms=E,this.parseFromMilliseconds(),this;if(typeof E=="object")return Object.keys(E).forEach(function(R){O.$d[w(R)]=E[R]}),this.calMilliseconds(),this;if(typeof E=="string"){var M=E.match(u);if(M){var S=M.slice(2).map(function(R){return R!=null?Number(R):0});return this.$d.years=S[0],this.$d.months=S[1],this.$d.weeks=S[2],this.$d.days=S[3],this.$d.hours=S[4],this.$d.minutes=S[5],this.$d.seconds=S[6],this.calMilliseconds(),this}}return this}var P=p.prototype;return P.calMilliseconds=function(){var E=this;this.$ms=Object.keys(this.$d).reduce(function(k,y){return k+(E.$d[y]||0)*h[y]},0)},P.parseFromMilliseconds=function(){var E=this.$ms;this.$d.years=Q(E/c),E%=c,this.$d.months=Q(E/g),E%=g,this.$d.days=Q(E/s),E%=s,this.$d.hours=Q(E/o),E%=o,this.$d.minutes=Q(E/a),E%=a,this.$d.seconds=Q(E/i),E%=i,this.$d.milliseconds=E},P.toISOString=function(){var E=I(this.$d.years,"Y"),k=I(this.$d.months,"M"),y=+this.$d.days||0;this.$d.weeks&&(y+=7*this.$d.weeks);var O=I(y,"D"),M=I(this.$d.hours,"H"),S=I(this.$d.minutes,"M"),R=this.$d.seconds||0;this.$d.milliseconds&&(R+=this.$d.milliseconds/1e3,R=Math.round(1e3*R)/1e3);var x=I(R,"S"),B=E.negative||k.negative||O.negative||M.negative||S.negative||x.negative,F=M.format||S.format||x.format?"T":"",L=(B?"-":"")+"P"+E.format+k.format+O.format+F+M.format+S.format+x.format;return L==="P"||L==="-P"?"P0D":L},P.toJSON=function(){return this.toISOString()},P.format=function(E){var k=E||"YYYY-MM-DDTHH:mm:ss",y={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return k.replace(l,function(O,M){return M||String(y[O])})},P.as=function(E){return this.$ms/h[w(E)]},P.get=function(E){var k=this.$ms,y=w(E);return y==="milliseconds"?k%=1e3:k=y==="weeks"?Q(k/h[y]):this.$d[y],k||0},P.add=function(E,k,y){var O;return O=k?E*h[w(k)]:d(E)?E.$ms:v(E,this).$ms,v(this.$ms+O*(y?-1:1),this)},P.subtract=function(E,k){return this.add(E,k,!0)},P.locale=function(E){var k=this.clone();return k.$l=E,k},P.clone=function(){return v(this.$ms,this)},P.humanize=function(E){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!E)},P.valueOf=function(){return this.asMilliseconds()},P.milliseconds=function(){return this.get("milliseconds")},P.asMilliseconds=function(){return this.as("milliseconds")},P.seconds=function(){return this.get("seconds")},P.asSeconds=function(){return this.as("seconds")},P.minutes=function(){return this.get("minutes")},P.asMinutes=function(){return this.as("minutes")},P.hours=function(){return this.get("hours")},P.asHours=function(){return this.as("hours")},P.days=function(){return this.get("days")},P.asDays=function(){return this.as("days")},P.weeks=function(){return this.get("weeks")},P.asWeeks=function(){return this.as("weeks")},P.months=function(){return this.get("months")},P.asMonths=function(){return this.as("months")},P.years=function(){return this.get("years")},P.asYears=function(){return this.as("years")},p}(),C=function(p,P,E){return p.add(P.years()*E,"y").add(P.months()*E,"M").add(P.days()*E,"d").add(P.hours()*E,"h").add(P.minutes()*E,"m").add(P.seconds()*E,"s").add(P.milliseconds()*E,"ms")};return function(p,P,E){n=E,r=E().$utils(),E.duration=function(O,M){var S=E.locale();return v(O,{$l:S},M)},E.isDuration=d;var k=P.prototype.add,y=P.prototype.subtract;P.prototype.add=function(O,M){return d(O)?C(this,O,1):k.bind(this)(O,M)},P.prototype.subtract=function(O,M){return d(O)?C(this,O,-1):y.bind(this)(O,M)}}})}(zr)),zr.exports}var Vm=$m();const Km=Ze(Vm);var Wr={exports:{}},Ym=Wr.exports,Ic;function Jm(){return Ic||(Ic=1,function(e,t){(function(n,r){e.exports=r()})(Ym,function(){return function(n,r,i){r.prototype.isToday=function(){var a="YYYY-MM-DD",o=i();return this.format(a)===o.format(a)}}})}(Wr)),Wr.exports}var Zm=Jm();const jm=Ze(Zm);var Ur={exports:{}},Xm=Ur.exports,kc;function qm(){return kc||(kc=1,function(e,t){(function(n,r){e.exports=r()})(Xm,function(){return function(n,r,i){var a=r.prototype,o=function(u){return u&&(u.indexOf?u:u.s)},s=function(u,h,d,v,w){var A=u.name?u:u.$locale(),Q=o(A[h]),m=o(A[d]),I=Q||m.map(function(C){return C.slice(0,v)});if(!w)return I;var b=A.weekStart;return I.map(function(C,p){return I[(p+(b||0))%7]})},l=function(){return i.Ls[i.locale()]},c=function(u,h){return u.formats[h]||function(d){return d.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(v,w,A){return w||A.slice(1)})}(u.formats[h.toUpperCase()])},g=function(){var u=this;return{months:function(h){return h?h.format("MMMM"):s(u,"months")},monthsShort:function(h){return h?h.format("MMM"):s(u,"monthsShort","months",3)},firstDayOfWeek:function(){return u.$locale().weekStart||0},weekdays:function(h){return h?h.format("dddd"):s(u,"weekdays")},weekdaysMin:function(h){return h?h.format("dd"):s(u,"weekdaysMin","weekdays",2)},weekdaysShort:function(h){return h?h.format("ddd"):s(u,"weekdaysShort","weekdays",3)},longDateFormat:function(h){return c(u.$locale(),h)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};a.localeData=function(){return g.bind(this)()},i.localeData=function(){var u=l();return{firstDayOfWeek:function(){return u.weekStart||0},weekdays:function(){return i.weekdays()},weekdaysShort:function(){return i.weekdaysShort()},weekdaysMin:function(){return i.weekdaysMin()},months:function(){return i.months()},monthsShort:function(){return i.monthsShort()},longDateFormat:function(h){return c(u,h)},meridiem:u.meridiem,ordinal:u.ordinal}},i.months=function(){return s(l(),"months")},i.monthsShort=function(){return s(l(),"monthsShort","months",3)},i.weekdays=function(u){return s(l(),"weekdays",null,null,u)},i.weekdaysShort=function(u){return s(l(),"weekdaysShort","weekdays",3,u)},i.weekdaysMin=function(u){return s(l(),"weekdaysMin","weekdays",2,u)}}})}(Ur)),Ur.exports}var e0=qm();const t0=Ze(e0);var $r={exports:{}},n0=$r.exports,Sc;function r0(){return Sc||(Sc=1,function(e,t){(function(n,r){e.exports=r()})(n0,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(r,i,a){var o=i.prototype,s=o.format;a.en.formats=n,o.format=function(l){l===void 0&&(l="YYYY-MM-DDTHH:mm:ssZ");var c=this.$locale().formats,g=function(u,h){return u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(d,v,w){var A=w&&w.toUpperCase();return v||h[w]||n[w]||h[A].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,m,I){return m||I.slice(1)})})}(l,c===void 0?{}:c);return s.call(this,g)}}})}($r)),$r.exports}var i0=r0();const o0=Ze(i0);var Vr={exports:{}},a0=Vr.exports,Bc;function s0(){return Bc||(Bc=1,function(e,t){(function(n,r){e.exports=r()})(a0,function(){return function(n,r,i){n=n||{};var a=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(c,g,u,h){return a.fromToBase(c,g,u,h)}i.en.relativeTime=o,a.fromToBase=function(c,g,u,h,d){for(var v,w,A,Q=u.$locale().relativeTime||o,m=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],I=m.length,b=0;b<I;b+=1){var C=m[b];C.d&&(v=h?i(c).diff(u,C.d,!0):u.diff(c,C.d,!0));var p=(n.rounding||Math.round)(Math.abs(v));if(A=v>0,p<=C.r||!C.r){p<=1&&b>0&&(C=m[b-1]);var P=Q[C.l];d&&(p=d(""+p)),w=typeof P=="string"?P.replace("%d",p):P(p,g,C.l,A);break}}if(g)return w;var E=A?Q.future:Q.past;return typeof E=="function"?E(w):E.replace("%s",w)},a.to=function(c,g){return s(c,g,this,!0)},a.from=function(c,g){return s(c,g,this)};var l=function(c){return c.$u?i.utc():i()};a.toNow=function(c){return this.to(l(this),c)},a.fromNow=function(c){return this.from(l(this),c)}}})}(Vr)),Vr.exports}var l0=s0();const c0=Ze(l0);var Kr={exports:{}},u0=Kr.exports,Oc;function f0(){return Oc||(Oc=1,function(e,t){(function(n,r){e.exports=r()})(u0,function(){return function(n,r){r.prototype.weekday=function(i){var a=this.$locale().weekStart||0,o=this.$W,s=(o<a?o+7:o)-a;return this.$utils().u(i)?s:this.subtract(s,"day").add(i,"day")}}})}(Kr)),Kr.exports}var d0=f0();const g0=Ze(d0);ke.extend(Wm),ke.extend(Km),ke.extend(jm),ke.extend(t0),ke.extend(o0),ke.extend(c0),ke.extend(as),ke.extend(Ei),ke.extend(g0);const h0=e=>e.isSame(ke(),"year"),Dc=(e,t,n)=>{const r=h0(e);return e.format(r?t:n)};function Ec(e){const{message:t,...n}=e,r=new Date,i=zl(t.sentAt),a=Dc(i,"MMM D","MMM D, YYYY"),o=i.isSame(r,"day")?`Today, ${a}`:i.add(1,"day").isSame(r,"day")?`Yesterday, ${a}`:a;return f(v0,{...n,children:o})}const v0=D.div`
    #atlas-chat && {
        color: ${e=>e.theme.textFadeColor};
        line-height: 22px;
        font-size: 12px;
        text-align: center;
    }
`;function p0(e){return f(A0,{...e,children:"New Messages"})}const A0=D.div`
    #atlas-chat && {
        background: ${e=>e.theme.backgroundNotificationColor};
        line-height: 22px;
        font-size: 12px;
        font-weight: 600;
        text-align: center;
    }
`;function Tc(e){var t;return e?e.split(Rc).map(n=>n.replace(w0,function(r){return'<a target="_blank" href="'+(r.match(/^https?:\/\//i)?r:"http://"+r)+'">'+r+"</a>"})).join(((t=e.match(Rc))==null?void 0:t.join(""))||""):""}const w0=/\b(https?:\/\/[^\s/$.?#].[^\s]*)\b|(?:www\.|[a-zA-Z0-9]+\.)[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?/gi,Rc=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;function Wo(e,t=new Date,n=!1){const r=n?e:Tc(e.trim()).replaceAll(`
`,"<br>");return r?{id:"welcome-message",conversationId:"",side:X.BOT,text:r,sentAt:t}:null}const Mc=7,Uo=5,$o=0,m0=6,C0=0,Nc=86400,b0=6e4;function P0(e){return e.getSeconds()+e.getMinutes()*60+e.getHours()*60*60}function xt(e,t){if(e=new Date(e.getTime()),t===0)return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e;const n=t%60,r=Math.floor(t/60)%60,i=Math.floor((t-r*60-n)/3600)%24,a=Math.floor(t/Nc);return e.setHours(i),e.setMinutes(r),e.setSeconds(n),e.setMilliseconds(0),a&&e.setDate(e.getDate()+a),e}function wt(e,t){return new Date(e.getTime()+t*b0)}function Fc(e,t){const n=t.getTimezoneOffset()+e.companyTimezoneOffset;t=wt(t,n);const r=P0(t),i=e.businessHoursOpen||C0,a=e.businessHoursClose||Nc,o=t.getDay();if(e.businessHoursDays==di.WEEKDAYS&&(o==$o||o==m0||o==Uo&&r>a)){const s=xt(t,a),l=o==$o?2:o-Uo;s.setDate(s.getDate()-l);const c=xt(t,i),g=o==$o?1:Mc-o+1;return c.setDate(c.getDate()+g),[wt(s,-n),wt(c,-n)]}if(e.businessHoursDays==di.WEEKENDS&&o<=Uo){const s=xt(t,a);s.setDate(s.getDate()-o);const l=xt(t,i);return l.setDate(l.getDate()+(Mc-1-o)),[wt(s,-n),wt(l,-n)]}if(r<i){const s=xt(t,a);s.setDate(s.getDate()-1);const l=xt(t,i);return[wt(s,-n),wt(l,-n)]}if(r>a){const s=xt(t,a),l=xt(t,i);return l.setDate(l.getDate()+1),[wt(s,-n),wt(l,-n)]}return!1}function y0(e){const n=e.toString().match(/\(.+\)/g);let r=n&&n.length?n[0]:"";r=r.replace("(","").replace(")","");let i="";return r.split(" ").forEach(a=>{i+=a.split("")[0]}),i}function Yr(e,t=new Date){return!e.applyBusinessHours||!e.enabledBusinessHours?!0:Lc(e)?!Fc(e,t):!1}function Lc(e){return typeof e.companyTimezoneOffset=="number"}const Vo="14px";function _c(e){return f(Q0,{...e})}const Q0=D.div`
    #${ae} && {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;

        > * {
            margin-left: 12px;
            margin-right: 12px;
        }

        // Not a single padding, because animation would trigger scroll to appear

        padding-top: ${Vo};

        > * {
            // Because gap doesn't work in Android 5
            margin-bottom: ${Vo};
        }

        > ${Nr}:last-child {
            margin-bottom: 0;
            padding-bottom: ${Vo};
            overflow: hidden;
        }
    }
`,x0=61e3;function I0(e,t){return e.side!==t.side?!1:e.side===X.CUSTOMER?!0:e.side===X.BOT?"widget"in e&&e.widget&&"widget"in t&&t.widget?e.widget.id===t.widget.id:!1:"agent"in e&&"agent"in t&&e.agent.id===t.agent.id}function Ko(e,t){return bn(t).isSame(bn(e),"day")}function Hc(e,t){return ke(t).diff(e)<x0}function k0(e){const{conversation:t,initializing:n,chatOptions:r,...i}=e,{settings:a,sendMessage:o}=ee(he),s=Y(()=>{const h=t&&t.messages.length?bn(t.messages[0].sentAt).toDate():new Date,d=t==null?void 0:t.messages[0];return d&&"type"in d&&d.type===Ot.FORM&&a.visitorWelcomeMessage?Wo(a.visitorWelcomeMessage,h):t!=null&&t.messages.length&&t.messages[0].side!==X.CUSTOMER||!Yr(a)?null:a.onlineWelcomeMessageAstString?Wo(a.onlineWelcomeMessageAstString,h,!0):Wo(a.onlineWelcomeMessage,h)},[t,a]),l=Y(()=>[...s?[s]:[],...((t==null?void 0:t.messages)??[]).flatMap(h=>Mt(h).getMessages(h))],[s,t==null?void 0:t.messages]),c=Y(()=>{var h;return((h=l.find(d=>d.side===X.AGENT&&!d.read))==null?void 0:h.id)||null},[t==null?void 0:t.id]),g=j(h=>o(h.conversationId,h.text||"",h.attachments||[],{resend:!0,resendMeta:h,...(r==null?void 0:r.customFields)&&{customFields:r.customFields}}),[o]),u=Y(()=>{if(n)return[f(Ul,{height:70,width:"90%"}),f(Ul,{height:70,width:"60%"})];const h=[],d=[],v=()=>{d.length&&h.push(f(Wp,{children:d.splice(0)}))},w=l.length<2||Ko(l[0].sentAt,l[l.length-1].sentAt);l.forEach((m,I)=>{var P;const{component:b}=Mt(m),C=f(b,{message:m,onResendClick:g},"fingerprintId"in m?m.fingerprintId:m.id??((P=m.sentAt)==null?void 0:P.toString())),p=l[I-1];if(!p&&!w&&h.push(f(Ec,{message:m})),!p){d.push(C);return}if((!("id"in m)||m.id!==c)&&I0(p,m)&&Ko(p.sentAt,m.sentAt)&&Hc(p.sentAt,m.sentAt)){d.push(C);return}v(),!w&&!Ko(p.sentAt,m.sentAt)&&h.push(f(Ec,{message:m})),m.id&&m.id===c&&h.push(f(p0,{})),d.push(C)});const A=t&&"agentTyping"in t&&t.agentTyping,Q=t&&"botTyping"in t&&t.botTyping;if(A||Q){const m=l[l.length-1],I=f(Ve,{message:A&&t.agentTyping?{typing:!0,side:X.AGENT,agent:t.agentTyping}:{typing:!0,side:X.BOT}},"typing");A&&t.agentTyping&&m.side===X.AGENT&&m.agent.id===t.agentTyping.id&&Hc(bn(m.sentAt),new Date)||v(),d.push(I)}return v(),h},[n,l,t&&"agentTyping"in t&&t.agentTyping,t&&"botTyping"in t&&t.botTyping]);return f(_c,{...i,children:u})}function Gc(e){return!("number"in e)}function zc({conversationId:e,chatOptions:t}){const{routing:n,conversations:r,sendMessage:i,sendCustomerTypingMessage:a}=ee(he),o=j(async(c,g=[])=>{const u=await i(e,c,g,(t==null?void 0:t.customFields)&&{customFields:t.customFields});n.conversation(u)},[i]),s=Y(()=>{const c=r.find(u=>u.id==e);return c&&tc(c)&&(t==null?void 0:t.text)||Gi(c?c.id:"new")||""},[e,r]),l=Y(()=>ql(c=>{c&&a(e);const g=r.every(u=>u.id!==e);ps(g?"new":e,c)},ms),[e,r]);return f(On,{onSend:o,defaultValue:s,onInput:l})}function S0(e,t){const{conversationId:n,conversation:r,chatOptions:i}=e;if(!(r!=null&&r.lastMessage))return f(Yo,{ref:t,children:f(zc,{conversationId:n,chatOptions:i})});const a=Gc(r),o=r.status===Ke.CLOSED;if(!a&&!o)return f(Yo,{ref:t,children:f(zc,{conversationId:n,chatOptions:i})});if(a&&o)return f(qe,{});const s=Mt(r.lastMessage).footerComponent;return s?f(Yo,{ref:t,children:f(s,{conversation:r,chatOptions:i})}):f(qe,{})}const B0=Ae.forwardRef(S0),Yo=D.div`
    #${ae} && {
        width: 100%;
    }
`;function O0(e,t=new Date){if(!Lc(e))return null;const n=Fc(e,t);if(!n)return null;const r=n[1];if(!r)return null;const i=e.showReturnTime?`We will be back on ${Dc(ke(r),"MMM D","MMM D YYYY")}, at ${ke(r).format("hh:mm A")} (${y0(r)})`:"";return`${Tc(e.offlineWelcomeMessage.replaceAll(`
`,"<br>"))} ${i}`}function D0(e,t){if(t)return!1;const n=De.get();return!(n&&!n.isVisitor||!e.contactFormFields.length||e.contactFormTrigger==="never"||e.contactFormTrigger==="offline"&&Yr(e))}function E0(e,t){return Be.post(`/api/client-app/company/update-visitor/${e}`,t,{errorLabel:"Failed to update visitor information"})}const T0=e=>{let t="";return e.name&&(t+=`Name: <strong>${e.name}</strong><br />`),e.email&&(t+=`Email: <strong>${e.email}</strong><br />`),e.phone&&(t+=`Phone: <strong>${e.phone}</strong><br />`),e.message&&(t+=`Message: <strong>${e.message}</strong>`),t},R0=e=>`Please enter a valid email address. We don't accept emails with domain ${e.split("@")[1].split(".")[1]}.`;function M0({conversationId:e,chatOptions:t,onSent:n}){const{settings:r,sendMessage:i}=ee(he),[a,o]=Z({}),s=d=>{const v={};return d.email&&(No(d.email)?ic(d.email)||(v.email=R0(d.email)):v.email="Please enter a valid email"),d.phone&&($A(d.phone)||(v.phone="Please enter a valid phone")),v},l=async d=>{var P,E,k,y;d.preventDefault();const v=new FormData(d.currentTarget),w=(P=v.get("name"))==null?void 0:P.toString(),A=(E=v.get("email"))==null?void 0:E.toString(),Q=(k=v.get("phone"))==null?void 0:k.toString(),m=(y=v.get("message"))==null?void 0:y.toString(),I={name:w,email:A,phone:Q,message:m},b=s(I);if(Object.keys(b).length){o(b);return}const C=T0(I);await i(e,C,[],{messageType:Ot.FORM,...(t==null?void 0:t.customFields)&&{customFields:t.customFields}}),n==null||n();const p=De.get();p!=null&&p.atlasId&&(I.name||I.email||I.phone)&&setTimeout(()=>{E0(p.appId,{visitorId:p.atlasId,...I.name&&{name:I.name},...I.email&&{email:I.email},...I.phone&&{phoneNumber:I.phone}})},1e3)},[c,g]=Z(()=>[]),u=j(d=>{const v=d.target;if(!v)return;const{name:w,value:A}=v;o(Q=>({...Q,[w]:void 0})),g(Q=>Q.includes(w)?A.trim()?Q:Q.filter(m=>m!==w):A.trim()?Q.concat(w):Q)},[]),h=c.length===r.contactFormFields.length;return f(go,{onSubmit:l,disabled:!h,children:[r.contactFormFields.includes("name")&&f(lt,{required:!0,name:"name",placeholder:"Enter Name...",onChange:u}),r.contactFormFields.includes("email")&&f(lt,{required:!0,type:"text",name:"email",autoComplete:"email",autoCorrect:"on",onChange:u,error:a.email,placeholder:"Enter Email..."}),r.contactFormFields.includes("phone")&&f(lt,{required:!0,name:"phone",placeholder:"Enter Phone number...",onChange:u,error:a.phone}),r.contactFormFields.includes("message")&&f(Br,{required:!0,name:"message",placeholder:"Enter your message...",onChange:u})]})}function N0(){const{settings:e}=ee(he);return e.visitorWelcomeMessage.trim()?f(Ve,{message:{side:X.BOT,text:e.visitorWelcomeMessage}}):null}function Wc(e,t="auto"){const{overflow:n}=e.style;e.style.overflow="hidden","scroll"in e&&typeof e.scroll=="function"?e.scroll({top:e.scrollHeight,behavior:t}):e.scrollTop=e.scrollHeight,e.style.overflow=n}function Uc(e){const{conversationId:t,initializing:n,chatOptions:r,...i}=e,{conversations:a,settings:o,routing:s}=ee(he),l=Y(()=>a.find(A=>A.id==t),[a,t]),c=Y(()=>(l==null?void 0:l.messages.flatMap(A=>Mt(A).getMessages(A)).length)??0,[l]),g=re(null),u=re(null);$t(()=>{const A=u.current;if(!A)return;Wc(A);let Q=A.scrollTop,m=A.offsetHeight;const I=()=>{Q=A.scrollTop},b=()=>{const C=A.offsetHeight-m;C&&(A.scrollTop=Q-C,m=A.offsetHeight)};return A.addEventListener("scroll",I),window.addEventListener("resize",b),()=>{A.removeEventListener("scroll",I),window.removeEventListener("resize",b)}},[]);function h(){var A,Q;g.current&&yn(document.activeElement)&&((Q=(A=g.current)==null?void 0:A.querySelector("input, textarea"))==null||Q.focus())}setTimeout(h,10),$t(h,[t]),ne(()=>{requestAnimationFrame(()=>{u.current&&Wc(u.current,"smooth")})},[u,c,l&&"closedAt"in l&&l.closedAt,l&&"agentTyping"in l&&l.agentTyping,l&&"activities"in l&&l.activities]),L0(u,g);const d=Y(()=>!Yr(o)&&O0(o),[o]),v=Y(()=>{var A,Q,m;return!l||l.status===Ke.CLOSED||!Gc(l)||!l.lastMessage||!("widget"in l.lastMessage)||((Q=(A=l.lastMessage.widget)==null?void 0:A.widget)==null?void 0:Q.type)!=="delay"&&((m=l.lastMessage.widget)==null?void 0:m.state)!==Pe.DONE},[t,l]),w=Y(()=>D0(o,!!a.length),[o,a.length]);return f(Mn,{"aria-label":"atlas-ticket",...i,contentRef:u,bottomFlex:"center",bottom:n?null:w?f(M0,{conversationId:t,chatOptions:r,onSent:()=>s.conversation(t)}):v?f(B0,{ref:g,conversationId:t,conversation:l,chatOptions:r}):null,children:f(wc,{children:[d&&f(F0,{content:d}),w&&!n?f(_c,{children:f(N0,{})}):f(k0,{conversation:l,initializing:n}),!(a!=null&&a.length)&&f(Ac,{})]})})}const F0=D(Lm)`
    #${ae} && {
        position: sticky;
        top: 0;
        z-index: 1;
    }
`,L0=(e,t)=>{En(i=>{e.current&&(i.preventDefault(),e.current.focus())},{key:"Escape",targetRef:t}),En(i=>{var o;const a=(o=t.current)==null?void 0:o.querySelector("textarea, input");a&&(i==null||i.preventDefault(),a.focus())},{key:"Enter",targetRef:e})};function _0(e){return f(Se,{children:[e.logoUrl&&f(Rr,{src:e.logoUrl}),f(z0,{children:[e.title&&f(G0,{children:e.title}),e.subTitle&&f(H0,{children:e.subTitle})]})]})}const H0=D.div`
    #atlas-chat && {
        font-size: 13px;
        line-height: 21px;
    }
`,G0=D.div`
    #atlas-chat && {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
    }
`,z0=D.div`
    #atlas-chat && {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;function W0(e){return f("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",className:e.className,fill:"currentColor",children:f("path",{d:"M17.5422 16.4971L11.9627 10.9176C12.8285 9.79824 13.2969 8.42969 13.2969 6.99023C13.2969 5.26719 12.6244 3.65156 11.4084 2.4334C10.1924 1.21523 8.57246 0.544922 6.85156 0.544922C5.13066 0.544922 3.51074 1.21738 2.29473 2.4334C1.07656 3.64941 0.40625 5.26719 0.40625 6.99023C0.40625 8.71113 1.07871 10.3311 2.29473 11.5471C3.51074 12.7652 5.12852 13.4355 6.85156 13.4355C8.29102 13.4355 9.65742 12.9672 10.7768 12.1035L16.3563 17.6809C16.3726 17.6972 16.392 17.7102 16.4134 17.7191C16.4348 17.7279 16.4577 17.7325 16.4809 17.7325C16.504 17.7325 16.5269 17.7279 16.5483 17.7191C16.5697 17.7102 16.5891 17.6972 16.6055 17.6809L17.5422 16.7463C17.5586 16.7299 17.5715 16.7105 17.5804 16.6891C17.5893 16.6677 17.5938 16.6448 17.5938 16.6217C17.5938 16.5985 17.5893 16.5756 17.5804 16.5542C17.5715 16.5329 17.5586 16.5134 17.5422 16.4971ZM10.2547 10.3934C9.34375 11.3021 8.13633 11.8027 6.85156 11.8027C5.5668 11.8027 4.35938 11.3021 3.44844 10.3934C2.53965 9.48242 2.03906 8.275 2.03906 6.99023C2.03906 5.70547 2.53965 4.4959 3.44844 3.58711C4.35938 2.67832 5.5668 2.17773 6.85156 2.17773C8.13633 2.17773 9.3459 2.67617 10.2547 3.58711C11.1635 4.49805 11.6641 5.70547 11.6641 6.99023C11.6641 8.275 11.1635 9.48457 10.2547 10.3934Z"})})}function U0(){const{routing:e}=ee(he),[t,n]=Z(()=>e.currentView[0]==="article-search"?e.currentView[1]:""),r=re(null),i=j(a=>{var s;a.preventDefault();const o=((s=r.current)==null?void 0:s.value)||"";o&&e.articleSearch(o)},[r]);return f(V0,{onSubmit:i,children:[f($0,{ref:r,placeholder:"Search for help",value:t,onChange:a=>n(a.target.value)}),f($c,{type:"submit",disabled:!t,children:f(W0,{})})]})}const $c=D(Fr)`
    #${ae} && {
        padding: 4px 5px;

        &,
        &:hover {
            color: ${e=>e.theme.brandTextColor};
        }

        &:disabled {
            color: ${e=>e.theme.isDarkTextSelected?e.theme.disabledHeaderTextColor:e.theme.disabledHeaderLightTextColor};
        }
    }
`,$0=D.input`
    #${ae} && {
        width: 100%;
        border-bottom: 1px solid
            ${e=>e.theme.isDarkTextSelected?e.theme.borderColor:e.theme.borderDarkColor};
        color: ${e=>e.theme.brandTextColor};
        line-height: 21px;
        font-size: 13px;
        padding: 6px 30px 6px 0;

        &:focus {
            border-color: ${e=>e.theme.brandTextColor};
        }

        &::placeholder {
            color: ${e=>e.theme.isDarkTextSelected?e.theme.placeholderHeaderTextColor:e.theme.placeholderHeaderLightTextColor};
        }
    }
`,V0=D.form`
    #${ae} && {
        margin: 0 6px;
        width: 100%;
        position: relative;

        ${$c} {
            position: absolute;
            right: 0;
            top: 4px;
        }
    }
`;function K0(){const{settings:e,routing:t,unreadConversations:n,conversations:r,mapOriginConversationId:i}=ee(he),{isDark:a}=lo(),o=Y(()=>t.canGoBack?t.back:void 0,[t.canGoBack,t.back]),s=t.currentView[0]==="conversation"&&t.currentView[1]||null,l=Y(()=>s?r.find(A=>A.id==s):null,[r,s]),c=Y(()=>{if(l!=null&&l.messages.length)return[...l.messages].reverse().find(A=>A.side===X.AGENT)},[l==null?void 0:l.messages]),g=Yr(e)?e.subtitleText:"Support is offline",u=Y(()=>n.filter(A=>A.id!==(l==null?void 0:l.id)).length,[n,l]),h=t.currentView[0]==="article"||t.currentView[0]==="article-category"||t.currentView[0]==="article-search",d=[pe.BOTTOM_RIGHT,pe.BOTTOM_LEFT,pe.TOP_LEFT,pe.TOP_RIGHT].includes(e.chatPosition),v=d&&!e.alwaysOn&&e.hideBubble;return h?f(Po,{onBack:o,onClose:d&&!e.alwaysOn?t.close:void 0,forceCloseVisibility:v,unread:u,extension:f(U0,{},t.currentView[1]),centered:!0,children:f(Vc,{children:"Help Center"})},"list"):t.currentView==="new"||t.currentView[0]==="new"||t.currentView[0]==="conversation"?f(Po,{onBack:o,onClose:d?t.close:void 0,forceCloseVisibility:v,unread:u,children:c?f(Tv,{agentMessage:c}):f(_0,{logoUrl:a?e.iconDark:e.icon,title:e.titleText,subTitle:g})},t.currentView==="new"?"new":t.currentView[0]==="new"&&t.currentView[1]?"new-with-options":i(t.currentView[1])):f(Po,{onBack:o,onClose:d&&!e.alwaysOn?t.close:void 0,forceCloseVisibility:v,centered:!0,children:f(Vc,{children:"Messages"})},"list")}const Vc=D.div`
    #${ae} && {
        font-weight: 600;
    }
`;function Y0(e,t){return f(J0,{...e,ref:t})}const Jo=Ae.forwardRef(Y0),J0=D.div`
    #atlas-chat && {
        color: ${e=>e.theme.sectionTitleText};
        line-height: 16px;
        font-size: 13px;
        font-weight: 600;
    }
`,Zo=we`
    0% {
        margin-top: 30px;
    }

    100% {
        margin-top: 10px;
    }
`;function Z0({categorySlug:e,...t}){const{hcService:n}=ee(Rt),{routing:r}=ee(he),[i,a]=Z([]),[o,s]=Z([]),[l,c]=Z(!1),g=Re(r.back),u=Y(()=>i.find(d=>d.slug===e),[i,e]),h=Y(()=>i.filter(d=>u?d.parentId===u.id:!d.parentId).sort((d,v)=>d.order-v.order),[i,u]);return ne(()=>{n.getCategories().then(d=>{if(c(!0),a(d),!d)throw new Error("Missing");if(e&&!d.some(v=>v.slug===e))throw new Error("Missing")}).catch(()=>g.current())},[e,g]),ne(()=>{e&&n.getCategoryArticles(e).then(d=>s(d.sort((v,w)=>v.order-w.order)))},[e]),We(Mn,{...t,key:e},l&&f(X0,{children:[f("div",{children:[u&&f(j0,{children:[u.icon," ",u.title]}),(u==null?void 0:u.description)&&f(Jc,{children:u.description})]}),h.length?f(Yc,{children:[h.length," ",h.length===1?"Category":"Categories"]}):null,h.map(d=>{const{counters:v}=d,w=[(v==null?void 0:v.categories)&&`${v.categories} ${v.categories===1?"Category":"Categories"}`,(v==null?void 0:v.articles)&&`${v.articles} ${v.articles===1?"Article":"Articles"}`].filter(Boolean).join(", ")||void 0;return f(Kc,{icon:d.icon,title:d.title,description:d.description,href:d.url,note:w},d.id)}),o.length?f(Yc,{children:[o.length," Article",o.length>1?"s":""]}):null,o.map(d=>f(Kc,{icon:u==null?void 0:u.icon,title:d.title,description:d.description??void 0,href:d.url},d.id))]}))}const Kc=D(Do)`
    #${ae} && {
        ${e=>e.theme.noAnimation?"":$`
                      margin-top: 30px;
                      animation: ${Zo} 0.3s ease forwards;
                  `}
    }
`,Yc=D(Jo)`
    #${ae} && {
        ${e=>e.theme.noAnimation?"":$`
                      margin-top: 20px;
                      animation: ${Zo} 0.3s ease forwards;
                  `}
    }
`,Jc=D.div`
    #${ae} && {
        line-height: 21px;
        font-size: 13px;
    }
`,j0=D.div`
    #${ae} && {
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;

        & + ${Jc} {
            margin-top: 6px;
        }
    }
`,X0=D.div`
    #${ae} && {
        padding: 12px 20px;
        display: flex;
        flex-direction: column;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 10px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
`;function q0(e){const t=re(e);return t.current=e,j(n=>{var i;const r=_i(n.target,a=>a.tagName==="A");r&&((i=t.current)==null||i.call(t,r.href,n))},[t])}function e1({query:e,...t}){const{hcService:n}=ee(Rt),[r,i]=Z({}),[a,o]=Z(null);return ne(()=>{n.getCategories().then(s=>{s&&i(s.reduce((l,c)=>Object.assign(l,{[c.id]:c}),{}))})},[]),ne(()=>{e&&n.searchArticles(e).then(o)},[e]),f(Mn,{...t,bottomFlex:"center",bottom:f(To,{text:"Need more help? Send us a message"}),children:f(n1,{children:[a?f(Jo,{children:[a.length," result",a.length>1?"s":""," found"]}):f(Jo,{children:"Searching..."}),a==null?void 0:a.map(s=>{var l;return f(t1,{icon:(l=r[s.categoryId])==null?void 0:l.icon,title:s.title,description:s.description??void 0,href:s.url},s.id)})]})})}const t1=D(Do)`
    #${ae} && {
        ${e=>e.theme.noAnimation?"":$`
                      margin-top: 30px;
                      animation: ${Zo} 0.3s ease forwards;
                  `}
    }
`,n1=D.div`
    #${ae} && {
        padding: 12px 20px;
        display: flex;
        flex-direction: column;

        & > * {
            // Because gap doesn't work in Android 5
            margin-top: 10px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
`;function r1(e){se.remove(`${Hi}-${e}`)}const Jr=.2,Zc=2147482e3,jc=16,i1=704,o1=400,a1=600,s1={[pe.FULL_SCREEN]:"full-screen",[pe.BOTTOM_RIGHT]:"bottom-right",[pe.BOTTOM_LEFT]:"bottom-left",[pe.TOP_RIGHT]:"top-right",[pe.TOP_LEFT]:"top-left"};function l1(){return"hasFocus"in document?document.hasFocus():!0}function c1(){const{settings:e,routing:t,onlineAgents:n,expanded:r,focusParkingRef:i,widgetElementRef:a,conversations:o,unreadConversations:s,triggerAtlasCallback:l,mapOriginConversationId:c}=ee(he),g=Math.round(e.chatLabelSize/3)*12;ne(()=>{t.currentView!=="new"&&t.currentView[0]!=="new"&&r1("new")},[t.currentView]),En(x=>setTimeout(()=>{x.defaultPrevented||(t.history.length>1?t.back():t.close())}),{key:"Escape",targetRef:a}),Nl(function(B){if(!e.soundNotifications||B.every(H=>{var N;return H.side===X.CUSTOMER||"widget"in H&&((N=H.widget)==null?void 0:N.id)==="closing-ticket"})||e.hideBubble&&!e.openIncoming)return;(document.hidden||t.currentView[0]!=="conversation"||B.some(H=>H.conversationId!==t.currentView[1])||!yn(document.activeElement))&&mp()}),Nl(function(B){if(t.opened)return;const[F]=B;if(!F)return;const L=typeof e.openIncoming>"u"||e.openIncoming;!L||L==="focused"&&!l1()||"widget"in F&&F.widget&&!F.widget.id.startsWith("csat_")||t.conversation(F.conversationId)});const u=Sp(t.history),h=Y(()=>u?u.length>t.history.length:!1,[t.history,u]),d=!!o.length,v=[pe.BOTTOM_LEFT,pe.BOTTOM_RIGHT,pe.TOP_LEFT,pe.TOP_RIGHT].includes(e.chatPosition),w=e.chatPosition===pe.FULL_SCREEN,A=v||w?e.chatPosition:null,{hcService:Q}=ee(Rt),m=Y(()=>{if(!e.enableHelpMenu||t.currentView!=="menu")return;const x=e.helpMenuOptions.filter(B=>(v||B.type!=="internal"||B.value!=="close")&&(d||B.type!=="internal"||B.value!=="list"));if(x.length)return x.map(B=>({icon:B.icon,label:B.label,badge:B.type==="internal"&&B.value==="chat"&&s.length||void 0,onClick:()=>{if(!B.value){console.error("Option value is not defined"),t.close();return}if(B.type==="internal"){if(B.value==="list"){t.list();return}if(B.value==="new"){t.newChat();return}if(B.value==="chat"){d?t.list():t.newChat();return}if(B.value==="close"){t.close();return}if(B.value==="help"){t.articleCategory();return}const[F,L]=B.value.split(":");if(F==="article"&&L){t.article(L);return}console.error(`Internal function "${B.value}" not found`),t.close();return}if(B.type==="callback"){l(B.value)||console.error(`Atlas: Callback ${B.value} is not defined or it is not a function`),t.close();return}if(B.type==="link"){const[F,L]=Q.getArticleSlugAndSectionFromUrl(B.value);F?t.article(F,L):(window.open(B.value),t.close());return}console.error(`Type "${B.type}" not recognized`),t.close()}}))},[d,v,e.enableHelpMenu,e.helpMenuOptions,t.currentView,Q,s.length]),I=!e.alwaysOn&&!e.hideBubble&&v,b=!!m,C=Hl(t.opened&&!b,Jr*1e3),p=Hl(t.opened&&b,Jr*1e3),P=Re(x=>{var B;x===null&&t.opened||(a.current=x,!(!C.shouldMount&&!p.shouldMount)&&yn(document.activeElement)&&((B=a.current)==null||B.focus()))}),E=j(x=>P.current(x),[P]),k=t.currentView==="new"||t.currentView[0]==="new"?t.currentView:!1,y=Y(()=>es(),[k]),O=q0((x,B)=>{const[F,L]=Q.getArticleSlugAndSectionFromUrl(x),T=Q.getCategorySlugFromUrl(x);if(l("onLinkClick",{href:x,...T&&{categorySlug:T},...F&&{articleSlug:F},...L&&{articleSection:L}},B),B.defaultPrevented)return;if(F){B.preventDefault(),t.article(F,L);return}if(T){B.preventDefault(),t.articleCategory({categorySlug:T});return}if(new URL(x).host===window.location.host){B.preventDefault(),location.href=x;return}}),M=Y(()=>typeof e.noAnimations=="boolean"?e.noAnimations:t.currentView[0]==="conversation"&&c(t.currentView[1])!==t.currentView[1],[e.noAnimations,t.currentView]),S=j(function(){setTimeout(()=>{const B=a.current;B&&document.activeElement===document.body&&B.focus()},10)},[i]),R=A?s1[A]:"";return f(Nv,{onlineAgents:n,backwards:h,children:f(yv,{brandColor:e.brandColor,brandColorDark:e.brandColorDark,brandTextColor:e.brandTextColor,brandTextColorDark:e.brandTextColorDark,chatBubbleMorph:e.chatBubbleMorph,chatScreenOffsetXY:e.chatScreenOffsetXY,customBotEmoji:e.customBotEmoji,colorScheme:e.colorScheme,noAnimation:M,inheritFont:e.inheritFont,children:f(Se,{children:[f("div",{tabIndex:-1,ref:i}),p.shouldMount&&m&&f(qc,{"aria-label":"atlas-window",$compact:!0,className:`wp-exclude-emoji positioning ${R}`,$stage:p.stage,$expanded:r,$position:A,$bubbleOffset:I?g+jc:0,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$maxLargeWidth:e.maxLargeWidth,tabIndex:-1,ref:E,onClick:O,onBlur:S,$isMenu:!0,children:f(jo,{children:f(Qp,{items:m,onClose:A!==pe.FULL_SCREEN&&!e.alwaysOn?t.close:void 0,requireCloseVisibility:e.hideBubble,showAtlasCredentials:e.atlasBranded})})}),C.shouldMount&&f(qc,{"aria-label":"atlas-window",className:`wp-exclude-emoji positioning ${R}`,$stage:C.stage,$expanded:r,$position:A,$bubbleOffset:I?g+jc:0,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$maxLargeWidth:e.maxLargeWidth,tabIndex:-1,ref:E,onClick:O,onBlur:S,children:f(jo,{children:[f(K0,{}),t.history.map((x,B)=>x==="list"?f(cm,{},"list"):x[0]==="article-search"?f(e1,{query:x[1]},`search:${B}:${x[1]}`):x[0]==="article-category"?f(Z0,{categorySlug:x[1]},`help:${B}:${x[1]}`):x[0]==="article"?f(Tm,{articleSlug:x[1],articleSection:x[2]},`article:${B}:${x[1]}`):x==="new"||x[0]==="new"?f(Uc,{conversationId:y,initializing:t.initializingChatbot,chatOptions:Array.isArray(x)?x[1]:void 0},`conversation:${y}`):x[0]==="conversation"&&o.every(F=>!("originId"in F)||F.originId!==x[1])?f(Uc,{conversationId:x[1],chatOptions:x[2]},`conversation:${c(x[1])}`):null)]})}),I&&f(u1,{$top:A==pe.TOP_RIGHT||A==pe.TOP_LEFT,$right:A==pe.BOTTOM_RIGHT||A==pe.TOP_RIGHT,$opened:t.opened,$isMenu:!!(p.shouldMount&&m),onBlur:S})]})})})}const u1=D(Ap)`
    #${ae} && {
        z-index: ${Zc};
        position: fixed;
        ${e=>e.$top?$`
                      top: ${t=>t.theme.chatScreenOffsetXY[1]}px;
                  `:$`
                      bottom: ${t=>t.theme.chatScreenOffsetXY[1]}px;
                  `}

        ${e=>e.$right?$`
                      right: ${e.theme.chatScreenOffsetXY[0]}px;
                  `:$`
                      left: ${e.theme.chatScreenOffsetXY[0]}px;
                  `}

        ${e=>e.$opened&&!e.$isMenu?$`
                      @media (max-width: 449px), (max-height: 399px) {
                          display: none;
                      }
                  `:""}
    }
`,jo=D(nw)`
    #${ae} && {
        pointer-events: auto;

        background: ${e=>e.theme.backgroundColor};
        color: ${e=>e.theme.textColor};
        box-shadow: 0px 4px 28px 6px rgba(38, 38, 38, 0.08);
        text-align: left;

        overflow: hidden;

        height: 100%;
        width: 100%;

        & > *:not(:last-child):not(:first-child) {
            display: none;
        }
    }
`,f1=()=>$`
    transform-origin: center bottom;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`,Xc=({theme:e,$bubbleOffset:t,$compact:n,$expanded:r,$position:i,$maxHeight:a,$maxWidth:o,$maxLargeWidth:s})=>$`
    inset: auto;
    height: ${n?"auto":a?typeof a=="number"?`${a}px`:a:`${i1}px`};
    width: ${n?"auto":r?s?typeof s=="number"?`${s}px`:s:`${a1}px`:o?typeof o=="number"?`${o}px`:o:`${o1}px`};
    max-height: calc(
        100% - ${e.chatScreenOffsetXY[0]*2+t}px
    );
    max-width: calc(100% - ${e.chatScreenOffsetXY[0]*2}px);

    ${i===pe.TOP_RIGHT?$`
              top: ${e.chatScreenOffsetXY[1]+t}px;
              right: ${e.chatScreenOffsetXY[0]}px;
              transform-origin: right top;
          `:i===pe.TOP_LEFT?$`
              top: ${e.chatScreenOffsetXY[1]+t}px;
              left: ${e.chatScreenOffsetXY[0]}px;
              transform-origin: left top;
          `:i===pe.BOTTOM_RIGHT?$`
              bottom: ${e.chatScreenOffsetXY[1]+t}px;
              right: ${e.chatScreenOffsetXY[0]}px;
              transform-origin: right bottom;
          `:i===pe.BOTTOM_LEFT?$`
              bottom: ${e.chatScreenOffsetXY[1]+t}px;
              left: ${e.chatScreenOffsetXY[0]}px;
              transform-origin: left bottom;
          `:""}
`,qc=D.div`
    #${ae} && {
        pointer-events: auto;

        z-index: ${Zc};
        position: ${e=>e.$position?"fixed":"relative"};

        transition: width 0.2s ease, min-width 0.2s ease, min-height 0.2s ease,
            opacity ${e=>Jr/(e.$stage==="leave"?2:1)}s
                ease,
            transform ${e=>Jr/(e.$stage==="leave"?2:1)}s
                ease;
        opacity: ${e=>e.$stage==="enter"?1:0};

        ${e=>e.$position?e.$position===pe.FULL_SCREEN?$`
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                      height: 100%;
                      width: 100%;
                      max-height: 100%;
                      max-width: 100%;

                      transform: translate(
                          0px,
                          ${e.$stage==="leave"?200:0}px
                      );
                  `:$`
                      transform: scale(${e.$stage==="enter"?1:.5})
                          translate(0px, ${e.$stage==="enter"?0:80}px);

                      ${f1()}

                      ${e.$isMenu?Xc(e):""}

                      @media (min-width: 450px) and (min-height: 400px) {
                          ${Xc(e)}

                          ${jo} {
                              border-radius: ${e.$compact?8:13}px;
                          }
                      }
                  `:$`
                      height: 100%;
                      width: 100%;
                  `}
    }
`,d1=wn((e,t)=>{const n=ee(he);return bi(t,()=>({open:n.routing.open,ensureOpened:n.routing.ensureOpened,close:n.routing.close,isOpened:()=>n.routing.opened,showBubble:()=>n.showBubble(),hideBubble:()=>n.hideBubble(),update:r=>n.update(r),getUnreadTicketCount:()=>n.unreadConversations.length,getUnreadMessageCount:()=>n.unreadConversations.reduce((r,i)=>r+i.messages.filter(a=>"read"in a&&[X.AGENT,X.BOT].includes(a.side)&&!a.read).length,0),openHelpCenter:r=>n.routing.articleCategory(r),openArticlesSearch:r=>n.routing.articleSearch(r),openArticlesCategory:r=>n.routing.articleCategory({categorySlug:r}),openArticle:(r,i)=>n.routing.article(r,i),openConversation:r=>n.routing.conversation(r),openChat:r=>n.routing.chat(r),showNewChat:r=>n.routing.newChat(r)}),[n]),null}),g1=wn(({systemSettings:e,userSettings:t,csatSettings:n,identity:r,wsUrl:i,conversations:a,onConversationsChange:o,atlas:s,privateActionHandlers:l},c)=>r?f(ew,{companySlug:e.helpCenterCompanySlug,children:f(ap,{systemSettings:e,userSettings:t,csatSettings:n,identity:r,wsUrl:i,conversations:a,onConversationsChange:o,atlas:s,privateActionHandlers:l,children:[f(d1,{ref:c}),f(c1,{})]})}):null);function h1(){return new Promise(e=>{window.document.readyState==="complete"||window.document.readyState==="interactive"?setTimeout(e,1,window.document):window.document.addEventListener("DOMContentLoaded",()=>e(window.document))})}class v1{constructor(t,n,r,i,a){var o;this.systemSettings=t,this.userSettings=n,this.csatSettings=r,this.privateActionHandlers=a,this.conversations=[],this.queue=[],this.call=(...s)=>{const{widgetApi:l}=this;if(!l){this.queue.push(s);return}s[0]==="showBubble"?l.showBubble():s[0]==="hideBubble"?l.hideBubble():s[0]==="openWindow"?l.open(!0):s[0]==="closeWindow"?l.close():s[0]==="openChat"?l.openChat(s[1]):s[0]==="showNewChat"?l.showNewChat(s[1]):console.error("Unknown chat call",s)},this.openWindow=()=>this.call("openWindow"),this.closeWindow=()=>this.call("closeWindow"),this.showBubble=()=>this.call("showBubble"),this.hideBubble=()=>this.call("hideBubble"),this.getUnreadTicketCount=()=>{var s;return((s=this.widgetApi)==null?void 0:s.getUnreadTicketCount())||0},this.getUnreadMessageCount=()=>{var s;return((s=this.widgetApi)==null?void 0:s.getUnreadMessageCount())||0},this.isOpened=()=>{var s;return(s=this.widgetApi)==null?void 0:s.isOpened()},this.update=s=>{var c,g;const l=((c=this.userSettings)==null?void 0:c.chatPosition)??this.systemSettings.chatPosition;s&&(this.userSettings=Object.assign(this.userSettings||{},s),s.htmlAttributes&&Object.assign(this.wrapper,s.htmlAttributes)),(g=this.widgetApi)==null||g.update(s),typeof(s==null?void 0:s.enableChat)=="boolean"&&s.enableChat!==this.isStarted?s.enableChat?this.start():this.stop():this.isStarted&&(s!=null&&s.chatPosition)&&s.chatPosition!==l&&(this.stop(),this.start())},this.updateTicketFields=(s,l,c)=>{this.api.updateTicketFields(s,l,c)},this.start=async s=>{var l;if(this.isStarted){console.error("Atlas: Chat is started already");return}await h1(),s&&this.update(s),this.isCustomContainer&&this.container===document.body&&(console.error(`Atlas: Invalid position selector: "${((l=this.userSettings)==null?void 0:l.chatPosition)??""}"`),this.userSettings=this.userSettings??{},this.userSettings.chatPosition=pe.BOTTOM_RIGHT),this.isCustomContainer?this.wrapper.classList.add("atlas-chat-embedded"):this.wrapper.classList.remove("atlas-chat-embedded"),this.container.appendChild(this.wrapper);try{await this.renderForIdentity()}catch(c){console.error(c)}},this.reset=()=>{this.conversations=[],this.queue.splice(0),mt(null,this.wrapper)},this.stop=()=>{this.wrapper.remove(),this.reset()},this.onLogin=async s=>{this.identity=s,await this.renderForIdentity()},this.onConvert=async(s,l)=>{this.identity=l,this.reset(),await this.renderForIdentity()},this.onLogout=()=>{this.identity=void 0,ws(),this.reset()},this.openHelpCenter=s=>{var l;(l=this.widgetApi)==null||l.openHelpCenter(s)},this.openArticlesSearch=s=>{var l;(l=this.widgetApi)==null||l.openArticlesSearch(s)},this.openArticlesCategory=s=>{var l;(l=this.widgetApi)==null||l.openArticlesCategory(s)},this.openArticle=(s,l)=>{var c;(c=this.widgetApi)==null||c.openArticle(s,l)},this.triggerChatbot=(s,l)=>{var c;if(!this.identity){console.error("Trigger Chatbot Error:","User is not identified");return}if((l==null?void 0:l.prefer)==="last"){const g=this.conversations.find(u=>u.chatbotKey===s&&u.status===Ke.OPEN);if(g){(c=this.widgetApi)==null||c.openConversation(g.id);return}}Vt(this.identity.atlasId,"sdk",{url:window.location.href,key:s})},this.openChat=s=>{this.call("openChat",s)},this.showNewChat=s=>{this.call("showNewChat",s)},this.renderForIdentity=async()=>{if(!this.identity||!this.wrapper.parentElement)return;this.conversations=await this.api.getCustomerConversations(this.identity.atlasId)||[];const s=l=>{this.widgetApi=l||void 0,this.queue.splice(0).forEach(c=>this.call(...c))};mt(We(g1,{systemSettings:this.systemSettings,userSettings:this.userSettings,csatSettings:this.csatSettings,identity:this.identity,wsUrl:Kf,conversations:this.conversations,onConversationsChange:l=>{this.conversations=l},atlas:this.parent,privateActionHandlers:this.privateActionHandlers,ref:s}),this.wrapper)},this.wrapper=Object.assign(document.createElement("div"),{...this.systemSettings.htmlAttributes,...(o=this.userSettings)==null?void 0:o.htmlAttributes,id:ae}),this.api=new cl,this.parent=i,ws("expired")}get isStarted(){return!!(this.wrapper.parentElement&&this.widgetApi)}get isCustomContainer(){var n;const t=((n=this.userSettings)==null?void 0:n.chatPosition)||this.systemSettings.chatPosition;return!Object.values(pe).includes(t)}get container(){var t;if(this.isCustomContainer){const n=((t=this.userSettings)==null?void 0:t.chatPosition)||this.systemSettings.chatPosition;try{const r=document.querySelector(n);if(r instanceof HTMLElement)return r}catch{}}return document.body}}async function eu(e){const[t,n]=await ul();n&&await Be.post(`/api/client-app/company/customer/${e}/update-login-information`,t,{errorLabel:"Failed to update login information"})}function p1(e,t){return Be.get(`/api/client-app/company/${e}`,{hostname:location.hostname,...t&&{sdk_version:t}},{errorLabel:"Failed to load company settings"})}function A1(e,t){return p1(e,t).then(n=>n&&{appId:e,companyId:n.id,chatSettings:{...n.chatSettings,helpCenterCompanySlug:n.helpcenterSlug,atlasBranded:n.atlasBranded},sessionSettings:n.sessionSettings,csatSettings:n.csatSettings,baseDomain:n.baseDomain})}function w1(e){return Be.post(`/api/client-app/company/create-visitor/${e}`,null,{errorLabel:"Failed to create visitor"})}async function Xo(e){let t=De.get();if(t)return t;const n=await w1(e);if(!n)return;const r={appId:e,userId:"",atlasId:n.id,name:`${n.firstName} ${n.lastName}`,email:"",isVisitor:!0,companyId:n.companyId,createdAt:Date.now(),customFields:{}};return t=De.get(),t||De.set(r)}const tu=[void 0,null,""];function m1(e,t){return Object.keys(t).every(n=>{const r=e[n],i=t[n];return typeof i=="object"&&i!==null?Object.keys(i).length?!r||typeof r!="object"||Object.keys(r).length<Object.keys(i).length?!1:Object.keys(i).every(a=>{const o=i[a],s=r[a];return o===s}):!0:tu.includes(i)&&tu.includes(r)?!0:i===r})}function C1(e){if(!e)return e;const t=e.replace(/[()\s-]/g,"");return t.length===10?`+1${t}`:t}/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},He.apply(this,arguments)};function b1(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function P1(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(g){try{c(r.next(g))}catch(u){o(u)}}function l(g){try{c(r.throw(g))}catch(u){o(u)}}function c(g){g.done?a(g.value):i(g.value).then(s,l)}c((r=r.apply(e,[])).next())})}function y1(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(c){return function(g){return l([c,g])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){n.label=c[1];break}if(c[0]===6&&n.label<a[1]){n.label=a[1],a=c;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(c);break}a[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(g){c=[6,g],i=0}finally{r=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function tt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Nn(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function me(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Nn(arguments[t]));return e}var Le;(function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"})(Le||(Le={}));/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Zr=function(){return Zr=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Zr.apply(this,arguments)};function Q1(e){return e.nodeType===e.ELEMENT_NODE}function Fn(e){var t,n=(t=e)===null||t===void 0?void 0:t.host;return!!(n&&n.shadowRoot&&n.shadowRoot===e)}function jr(e){var t=e.maskInputOptions,n=e.tagName,r=e.type,i=e.value,a=e.maskInputFn,o=e.node,s=e.maskTextClass,l=e.maskTextSelector,c=e.maskAll,g=i||"";return(t[n.toLowerCase()]||t[r]||It(o,s,l,c))&&(a?g=a(g):g="*".repeat(g.length)),g}function It(e,t,n,r){var i;if(!e)return!1;if(e.nodeType===e.ELEMENT_NODE){if(typeof t=="string"){if(e.classList.contains(t))return!0}else e.classList.forEach(function(o){if(t.test(o))return!0});if(n){if(e.matches(n))return!0;if(r){if(!t)return!1;var a=(i=e)===null||i===void 0?void 0:i.closest("."+t+", "+n+" > *");return!!(a!=null&&a.classList.contains(t))}}return It(e.parentNode,t,n,r)}return It(e.parentNode,t,n,r)}function nu(e){var t=e.n,n=e.attributes,r=e.maskImageFn,i=typeof n.alt=="string"&&n.alt.length>0?"*".repeat(n.alt.length):"";if(r){var a=r(t,n);return"alt"in a?a:Zr(Zr({},a),{alt:i})}return{srcset:"",src:"",alt:i}}var ru="__rrweb_original__";function x1(e){var t=e.getContext("2d");if(!t)return!0;var n=50;try{for(var r=0;r<e.width;r+=n)for(var i=0;i<e.height;i+=n){var a=t.getImageData,o=ru in a?a[ru]:a,s=new Uint32Array(o(r,i,Math.min(n,e.width-r),Math.min(n,e.height-i)).data.buffer);if(s.some(function(l){return l!==0}))return!1}}catch(l){return console.warn(l),!1}return!0}var I1=1,k1=new RegExp("[^a-z0-9-_:]"),Ln=-2;function S1(){return I1++}function B1(e){if(e instanceof HTMLFormElement)return"form";var t=e.tagName.toLowerCase().trim();return k1.test(t)?"div":t}function O1(e){for(var t=[],n=/\b(animation[\w-]*):\s*(var\([^)]*\))?;\s*/g,r=n.exec(e);r!==null;){var i=r[1],a=r[2];a||t.push(i),r=n.exec(e)}return t}function qo(e,t){try{var n=t.rules||t.cssRules;return n?Array.from(n).map(function(r){return iu(e,r)}).join(""):null}catch{return null}}function iu(e,t){var n=t.cssText;if(D1(t))try{n=qo(e,t.styleSheet)||n}catch{}var r=O1(n);if(r.length>0){var i="selectorText"in t&&e.querySelector(t.selectorText);if(i&&window)for(var a=window.getComputedStyle(i),o=0,s=r;o<s.length;o++){var l=s[o],c=a[l];n=n.replace(l+": ;",l+": "+c+";")}}return n}function D1(e){return"styleSheet"in e}function E1(e){var t;return e.indexOf("//")>-1?t=e.split("/").slice(0,3).join("/"):t=e.split("/")[0],t=t.split("?")[0],t}var rn,ou,T1=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,R1=/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,M1=/^(data:)([^,]*),(.*)/i;function Xr(e,t){return(e||"").replace(T1,function(n,r,i,a,o,s){var l=i||o||s,c=r||a||"";if(!l)return n;if(!R1.test(l)||M1.test(l))return"url("+c+l+c+")";if(l[0]==="/")return"url("+c+(E1(t)+l)+c+")";var g=t.split("/"),u=l.split("/");g.pop();for(var h=0,d=u;h<d.length;h++){var v=d[h];v!=="."&&(v===".."?g.pop():g.push(v))}return"url("+c+g.join("/")+c+")"})}var N1=/^[^ \t\n\r\u000c]+/,F1=/^[, \t\n\r\u000c]+/;function L1(e,t){if(t.trim()==="")return t;var n=0;function r(c){var g,u=c.exec(t.substring(n));return u?(g=u[0],n+=g.length,g):""}for(var i=[];r(F1),!(n>=t.length);){var a=r(N1);if(a.slice(-1)===",")a=on(e,a.substring(0,a.length-1)),i.push(a);else{var o="";a=on(e,a);for(var s=!1;;){var l=t.charAt(n);if(l===""){i.push((a+o).trim());break}else if(s)l===")"&&(s=!1);else if(l===","){n+=1,i.push((a+o).trim());break}else l==="("&&(s=!0);o+=l,n+=1}}}return i.join(", ")}function on(e,t){if(!t||t.trim()==="")return t;var n=e.createElement("a");return n.href=t,n.href}function _1(e){return e.tagName==="svg"||e instanceof SVGElement}function ea(){var e=document.createElement("a");return e.href="",e.href}function ta(e,t,n,r){return n==="src"||n==="href"&&r||n==="xlink:href"&&r&&r[0]!=="#"||n==="background"&&r&&(t==="table"||t==="td"||t==="th")?on(e,r):n==="srcset"&&r?L1(e,r):n==="style"&&r?Xr(r,ea()):t==="object"&&n==="data"&&r?on(e,r):r}function H1(e,t,n){if(typeof t=="string"){if(e.classList.contains(t))return!0}else for(var r=0;r<e.classList.length;r++){var i=e.classList[r];if(t.test(i))return!0}return n?e.matches(n):!1}function G1(e,t,n){var r=e.contentWindow;if(r){var i=!1,a;try{a=r.document.readyState}catch{return}if(a!=="complete"){var o=setTimeout(function(){i||(t(),i=!0)},n);e.addEventListener("load",function(){clearTimeout(o),i=!0,t()});return}var s="about:blank";if(r.location.href!==s||e.src===s||e.src===""){setTimeout(t,0);return}e.addEventListener("load",t)}}function z1(e,t){return t.cssRules?Array.from(t.cssRules).map(function(n){return iu(e,n)}).join(""):""}function W1(e,t){var n,r=t.doc,i=t.blockClass,a=t.blockSelector,o=t.maskTextClass,s=t.maskTextSelector,l=t.maskAll,c=t.inlineStylesheet,g=t.maskInputOptions,u=g===void 0?{}:g,h=t.maskTextFn,d=t.maskInputFn,v=t.maskImageFn,w=t.inlineImages,A=t.recordCanvas,Q=t.keepIframeSrcFn,m;if(r.__sn_atlas){var I=r.__sn_atlas.id;m=I===1?void 0:I}switch(e.nodeType){case e.DOCUMENT_NODE:return e.compatMode!=="CSS1Compat"?{type:Le.Document,childNodes:[],compatMode:e.compatMode,rootId:m}:{type:Le.Document,childNodes:[],rootId:m};case e.DOCUMENT_TYPE_NODE:return{type:Le.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:m};case e.ELEMENT_NODE:for(var b=H1(e,i,a),C=B1(e),p={},P=0,E=Array.from(e.attributes);P<E.length;P++){var k=E[P],y=k.name,O=k.value;p[y]=ta(r,C,y,O)}if(C==="link"&&c){var M=Array.from(r.styleSheets).find(function(ce){return ce.href===e.href}),S=qo(r,M);S&&(delete p.rel,delete p.href,p._cssText=Xr(S,M.href))}if(C==="style"&&e.sheet&&!(e.innerText||e.textContent||"").trim().length){var S=qo(r,e.sheet);S&&(p._cssText=Xr(S,ea()))}if(C==="input"||C==="textarea"||C==="select"){var O=e.value;typeof p.placeholder=="string"&&p.placeholder.length>0&&(p.placeholder=jr({type:p.type,tagName:C,value:p.placeholder,maskInputOptions:u,maskInputFn:d,node:e,maskTextClass:o,maskTextSelector:s,maskAll:l})),p.type!=="radio"&&p.type!=="checkbox"&&p.type!=="submit"&&p.type!=="button"&&O?p.value=jr({type:p.type,tagName:C,value:O,maskInputOptions:u,maskInputFn:d,node:e,maskTextClass:o,maskTextSelector:s,maskAll:l}):e.checked&&(p.checked=e.checked)}if(C==="option"&&(e.selected&&!u.select?p.selected=!0:delete p.selected),C==="dialog"&&e.open&&(p.rr_open_mode=e.matches("dialog:modal")?"modal":"non-modal"),C==="canvas"){var R=e,x=window.getComputedStyle(R);if(R.style.width||(p.rr_canvasFallbackWidth=x.width),R.style.height||(p.rr_canvasFallbackHeight=x.height),A){if(e.__context==="2d")x1(e)||(p.rr_dataURL=e.toDataURL());else if(!("__context"in e)){var B=e.toDataURL(),F=document.createElement("canvas");F.width=e.width,F.height=e.height;var L=F.toDataURL();B!==L&&(p.rr_dataURL=B)}}}if(C==="img"){var T=It(e,o,s,l),H=e;if(T){var N=function(){for(var ce=nu({n:H,attributes:p,maskImageFn:v}),ve=0,Ee=Object.entries(ce);ve<Ee.length;ve++){var Ye=Ee[ve],ut=Ye[0],Ht=Ye[1];p[ut]=Ht}};H.complete?N():H.onload=N}else if(w){rn||(rn=r.createElement("canvas"),ou=rn.getContext("2d"));var _=H.crossOrigin;H.crossOrigin="anonymous";try{var W=function(){rn.width=H.naturalWidth,rn.height=H.naturalHeight,ou.drawImage(H,0,0),p.rr_dataURL=rn.toDataURL(),_?p.crossOrigin=_:delete p.crossOrigin};H.complete&&H.naturalWidth!==0?W():H.onload=W}catch{}}}if((C==="audio"||C==="video")&&(p.rr_mediaState=e.paused?"paused":"played",p.rr_mediaCurrentTime=e.currentTime),e.scrollLeft&&(p.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(p.rr_scrollTop=e.scrollTop),b){var U=e.getBoundingClientRect(),J=U.width,q=U.height;p={class:p.class,rr_width:J+"px",rr_height:q+"px"}}return C==="iframe"&&!Q(p.src)&&(e.contentDocument||(p.rr_src=p.src),delete p.src),{type:Le.Element,tagName:C,attributes:p,childNodes:[],isSVG:_1(e)||void 0,needBlock:b,rootId:m};case e.TEXT_NODE:var oe=e.parentNode&&e.parentNode.tagName,te=e.textContent,fe=oe==="STYLE"?!0:void 0,le=oe==="SCRIPT"?!0:void 0;if(fe&&te){try{!((n=e.parentNode.sheet)===null||n===void 0)&&n.cssRules&&(te=z1(r,e.parentNode.sheet))}catch{}te=Xr(te,ea())}return le&&(te="SCRIPT_PLACEHOLDER"),!fe&&!le&&It(e,o,s,l)&&te&&(te=h?h(te):te.replace(/[\S]/g,"*")),{type:Le.Text,textContent:te||"",isStyle:fe,rootId:m};case e.CDATA_SECTION_NODE:return{type:Le.CDATA,textContent:"",rootId:m};case e.COMMENT_NODE:return{type:Le.Comment,textContent:e.textContent||"",rootId:m};default:return!1}}function ye(e){return e===void 0?"":e.toLowerCase()}function U1(e,t){if(t.comment&&e.type===Le.Comment)return!0;if(e.type===Le.Element){if(t.script&&(e.tagName==="script"||e.tagName==="link"&&e.attributes.rel==="preload"&&e.attributes.as==="script"||e.tagName==="link"&&e.attributes.rel==="prefetch"&&typeof e.attributes.href=="string"&&e.attributes.href.endsWith(".js")))return!0;if(t.headFavicon&&(e.tagName==="link"&&e.attributes.rel==="shortcut icon"||e.tagName==="meta"&&(ye(e.attributes.name).match(/^msapplication-tile(image|color)$/)||ye(e.attributes.name)==="application-name"||ye(e.attributes.rel)==="icon"||ye(e.attributes.rel)==="apple-touch-icon"||ye(e.attributes.rel)==="shortcut icon")))return!0;if(e.tagName==="meta"){if(t.headMetaDescKeywords&&ye(e.attributes.name).match(/^description|keywords$/))return!0;if(t.headMetaSocial&&(ye(e.attributes.property).match(/^(og|twitter|fb):/)||ye(e.attributes.name).match(/^(og|twitter):/)||ye(e.attributes.name)==="pinterest"))return!0;if(t.headMetaRobots&&(ye(e.attributes.name)==="robots"||ye(e.attributes.name)==="googlebot"||ye(e.attributes.name)==="bingbot"))return!0;if(t.headMetaHttpEquiv&&e.attributes["http-equiv"]!==void 0)return!0;if(t.headMetaAuthorship&&(ye(e.attributes.name)==="author"||ye(e.attributes.name)==="generator"||ye(e.attributes.name)==="framework"||ye(e.attributes.name)==="publisher"||ye(e.attributes.name)==="progid"||ye(e.attributes.property).match(/^article:/)||ye(e.attributes.property).match(/^product:/)))return!0;if(t.headMetaVerification&&(ye(e.attributes.name)==="google-site-verification"||ye(e.attributes.name)==="yandex-verification"||ye(e.attributes.name)==="csrf-token"||ye(e.attributes.name)==="p:domain_verify"||ye(e.attributes.name)==="verify-v1"||ye(e.attributes.name)==="verification"||ye(e.attributes.name)==="shopify-checkout-api-token"))return!0}}return!1}function _n(e,t){var n=t.doc,r=t.map,i=t.blockClass,a=t.blockSelector,o=t.maskTextClass,s=t.maskTextSelector,l=t.maskAll,c=t.skipChild,g=c===void 0?!1:c,u=t.inlineStylesheet,h=u===void 0?!0:u,d=t.maskInputOptions,v=d===void 0?{}:d,w=t.maskTextFn,A=t.maskInputFn,Q=t.maskImageFn,m=t.slimDOMOptions,I=t.inlineImages,b=I===void 0?!1:I,C=t.recordCanvas,p=C===void 0?!1:C,P=t.onSerialize,E=t.onIframeLoad,k=t.iframeLoadTimeout,y=k===void 0?5e3:k,O=t.keepIframeSrcFn,M=O===void 0?function(){return!1}:O,S=t.preserveWhiteSpace,R=S===void 0?!0:S,x=W1(e,{doc:n,blockClass:i,blockSelector:a,maskTextClass:o,maskTextSelector:s,maskAll:l,inlineStylesheet:h,maskInputOptions:v,maskTextFn:w,maskInputFn:A,maskImageFn:Q,inlineImages:b,recordCanvas:p,keepIframeSrcFn:M});if(!x)return console.warn(e,"not serialized"),null;var B;"__sn_atlas"in e?B=e.__sn_atlas.id:U1(x,m)||!R&&x.type===Le.Text&&!x.isStyle&&!x.textContent.replace(/^\s+|\s+$/gm,"").length?B=Ln:B=S1();var F=Object.assign(x,{id:B});if(e.__sn_atlas=F,B===Ln)return null;r[B]=e,P&&P(e);var L=!g;if(F.type===Le.Element&&(L=L&&!F.needBlock,delete F.needBlock),(F.type===Le.Document||F.type===Le.Element)&&L){m.headWhitespace&&x.type===Le.Element&&x.tagName==="head"&&(R=!1);for(var T={doc:n,map:r,blockClass:i,blockSelector:a,maskTextClass:o,maskTextSelector:s,maskAll:l,skipChild:g,inlineStylesheet:h,maskInputOptions:v,maskTextFn:w,maskInputFn:A,maskImageFn:Q,slimDOMOptions:m,inlineImages:b,recordCanvas:p,preserveWhiteSpace:R,onSerialize:P,onIframeLoad:E,iframeLoadTimeout:y,keepIframeSrcFn:M},H=0,N=Array.from(e.childNodes);H<N.length;H++){var _=N[H],W=_n(_,T);W&&F.childNodes.push(W)}if(Q1(e)&&e.shadowRoot){F.isShadowHost=!0;for(var U=0,J=Array.from(e.shadowRoot.childNodes);U<J.length;U++){var _=J[U],W=_n(_,T);W&&(W.isShadow=!0,F.childNodes.push(W))}}}return e.parentNode&&Fn(e.parentNode)&&(F.isShadow=!0),F.type===Le.Element&&F.tagName==="iframe"&&G1(e,function(){var q=e.contentDocument;if(q&&E){var oe=_n(q,{doc:q,map:r,blockClass:i,blockSelector:a,maskTextClass:o,maskTextSelector:s,maskAll:l,skipChild:!1,inlineStylesheet:h,maskInputOptions:v,maskTextFn:w,maskInputFn:A,maskImageFn:Q,slimDOMOptions:m,inlineImages:b,recordCanvas:p,preserveWhiteSpace:R,onSerialize:P,onIframeLoad:E,iframeLoadTimeout:y,keepIframeSrcFn:M});oe&&E(e,oe)}},y),F}function $1(e,t){var n=t,r=n.blockClass,i=r===void 0?"rr-block":r,a=n.blockSelector,o=a===void 0?null:a,s=n.maskTextClass,l=s===void 0?"rr-mask":s,c=n.maskTextSelector,g=c===void 0?null:c,u=n.maskAll,h=u===void 0?!1:u,d=n.inlineStylesheet,v=d===void 0?!0:d,w=n.inlineImages,A=w===void 0?!1:w,Q=n.recordCanvas,m=Q===void 0?!1:Q,I=n.maskAllInputs,b=I===void 0?!1:I,C=n.maskTextFn,p=n.maskInputFn,P=n.maskImageFn,E=n.slimDOM,k=E===void 0?!1:E,y=n.preserveWhiteSpace,O=n.onSerialize,M=n.onIframeLoad,S=n.iframeLoadTimeout,R=n.keepIframeSrcFn,x=R===void 0?function(){return!1}:R,B={},F=b===!0?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:b===!1?{password:!0}:b,L=k===!0||k==="all"?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaDescKeywords:k==="all",headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaAuthorship:!0,headMetaVerification:!0}:k===!1?{}:k;return[_n(e,{doc:e,map:B,blockClass:i,blockSelector:o,maskTextClass:l,maskTextSelector:g,maskAll:h,skipChild:!1,inlineStylesheet:v,maskInputOptions:F,maskTextFn:C,maskInputFn:p,maskImageFn:P,slimDOMOptions:L,inlineImages:A,recordCanvas:m,preserveWhiteSpace:y,onSerialize:O,onIframeLoad:M,iframeLoadTimeout:S,keepIframeSrcFn:x}),B]}var Ce;(function(e){e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin"})(Ce||(Ce={}));var Ie;(function(e){e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration"})(Ie||(Ie={}));var qr;(function(e){e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel"})(qr||(qr={}));var Nt;(function(e){e[e["2D"]=0]="2D",e[e.WebGL=1]="WebGL",e[e.WebGL2=2]="WebGL2"})(Nt||(Nt={}));var au;(function(e){e[e.Play=0]="Play",e[e.Pause=1]="Pause",e[e.Seeked=2]="Seeked",e[e.VolumeChange=3]="VolumeChange"})(au||(au={}));var su;(function(e){e.Start="start",e.Pause="pause",e.Resume="resume",e.Resize="resize",e.Finish="finish",e.FullsnapshotRebuilded="fullsnapshot-rebuilded",e.LoadStylesheetStart="load-stylesheet-start",e.LoadStylesheetEnd="load-stylesheet-end",e.SkipStart="skip-start",e.SkipEnd="skip-end",e.LongPatchStart="long-patch-start",e.LongPatchEnd="long-patch-end",e.MouseInteraction="mouse-interaction",e.EventCast="event-cast",e.CustomEvent="custom-event",e.Flush="flush",e.StateChange="state-change",e.PlayBack="play-back"})(su||(su={}));function je(e,t,n){n===void 0&&(n=document);var r={capture:!0,passive:!0};return n.addEventListener(e,t,r),function(){return n.removeEventListener(e,t,r)}}function V1(){return{map:{},getId:function(e){return!e||!e.__sn_atlas?-1:e.__sn_atlas.id},getNode:function(e){return this.map[e]||null},removeNodeFromMap:function(e){var t=this,n=e.__sn_atlas&&e.__sn_atlas.id;delete this.map[n],e.childNodes&&e.childNodes.forEach(function(r){return t.removeNodeFromMap(r)})},has:function(e){return this.map.hasOwnProperty(e)},reset:function(){this.map={}}}}var an=`Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`,lu={map:{},getId:function(){return console.error(an),-1},getNode:function(){return console.error(an),null},removeNodeFromMap:function(){console.error(an)},has:function(){return console.error(an),!1},reset:function(){console.error(an)}};typeof window<"u"&&window.Proxy&&window.Reflect&&(lu=new Proxy(lu,{get:function(e,t,n){return t==="map"&&console.error(an),Reflect.get(e,t,n)}}));function Hn(e,t,n){n===void 0&&(n={});var r=null,i=0;return function(a){var o=Date.now();!i&&n.leading===!1&&(i=o);var s=t-(o-i),l=this,c=arguments;s<=0||s>t?(r&&(clearTimeout(r),r=null),i=o,e.apply(l,c)):!r&&n.trailing!==!1&&(r=setTimeout(function(){i=n.leading===!1?0:Date.now(),r=null,e.apply(l,c)},s))}}function ei(e,t,n,r,i){i===void 0&&(i=window);var a=i.Object.getOwnPropertyDescriptor(e,t);return i.Object.defineProperty(e,t,r?n:{set:function(o){var s=this;setTimeout(function(){n.set.call(s,o)},0),a&&a.set&&a.set.call(this,o)}}),function(){return ei(e,t,a||{},!0)}}function Gn(e,t,n){try{if(!(t in e))return function(){};var r=e[t],i=n(r);return typeof i=="function"&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__rrweb_original__:{enumerable:!1,value:r}})),e[t]=i,function(){e[t]=r}}catch{return function(){}}}function cu(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function uu(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function Ue(e,t){if(!e)return!1;if(e.nodeType===e.ELEMENT_NODE){var n=!1;return typeof t=="string"?n=e.classList.contains(t):e.classList.forEach(function(r){t.test(r)&&(n=!0)}),n||Ue(e.parentNode,t)}return e.nodeType===e.TEXT_NODE,Ue(e.parentNode,t)}function na(e){return"__sn_atlas"in e?e.__sn_atlas.id===Ln:!1}function fu(e,t){if(Fn(e))return!1;var n=t.getId(e);return t.has(n)?e.parentNode&&e.parentNode.nodeType===e.DOCUMENT_NODE?!1:e.parentNode?fu(e.parentNode,t):!0:!0}function du(e){return!!e.changedTouches}function K1(e){e===void 0&&(e=window),"NodeList"in e&&!e.NodeList.prototype.forEach&&(e.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in e&&!e.DOMTokenList.prototype.forEach&&(e.DOMTokenList.prototype.forEach=Array.prototype.forEach),Node.prototype.contains||(Node.prototype.contains=function(n){if(!(0 in arguments))throw new TypeError("1 argument is required");do if(this===n)return!0;while(n=n&&n.parentNode);return!1})}function gu(e){return"__sn_atlas"in e?e.__sn_atlas.type===Le.Element&&e.__sn_atlas.tagName==="iframe":!1}function hu(e){var t;return!!(!((t=e)===null||t===void 0)&&t.shadowRoot)}function vu(e){return"__ln"in e}var Y1=function(){function e(){this.length=0,this.head=null}return e.prototype.get=function(t){if(t>=this.length)throw new Error("Position outside of list range");for(var n=this.head,r=0;r<t;r++)n=(n==null?void 0:n.next)||null;return n},e.prototype.addNode=function(t){var n={value:t,previous:null,next:null};if(t.__ln=n,t.previousSibling&&vu(t.previousSibling)){var r=t.previousSibling.__ln.next;n.next=r,n.previous=t.previousSibling.__ln,t.previousSibling.__ln.next=n,r&&(r.previous=n)}else if(t.nextSibling&&vu(t.nextSibling)&&t.nextSibling.__ln.previous){var r=t.nextSibling.__ln.previous;n.previous=r,n.next=t.nextSibling.__ln,t.nextSibling.__ln.previous=n,r&&(r.next=n)}else this.head&&(this.head.previous=n),n.next=this.head,this.head=n;this.length++},e.prototype.removeNode=function(t){var n=t.__ln;this.head&&(n.previous?(n.previous.next=n.next,n.next&&(n.next.previous=n.previous)):(this.head=n.next,this.head&&(this.head.previous=null)),t.__ln&&delete t.__ln,this.length--)},e}(),pu=function(e,t){return e+"@"+t};function Au(e){return"__sn_atlas"in e}var J1=function(){function e(){var t=this;this.frozen=!1,this.locked=!1,this.texts=[],this.attributes=[],this.removes=[],this.mapRemoves=[],this.movedMap={},this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.processMutations=function(n){n.forEach(t.processMutation),t.emit()},this.emit=function(){var n,r,i,a;if(!(t.frozen||t.locked)){for(var o=[],s=new Y1,l=function(p){for(var P=p,E=Ln;E===Ln;)P=P&&P.nextSibling,E=P&&t.mirror.getId(P);return E},c=function(p){var P,E=p.getRootNode?(P=p.getRootNode())===null||P===void 0?void 0:P.host:null,k=!t.doc.contains(p)&&(!(E instanceof Node)||!t.doc.contains(E));if(!(!p.parentNode||k)){var y=Fn(p.parentNode)?t.mirror.getId(E):t.mirror.getId(p.parentNode),O=l(p);if(y===-1||O===-1)return s.addNode(p);var M=_n(p,{doc:t.doc,map:t.mirror.map,blockClass:t.blockClass,blockSelector:t.blockSelector,maskTextClass:t.maskTextClass,maskTextSelector:t.maskTextSelector,maskAll:t.maskAll,skipChild:!0,inlineStylesheet:t.inlineStylesheet,maskInputOptions:t.maskInputOptions,maskTextFn:t.maskTextFn,maskInputFn:t.maskInputFn,maskImageFn:t.maskImageFn,slimDOMOptions:t.slimDOMOptions,recordCanvas:t.recordCanvas,inlineImages:t.inlineImages,onSerialize:function(S){gu(S)&&t.iframeManager.addIframe(S),hu(p)&&t.shadowDomManager.addShadowRoot(p.shadowRoot,document)},onIframeLoad:function(S,R){t.iframeManager.attachIframe(S,R)}});M&&o.push({parentId:y,nextId:O,node:M})}};t.mapRemoves.length;)t.mirror.removeNodeFromMap(t.mapRemoves.shift());try{for(var g=tt(t.movedSet),u=g.next();!u.done;u=g.next()){var h=u.value;ia(t.removes,h,t.mirror)&&!t.movedSet.has(h.parentNode)||c(h)}}catch(p){n={error:p}}finally{try{u&&!u.done&&(r=g.return)&&r.call(g)}finally{if(n)throw n.error}}try{for(var d=tt(t.addedSet),v=d.next();!v.done;v=d.next()){var h=v.value;!oa(t.droppedSet,h)&&!ia(t.removes,h,t.mirror)||oa(t.movedSet,h)?c(h):t.droppedSet.add(h)}}catch(p){i={error:p}}finally{try{v&&!v.done&&(a=d.return)&&a.call(d)}finally{if(i)throw i.error}}for(var w=null;s.length;){var A=null;if(w){var Q=t.mirror.getId(w.value.parentNode),m=l(w.value);Q!==-1&&m!==-1&&(A=w)}if(!A)for(var I=s.length-1;I>=0;I--){var b=s.get(I);if(b){var Q=t.mirror.getId(b.value.parentNode),m=l(b.value);if(Q!==-1&&m!==-1){A=b;break}}}if(!A){for(;s.head;)s.removeNode(s.head.value);break}w=A.previous,s.removeNode(A.value),c(A.value)}var C={texts:t.texts.map(function(p){return{id:t.mirror.getId(p.node),value:p.value}}).filter(function(p){return t.mirror.has(p.id)}),attributes:t.attributes.map(function(p){return{id:t.mirror.getId(p.node),attributes:p.attributes}}).filter(function(p){return t.mirror.has(p.id)}),removes:t.removes,adds:o};!C.texts.length&&!C.attributes.length&&!C.removes.length&&!C.adds.length||(t.texts=[],t.attributes=[],t.removes=[],t.addedSet=new Set,t.movedSet=new Set,t.droppedSet=new Set,t.movedMap={},t.emissionCallback(C))}},this.processMutation=function(n){var r,i,a,o,s,l,c,g;if(!na(n.target))switch(n.type){case"characterData":{var u=n.target.textContent;!Ue(n.target,t.blockClass)&&u!==n.oldValue&&t.texts.push({value:It(n.target,t.maskTextClass,t.maskTextSelector,t.maskAll)&&u?t.maskTextFn?t.maskTextFn(u):u.replace(/[\S]/g,"*"):u,node:n.target});break}case"attributes":{var h=n.target,u=n.target.getAttribute(n.attributeName),d=h.tagName.toLowerCase().trim();if(n.attributeName==="value"&&(u=jr({maskInputOptions:t.maskInputOptions,tagName:n.target.tagName,type:n.target.getAttribute("type"),value:u,maskInputFn:t.maskInputFn,node:n.target,maskTextClass:t.maskTextClass,maskTextSelector:t.maskTextSelector,maskAll:t.maskAll})),Ue(n.target,t.blockClass)||u===n.oldValue)return;var v=t.attributes.find(function(N){return N.node===n.target});if(v||(v={node:n.target,attributes:{}},t.attributes.push(v)),n.attributeName==="style"){var w=t.doc.createElement("span");n.oldValue&&w.setAttribute("style",n.oldValue),(v.attributes.style===void 0||v.attributes.style===null)&&(v.attributes.style={});var A=v.attributes.style;try{for(var Q=tt(Array.from(h.style)),m=Q.next();!m.done;m=Q.next()){var I=m.value,b=h.style.getPropertyValue(I),C=h.style.getPropertyPriority(I);(b!==w.style.getPropertyValue(I)||C!==w.style.getPropertyPriority(I))&&(C===""?A[I]=b:A[I]=[b,C])}}catch(N){r={error:N}}finally{try{m&&!m.done&&(i=Q.return)&&i.call(Q)}finally{if(r)throw r.error}}try{for(var p=tt(Array.from(w.style)),P=p.next();!P.done;P=p.next()){var I=P.value;h.style.getPropertyValue(I)===""&&(A[I]=!1)}}catch(N){a={error:N}}finally{try{P&&!P.done&&(o=p.return)&&o.call(p)}finally{if(a)throw a.error}}}else v.attributes[n.attributeName]=ta(t.doc,n.target.tagName,n.attributeName,u);if(n.attributeName==="open"&&d==="dialog"&&(h.matches("dialog:modal")?v.attributes.rr_open_mode="modal":v.attributes.rr_open_mode="non-modal"),d==="img"){var E=It(n.target,t.maskTextClass,t.maskTextSelector,t.maskAll);if(E){var k=nu({n:h,attributes:v.attributes,maskImageFn:t.maskImageFn});try{for(var y=tt(Object.entries(k)),O=y.next();!O.done;O=y.next()){var M=Nn(O.value,2),S=M[0],R=M[1];v.attributes[S]=R}}catch(N){s={error:N}}finally{try{O&&!O.done&&(l=y.return)&&l.call(y)}finally{if(s)throw s.error}}}else{var x=["src","srcset","alt"].filter(function(N){return N!==n.attributeName});try{for(var B=tt(x),F=B.next();!F.done;F=B.next()){var S=F.value,L=h.getAttribute(S)||"",T=ta(t.doc,h.tagName,S,L);v.attributes[S]!==T&&(v.attributes[S]=T)}}catch(N){c={error:N}}finally{try{F&&!F.done&&(g=B.return)&&g.call(B)}finally{if(c)throw c.error}}}}break}case"childList":{n.addedNodes.forEach(function(H){return t.genAdds(H,n.target)}),n.removedNodes.forEach(function(H){var N=t.mirror.getId(H),_=Fn(n.target)?t.mirror.getId(n.target.host):t.mirror.getId(n.target);Ue(n.target,t.blockClass)||na(H)||(t.addedSet.has(H)?(ra(t.addedSet,H),t.droppedSet.add(H)):t.addedSet.has(n.target)&&N===-1||fu(n.target,t.mirror)||(t.movedSet.has(H)&&t.movedMap[pu(N,_)]?ra(t.movedSet,H):t.removes.push({parentId:_,id:N,isShadow:Fn(n.target)?!0:void 0})),t.mapRemoves.push(H))});break}}},this.genAdds=function(n,r){if(!(r&&Ue(r,t.blockClass))){if(Au(n)){if(na(n))return;t.movedSet.add(n);var i=null;r&&Au(r)&&(i=r.__sn_atlas.id),i&&(t.movedMap[pu(n.__sn_atlas.id,i)]=!0)}else t.addedSet.add(n),t.droppedSet.delete(n);Ue(n,t.blockClass)||n.childNodes.forEach(function(a){return t.genAdds(a)})}}}return e.prototype.init=function(t,n,r,i,a,o,s,l,c,g,u,h,d,v,w,A,Q,m,I,b){this.blockClass=n,this.blockSelector=r,this.maskTextClass=i,this.maskTextSelector=a,this.maskAll=o,this.inlineStylesheet=s,this.maskInputOptions=l,this.maskTextFn=c,this.maskInputFn=g,this.maskImageFn=u,this.recordCanvas=h,this.inlineImages=d,this.slimDOMOptions=v,this.emissionCallback=t,this.doc=A,this.mirror=Q,this.iframeManager=m,this.shadowDomManager=I,this.canvasManager=b,this.dataURLOptions=w},e.prototype.freeze=function(){this.frozen=!0,this.canvasManager.freeze()},e.prototype.unfreeze=function(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()},e.prototype.isFrozen=function(){return this.frozen},e.prototype.lock=function(){this.locked=!0,this.canvasManager.lock()},e.prototype.unlock=function(){this.locked=!1,this.canvasManager.unlock(),this.emit()},e.prototype.reset=function(){this.canvasManager.reset()},e}();function ra(e,t){e.delete(t),t.childNodes.forEach(function(n){return ra(e,n)})}function ia(e,t,n){var r=t.parentNode;if(!r)return!1;var i=n.getId(r);return e.some(function(a){return a.id===i})?!0:ia(e,r,n)}function oa(e,t){var n=t.parentNode;return n?e.has(n)?!0:oa(e,n):!1}var Ft=[],wu=typeof CSSGroupingRule<"u",mu=typeof CSSMediaRule<"u",Cu=typeof CSSSupportsRule<"u",bu=typeof CSSConditionRule<"u";function zn(e){try{if("composedPath"in e){var t=e.composedPath();if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0];return e.target}catch{return e.target}}function Pu(e,t,n,r,i,a,o,s,l,c,g,u,h,d,v,w,A,Q,m,I,b){var C,p,P,E=new J1;Ft.push(E),E.init(e,n,r,i,a,o,s,l,c,g,u,h,d,v,w,t,A,Q,m,I);var k=window.MutationObserver||window.__rrMutationObserver,y=(P=(p=(C=window)===null||C===void 0?void 0:C.Zone)===null||p===void 0?void 0:p.__symbol__)===null||P===void 0?void 0:P.call(p,"MutationObserver");y&&window[y]&&(k=window[y]);var O=new k(E.processMutations.bind(E));return O.observe(b,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),O}function Z1(e,t,n,r){if(t.mousemove===!1)return function(){};var i=typeof t.mousemove=="number"?t.mousemove:50,a=typeof t.mousemoveCallback=="number"?t.mousemoveCallback:500,o=[],s,l=Hn(function(u){var h=Date.now()-s;e(o.map(function(d){return d.timeOffset-=h,d}),u),o=[],s=null},a),c=Hn(function(u){var h=zn(u),d=du(u)?u.changedTouches[0]:u,v=d.clientX,w=d.clientY;s||(s=Date.now()),o.push({x:v,y:w,id:r.getId(h),timeOffset:Date.now()-s}),l(typeof DragEvent<"u"&&u instanceof DragEvent?Ie.Drag:u instanceof MouseEvent?Ie.MouseMove:Ie.TouchMove)},i,{trailing:!1}),g=[je("mousemove",c,n),je("touchmove",c,n),je("drag",c,n)];return function(){g.forEach(function(u){return u()})}}function j1(e,t,n,r,i){if(i.mouseInteraction===!1)return function(){};var a=i.mouseInteraction===!0||i.mouseInteraction===void 0?{}:i.mouseInteraction,o=[],s=function(l){return function(c){var g=zn(c);if(!Ue(g,r)){var u=du(c)?c.changedTouches[0]:c;if(u){var h=n.getId(g),d=u.clientX,v=u.clientY;e({type:qr[l],id:h,x:d,y:v})}}}};return Object.keys(qr).filter(function(l){return Number.isNaN(Number(l))&&!l.endsWith("_Departed")&&a[l]!==!1}).forEach(function(l){var c=l.toLowerCase(),g=s(l);o.push(je(c,g,t))}),function(){o.forEach(function(l){return l()})}}function yu(e,t,n,r,i){var a=Hn(function(o){var s=zn(o);if(!(!s||Ue(s,r))){var l=n.getId(s);if(s===t){var c=t.scrollingElement||t.documentElement;e({id:l,x:c.scrollLeft,y:c.scrollTop})}else e({id:l,x:s.scrollLeft,y:s.scrollTop})}},i.scroll||100);return je("scroll",a,t)}function X1(e){var t=-1,n=-1,r=Hn(function(){var i=cu(),a=uu();(t!==i||n!==a)&&(e({width:Number(a),height:Number(i)}),t=i,n=a)},200);return je("resize",r,window)}function Qu(e,t){var n=He({},e);return t||delete n.userTriggered,n}var q1=["INPUT","TEXTAREA","SELECT","DIV"],xu=new WeakMap;function eC(e,t,n,r,i,a,o,s,l,c,g,u,h){function d(C){var p=zn(C),P=C.isTrusted,E=p.tagName==="DIV",k=E&&p.isContentEditable;if(p&&p.tagName==="OPTION"&&(p=p.parentElement),!(!p||!p.tagName||q1.indexOf(p.tagName)<0||Ue(p,r)||E&&!k)){var y=p.type;if(!p.classList.contains(s)){var O=k?p.innerText||"":p.value,M=!1;y==="radio"||y==="checkbox"?M=p.checked:(l[p.tagName.toLowerCase()]||l[y]||It(p,i,a,o))&&(O=jr({maskInputOptions:l,tagName:p.tagName,type:y,value:O,maskInputFn:c,node:p,maskTextClass:i,maskTextSelector:a,maskAll:o})),v(p,Qu({text:O,isChecked:M,userTriggered:P},h));var S=p.name;y==="radio"&&S&&M&&t.querySelectorAll('input[type="radio"][name="'+S+'"]').forEach(function(R){R!==p&&v(R,Qu({text:R.value,isChecked:!M,userTriggered:!1},h))})}}}function v(C,p){var P=xu.get(C);if(!P||P.text!==p.text||P.isChecked!==p.isChecked){xu.set(C,p);var E=n.getId(C);e(He(He({},p),{id:E}))}}var w=u.input==="last"?["change"]:["input","change"],A,Q=function(C){var p,P,E=((p=C.target)===null||p===void 0?void 0:p.type)==="checkbox"||((P=C.target)===null||P===void 0?void 0:P.type)==="radio";if(u.input!=="debounce"||E)return d(C);clearTimeout(A);var k=typeof u.inputDebounce=="number"?u.inputDebounce:500;A=setTimeout(function(){d(C)},k)},m=w.map(function(C){return je(C,Q,t)}),I=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"),b=[[HTMLInputElement.prototype,"value"],[HTMLInputElement.prototype,"checked"],[HTMLSelectElement.prototype,"value"],[HTMLTextAreaElement.prototype,"value"],[HTMLSelectElement.prototype,"selectedIndex"],[HTMLOptionElement.prototype,"selected"]];return I&&I.set&&m.push.apply(m,me(b.map(function(C){return ei(C[0],C[1],{set:function(){Q({target:this})}})}))),function(){m.forEach(function(C){return C()})}}function ti(e){var t=[];function n(r,i){if(wu&&r.parentRule instanceof CSSGroupingRule||mu&&r.parentRule instanceof CSSMediaRule||Cu&&r.parentRule instanceof CSSSupportsRule||bu&&r.parentRule instanceof CSSConditionRule){var a=Array.from(r.parentRule.cssRules),o=a.indexOf(r);i.unshift(o)}else{var a=Array.from(r.parentStyleSheet.cssRules),o=a.indexOf(r);i.unshift(o)}return i}return n(e,t)}function tC(e,t,n){var r=t.CSSStyleSheet.prototype.insertRule;t.CSSStyleSheet.prototype.insertRule=function(s,l){var c=n.getId(this.ownerNode);return c!==-1&&e({id:c,adds:[{rule:s,index:l}]}),r.apply(this,arguments)};var i=t.CSSStyleSheet.prototype.deleteRule;t.CSSStyleSheet.prototype.deleteRule=function(s){var l=n.getId(this.ownerNode);return l!==-1&&e({id:l,removes:[{index:s}]}),i.apply(this,arguments)};var a={};wu?a.CSSGroupingRule=t.CSSGroupingRule:(mu&&(a.CSSMediaRule=t.CSSMediaRule),bu&&(a.CSSConditionRule=t.CSSConditionRule),Cu&&(a.CSSSupportsRule=t.CSSSupportsRule));var o={};return Object.entries(a).forEach(function(s){var l=Nn(s,2),c=l[0],g=l[1];o[c]={insertRule:g.prototype.insertRule,deleteRule:g.prototype.deleteRule},g.prototype.insertRule=function(u,h){var d=n.getId(this.parentStyleSheet.ownerNode);return d!==-1&&e({id:d,adds:[{rule:u,index:me(ti(this),[h||0])}]}),o[c].insertRule.apply(this,arguments)},g.prototype.deleteRule=function(u){var h=n.getId(this.parentStyleSheet.ownerNode);return h!==-1&&e({id:h,removes:[{index:me(ti(this),[u])}]}),o[c].deleteRule.apply(this,arguments)}}),function(){t.CSSStyleSheet.prototype.insertRule=r,t.CSSStyleSheet.prototype.deleteRule=i,Object.entries(a).forEach(function(s){var l=Nn(s,2),c=l[0],g=l[1];g.prototype.insertRule=o[c].insertRule,g.prototype.deleteRule=o[c].deleteRule})}}function nC(e,t,n){var r=t.CSSStyleDeclaration.prototype.setProperty;t.CSSStyleDeclaration.prototype.setProperty=function(a,o,s){var l,c,g=n.getId((c=(l=this.parentRule)===null||l===void 0?void 0:l.parentStyleSheet)===null||c===void 0?void 0:c.ownerNode);return g!==-1&&e({id:g,set:{property:a,value:o,priority:s},index:ti(this.parentRule)}),r.apply(this,arguments)};var i=t.CSSStyleDeclaration.prototype.removeProperty;return t.CSSStyleDeclaration.prototype.removeProperty=function(a){var o,s,l=n.getId((s=(o=this.parentRule)===null||o===void 0?void 0:o.parentStyleSheet)===null||s===void 0?void 0:s.ownerNode);return l!==-1&&e({id:l,remove:{property:a},index:ti(this.parentRule)}),i.apply(this,arguments)},function(){t.CSSStyleDeclaration.prototype.setProperty=r,t.CSSStyleDeclaration.prototype.removeProperty=i}}function rC(e,t,n,r){var i=function(o){return Hn(function(s){var l=zn(s);if(!(!l||Ue(l,t))){var c=l,g=c.currentTime,u=c.volume,h=c.muted;e({type:o,id:n.getId(l),currentTime:g,volume:u,muted:h})}},r.media||500)},a=[je("play",i(0)),je("pause",i(1)),je("seeked",i(2)),je("volumechange",i(3))];return function(){a.forEach(function(o){return o()})}}function iC(e,t){var n=t.defaultView;if(!n)return function(){};var r=[],i=new WeakMap,a=n.FontFace;n.FontFace=function(l,c,g){var u=new a(l,c,g);return i.set(u,{family:l,buffer:typeof c!="string",descriptors:g,fontSource:typeof c=="string"?c:JSON.stringify(Array.from(new Uint8Array(c)))}),u};var o=Gn(t.fonts,"add",function(s){return function(l){return setTimeout(function(){var c=i.get(l);c&&(e(c),i.delete(l))},0),s.apply(this,[l])}});return r.push(function(){n.FontFace=a}),r.push(o),function(){r.forEach(function(s){return s()})}}function oC(e,t){var n=e.mutationCb,r=e.mousemoveCb,i=e.mouseInteractionCb,a=e.scrollCb,o=e.viewportResizeCb,s=e.inputCb,l=e.mediaInteractionCb,c=e.styleSheetRuleCb,g=e.styleDeclarationCb,u=e.canvasMutationCb,h=e.fontCb;e.mutationCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.mutation&&t.mutation.apply(t,me(d)),n.apply(void 0,me(d))},e.mousemoveCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.mousemove&&t.mousemove.apply(t,me(d)),r.apply(void 0,me(d))},e.mouseInteractionCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.mouseInteraction&&t.mouseInteraction.apply(t,me(d)),i.apply(void 0,me(d))},e.scrollCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.scroll&&t.scroll.apply(t,me(d)),a.apply(void 0,me(d))},e.viewportResizeCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.viewportResize&&t.viewportResize.apply(t,me(d)),o.apply(void 0,me(d))},e.inputCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.input&&t.input.apply(t,me(d)),s.apply(void 0,me(d))},e.mediaInteractionCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.mediaInteaction&&t.mediaInteaction.apply(t,me(d)),l.apply(void 0,me(d))},e.styleSheetRuleCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.styleSheetRule&&t.styleSheetRule.apply(t,me(d)),c.apply(void 0,me(d))},e.styleDeclarationCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.styleDeclaration&&t.styleDeclaration.apply(t,me(d)),g.apply(void 0,me(d))},e.canvasMutationCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.canvasMutation&&t.canvasMutation.apply(t,me(d)),u.apply(void 0,me(d))},e.fontCb=function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];t.font&&t.font.apply(t,me(d)),h.apply(void 0,me(d))}}function aC(e,t){var n,r;t===void 0&&(t={});var i=e.doc.defaultView;if(!i)return function(){};oC(e,t);var a=Pu(e.mutationCb,e.doc,e.blockClass,e.blockSelector,e.maskTextClass,e.maskTextSelector,e.maskAll,e.inlineStylesheet,e.maskInputOptions,e.maskTextFn,e.maskInputFn,e.maskImageFn,e.recordCanvas,e.inlineImages,e.slimDOMOptions,e.dataURLOptions,e.mirror,e.iframeManager,e.shadowDomManager,e.canvasManager,e.doc),o=Z1(e.mousemoveCb,e.sampling,e.doc,e.mirror),s=j1(e.mouseInteractionCb,e.doc,e.mirror,e.blockClass,e.sampling),l=yu(e.scrollCb,e.doc,e.mirror,e.blockClass,e.sampling),c=X1(e.viewportResizeCb),g=eC(e.inputCb,e.doc,e.mirror,e.blockClass,e.maskTextClass,e.maskTextSelector,e.maskAll,e.ignoreClass,e.maskInputOptions,e.maskInputFn,e.maskImageFn,e.sampling,e.userTriggeredOnInput),u=rC(e.mediaInteractionCb,e.blockClass,e.mirror,e.sampling),h=tC(e.styleSheetRuleCb,i,e.mirror),d=nC(e.styleDeclarationCb,i,e.mirror),v=e.collectFonts?iC(e.fontCb,e.doc):function(){},w=[];try{for(var A=tt(e.plugins),Q=A.next();!Q.done;Q=A.next()){var m=Q.value;w.push(m.observer(m.callback,i,m.options))}}catch(I){n={error:I}}finally{try{Q&&!Q.done&&(r=A.return)&&r.call(A)}finally{if(n)throw n.error}}return function(){Ft.forEach(function(I){return I.reset()}),a.disconnect(),o(),s(),l(),c(),g(),u(),h(),d(),v(),w.forEach(function(I){return I()})}}for(var sC=function(){function e(t){this.iframes=new WeakMap,this.mutationCb=t.mutationCb}return e.prototype.addIframe=function(t){this.iframes.set(t,!0)},e.prototype.addLoadListener=function(t){this.loadListener=t},e.prototype.attachIframe=function(t,n){var r;this.mutationCb({adds:[{parentId:t.__sn_atlas.id,nextId:null,node:n}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),(r=this.loadListener)===null||r===void 0||r.call(this,t)},e}(),lC=function(){function e(t){this.mutationCb=t.mutationCb,this.scrollCb=t.scrollCb,this.bypassOptions=t.bypassOptions,this.mirror=t.mirror}return e.prototype.addShadowRoot=function(t,n){Pu(this.mutationCb,n,this.bypassOptions.blockClass,this.bypassOptions.blockSelector,this.bypassOptions.maskTextClass,this.bypassOptions.maskTextSelector,this.bypassOptions.maskAll,this.bypassOptions.inlineStylesheet,this.bypassOptions.maskInputOptions,this.bypassOptions.maskTextFn,this.bypassOptions.maskInputFn,this.bypassOptions.maskImageFn,this.bypassOptions.recordCanvas,this.bypassOptions.inlineImages,this.bypassOptions.slimDOMOptions,this.bypassOptions.dataURLOptions,this.mirror,this.bypassOptions.iframeManager,this,this.bypassOptions.canvasManager,t),yu(this.scrollCb,t,this.mirror,this.bypassOptions.blockClass,this.bypassOptions.sampling)},e}(),cC=function(){function e(t,n){var r=this;n===void 0&&(n={});var i,a;this.bucketSize=100,this.refillRate=10,this.mutationBuckets={},this.loggedTracker={},this.options={},this.throttleMutations=function(o){if(o.type!==Ce.IncrementalSnapshot||o.data.source!==Ie.Mutation)return o;var s=o.data,l=r.numberOfChanges(s);s.attributes&&(s.attributes=s.attributes.filter(function(g){var u,h,d,v=r.getNodeOrRelevantParent(g.id);return r.mutationBuckets[v]===0?!1:(r.mutationBuckets[v]=(u=r.mutationBuckets[v])!==null&&u!==void 0?u:r.bucketSize,r.mutationBuckets[v]=Math.max(r.mutationBuckets[v]-1,0),r.mutationBuckets[v]===0&&(r.loggedTracker[v]||(r.loggedTracker[v]=!0,(d=(h=r.options).onBlockedNode)===null||d===void 0||d.call(h,v))),g)}));var c=r.numberOfChanges(s);if(!(c===0&&l!==c))return o},this.cleanup=function(){r.refillIntervalId&&clearInterval(r.refillIntervalId)},this.refillBuckets=function(){Object.keys(r.mutationBuckets).forEach(function(o){r.mutationBuckets[o]=r.mutationBuckets[o]+r.refillRate,r.mutationBuckets[o]>=r.bucketSize&&delete r.mutationBuckets[o]})},this.getNodeOrRelevantParent=function(o){var s=r.mirror.getNode(o);if((s==null?void 0:s.nodeName)!=="svg"&&s instanceof Element){var l=s.closest("svg");if(l)return r.mirror.getId(l)}return o},this.numberOfChanges=function(o){var s,l,c,g,u,h,d,v;return((l=(s=o.removes)===null||s===void 0?void 0:s.length)!==null&&l!==void 0?l:0)+((g=(c=o.attributes)===null||c===void 0?void 0:c.length)!==null&&g!==void 0?g:0)+((h=(u=o.texts)===null||u===void 0?void 0:u.length)!==null&&h!==void 0?h:0)+((v=(d=o.adds)===null||d===void 0?void 0:d.length)!==null&&v!==void 0?v:0)},this.mirror=t,this.options=n,this.refillRate=(i=this.options.refillRate)!==null&&i!==void 0?i:this.refillRate,this.bucketSize=(a=this.options.bucketSize)!==null&&a!==void 0?a:this.bucketSize,this.refillIntervalId=setInterval(function(){r.refillBuckets()},1e3)}return e}(),sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",uC=typeof Uint8Array>"u"?[]:new Uint8Array(256),ni=0;ni<sn.length;ni++)uC[sn.charCodeAt(ni)]=ni;var fC=function(e){var t=new Uint8Array(e),n,r=t.length,i="";for(n=0;n<r;n+=3)i+=sn[t[n]>>2],i+=sn[(t[n]&3)<<4|t[n+1]>>4],i+=sn[(t[n+1]&15)<<2|t[n+2]>>6],i+=sn[t[n+2]&63];return r%3===2?i=i.substring(0,i.length-1)+"=":r%3===1&&(i=i.substring(0,i.length-2)+"=="),i},Iu=new Map;function dC(e,t){var n=Iu.get(e);return n||(n=new Map,Iu.set(e,n)),n.has(t)||n.set(t,[]),n.get(t)}var ku=function(e,t,n){if(!(!e||!(Bu(e,t)||typeof e=="object"))){var r=(e==null?void 0:e.constructor.name)||"",i=dC(n,r),a=i.indexOf(e);return a===-1&&(a=i.length,i.push(e)),a}};function ri(e,t,n){if(e instanceof Array)return e.map(function(d){return ri(d,t,n)});if(e===null)return e;if(e instanceof Float32Array||e instanceof Float64Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Int16Array||e instanceof Int8Array||e instanceof Uint8ClampedArray){var r=e.constructor.name;return{rr_type:r,args:[Object.values(e)]}}else if(e instanceof ArrayBuffer){var i=e.constructor.name,a=fC(e);return{rr_type:i,base64:a}}else if(e instanceof DataView){var o=e.constructor.name;return{rr_type:o,args:[ri(e.buffer,t,n),e.byteOffset,e.byteLength]}}else if(e instanceof HTMLImageElement){var s=e.constructor.name,l=e.src;return{rr_type:s,src:l}}else if(e instanceof HTMLCanvasElement){var c="HTMLImageElement",l=e.toDataURL();return{rr_type:c,src:l}}else if(e instanceof ImageData){var g=e.constructor.name;return{rr_type:g,args:[ri(e.data,t,n),e.width,e.height]}}else if(Bu(e,t)||typeof e=="object"){var u=(e==null?void 0:e.constructor.name)||"",h=ku(e,t,n);return{rr_type:u,index:h}}return e}var Su=function(e,t,n){return e.map(function(r){return ri(r,t,n)})},Bu=function(e,t){var n=["WebGLActiveInfo","WebGLBuffer","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebGLVertexArrayObject","WebGLVertexArrayObjectOES"],r=n.filter(function(i){return typeof t[i]=="function"});return!!r.find(function(i){return e instanceof t[i]})};function gC(e,t,n,r){var i,a,o=[],s=Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype),l=function(h){try{if(typeof t.CanvasRenderingContext2D.prototype[h]!="function")return"continue";var d=Gn(t.CanvasRenderingContext2D.prototype,h,function(w){return function(){for(var A=this,Q=[],m=0;m<arguments.length;m++)Q[m]=arguments[m];return Ue(this.canvas,n)||setTimeout(function(){var I=Su(Q,t,A);e(A.canvas,{type:Nt["2D"],property:h,args:I})},0),w.apply(this,Q)}});o.push(d)}catch{var v=ei(t.CanvasRenderingContext2D.prototype,h,{set:function(A){e(this.canvas,{type:Nt["2D"],property:h,args:[A],setter:!0})}});o.push(v)}};try{for(var c=tt(s),g=c.next();!g.done;g=c.next()){var u=g.value;l(u)}}catch(h){i={error:h}}finally{try{g&&!g.done&&(a=c.return)&&a.call(c)}finally{if(i)throw i.error}}return function(){o.forEach(function(h){return h()})}}function hC(e){return e==="experimental-webgl"?"webgl":e}function Ou(e,t,n,r){var i=[];try{var a=Gn(e.HTMLCanvasElement.prototype,"getContext",function(o){return function(s){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];if(!Ue(this,t)){var g=hC(s);if("__context"in this||(this.__context=g),r&&["webgl","webgl2"].includes(g))if(l[0]&&typeof l[0]=="object"){var u=l[0];u.preserveDrawingBuffer||(u.preserveDrawingBuffer=!0)}else l.splice(0,1,{preserveDrawingBuffer:!0})}return o.apply(this,me([s],l))}});i.push(a)}catch{console.error("failed to patch HTMLCanvasElement.prototype.getContext")}return function(){i.forEach(function(o){return o()})}}function Du(e,t,n,r,i,a){var o,s,l=[],c=Object.getOwnPropertyNames(e),g=function(v){if(["isContextLost","canvas","drawingBufferWidth","drawingBufferHeight"].includes(v))return"continue";try{if(typeof e[v]!="function")return"continue";var w=Gn(e,v,function(Q){return function(){for(var m=[],I=0;I<arguments.length;I++)m[I]=arguments[I];var b=Q.apply(this,m);if(ku(b,a,this),"tagName"in this.canvas&&!Ue(this.canvas,r)){var C=Su(m,a,this),p={type:t,property:v,args:C};n(this.canvas,p)}return b}});l.push(w)}catch{var A=ei(e,v,{set:function(m){n(this.canvas,{type:t,property:v,args:[m],setter:!0})}});l.push(A)}};try{for(var u=tt(c),h=u.next();!h.done;h=u.next()){var d=h.value;g(d)}}catch(v){o={error:v}}finally{try{h&&!h.done&&(s=u.return)&&s.call(u)}finally{if(o)throw o.error}}return l}function vC(e,t,n,r){var i=[];return i.push.apply(i,me(Du(t.WebGLRenderingContext.prototype,Nt.WebGL,e,n,r,t))),typeof t.WebGL2RenderingContext<"u"&&i.push.apply(i,me(Du(t.WebGL2RenderingContext.prototype,Nt.WebGL2,e,n,r,t))),function(){i.forEach(function(a){return a()})}}function pC(e,t){var n=atob(e);if(t){for(var r=new Uint8Array(n.length),i=0,a=n.length;i<a;++i)r[i]=n.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(r.buffer))}return n}function AC(e,t,n){var r=t===void 0?null:t,i=n===void 0?!1:n,a=pC(e,i),o=a.indexOf(`
`,10)+1,s=a.substring(o)+(r?"//# sourceMappingURL="+r:""),l=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(l)}function wC(e,t,n){var r;return function(a){return r=r||AC(e,t,n),new Worker(r,a)}}var mC=wC("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9DQoNCiAgICBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7DQogICAgICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7DQogICAgICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCAidGhyb3ciOiB2ZXJiKDEpLCAicmV0dXJuIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnOw0KICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH0NCiAgICAgICAgZnVuY3Rpb24gc3RlcChvcCkgew0KICAgICAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTsNCiAgICAgICAgICAgIHdoaWxlIChfKSB0cnkgew0KICAgICAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbInJldHVybiJdIDogb3BbMF0gPyB5WyJ0aHJvdyJdIHx8ICgodCA9IHlbInJldHVybiJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDsNCiAgICAgICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07DQogICAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkgew0KICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhazsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7DQogICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH0NCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH0NCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH0NCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pOw0KICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfQ0KICAgICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07DQogICAgICAgIH0NCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMiA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMiBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgdmFyIGxhc3RCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIHZhciB0cmFuc3BhcmVudEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgZnVuY3Rpb24gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKSB7DQogICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsNCiAgICAgICAgICAgIHZhciBpZCwgb2Zmc2NyZWVuLCBibG9iLCBhcnJheUJ1ZmZlciwgYmFzZTY0Ow0KICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkgew0KICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOg0KICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB3aWR0aCArICItIiArIGhlaWdodDsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCdPZmZzY3JlZW5DYW52YXMnIGluIGdsb2JhbFRoaXMpKSByZXR1cm4gWzMsIDNdOw0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCldOw0KICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyldOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDE6DQogICAgICAgICAgICAgICAgICAgICAgICBibG9iID0gX2Euc2VudCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBibG9iLmFycmF5QnVmZmVyKCldOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDI6DQogICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlciA9IF9hLnNlbnQoKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBiYXNlNjRdOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiwgJyddOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0pOw0KICAgICAgICB9KTsNCiAgICB9DQogICAgdmFyIHdvcmtlciA9IHNlbGY7DQogICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7DQogICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsNCiAgICAgICAgICAgIHZhciBfYSwgaWQsIGJpdG1hcCwgd2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMsIHRyYW5zcGFyZW50QmFzZTY0LCBvZmZzY3JlZW4sIGN0eCwgYmxvYiwgdHlwZSwgYXJyYXlCdWZmZXIsIGJhc2U2NCwgX2I7DQogICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7DQogICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkgew0KICAgICAgICAgICAgICAgICAgICBjYXNlIDA6DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSkgcmV0dXJuIFszLCA1XTsNCiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZS5kYXRhLCBpZCA9IF9hLmlkLCBiaXRtYXAgPSBfYS5iaXRtYXAsIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodCwgZGF0YVVSTE9wdGlvbnMgPSBfYS5kYXRhVVJMT3B0aW9uczsNCiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNjcmVlbiA9IG5ldyBPZmZzY3JlZW5DYW52YXMod2lkdGgsIGhlaWdodCk7DQogICAgICAgICAgICAgICAgICAgICAgICBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIGJpdG1hcC5jbG9zZSgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyldOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDE6DQogICAgICAgICAgICAgICAgICAgICAgICBibG9iID0gX2Muc2VudCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGJsb2IudHlwZTsNCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgYmxvYi5hcnJheUJ1ZmZlcigpXTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOg0KICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCdWZmZXIgPSBfYy5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgICAgICBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOw0KICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSAhbGFzdEJsb2JNYXAuaGFzKGlkKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2IpIHJldHVybiBbMywgNF07DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRyYW5zcGFyZW50QmFzZTY0XTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOg0KICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSAoX2Muc2VudCgpKSA9PT0gYmFzZTY0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA0Ow0KICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2IpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogaWQgfSldOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCbG9iTWFwLmdldChpZCkgPT09IGJhc2U2NCkNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBpZCB9KV07DQogICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U2NDogYmFzZTY0LA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCwNCiAgICAgICAgICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA2XTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIsIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBlLmRhdGEuaWQgfSldOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMl07DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfSk7DQogICAgICAgIH0pOw0KICAgIH07Cgp9KSgpOwoK",null,!1),CC=function(){function e(t){var n=this;this.pendingCanvasMutations=new Map,this.rafStamps={latestId:0,invokeId:null},this.frozen=!1,this.locked=!1,this.processMutation=function(g,u){var h=n.rafStamps.invokeId&&n.rafStamps.latestId!==n.rafStamps.invokeId;(h||!n.rafStamps.invokeId)&&(n.rafStamps.invokeId=n.rafStamps.latestId),n.pendingCanvasMutations.has(g)||n.pendingCanvasMutations.set(g,[]),n.pendingCanvasMutations.get(g).push(u)};var r=t.sampling,i=r===void 0?"all":r,a=t.win,o=t.blockClass,s=t.blockSelector,l=t.recordCanvas,c=t.dataURLOptions;this.mutationCb=t.mutationCb,this.mirror=t.mirror,l&&i==="all"&&this.initCanvasMutationObserver(a,o,s),l&&typeof i=="number"&&this.initCanvasFPSObserver(i,a,o,s,{dataURLOptions:c})}return e.prototype.reset=function(){this.pendingCanvasMutations.clear(),this.resetObservers&&this.resetObservers()},e.prototype.freeze=function(){this.frozen=!0},e.prototype.unfreeze=function(){this.frozen=!1},e.prototype.lock=function(){this.locked=!0},e.prototype.unlock=function(){this.locked=!1},e.prototype.initCanvasFPSObserver=function(t,n,r,i,a){var o=this,s=Ou(n,r,i,!0),l=new Map,c=new mC;c.onmessage=function(w){var A=w.data.id;if(l.set(A,!1),"base64"in w.data){var Q=w.data,m=Q.base64,I=Q.type,b=Q.width,C=Q.height;o.mutationCb({id:A,type:Nt["2D"],commands:[{property:"clearRect",args:[0,0,b,C]},{property:"drawImage",args:[{rr_type:"ImageBitmap",args:[{rr_type:"Blob",data:[{rr_type:"ArrayBuffer",base64:m}],type:I}]},0,0]}]})}};var g=1e3/t,u=0,h,d=function(){var w=[];return n.document.querySelectorAll("canvas").forEach(function(A){Ue(A,r)||w.push(A)}),w},v=function(w){if(u&&w-u<g){h=requestAnimationFrame(v);return}u=w,d().forEach(function(A){return P1(o,void 0,void 0,function(){var Q,m,I,b;return y1(this,function(C){switch(C.label){case 0:return Q=this.mirror.getId(A),l.get(Q)?[2]:A.width===0||A.height===0?[2]:(l.set(Q,!0),["webgl","webgl2"].includes(A.__context)&&(m=A.getContext(A.__context),((b=m==null?void 0:m.getContextAttributes())===null||b===void 0?void 0:b.preserveDrawingBuffer)===!1&&m.clear(m.COLOR_BUFFER_BIT)),[4,createImageBitmap(A)]);case 1:return I=C.sent(),c.postMessage({id:Q,bitmap:I,width:A.width,height:A.height,dataURLOptions:a.dataURLOptions},[I]),[2]}})})}),h=requestAnimationFrame(v)};h=requestAnimationFrame(v),this.resetObservers=function(){s(),cancelAnimationFrame(h)}},e.prototype.initCanvasMutationObserver=function(t,n,r){this.startRAFTimestamping(),this.startPendingCanvasMutationFlusher();var i=Ou(t,n,r,!1),a=gC(this.processMutation.bind(this),t,n),o=vC(this.processMutation.bind(this),t,n,r);this.resetObservers=function(){i(),a(),o()}},e.prototype.startPendingCanvasMutationFlusher=function(){var t=this;requestAnimationFrame(function(){return t.flushPendingCanvasMutations()})},e.prototype.startRAFTimestamping=function(){var t=this,n=function(r){t.rafStamps.latestId=r,requestAnimationFrame(n)};requestAnimationFrame(n)},e.prototype.flushPendingCanvasMutations=function(){var t=this;this.pendingCanvasMutations.forEach(function(n,r){var i=t.mirror.getId(r);t.flushPendingCanvasMutationFor(r,i)}),requestAnimationFrame(function(){return t.flushPendingCanvasMutations()})},e.prototype.flushPendingCanvasMutationFor=function(t,n){if(!(this.frozen||this.locked)){var r=this.pendingCanvasMutations.get(t);if(!(!r||n===-1)){var i=r.map(function(o){o.type;var s=b1(o,["type"]);return s}),a=r[0].type;this.mutationCb({id:n,type:a,commands:i}),this.pendingCanvasMutations.delete(t)}}},e}();function Ge(e){return He(He({},e),{timestamp:Date.now()})}var Me,Wn,ln=V1();function Un(e){e===void 0&&(e={});var t=e.emit,n=e.checkoutEveryNms,r=e.checkoutEveryNth,i=e.checkoutMode,a=i===void 0?"any":i,o=e.blockClass,s=o===void 0?"rr-block":o,l=e.blockSelector,c=l===void 0?null:l,g=e.ignoreClass,u=g===void 0?"rr-ignore":g,h=e.maskTextClass,d=h===void 0?"rr-mask":h,v=e.maskTextSelector,w=v===void 0?null:v,A=e.maskAll,Q=A===void 0?!1:A,m=e.inlineStylesheet,I=m===void 0?!0:m,b=e.maskAllInputs,C=e.maskInputOptions,p=e.slimDOMOptions,P=e.maskInputFn,E=e.maskTextFn,k=e.maskImageFn,y=e.hooks,O=e.packFn,M=e.sampling,S=M===void 0?{}:M,R=e.dataURLOptions,x=R===void 0?{}:R,B=e.mousemoveWait,F=e.recordCanvas,L=F===void 0?!1:F,T=e.userTriggeredOnInput,H=T===void 0?!1:T,N=e.collectFonts,_=N===void 0?!1:N,W=e.inlineImages,U=W===void 0?!1:W,J=e.plugins,q=e.keepIframeSrcFn,oe=q===void 0?function(){return!1}:q,te=e.mutationRateLimiterOptions;if(!t)throw new Error("emit function is required");B!==void 0&&S.mousemove===void 0&&(S.mousemove=B);var fe=b===!0?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:C!==void 0?C:{password:!0},le=p===!0||p==="all"?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:p==="all",headMetaDescKeywords:p==="all"}:p||{},ce=te!=null&&te.enabled?new cC(ln,te):void 0;K1();var ve,Ee=0;Me=function(G,V){var ue;!((ue=Ft[0])===null||ue===void 0)&&ue.isFrozen()&&G.type!==Ce.FullSnapshot&&!(G.type===Ce.IncrementalSnapshot&&G.data.source===Ie.Mutation)&&Ft.forEach(function(nt){return nt.unfreeze()});var de=ce?ce.throttleMutations(G):G;if(de){if(t(O?O(G):G,V),G.type===Ce.FullSnapshot)ve=G,Ee=0;else if(G.type===Ce.IncrementalSnapshot){if(G.data.source===Ie.Mutation&&G.data.isAttachIframe)return;Ee++;var $e=r&&Ee>=r,Oe=n&&G.timestamp-ve.timestamp>n;(a==="all"&&$e&&Oe||a==="any"&&($e||Oe))&&Wn(!0)}}};var Ye=function(G){Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.Mutation},G)}))},ut=function(G){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.Scroll},G)}))},Ht=function(G){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.CanvasMutation},G)}))},Gt=new sC({mutationCb:Ye}),ci=new CC({recordCanvas:L,mutationCb:Ht,win:window,blockClass:s,blockSelector:c,mirror:ln,sampling:S.canvas,dataURLOptions:x}),gn=new lC({mutationCb:Ye,scrollCb:ut,bypassOptions:{blockClass:s,blockSelector:c,maskTextClass:d,maskTextSelector:w,maskAll:Q,inlineStylesheet:I,maskInputOptions:fe,dataURLOptions:x,maskTextFn:E,maskInputFn:P,maskImageFn:k,recordCanvas:L,inlineImages:U,sampling:S,slimDOMOptions:le,iframeManager:Gt,canvasManager:ci},mirror:ln});Wn=function(G){var V,ue,de,$e;G===void 0&&(G=!1),G||Me(Ge({type:Ce.Meta,data:{href:window.location.href,title:document.title,width:uu(),height:cu()}}),G),Ft.forEach(function(Je){return Je.lock()});var Oe=Nn($1(document,{blockClass:s,blockSelector:c,maskTextClass:d,maskTextSelector:w,maskAll:Q,inlineStylesheet:I,maskAllInputs:fe,maskTextFn:E,maskImageFn:k,slimDOM:le,dataURLOptions:x,recordCanvas:L,inlineImages:U,onSerialize:function(Je){gu(Je)&&Gt.addIframe(Je),hu(Je)&&gn.addShadowRoot(Je.shadowRoot,document)},onIframeLoad:function(Je,rt){Gt.attachIframe(Je,rt)},keepIframeSrcFn:oe}),2),nt=Oe[0],ft=Oe[1];if(!nt)return console.warn("Failed to snapshot the document");ln.map=ft,Me(Ge({type:Ce.FullSnapshot,data:{node:nt,initialOffset:{left:window.pageXOffset!==void 0?window.pageXOffset:(document==null?void 0:document.documentElement.scrollLeft)||((ue=(V=document==null?void 0:document.body)===null||V===void 0?void 0:V.parentElement)===null||ue===void 0?void 0:ue.scrollLeft)||(document==null?void 0:document.body.scrollLeft)||0,top:window.pageYOffset!==void 0?window.pageYOffset:(document==null?void 0:document.documentElement.scrollTop)||(($e=(de=document==null?void 0:document.body)===null||de===void 0?void 0:de.parentElement)===null||$e===void 0?void 0:$e.scrollTop)||(document==null?void 0:document.body.scrollTop)||0}}})),Ft.forEach(function(Je){return Je.unlock()})};try{var St=[];St.push(je("DOMContentLoaded",function(){Me(Ge({type:Ce.DomContentLoaded,data:{}}))}));var hn=function(G){return aC({mutationCb:Ye,mousemoveCb:function(V,ue){return Me(Ge({type:Ce.IncrementalSnapshot,data:{source:ue,positions:V}}))},mouseInteractionCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.MouseInteraction},V)}))},scrollCb:ut,viewportResizeCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.ViewportResize},V)}))},inputCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.Input},V)}))},mediaInteractionCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.MediaInteraction},V)}))},styleSheetRuleCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.StyleSheetRule},V)}))},styleDeclarationCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.StyleDeclaration},V)}))},canvasMutationCb:Ht,fontCb:function(V){return Me(Ge({type:Ce.IncrementalSnapshot,data:He({source:Ie.Font},V)}))},blockClass:s,ignoreClass:u,maskTextClass:d,maskTextSelector:w,maskAll:Q,maskInputOptions:fe,inlineStylesheet:I,sampling:S,recordCanvas:L,inlineImages:U,userTriggeredOnInput:H,collectFonts:_,doc:G,maskInputFn:P,maskTextFn:E,maskImageFn:k,blockSelector:c,slimDOMOptions:le,dataURLOptions:x,mirror:ln,iframeManager:Gt,shadowDomManager:gn,canvasManager:ci,plugins:(J==null?void 0:J.map(function(V){return{observer:V.observer,options:V.options,callback:function(ue){return Me(Ge({type:Ce.Plugin,data:{plugin:V.name,payload:ue}}))}}}))||[]},y)};Gt.addLoadListener(function(G){St.push(hn(G.contentDocument))});var ui=function(){Wn(),St.push(hn(document))};return document.readyState==="interactive"||document.readyState==="complete"?ui():St.push(je("load",function(){Me(Ge({type:Ce.Load,data:{}})),ui()},window)),function(){St.forEach(function(G){return G()}),ce&&(ce.cleanup(),ce=void 0)}}catch(G){console.warn(G)}}Un.addCustomEvent=function(e,t){if(!Me)throw new Error("please add custom event after start recording");Me(Ge({type:Ce.Custom,data:{tag:e,payload:t}}))},Un.freezePage=function(){Ft.forEach(function(e){return e.freeze()})},Un.takeFullSnapshot=function(e){if(!Wn)throw new Error("please take full snapshot after start recording");Wn(e)},Un.mirror=ln;var cn=function(){function e(t){this.fileName=t.fileName||"",this.functionName=t.functionName||"",this.lineNumber=t.lineNumber,this.columnNumber=t.columnNumber}return e.prototype.toString=function(){var t=this.lineNumber||"",n=this.columnNumber||"";return this.functionName?this.functionName+" ("+this.fileName+":"+t+":"+n+")":this.fileName+":"+t+":"+n},e}(),bC=/(^|@)\S+:\d+/,Eu=/^\s*at .*(\S+:\d+|\(native\))/m,PC=/^(eval@)?(\[native code])?$/,Tu={parse:function(e){return e?typeof e.stacktrace<"u"||typeof e["opera#sourceloc"]<"u"?this.parseOpera(e):e.stack&&e.stack.match(Eu)?this.parseV8OrIE(e):e.stack?this.parseFFOrSafari(e):[]:[]},extractLocation:function(e){if(e.indexOf(":")===-1)return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/,n=t.exec(e.replace(/[()]/g,""));if(!n)throw new Error("Cannot parse given url: "+e);return[n[1],n[2]||void 0,n[3]||void 0]},parseV8OrIE:function(e){var t=e.stack.split(`
`).filter(function(n){return!!n.match(Eu)},this);return t.map(function(n){n.indexOf("(eval ")>-1&&(n=n.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(\),.*$)/g,""));var r=n.replace(/^\s+/,"").replace(/\(eval code/g,"("),i=r.match(/ (\((.+):(\d+):(\d+)\)$)/);r=i?r.replace(i[0],""):r;var a=r.split(/\s+/).slice(1),o=this.extractLocation(i?i[1]:a.pop()),s=a.join(" ")||void 0,l=["eval","<anonymous>"].indexOf(o[0])>-1?void 0:o[0];return new cn({functionName:s,fileName:l,lineNumber:o[1],columnNumber:o[2]})},this)},parseFFOrSafari:function(e){var t=e.stack.split(`
`).filter(function(n){return!n.match(PC)},this);return t.map(function(n){if(n.indexOf(" > eval")>-1&&(n=n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),n.indexOf("@")===-1&&n.indexOf(":")===-1)return new cn({functionName:n});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,i=n.match(r),a=i&&i[1]?i[1]:void 0,o=this.extractLocation(n.replace(r,""));return new cn({functionName:a,fileName:o[0],lineNumber:o[1],columnNumber:o[2]})},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf(`
`)>-1&&e.message.split(`
`).length>e.stacktrace.split(`
`).length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(e){for(var t=/Line (\d+).*script (?:in )?(\S+)/i,n=e.message.split(`
`),r=[],i=2,a=n.length;i<a;i+=2){var o=t.exec(n[i]);o&&r.push(new cn({fileName:o[2],lineNumber:parseFloat(o[1])}))}return r},parseOpera10:function(e){for(var t=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=e.stacktrace.split(`
`),r=[],i=0,a=n.length;i<a;i+=2){var o=t.exec(n[i]);o&&r.push(new cn({functionName:o[3]||void 0,fileName:o[2],lineNumber:parseFloat(o[1])}))}return r},parseOpera11:function(e){var t=e.stack.split(`
`).filter(function(n){return!!n.match(bC)&&!n.match(/^Error created at/)},this);return t.map(function(n){var r=n.split("@"),i=this.extractLocation(r.pop()),a=r.shift()||"",o=a.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;return new cn({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2]})},this)}};function yC(e){if(!e||!e.outerHTML)return"";for(var t="";e.parentElement;){var n=e.localName;if(!n)break;n=n.toLowerCase();var r=e.parentElement,i=[];if(r.children&&r.children.length>0)for(var a=0;a<r.children.length;a++){var o=r.children[a];o.localName&&o.localName.toLowerCase&&o.localName.toLowerCase()===n&&i.push(o)}i.length>1&&(n+=":eq("+i.indexOf(e)+")"),t=n+(t?">"+t:""),e=r}return t}function aa(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ru(e,t){var n,r;if(t===0)return!0;var i=Object.keys(e);try{for(var a=tt(i),o=a.next();!o.done;o=a.next()){var s=o.value;if(aa(e[s])&&Ru(e[s],t-1))return!0}}catch(l){n={error:l}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return!1}function sa(e,t){var n={numOfKeysLimit:50,depthOfLimit:4};Object.assign(n,t);var r=[],i=[];return JSON.stringify(e,function(s,l){if(r.length>0){var c=r.indexOf(this);~c?r.splice(c+1):r.push(this),~c?i.splice(c,1/0,s):i.push(s),~r.indexOf(l)&&(r[0]===l?l="[Circular ~]":l="[Circular ~."+i.slice(0,r.indexOf(l)).join(".")+"]")}else r.push(l);if(l===null)return l;if(l===void 0)return"undefined";if(a(l))return o(l);if(typeof l=="bigint")return l.toString()+"n";if(l instanceof Event){var g={};for(var u in l){var h=l[u];Array.isArray(h)?g[u]=yC(h.length?h[0]:null):g[u]=h}return g}else{if(l instanceof Node)return l instanceof HTMLElement?l?l.outerHTML:"":l.nodeName;if(l instanceof Error)return l.stack?l.stack+`
End of stack for Error object`:l.name+": "+l.message}return l});function a(s){return!!(aa(s)&&Object.keys(s).length>n.numOfKeysLimit||typeof s=="function"||aa(s)&&Ru(s,n.depthOfLimit))}function o(s){var l=s.toString();return n.stringLengthLimit&&l.length>n.stringLengthLimit&&(l=l.slice(0,n.stringLengthLimit)+"..."),l}}var QC={level:["assert","clear","count","countReset","debug","dir","dirxml","error","group","groupCollapsed","groupEnd","info","log","table","time","timeEnd","timeLog","trace","warn"],lengthThreshold:1e3,logger:"console"};function xC(e,t,n){var r,i,a=n.logger;if(!a)return function(){};var o;typeof a=="string"?o=t[a]:o=a;var s=0,l=[];if(n.level.includes("error")&&window){var c=function(v){var w=v.message,A=v.error,Q=Tu.parse(A).map(function(I){return I.toString()}),m=[sa(w,n.stringifyOptions)];e({level:"error",trace:Q,payload:m})};window.addEventListener("error",c),l.push(function(){window&&window.removeEventListener("error",c)})}try{for(var g=tt(n.level),u=g.next();!u.done;u=g.next()){var h=u.value;l.push(d(o,h))}}catch(v){r={error:v}}finally{try{u&&!u.done&&(i=g.return)&&i.call(g)}finally{if(r)throw r.error}}return function(){l.forEach(function(v){return v()})};function d(v,w){var A=this;return v[w]?Gn(v,w,function(Q){return function(){for(var m=[],I=0;I<arguments.length;I++)m[I]=arguments[I];Q.apply(A,m);try{var b=Tu.parse(new Error).map(function(p){return p.toString()}).splice(1),C=m.map(function(p){return sa(p,n.stringifyOptions)});s++,s<n.lengthThreshold?e({level:w,trace:b,payload:C}):s===n.lengthThreshold&&e({level:"warn",trace:[],payload:[sa("The number of log records reached the threshold.")]})}catch(p){Q.apply(void 0,me(["rrweb logger error:",p],m))}}}):function(){}}}var IC="rrweb/console@1",kC=function(e){return{name:IC,observer:xC,options:Object.assign({},QC,e)}};class SC{constructor(){this.startSession=async(t,n,r,i,a=1,o,s,l,c)=>await Be.post("/api/client-app/session-recorder/sessions",{companyId:t,customerId:n,id:r,userAgent:i,version:a,location:o,ipAddress:s,timezone:l,firstEventAt:c},{errorLabel:"Failed to start session"}),this.storeEvents=async(t,n,r)=>await Be.post(`/api/client-app/session-recorder/sessions/${t}/events`,{events:n.map(i=>JSON.stringify(i)),utilityEvents:r,lastEventAt:n[n.length-1].timestamp},{errorLabel:"Failed to update session"})}}var ii=(e=>(e.PAGE_UNLOAD="PAGE_UNLOAD",e.PAGE_LOAD="PAGE_LOAD",e.CONVERSATION_STARTED="CONVERSATION_STARTED",e))(ii||{});const BC="atlas/network@1",Mu={ignorePaths:[]};function OC(e){const t=XMLHttpRequest.prototype.open,n=window.fetch;XMLHttpRequest.prototype.open=function(a,o,s=!0,l,c){this.addEventListener("load",g=>{e({url:typeof o=="string"?o:o.toString(),method:a,status:g.target.status})}),t.apply(this,[a,o,s,l,c])};const r=window.fetch||"";return r.toString().indexOf("native code")!==-1&&(window.fetch=function(a,o){let s,l="GET";typeof a=="string"||a instanceof URL?(s=a.toString(),o!=null&&o.method&&(l=o.method)):(s=a.url,l=a.method||l);const c=r.call(this,a,o);return c.then(g=>{e({status:g.status,url:s,method:l})}).catch(g=>{e({status:"failed",url:s,method:l,reason:String(g)})}),c}),()=>{XMLHttpRequest.prototype.open=t,window.fetch=n}}const DC=(e,t,n)=>{n={...Mu,...n};const i=OC(a=>{n.ignorePaths&&!n.ignorePaths.reduce((o,s)=>o&&!a.url.startsWith(s),!0)||e(a)});return()=>{i()}},EC=e=>({name:BC,observer:DC,options:e??Mu}),TC="atlas/new-dialogue@1";let oi;const RC={name:TC,observer(e,t,n){return oi=()=>{e({timestamp:Date.now(),name:"NewDialogue"})},()=>{}},options:{}},MC=()=>{oi==null||oi()},Nu="atlas/history@1",NC={name:Nu,observer(e,t){if(typeof t<"u"&&t.history&&t.history instanceof History&&"pushState"in t.history){const n=()=>{e({href:t.document.location.href,title:document.title})},r=t.history,i=r.pushState;r.pushState=(...o)=>{const s=i.apply(r,o);return n(),s};const a=r.replaceState;return r.replaceState=(...o)=>{const s=a.apply(r,o);return n(),s},t.addEventListener("popstate",n),()=>{r.pushState=i,r.replaceState=a,t.removeEventListener("popstate",n)}}else return()=>{}},options:{}},FC=["[name*=ssn]","[name*=password]"],Fu={fps:4,dataUrlOptions:{type:"image/webp",quality:.5}},LC="#ddd",_C="#999";function HC(e,t){const n=e.toString(),r=t.toString(),i="http://www.w3.org/2000/svg",a=document.createElementNS(i,"svg");a.setAttributeNS(null,"width",n),a.setAttributeNS(null,"height",r);const o=document.createElementNS(i,"rect");o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",n),o.setAttributeNS(null,"height",r),o.setAttributeNS(null,"fill",LC),a.appendChild(o);const s=document.createElementNS(i,"text");return s.setAttributeNS(null,"x",(e/2).toString()),s.setAttributeNS(null,"y",(t/2).toString()),s.setAttributeNS(null,"text-anchor","middle"),s.setAttributeNS(null,"dominant-baseline","middle"),s.setAttributeNS(null,"font-family","monospace"),s.setAttributeNS(null,"fill",_C),s.textContent=`${e}x${t}`,a.appendChild(s),a}function GC(e,t){const n=new XMLSerializer().serializeToString(HC(e,t));return`data:image/svg+xml;base64,${window.btoa(n)}`}const $n=parseInt(Jf),zC=10*60*1e3,WC=Math.floor(zC/$n)-2,UC=Math.floor(1*60*1e3/$n)-2,$C=$n*3,un="atlas-recorder-session-id",VC=4,KC=5,YC=3*60*1e3,JC=3*1e3,ZC=49*1024*1024,jC=/\/api\/client-app\/session-recorder\/sessions\/[\w\d-]+\/events/i,XC=["https://bam.nr-data.net","https://app.posthog.com","https://us.i.posthog.com","https://eu.i.posthog.com","https://session-replay.browser-intake-datadoghq.com"],qC=['[data-grammarly-shadow-root="true"]'],eb=e=>e.type===Ce.IncrementalSnapshot&&[Ie.MouseInteraction,Ie.Scroll,Ie.ViewportResize,Ie.Input,Ie.TouchMove,Ie.MediaInteraction,Ie.Drag].includes(e.data.source);class tb{constructor(t){return this.settings=t,this.events=[],this.utilityEvents=[],this.sendInProgress=!1,this.isRecording=!1,this.isSending=!1,this.idleTicks=0,this.startFailedAttempts=0,this.lastCheckTimestamp=Date.now(),this.__isStarted=!1,this.isRestarting=!1,this.eventsEstimatedSize=0,this.textEncoder=new TextEncoder,this.resetSendEventsInterval=()=>{this.timer&&clearInterval(this.timer),this.timer=setInterval(this.sendEvents,$n)},this.startSending=()=>{this.isSending||(this.isSending=!0,this.idleTicks=0,this.resetSendEventsInterval(),window.addEventListener("beforeunload",this.tabClosed))},this.stopSending=()=>{this.isSending=!1,this.timer&&clearInterval(this.timer),window.removeEventListener("beforeunload",this.tabClosed)},this.tabClosed=async()=>{this.utilityEvents.push({type:ii.PAGE_UNLOAD,timestamp:Date.now()}),await this.sendEvents(!0)},this.sendEvents=async(n=!1)=>{const r=Math.max(1,Math.floor((Date.now()-this.lastCheckTimestamp)/$n));if(this.lastCheckTimestamp=Date.now(),!this.sendInProgress){this.sendInProgress=!0;try{if(!this.identity)return;const i=this.events.length>0&&this.events.some(eb);if(i?this.idleTicks=0:this.idleTicks+=r,this.idleTicks>WC){await this.restart();return}if(!this.events.length||!i&&this.idleTicks>UC&&!n)return;if(!this.sessionId){if(!i||n)return;if(await this.startSession(this.events[0].timestamp),this.sessionId)this.startFailedAttempts=0;else{this.startFailedAttempts++,this.startFailedAttempts>=KC&&this.stop();return}}const a=this.events,o=this.utilityEvents;this.events=[],this.utilityEvents=[],this.eventsEstimatedSize=0;try{await this.api.storeEvents(this.sessionId,a,o)}catch(s){typeof s=="string"&&~s.indexOf("INVALID_SESSION")&&await this.restart()}}finally{this.sendInProgress=!1}}},this.startSession=async n=>{if(!this.identity)return;this.loadSessionId();let r;try{r=Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}try{const i=ht.read(Or),a=await this.api.startSession(this.identity.companyId,this.identity.atlasId,this.sessionId||this.previousSessionId,navigator.userAgent,VC,i==null?void 0:i.location,i==null?void 0:i.ipAddress,r,n);if(!a)return;this.sessionId=a.sessionId,this.storeSessionId(a.sessionId)}catch(i){console.error(i);return}},this.storeSessionId=n=>{n?se.write(un,n):se.remove(un)},this.loadSessionId=()=>{var r,i,a;const n=se.read(un);n&&((a=(i=(r=window.opener)==null?void 0:r.Atlas)==null?void 0:i.recording)==null?void 0:a.getSessionId())!=n&&(this.sessionId=n)},this.startRecording=()=>{if(this.isRecording)return;this.isRecording=!0;const n=[kC({level:["log","info","warn","error"],stringifyOptions:{numOfKeysLimit:50,depthOfLimit:3}}),RC,NC];this.settings.captureNetwork&&n.push(EC({ignorePaths:[...XC,window.Atlas.proxyUrl||Cn]}));const r=({href:l,title:c})=>{this.utilityEvents.push({type:ii.PAGE_LOAD,timestamp:Date.now(),url:l,title:c})},i=(l,c)=>{const g=FC,u=l.filter(v=>v.type===gi.MASK).map(v=>v.selector),h=v=>v.join(",");if(!c)return h([...g,...u]);const d=h(l.filter(v=>v.type===gi.RECORD).map(v=>~v.selector.indexOf(":not(")?v.selector:`${v.selector},${v.selector} *`));return d.length>0?`html :not(${d})`:"html *"},a=l=>{const c=l.naturalWidth??l.offsetWidth,g=l.naturalHeight??l.offsetHeight;return{src:GC(c,g),srcset:""}},o=this.settings.recordingMode===va.MASK_ALL,s=i(this.settings.selectors||[],o);this.stopRecording=Un({emit:l=>{const c=this.textEncoder.encode(JSON.stringify(l)).length;if(this.eventsEstimatedSize+=c,this.eventsEstimatedSize>=ZC&&(this.sendEvents(),this.resetSendEventsInterval()),!this.isRestarting&&this.lastCheckTimestamp<Date.now()-$C&&this.sendEvents(),this.events.push(l),l.type===Ce.Meta){const{href:g,title:u}=l.data;r({href:g,title:u})}if(l.type===Ce.Plugin&&l.data.plugin===Nu){const{href:g,title:u}=l.data.payload;r({href:g,title:u})}},plugins:n,blockClass:"atlas-hide",blockSelector:qC.join(","),maskTextClass:"atlas-mask",maskAll:o,maskTextSelector:s,maskImageFn:a,sampling:{scroll:250,input:"debounce",inputDebounce:1e3,canvas:Fu.fps},dataURLOptions:Fu.dataUrlOptions,mutationRateLimiterOptions:{enabled:!0,onBlockedNode:l=>{console.log(`Too many mutations on node '${l}'. Rate limiting.`)}},recordCanvas:this.settings.recordCanvas,checkoutMode:"all",checkoutEveryNms:YC,checkoutEveryNth:JC})},this.shouldRecord=()=>this.settings.hasAllowedSession&&this.isEnabledByDomain()&&(this.settings.recordVisitors||this.identity&&!this.identity.isVisitor),this.isEnabledByDomain=()=>{const n=window.location.hostname;return this.settings.hostnameMap[n]!==!1},this.isFrameVisible=()=>(window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight)&&(window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth),this.start=async()=>{this.__isStarted=!0,this.settings.enableSessions=!0,this.shouldRecord()&&(this.isFrameVisible()?(this.startRecording(),this.startSending(),window.removeEventListener("resize",this.start)):window.addEventListener("resize",this.start))},this.stop=async()=>{var r;this.stopSending();const n=await this.sendEvents(!0);return(r=this.stopRecording)==null||r.call(this),this.idleTicks=0,this.events=[],this.utilityEvents=[],this.eventsEstimatedSize=0,this.sessionId=void 0,this.isRecording=!1,se.remove(un),this.__isStarted=!1,n},this.restart=async()=>{var n;this.isRestarting||(this.isRestarting=!0,this.stopSending(),(n=this.stopRecording)==null||n.call(this),this.events=[],this.utilityEvents=[],this.eventsEstimatedSize=0,this.previousSessionId=this.sessionId||this.previousSessionId,this.sessionId=void 0,this.isRecording=!1,se.remove(un),await this.start(),this.isRestarting=!1)},this.onLogin=async n=>{this.identity=n,this.settings.enableSessions&&await this.start()},this.onConvert=async(n,r)=>{await this.onLogin(r)},this.onLogout=async()=>{await this.stop()},this.getSessionId=()=>this.sessionId,this.dispatchNewDialogue=n=>{MC(),this.utilityEvents.push({type:ii.CONVERSATION_STARTED,timestamp:Date.now(),id:n})},this.recordInternal=n=>{!this.settings.debug||jC.test(n.url)||this.events.push({type:Ce.Plugin,timestamp:Date.now(),data:{plugin:"atlas/network-debug@1",payload:n}})},this.update=n=>{typeof n.enabled=="boolean"&&n.enabled!==this.isRecording?n.enableSessions?this.start():this.stop():typeof n.enableSessions=="boolean"&&n.enableSessions!==this.isRecording&&(n.enableSessions?this.start():this.stop())},this.api=new SC,this}get isStarted(){return this.__isStarted}}const la="atlas-article",nb=`
  .${la} {
    font-size: 16px;
    line-height: 24px;
  }

  .${la} > :where(.atlas-block) {
    margin: 0 0 24px 0;
    white-space: pre-wrap;
  }

  /* HEADINGS */

  .atlas-block-heading-two {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: inherit;
  }

  .atlas-block-heading-three {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: inherit;
  }

  /* ICON */

  .atlas-block-icon {
    display: inline-block;
    margin: 0;
    position: relative;
  }

  .atlas-block-icon-text {
    position: absolute;
    inset: 0;
  }

  /* CALLOUT */

  .atlas-block-callout {
    background: #f3f2ef;
    color: #657b83;
    padding: 12px 16px;
    border-radius: 5px;
    border: 0.5px solid rgba(38, 38, 38, 0.16);
    overflow: auto;
  }

  .atlas-block-callout .atlas-block-icon {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #dedacc;
    border-radius: 4px;
    margin: 0;
  }

  .atlas-block-callout .atlas-block-paragraph {
    margin: 0;
    flex: 1 0 auto;
    padding: 4px 0;
  }

  .atlas-block-callout .atlas-block-icon + .atlas-block-paragraph {
    margin-left: 44px;
  }

  /* MEDIA */

  .atlas-block-image-container,
  .atlas-block-video-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .atlas-block-image img,
  .atlas-block-video video,
  .atlas-block-video-embed-iframe,
  .atlas-block-embed-iframe {
    max-width: 100%;
  }

  .atlas-block-embed:where(:not(:first-child)) {
    margin-top: 1em;
  }

  .atlas-block-image__expanded img {
    width: 100%;
  }

  .atlas-block-image__centered {
    text-align: center;
  }

  .atlas-block-video video {
    width: 100%;
    height: auto;
  }

  .atlas-block-image__float-left,
  .atlas-block-video__float-left,
  .atlas-block-video-embed__float-left {
    float: left;
  }

  .atlas-block-image__float-right,
  .atlas-block-video__float-right,
  .atlas-block-video-embed__float-right {
    float: right;
  }

  .atlas-block-image__centered,
  .atlas-block-image__float-left,
  .atlas-block-video__float-left,
  .atlas-block-video-embed__float-left {
    margin-right: 2em;
  }

  .atlas-block-image__centered,
  .atlas-block-image__float-right,
  .atlas-block-video__float-right,
  .atlas-block-video-embed__float-right {
    margin-left: 2em;
  }

  .atlas-block-video__centered,
  .atlas-block-video-embed__centered {
    margin-left: auto;
    margin-right: auto;
  }

  .atlas-block-image__float-left,
  .atlas-block-image__float-right {
    max-width: 60%;
  }

  .atlas-block-video__centered,
  .atlas-block-video__float-left,
  .atlas-block-video__float-right,
  .atlas-block-video-embed__centered,
  .atlas-block-video-embed__float-left,
  .atlas-block-video-embed__float-right {
    width: 60%;
  }

  .atlas-block-video-embed,
  .atlas-block-embed {
    position: relative;
    text-align: center;
  }

  .atlas-block-video-embed__youtube {
    padding-bottom: 56.3%;
  }

  .atlas-block-video-embed__youtube:where(.atlas-block-video-embed__centered),
  .atlas-block-video-embed__youtube:where(.atlas-block-video-embed__float-left),
  .atlas-block-video-embed__youtube:where(.atlas-block-video-embed__float-right) {
    padding-bottom: 33.8%;
  }

  .atlas-block-video-embed__clueso {
    padding-bottom: 56.3%;
    border-radius: 8px 8px 0 0;
  }

  .atlas-block-video-embed__clueso .atlas-block-video-embed-iframe {
    border-radius: 8px;
  }

  .atlas-block-video-embed__clueso.atlas-block-video-embed__centered,
  .atlas-block-video-embed__clueso.atlas-block-video-embed__float-left,
  .atlas-block-video-embed__clueso.atlas-block-video-embed__float-right {
      padding-bottom: 33.8%;
  }

  @media screen and (max-width: 768px) {
    .atlas-block-video-embed__clueso {
      overflow: hidden;
      padding-bottom: 60%;
    }

    .atlas-block-video-embed__clueso .atlas-block-video-embed-iframe {
      margin-top: -20px;
      border-radius: 0 0 8px 8px;
    }

    .atlas-block-video-embed__clueso.atlas-block-video-embed__centered,
    .atlas-block-video-embed__clueso.atlas-block-video-embed__float-left,
    .atlas-block-video-embed__clueso.atlas-block-video-embed__float-right {
      padding-bottom: 36.8%;
    }
  }

  .atlas-block-video-embed__vimeo {
    padding-bottom: 56.3%;
  }

  .atlas-block-video-embed__vimeo:where(.atlas-block-video-embed__centered),
  .atlas-block-video-embed__vimeo:where(.atlas-block-video-embed__float-left),
  .atlas-block-video-embed__vimeo:where(.atlas-block-video-embed__float-right) {
    padding-bottom: 33.8%;
  }

  .atlas-block-video-embed__loom {
    padding-bottom: 62.5%;
  }

  .atlas-block-video-embed__loom:where(.atlas-block-video-embed__centered),
  .atlas-block-video-embed__loom:where(.atlas-block-video-embed__float-left),
  .atlas-block-video-embed__loom:where(.atlas-block-video-embed__float-right) {
    padding-bottom: 37.5%;
  }

  .atlas-block-video-embed-iframe,
  .atlas-block-embed-iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }

  /* TABLES */

  .atlas-block-table {
    overflow: auto;
  }

  .atlas-block-table > table {
    border-collapse: collapse;
  }

  .atlas-block-table-cell {
    border: 1px solid lightgray;
    padding: 5px 10px;
    vertical-align: top;
    min-width: 85px;
  }

  .atlas-block-table__expanded > table {
    min-width: 100%;
  }

  .atlas-block-table__centered > table {
    margin-left: auto;
    margin-right: auto;
  }

  .atlas-block-table__float-right {
    float: right;
    margin-left: 2em;
  }

  .atlas-block-table__float-left {
    float: left;
    margin-right: 2em;
  }

  .atlas-block-table-cell__align-left {
    text-align: left;
  }

  .atlas-block-table-cell__align-right {
    text-align: right;
  }

  .atlas-block-table-cell__align-center {
    text-align: center;
  }

  /* LISTS */

  .atlas-block-list-ul-element,
  .atlas-block-list-ol-element {
    margin: 0;
    padding-left: 3em;
  }

  .atlas-block-list .atlas-block-list {
    padding-left: 2em;
  }

  .atlas-block-list > ol,
  .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list > ol,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ol,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ol {
    list-style-type: decimal;
  }

  .atlas-block-list .atlas-block-list > ol,
  .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list > ol,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ol {
    list-style-type: lower-latin;
  }

  .atlas-block-list .atlas-block-list .atlas-block-list > ol,
  .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list > ol,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ol {
    list-style-type: lower-roman;
  }

  .atlas-block-list > ul,
  .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list > ul,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ul,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ul {
    list-style-type: disc;
  }

  .atlas-block-list .atlas-block-list > ul,
  .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list > ul,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ul {
    list-style-type: circle;
  }

  .atlas-block-list .atlas-block-list .atlas-block-list > ul,
  .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list .atlas-block-list > ul,
  .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    .atlas-block-list
    > ul {
    list-style-type: square;
  }

  /* HORIZONTAL LINES */

  .atlas-block-horizontal-line {
    overflow: hidden;
  }

  .atlas-block-horizontal-line::after {
    content: "";
    display: block;
    background: #ccc;
    height: 1px;
  }

  /* CODE */

  .atlas-block-code {
    background: #fdf6e3;
    color: #657b83;
    font-family: "JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    padding: 1em;
    border-radius: 6px;
    overflow: auto;
    tab-size: 4;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    white-space: pre;
    margin: 0 3px 24px;
  }

  .atlas-leaf:where(code) {
    background: #ddd;
    color: #ec5b5c;
    padding: 0.2em 0.4em;
    border-radius: 2px;
  }

  .atlas-leaf:where(a) {
    color: #2942ee;
    text-decoration: underline;
  }

  .atlas-leaf:where(a:hover) {
    text-decoration: none;
  }

  /* QUOTE */

  .atlas-block-quote {
    border-left: 4px solid #ddd;
    padding-left: 0.8em;
    overflow: auto;
  }
`;let Vn;function rb(){if(Vn||(Vn=Object.assign(document.createElement("style"),{textContent:nb})),document.contains(Vn))return;const e=document.head,t=e.querySelector('style, link[rel="stylesheet"]');if(t){e.insertBefore(Vn,t);return}e.appendChild(Vn)}function ib({container:e,article:t}){if(!t)throw new Error("Article is missing");rb();const n=document.createElement("div");n.className=la;const r=Pc(We,Se,t!=null&&t.content?JSON.parse(t.content):[]);mt(r,n),e.appendChild(n)}const Lu="atlasVerified",ob=30,ab=["821lsseom0","d4ac98me8t"];function sb(e){if(ab.includes(e)||ot.read(Lu+e))return;function t(){ot.write(Lu+e,"1",ob)}try{ns({url:"https://cdn.fs.atlas.so/2vjcXulFRcSiUMwN54kM"}).then(t).catch(()=>{Be.post(`/api/client-app/company/verify/${e}`).then(t).catch(()=>{})})}catch{}}const lb=3e3;async function cb(e){if(!e)return;const t=new tb(e);return e.enableSessions&&await t.start(),t}async function ub(e,t,n,r,i){if(!e)return;const a=new v1(e,t,n,r,i);return typeof(t==null?void 0:t.enableChat)=="boolean"?t.enableChat&&await a.start():e.enableChat&&await a.start(),a}const fb=["light","dark","auto"],_u=["light","dark"];function ca(e){var g,u,h,d,v,w,A,Q,m,I,b,C,p,P,E,k;const t=(Array.isArray(e.offset)?e.offset.length===2&&e.offset.every(y=>typeof y=="number"&&!isNaN(y))?e.offset:void 0:typeof e.offset=="number"&&!isNaN(e.offset)&&[e.offset,e.offset])||void 0,n=e.brandColorLight||e.brandColor,r=e.brandColorDark||e.brandColor,i=e.textColorLight||e.textColor,a=e.textColorDark||e.textColor,o=((g=e.widget)==null?void 0:g.logoLight)||((u=e.widget)==null?void 0:u.logo),s=((h=e.widget)==null?void 0:h.logoDark)||((d=e.widget)==null?void 0:d.logo),l=((v=e.launcher)==null?void 0:v.iconLight)||((w=e.launcher)==null?void 0:w.icon),c=((A=e.launcher)==null?void 0:A.iconDark)||((Q=e.launcher)==null?void 0:Q.icon);return{...typeof e.enabled=="boolean"&&{enableChat:e.enabled},...typeof e.hideBubble=="boolean"&&{hideBubble:e.hideBubble},...typeof e.hideMenu=="boolean"&&{hideMenu:e.hideMenu},...(typeof e.openIncoming=="boolean"||e.openIncoming==="focused"||e.openIncoming==="always")&&{openIncoming:e.openIncoming},...typeof e.alwaysOn=="boolean"&&{alwaysOn:e.alwaysOn},...e.position&&typeof e.position=="string"&&{chatPosition:e.position},...e.maxHeight&&(typeof e.maxHeight=="number"||typeof e.maxHeight=="string")&&{maxHeight:e.maxHeight},...e.maxWidth&&(typeof e.maxWidth=="number"||typeof e.maxWidth=="string")&&{maxWidth:e.maxWidth},...e.maxLargeWidth&&(typeof e.maxLargeWidth=="number"||typeof e.maxLargeWidth=="string")&&{maxLargeWidth:e.maxLargeWidth},...typeof((m=e.launcher)==null?void 0:m.label)=="string"&&{chatBubbleStyle:(I=e.launcher)!=null&&I.label?Yn.WITH_LABEL:Yn.NO_LABEL,chatLabel:(b=e.launcher)==null?void 0:b.label},...typeof((C=e.launcher)==null?void 0:C.size)=="number"&&{chatLabelSize:(p=e.launcher)==null?void 0:p.size},...t&&{chatScreenOffsetXY:t},...((P=e.widget)==null?void 0:P.title)&&{titleText:e.widget.title},...((E=e.widget)==null?void 0:E.subtitle)&&{subtitleText:e.widget.subtitle},...o&&{icon:o},...s&&{iconDark:s},...l&&{launcherIcon:l},...c&&{launcherIconDark:c},...e.colorScheme&&fb.includes(e.colorScheme)&&{colorScheme:e.colorScheme},...n&&{brandColor:n},...r&&{brandColorDark:r},...i&&_u.includes(i)&&{brandTextColor:i==="light"?"#ffffff":"#262626"},...a&&_u.includes(a)&&{brandTextColorDark:a==="light"?"#ffffff":"#262626"},...((k=e.widget)==null?void 0:k.welcomeMessage)&&{onlineWelcomeMessage:e.widget.welcomeMessage},...e.htmlAttributes&&{htmlAttributes:e.htmlAttributes},...e.withChatbot&&(typeof e.withChatbot=="string"||Array.isArray(e.withChatbot)&&typeof e.withChatbot[0]=="string"&&(typeof e.withChatbot[1]>"u"||typeof e.withChatbot[1]=="object"&&e.withChatbot[1]!==null))&&{withChatbot:e.withChatbot},...e.noAnimations&&typeof e.noAnimations=="boolean"&&{noAnimations:e.noAnimations},...e.onNewAgentMessage&&{onNewAgentMessage:e.onNewAgentMessage},...e.onWindowVisibilityChange&&{onWindowVisibilityChange:e.onWindowVisibilityChange}}}function Hu(e){return{...typeof e.enabled=="boolean"&&{enableSessions:e.enabled}}}let Gu=!1,ua,fn=!1,kt=!1,ai=!1,Kn=null,ze,z,be,zu=!1,fa="{}",si;const dn={},Wu={};function li(e,t){Wu[e]=t}function Lt(e,...t){e==="onStarted"&&setTimeout(()=>sb(ze.appId),1e4);const n=Wu[e];if(typeof n!="function")return!1;if(wb.includes(e))try{n(...t)}catch(r){console.error("Atlas Callback Error:",r)}else setTimeout(()=>n(...t));return!0}function da(e){Lt("changeIdentity",{atlasId:(e==null?void 0:e.atlasId)||null,userId:(e==null?void 0:e.userId)||null,userHash:(e==null?void 0:e.userHash)||null,isVisitor:(e==null?void 0:e.isVisitor)??null})}async function _t(e){zu&&eu(e.atlasId),await(z==null?void 0:z.onLogin(e)),await(be==null?void 0:be.onLogin(e)),da(e)}async function Uu(e){const t=De.get();t&&(await(z==null?void 0:z.onConvert(e,t)),await(be==null?void 0:be.onConvert(e,t)),da(t))}async function db(e){const t=De.get();if(!t){console.error("Identity is not defined");return}const n={appId:ze.appId,...Ri(e)};De.set(n),await Uu(t)}async function ga(){await(z==null?void 0:z.onLogout()),await(be==null?void 0:be.onLogout()),da(null)}async function $u(e){if(!e)throw new TypeError("identity details are required");const{onComplete:t,onError:n,...r}=e,i=t&&(()=>{try{t==null||t()}catch(h){console.error("identify.onComplete() failed",h)}});try{const h=JSON.stringify(r);if(h===fa)return i==null?void 0:i();fa=h}catch(h){console.error(h)}const a=pb(r);if(!kt&&!fn){ze.q||(ze.q=[]),ze.q.push(["identify",t?{...a,onComplete:t,onError:n}:a]);return}if(ai=!0,ua&&clearTimeout(ua),!a.userId&&!a.integrations)throw new TypeError("one of userId or integrations is required");const o=De.get(),s=await gb(a,n);if(!s)return i==null?void 0:i();const l=De.set({...s,appId:ze.appId,createdAt:Date.now(),userHash:a.userHash});!o&&await _t(l),o&&o.isVisitor&&await Uu(o),o&&!o.isVisitor&&o.userId===a.userId?await _t(l):o&&!o.isVisitor&&o.userId!==a.userId&&(await ga(),await _t(l)),i==null||i()}async function gb(e,t){const n={...e,userId:typeof e.userId=="number"?e.userId.toString():e.userId,phoneNumber:e.phoneNumber&&C1(e.phoneNumber)},r=De.get();if(r&&r.appId===ze.appId&&m1({...r,userHash:e.userHash},n))return r;try{const a={...n,...r&&{visitorId:r.atlasId},appId:ze.appId};if(Kn)return await Kn;{Kn=kd(a);const o=await Kn;return Kn=null,o}}catch(a){console.error("Atlas Identify Error:",a),t==null||t(a);const o=De.get();return o||await Xo(ze.appId)}}const hb={onCustomerSwitched:db};class vb{constructor(t){var a;if(this.chat={start:o=>Promise.resolve(z==null?void 0:z.start(o&&ca(o))),stop:()=>Promise.resolve(z==null?void 0:z.stop()),openWindow:()=>z==null?void 0:z.openWindow(),closeWindow:()=>z==null?void 0:z.closeWindow(),showBubble:()=>z==null?void 0:z.showBubble(),hideBubble:()=>z==null?void 0:z.hideBubble(),getUnreadTicketCount:()=>(z==null?void 0:z.getUnreadTicketCount())||0,getUnreadMessageCount:()=>(z==null?void 0:z.getUnreadMessageCount())||0,get isStarted(){return(z==null?void 0:z.isStarted)||!1},get isOpened(){return(z==null?void 0:z.isOpened())||!1},updateTicketFields:(o,s)=>{const l=De.get();if(!l){console.error("Can't update ticket fields without identity");return}return z==null?void 0:z.updateTicketFields(l==null?void 0:l.atlasId,o,s)}},this.recording={start:()=>Promise.resolve(be==null?void 0:be.start()),stop:()=>Promise.resolve(be==null?void 0:be.stop()),getSessionId:()=>be==null?void 0:be.getSessionId(),dispatchNewDialogue:o=>be==null?void 0:be.dispatchNewDialogue(o),recordInternal:o=>{be==null||be.recordInternal(o)},get isStarted(){return(z==null?void 0:z.isStarted)||!1}},this.call=(...o)=>{var s;if(typeof o[0]=="function")o[0](this);else if(o[0]==="identify")this.identify(o[1]);else if(o[0]==="start")this.start(o[1]);else if(o[0]==="registerCallback")li(o[1],o[2]);else if(o[0]==="update")this.update(o[1]);else if(o[0]==="logout")this.logout();else if(o[0]==="openHelpCenter"){if(o[1]){if(typeof o[1]!="object"||o[1]===null)throw new Error("The openHelpCenter argument should be an object");if("replace"in o[1]&&typeof o[1].replace!==null&&typeof o[1].replace<"u"&&typeof o[1].replace!="boolean")throw new Error("The openHelpCenter.replace argument should be a boolean")}z==null||z.openHelpCenter({replace:!!((s=o[1])!=null&&s.replace)})}else if(o[0]==="openArticlesSearch"){if(!o[1]||typeof o[1]!="string")throw new Error('To open articles list with search call Atlas.call("openArticlesSearch", /* query */ "keywords")');z==null||z.openArticlesSearch(o[1])}else if(o[0]==="openArticlesCategory"){if(!o[1]||typeof o[1]!="string")throw new Error('To open article category call Atlas.call("openArticlesCategory", /* categorySlug */ "XXXXX-WWW-WWW")');z==null||z.openArticlesCategory(o[1])}else if(o[0]==="openArticle"){if(typeof o[1]!="object"||!o[1]||!("slug"in o[1])||typeof o[1].slug!="string"||"section"in o[1]&&typeof o[1].section!="string")throw new Error('To open article call Atlas.call("openArticle", { slug: "XXXXX-WWW-WWW" /* , section: "heading-id" */ })');z==null||z.openArticle(o[1].slug,o[1].section)}else if(o[0]==="triggerChatbot"){if(typeof o[1]!="string")throw new Error('To trigger chatbot call window.Atlas.call("triggerChatbot", "chatbot-key" /* , { prefer: "last"} */)');this.triggerChatbot(o[1],2 in o?o[2]:void 0)}else if(o[0]==="renderArticle"){if(typeof o[1]!="object"||!o[1]||!("slug"in o[1])||typeof o[1].slug!="string"||!("container"in o[1])||!(o[1].container instanceof HTMLElement))throw new Error('To render article call Atlas.call("renderArticle", { slug: "XXXXX-WWW-WWW", container: HTMLElement })');si==null||si.getArticle(o[1].slug).then(l=>ib({...o[1],article:l})).catch(l=>console.error("Render article error:",l))}else if(o[0]==="showBubble")z==null||z.call("showBubble");else if(o[0]==="hideBubble")z==null||z.call("hideBubble");else if(o[0]==="openChatWindow")z==null||z.call("openWindow");else if(o[0]==="closeChatWindow")z==null||z.call("closeWindow");else if(o[0]==="openChat")if(o[1]===void 0||o[1]===null)z==null||z.call("openChat");else{if(typeof o[1]!="object"||"text"in o[1]&&typeof o[1].ticketId<"u"&&typeof o[1].ticketId!="string"&&o[1].ticketId!==null)throw new Error('The openChat argument should be an object with ticketId parameter of string type: Atlas.call("openChat", { ticketId: "" })');z==null||z.call("openChat",o[1])}else if(o[0]==="showNewChat")if(o[1]===void 0||o[1]===null)z==null||z.call("showNewChat");else{if(typeof o[1]!="object"||"text"in o[1]&&typeof o[1].text<"u"&&typeof o[1].text!="string"&&o[1].text!==null)throw new Error('The showNewChat argument should be an object with text parameter of string type: Atlas.call("showNewChat", { text: "I am having issue with the order #361" })');z==null||z.call("showNewChat",o[1])}},this.identify=o=>{$u(o).catch(console.error.bind(console,"Atlas Identify Error:"))},this.updateLoginInfo=eu,this.triggerChatbot=(o,s)=>{if(!kt||fn||!z){console.error("Trigger Chatbot Error:","Atlas chat is not running");return}z==null||z.triggerChatbot(o,s)},this.start=async o=>{var s;if(o!=null&&o.callbacks&&Object.entries(o.callbacks).forEach(([l,c])=>c&&li(l,c)),kt||fn){console.error("Atlas Start Error:","Atlas start should not be called before Atlas.shutdown()");return}try{fn=!0;const l=((s=ze.q)==null?void 0:s.filter(([d])=>d!=="start"))??[];ze.q=[];const c=await A1(ze.appId,ze.sdkVersion);if(!c)return console.error("Atlas Start Error: Config is missing");if(se.write(Ti,c.baseDomain??""),o!=null&&o.access&&(Object.assign(dn,o.access),!await Vu()))return console.error("Atlas Start Error: Widget access is restricted");zu=c.sessionSettings.captureUserIp;const g=(o==null?void 0:o.recording)&&Hu(o==null?void 0:o.recording);be=await cb({...c.sessionSettings,...g}),o!=null&&o.identity&&await $u(o.identity);const u=(o==null?void 0:o.chat)&&ca(o==null?void 0:o.chat);z=await ub(c.chatSettings,u,c.csatSettings,this,hb),si=new ac(c.chatSettings.helpCenterCompanySlug);for(const d of l)this.call(...d);if(fn=!1,kt=!0,l.some(([d])=>d==="identify")){Lt("onStarted");return}let h=De.get();if(h){await _t(h),Lt("onStarted");return}if(!ai&&(h=await De.fetchFromCookie(ze.appId),h&&!ai)){De.set(h),await _t(h),Lt("onStarted");return}if(ai)Lt("onStarted");else{const d=typeof(o==null?void 0:o.identityWaitTime)=="number"&&o.identityWaitTime>=0?o.identityWaitTime:lb;ua=setTimeout(()=>{Xo(ze.appId).then(v=>v?_t(v):ga()).finally(()=>Lt("onStarted"))},d)}}catch(l){fn=!1,console.error("Atlas Start Error: "+l)}},this.shutdown=()=>{kt||console.error("Atlas Shutdown Error:",'The method cannot be called before Atlas.call("start")'),this.chat.isStarted&&this.chat.stop(),this.recording.isStarted&&this.recording.stop(),kt=!1,this.logout()},this.logout=async()=>{if(await ga(),De.remove(),se.remove(un),fa="{}",kt){const o=await Xo(ze.appId);o&&await _t(o)}},this.update=o=>{o!=null&&o.identity&&this.identify(o.identity),o!=null&&o.callbacks&&Object.entries(o.callbacks).forEach(([g,u])=>u&&li(g,u));const s=(o==null?void 0:o.recording)&&Hu(o==null?void 0:o.recording);s&&(be==null||be.update(s));const l=(o==null?void 0:o.chat)&&ca(o==null?void 0:o.chat);z==null||z.update(l);const c=o==null?void 0:o.access;if(c){let g=!1;typeof c.countries<"u"&&!Ab(c.countries,dn.countries)&&(g=!0,dn.countries=c.countries),typeof c.inverseCountries<"u"&&c.inverseCountries!==dn.inverseCountries&&(g=!0,dn.inverseCountries=c.inverseCountries),g&&Vu().then(u=>u||this.shutdown())}},this.registerCallback=li,this.triggerCallback=Lt,Gu)throw new Error("Atlas is already initialized");Gu=!0;const n=De.get();n&&n.appId!==t.appId&&De.remove(),ze=t,this.proxyUrl=t.proxyUrl,this.allowWebWorkers=typeof(t==null?void 0:t.allowWebWorkers)=="boolean"?t.allowWebWorkers:!0;const r=((a=t.q)==null?void 0:a.filter(o=>o[0]==="start"))??[],i=r.length?r[r.length-1][1]||{}:t.autorun;(typeof t.v>"u"||t.v<2||i)&&this.start(typeof i=="object"?i:void 0)}get started(){return kt}get loaded(){return!0}}function pb(e){const t={...e,fields:void 0};return e.fields&&Object.entries(e.fields).forEach(([n,r])=>{if(n==="phone"){r&&(t.phoneNumber=r);return}if(n==="accountName"){r&&(t.account||(t.account={}),t.account.name=r);return}t.fields||(t.fields={}),t.fields[n]=r}),typeof t.fields>"u"&&delete t.fields,t.email&&(No(t.email)||(t.email=void 0,console.error(`Invalid email: ${t.email}. Will be ignored`))),t}function Ab(e,t){return typeof e!=typeof t||!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every(n=>t.includes(n))}async function Vu(){const{countries:e,inverseCountries:t=!1}=dn;if(!e)return!0;if(!e.length)return t;const[n]=await ul();if(!n)return!0;const r=n.location.slice(-2),i=e.includes(r);return!(i&&t||!i&&!t)}const wb=["onLinkClick"];window.Atlas=new vb(window.Atlas)})();
