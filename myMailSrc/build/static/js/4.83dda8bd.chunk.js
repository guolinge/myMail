(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{121:function(e,t,a){e.exports=a.p+"static/media/mail.fabfbc2d.less"},286:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),l=a(20),r=a(16),s=a(15),o=a(21),c=a(0),u=a.n(c),h=a(5),d=(a(121),a(284)),f=a(285),m=(a(265),a(93),a(273),a(275),a(278),a(280),a(282),Date.now()),p=new Date(m),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={date:p,time:p,textareValue:"",title:"",subtitle:"",mailUrl:""},a.letterCount=a.letterCount.bind(Object(s.a)(a)),a.sendMail=a.sendMail.bind(Object(s.a)(a)),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"letterCount",value:function(e){e.length>=1e3&&d.f.info("\u63cf\u8ff0\u5185\u5bb9\u5b57\u7b26\u6570\u9700\u57281000\u5b57\u4ee5\u5185"),this.setState({textareValue:e})}},{key:"sendMail",value:function(){if(this.state.mailUrl)if(this.state.textareValue){var e=new Headers;e.append("Content-Type","application/json");var t=new Request("http://111.229.217.134:8081/mail/sendMail",{method:"POST",mode:"cors",body:JSON.stringify(this.state),headers:e});fetch(t).then((function(e){return e.json()})).then((function(e){})).catch((function(e){d.f.info("\u8bf7\u6c42\u5931\u8d25")}))}else d.f.info("\u8bf7\u8f93\u5165\u6b63\u6587\u5185\u5bb9");else d.f.info("\u8bf7\u8f93\u5165\u6536\u4ef6\u90ae\u7bb1")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldProps;return u.a.createElement("div",null,u.a.createElement(d.d,{className:"date-picker-list",style:{backgroundColor:"white"}},u.a.createElement(d.b,{mode:"date",title:"Select Date",extra:"Optional",value:this.state.date,onChange:function(t){return e.setState({date:t})}},u.a.createElement(d.d.Item,{arrow:"horizontal"},"\u9009\u62e9\u65e5\u671f")),u.a.createElement(d.b,{mode:"time",minuteStep:2,use12Hours:!0,value:this.state.time,onChange:function(t){return e.setState({time:t})}},u.a.createElement(d.d.Item,{arrow:"horizontal"},"\u9009\u62e9\u65f6\u95f4")),u.a.createElement("div",{style:{width:"100%",height:"20px"}}),u.a.createElement(d.c,Object.assign({},t("autofocus"),{clear:!0,placeholder:"\u4f60\u5bb6\u5730\u5740...",value:this.state.mailUrl,ref:function(t){return e.autoFocusInst=t},onChange:function(t){return e.setState({mailUrl:t})}}),"\u90ae\u7bb1\u5730\u5740"),u.a.createElement(d.c,Object.assign({},t("autofocus"),{clear:!0,placeholder:"\u7b80\u5355\u7684\u6807\u9898...",value:this.state.title,ref:function(t){return e.autoFocusInst=t},onChange:function(t){return e.setState({title:t})}}),"\u90ae\u4ef6\u6807\u9898"),u.a.createElement(d.c,Object.assign({},t("autofocus"),{clear:!0,placeholder:"\u8f93\u5165\u4e3b\u9898...",value:this.state.subtitle,ref:function(t){return e.autoFocusInst=t},onChange:function(t){return e.setState({subtitle:t})}}),"\u90ae\u4ef6\u4e3b\u9898"),u.a.createElement("div",{style:{width:"100%",height:"20px"}}),u.a.createElement(d.d.Item,null,"\u8f93\u5165\u6b63\u6587\u5185\u5bb9"),u.a.createElement(d.e,Object.assign({},t("count",{initialValue:""}),{value:this.state.textareValue||"",rows:10,count:1e3,focus:"true",onChange:this.letterCount,placeholder:"\u4ece\u8fd9\u91cc\u8f93\u5165\u6b63\u6587\u5185\u5bb9..."}))),u.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}},u.a.createElement(d.a,{type:"primary",inline:!0,style:{width:"180px"},onClick:this.sendMail},"\u63d0\u4ea4")))}}]),t}(u.a.Component);t.default=Object(h.e)(Object(f.a)()(b))}}]);
//# sourceMappingURL=4.83dda8bd.chunk.js.map