(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),i=(a(21),a(9)),l=a.n(i),s=a(12),u=a(7),m=(a(23),a(24),a(5)),d=a.n(m),p=(a(25),a(29),a(32),a(14)),f=a(15);d.a.initializeApp({apiKey:"AIzaSyD1q2WvZ1JRGqCyjKa4LylpzMfhyZuCDWU",authDomain:"showintel-8dcf8.firebaseapp.com",databaseURL:"https://showintel-8dcf8.firebaseio.com",projectId:"showintel-8dcf8",storageBucket:"showintel-8dcf8.appspot.com",messagingSenderId:"58581328267",appId:"1:58581328267:web:49b2e8b62825a148648f8e",measurementId:"G-214P1FQBKT"});var h=d.a.auth(),b=d.a.firestore();function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;h.signInWithPopup(e)}},"Sign in with Google"),r.a.createElement("p",null,"Do not violate the community guidelines or you will be banned for life!"))}function g(){return h.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return h.signOut()}},"Sign Out")}function v(){var e=Object(n.useRef)(),t=b.collection("messages"),a=t.orderBy("createdAt").limit(25),o=Object(f.a)(a,{idField:"id"}),c=Object(u.a)(o,1)[0],i=Object(n.useState)(""),m=Object(u.a)(i,2),p=m[0],E=m[1],g=function(){var a=Object(s.a)(l.a.mark(function a(n){var r,o,c;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=h.currentUser,o=r.uid,c=r.photoURL,a.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:o,photoURL:c});case 4:E(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,c&&c.map(function(e){return r.a.createElement(w,{key:e.id,message:e})}),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:g,className:"chatInput"},r.a.createElement("div",{className:"inputContainer"},r.a.createElement("input",{value:p,onChange:function(e){return E(e.target.value)},placeholder:"Say something..."}),r.a.createElement("button",{type:"submit",disabled:!p},"Go"))))}function w(e){var t=e.message,a=t.text,n=t.uid,o=t.photoURL,c=n===h.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(c)},r.a.createElement("img",{alt:"avatar",src:o||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,a)))}var y=function(){var e=Object(p.a)(h),t=Object(u.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Sandbox Env"),r.a.createElement(g,null)),r.a.createElement("section",{className:"body"},r.a.createElement("section",{className:"main"},r.a.createElement("p",null,"Main Body")),r.a.createElement("section",{className:"rail"},t?r.a.createElement(v,null):r.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[16,1,2]]]);
//# sourceMappingURL=main.e99a4f44.chunk.js.map