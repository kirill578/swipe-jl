(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(25),n(11)),u=n(17),l=n(2),s=n(43),p=n(3),f=n.n(p),m=n(5),d=new URLSearchParams(window.location.search).get("host"),h=null!==d?d:"http://34.67.21.85:8000";function x(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}var v=n(12),b=n.n(v),g=function(e){return a.a.createElement(s.a,{position:"relative",width:"80vw",maxWidth:"260px",height:"300px",boxShadow:"0px 0px 60px 0px rgba(0,0,0,0.30)",borderRadius:20,style:{background:"url(".concat(e.imgsrc,")"),backgroundColor:"white",backgroundSize:"cover",backgroundPosition:"center"},display:"flex",flexDirection:"column-reverse"},a.a.createElement(s.a,{p:"10px",style:{background:"white",borderBottomLeftRadius:20,borderBottomRightRadius:20}},a.a.createElement(s.a,{style:{fontSize:"2em",textAlign:"right"}},e.name),a.a.createElement(s.a,{style:{fontSize:"1em",textAlign:"right"}},e.party)))},w=function(e){var t=e.people,n=e.onSelect,r=a.a.useState(0),o=Object(l.a)(r,2),c=o[0],i=o[1];return a.a.createElement(s.a,{display:"flex",flexDirection:"row",paddingTop:"50px"},a.a.createElement(s.a,{flex:1,paddingTop:"70px",style:{WebkitUserSelect:"none",fontSize:"100px",textAlign:"right"}},"\u2728"),a.a.createElement(s.a,{flex:3},t&&t.slice(c,c+2).reverse().map((function(e){return a.a.createElement(s.a,{key:e.id,position:"absolute",left:"50%",style:{WebkitUserSelect:"none",transform:"translateX(-50%)"}},a.a.createElement(b.a,{key:e.id,preventSwipe:["up","down"],onSwipe:function(t){return n(e,"right"===t)},onCardLeftScreen:function(){i((function(e){return e+1}))}},a.a.createElement(g,e)))}))),a.a.createElement(s.a,{flex:1,paddingTop:"70px",style:{WebkitUserSelect:"none",fontSize:"100px",textAlign:"left"}},"\ud83e\udd8e"))};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.people;return a.a.createElement(s.a,{marginTop:"250px",display:"flex",flexDirection:"column",alignItems:"center"},t.map((function(e){return a.a.createElement(s.a,{key:e.id,display:"flex",flexDirection:"row",marginTop:"5px"},a.a.createElement(s.a,null,e.y," = \ud83e\udd8e"),a.a.createElement(s.a,{width:"20px"}),a.a.createElement(s.a,null,e.n," = \u2728"),a.a.createElement(s.a,{width:"20px"}),a.a.createElement(s.a,null,e.name))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(){var e=function(){var e=a.a.useState(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=a.a.useState(!1),c=Object(l.a)(o,2),i=c[0],u=c[1],s=a.a.useState(void 0),p=Object(l.a)(s,2),d=p[0],v=p[1];return a.a.useEffect((function(){(function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,fetch(h+"/api/v1/lj/");case 4:return t=e.sent,e.t0=v,e.t1=x,e.next=9,t.json();case 9:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3),r(!1),e.next=18;break;case 15:e.prev=15,e.t4=e.catch(0),u(!0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.useMemo((function(){return{people:d,isLoading:n,isError:i}}),[d,n,i])}(),t=e.people,n=e.isError,r=e.isLoading,o={voteYes:function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"/api/v1/lj/vote_y/"+t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),voteNo:function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"/api/v1/lj/vote_n/"+t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},c=o.voteYes,i=o.voteNo,p=a.a.useState([]),d=Object(l.a)(p,2),v=d[0],b=d[1];return a.a.createElement(s.a,{position:"relative",width:"100%",height:"100%",p:"10px"},r&&a.a.createElement(s.a,null,"Loading"),n&&a.a.createElement(s.a,null,"error"),t&&a.a.createElement(w,{people:t,onSelect:function(e,t){(t?c:i)(e.id).then((function(e){b((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))})),b((function(n){return[E({},e,{y:e.y+(t?1:0),n:e.n+(t?0:1)})].concat(Object(u.a)(n))}))}}),a.a.createElement(j,{people:v}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ff4958e5.chunk.js.map