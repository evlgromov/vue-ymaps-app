(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71367435"],{a55b:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"form"},[t("h4",{staticClass:"mb-4"},[s._v("Авторизация")]),t("b-form",{on:{submit:function(e){return e.preventDefault(),s.login(e)}}},[t("b-form-group",{attrs:{label:"Адрес электронной почты","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",required:""},model:{value:s.email,callback:function(e){s.email=e},expression:"email"}})],1),t("b-form-group",{attrs:{label:"Пароль","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}})],1),s.message?t("div",{staticClass:"error"},[s._v(s._s(s.message))]):s._e(),t("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"primary"}},[s._v("Войти")])],1)],1)},r=[],i={props:["message"],name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var s=this;this.$store.dispatch("retrieveToken",{email:this.email,password:this.password}).then((function(e){return s.$router.push("/")}))}}},o=i,n=(t("d6db"),t("2877")),l=Object(n["a"])(o,a,r,!1,null,null,null);e["default"]=l.exports},d6db:function(s,e,t){"use strict";t("e67a")},e67a:function(s,e,t){}}]);
//# sourceMappingURL=chunk-71367435.fae23bdd.js.map