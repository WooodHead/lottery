webpackJsonp([4],{1919:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(789),u=n(r),l=a(1),o=n(l),s=a(187),i=n(s),d=a(101),c=n(d),p=a(124),f=n(p),m=a(2),h=n(m),b=a(6),v=n(b),y=a(4),_=n(y),g=a(5),k=n(g),E=a(372),B=n(E);a(790),a(126),a(125),a(373);var C=a(0),F=n(C),x=(a(50),a(791)),S=a(8),R=(n(S),a(186)),M=a(368),P=a(369),j=(n(P),B.default.Item),T=function(e){function t(){var e,a,n,r;(0,h.default)(this,t);for(var u=arguments.length,l=Array(u),o=0;o<u;o++)l[o]=arguments[o];return a=n=(0,_.default)(this,(e=t.__proto__||(0,f.default)(t)).call.apply(e,[this].concat(l))),n.returnRespone=function(e){var t=e.img_url;n.props.dispatch({type:"bannerForm/setUrl",payload:{img_url:t}})},r=a,(0,_.default)(n,r)}return(0,k.default)(t,e),(0,v.default)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(e,a){e||(a.status?a.status=0:a.status=1,t.props.onSubmit(a))})}},{key:"goBack",value:function(){this.props.dispatch(R.routerRedux.push({pathname:"/banner"}))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.status,n=t.img_url,r=t.addr_url,l={labelCol:{span:3},wrapperCol:{span:12}};return F.default.createElement("div",{className:"content-inner"},F.default.createElement("div",{style:{borderBottom:"1px solid #ddd",marginBottom:20,paddingBottom:10}},F.default.createElement(c.default,{style:{marginRight:10},onClick:this.goBack.bind(this)},"返回"),F.default.createElement(c.default,{type:"primary",onClick:this.onSubmit.bind(this)},"确认")),F.default.createElement(B.default,null,F.default.createElement(j,(0,o.default)({},l,{label:"跳转链接"}),e("addr_url",{initialValue:r,rules:[{required:!0,message:"请输入跳转链接"}]})(F.default.createElement(i.default,{placeholder:"请输入跳转链接"}))),F.default.createElement(j,(0,o.default)({},l,{label:"banner图"}),F.default.createElement(x.UploadFile,{returnRespone:this.returnRespone,img_url:n})),F.default.createElement(j,(0,o.default)({},l,{label:"状态"}),e("status",{valuePropName:"checked",initialValue:!a})(F.default.createElement(u.default,{checkedChildren:"启动",unCheckedChildren:"关闭"})))))}}]),t}(C.Component);T.contextTypes={router:C.PropTypes.object},t.default=(0,M.connect)(function(e){e.banner;return{}})(B.default.create()(T)),e.exports=t.default},806:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(188),u=n(r),l=a(1),o=n(l),s=a(124),i=n(s),d=a(2),c=n(d),p=a(6),f=n(p),m=a(4),h=n(m),b=a(5),v=n(b);a(189);var y=a(0),_=n(y),g=a(368),k=a(1919),E=n(k),B=a(186),C=(a(50),a(369),{module:"banner"}),F=function(e){function t(e,a){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e,a))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params&&this.props.match.params.id,t=this.props.dispatch;e&&t({type:"bannerForm/loadBanner",payload:(0,o.default)({id:e},C)})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"bannerForm/resetState"})}},{key:"goBack",value:function(){this.props.dispatch(B.routerRedux.push({pathname:"/banner"}))}},{key:"onSubmit",value:function(e){var t=this,a=u.default.loading("正在保存...",0);this.props.dispatch({type:"bannerForm/saveBanner",payload:(0,o.default)({},this.props,e,C,{callback:function(e){a(),e&&e.success?(u.default.success("保存成功"),t.goBack()):u.default.error("保存失败")}})})}},{key:"render",value:function(){var e=this.props;return _.default.createElement(E.default,{addr_url:e.addr_url,img_url:e.img_url,status:e.status,seotitle:e.seotitle,onSubmit:this.onSubmit.bind(this)})}}]),t}(y.Component);F.contextTypes={router:y.PropTypes.object},t.default=(0,g.connect)(function(e){var t=e.bannerForm,a=e.app;return console.log(t),(0,o.default)({},t,{content:t.con,uid:a.user.uid,name:a.user.name})})(F),e.exports=t.default}});