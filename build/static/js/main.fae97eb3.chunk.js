(this["webpackJsonpbaat-cheet"]=this["webpackJsonpbaat-cheet"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a.n(c),r=a(16),i=a.n(r),l=(a(49),a(13)),o=(a(50),a(9)),u=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?Object(s.jsx)("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(s.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:t.text})},j=function(e){var t=e.lastMessage,a=e.message,c=!t||t.sender.username!==a.sender.username;return Object(s.jsxs)("div",{className:"message-row",children:[c&&Object(s.jsx)("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?Object(s.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:c?"4px":"48px"}}):Object(s.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:c?"4px":"48px"},children:a.text})]})},m=a(10),d=a(95),b=a(96),h=function(e){var t=Object(c.useState)(""),a=Object(m.a)(t,2),n=a[0],r=a[1],i=e.chatId,l=e.creds,u=function(e){e.preventDefault();var t=n.trim();t.length>0&&Object(o.i)(l,i,{text:t}),r("")};return Object(s.jsxs)("form",{className:"message-form",onSubmit:u,children:[Object(s.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:n,onChange:function(t){r(t.target.value),Object(o.f)(e,i)},onSubmit:u}),Object(s.jsx)("label",{htmlFor:"upload-button",children:Object(s.jsx)("span",{className:"image-button",children:Object(s.jsx)(d.a,{className:"picture-icon"})})}),Object(s.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(o.i)(l,i,{files:e.target.files,text:""})}.bind(undefined)}),Object(s.jsx)("button",{type:"submit",className:"send-button",children:Object(s.jsx)(b.a,{className:"send-icon"})})]})},g=function(e){var t=e.chats,a=e.activeChat,c=e.userName,n=e.messages,r=t&&t[a],i=function(e,t){return r.people.map((function(a,c){return a.last_read===e.id&&Object(s.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(c))}))};return r?Object(s.jsxs)("div",{className:"chat-feed",children:[Object(s.jsxs)("div",{className:"chat-title-container",children:[Object(s.jsx)("div",{className:"chat-title",children:null===r||void 0===r?void 0:r.title}),Object(s.jsx)("div",{className:"chat-subtitle",children:r.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(n);return e.map((function(t,a){var r=n[t],l=0===a?null:e[a-1],o=c===r.sender.username;return Object(s.jsxs)("div",{style:{width:"100%"},children:[Object(s.jsx)("div",{className:"message-block",children:o?Object(s.jsx)(u,{message:r}):Object(s.jsx)(j,{message:r,lastMessage:n[l]})}),Object(s.jsx)("div",{className:"read-receipts",style:{marginRight:o?"18px":"0px",marginLeft:o?"0px":"68px"},children:i(r,o)})]},"msg_".concat(a))}))}(),Object(s.jsx)("div",{style:{height:"100px"}}),Object(s.jsx)("div",{className:"message-form-container",children:Object(s.jsx)(h,Object(l.a)(Object(l.a)({},e),{},{chatId:a}))})]}):Object(s.jsx)("div",{})},p=a(23),x=a.n(p),O=a(42),f=a(4),v=a.n(f),N=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(m.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(""),j=Object(m.a)(u,2),d=j[0],b=j[1],h=function(){var e=Object(O.a)(x.a.mark((function e(t){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"ce21f49e-6214-4212-abef-0ec1e0089e0b","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,v.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Oops, incorrect credentials.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("h1",{className:"title",children:"Welcome to Baat Cheet!"}),Object(s.jsx)("p",{className:"sub-title",children:"This is an invite based chat platform."}),Object(s.jsxs)("form",{onSubmit:h,children:[Object(s.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(s.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(s.jsx)("div",{align:"center",children:Object(s.jsx)("button",{type:"submit",className:"button",children:Object(s.jsx)("span",{children:"Hop In"})})})]}),Object(s.jsx)("h1",{children:d})]})})},y=function(){return localStorage.getItem("username")?Object(s.jsx)(o.a,{height:"100vh",projectID:"ce21f49e-6214-4212-abef-0ec1e0089e0b",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(s.jsx)(g,Object(l.a)({},e))},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):Object(s.jsx)(N,{})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),w()}},[[93,1,2]]]);
//# sourceMappingURL=main.fae97eb3.chunk.js.map