(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),i=(n(11),n(1)),l=function(e){var t=e.selectedGame,n=e.handleGameSelect,a=e.startNewGame;return 0===t?c.a.createElement("div",{className:"select-game select-open"},c.a.createElement("h1",{className:"header-title"},"Welcome to Memory Cards!"),c.a.createElement("h2",null,"Select game mode:"),c.a.createElement("button",{onClick:function(){return n(6)}},"4 X 3"),c.a.createElement("button",{onClick:function(){return n(8)}},"4 X 4"),c.a.createElement("button",{onClick:function(){return n(12)}},"6 X 4")):c.a.createElement("div",{className:"select-game select-closed"},c.a.createElement("button",{onClick:a},"New game"))},u=n(4),s=function(e){var t=e.id,n=e.url,a=e.cardState,r=e.handleCardClick;return c.a.createElement("div",{id:t,className:"flip-card tile tile-".concat(t," ").concat(a),onClick:r},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-question"}))),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("img",{src:"".concat(n),alt:"tile"})))},m=function(e){var t=e.selectedGame,n=Object(a.useState)([]),r=Object(i.a)(n,2),o=r[0],l=r[1],m=Object(a.useState)([]),d=Object(i.a)(m,2),f=d[0],h=d[1],p=Object(a.useState)(!1),v=Object(i.a)(p,2),E=v[0],g=v[1];Object(a.useEffect)(function(){var e=w("https://picsum.photos/200/200?random=",t);l(b(e))},[t]);var b=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},w=function(e,t){for(var n=[],a=0;a<t;a++)n.push("".concat(e).concat(a+1)),n.push("".concat(e).concat(a+1));return n};Object(a.useEffect)(function(){var e=o.map(function(e,t){return{id:t,url:e,state:""}});h(e)},[o]),Object(a.useEffect)(function(){var e=f.filter(function(e){return"flipped"===e.state});2===e.length&&(e[0].url===e[1].url?setTimeout(function(){e[0].state="found",e[1].state="found",h(f.map(function(t){return t.id===e[0].id?e[0]:t.id===e[1].id?e[1]:t}))},1e3):setTimeout(function(){h(f.map(function(t){return e.find(function(e){return e.id===t.id})?Object(u.a)({},t,{state:""}):t}))},2e3))},[f]),Object(a.useEffect)(function(){var e=f.filter(function(e){return"found"===e.state});f.length>0&&f.length===e.length?g(!0):g(!1)},[f]);var N=function(e){console.log(e.currentTarget.id);var t=e.currentTarget,n=f.find(function(e){return e.id===Number(t.id)});""===n.state&&f.filter(function(e){return"flipped"===e.state}).length<2&&(n.state="flipped",h(f.map(function(e){return e.id===n.id?n:e})))},j=E?"finished":"";return c.a.createElement("div",{className:"game game-size-".concat(f.length," ").concat(j)},f.map(function(e){return c.a.createElement(s,{key:e.id,id:e.id,url:e.url,cardState:e.state,handleCardClick:N})}),c.a.createElement("div",{className:"congrat"},c.a.createElement("h1",null,"Congratulations!")))},d=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"game-container"},c.a.createElement(l,{selectedGame:n,handleGameSelect:function(e){r(Number(e))},startNewGame:function(){r(0)}}),c.a.createElement(m,{selectedGame:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.f1ccdd21.chunk.js.map