"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{1378:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,a,s,o,d,l,c,x,u,p,m=t(168),h=t(7402),f=h.Z.div(r||(r=(0,m.Z)(["\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=h.Z.p(i||(i=(0,m.Z)(["\n  text-align: center;\n  margin: 0;\n  font-size: 25px;\n  font-weight: 500;\n"]))),b=h.Z.form(a||(a=(0,m.Z)(["\n  margin-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),j=h.Z.button(s||(s=(0,m.Z)(["\n  font-size: 16px;\n  background-color: #d601d6;\n  color: white;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    color: orange;\n    transition: 500ms;\n  }\n"]))),v=h.Z.ul(o||(o=(0,m.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style-position: inside;\n  width: 250px;\n\n  @media (min-width: 468px) {\n    width: 400px;\n  }\n\n  @media (min-width: 768px) {\n    width: 500px;\n  }\n"]))),w=h.Z.li(d||(d=(0,m.Z)(["\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #1dd2ff;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Z=h.Z.p(l||(l=(0,m.Z)(["\n  font-size: 20px;\n  color: white;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  svg {\n    margin-right: 5px;\n  }\n"]))),y=h.Z.label(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  margin-bottom: 10px;\n"]))),k=h.Z.input(x||(x=(0,m.Z)(["\n  width: 250px;\n\n  @media (min-width: 468px) {\n    width: 400px;\n  }\n\n  @media (min-width: 768px) {\n    width: 500px;\n  }\n  height: 25px;\n  outline: none;\n  border-radius: 2px;\n  border: 1px solid gray;\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: orange;\n    transition: 500ms;\n  }\n"]))),C=h.Z.input(u||(u=(0,m.Z)(["\n  width: 250px;\n\n  @media (min-width: 468px) {\n    width: 400px;\n  }\n\n  @media (min-width: 768px) {\n    width: 500px;\n  }\n  height: 25px;\n  outline: none;\n  border-radius: 2px;\n  border: 1px solid gray;\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: orange;\n    transition: 500ms;\n  }\n"]))),z=h.Z.button(p||(p=(0,m.Z)(["\n  background-color: white;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  &:hover,\n  &:focus {\n    color: red;\n    transition: 500ms;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"]))),A=t(9434),K=t(1538),I=t(3634),T=t(4373),F=t(9126),_=t(184),q=function(){var n=(0,A.I0)(),e=(0,A.v9)(K.K2);return(0,_.jsxs)(b,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements[0].value,i=t.currentTarget.elements[1].value;if(e.some((function(n){return n.name===r})))return window.alert("".concat(r," is already in contacts")),void t.currentTarget.reset();n((0,I.uK)({name:r,number:i})),t.currentTarget.reset()},children:[(0,_.jsxs)(y,{children:[(0,_.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(T.KQH,{})," Name"]}),(0,_.jsx)(k,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)(y,{children:[(0,_.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(F.lfG,{})," Number"]}),(0,_.jsx)(k,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(j,{type:"submit",children:"Add contact"})]})},G=t(4808),H=function(){var n=(0,A.I0)();return(0,_.jsxs)(y,{children:["Find contacts by name",(0,_.jsx)(C,{type:"text",name:"filter",onChange:function(e){n((0,G.Tv)(e.currentTarget.value))}})]})},N=t(8820),Q=function(n){var e=n.name,t=n.number,r=n.id,i=(0,A.I0)(),a=(0,A.v9)(K.Vc);return(0,_.jsxs)(w,{children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)(Z,{children:[(0,_.jsx)(T.KQH,{}),e]}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(F.lfG,{}),t]})]}),(0,_.jsx)(z,{onClick:function(){return i((0,I.GK)(r))},disabled:a,children:(0,_.jsx)(N.oHP,{})})]})},D=function(){var n=(0,A.v9)(G.AD),e=(0,A.v9)(K.K2);return(0,_.jsx)(v,{children:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())})).map((function(n){var e=n.name,t=n.id,r=n.number;return(0,_.jsx)(Q,{name:e,number:r,id:t},t)}))})},L=t(2606),P=t(8966),V=t(2791),B=t(4270),E=function(){var n=(0,A.v9)(K.Vc),e=(0,A.v9)(K.K2),t=(0,A.I0)();return(0,V.useEffect)((function(){t((0,I.yF)())}),[t]),(0,_.jsxs)(L.z,{children:[(0,_.jsx)(B.q,{children:(0,_.jsx)("title",{children:"Contacts"})}),(0,_.jsxs)(f,{children:[(0,_.jsx)(g,{children:"Add new contact"}),(0,_.jsx)(q,{}),n&&(0,_.jsx)(L.Q,{children:(0,_.jsx)(P.g4,{color:"orange"})}),0!==e.length&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(H,{}),(0,_.jsx)(D,{})]})]})]})}}}]);
//# sourceMappingURL=378.ddb1bd3c.chunk.js.map