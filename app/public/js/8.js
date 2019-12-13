webpackJsonp([8],{1875:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateGames=t.addGames=t.save=t.update=t.loadLevel=t.loadTypes=t.loadGames=void 0;var u=a(154),n=r(u),s=a(242),c=r(s),d=(t.loadGames=function(){var e=(0,c.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id||0,r=a?"/api/games/games/"+a:"/api/games/games",e.abrupt("return",(0,d.request)({url:r,method:"get"}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.loadTypes=function(){var e=(0,c.default)(n.default.mark(function e(t){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)({url:"/api/restql/games_types",method:"GET",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.loadLevel=function(){var e=(0,c.default)(n.default.mark(function e(t){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)({url:"/api/restql/games_level",method:"GET",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,c.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.id||0){e.next=3;break}return e.abrupt("return");case 3:return delete t.id,e.abrupt("return",(0,d.request)({url:"/api/games/games/"+a,method:"put",data:t}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.save=function(){var e=(0,c.default)(n.default.mark(function e(t){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)({url:"/api/games/games",method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.addGames=function(){var e=(0,c.default)(n.default.mark(function e(t){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)({url:"/api/games",method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.updateGames=function(){var e=(0,c.default)(n.default.mark(function e(t){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)({url:"/api/games",method:"put",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(90))},799:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(154),n=r(u),s=a(1),c=r(s),d=a(1875),l={id:"",list:[],level_List:[],games_types_id:"",games_level_id:"",cont:"",gamesName:"",status:0,img_url:""};t.default={namespace:"gamesForm",state:(0,c.default)({},l),effects:{setUrl:n.default.mark(function e(t,a){var r=t.payload,u=(a.call,a.put);return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"updateUrl",payload:r});case 2:case"end":return e.stop()}},e,this)}),loadTypes:n.default.mark(function e(t,a){var r,u=t.payload,s=a.call,c=a.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d.loadTypes,u);case 2:if(!(r=e.sent)||!r.success){e.next=7;break}return r.data.list=r.data.record,e.next=7,c({type:"loadGamesSuccess",payload:r});case 7:case"end":return e.stop()}},e,this)}),loadLevel:n.default.mark(function e(t,a){var r,u=t.payload,s=a.call,c=a.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d.loadLevel,u);case 2:if(!(r=e.sent)||!r.success){e.next=7;break}return r.data.level_List=r.data.record,e.next=7,c({type:"loadGamesSuccess",payload:r});case 7:case"end":return e.stop()}},e,this)}),loadGames:n.default.mark(function e(t,a){var r,u=t.payload,s=a.call,c=a.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d.loadGames,u);case 2:if(!(r=e.sent)||!r.success){e.next=6;break}return e.next=6,c({type:"loadGamesSuccess",payload:r});case 6:case"end":return e.stop()}},e,this)}),saveGames:n.default.mark(function e(t,a){var r,u,s,c=t.payload,l=a.call,o=a.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,u=c.callback,delete c.callback,s={status:c.status||0,img_url:c.img_url,games_types_id:c.games_types_id,games_level_id:c.games_level_id,name:c.gamesName},!c.id){e.next=11;break}return s.id=c.id,e.next=8,l(d.update,s);case 8:r=e.sent,e.next=14;break;case 11:return e.next=13,l(d.save,s);case 13:r=e.sent;case 14:return e.next=16,o({type:"loadGamesSuccess",payload:r});case 16:u&&u(r);case 17:case"end":return e.stop()}},e,this)})},reducers:{resetState:function(e){return(0,c.default)({},e,l)},updateUrl:function(e,t){return(0,c.default)({},e,{img_url:t.payload.img_url})},loadGamesSuccess:function(e,t){var a=t.payload&&t.payload.data;return a?(a.gamesName=a.name,delete a.name,(0,c.default)({},e,a)):e}}},e.exports=t.default}});