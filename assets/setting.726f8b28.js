import{d as S,r as m,p as T,m as x,o as _,s as f,b as t,e,au as I,w as a,av as E,E as o,al as B,I as v,aw as g,R as c,Q as h,am as i,ax as k,c as j,ak as O,D as w,ao as D,T as U,ad as $,ay as J,y as r}from"./vendor.e32a42c8.js";import{i as L}from"./index.e4998242.js";var P="/assets/aria2-tip-1.e9ebfae4.png",V="/assets/aria2-tip-2.f3636f8d.png";const z={class:"list-page"},G=r(" \u7ED1\u5B9Atelegram "),M=o("p",null,null,-1),Q=r("Telegram\u7ED1\u5B9A"),R=o("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),H=r("aria2\u8BBE\u7F6E "),Z=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),q=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),K=o("img",{src:P,alt:""},null,-1),W=o("br",null,null,-1),X=o("br",null,null,-1),Y=o("img",{src:V,alt:""},null,-1),uu=r("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),eu=r("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),tu=r("\u4FDD\u5B58"),au=o("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),lu=o("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),su=o("a",{href:"https://github.com/mumuchenchen/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),ou=o("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),nu=o("a",{href:"https://t.me/mumuchenchen",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),iu=o("br",null,null,-1),Fu=S({setup(ru){const A=m(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),l=m({host:"",token:"",dir:!0}),b=()=>{let n={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};l.value.token&&n.params.splice(0,0,"token:"+l.value.token),fetch(l.value.host,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(u=>u.json()).then(u=>{u.error&&u.error.message?window.$message.error(u.error.message):u.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(l.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(u=>console.error("Error:",u))},F=m(!1),d=m({username:"",password:""}),y=T(),C=()=>{F.value?y.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{},onNegativeClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(d.value))}}):window.localStorage.removeItem("pikpakLoginData")};x(()=>{let n=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");n.dir===void 0&&(n.dir=!0),n.host&&(l.value=n);let u=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");u.username&&u.password&&(d.value=u,F.value=!0)});const p=m(),N=()=>{let n=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!n&&!n.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let u=p.value&&decodeURIComponent(p.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(u),!u||!u.length||u.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;L.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:n.access_token,thirdType:"TG",thirdToken:u[2]}).then(s=>{p.value="",s.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(n,u)=>(_(),f("div",z,[t(e(I),{"default-expanded-names":["-1","0","2"]},{default:a(()=>[t(e(E),{name:"-1"},{header:a(()=>[G,o("a",{onClick:u[0]||(u[0]=g(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[t(e(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[t(e(B))]),_:1})])]),default:a(()=>[t(e(c),{value:p.value,"onUpdate:value":u[1]||(u[1]=s=>p.value=s),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),M,t(e(h),{disabled:!p.value,type:"primary",onClick:N},{default:a(()=>[Q]),_:1},8,["disabled"]),R]),_:1}),t(e(E),{name:"0",title:"aria2\u8BBE\u7F6E"},{header:a(()=>[H,o("a",{onClick:u[2]||(u[2]=g(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[t(e(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[t(e(B))]),_:1})])]),default:a(()=>[t(e(D),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[t(e(i),{label:"aria2\u94FE\u63A5\uFF1A"},{default:a(()=>[t(e(c),{value:l.value.host,"onUpdate:value":u[3]||(u[3]=s=>l.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),t(e(i),{label:"aria2Token\uFF1A"},{default:a(()=>[t(e(c),{value:l.value.token,"onUpdate:value":u[4]||(u[4]=s=>l.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),t(e(i),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:a(()=>[t(e(k),{value:l.value.dir,"onUpdate:value":u[5]||(u[5]=s=>l.value.dir=s)},{checked:a(()=>[Z]),unchecked:a(()=>[q]),_:1},8,["value"])]),_:1}),l.value.host&&l.value.host.indexOf("https://")===-1&&l.value.host.indexOf("http://localhost")==-1&&l.value.host.indexOf("http://127.0.0.1")===-1?(_(),j(e(O),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:a(()=>[K,W,X,Y]),_:1})):w("",!0),t(e(i),null,{default:a(()=>[t(e(h),{type:"primary",onClick:b},{default:a(()=>[uu]),_:1})]),_:1})]),_:1})]),_:1}),t(e(E),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:a(()=>[eu,o("a",{onClick:u[6]||(u[6]=g(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[t(e(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[t(e(B))]),_:1})])]),default:a(()=>[t(e(D),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[t(e(i),{label:"\u662F\u5426\u5F00\u542F"},{default:a(()=>[t(e(k),{value:F.value,"onUpdate:value":u[7]||(u[7]=s=>F.value=s)},null,8,["value"])]),_:1}),F.value?(_(),f(U,{key:0},[t(e(i),{label:"\u7528\u6237\u540D"},{default:a(()=>[t(e(c),{value:d.value.username,"onUpdate:value":u[8]||(u[8]=s=>d.value.username=s),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),t(e(i),{label:"\u5BC6\u7801"},{default:a(()=>[t(e(c),{value:d.value.password,"onUpdate:value":u[9]||(u[9]=s=>d.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):w("",!0),t(e(i),null,{default:a(()=>[t(e(h),{type:"primary",onClick:C},{default:a(()=>[tu]),_:1})]),_:1})]),_:1})]),_:1}),t(e(E),{title:"\u5173\u4E8E",name:"2"},{default:a(()=>[t(e($),null,{default:a(()=>[au,lu,su,ou,nu]),_:1}),iu]),_:1}),t(e(E),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:a(()=>[t(e(J),{lines:A.value},null,8,["lines"])]),_:1})]),_:1})]))}});export{Fu as default};
