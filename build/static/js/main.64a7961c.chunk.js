(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),o=(a(11),a(1)),l=function(e){var t=e.selectedGame,a=e.handleGameSelect,n=e.startNewGame;return 0===t?c.a.createElement("div",{className:"select-game select-open"},c.a.createElement("h1",{className:"header-title"},"Welcome to Memory Cards!"),c.a.createElement("h2",null,"Select game mode:"),c.a.createElement("button",{onClick:function(){return a(6)}},"4 X 3"),c.a.createElement("button",{onClick:function(){return a(8)}},"4 X 4"),c.a.createElement("button",{onClick:function(){return a(12)}},"6 X 4")):c.a.createElement("div",{className:"select-game select-closed"},c.a.createElement("button",{onClick:n},"New game"))},u=a(4),s=function(e){for(var t=new Set;t.size<e;){var a=Math.floor(999*Math.random()+1),n="".concat("https://picsum.photos/id/").concat(a,"/200/200");t.add(n)}return(t=Array.from(t).map(function(e){return[e,e]})).flat()},m=function(e){var t=e.id,a=e.url,n=e.cardState,r=e.handleCardClick;return c.a.createElement("div",{id:t,className:"flip-card tile tile-".concat(t," ").concat(n),onClick:r},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-question"}))),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("img",{src:"".concat(a),alt:"tile"})))},d=function(e){var t=e.selectedGame,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],l=r[1],d=Object(n.useState)([]),f=Object(o.a)(d,2),h=f[0],v=f[1],E=Object(n.useState)(!1),p=Object(o.a)(E,2),g=p[0],b=p[1];Object(n.useEffect)(function(){var e=s(t);l(w(e))},[t]);var w=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e};Object(n.useEffect)(function(){var e=i.map(function(e,t){return{id:t,url:e,state:""}});v(e)},[i]),Object(n.useEffect)(function(){var e=h.filter(function(e){return"flipped"===e.state});2===e.length&&(e[0].url===e[1].url?setTimeout(function(){e[0].state="found",e[1].state="found",v(h.map(function(t){return t.id===e[0].id?e[0]:t.id===e[1].id?e[1]:t}))},1e3):setTimeout(function(){v(h.map(function(t){return e.find(function(e){return e.id===t.id})?Object(u.a)({},t,{state:""}):t}))},2e3))},[h]),Object(n.useEffect)(function(){var e=h.filter(function(e){return"found"===e.state});h.length>0&&h.length===e.length?b(!0):b(!1)},[h]);var N=function(e){var t=e.currentTarget,a=h.find(function(e){return e.id===Number(t.id)});""===a.state&&h.filter(function(e){return"flipped"===e.state}).length<2&&(a.state="flipped",v(h.map(function(e){return e.id===a.id?a:e})))},j=g?"finished":"";return c.a.createElement("div",{className:"game game-size-".concat(h.length," ").concat(j)},h.map(function(e){return c.a.createElement(m,{key:e.id,id:e.id,url:e.url,cardState:e.state,handleCardClick:N})}),c.a.createElement("div",{className:"congrat"},c.a.createElement("div",{className:"congrat-text-container"},c.a.createElement("h1",null,"Congratulations!"))))},f=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"game-container"},c.a.createElement(l,{selectedGame:a,handleGameSelect:function(e){r(Number(e))},startNewGame:function(){r(0)}}),c.a.createElement(d,{selectedGame:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,a){e.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.64a7961c.chunk.js.map