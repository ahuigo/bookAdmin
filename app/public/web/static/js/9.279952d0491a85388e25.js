webpackJsonp([9],{"5/23":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),r=n.n(a),s=n("Xxa5"),o=n.n(s),c=n("exGp"),i=n.n(c),u=n("0jG4"),l=(n("YaEn"),{name:"Press",mixins:[n("3AVb").a],components:{NewRow:function(){return n.e(16).then(n.bind(null,"euJz"))}},data:function(){return{loading:!1,data:[],count:0,params:{pageNo:1,size:20},rows:[],columns:function(){var t=this;return[{type:"selection",width:60,align:"center"},{title:"_id",width:200,key:"_id",align:"center"},{title:"名称",key:"name",align:"center"},{title:"操作",align:"center",width:150,render:function(e,n){var a=n.row;return e("div",[e(Button,{class:"link",attrs:{type:"text",size:"small"},on:{click:function(){t.modal.show=!0,t.modal.row=a}}},["编辑"]),e(Button,{class:"link",attrs:{type:"text",size:"small"},on:{click:function(){return t.deletes([a._id])}}},["删除"])])}}]}.call(this),modal:{show:!1,row:null}}},created:function(){this.showList()},methods:{addrow:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.modal.show=!0;case 1:case"end":return e.stop()}},e,t)}))()},showList:function(){var t=this;return i()(o.a.mark(function e(){var n,a,s,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get(r()({},t.params));case 2:n=e.sent,a=n.data,s=a.rows,c=void 0===s?[]:s,i=a.count,t.data=c,t.count=i,t.$Message.success("加载完成");case 8:case"end":return e.stop()}},e,t)}))()},confirmDel:function(t){var e=this;return i()(o.a.mark(function n(){var a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.d.delete({ids:t||e.rows.map(function(t){return t._id})});case 2:a=n.sent,a.data,e.$Message.success("删除成功！"),e.showList();case 6:case"end":return n.stop()}},n,e)}))()}}}),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FyLayout",{attrs:{bgColor:"#fff"}},[n("SearchBox",{attrs:{params:t.params},on:{search:function(e){t.showList()},reset:t.reset},scopedSlots:t._u([{key:"body",fn:function(e){return[n("Col",{attrs:{lg:6,sm:8,xs:24}},[n("FormItem",{attrs:{label:"名称",prop:"name"}},[n("Input",{attrs:{icon:"search",placeholder:"搜索名称"},model:{value:t.params.name,callback:function(e){t.$set(t.params,"name",e)},expression:"params.name"}})],1)],1)]}}])},[n("template",{slot:"action"},[n("Button",{attrs:{type:"primary",icon:"plus-round"},on:{click:function(e){t.addrow()}}},[t._v("新增")]),t._v(" "),n("Button",{directives:[{name:"show",rawName:"v-show",value:t.rows.length,expression:"rows.length"}],attrs:{type:"ghost"},on:{click:function(e){t.deletes()}}},[t._v("批量删除")])],1)],2),t._v(" "),n("Table",{attrs:{border:"",columns:t.columns,data:t.data},on:{"on-selection-change":t.selectChange}}),t._v(" "),n("Block",{attrs:{align:"right"}},[n("Page",{attrs:{total:t.count,"page-size":t.params.size,"show-elevator":"",current:t.params.pageNo,"show-total":""},on:{"update:current":function(e){t.$set(t.params,"pageNo",e)},"on-change":t.pageChange}})],1),t._v(" "),n("NewRow",{attrs:{modal:t.modal},on:{ok:function(e){t.showList()}}})],1)},staticRenderFns:[]},p=n("VU/8")(l,d,!1,null,null,null);e.default=p.exports}});