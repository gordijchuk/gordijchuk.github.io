webpackJsonp([6],{0:function(t,e,n){t.exports=n("NHnr")},"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/5sW"),a={name:"App",data:function(){return{}},components:{"c-toolbar":function(){return n.e(1).then(n.bind(null,"djO7"))},"c-alert":function(){return n.e(4).then(n.bind(null,"yL53"))}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("c-toolbar"),n("v-content",[n("c-alert"),n("router-view")],1)],1)},o=[],u=n("XyMi"),s=!1,c=null,d=null,l=null,m=Object(u["a"])(a,r,o,s,c,d,l),f=m.exports,p=n("Sazm"),h=n.n(p),g=n("Biqn"),S=n.n(g),v=n("/ocq"),k=[{path:"/",component:"Home",meta:{requiresAuth:!0}},{path:"/signin",component:"SignIn",meta:{isAnonymous:!0}},{path:"/signup",component:"SignUp",meta:{isAnonymous:!0}},{path:"/*",redirect:"/"}],E=k.map(function(t){return S()({},t,{component:function(){return n("Opzk")("./".concat(t.component,".vue"))}})});i["a"].use(v["a"]);var T=new v["a"]({mode:"history",routes:E});T.beforeEach(function(t,e,n){var i=t.matched.some(function(t){return t.meta.requiresAuth}),a=t.matched.some(function(t){return t.meta.isAnonymous}),r=h.a.auth().currentUser;i&&!r?n("/signin"):a&&r?n("/"):n()});var A,b=T,w=n("NYxO"),D={user:null,hasError:!1,isLoading:!1,isGlobalLoading:!1,alert:{text:null,timeout:5e3,multiline:!1},tasks:[]},O={user:function(t){return t.user},isLoading:function(t){return t.isLoading},isGlobalLoading:function(t){return t.isGlobalLoading},hasError:function(t){return t.hasError},isAuthenticated:function(t){return null!==t.user&&void 0!==t.user},alert:function(t){return t.alert},getTasks:function(t){return t.tasks}},L=n("fKPv"),I=n.n(L),y=(n("WpTh"),n("U6qc"),"SET_USER"),_="SET_ERROR",x="SET_LOADING",R="SET_GLOBAL_LOADING",U="SET_TASKS",j="CREATE_NEW_TASK",q="DELETE_TASK",z="UPDATE_TASK",N="SELECTED_TASK",G="SHOW_ALERT",K="CLOSE_ALERT",C=(A={},I()(A,y,function(t,e){t.user=e}),I()(A,_,function(t,e){t.hasError=e}),I()(A,x,function(t,e){t.isLoading=e}),I()(A,R,function(t,e){t.isGlobalLoading=e}),I()(A,G,function(t,e){t.alert.text=e.text,t.alert.multiline=e.text.length>50,e.multiline&&(t.alert.multiline=e.multiline),e.timeout&&(t.alert.timeout=e.timeout),t.alert.visible=!0}),I()(A,K,function(t){t.alert.visible=!1,t.alert.multiline=!1,t.alert.timeout=5e3,t.alert.text=null,t.hasError=!1}),I()(A,U,function(t,e){t.tasks=e}),I()(A,j,function(t,e){t.tasks.unshift(e)}),I()(A,q,function(t,e){var n=t.tasks.findIndex(function(t){return t.id==e.id});t.tasks.splice(n,1)}),I()(A,z,function(t,e){var n=t.tasks.find(function(t){return t.id==e.id});n.isDone=!e.isDone}),I()(A,N,function(t,e){for(var n=t.tasks.find(function(t){return t.id==e.id}),i=0;i<t.tasks.length;i++)t.tasks[i].id===n.id?1==n.isSelected?n.isSelected=!1:n.isSelected=!0:t.tasks[i].isSelected=!1}),A),P=(n("uDYd"),{apiKey:"AIzaSyBA13jICSj9RbZYy4VOkhtMR-SNE0bpuVA",authDomain:"tempus-42b62.firebaseapp.com",databaseURL:"https://tempus-42b62.firebaseio.com",projectId:"tempus-42b62",storageBucket:"tempus-42b62.appspot.com",messagingSenderId:"680065043136"}),W=h.a.initializeApp(P),H=W.database();function B(t,e){switch(t){case"auth/wrong-password":return"Неправильний пароль.";case"auth/weak-password":return"Пароль занадто слабкий.";case"auth/user-not-found":return"Електронна адреса не існує або вже зайнята.";case"auth/too-many-requests":return"Доступ до облікового запису заблокований через незвичну активність. Спробуйте ще раз пізніше.";case"auth/email-already-in-use":return"Електронна адреса вже зайнята.";default:return e}}var M={userSignUp:function(t,e){var n=t.commit;n(x,!0),h.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){n(y,{email:t.email,uid:t.uid}),n(x,!1),b.push("/")}).catch(function(t){n(_,!0),n(G,{text:B(t.code,t.message)}),n(x,!1)})},userSignIn:function(t,e){var n=t.commit;n(x,!0),h.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){n(y,{email:t.email,uid:t.uid}),n(x,!1),b.push("/")}).catch(function(t){n(_,!0),n(G,{text:B(t.code,t.message)}),n(x,!1)})},autoSignIn:function(t,e){var n=t.commit;n(y,{email:e.email,uid:e.uid})},userSignOut:function(t){var e=t.commit;h.a.auth().signOut().then(function(){e(y,null),b.push("/signin")})},closeAlert:function(t){var e=t.commit;e(K)},fetchTasks:function(t){var e=t.commit,n=t.state;e(R,!0),H.ref("/tasks/".concat(n.user.uid)).once("value").then(function(t){var n=[],i=t.val();for(var a in i)n.push({id:a,title:i[a].title,description:i[a].description,createTime:i[a].createTime,deadline:i[a].deadline,isDone:i[a].isDone,isSelected:!1});var r=n.sort(function(t,e){return new Date(e.createTime)-new Date(t.createTime)});e(U,r),e(R,!1)}).catch(function(t){e(_,!0),e(G,{text:B(t.code,t.message)}),e(R,!0)})},createNewTask:function(t,e){var n=t.commit,i=t.state,a={};a=e.description&&e.deadline?{title:e.title,description:e.description,createTime:(new Date).toISOString(),deadline:e.deadline.toISOString(),isDone:!1}:e.description?{title:e.title,description:e.description||null,createTime:(new Date).toISOString(),isDone:!1}:e.deadline?{title:e.title,createTime:(new Date).toISOString(),deadline:e.deadline.toISOString(),isDone:!1}:{title:e.title,createTime:(new Date).toISOString(),isDone:!1},n(x,!0),H.ref("/tasks/".concat(i.user.uid)).push(a).then(function(t){var e=t.key;n(j,S()({},a,{id:e,isSelected:!1})),n(x,!1)}).catch(function(t){n(_,!0),n(G,{text:B(t.code,t.message)}),n(x,!1)})},deleteTask:function(t,e){var n=t.commit,i=t.state;H.ref("/tasks/".concat(i.user.uid,"/").concat(e.id)).remove().then(function(){n(q,e)}).catch(function(t){n(_,!0),n(G,{text:B(t.code,t.message)})})},checkTask:function(t,e){var n=t.commit,i=t.state,a={};a.isDone=!e.isDone,n(x,!0),H.ref("/tasks/".concat(i.user.uid,"/").concat(e.id)).update(a).then(function(){n(z,e),n(x,!1)}).catch(function(t){n(_,!0),n(G,{text:B(t.code,t.message)}),n(x,!1)})},selectedTask:function(t,e){var n=t.commit;n(N,e)}};i["a"].use(w["a"]);var V=new w["a"].Store({state:D,getters:O,mutations:C,actions:M}),Y=V,$=n("3EgV"),J=n.n($),X=(n("7zck"),function(t){var e=new Date(t),n={year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",weekday:"short"};return e.toLocaleString("uk-UA",n)});i["a"].use(J.a),i["a"].config.productionTip=!1,i["a"].filter("date",X);var Z=h.a.auth().onAuthStateChanged(function(t){new i["a"]({router:b,store:Y,render:function(t){return t(f)},created:function(){t&&Y.dispatch("autoSignIn",t)}}).$mount("#app"),Z()})},Opzk:function(t,e,n){var i={"./Home.vue":["j7e0",0],"./SignIn.vue":["efiq",3],"./SignUp.vue":["2t7q",2]};function a(t){var e=i[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}a.keys=function(){return Object.keys(i)},a.id="Opzk",t.exports=a}},[0]);
//# sourceMappingURL=app.f697bd10.js.map