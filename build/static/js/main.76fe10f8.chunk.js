(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=(n(11),n(1)),s=n.n(u),l=n(2),i=n(5),m=(n(13),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=7;break}return console.log("Make sure you have metamask!"),e.abrupt("return");case 7:console.log("We have the ethereum object",n);case 8:return e.next=10,n.request({method:"eth_accounts"});case 10:0!==(a=e.sent).length?(r=a[0],console.log("Found an authorized account:",r),c(r)):console.log("No authorized account found"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=5;break}return alert("Get MetaMask!"),e.abrupt("return");case 5:return e.next=7,n.request({method:"eth_requestAccounts"});case 7:a=e.sent,console.log("Connected",a[0]),c(a[0]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"dataContainer"},r.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),r.a.createElement("div",{className:"bio"},"I am Suyash Satav. Connect your Ethereum wallet and wave at me!"),r.a.createElement("button",{className:"waveButton",onClick:null},"Wave at Me"),!n&&r.a.createElement("button",{className:"waveButton",onClick:u},"Connect Wallet")))});o.a.render(r.a.createElement(m,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.76fe10f8.chunk.js.map