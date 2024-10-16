(()=>{"use strict";var e={310:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,'* {\n    box-sizing: border-box;\n    font-family: "Crimson Pro", serif;\n    color: var(--lightGray);\n\n}\n\n:root {\n    --darkGray: #1E1D20;\n    --gray: #24222A;\n    --lightGray: #C5C7D4;\n    --yellow: #E5D9A9;\n    --lightBorder: rgba(255, 255, 255, 0.05);\n    font-size: 11px;\n}\n\n.projectModal, .taskModal {\n    background-color: var(--gray);\n    border-radius: 2rem;\n    padding: 3rem;\n    border: 2px solid var(--yellow);\n}\n\nlegend {\n    font-size: 2rem;\n    text-align: center;\n}\n\n.formInput {\n    background-color: var(--darkGray);\n    border: 0;\n    padding: 0.5rem;\n    border-radius: 5px;\n}\n\nfieldset {\n    border: 0;\n}\n\n.projectInputLabel {\n    font-size: 1.5rem;\n    margin-right: 0.5rem;\n}\n\n.inputLabel {\n    font-size: 1.2rem;\n}\n\n.projectFormButtons, .taskFormButtons {\n    display: flex;\n    margin-top: 1rem;\n    gap: 0.5rem;\n}\n\n.formClose, .formSubmit, .taskClose, .taskSubmit {\n    background-color: var(--darkGray);\n    border: 0;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.formClose:hover, .formSubmit:hover, .taskClose:hover, .taskSubmit:hover {\n    background-color: var(--yellow);\n    color: var(--darkGray);\n}\n\n.taskFormContainer {\n    display: flex;\n    gap: 2rem;\n    padding: 1rem;\n}\n\n.taskInputsDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}',""]);const s=i},944:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),c=n.n(s),u=new URL(n(386),n.b),d=new URL(n(27),n.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap);"]);var m=c()(u),h=c()(d);l.push([e.id,`* {\n    box-sizing: border-box;\n    font-family: "Crimson Pro", serif;\n    color: var(--lightGray);\n\n}\n\n:root {\n    --darkGray: #1E1D20;\n    --gray: #24222A;\n    --lightGray: #C5C7D4;\n    --yellow: #E5D9A9;\n    --lightBorder: rgba(255, 255, 255, 0.05);\n    font-size: 11px;\n}\n\nbody {\n    margin: 0;\n    display: flex;\n}\n\n.wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${m});\n    width: 75%;\n    height: 100vh;\n}\n\n.logo {\n    padding: 1rem;\n    height: 16vh;\n}\n\n.mainContainer {\n    width: 92%;\n    background-color: var(--gray);\n    height: 95vh;\n    margin-bottom: 3vh;\n    border: 1px solid var(--lightBorder);\n    border-radius: 10px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding-bottom: 2rem;\n}\n\n.projectNameDiv {\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectTitleWrapper {\n    display: flex;\n    align-items: center;\n    background-color: var(--gray);\n    font-size: 2.2rem;\n    padding: 0 1rem;\n    position: sticky;\n    top: 0; \n}\n\n.projectTitleWrapper img {\n    width:8rem;\n}\n\n.tasksContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5vh;\n}\n\n.taskDiv {\n    background-color: var(--darkGray);\n    padding: 1rem;\n    margin: 0 2rem;\n    border-radius: 8px;\n}\n\n.headerDiv {\n    background-color: var(--gray);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: .3rem 1rem;\n    border-radius: 6px;\n    overflow: hidden;\n}\n\n.titleDiv {\n    display: flex;\n    gap: 1rem;\n}\n\n.taskTitle {\n    color: var(--lightGray);\n    font-family: "Crimson Pro", serif;\n    font-size: 1.7rem;\n}\n\n.taskInfo {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 1rem;\n}\n\n.taskDescription, .taskDueDate, .taskPriority {\n    font-size: 1.5rem;\n}\n\n.taskDueDate, .taskPriority {\n    margin: 0;\n}\n\n.taskDescription {\n    margin: 1rem;\n}\n\n.taskCheckbox {\n    cursor: pointer;\n    width: 2rem;\n}\n\n.taskCheckbox:hover {\n    content: url(${h});\n}\n\n.taskCompleted {\n    width: 2rem;\n    content: url(${h});\n}\n\n.buttonDiv {\n    cursor: pointer;\n}\n\n.sortByDiv {\n    display: flex;\n    gap: 1rem;\n    padding-right: 2rem;\n    align-items: center;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n    width: 12rem;\n}\n\n#dropInput {\n    background-color: var(--darkGray);\n    display: flex;\n    justify-content: space-between;\n    text-align: left;\n    border: 0;\n    padding: 0.3rem 1.5rem;\n    font-size: 1.5rem;\n    border-radius: 8px;\n    width: 11rem;\n}\n\n\n#dropInput:hover option{\n    display: block;\n    cursor: pointer;\n}\n\noption {\n    display: block;\n    padding: 0.3rem 1rem;\n    font-size: 1.3rem;\n}\n\noption:hover {\n    background-color: var(--lightGray);\n    color: var(--darkGray);\n}\n\n.editBtn {\n    display: none;\n}\n\n.taskTitle {\n    text-decoration: none;\n}\n\n.taskTitle.titleStrikethrough {\n    text-decoration: line-through;\n}\n\n.editBtn {\n    display: none;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n  }\n  \n::-webkit-scrollbar-track {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--darkGray);\n    border-radius: 20px;\n    border: 6px solid transparent;\n    background-clip: content-box;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--yellow);\n    cursor: pointer;\n}`,""]);const f=l},915:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,'* {\n    box-sizing: border-box;\n    font-family: "Crimson Pro", serif;\n    color: var(--lightGray);\n\n}\n\n:root {\n    --darkGray: #1E1D20;\n    --gray: #24222A;\n    --lightGray: #C5C7D4;\n    --yellow: #E5D9A9;\n}\n\n.sidebar {\n    width: 25%;\n    background-color: var(--gray);\n    border-right: 1px solid var(--lightBorder);\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0 2rem 2rem;\n    height: 100vh;\n}\n\n.username {\n    display: flex;\n    gap: 1rem;\n    font-size: 1.5rem;\n    margin-top: 1rem;\n}\n\n.userImg {\n    align-self: center;\n    flex: 0 1 auto;\n    margin-left: 2rem;\n    width: 2rem;\n}\n\n.icon {\n    width: 2.5rem;\n}\n\n\np {\n    font-size: 1.7rem;\n    margin: 0;\n}\n\n.greeting {\n    margin: 1rem;\n}\n\n\nh2 {\n    margin: 0;\n    font-weight: 500;\n}\n\n.newTaskButton, .newProjectButton {\n    display: flex;\n    width: 95%;\n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: var(--yellow);\n    border-radius: 24px;\n    border: 0;\n    padding: 0.5rem;\n    margin-top: 2rem;\n    cursor: pointer;\n}\n\n.newTaskButton h2, .newProjectButton h2 {\n    color: var(--gray);\n    font-size: 2rem;\n}\n\n.viewTasksDiv, .viewProjectsDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.viewTitle {\n    display: flex;\n    align-items: center;\n    align-self: flex-start;\n    gap: 0.5rem;\n    font-size: 1.6rem;\n    margin-top: 0.5rem;\n}\n\n#yellowStars {\n    width: 6rem;\n}\n\n.viewContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    background-color: var(--darkGray);\n    padding: 1rem;\n    border-radius: 10px;\n    width: 90%;\n}\n\n.tasksCategory {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 0.5rem;\n    background-color: var(--gray);\n    border-radius: 5px;\n}\n\n.tasksCategory:hover, .headerDiv:hover {\n    background-color: var(--darkGray);\n    cursor: pointer;\n}\n',""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),u=0;u<o.length;u++){var d=n(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},27:(e,t,n)=>{e.exports=n.p+"4e31ee9cdf2ac9fff3e2.png"},386:(e,t,n)=>{e.exports=n.p+"0ddc178639e222911a78.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),c=n.n(s),u=n(56),d=n.n(u),l=n(540),m=n.n(l),h=n(113),f=n.n(h),p=n(944),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;var y=n(915),w={};w.styleTagTransform=f(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=m(),a()(y.A,w),y.A&&y.A.locals&&y.A.locals;var b=n(310),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=m(),a()(b.A,v),b.A&&b.A.locals&&b.A.locals;const k=[];class x{constructor(e,t,n,r){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.isCompleted=!1}edit(e,t,n,r,a,o){this.title=e,this.description=t,this.dueDate=n,this.priority=r,a!==o&&(a.removeTask(this),o.tasks.push(this))}toggleCompletionStatus(){this.isCompleted?this.isCompleted=!1:this.isCompleted=!0}}class S{constructor(e){this.name=e,this.tasks=[]}addTask(e){this.tasks.push(e)}removeTask(e){const t=this.tasks.indexOf(e);this.tasks.splice(t,1)}}const C=n.p+"f669bf4177fe1dea23a2.png",M=n.p+"18d7b835fd1349d69bfd.png",D=n.p+"26f224ea4f8732dc966f.png",E=(Math.pow(10,8),6048e5),P=Symbol.for("constructDateFrom");function T(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&P in e?e[P](t):e instanceof Date?new e.constructor(t):new Date(t)}function q(e,t){return T(t||e,e)}function N(e){const t=q(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function j(e,t){const n=q(e,t?.in);return n.setHours(0,0,0,0),n}function W(e,t,n){const[r,a]=function(e,...t){const n=T.bind(null,e||t.find((e=>"object"==typeof e)));return t.map(n)}(n?.in,e,t),o=j(r),i=j(a),s=+o-N(o),c=+i-N(i);return Math.round((s-c)/864e5)}const A=new S("All Tasks"),L=new S("Today"),O=new S("This Week"),z=new S("Upcoming"),Y=new S("Overdue"),F=[A,L,O,z,Y];function G(e){const t=new Date,n=W(new Date(e.dueDate.replace(/-/g,"/")),t);n<0?Y.tasks.push(e):(z.tasks.push(e),0===n&&L.tasks.push(e),n<=7&&O.tasks.push(e))}function H(e){localStorage.setItem("projects",JSON.stringify(e)),localStorage.setItem("allTasks",JSON.stringify(A))}const B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function I(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const $={date:I({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:I({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:I({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,a=n?.width?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{const t=e.defaultWidth,a=n?.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const J={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function U(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;const i=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(s):function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(s);let u;return u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:t.slice(i.length)}}}const R={ordinalNumber:(V={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(V.matchPattern);if(!n)return null;const r=n[0],a=e.match(V.parsePattern);if(!a)return null;let o=V.valueCallback?V.valueCallback(a[0]):a[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:e.slice(r.length)}}),era:U({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:U({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:U({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:U({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:U({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var V;const _={code:"en-US",formatDistance:(e,t,n)=>{let r;const a=B[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:$,formatRelative:(e,t,n,r)=>Q[e],localize:J,match:R,options:{weekStartsOn:0,firstWeekContainsDate:1}};let K={};function Z(){return K}function ee(e,t){const n=q(e,t?.in);return W(n,function(e,t){const n=q(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function te(e,t){const n=Z(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=q(e,t?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function ne(e,t){return te(e,{...t,weekStartsOn:1})}function re(e,t){const n=q(e,t?.in),r=n.getFullYear(),a=T(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=ne(a),i=T(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=ne(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function ae(e,t){const n=q(e,t?.in),r=+ne(n)-+function(e,t){const n=re(e,t),r=T(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),ne(r)}(n);return Math.round(r/E)+1}function oe(e,t){const n=q(e,t?.in),r=n.getFullYear(),a=Z(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=T(t?.in||e,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=te(i,t),c=T(t?.in||e,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=te(c,t);return+n>=+s?r+1:+n>=+u?r:r-1}function ie(e,t){const n=q(e,t?.in),r=+te(n,t)-+function(e,t){const n=Z(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=oe(e,t),o=T(t?.in||e,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),te(o,t)}(n,t);return Math.round(r/E)+1}function se(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const ce={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return se("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):se(n+1,2)},d:(e,t)=>se(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>se(e.getHours()%12||12,t.length),H:(e,t)=>se(e.getHours(),t.length),m:(e,t)=>se(e.getMinutes(),t.length),s:(e,t)=>se(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return se(Math.trunc(r*Math.pow(10,n-3)),t.length)}},ue={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return ce.y(e,t)},Y:function(e,t,n,r){const a=oe(e,r),o=a>0?a:1-a;return"YY"===t?se(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):se(o,t.length)},R:function(e,t){return se(re(e),t.length)},u:function(e,t){return se(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return se(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return se(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ce.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return se(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=ie(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):se(a,t.length)},I:function(e,t,n){const r=ae(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):se(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):ce.d(e,t)},D:function(e,t,n){const r=ee(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):se(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return se(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return se(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return se(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return ce.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):ce.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):se(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):se(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ce.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ce.s(e,t)},S:function(e,t){return ce.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return le(r);case"XXXX":case"XX":return me(r);default:return me(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return le(r);case"xxxx":case"xx":return me(r);default:return me(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+de(r,":");default:return"GMT"+me(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+de(r,":");default:return"GMT"+me(r,":")}},t:function(e,t,n){return se(Math.trunc(+e/1e3),t.length)},T:function(e,t,n){return se(+e,t.length)}};function de(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+t+se(o,2)}function le(e,t){return e%60==0?(e>0?"-":"+")+se(Math.abs(e)/60,2):me(e,t)}function me(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+se(Math.trunc(r/60),2)+t+se(r%60,2)}const he=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},fe=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},pe={p:fe,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return he(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",he(r,t)).replace("{{time}}",fe(a,t))}},ge=/^D+$/,ye=/^Y+$/,we=["D","DD","YY","YYYY"];function be(e){return!(!((t=e)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof e||isNaN(+q(e)));var t}const ve=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ke=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,xe=/^'([^]*?)'?$/,Se=/''/g,Ce=/[a-zA-Z]/;function Me(e){const t=e.match(xe);return t?t[1].replace(Se,"'"):e}function De(e){const t=document.querySelector("#dropInput");t.addEventListener("change",(()=>{!function(e,t){let n=[...t.tasks];"Default"!==e&&n.sort(((t,n)=>{let r=0;switch(e){case"Name":r=((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"}))(t.title,n.title);break;case"Date":r=((e,t)=>new Date(e.dueDate.replace(/-/g,"/"))-new Date(t.dueDate.replace(/-/g,"/")))(t,n);break;case"Priority":r=((e,t)=>{const n={High:1,Medium:2,Low:3};return n[e.priority]-n[t.priority]})(t,n);break;default:return 0}return r})),Pe(n,t)}(t.value,e)}))}function Ee(e,t){Pe(e,t),De(t)}function Pe(e,t){var n;document.querySelector(".tasksContainer").innerHTML="",n=t.name,document.querySelector("#projectTitle").textContent=n,e.forEach((e=>{!function(e,t){const n=document.querySelector(".tasksContainer"),r=document.createElement("div");r.className="taskDiv";const a=document.createElement("div");a.className="headerDiv";const o=document.createElement("img");o.src=D,o.className="taskCheckbox";const i=document.createElement("p");i.textContent=e.title,i.className="taskTitle";const s=document.createElement("div");s.className="titleDiv",s.appendChild(o),s.appendChild(i);const c=document.createElement("img");c.className="icon",c.src=C,c.style.display="none";const u=document.createElement("img");u.className="icon",u.src=M;const d=document.createElement("div");d.className="buttonDiv",d.appendChild(c),d.appendChild(u),r.appendChild(a),a.appendChild(s),a.appendChild(d),o.addEventListener("click",(()=>{e.toggleCompletionStatus(),i.classList.toggle("titleStrikethrough"),o.classList.toggle("taskCompleted")})),c.addEventListener("click",(()=>{})),u.addEventListener("click",(()=>{!function(e,t){t.removeTask(e),function(e){F.forEach((t=>{t.tasks.includes(e)&&t.removeTask(e)}))}(e),function(e){k.forEach((t=>{t.tasks.includes(e)&&t.removeTask(e)}))}(e),H(k),Pe(t.tasks,t)}(e,t)}));const l=document.createElement("p");l.className="taskDescription",l.textContent=e.description;const m=document.createElement("div");m.className="taskInfo";const h=document.createElement("p");h.className="taskDueDate";const f=function(e,t,n){const r=Z(),a=n?.locale??r.locale??_,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=q(e,n?.in);if(!be(s))throw new RangeError("Invalid time value");let c=t.match(ke).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,pe[t])(e,a.formatLong):e})).join("").match(ve).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:Me(e)};if(ue[t])return{isToken:!0,value:e};if(t.match(Ce))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return ye.test(e)}(o)||!n?.useAdditionalDayOfYearTokens&&function(e){return ge.test(e)}(o))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),we.includes(e))throw new RangeError(r)}(o,t,String(e)),(0,ue[o[0]])(s,o,a.localize,u)})).join("")}(new Date(e.dueDate.replace(/-/g,"/")),"MM/dd/yyyy");h.textContent=`Due: ${f}`;const p=document.createElement("p");p.className="taskPriority",p.textContent=`Priority: ${e.priority}`,m.appendChild(h),m.appendChild(p),r.appendChild(l),r.appendChild(m),n.appendChild(r)}(e,t)})),De(t)}function Te(e){document.querySelector("#projectsContainer").innerHTML="",e.forEach((e=>{qe(e)}))}function qe(e){const t=document.querySelector("#projectsContainer"),n=document.createElement("div");n.className="headerDiv",n.id=`projectName-${e.name}`;const r=document.createElement("p");r.textContent=e.name;const a=document.createElement("img");a.className="icon",a.src=C,a.style.display="none";const o=document.createElement("img");o.className="icon",o.src=M;const i=document.createElement("div");i.className="buttonDiv",i.appendChild(a),i.appendChild(o),n.appendChild(r),n.appendChild(i),t.appendChild(n),n.addEventListener("click",(()=>{Ee(e.tasks,e)})),a.addEventListener("click",(()=>{})),o.addEventListener("click",(()=>{!function(e){const t=k.indexOf(e.name);k.splice(t,1),H(k),Te(k)}(e)})),function(e){const t=document.querySelector("#projectSelector"),n=document.createElement("option");n.textContent=e.name,t.appendChild(n)}(e)}!function(){const e=document.querySelector(".projectModal"),t=document.querySelector(".newProjectButton"),n=document.querySelector(".formClose"),r=document.querySelector(".formSubmit");t.addEventListener("click",(()=>{e.showModal()})),n.addEventListener("click",(()=>{e.close()})),r.addEventListener("click",(t=>{t.preventDefault();const n=function(e){const t=new S(e);return k.push(t),qe(t),t}(document.querySelector("#projectInput").value.trim());H(k),document.querySelector(".projectForm").reset(),e.close(),Ee(n.tasks,n)}))}(),function(){const e=document.querySelector(".taskModal"),t=document.querySelectorAll(".newTaskButton"),n=document.querySelector(".taskClose"),r=document.querySelector(".taskSubmit");t.forEach((t=>t.addEventListener("click",(()=>{e.showModal()})))),n.addEventListener("click",(()=>{e.close()})),r.addEventListener("click",(t=>{t.preventDefault();const n=document.querySelector("#title").value.trim(),r=document.querySelector("#description").value.trim(),a=document.querySelector("#dueDate").value,o=document.querySelector("#priority").value,i=document.querySelector("#projectSelector").value,s=k.find((e=>e.name===i));if(""===n)return void alert("Please enter a title.");if(isNaN(new Date(a)))return void alert("Please enter a valid date.");e.close();const c=new x(n,r,a,o);s.addTask(c),A.tasks.push(c),G(c),H(k),document.querySelector(".taskForm").reset(),Pe(s.tasks,s)}))}(),function(){const e=localStorage.getItem("projects");return e?JSON.parse(e).map((e=>{const t=new S(e.name);return t.tasks=new S(e.name),t.tasks=e.tasks.map((e=>new x(e.title,e.description,e.dueDate,e.priority))),t})):[new S("My Project")]}().forEach((e=>{k.push(e)})),function(){const e=localStorage.getItem("allTasks");e&&JSON.parse(e).tasks.map((e=>new x(e.title,e.description,e.dueDate,e.priority))).forEach((e=>{A.tasks.push(e)}))}(),function(e){e.tasks.forEach((e=>{G(e)}))}(A),Ee(A.tasks,A),Te(k),document.querySelector("#all").addEventListener("click",(()=>Pe(A.tasks,A))),document.querySelector("#today").addEventListener("click",(()=>Pe(L.tasks,L))),document.querySelector("#week").addEventListener("click",(()=>Pe(O.tasks,O))),document.querySelector("#upcoming").addEventListener("click",(()=>Pe(z.tasks,z))),document.querySelector("#overdue").addEventListener("click",(()=>Pe(Y.tasks,Y)))})();