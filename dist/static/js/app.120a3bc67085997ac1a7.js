webpackJsonp([1],{"+lU+":function(e,t,n){"use strict";var a=n("mvHQ"),s=n.n(a);t.a={name:"ApiList",data:function(){return{tableData:[],title:"",options:[],deposit:[]}},created:function(){this.request()},methods:{request:function(){var e=this;this.$http.get("/apis/v1/builder/project").then(function(t){var n=t.data.data,a=["10.5.1.162","10.5.1.165","10.5.1.167"],s=[];n.services.forEach(function(e){"builder"!==e.name&&s.push({name:e.name,selected:a})}),e.tableData=s,e.title=n.project,e.options=[{value:"10.5.1.162",label:"162"},{value:"10.5.1.165",label:"165"},{value:"10.5.1.167",label:"167"},{value:"10.5.1.211",label:"211"},{value:"10.5.1.185",label:"185"}]}).catch(function(e){console.log(e)})},btnBuild:function(e){var t=this.$route.path+"#BuildLog?getVal="+s()(e);window.open(t)},btnDeploy:function(e){var t=this.$route.path+"#DeployLog?getVal="+s()(e);window.open(t)}}}},"0Lxd":function(e,t,n){"use strict";t.a={name:"ApiList",data:function(){return{title:"编译中",result:[],classObject:"el-icon-loading",name:""}},mounted:function(){var e=JSON.parse(this.$route.query.getVal);this.name=e.name,this.build({name:e.name})},methods:{build:function(e){var t=this;this.$http.get("/apis/v1/builder/build",{params:e}).then(function(e){var n=e.data;0==n.code&&(t.result=n.data.logs,t.i=!1,t.title="编译完成",t.classObject="el-icon-check")}).catch(function(e){console.log(e)})}}}},"62Ct":function(e,t,n){"use strict";function a(e){n("rqLD")}var s=n("Cd6T"),l=n("7oJI"),r=n("VU/8"),i=a,c=r(s.a,l.a,i,null,null);t.a=c.exports},"6PPV":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n"+e._s(e.title)+"\n  "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{label:"序号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.$index+1)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",[e._v(e._s(t.row.name)+" ")])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"选择"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.row.selected,callback:function(e){t.row.selected=e},expression:"scope.row.selected"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.btnBuild(t.row)}}},[e._v("编译")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.btnDeploy(t.row)}}},[e._v("部署")])]}}])})],1)],1)},s=[],l={render:a,staticRenderFns:s};t.a=l},"7oJI":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("div",{staticClass:"title"},[e._v("服务名称:"+e._s(e.name))]),e._v(" "),n("ul",e._l(e.result,function(t,a){return n("li",[e._v("\n        部署地址:"+e._s(t.address)+"\n        "),n("i",{class:t.class_})])}))])},s=[],l={render:a,staticRenderFns:s};t.a=l},Cd6T:function(e,t,n){"use strict";var a=n("Xxa5"),s=n.n(a),l=n("BO1k"),r=n.n(l),i=n("exGp"),c=n.n(i);t.a={name:"ApiList",data:function(){return{name:"",title:"",result:[],classObject:[]}},mounted:function(){var e=this,t=JSON.parse(this.$route.query.getVal);this.name=t.name,t.selected.forEach(function(t){e.result.push({address:t,class_:"el-icon-caret-right"})}),this.deployLoop(this.result)},methods:{deployLoop:function(e){var t=this;return c()(s.a.mark(function n(){var a,l,i,c,o,u,d,p;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a=!0,l=!1,i=void 0,n.prev=3,c=r()(e);case 5:if(a=(o=c.next()).done){n.next=23;break}return u=o.value,u.class_="el-icon-loading",n.prev=8,n.next=11,t.$http.get("/apis/v1/builder/deploy",{params:{name:t.name,address:u.address}});case 11:d=n.sent,p=d.data,0==p.code?u.class_="el-icon-check":u.class_="el-icon-close",n.next=20;break;case 16:n.prev=16,n.t0=n.catch(8),u.class_="el-icon-close",console.log(n.t0);case 20:a=!0,n.next=5;break;case 23:n.next=29;break;case 25:n.prev=25,n.t1=n.catch(3),l=!0,i=n.t1;case 29:n.prev=29,n.prev=30,!a&&c.return&&c.return();case 32:if(n.prev=32,!l){n.next=35;break}throw i;case 35:return n.finish(32);case 36:return n.finish(29);case 37:case"end":return n.stop()}},n,t,[[3,25,29,37],[8,16],[30,,32,36]])}))()}}}},KnfV:function(e,t){},M93x:function(e,t,n){"use strict";var a=n("xJD8"),s=n("sO3f"),l=n("VU/8"),r=l(a.a,s.a,null,null,null);t.a=r.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("M93x"),l=n("YaEn"),r=n("zL8q"),i=n.n(r),c=n("q8zI"),o=(n.n(c),n("mtWM")),u=n.n(o);a.default.config.productionTip=!1,a.default.prototype.$http=u.a,a.default.use(i.a),new a.default({el:"#app",router:l.a,template:"<App/>",components:{App:s.a}})},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),s=n("/ocq"),l=n("qQR8"),r=n("gfdZ"),i=n("62Ct");a.default.use(s.a),t.a=new s.a({routes:[{path:"/",name:"ApiList",component:l.a},{path:"/BuildLog",name:"BuildLog",component:r.a},{path:"/DeployLog",name:"DeployLog",component:i.a}]})},"dwp/":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title"},[e._v("服务名称:"+e._s(e.name))]),e._v(" "),n("div",{staticClass:"title"},[e._v("\n      "+e._s(e.title)+"\n      "),n("i",{class:e.classObject})]),e._v(" "),n("ul",e._l(e.result,function(t,a){return n("li",[e._v("\n        "+e._s(a)+"."+e._s(t)+"\n      ")])}))])},s=[],l={render:a,staticRenderFns:s};t.a=l},gfdZ:function(e,t,n){"use strict";function a(e){n("KnfV")}var s=n("0Lxd"),l=n("dwp/"),r=n("VU/8"),i=a,c=r(s.a,l.a,i,null,null);t.a=c.exports},q8zI:function(e,t){},qQR8:function(e,t,n){"use strict";var a=n("+lU+"),s=n("6PPV"),l=n("VU/8"),r=l(a.a,s.a,null,null,null);t.a=r.exports},rqLD:function(e,t){},sO3f:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],l={render:a,staticRenderFns:s};t.a=l},xJD8:function(e,t,n){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.120a3bc67085997ac1a7.js.map