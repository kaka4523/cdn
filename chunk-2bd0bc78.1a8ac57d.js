(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bd0bc78"],{"0e17":function(t,e,a){"use strict";a.d(e,"b",(function(){return d})),a.d(e,"i",(function(){return v})),a.d(e,"j",(function(){return p})),a.d(e,"d",(function(){return b})),a.d(e,"c",(function(){return _})),a.d(e,"a",(function(){return h})),a.d(e,"g",(function(){return g})),a.d(e,"h",(function(){return A})),a.d(e,"e",(function(){return T})),a.d(e,"f",(function(){return E})),a.d(e,"k",(function(){return w}));a("99af"),a("4160"),a("b64b"),a("ac1f"),a("5319"),a("1276"),a("159b");var n=a("3835"),r=a("7684"),o=a("352e"),i=a("5d9f"),s=a("7a07"),c=a("1291"),u=a("5241"),l=a("65b8"),f=(a("501c"),a("33b2"));function d(t){var e=t.data;if(e.ldt===i["a"].TID)return _(t);if(!0===e.is_footer_row)return null;var a=e.nm;if(null==a)return e.pid;if(a.length>18){var o=a.split(" "),s=Object(n["a"])(o,2),u=s[0],l=s[1];a="".concat(u[0],". ").concat(l)}var f='<span class="'.concat(b(e),'"><a href="/#/player/').concat(e.pid,'" target="_self">').concat(a,"</a></span>"),d=Object(r["h"])(e,c["a"].COUNTRY_ISO);if(null==d)return f;var v=m(d);return"".concat(v," ").concat(f)}function m(t){var e="https://flagcdn.com/h20/";return'<img border="0" width="15" height="10" style="margin-bottom: 2px" src="'.concat(e).concat(t,".png\"'>")}function v(t){var e=f[t],a="".concat(o["a"].getActiveLanguage(),"_").concat(c["a"].TNM);return"en"===o["a"].getActiveLanguage()?Object(r["h"])(e,c["a"].ABBR):Object(r["h"])(e,a)}function p(t){if(null==t)return null;var e=f[t],a="".concat(o["a"].getActiveLanguage(),"_").concat(c["a"].CITY),n="".concat(o["a"].getActiveLanguage(),"_").concat(c["a"].TNM);return"".concat(Object(r["h"])(e,a)," ").concat(Object(r["h"])(e,n))}function b(t){var e="",a=t.st;return 0===a&&t[i["a"].ALL_STAR_TAG]===l["a"].ALL_STAR?e="all_star":(1===a&&t[i["a"].CHAMP_TAG]===l["a"].CHAMP||0===t[s["a"].OPPO_TID])&&(e="champ"),e}function _(t){var e,a=t.data,n=a.tid,r=a.sz;if(null==n)return"";var o=null!==(e=t.value)&&void 0!==e?e:"".concat(p(n));return'<a href="/#/team/'.concat(n,"/").concat(r,'" target="_self">').concat(o,"</a>")}function h(t){var e=t.data;return!0===e.is_footer_row||null==t.value?null:'<a href="/#/game/series/'.concat(t.data.series_tid,'" target="_self">').concat(t.value,"</a>")}function g(t,e){var a=t.data,n=t.node.rowIndex;if(!0===a.is_footer_row&&1===n){var o=e.replace("m","p");return Object(r["h"])(a,o)}var i=e.replace("m","a");return"".concat(Object(r["h"])(a,e),"-").concat(Object(r["h"])(a,i))}function A(t){if(t===u["a"].DOM_LAYOUT_AUTO_HEIGHT)return u["a"].GRID_STYLE;var e=window.innerHeight,a=e-120;return e>1080&&(a=800),"width: 100%; height: ".concat(a,"px;")}function T(t,e){var a={};return Object(r["u"])(a,"padding-".concat(t),"".concat(e,"px")),a}function E(t,e,a,n){var o={};return Object(r["u"])(o,"padding-".concat(t),"".concat(e,"px")),Object(r["u"])(o,"border-".concat(a),n),o}function w(){var t=[],e=[],a=Object.keys(f);return a.forEach((function(a){var n={tid:a,abbr:v(a)};"Eastern"===f[a].conference?t.push(n):e.push(n)})),[t,e]}},a9ca:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"},[a("span",{staticClass:"font-weight-bold font-size-3 text-dark-60"},[t._v(t._s(t.$t("PAGE.AUTH.HAVING_ACCOUNT")))]),a("router-link",{staticClass:"font-weight-bold font-size-3 ml-2",attrs:{to:{name:"login"}}},[t._v(t._s(t.$t("PAGE.AUTH.SIGN_IN"))+"!")])],1),a("div",{staticClass:"login-form login-signin"},[a("div",{staticClass:"text-center mb-10 mb-lg-20"},[a("h3",{staticClass:"font-size-h1"},[t._v(t._s(t.title))])]),a("b-form",{staticClass:"form",staticStyle:{width:"400px"},on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{label:t.$t("PAGE.AUTH.EMAIL")}},[a("b-input-group",{staticClass:"mt-3"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("font-awesome-icon",{attrs:{icon:"envelope"}})],1),a("b-form-input",{attrs:{state:t.emailValidation,required:"",trim:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-invalid-feedback",{attrs:{state:t.emailValidation}},[t._v(" "+t._s(t.$t("PAGE.AUTH.INVALID_EMAIL"))+" ")])],1)],1),a("b-form-group",{attrs:{label:t.$t("PAGE.AUTH.V_CODE"),description:t.vCodeDesc}},[a("b-input-group",{staticClass:"mt-3"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("font-awesome-icon",{attrs:{icon:"hashtag"}})],1),a("b-form-input",{attrs:{required:"",state:t.vCodeValidation,trim:""},model:{value:t.form.vCode,callback:function(e){t.$set(t.form,"vCode",e)},expression:"form.vCode"}}),a("b-form-invalid-feedback",{attrs:{state:t.vCodeValidation}},[t._v(" "+t._s(t.$t("PAGE.AUTH.INVALID_CODE"))+" ")]),a("b-input-group-append",[a("b-button",{ref:"kt_login_signup_send_code",attrs:{variant:"info"},on:{click:function(e){return t.sendVerificationCode()}}},[t._v(t._s(t.$t("PAGE.AUTH.SEND")))])],1)],1)],1),a("b-form-group",{attrs:{label:t.$t("PAGE.AUTH.PASSWORD")}},[a("b-input-group",{staticClass:"mt-3"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("font-awesome-icon",{attrs:{icon:"key"}})],1),a("b-form-input",{attrs:{state:t.passwordValidation,type:"password",required:"",trim:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("b-form-invalid-feedback",{attrs:{state:t.passwordValidation}},[t._v(" "+t._s(t.$t("PAGE.AUTH.INVALID_PASSWORD"))+" ")])],1)],1),"reset"!==t.$route.name?a("b-form-group",{attrs:{label:t.$t("PAGE.PLAN.FAVOURITE_TEAM")}},[a("b-input-group",{staticClass:"mt-3",scopedSlots:t._u([{key:"append",fn:function(){return[a("b-dropdown",{attrs:{text:t.$t("PAGE.TITLE.EASTERN_CONFERENCE"),variant:"info"}},t._l(t.dropdownItemList[0],(function(e){return a("b-dropdown-item",{key:e.tid,on:{click:function(a){return t.setFavouriteTeam(e.tid,e.abbr)}}},[t._v(t._s(e.abbr))])})),1),a("b-dropdown",{attrs:{text:t.$t("PAGE.TITLE.WESTERN_CONFERENCE"),variant:"info"}},t._l(t.dropdownItemList[1],(function(e){return a("b-dropdown-item",{key:e.tid,on:{click:function(a){return t.setFavouriteTeam(e.tid,e.abbr)}}},[t._v(t._s(e.abbr))])})),1),a("b-button",{staticClass:"text-white",attrs:{variant:"secondary"},on:{click:t.resetFavouriteTeam}},[t._v(t._s(t.$t("PAGE.AUTH.RESET")))])]},proxy:!0}],null,!1,1033858626)},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("font-awesome-icon",{attrs:{icon:"lock-open"}})],1),a("b-form-input",{attrs:{readonly:""},model:{value:t.form.favouriteTeam,callback:function(e){t.$set(t.form,"favouriteTeam",e)},expression:"form.favouriteTeam"}})],1),a("h5",[a("b-badge",{attrs:{variant:"success"}},[t._v(t._s(t.$t("PAGE.PLAN.FAVOURITE_TEAM_DESC")))]),a("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.$t("PAGE.PLAN.FAVOURITE_TEAM_WARNNING"))+t._s(t.$t("PAGE.PLAN.FAVOURITE_TEAM_WARNNING2")))])],1)],1):t._e(),a("div",{staticClass:"alert fade alert-danger",class:{show:t.error},attrs:{role:"alert"}},[a("div",{staticClass:"alert-text"},[t._v(t._s(t.error))])]),a("div",{staticClass:"form-group d-flex flex-wrap flex-center"},[a("b-button",{ref:"kt_login_signup_submit",staticClass:"w-100",attrs:{type:"submit",variant:"primary"}},[a("font-awesome-icon",{staticStyle:{float:"left"},attrs:{icon:"reset"===t.$route.name?"undo-alt":"user-plus",size:"lg"}}),t._v(t._s(t.title))],1),"reset"!==t.$route.name?a("b-button",{staticClass:"w-100 mt-5",attrs:{variant:"primary"},on:{click:function(e){return t.$router.push("login")}}},[a("font-awesome-icon",{staticStyle:{float:"left"},attrs:{icon:["fab","google"],size:"lg"}}),t._v(t._s(t.$t("PAGE.AUTH.GOOGLE_SIGN_IN")))],1):t._e()],1)],1)],1)])},r=[],o=(a("b0c0"),a("bdc2")),i=a("19e8"),s=a("7684"),c=a("0e17"),u=a("352e"),l={data:function(){return{form:{email:"reset"===this.$route.name?Object(i["a"])():null,vCode:null,password:null,favouriteTeam:null,favouriteTeamId:null},error:null,vCodeDesc:null,dropdownItemList:Object(c["k"])()}},computed:{title:function(){return"reset"===this.$route.name?this.$t("PAGE.AUTH.RESET_PASSWORD"):this.$t("PAGE.AUTH.SIGN_UP")},emailValidation:function(){return null==this.form.email?null:Object(s["d"])(this.form.email)},vCodeValidation:function(){var t;return null==this.form.vCode?null:4===(null===(t=this.form.vCode)||void 0===t?void 0:t.length)},passwordValidation:function(){var t,e;return null==this.form.password?null:(null===(t=this.form.password)||void 0===t?void 0:t.length)>4&&(null===(e=this.form.password)||void 0===e?void 0:e.length)<13},favouriteTeamValidation:function(){return null!=this.form.favouriteTeamId}},methods:{sendVerificationCode:function(){var t=this;if(Object(s["d"])(this.form.email)){var e=this.$refs["kt_login_signup_send_code"];e.disabled=!0;var a="email=".concat(this.form.email);Object(o["k"])(a).then((function(e){e.value||(t.error=e.error)})),this.vCodeDesc=this.$t("PAGE.AUTH.HAS_SENT_CODE")}else alert(this.$t("PAGE.AUTH.INVALID_EMAIL"))},onSubmit:function(t){var e=this;t.preventDefault();var a=this.form.email,n=this.form.vCode,r=this.form.password,c=this.form.favouriteTeamId,l=u["a"].getActiveLanguage();Object(i["f"])();var f=this.$refs["kt_login_signup_submit"];Object(s["b"])(f),"reset"===this.$route.name?Object(o["i"])({email:a,vCode:n,password:r}).then((function(t){return e.fetchThen(t,f)})):Object(o["m"])({email:a,vCode:n,password:r,favouriteTeamId:c,language:l}).then((function(t){return e.fetchThen(t,f)})),f.disabled=!0,f.classList.add("spinner","spinner-light","spinner-right")},fetchThen:function(t,e){t.value?this.$router.push({name:"login"}):this.error=t.error,Object(s["c"])(e)},setFavouriteTeam:function(t,e){this.form.favouriteTeamId=t,this.form.favouriteTeam=e},resetFavouriteTeam:function(){this.form.favouriteTeamId=null,this.form.favouriteTeam=null}}},f=l,d=a("2877"),m=Object(d["a"])(f,n,r,!1,null,null,null);e["default"]=m.exports}}]);