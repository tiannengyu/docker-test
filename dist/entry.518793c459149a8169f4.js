(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){t.exports=n(4)(7)},function(t,e,n){t.exports=n(4)(0)},,,function(t,e){t.exports=vendor_library},,,,,,function(t,e,n){t.exports=n(4)(4)},,,,,function(t,e,n){t.exports=n(4)(18)},,,,,function(t,e,n){t.exports=n(4)(8)},,,,function(t,e,n){t.exports=n(4)(26)},,function(t,e,n){"use strict";function a(){return new Promise((function(t){setTimeout((function(){return t({title:"This is title.",content:"This is content.",author:"啊能.",url:"https://www.baidu.com"})}),2e3)}))}n.r(e);var o=n(1),r=n.n(o),c=n(15),i=n.n(c),l=n(28),u=n(16),s=n.n(u),p=n(30),m=n(29),f=n(14),h=n.n(f),d=n(17),w=n.n(d),E=n(5),v=n.n(E),x=n(6),_=n.n(x),k=n(7),y=n.n(k),T=n(8),g=n.n(T),D=n(13),A=n.n(D),C=n(9),P=n.n(C),b=n(18),O=n.n(b),S=n(27),J={path:"/",exact:!0,component:function(t){function e(t){var n;return v()(this,e),n=y()(this,g()(e).call(this,t)),O()(A()(n),"fetchData",w()(h.a.mark((function t(){var e,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:7779/users",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",token:"anenglaile"},body:JSON.stringify({name:"ceido",age:100})});case 2:return e=t.sent,t.next=5,e.text();case 5:a=t.sent,n.setState({data:a});case 7:case"end":return t.stop()}}),t)})))),n.state={data:null},n}return P()(e,t),_()(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page Home."),r.a.createElement("div",null,this.state.data),r.a.createElement(S.a,{to:"/post"},"Link to Post"))}},{key:"componentDidMount",value:function(){this.fetchData()}}]),e}(o.Component)},L=n(19),R=n.n(L),U=[J,{path:"/post",exact:!0,component:function(t){function e(t){var n;return v()(this,e),n=y()(this,g()(e).call(this,t)),t.staticContext&&t.staticContext.data?n.state={post:t.staticContext.data}:n.state={post:{}},n}return P()(e,t),_()(e,[{key:"componentDidMount",value:function(){var t=this;window.__ROUTE_DATA__?(this.setState({post:window.__ROUTE_DATA__}),delete window.__ROUTE_DATA__):a().then((function(e){t.setState({post:e})})),console.log("I get called from .js!");var e=R.a.concat([1],2,[3],[[4]]);console.log(e)}},{key:"render",value:function(){var t=this.state.post;return r.a.createElement("div",null,r.a.createElement("h1",null,"Page Post"),r.a.createElement(S.a,{to:"/"},"Link to Home"),r.a.createElement("h2",null,t.title),r.a.createElement("p",null,"By: ",t.author),r.a.createElement("p",null,"Link: ",r.a.createElement("a",{href:t.url},t.url)))}}]),e}(o.Component),fetchData:a}];i.a.render(r.a.createElement(l.a,null,r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,U.map((function(t){return r.a.createElement(m.a,s()({},t,{key:t.component}))}))))}),null)),document.getElementById("app"))}],[[26,1,2]]]);
//# sourceMappingURL=entry.518793c459149a8169f4.js.map