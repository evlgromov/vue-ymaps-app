(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d6d35":"1e3f945b","chunk-71367435":"fae23bdd"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-71367435":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0d6d35":"31d6cfe0","chunk-71367435":"fb053b2d"}[t]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===a))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===n||d===a)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],m.parentNode.removeChild(m),r(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(m);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var m=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},4797:function(t,e,r){"use strict";r("6d9a")},"56d7":function(t,e,r){"use strict";r.r(e);r("d3b7"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o,a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-nav",[t.loggedIn?t._e():r("b-nav-item",{attrs:{to:"/login"}},[t._v("Вход")]),t.loggedIn?t._e():r("b-nav-item",{attrs:{to:"/register"}},[t._v("Регистрация")]),t.loggedIn?r("b-nav-item",{attrs:{to:"/login"},on:{click:t.logout}},[t._v("Выйти")]):t._e()],1)],1),r("router-view")],1)},s=[],c={name:"app",computed:{loggedIn:function(){return this.$store.getters.loggedIn}},methods:{logout:function(){this.$store.dispatch("destroyToken"),this.$router.push("/login")}}},u=c,d=(r("034f"),r("2877")),l=Object(d["a"])(u,i,s,!1,null,null,null),m=l.exports,f=(r("45fc"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"ymaps"},[r("div",{staticClass:"ymaps__controls"},[t.edit?r("LocationEdit"):r("LocationAdd"),r("LocationList")],1),r("LocationMap")],1)])},h=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group",{staticClass:"mt-4"},[r("h2",{staticClass:"mb-3"},[t._v("Список маркеров")]),t._l(t.markers,(function(t){return r("LocationItem",{attrs:{marker:t}})}))],2)},k=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group-item",{staticClass:"row",attrs:{"data-coords":t.marker.coords}},[r("div",{staticClass:"marker",on:{click:function(e){return t.showMarker(t.marker)}}},[t._v(" "+t._s(t.marker.name)+" "),r("div",{staticClass:"marker__group"},[r("span",{staticClass:"marker__coords"},[t._v(t._s(t.marker.coords[0])+", "+t._s(t.marker.coords[1]))])])]),r("div",[r("b-button",{attrs:{variant:"danger"},on:{click:t.deleteMarker}},[t._v("×")]),r("b-button",{staticClass:"btn mr-1",attrs:{variant:"success"},on:{click:function(e){return t.toEdit(t.marker)}}},[t._v("✎")])],1)])},b=[],y=(r("b0c0"),{props:{marker:{type:Object}},methods:{deleteMarker:function(){var t=this;this.$store.dispatch("marker/deleteMarker",{id:this.marker._id}).then((function(e){return t.makeToast(!1,e.message)}))},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;this.$bvToast.toast("".concat(e),{title:"Уведомление",autoHideDelay:5e3,appendToast:t})},showMarker:function(t){this.$eventBus.$emit("go-to-marker",t.coords)},toEdit:function(t){this.$store.commit("marker/setName",t.name),this.$store.commit("marker/setCoords",t.coords),this.$store.commit("marker/setId",t._id),this.$eventBus.$emit("edit-marker",!0,t.name)}}}),_=y,$=(r("718a"),Object(d["a"])(_,v,b,!1,null,"c3f37eec",null)),w=$.exports,M={name:"LocationList",components:{LocationItem:w},computed:{markers:function(){return this.$store.getters["marker/getAllMarkers"]}}},E=M,C=Object(d["a"])(E,g,k,!1,null,"244d5a6e",null),T=C.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",[r("b-form-group",{attrs:{label:"Название","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),r("b-form-group",{attrs:{label:"Долгота","label-for":"longitude"}},[r("b-form-input",{attrs:{id:"longitude",required:""},model:{value:t.coords[0],callback:function(e){t.$set(t.coords,0,e)},expression:"coords[0]"}})],1),r("b-form-group",{attrs:{label:"Широта","label-for":"latitude"}},[r("b-form-input",{attrs:{id:"latitude",required:""},model:{value:t.coords[1],callback:function(e){t.$set(t.coords,1,e)},expression:"coords[1]"}})],1),t.isEdit?r("div",[r("b-button",{staticClass:"mt-3",attrs:{variant:"primary"},on:{click:t.editMarker}},[t._v("Сохранить")]),r("b-button",{staticClass:"ml-3 mt-3",attrs:{variant:"warning"},on:{click:t.cancelEdit}},[t._v("Отменить")])],1):r("div",[r("b-button",{staticClass:"mt-3",attrs:{variant:"primary"},on:{click:t.addMarker}},[t._v("Добавить")]),r("b-button",{staticClass:"ml-3 mt-3",attrs:{variant:"warning"},on:{click:t.clearFields}},[t._v("Очистить")])],1)],1)},O=[],L={name:"LocationAdd",data:function(){return{name:""}},methods:{addMarker:function(){var t=this;this.$store.dispatch("marker/addMarker",{name:this.name,longitude:this.coords[0],latitude:this.coords[1]}).then((function(e){t.clearFields(),t.makeToast(!1,e.message)})).catch((function(t){return console.log(t.message)}))},editMarker:function(){var t=this;this.$store.dispatch("marker/editMarker",{id:this.id,name:this.name,coords:this.coords}).then((function(e){t.$store.commit("marker/setEdit",!1),t.clearFields(),t.makeToast(!1,e.message)})).catch((function(t){return t}))},cancelEdit:function(){this.$store.commit("marker/setEdit",!1),this.clearFields()},clearFields:function(){this.name="",this.$store.commit("marker/resetForm")},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;this.$bvToast.toast("".concat(e),{title:"Уведомление",autoHideDelay:5e3,appendToast:t})}},computed:{id:function(){return this.$store.getters["marker/getId"]},coords:function(){return this.$store.getters["marker/getCoords"]},isEdit:function(){return this.$store.getters["marker/getEdit"]},getName:function(){return this.$store.getters["marker/getName"]}},created:function(){var t=this;this.$eventBus.$on("edit-marker",(function(e,r){t.name=r,t.$store.commit("marker/setEdit",e)}))},beforeDestroy:function(){this.$eventBus.$destroy()}},x=L,A=Object(d["a"])(x,j,O,!1,null,"de8314fc",null),I=A.exports,P={},S=Object(d["a"])(P,n,o,!1,null,null,null),q=S.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.coords?r("yandex-map",{attrs:{coords:t.coords,zoom:5},on:{click:t.onClick}},t._l(t.markers,(function(t){return r("ymap-marker",{key:t._id,attrs:{"marker-id":t._id,coords:t.coords,balloon:{body:t.name}}})})),1):t._e()},B=[],F=r("5530"),D=(r("96cf"),r("1da1")),R=r("f5ce"),z={components:{yandexMap:R["c"],ymapMarker:R["d"]},data:function(){return{coords:null,settings:{apiKey:"7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f",lang:"ru_RU",coordorder:"latlong",version:"2.1"}}},computed:{markers:function(){return this.$store.getters["marker/getAllMarkers"]}},methods:{onClick:function(t){this.coords=t.get("coords"),this.$store.commit("marker/setCoords",this.coords)},showMarker:function(t){this.coords=t}},mounted:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(R["b"])(Object(F["a"])(Object(F["a"])({},t.settings),{},{debug:!0}));case 2:ymaps.geolocation.get().then((function(e){t.coords=e.geoObjects.position})),t.$eventBus.$on("go-to-marker",t.showMarker);case 4:case"end":return e.stop()}}),e)})))()}},H=z,U=(r("5d59"),Object(d["a"])(H,N,B,!1,null,"47ba69bc",null)),K=U.exports,V={components:{LocationMap:K,LocationAdd:I,LocationEdit:q,LocationList:T},name:"Location",computed:{edit:function(){return this.$store.getters["marker/isEdit"]}},mounted:function(){this.$store.dispatch("marker/getAllMarkers")}},J=V,G=(r("4797"),Object(d["a"])(J,p,h,!1,null,"35aec60c",null)),Q=G.exports,W=r("2f62"),X=r("bc3a"),Y=r.n(X),Z={actions:{retrieveToken:function(t,e){return new Promise((function(r,n){Y.a.post("/auth/login",{email:e.email,password:e.password}).then((function(e){localStorage.setItem("token",e.data.token),t.commit("retrieveToken",e.data),r(e)})).catch((function(t){console.log(t.message)}))}))},register:function(t,e){return new Promise((function(t,r){Y.a.post("/auth/register/",{email:e.email,password:e.password}).then((function(e){t(e)})).catch((function(t){console.log(t.message)}))}))},destroyToken:function(t){t.getters.loggedIn&&(localStorage.removeItem("token"),t.commit("destroyToken"))}},mutations:{retrieveToken:function(t,e){t.token=e.token},destroyToken:function(t){t.token=null}},state:{token:localStorage.getItem("token")||null},getters:{loggedIn:function(t){return null!==t.token}}},tt=(r("4de4"),r("d81d"),{namespaced:!0,state:{markers:[],coords:[],name:"",id:"",isEdit:!1},actions:{getAllMarkers:function(t){Y.a.get("/location",{}).then((function(e){t.commit("setMarkers",e.data)})).catch((function(t){console.log(t)}))},addMarker:function(t,e){return new Promise((function(r,n){Y.a.post("/location",{name:e.name,coords:[e.longitude,e.latitude]}).then((function(e){t.commit("addMarker",e.data),r(e.data)})).catch((function(t){console.log(t),n(t)}))}))},editMarker:function(t,e){return new Promise((function(r,n){Y.a.patch("/location/".concat(e.id),{name:e.name,coords:e.coords},{headers:{Authorization:t.getters.getToken,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.commit("editMarker",e.data.location),r(e.data)})).catch((function(t){return t}))}))},deleteMarker:function(t,e){return new Promise((function(r,n){Y.a.delete("/location/".concat(e.id),{headers:{Authorization:t.getters.getToken,Accept:"application/json","Content-Type":"application/json"}}).then((function(n){t.commit("deleteMarker",e),r(n.data)})).catch((function(t){n(t)}))}))}},mutations:{setMarkers:function(t,e){t.markers=e},addMarker:function(t,e){t.markers.push(e.location)},editMarker:function(t,e){t.markers.map((function(t){t._id===e._id&&(t.name=e.name,t.coords=e.coords)}))},deleteMarker:function(t,e){t.markers=t.markers.filter((function(t){return t._id!==e.id}))},setId:function(t,e){t.id=e},setName:function(t,e){t.name=e},setCoords:function(t,e){t.coords=e},resetForm:function(t){t.coords=[],t.name=""},setEdit:function(t,e){t.isEdit=e}},getters:{getAllMarkers:function(t){return t.markers},getToken:function(t,e,r){return r.auth.token},getId:function(t){return t.id},getCoords:function(t){return t.coords},getName:function(t){return t.name},getEdit:function(t){return t.isEdit}}});a["default"].use(W["a"]),Y.a.defaults.baseURL="https://vue-ymaps-server.herokuapp.com/api";var et=new W["a"].Store({modules:{marker:tt,auth:Z}});a["default"].use(f["a"]);var rt=[{path:"/",name:"Home",component:Q,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return r.e("chunk-71367435").then(r.bind(null,"a55b"))},meta:{requiresVisitor:!0},props:!0},{path:"/register",name:"register",component:function(){return r.e("chunk-2d0d6d35").then(r.bind(null,"73cf"))},meta:{requiresVisitor:!0}}],nt=new f["a"]({mode:"history",base:"/",routes:rt});nt.beforeEach((function(t,e,r){t.matched.some((function(t){return t.meta.requiresAuth}))?et.getters.loggedIn?r():r({path:"/login"}):t.matched.some((function(t){return t.meta.requiresVisitor}))&&et.getters.loggedIn?r({path:"/"}):r()}));var ot=nt,at=r("5f5b"),it=r("b1e0"),st=(r("ab8b"),r("2dd8"),r("2106")),ct=r.n(st);a["default"].config.productionTip=!1,a["default"].use(at["a"]),a["default"].use(it["a"]),a["default"].use(ct.a,Y.a),a["default"].use(R["a"],{apiKey:"7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f",lang:"ru_RU",coordorder:"latlong",version:"2.1"}),a["default"].prototype.$eventBus=new a["default"];var ut=function(t){var e=localStorage.getItem("token");return t.headers.Authorization=e,t};Y.a.interceptors.request.use(ut),Y.a.interceptors.response.use((function(t){return t}),(function(t){return 401===t.response.status&&(et.dispatch("destroyToken"),ot.push({name:"Login",params:{message:"Срок действия токена истек, пожалуйста авторизуйтесь!"}})),Promise.reject(t)})),new a["default"]({router:ot,axios:Y.a.create(config),store:et,render:function(t){return t(m)}}).$mount("#app")},"5d59":function(t,e,r){"use strict";r("9bfa")},"6d9a":function(t,e,r){},"718a":function(t,e,r){"use strict";r("9173")},"85ec":function(t,e,r){},9173:function(t,e,r){},"9bfa":function(t,e,r){}});
//# sourceMappingURL=app.12fbffa7.js.map