(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n.n(o),c=(n(39),n(26)),l=n(22),p=n(8),u=n(59),s=n(11),f=n.n(s),d=n(20),m=new URLSearchParams(window.location.search).get("host"),x=null!==m?m:"http://34.67.21.85:8000";function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}var g=n(60),b=n(27),w=n.n(b),v=window.location.host.includes("poop")?"\ud83d\udca9":"\ud83d\udc38",y=window.location.host.includes("poop")?"\u2764\ufe0f":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb2",E=function(e){return a.a.createElement(u.a,{position:"relative",width:"90vw",maxWidth:"460px",height:"500px",boxShadow:"0px 0px 60px 0px rgba(0,0,0,0.30)",borderRadius:20,style:{background:"url(".concat(e.imgsrc,")"),backgroundColor:"white",backgroundSize:"cover",backgroundPosition:"center"},display:"flex",flexDirection:"column-reverse"},a.a.createElement(u.a,{p:"10px",style:{color:"white",background:"rgba(0,0,0, 0.5)",borderBottomLeftRadius:20,borderBottomRightRadius:20}},a.a.createElement(u.a,{style:{fontSize:"2em",textAlign:"right"}},e.name),a.a.createElement(u.a,{style:{fontSize:"1em",textAlign:"right"}},e.party)))},S=function(e){var t=e.people,n=e.onSelect,r=a.a.useState(0),o=Object(p.a)(r,2),i=o[0],c=o[1],l=a.a.useMemo((function(){return Array(t.length).fill(0).map((function(e){return a.a.createRef()}))}),[t.length]);return a.a.createElement(u.a,{display:"flex",flexDirection:"column",paddingTop:"20px"},a.a.createElement(u.a,{display:"flex",flexDirection:"row"},a.a.createElement(u.a,{height:"320px",flex:1,paddingTop:"70px",style:{WebkitUserSelect:"none",fontSize:"100px",textAlign:"right"}},y),a.a.createElement(u.a,{flex:3},t&&t.slice(i,i+2).reverse().map((function(e,t){return a.a.createElement(u.a,{key:e.id,position:"absolute",left:"50%",style:{WebkitUserSelect:"none",transform:"translateX(-50%)"}},a.a.createElement(w.a,{ref:l[i+1-t],flickOnSwipe:!0,key:e.id,preventSwipe:["up","down"],onCardLeftScreen:function(t){n(e,"right"===t),c((function(e){return e+1}))}},a.a.createElement(E,e)))}))),a.a.createElement(u.a,{flex:1,paddingTop:"70px",style:{WebkitUserSelect:"none",fontSize:"100px",textAlign:"left"}},v)),a.a.createElement(u.a,{alignSelf:"stretch",display:"flex",flexDirection:"row",paddingTop:"120px",marginX:"10px",justifyContent:"center"},a.a.createElement(g.a,{style:{flex:1,background:"#5b9bbd",maxWidth:100,fontSize:40},onClick:function(){return l[i].current.swipe("left")}},y),a.a.createElement(u.a,{width:"25px"}),a.a.createElement(g.a,{style:{flex:1,background:"#5b9bbd",maxWidth:100,fontSize:40},onClick:function(){window.location.href="https://wa.me/?text="+encodeURIComponent(window.location.href)}},a.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",width:"35px",height:"35px"})),a.a.createElement(u.a,{width:"25px"}),a.a.createElement(g.a,{style:{flex:1,background:"#5b9bbd",maxWidth:100,fontSize:40},onClick:function(){return l[i].current.swipe("right")}},v)))},k=n(61);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.people;return a.a.createElement(u.a,{marginTop:"5px",display:"flex",flexDirection:"column",alignItems:"center"},t.map((function(e){var t=e.n+e.y===0?0:e.y/(e.n+e.y);return a.a.createElement(u.a,{key:e.id,display:"flex",flexDirection:"row",marginTop:"5px"},a.a.createElement(u.a,{marginTop:"10px"},y),a.a.createElement(u.a,{width:"4px"}),a.a.createElement(u.a,{key:e.id,display:"flex",flexDirection:"column",marginTop:"5px"},a.a.createElement(u.a,{textAlign:"center"},e.name),a.a.createElement(u.a,{width:"200px",height:"15px",marginTop:"3px"},a.a.createElement(k.a,{variant:"determinate",value:100*t}))),a.a.createElement(u.a,{width:"4px"}),a.a.createElement(u.a,{marginTop:"10px"},v))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement((function(){var e=function(){var e=a.a.useState(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],o=a.a.useState(!1),i=Object(p.a)(o,2),c=i[0],l=i[1],u=a.a.useState(void 0),s=Object(p.a)(u,2),m=s[0],g=s[1];return a.a.useEffect((function(){(function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,fetch(x+"/api/v1/lj/");case 4:return t=e.sent,e.t0=g,e.t1=h,e.next=9,t.json();case 9:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3),r(!1),e.next=18;break;case 15:e.prev=15,e.t4=e.catch(0),l(!0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.useMemo((function(){return{people:m,isLoading:n,isError:c}}),[m,n,c])}(),t=e.people,n=e.isError,r=e.isLoading,o={voteYes:function(){var e=Object(d.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"/api/v1/lj/vote_y/"+t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),voteNo:function(){var e=Object(d.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"/api/v1/lj/vote_n/"+t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},i=o.voteYes,c=o.voteNo,s=a.a.useState([]),m=Object(p.a)(s,2),g=m[0],b=m[1],w=a.a.useState(void 0),v=Object(p.a)(w,2),y=v[0],E=v[1];a.a.useEffect((function(){var e=JSON.parse(window.localStorage.votedIds||"[]");t&&(E(t.filter((function(t){var n=t.id;return!e.includes(n)}))),b(t.filter((function(t){var n=t.id;return e.includes(n)}))))}),[t]);return a.a.createElement(u.a,{position:"absolute",width:"100%",minHeight:"100%",style:{background:"#dbe9f0"},borderTop:"10px solid #5b9bbd"},a.a.createElement(u.a,{width:"100%",height:"100%",style:{position:"absolute",backgroundSize:"80px 100px",backgroundRepeat:"repeat",opacity:.1}}),a.a.createElement(u.a,{display:"flex",flexDirection:"column"},r&&a.a.createElement(u.a,null,"Loading"),n&&a.a.createElement(u.a,null,"error"),y&&a.a.createElement(S,{people:y,onSelect:function(e,t){(t?i:c)(e.id).then((function(t){b((function(e){return e.map((function(e){return e.id===t.id?t:e}))})),window.localStorage.votedIds=JSON.stringify([e.id].concat(Object(l.a)(JSON.parse(window.localStorage.votedIds||"[]"))))})),b((function(n){return[j({},e,{y:e.y+(t?1:0),n:e.n+(t?0:1)})].concat(Object(l.a)(n))}))}}),a.a.createElement(D,{people:g})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.232d7276.chunk.js.map