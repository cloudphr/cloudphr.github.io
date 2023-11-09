(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{8521:function(e,t,s){Promise.resolve().then(s.bind(s,7200))},7200:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return SQLGenPage}});var l=s(57437),a=s(2265),n=s(40467),c=s(87890),r=s(2668),i=s(52776),o=s(73753),d=s(61396),x=s.n(d),m=s(60664);let u="flex items-center border border-black p-1",isKey=(e,t)=>t.includes(e.name)||t.includes(e.cnName),type2type=(e,t)=>{switch(e){case"C":return"varchar2(".concat(t,")");case"N":return t?"number(".concat(t,")"):"number";case"D":return"date";case"T":return"timestamp";default:return e}},table2sql=e=>{let t="CREATE TABLE ".concat(e.name," (\n"),s=e.columns.map(e=>{let t=type2type(e.type,e.length);return"  ".concat(e.name," ").concat(t)}).join(",\n"),l=e.columns.filter(e=>e.comment).map(t=>"COMMENT ON COLUMN ".concat(e.name,".").concat(t.name," IS '").concat(t.comment,"';")),a="".concat(t).concat(s," \n);")+l.join("\n");return(0,o.WU)(a)};var item=e=>{let{table:t,conflict:s}=e,[n,c]=(0,a.useState)(void 0),r=t.keys?t.keys.split("、"):[],onToggleCodeBlock=e=>{n===e?c(void 0):c(e)},renderRef=e=>s?(0,l.jsxs)("div",{className:"text-red-500",children:["Error: ",e.name]}):(0,l.jsx)(x(),{className:"text-green-500",href:"#".concat(e.id),children:e.name});return(0,l.jsxs)("div",{id:t.id,className:"mt-10",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center text-2xl font-bold py-2",children:[t.id," ",t.cnName,"（",t.name,"）",(0,l.jsx)("span",{className:"font-normal text-sm  text-white cursor-pointer",onClick:()=>onToggleCodeBlock(t.id),children:n===t.id?(0,l.jsx)("span",{className:"rounded bg-yellow-500 px-2 py-1",children:"hide"}):(0,l.jsx)("span",{className:"rounded bg-green-500 px-2 py-1",children:"show"})})]}),n===t.id&&(0,l.jsx)("div",{className:"px-20 pt-5 pb-20",children:(0,l.jsx)(m.Z,{lang:"sql",code:table2sql(t)})}),t.columns&&t.columns.length>0&&(0,l.jsxs)("div",{className:"border border-black",children:[(0,l.jsxs)("div",{className:"flex flex-row text-white bg-gray-500",children:[(0,l.jsx)("div",{className:"w-2/12 ".concat(u),children:"字段中文名称"}),(0,l.jsx)("div",{className:"w-3/12 ".concat(u),children:"字段名"}),(0,l.jsx)("div",{className:"w-1/12 ".concat(u),children:"类型"}),(0,l.jsx)("div",{className:"w-1/12 ".concat(u),children:"长度"}),(0,l.jsx)("div",{className:"w-1/12 ".concat(u),children:"引用"}),(0,l.jsx)("div",{className:"w-4/12 ".concat(u),children:"说明"})]}),t.columns.map(e=>(0,l.jsxs)("div",{className:"flex flex-row ".concat(isKey(e,r)&&"bg-green-200"),children:[(0,l.jsx)("div",{className:"w-2/12 ".concat(u),children:e.cnName}),(0,l.jsx)("div",{className:"w-3/12 ".concat(u),children:e.name}),(0,l.jsx)("div",{className:"w-1/12 ".concat(u),children:e.type}),(0,l.jsx)("div",{className:"w-1/12 ".concat(u),children:e.length}),(0,l.jsx)("div",{className:"w-1/12 ".concat(u),children:e.ref&&renderRef(e.ref)}),(0,l.jsx)("div",{className:"w-4/12 ".concat(u),children:e.comment})]},e.name))]}),t.keys&&(0,l.jsxs)("div",{className:"text-green-500 font-bold",children:["主键：",r.join(" / ")]}),t.indices&&(0,l.jsxs)("div",{className:"text-blue-500 font-bold",children:["索引：",t.indices]}),t.comment&&(0,l.jsxs)("div",{className:"text-gray-500 font-bold",children:["注释： ",t.comment]})]})},list=e=>{let{tables:t}=e;return 0===t.length?(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-4",children:[(0,l.jsx)("div",{className:"text-2xl",children:"No tables found!"}),(0,l.jsx)("button",{className:"rounded bg-blue-500 text-white py-2 px-4",onClick:()=>{localStorage.removeItem("tables"),window.location.reload()},children:"重新上传"})]}):(0,l.jsx)(l.Fragment,{children:t.map(e=>{let s=t.find(t=>t.id===e.id),a=(null==s?void 0:s.cnName)!==e.cnName;return(0,l.jsx)(item,{table:e,conflict:a},e.id)})})},h=s(99543);function SQLGenPage(){let[e,t]=(0,a.useState)(),[s,o]=(0,a.useState)(!1);(0,i.Z)("DocMan");let onProcess=async e=>{if(!e){alert("No file selected");return}let t=await e.text();o(!0),localStorage.setItem("tables",t),o(!1)};return(0,a.useEffect)(()=>{{let e=localStorage.getItem("tables");if(e){let s=JSON.parse(e);t(s)}}},[]),(0,l.jsx)(c.Z,{banner:(0,l.jsx)(n.Z,{parts:["Doc","Man","for","Databases","managing the data structures of ER models"]}),navbar:(0,l.jsx)(h.Z,{logo:"/docman.png",name:"DocMan"}),children:e?(0,l.jsx)("div",{className:"mt-16 px-24",children:(0,l.jsx)(list,{tables:e})}):(0,l.jsx)("div",{className:"w-full h-full flex flex-col items-center justify-center pt-10 pb-24",children:(0,l.jsx)(r.Z,{title:"JSON File",suffix:"json",onProcess:onProcess})})})}},99543:function(e,t,s){"use strict";var l=s(57437),a=s(16691),n=s.n(a),c=s(24860);t.Z=e=>{let{logo:t,name:s}=e;return(0,l.jsxs)("div",{className:"fixed z-50 w-full flex items-center justify-between h-12 shadow-md bg-white",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center space-x-10 ml-6",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[t&&(0,l.jsx)(n(),{src:t,alt:"SQLGen",width:"24",height:"24"}),(0,l.jsx)("span",{children:s})]}),(0,l.jsx)("div",{className:"flex flex-row items-center space-x-4"})]}),(0,l.jsxs)("div",{className:"flex flex-row items-center space-x-2 mr-6",children:[(0,l.jsx)(c.Z,{name:"download"}),(0,l.jsx)(c.Z,{name:"settings"})]})]})}},2668:function(e,t,s){"use strict";var l=s(57437),a=s(24860);t.Z=e=>{let{title:t,suffix:s,type:n,onProcess:c}=e,handleUpload=async e=>{var t;e.preventDefault();let s=null===(t=e.target.files)||void 0===t?void 0:t[0];await c(s),e.target.value=""};return"button"===n?(0,l.jsxs)("label",{htmlFor:"dropzone-file",className:"w-20 h-20 flex items-center justify-center text-2xl border rounded-full bg-blue-500 text-white cursor-pointer",children:[(0,l.jsx)("span",{className:"w-full h-full flex items-center justify-center",children:t}),(0,l.jsx)("input",{id:"dropzone-file",type:"file",className:"hidden",onChange:handleUpload})]}):(0,l.jsxs)("label",{htmlFor:"dropzone-file",className:"mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center",children:[(0,l.jsx)(a.Z,{name:"upload",size:32,color:"#057bff"}),(0,l.jsx)("h2",{className:"mt-4 text-xl font-medium text-gray-700 tracking-wide",children:t}),(0,l.jsxs)("p",{className:"mt-2 text-gray-500 tracking-wide",children:["Click and upload your ",s," file here."]}),(0,l.jsx)("input",{id:"dropzone-file",type:"file",accept:".".concat(s),className:"hidden",onChange:handleUpload})]})}},40467:function(e,t,s){"use strict";var l=s(57437);t.Z=e=>{let{parts:t}=e;return(0,l.jsxs)("div",{className:"flex flex-col items-center mb-16 space-y-2 cursor-default",children:[(0,l.jsxs)("h1",{className:"font-bold text-7xl",children:[(0,l.jsx)("span",{className:"text-[#057bff]",children:t[0]}),(0,l.jsx)("span",{className:"text-[#ff9102]",children:t[1]}),t[2]&&(0,l.jsx)("span",{className:"text-4xl text-gray-400 mx-3",children:t[2]}),(0,l.jsx)("span",{className:"text-4xl",children:t[3]})]}),(0,l.jsx)("span",{className:"text-xl text-thin text-gray-400",children:t[4]})]})}},87890:function(e,t,s){"use strict";s.d(t,{Z:function(){return layout_HomeLayout}});var l=s(57437),components_CopyRight=e=>{let{company:t}=e;return(0,l.jsx)("div",{className:"w-full h-32 flex items-center justify-center bottom-0 border-t border-t-gray-100",children:(0,l.jsxs)("div",{className:"text-gray-400",children:["\xa9 ",new Date().getFullYear()," ",null!=t?t:"CloudPHR Group"]})})},layout_HomeLayout=e=>{let{banner:t,navbar:s,children:a}=e;return(0,l.jsxs)("main",{className:"relative flex min-h-screen flex-col items-center justify-between",children:[s,(0,l.jsx)("div",{className:s?"h-12":""}),(0,l.jsxs)("div",{className:"my-24 space-y-24",children:[(0,l.jsx)("div",{className:"",children:t}),a]}),(0,l.jsx)(components_CopyRight,{})]})}},52776:function(e,t,s){"use strict";var l=s(2265);t.Z=e=>{(0,l.useEffect)(()=>{document.title=e},[e])}},60664:function(e,t,s){"use strict";var l=s(57437),a=s(2265),n=s(93152),c=s(86517),r=s(84042),i=s(24860);s(82995),n.Z.registerLanguage("sql",r.Z),n.Z.registerLanguage("json",c.Z),t.Z=e=>{let{lang:t,code:s}=e,c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{c.current&&n.Z.highlightBlock(c.current)},[s]),(0,l.jsxs)("div",{className:"relative w-full h-full rounded-md pb-4",children:[(0,l.jsxs)("div",{className:"absolute w-full flex flex-row items-center justify-between rounded-t-md text-xs text-gray-200 bg-gray-800 px-4 py-2",children:[(0,l.jsx)("div",{className:"",children:t}),(0,l.jsxs)("button",{className:"flex flex-row space-x-1 rounded-md px-2",onClick:()=>{let e=c.current;if(e){let t=document.createRange();t.selectNodeContents(e);let s=window.getSelection();null==s||s.removeAllRanges(),null==s||s.addRange(t),document.execCommand("copy")}},children:[(0,l.jsx)(i.Z,{name:"copy"})," ",(0,l.jsx)("span",{children:"Copy code"})]})]}),(0,l.jsx)("pre",{className:"h-full w-full pt-8 overflow-auto rounded-md",children:(0,l.jsx)("code",{ref:c,className:"h-full rounded-b-md ".concat(t),children:s})})]})}},24860:function(e,t,s){"use strict";s.d(t,{Z:function(){return icon}});var l=s(57437);let a=(0,l.jsx)("path",{d:"M19.8 4.2a1 1 0 1 0-1.4-1.4L12 10.6 5.6 4.2a1 1 0 1 0-1.4 1.4L10.6 12l-6.4 6.4a1 1 0 1 0 1.4 1.4L12 13.4l6.4 6.4a1 1 0 1 0 1.4-1.4L13.4 12l6.4-6.4z"}),n=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),(0,l.jsx)("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"})]}),c=(0,l.jsx)("path",{d:"M14.7928932,11.5 L11.6464466,8.35355339 C11.4511845,8.15829124 11.4511845,7.84170876 11.6464466,7.64644661 C11.8417088,7.45118446 12.1582912,7.45118446 12.3535534,7.64644661 L16.3535534,11.6464466 C16.5488155,11.8417088 16.5488155,12.1582912 16.3535534,12.3535534 L12.3535534,16.3535534 C12.1582912,16.5488155 11.8417088,16.5488155 11.6464466,16.3535534 C11.4511845,16.1582912 11.4511845,15.8417088 11.6464466,15.6464466 L14.7928932,12.5 L4,12.5 C3.72385763,12.5 3.5,12.2761424 3.5,12 C3.5,11.7238576 3.72385763,11.5 4,11.5 L14.7928932,11.5 Z M16,4.5 C15.7238576,4.5 15.5,4.27614237 15.5,4 C15.5,3.72385763 15.7238576,3.5 16,3.5 L19,3.5 C20.3807119,3.5 21.5,4.61928813 21.5,6 L21.5,18 C21.5,19.3807119 20.3807119,20.5 19,20.5 L16,20.5 C15.7238576,20.5 15.5,20.2761424 15.5,20 C15.5,19.7238576 15.7238576,19.5 16,19.5 L19,19.5 C19.8284271,19.5 20.5,18.8284271 20.5,18 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L16,4.5 Z",transform:"rotate(90 12.5 12)"}),r=(0,l.jsx)("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"}),i=(0,l.jsx)("path",{d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"});var o={close:{viewBox:"0 0 24 24",scale:.8,path:a,fill:!0,stroke:2},copy:{viewBox:"0 0 24 24",scale:.8,path:n,fill:!1,stroke:2},download:{viewBox:"0 0 24 24",scale:.9,path:c,fill:!0,stroke:.8},settings:{viewBox:"0 0 16 16",scale:.8,path:r,fill:!1,stroke:!0},upload:{viewBox:"0 0 24 24",scale:.9,path:i,fill:!1,stroke:2}},icon=e=>{let{name:t,size:s=20,color:a,onClick:n}=e,c=o[t]||{},r=c.scale||1;return(0,l.jsx)("div",{style:{color:a},onClick:n,children:(0,l.jsx)("svg",{width:s*r,height:s*r,strokeWidth:c.stroke&&0!==c.stroke?"".concat(c.stroke):"1.5",stroke:!1===c.stroke||0===c.stroke?"transparent":"currentColor",strokeLinecap:"round",strokeLinejoin:"round",fill:c.fill?"currentColor":"transparent",viewBox:c.viewBox||"0 0 32 32",children:c.path})})}},61396:function(e,t,s){e.exports=s(68326)}},function(e){e.O(0,[326,986,696,753,971,472,744],function(){return e(e.s=8521)}),_N_E=e.O()}]);