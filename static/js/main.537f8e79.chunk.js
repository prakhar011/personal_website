(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"degree":"B.Tech Computer Science","school":"Graphic Era Deemed to be University","link":"https://www.geu.ac.in/","date":"Sep 2020 - Sept 2024","logo":"/assets/img/geulogo.png","courses":[{"name":"Web Development Bootcamp","link":"https://www.udemy.com/course/the-web-developer-bootcamp/"},{"name":"Modern React with Redux","link":"https://www.udemy.com/course/react-redux/"}],"onlineCourses":[{"name":"Mastering Data Structures and Algorithms","link":"https://www.udemy.com/certificate/UC-83541e06-9ea8-47e5-9c88-a47e3e07c19e/"},{"name":"100 Days of Code","link":"https://www.udemy.com/course/100-days-of-code/"}]}')},31:function(e){e.exports=JSON.parse('{"languages":["C++","C","Python","JavaScript","TypeScript","Java","HTML","CSS","Sass","SQL"],"libraries":["Node.js","React.js","Bootstrap","Express.js"],"tools":["Git","Linux","MongoDB","Bash"]}')},32:function(e){e.exports=JSON.parse('{"email":"prakharawasthi.pa57@gmail.com","linkedin":"https://www.linkedin.com/in/prakhar-awasthi-34aa781b5/","github":"https://github.com/prakhar011"}')},40:function(e){e.exports=JSON.parse('{"img":"/assets/img/iitachii.jpeg","interests":["Web Development","Competitive Programming","Machine Learning"]}')},47:function(e){e.exports=JSON.parse('{"projects":[{"title":"This Website!","skills":["TypeScript","Sass","HTML","React","Bootstrap"],"bullets":["Fully designed and built by me","<b>Bootstrap</b> used for responsive layout and as a <b>React</b> component library","<b>Sass</b> mixins used to efficiently style light and dark themes"],"githubLinks":["https://github.com/prakhar011/personal_website.git"]}]}')},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){"use strict";r.r(t);r(49);var c=r(0),n=r(17),a=r.n(n),s=r(13),i=r(33),o=r(28),l=r(44),j=r.n(l),d=r(1),h=function(e){return Object(d.jsx)(o.a.Link,{onSelect:function(){return j.a.scroller.scrollTo(e.section,{smooth:!0,offset:window.matchMedia("(min-width: 768px)").matches?-70:-350,duration:500})},href:"#"+e.section,children:e.section.charAt(0).toUpperCase()+e.section.slice(1)})},b=r(45),u=r.n(b),x=r(6),m=(r(69),["about","skills","projects","education","contact"]),O=function(e){return Object(d.jsxs)(i.a,{sticky:"top",collapseOnSelect:!0,expand:"md",variant:e.darkTheme?"dark":"light",bg:e.darkTheme?"dark":"light",className:"header",children:[Object(d.jsx)("label",{htmlFor:"theme-switch",children:Object(d.jsx)(u.a,{checked:e.darkTheme,onChange:function(){return e.toggleTheme()},onColor:"#814ad8",handleDiameter:30,uncheckedIcon:Object(d.jsx)(x.h,{className:"sun"}),checkedIcon:Object(d.jsx)(x.f,{className:"moon"}),boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:25,width:50,className:"theme-switch",id:"theme-switch"})}),Object(d.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(i.a.Collapse,{children:Object(d.jsx)(o.a,{className:"ml-auto",children:m.map((function(e){return Object(d.jsx)(h,{section:e})}))})})]})},p=r(12),f=r(14),g=r(7),k=r(46),w=r(16),y=function(e){var t=Object(c.useState)(!1),r=Object(s.a)(t,2),n=r[0],a=r[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),l=o[0],j=o[1],h=Object(c.useState)({word:e.words[l],forward:!0,charIndex:0}),b=Object(s.a)(h,2),u=b[0],x=b[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){u.forward?(u.charIndex<u.word.length&&x((function(e){return Object(w.a)(Object(w.a)({},e),{},{charIndex:e.charIndex+1})})),u.charIndex===u.word.length&&a(!0)):(u.charIndex>0&&x((function(e){return Object(w.a)(Object(w.a)({},e),{},{charIndex:e.charIndex-1})})),0===u.charIndex&&j((function(t){return(t+1)%e.words.length})))}),u.forward?e.forwardDelay:e.backDelay);return function(){return clearTimeout(t)}}),[u,e.words.length,e.forwardDelay,e.backDelay]),Object(c.useEffect)((function(){x((function(t){return Object(w.a)(Object(w.a)({},t),{},{word:e.words[l],forward:!0})}))}),[l,e.words]),Object(c.useEffect)((function(){if(n){var t=setTimeout((function(){x((function(e){return Object(w.a)(Object(w.a)({},e),{},{forward:!1})})),a(!1)}),e.pauseDelay);return function(){return clearTimeout(t)}}}),[n,e.pauseDelay]),Object(d.jsx)("span",{children:" "+u.word.substring(0,u.charIndex)})};y.defaultProps={forwardDelay:75,backDelay:50,pauseDelay:1e3};var N=y,v=function(e){var t=Object(c.useState)(!1),r=Object(s.a)(t,2),n=r[0],a=r[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){a((function(e){return!e}))}),e.blinkRate);return function(){return clearTimeout(t)}}),[n,e.blinkRate]),Object(d.jsx)("span",{style:n?void 0:{visibility:"hidden"},children:"|"})};v.defaultProps={blinkRate:530};var T=v,S=r(40),D=(r(70),function(){return Object(d.jsx)("section",{id:"about",children:Object(d.jsx)(p.a,{fluid:!0,children:Object(d.jsxs)(f.a,{className:"align-items-center",children:[Object(d.jsx)(g.a,{lg:5,children:Object(d.jsx)(k.a,{className:"about-itachi-img",src:"/personal_website"+S.img,roundedCircle:!0,fluid:!0})}),Object(d.jsxs)(g.a,{className:"about-intro",lg:6,children:[Object(d.jsxs)("h1",{children:["Prakhar",Object(d.jsx)("span",{className:"about-secondary-color",children:" Awasthi"}),Object(d.jsx)("hr",{})]}),Object(d.jsxs)("h2",{children:["Hello! I'm an aspiring Software Engineer passionate about",Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"about-secondary-color",children:Object(d.jsx)(N,{words:S.interests})}),Object(d.jsx)(T,{})]})]})]})})})}),C=r(8),I=r(20),B=r(31),L=(r(71),function(e){return Object(d.jsx)("section",{id:"skills",children:Object(d.jsxs)(p.a,{fluid:!0,children:[Object(d.jsxs)("h1",{children:["Skills ",Object(d.jsx)("hr",{})]}),Object(d.jsxs)(f.a,{className:"skill-cards",children:[Object(d.jsx)(g.a,{sm:"12",md:"12",lg:"4",children:Object(d.jsxs)(C.a,{className:"skill-card",bg:e.darkTheme?"dark":"light",text:e.darkTheme?"light":"dark",children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)("h2",{children:"Languages"})}),Object(d.jsx)(C.a.Body,{children:B.languages.map((function(e){return Object(d.jsx)(I.a,{pill:!0,variant:"primary",children:e})}))})]})}),Object(d.jsx)(g.a,{sm:"12",md:"6",lg:"4",className:"middle-card",children:Object(d.jsxs)(C.a,{className:"skill-card",bg:e.darkTheme?"dark":"light",text:e.darkTheme?"light":"dark",children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)("h2",{children:"Libraries & Frameworks"})}),Object(d.jsx)(C.a.Body,{children:B.libraries.map((function(e){return Object(d.jsx)(I.a,{pill:!0,variant:"primary",children:e})}))})]})}),Object(d.jsx)(g.a,{sm:"12",md:"6",lg:"4",children:Object(d.jsxs)(C.a,{className:"skill-card",bg:e.darkTheme?"dark":"light",text:e.darkTheme?"light":"dark",children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)("h2",{children:"Tools & Technologies"})}),Object(d.jsx)(C.a.Body,{children:B.tools.map((function(e){return Object(d.jsx)(I.a,{pill:!0,variant:"primary",children:e})}))})]})})]})]})})}),E=r(47),_=(r(72),function(e){return Object(d.jsx)("section",{id:"projects",children:Object(d.jsxs)(p.a,{fluid:!0,children:[Object(d.jsxs)("h1",{children:["Projects ",Object(d.jsx)("hr",{})]}),Object(d.jsx)(f.a,{className:"project-row",children:E.projects.map((function(t){return Object(d.jsx)(g.a,{lg:"4",md:"6",className:"card-col",children:Object(d.jsxs)(C.a,{bg:e.darkTheme?"dark":"light",text:e.darkTheme?"light":"dark",children:[Object(d.jsxs)(C.a.Header,{children:[Object(d.jsx)("h2",{children:t.title}),t.githubLinks.map((function(e){return Object(d.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(x.d,{className:"github-icon"})})}))]}),Object(d.jsxs)(C.a.Body,{children:[t.skills.map((function(e){return Object(d.jsx)(I.a,{pill:!0,variant:"primary",children:e})})),Object(d.jsx)("ul",{children:t.bullets.map((function(e){return Object(d.jsx)("li",{dangerouslySetInnerHTML:{__html:e}})}))})]})]})})}))})]})})}),H=r(79),J=(r(73),function(e){var t=Object(c.useState)(!1),r=Object(s.a)(t,2),n=r[0],a=r[1];return Object(d.jsxs)(p.a,{fluid:!0,id:"dropdown",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)(x.a,{className:n?"arrow-up":"arrow-down",onClick:function(){return a((function(e){return!e}))},size:40}),Object(d.jsx)(H.a,{in:n,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},unmountOnExit:!0,classNames:"dropdown-content",children:Object(d.jsx)("ul",{children:e.content.map((function(e){return Object(d.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(I.a,{pill:!0,variant:"primary",children:e.name})})}))})})]})}),R=r(23),M=(r(74),function(){return Object(d.jsx)("section",{id:"education",children:Object(d.jsxs)(p.a,{fluid:!0,children:[Object(d.jsxs)("h1",{children:["Education ",Object(d.jsx)("hr",{})]}),Object(d.jsxs)(f.a,{className:"education-row",children:[Object(d.jsxs)(g.a,{lg:"8",children:[Object(d.jsx)("h2",{children:R.degree}),Object(d.jsx)("h3",{className:"school-name",children:R.school}),Object(d.jsx)(x.b,{className:"map-marker"}),Object(d.jsx)("p",{className:"icon-text",children:R.date})]}),Object(d.jsx)(g.a,{lg:"4",className:"uw-logo-col",children:Object(d.jsx)("a",{href:R.link,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"/personal_website"+R.logo,className:"uw-logo",alt:"UW logo"})})})]}),Object(d.jsxs)(f.a,{className:"courses",children:[Object(d.jsx)(g.a,{lg:"6",children:Object(d.jsx)(J,{title:"Relevant Coursework",content:R.courses})}),Object(d.jsx)(g.a,{lg:"6",children:Object(d.jsx)(J,{title:"Online Coursework",content:R.onlineCourses})})]})]})})}),P=r(32),A=(r(75),function(){return Object(d.jsxs)("footer",{id:"contact",children:[Object(d.jsx)(x.g,{className:"copyright"}),Object(d.jsxs)("p",{children:[(new Date).getFullYear()," Prakhar Awasthi"]}),Object(d.jsx)("a",{href:"mailto:"+P.email,children:Object(d.jsx)(x.c,{className:"icon mail"})}),Object(d.jsx)("a",{href:P.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(x.e,{className:"icon"})}),Object(d.jsx)("a",{href:P.github,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(x.d,{className:"icon"})})]})}),F=(r(76),function(){var e=Object(c.useState)(function(){var e=(new Date).getHours();return!(e>=8&&e<18)}()),t=Object(s.a)(e,2),r=t[0],n=t[1];return Object(d.jsx)("div",{className:r?"theme-dark":"theme-light",children:Object(d.jsxs)("div",{className:"base",children:[Object(d.jsx)(O,{darkTheme:r,toggleTheme:function(){return n((function(e){return!e}))}}),Object(d.jsx)(D,{}),Object(d.jsx)(L,{darkTheme:r}),Object(d.jsx)(_,{darkTheme:r}),Object(d.jsx)(M,{}),Object(d.jsx)(A,{})]})})});a.a.render(Object(d.jsx)(F,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.537f8e79.chunk.js.map