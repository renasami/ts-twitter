(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},41:function(t,e,n){},61:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(30),s=n.n(r),u=(n(38),n(39),n(2)),o=n(13),i=n(10),j=n(8),h=n.n(j),d=n(12),l=(n(41),n(9)),b=n.n(l),O=n(33),p={userId:"fas"},x=Object(O.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return t})),f=n(32),m=n(1),v=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],r=[],s=[],u=function(){var t=Object(d.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=x.getState().userId,t.next=3,b.a.post("http://127.0.0.1:5000/get_tweets/?userId=".concat(e)).then((function(t){t.data.forEach((function(t){return r.push(t)}))}));case 3:console.log(r),s=r.map((function(t,e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("li",{className:"list",children:t},e)})})),a(Object(f.a)(s)),console.log(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:u,children:"show bad tweet"}),Object(m.jsx)("ul",{children:n})]})},g=(n(61),function(){var t=x.getState().userId,e=Object(c.useState)(),n=Object(i.a)(e,2),a=n[0],r=n[1],s=Object(c.useState)(),u=Object(i.a)(s,2),o=u[0],j=u[1],l=Object(c.useState)(),O=Object(i.a)(l,2),p=O[0],f=O[1];return Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("http://127.0.0.1:5000/all/?userId=".concat(t)).then((function(t){return j(t.data)}));case 2:return e.next=4,b.a.post("http://127.0.0.1:5000/test/?userId=".concat(t)).then((function(t){return r(t.data)}));case 4:f(a/o*100);case 5:case"end":return e.stop()}}),e)})))(),Object(m.jsxs)("div",{className:"results",children:[Object(m.jsx)("div",{className:"fas",children:Object(m.jsx)("div",{className:"child",children:Object(m.jsx)(v,{})})}),Object(m.jsx)("div",{className:"fas",children:Object(m.jsxs)("h2",{className:"child",children:["There are ",Object(m.jsx)("span",{children:a}),"  tweets that contain bad words"]})}),Object(m.jsx)("div",{className:"fas",children:Object(m.jsxs)("h3",{className:"child",children:[Object(m.jsxs)("span",{children:[p,"%"]})," tweets have bad words"]})})]})});b.a.get("http://127.0.0.1:5000/test").then((function(t){return console.log(t.data)})),b.a.post("http://127.0.0.1:5000/users/?user_id=Fuck").then((function(t){return console.log(t.data)}));var w=function(){var t=Object(u.e)(),e=function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=5;break}return O("you must type your user id"),e.abrupt("return");case 5:if("@"==r[0]){e.next=8;break}return O("you must start with @"),e.abrupt("return");case 8:return O(""),console.log(r),e.next=12,b.a.post("http://127.0.0.1:5000/users/?user_id=".concat(r)).then((function(t){return O(t.data.user_id)}));case 12:x.getState().userId=r,console.log(x.getState()),t.push("/Result");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),l=j[0],O=j[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("h1",{children:"Enter Your Twitter account id"}),Object(m.jsx)("p",{children:l}),Object(m.jsx)("input",{type:"text",value:r,onChange:function(t){s((function(){return t.target.value}))}}),Object(m.jsx)("button",{onClick:e,className:"good",children:"submit"})]})})},k=function(){return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/Home",component:w}),Object(m.jsx)(u.a,{exact:!0,path:"/Result",component:g})]})},N=function(){var t=Object(u.e)();return Object(m.jsxs)("div",{className:"App-header",children:[Object(m.jsx)("h1",{children:" Are your tweets okay?"}),Object(m.jsx)("button",{onClick:function(){t.push("/Home")},children:"START HERE"})]})};var S=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",component:N}),Object(m.jsx)(u.a,{exact:!0,path:"/Home",component:k})]})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(S,{})}),Object(m.jsx)(u.a,{path:"/Home",children:Object(m.jsx)(k,{})})]})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.357e791c.chunk.js.map