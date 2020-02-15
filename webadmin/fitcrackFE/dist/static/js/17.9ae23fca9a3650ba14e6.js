webpackJsonp([17],{470:function(t,e,a){"use strict";function n(t){a(722)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(562),s=a(724),o=a(32),r=n,l=o(i.a,s.a,!1,r,"data-v-29969c68",null);e.default=l.exports},483:function(t,e,a){"use strict";e.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},484:function(t,e,a){"use strict";var n=a(483),i=a(485),s=a(32),o=s(n.a,i.a,!1,null,null,null);e.a=o.exports},485:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[t.icon?a("v-icon",{attrs:{left:""}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),a("v-card-text",{staticClass:"contentFcTile"},[t.loading?a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):t._t("default")],2)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},562:function(t,e,a){"use strict";var n=a(484);e.a={name:"HostDetailView",components:{"fc-tile":n.a},data:function(){return{data:null,workunitsHeader:[{text:"Job",align:"start",value:"job_id"},{text:"Cracking time",align:"start",value:"cracking_time_str"},{text:"Generated",align:"end",value:"time"},{text:"Start index",align:"end",value:"start_index"},{text:"Keyspace",align:"end",value:"hc_keyspace"},{text:"Retry",align:"end",value:"retry"},{text:"Finish",align:"end",value:"finished"}],jobHeaders:[{text:"Name",align:"start",value:"name"},{text:"Attack type",value:"attack",align:"end"},{text:"Status",value:"status",align:"end"},{text:"Progress",value:"progress",align:"end"},{text:"Added",value:"time",align:"end"},{text:"Actions",value:"actions",sortable:!1,align:"end"}],jobs_statuses:[{text:"ready",code:0},{text:"finished",code:1},{text:"exhausted",code:2},{text:"malformed",code:3},{text:"timeout",code:4},{text:"running",code:10},{text:"finishing",code:12}]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.axios.get(this.$serverAddr+"/hosts/"+this.$route.params.id).then(function(e){t.data=e.data})},yesNo:function(t){return t?"Yes":"No"},getOsIcon:function(t){return/(windows|microsoft)/gi.test(t)?"mdi-windows":/(linux)/gi.test(t)?"mdi-linux":/(apple|mac)/gi.test(t)?"mdi-apple":"mdi-application"},progressToPercentage:function(t){return t.toFixed()+"%"},operateJob:function(t,e){var a=this;this.axios.get(this.$serverAddr+"/job/"+t+"/action",{params:{operation:e}}).then(function(t){console.log(t.data),a.loadJobs()})}}}},722:function(t,e,a){var n=a(723);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(455)("793919ae",n,!0,{})},723:function(t,e,a){e=t.exports=a(454)(!0),e.push([t.i,".dictContentContainer[data-v-29969c68]{max-width:600px}.width100[data-v-29969c68]{width:100%}.max800[data-v-29969c68]{max-width:800px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/host/hostDetailView.vue"],names:[],mappings:"AACA,uCACE,eAAiB,CAClB,AACD,2BACE,UAAY,CACb,AACD,yBACE,eAAiB,CAClB",file:"hostDetailView.vue",sourcesContent:["\n.dictContentContainer[data-v-29969c68] {\n  max-width: 600px;\n}\n.width100[data-v-29969c68] {\n  width: 100%;\n}\n.max800[data-v-29969c68] {\n  max-width: 800px;\n}\n\n\n"],sourceRoot:""}])},724:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null!=t.data?a("v-breadcrumbs",{attrs:{items:[{text:"Hosts",to:{name:"hosts"},exact:!0},{text:t.data.domain_name}],divider:"/"}}):t._e(),t._v(" "),a("v-container",[a("fc-tile",{staticClass:" max800 mb-5",attrs:{title:"Host info",loading:null==t.data}},[null!=t.data?a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-desktop-classic")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v("\n              "+t._s(t.data.domain_name)+"\n            ")]),t._v(" "),a("v-list-item-subtitle",[t._v("\n              User: "+t._s(t.data.user.name)+"\n            ")])],1)],1),t._v(" "),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(t._s(t.getOsIcon(t.data.os_name)))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v("\n              "+t._s(t.data.os_name)+"\n            ")])],1)],1),t._v(" "),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-memory")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v("\n              "+t._s(t.data.p_model)+"\n            ")])],1)],1)],1):t._e()],1),t._v(" "),a("fc-tile",{staticClass:"mb-5",attrs:{title:"Jobs",loading:null===t.data}},[null!==t.data?a("v-data-table",{attrs:{headers:t.jobHeaders,items:t.data.jobs,"footer-props":{itemsPerPageOptions:[10,25,50,100],itemsPerPageText:"Jobs per page"}},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[a("router-link",{staticClass:"middle",attrs:{to:{name:"jobDetail",params:{id:n.id}}}},[t._v("\n            "+t._s(n.name)+"\n          ")])]}},{key:"item.status",fn:function(e){var n=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("span",t._g({class:n.status_type+"--text"},i),[t._v("\n                "+t._s(n.status_text)+"\n              ")])]}}],null,!0)},[t._v(" "),a("span",[t._v(t._s(n.status_tooltip))])])]}},{key:"item.progress",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex align-center justify-end"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.progressToPercentage(n.progress)))]),t._v(" "),a("v-progress-circular",{staticClass:"jobProgress",attrs:{size:"18",width:3,rotate:270,color:"primary",value:n.progress}})],1)]}},{key:"item.time",fn:function(e){var a=e.item;return[t._v("\n          "+t._s(t.$moment(a.time).format("D.M.YYYY H:mm:ss"))+"\n        ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex justify-end actionsBtns"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mx-0",attrs:{icon:"",disabled:"0"!==n.status},on:{click:function(e){return t.operateJob(n.id,"start")}}},i),[a("v-icon",{attrs:{color:"success"}},[t._v("\n                    mdi-play-circle\n                  ")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Start job")])]),t._v(" "),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mx-0",attrs:{icon:"",disabled:"10"!==n.status},on:{click:function(e){return t.operateJob(n.id,"stop")}}},i),[a("v-icon",{attrs:{color:"error"}},[t._v("\n                    mdi-pause-circle\n                  ")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Stop job")])]),t._v(" "),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mx-0",attrs:{icon:"",disabled:n.status>=10},on:{click:function(e){return t.operateJob(n.id,"restart")}}},i),[a("v-icon",{attrs:{color:"info"}},[t._v("\n                    mdi-restart\n                  ")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Restart job")])])],1)]}}],null,!1,2979358523)}):t._e()],1),t._v(" "),a("fc-tile",{staticClass:"max800 mb-5",attrs:{title:"Workunits",loading:null===t.data}},[null!==t.data?a("v-data-table",{staticClass:"width100",attrs:{"footer-props":{itemsPerPageOptions:[10,30,60,{text:"All",value:-1}],itemsPerPageText:"Workunits per page"},headers:t.workunitsHeader,items:t.data.workunits},scopedSlots:t._u([{key:"item.job_id",fn:function(e){var n=e.item;return[a("router-link",{staticClass:"middle",attrs:{to:{name:"jobDetail",params:{id:n.job_id}}}},[t._v("\n            "+t._s(n.job.name||"Detail")+"\n          ")])]}},{key:"item.time",fn:function(e){var a=e.item;return[t._v("\n          "+t._s(t.$moment(a.time).format("D.M.YYYY H:mm:ss"))+"\n        ")]}},{key:"item.retry",fn:function(e){var a=e.item;return[t._v("\n          "+t._s(t.yesNo(a.retry))+"\n        ")]}},{key:"item.finished",fn:function(e){var a=e.item;return[t._v("\n          "+t._s(t.yesNo(a.finished))+"\n        ")]}}],null,!1,3155048200)}):t._e()],1)],1)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=17.9ae23fca9a3650ba14e6.js.map