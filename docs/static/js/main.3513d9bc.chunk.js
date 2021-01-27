(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{113:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(8),o=n.n(c),s=n(9),i=n(35),l=n(10),u=n(12),j=n.n(u),d=n(21),b=n(14),m=n.n(b),p="https://calendarapp-mern.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(p,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(p,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},v="[ui] Open Modal",h="[ui] Close Modal",x="[event] Add New",g="[event] Set Active",y="[event] Set Non Active",N="[event] Update Event",E="[event] Delete Event",w="[event] Loaded Event",k="[event] Purge Event",S="[auth] Finish checking login state",C="[auth] Login",D="[auth] Logout",T=n(5),A=n(18),P=n.n(A),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},L=function(e){return{type:x,payload:e}},_=function(e){return{type:g,payload:e}},G=function(e){return{type:N,payload:e}},M=function(){return{type:E}},R=function(e){return{type:w,payload:e}},U=function(){return function(e){localStorage.setItem("token",""),e(q()),e({type:k})}},J=function(){return{type:S}},V=function(e){return{type:C,payload:e}},q=function(){return{type:D}},B=n(16),H=n(25),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(B.a)(t,2),a=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(T.a)(Object(T.a)({},a),{},Object(H.a)({},t.name,t.value)))};return[a,s,o]},z=(n(76),function(){var e=Object(s.b)(),t=X({lEmail:"",lPassword:""}),n=Object(B.a)(t,2),r=n[0],c=n[1],o=r.lEmail,i=r.lPassword,l=X({rName:"",rEmail:"",rPassword:"",rConfirm:""}),u=Object(B.a)(l,2),b=u[0],p=u[1],O=b.rName,v=b.rEmail,h=b.rPassword,x=b.rConfirm;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=o,a=i,function(){var e=Object(d.a)(j.a.mark((function e(t){var r,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:c.uid,name:c.name}))):(o=c.msg,c.error&&(o=c.error.email?c.error.email.msg:c.error.password.msg),m.a.fire("Error",o,"error"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:o,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"lPassword",value:i,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),h!==x)return m.a.fire("Error","The password must be equal","error");var n,a,r;e((n=O,a=v,r=h,function(){var e=Object(d.a)(j.a.mark((function e(t){var c,o,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name}))):(s=o.msg,o.error&&(s=o.error.email?o.error.email.msg:o.error.password.msg),m.a.fire("Error",s,"error"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",value:O,name:"rName",onChange:p})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",value:v,name:"rEmail",onChange:p})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:h,name:"rPassword",onChange:p})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",value:x,name:"rConfirm",onChange:p})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),F=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-danger",onClick:function(){t(U())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})},K=n(54),Q=(n(77),function(e){var t=e.event;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[" ",t.title," "]}),Object(a.jsxs)("b",{children:[" - ",t.user.name," "]})]})}),W=n(49),Y=n.n(W),Z=n(50),$=n.n(Z),ee=function(){return{type:v}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ne=P()().minutes(0).seconds(0).add(1,"hours"),ae=P()().minutes(0).seconds(0).add(2,"hours"),re=function(){var e=Object(r.useState)(ne.toDate()),t=Object(B.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(ae.toDate()),i=Object(B.a)(o,2),l=i[0],u=i[1],b=Object(r.useState)({title:"",notes:"",start:ne.toDate(),end:ae.toDate()}),p=Object(B.a)(b,2),f=p[0],v=p[1],x=f.notes,g=f.title,y=f.start,N=f.end,E=Object(s.c)((function(e){return e.ui})).modalOpen,w=Object(s.c)((function(e){return e.calendar})).activeEvent,k=Object(s.b)();Object(r.useEffect)((function(){v(w||{title:"",notes:"",start:ne.toDate(),end:ae.toDate()})}),[w]);var S=function(e){var t=e.target;v(Object(T.a)(Object(T.a)({},f),{},Object(H.a)({},t.name,t.value)))},C=function(){k({type:h}),k(_()),v({title:"",notes:"",start:ne.toDate(),end:ae.toDate()})};return Object(a.jsx)("div",{children:Object(a.jsxs)(Y.a,{className:"modal",overlayClassName:"modal-fondo",isOpen:E,onRequestClose:C,style:te,contentLabel:"Example Modal",closeTimeoutMS:200,children:[Object(a.jsxs)("h1",{children:[" ",w?"Update Event":"New Event"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n=P()(y),a=P()(N);return n.isSameOrAfter(a)?m.a.fire("Error","End date must be higher","error"):g.trim().length<2?m.a.fire("Error","The title cannot be empty ","error"):(k(w?(t=f,function(){var e=Object(d.a)(j.a.mark((function e(n){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?n(G(t)):m.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var r,c,o,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,O("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={uid:c,name:o},n(L(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(f)),v({title:"",notes:"",start:ne.toDate(),end:ae.toDate()}),void C())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date and start time"}),Object(a.jsx)($.a,{onChange:function(e){c(e),v(Object(T.a)(Object(T.a)({},f),{},{start:e}))},value:n,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date and end time"}),Object(a.jsx)($.a,{onChange:function(e){u(e),v(Object(T.a)(Object(T.a)({},f),{},{end:e}))},value:l,minDate:n,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Title and notes"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Title of Event",name:"title",autoComplete:"off",value:g,onChange:S}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"A little description"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes...",rows:"5",name:"notes",value:x,onChange:S}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Adicional Information"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Save "})]})]})]})})},ce=function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(_()),e(ee())},children:Object(a.jsx)("i",{className:"fas fa-plus",children:" "})})},oe=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){var t;e(function(){var e=Object(d.a)(j.a.mark((function e(n,a){var r,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().calendar.activeEvent.id,e.prev=1,e.next=4,O("events/".concat(r),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?n(M(t)):m.a.fire("Error",o.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fa fas-trash",children:" "}),Object(a.jsx)("span",{children:" Borrar Evento "})]})},se=Object(K.b)(P.a),ie=function(){var e=Object(r.useState)(localStorage.getItem("lastView")||"month"),t=Object(B.a)(e,2),n=t[0],c=t[1],o=Object(s.b)(),i=Object(s.c)((function(e){return e.calendar})),l=i.events,u=i.activeEvent,b=Object(s.c)((function(e){return e.auth})).uid;Object(r.useEffect)((function(){o(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events",{},"GET");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?(r=I(a.eventos),t(R(r))):m.a.fire("Error","Unespected error, please reload the page","error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(F,{}),Object(a.jsx)(K.a,{localizer:se,events:l,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,t,n,a){return{style:{background:b===e.user._id?"#fa8231":"#778ca3",opacity:.6,display:"block",color:"white"}}},components:{event:Q},onDoubleClickEvent:function(){o(ee())},onSelectEvent:function(e){o({type:g,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},view:n,onSelectSlot:function(){o(_())},selectable:!0}),Object(a.jsx)(ce,{}),u&&Object(a.jsx)(oe,{}),Object(a.jsx)(re,{})]})},le=n(38),ue=function(e){var t=e.isAuthenticated,n=e.component,r=Object(le.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(l.b,Object(T.a)(Object(T.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(T.a)({},e)):Object(a.jsx)(l.a,{to:"/login"})}}))},je=function(e){var t=e.isAuthenticated,n=e.component,r=Object(le.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(l.b,Object(T.a)(Object(T.a)({},r),{},{component:function(e){return t?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(n,Object(T.a)({},e))}}))},de=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew",{});case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:a.uid,name:a.name}))):t(J());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:" Loading ... "}):Object(a.jsx)("div",{children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(je,{exact:!0,path:"/login",component:z,isAuthenticated:!!c}),Object(a.jsx)(ue,{exact:!0,path:"/",component:ie,isAuthenticated:!!c}),Object(a.jsx)(l.a,{to:"/"})]})})})},be=n(22),me={checking:!0},pe=n(55),fe={events:[],activeEvent:null},Oe={modalOpen:!1},ve=Object(be.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!0});case h:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(T.a)(Object(T.a)({},e),{},{events:[].concat(Object(pe.a)(e.events),[t.payload])});case g:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:t.payload});case y:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:null});case N:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case w:return Object(T.a)(Object(T.a)({},e),{},{events:Object(pe.a)(t.payload)});case k:return{events:[],activeEvent:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(T.a)(Object(T.a)({},e),{},{checking:!1},t.payload);case S:return Object(T.a)(Object(T.a)({},e),{},{checking:!1});case D:return{checking:!1};default:return e}}}),he=n(65),xe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ge=Object(be.e)(ve,xe(Object(be.a)(he.a))),ye=function(){return Object(a.jsx)(s.a,{store:ge,children:Object(a.jsx)(de,{})})};n(113);o.a.render(Object(a.jsx)(ye,{}),document.getElementById("root"))},76:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.3513d9bc.chunk.js.map