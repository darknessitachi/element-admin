(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a6f"],{"6BRi":function(e,t,n){},DRhD:function(e,t,n){},Jrgj:function(e,t,n){"use strict";n.r(t);var a=n("OLzz"),r=n.n(a),i=n("bS4n"),l=n.n(i),o=n("8t5x"),s=n("7Qib"),u=n("kWGr"),c=n("sr6h"),d={mixins:[u.a],data:function(){return{queryCriteria:this.initQueryCriteria(),selected:null}},computed:l()({},Object(o.b)(["dictionaries"])),activated:function(){this.selected=null},methods:{initQueryCriteria:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.b)(e,{flag:"",name:""})},executeQueryPage:function(){var e=this;c.h(this.createQueryParams()).then(function(t){e.queryResultHandler(t)})},customDelHandler:function(){var e=this;c.b(this.selected.id).then(function(){e.queryHandler()})}}},m=(n("PTnr"),n("ZrdR")),f=Object(m.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-card",[n("el-col",{attrs:{span:18}},[n("el-form",{attrs:{model:e.queryCriteria,inline:!0}},[n("el-form-item",{attrs:{label:"启用状态:",prop:"flag"}},[n("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:e.queryCriteria.flag,callback:function(t){e.$set(e.queryCriteria,"flag",t)},expression:"queryCriteria.flag"}},e._l(e.dictionaries.flag,function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"分组名称:",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入分组名称"},model:{value:e.queryCriteria.name,callback:function(t){e.$set(e.queryCriteria,"name",t)},expression:"queryCriteria.name"}})],1)],1)],1),e._v(" "),n("el-col",{staticClass:"query-btn",attrs:{span:6}},[n("el-button",{attrs:{round:"",type:"info"},on:{click:e.resetHandler}},[e._v("重置")]),e._v(" "),n("el-button",{attrs:{round:"",type:"primary"},on:{click:e.queryHandler}},[e._v("查询")])],1)],1),e._v(" "),n("el-col",{staticStyle:{margin:"10px 0px"},attrs:{span:24}},[n("button-right",[e._v("\n      分组列表\n      "),n("template",{slot:"button"},[n("el-button-group",[e.selected?n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("option-changed","check",e.selected)}}},[e._v("查看")]):e._e(),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("option-changed","add")}}},[e._v("新增")]),e._v(" "),e.selected?n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("option-changed","edit",e.selected)}}},[e._v("编辑")]):e._e(),e._v(" "),e.selected?n("el-button",{attrs:{type:"primary"},on:{click:e.delHandler}},[e._v("删除")]):e._e()],1)],1)],2)],1),e._v(" "),n("el-col",{attrs:{span:24}},[n("el-table",{attrs:{data:e.pagination.list,"highlight-current-row":"",stripe:"",border:""},on:{"current-change":function(t){e.selected=t},"row-dblclick":function(t){e.$emit("option-changed","check",e.selected)},"sort-change":e.sortChangeHandler}},[n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"name",label:"名称",sortable:"custom"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createdDate",label:"创建时间",width:"180",sortable:"custom",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("parseTime")(t.row.createdDate)))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"modifiedDate",label:"最后修改时间",width:"180",sortable:"custom",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("parseTime")(t.row.modifiedDate)))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"state",label:"启用状态",width:"100",sortable:"custom",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("state",{attrs:{state:e.row.state}})]}}])})],1),e._v(" "),n("pagination",{attrs:{pagination:e.pagination},on:{"page-size-changed":e.pageSizeChangeHandler,"page-changed":e.pageChangeHandler}})],1)],1)},[],!1,null,"a0d68fec",null);f.options.__file="query.vue";var p=f.exports,h=n("v/Sq"),b={methods:{initForm:function(){return{id:null,token:null,name:"",state:1,index:"",remark:""}},initRules:function(){return{name:[{required:!0,message:"请输入分组名称",trigger:"blur"},{min:4,max:20,message:"长度在 4 到 20 个字符",trigger:"blur"}],state:[{required:!0,message:"请选择分组启用状态",trigger:"blur"}],index:[{required:!0,message:"请输入分组编号",trigger:"blur"}]}},queryAllUsers:function(){var e=this;this.users=[],c.e(this.detail.id).then(function(t){e.users=t})}}},v={mixins:[h.a,b],props:{detail:{required:!1,type:Object,default:function(){}}},data:function(){var e=this.initForm(),t=this.initRules();return t.id=[{required:!0,message:"编辑信息时ID不能为空",trigger:"change"}],{form:e,rules:t,users:[]}},activated:function(){var e=this;c.g(this.detail.id).then(function(t){Object(s.c)(e.form,t),e.$nextTick(function(){e.$refs.form.clearValidate()})}),this.queryAllUsers()},methods:{customSubmitHandler:function(){c.d(this.form).then(this.submitSuccessHandler)},customSubmitSuccessHandler:function(){this.$refs.form.clearValidate()},delGroupUserHandler:function(e){var t=this,n={userId:e,groupId:this.detail.id};c.c(n).then(function(e){t.optionSuccessHandler(),t.queryAllUsers()})}}},g=(n("iMIE"),Object(m.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{icon:"el-icon-back",round:""},on:{click:e.backHandler}},[e._v("返回")]),e._v(" "),n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("button-right",[e._v("\n        角色信息\n        "),n("template",{slot:"button"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitHandler("form")}}},[e._v("保存")])],1)],2)],1),e._v(" "),n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"200px"}},[n("el-form-item",{attrs:{label:"ID",prop:"id"}},[n("el-input",{attrs:{disabled:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分组名称",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否启用",prop:"state"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分组编号",prop:"index"}},[n("el-input",{model:{value:e.form.index,callback:function(t){e.$set(e.form,"index",t)},expression:"form.index"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分组备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1),e._v(" "),n("el-card",{attrs:{header:"用户信息"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,border:""}},[n("el-table-column",{attrs:{type:"index",width:"100",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"loginName",label:"登录ID",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"name",label:"姓名",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"gender",label:"性别",width:"100",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("translateGender")(t.row.gender)))]}}])}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"邮箱",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"phone",label:"电话",width:"160",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"warning"},on:{click:function(n){e.delGroupUserHandler(t.row.id)}}},[e._v("删除")])]}}])})],1)],1)],1)},[],!1,null,"99effd12",null));g.options.__file="edit.vue";var _=g.exports,y={mixins:[h.a,b],props:{detail:{required:!1,type:Object,default:function(){}}},data:function(){return{form:this.initForm(),rules:this.initRules()}},activated:function(){var e=this;Object(s.c)(this.form,this.initForm()),this.$nextTick(function(){e.$refs.form.clearValidate()})},methods:{customSubmitHandler:function(){var e=this;c.a(this.form).then(function(t){e.submitSuccessHandler(t)})},customSubmitSuccessHandler:function(e){this.$emit("option-changed","edit",e)}}},k=(n("R+Ra"),Object(m.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"200px"}},[n("el-form-item",{attrs:{label:"分组名称",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否启用",prop:"state"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分组编号",prop:"index"}},[n("el-input",{model:{value:e.form.index,callback:function(t){e.$set(e.form,"index",t)},expression:"form.index"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分组备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitHandler("form")}}},[e._v("保存")]),e._v(" "),n("el-button",{on:{click:e.backHandler}},[e._v("取消")])],1)],1)},[],!1,null,"5278b29c",null));k.options.__file="add.vue";var w=k.exports,x={mixins:[b],props:{detail:{required:!0,type:Object,default:function(){}}},data:function(){return{labelWidth:"200px",users:[]}},activated:function(){this.queryAllUsers()}},H=(n("P9tE"),Object(m.a)(x,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{icon:"el-icon-back",round:""},on:{click:function(t){e.$emit("option-changed")}}},[e._v("返回")]),e._v(" "),n("el-collapse",{attrs:{value:"base-info",accordion:""}},[n("el-collapse-item",{attrs:{title:"基本信息",name:"base-info"}},[n("el-form",{attrs:{model:e.detail,"label-width":e.labelWidth}},[n("input-item-view",{attrs:{label:"ID"}},[e._v(e._s(e.detail.id))]),e._v(" "),n("input-item-view",{attrs:{label:"启用状态"}},[e._v(e._s(e._f("translateState")(e.detail.state)))]),e._v(" "),n("input-item-view",{attrs:{label:"分组编号"}},[e._v(e._s(e.detail.index))]),e._v(" "),n("input-item-view",{attrs:{label:"分组名称"}},[e._v(e._s(e.detail.name))]),e._v(" "),n("text-item-view",{attrs:{label:"分组备注"}},[e._v(e._s(e.detail.remark))])],1)],1),e._v(" "),n("el-collapse-item",{attrs:{title:"审计信息",name:"audit-info"}},[n("audit-info",{attrs:{detail:e.detail,"label-width":e.labelWidth}})],1),e._v(" "),n("el-collapse-item",{attrs:{title:"用户信息",name:"group-user"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,border:""}},[n("el-table-column",{attrs:{type:"index",width:"100",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"loginName",label:"登录ID",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"name",label:"姓名",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"gender",label:"性别",width:"100",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("translateGender")(t.row.gender)))]}}])}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"邮箱",sortable:"",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"phone",label:"电话",width:"160",sortable:"",align:"center"}})],1)],1)],1)],1)},[],!1,null,"f2e24d70",null));H.options.__file="check.vue";var q={components:{query:p,edit:_,add:w,check:H.exports},data:function(){return{optionType:"query",detail:{}}},methods:{optionChangeHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"query",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.a.start(),this.detail=t,this.optionType=e,r.a.done()}}},S=Object(m.a)(q,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t("keep-alive",[t(this.optionType,{tag:"component",attrs:{detail:this.detail},on:{"option-changed":this.optionChangeHandler}})],1)],1)},[],!1,null,null,null);S.options.__file="main.vue";t.default=S.exports},P9tE:function(e,t,n){"use strict";var a=n("6BRi");n.n(a).a},PTnr:function(e,t,n){"use strict";var a=n("TTPN");n.n(a).a},"R+Ra":function(e,t,n){"use strict";var a=n("s/2J");n.n(a).a},TTPN:function(e,t,n){},iMIE:function(e,t,n){"use strict";var a=n("DRhD");n.n(a).a},kWGr:function(e,t,n){"use strict";var a=n("Q2cO"),r=n.n(a),i=n("EPZ6"),l=n.n(i),o=n("7Qib");t.a={data:function(){return{pagination:this.initPagination()}},activated:function(){this.executeQueryPage()},methods:{initPagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.b)(e,{total:0,pageSize:10,page:1,list:[],filters:[],sorts:[]})},resetHandler:function(){this.initQueryCriteria(this.queryCriteria),this.initPagination(this.pagination),this.executeQueryPage()},queryHandler:function(){this.initPagination(this.pagination),this.executeQueryPage()},createQueryParams:function(){var e=this;return this.pagination.filters=[],l()(this.queryCriteria).forEach(function(t){var n=e.queryCriteria[t];n&&("object"===(void 0===n?"undefined":r()(n))?e.pagination.filters.push({field:t,value:Object(o.a)(n)}):e.pagination.filters.push({field:t,value:n}))}),{page:this.pagination.page,pageSize:this.pagination.pageSize,filters:this.pagination.filters,sorts:this.pagination.sorts}},queryResultHandler:function(e){return Object(o.b)(this.pagination,e)},pageSizeChangeHandler:function(e){this.pagination.pageSize=e,this.pagination.page=1,this.executeQueryPage()},pageChangeHandler:function(e){this.pagination.page=e,this.executeQueryPage()},sortChangeHandler:function(e){var t=e.column,n=e.prop,a=e.order;this.pagination.sorts=[],t&&this.pagination.sorts.push({field:n,value:"descending"===a?"desc":"asc"}),this.pagination.page=1,this.executeQueryPage()},delHandler:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.customDelHandler?e.customDelHandler():e.$message({type:"info",message:"您未定义删除逻辑处理方法customDelHandler"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}}},"s/2J":function(e,t,n){},sr6h:function(e,t,n){"use strict";n.d(t,"h",function(){return i}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return m});var a=n("t3Un"),r="/system/group/";function i(e){return Object(a.a)({url:r+"query-page",method:"post",data:e})}function l(e){return Object(a.a)({url:r+"query-all",method:"post",data:e})}function o(e){return Object(a.a)({url:r+"query-by-id",method:"get",params:{id:e}})}function s(e){return Object(a.a)({url:r+"add",method:"post",data:e})}function u(e){return Object(a.a)({url:r+"edit",method:"post",data:e})}function c(e){return Object(a.a)({url:r+"del",method:"get",params:{id:e}})}function d(e){return Object(a.a)({url:r+"all-users",method:"get",params:{id:e}})}function m(e){return Object(a.a)({url:r+"del-user",method:"post",data:e})}},"v/Sq":function(e,t,n){"use strict";t.a={methods:{backHandler:function(){this.customBackHandler?this.customBackHandler():this.$emit("option-changed")},submitHandler:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$refs[e].validate(function(e){if(!e)return!1;t.$confirm("确定要保存吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n?n():t.customSubmitHandler()}).catch(function(){t.$message({type:"info",message:"已取消操作"})})})},submitSuccessHandler:function(e){this.optionSuccessHandler(),this.customSubmitSuccessHandler?this.customSubmitSuccessHandler(e):this.backHandler()},optionSuccessHandler:function(){this.$message({type:"success",message:"操作成功"})}}}}}]);