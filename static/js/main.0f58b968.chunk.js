(this.webpackJsonpmypersonalsite=this.webpackJsonpmypersonalsite||[]).push([[0],{48:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),i=a.n(r),l=(a(53),a(16)),c=a(80),s=a(82),m=a(85),u=a(24);var p=function(){var e=Object(n.useState)("#dbe2ef"),t=Object(l.a)(e,2),a=t[0],r=t[1];function i(e){r(e),window.scrollTo(0,0)}return o.a.createElement("div",{className:"container fixed-bottom"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(c.a,{position:"relative",className:"col-xl-4 col-lg-5 col-md-6 col-11 mx-auto justify-content-center shadow-lg",style:{backgroundColor:a,bottom:"20px",alignItems:"center",borderRadius:"15px"}},o.a.createElement(s.a,null,o.a.createElement(u.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(m.a,{onClick:function(){return i("#dbe2ef")},className:"mr-3",variant:"contained",style:{backgroundColor:"#dbe2ef",color:"#FFFF"}},"Home")),o.a.createElement(u.b,{to:"/Portfolio",style:{textDecoration:"none"}},o.a.createElement(m.a,{onClick:function(){return i("#fab2ac")},className:"mr-3",variant:"contained",style:{backgroundColor:"#fab2ac",color:"#FFFF"}},"Portfolio")),o.a.createElement(u.b,{to:"/Resume",style:{textDecoration:"none"}},o.a.createElement(m.a,{onClick:function(){return i("#eda1c1")},variant:"contained",style:{backgroundColor:"#eda1c1",color:"#FFFF"}},"Resume"))))))},d=[{projectType:"game",id:"9",name:"Covid Buster",image:"/images/covid-buster.jpg",imageOnHover:"/images/covid-buster.gif",github:"https://github.com/samreality4/covidbuster",description:"Don't like covid-19? Let's buster it.  This is my first take on python by making a covid themed space invader game. It is accompanied with pretty cool sounds and music. "},{projectType:"mobile",id:"8",name:"Android & IOS App - expireman",image:"/images/exp.jpg",imageOnHover:"/images/exp.jpg",url:"https://play.google.com/store/apps/details?id=com.expireman&hl=en_US",url2:"https://apps.apple.com/us/app/expireman/id1518500759",description:"Never forgets! If you have snacks, soda, vitamin pills, or other any kind of items that has an expiration date, and they have all went into the trash can and none were actually used and eaten. expireman is here to help."},{id:"1",name:"CoAI",image:"/images/coai.png",imageOnHover:"/images/coai.png",url:"https://coai2020sxg.herokuapp.com/",github:"https://github.com/samreality4/CoAI",description:"A helper search engine for coder to storage their solutions codes for problems that came up during development."},{id:"5",name:"ColBloc",image:"/images/colbloc.png",imageOnHover:"/images/colbloc.png",url:"https://colbloc.herokuapp.com/",github:"https://github.com/samreality4/newblog",description:"Colbloc is a blog filled with explosive amount of gradient colors. "},{id:"4",name:"Super Lucky",image:"/images/superlucky.png",imageOnHover:"/images/superlucky.png",url:"https://superlucky.herokuapp.com/",github:"https://github.com/samreality4/SuperLucky",description:"Super Lucky is a set of tools to find the luckiest number for the CA Super Lotto game. "},{id:"6",name:"Free Code Camp Portfolio",image:"/images/fccportfolio.png",imageOnHover:"/images/fccportfolio.png",url:"https://samreality4.github.io/FCCPortfolioSite/",github:"https://github.com/samreality4/FCCPortfolioSite",description:"A portfolio showcasing all the projects from Free Code Camp."},{id:"2",name:"BlogSite",image:"/images/blogsite.png",imageOnHover:"/images/blogsite.png",url:"https://agile-dawn-25296.herokuapp.com/",github:"https://github.com/samreality4/blogsite",description:"A fun blog site that logs daily posts."},{id:"3",name:"TinDog",image:"/images/tindog.png",imageOnHover:"/images/tindog.png",url:"https://samreality4.github.io/tindogmaster/",github:"https://github.com/samreality4/tindogmaster",description:"Tinder for dogs front end design."},{id:"7",name:"Android App - ChoosU",image:"/images/choosu.png",imageOnHover:"/images/choosu.png",url:"https://play.google.com/store/apps/details?id=com.SXG.sam.choosu&hl=en_US",github:"https://github.com/samreality4/ChoosU",description:"So many good restaurants!!! I don\u2019t know what to choose!!! Indecisive people fear not!!! This is a randomizer that takes the pool of restaurants from Yelp you want to go and choose one at random for you!"}],g=a(61),f=a(83),h=a(86);var b=function(e){var t=Object(n.useState)(2),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(e.image),s=Object(l.a)(c,2),m=s[0],u=s[1];return o.a.createElement("div",{key:e.key,id:e.id,className:"row p-0 col-lg-4 col-md-6 mt-4 mb-5 justify-content-center"},o.a.createElement(h.a,{in:!0,timeout:{appear:1e3,enter:1e3,exit:1e3}},o.a.createElement(g.a,{className:"row p-3 justify-content-center",style:{backgroundColor:"#fab2ac"},elevation:r,onMouseEnter:function(){i(15),u((function(t){return t===e.imageOnHover?t:e.imageOnHover}))},onMouseLeave:function(){i(2),u((function(t){return t===e.image?t:e.image}))}},o.a.createElement(g.a,{className:"shadow",elevation:2,style:{width:"20rem"}},o.a.createElement("h2",{className:"project-text"},e.name),o.a.createElement("img",{className:"d-block m-2",style:{width:"302px",height:"250px"},src:m,alt:"project images"}),o.a.createElement("p",null,o.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},"mobile"===e.projectType?"Google Play Store":"game"!==e.projectType&&"Link")),e.github?o.a.createElement("p",null,o.a.createElement("a",{href:e.github,rel:"noopener noreferrer",target:"_blank"},"Github")):null,e.urltwo?o.a.createElement("p",null,o.a.createElement("a",{href:e.urltwo,rel:"noopener noreferrer",target:"_blank"},"mobile"===e.projectType?"Apple App Store":"Link")):null,o.a.createElement(f.a,null),o.a.createElement("div",{className:"project-text text-left p-4"},o.a.createElement("h5",null,"Description:"),o.a.createElement("p",null," ",e.description))))))};var y=function(){return o.a.createElement("div",{className:"container-fluid p-0 row m-0 mb-5 justify-content-center text-center"},d.map((function(e){return o.a.createElement(b,{name:e.name,projectType:e.projectType,id:e.id,image:e.image,imageOnHover:e.imageOnHover,url:e.url,urltwo:e.url2,github:e.github,description:e.description})})))};var v=function(){return o.a.createElement("div",{className:"container-fluid p-0 row m-0 mb-5 justify-content-center"},o.a.createElement(h.a,{in:!0,timeout:{appear:1e3,enter:1e3,exit:1e3}},o.a.createElement(g.a,{className:"row p-0 col-lg-8 col-sm-10 col-11 justify-content-center m-4 shadow-lg",style:{backgroundColor:"#eda1c1"},elevation:2},o.a.createElement("a",{className:"m-3",href:"https://drive.google.com/open?id=1OsUaj0mA3fvK-_KgZ4k2Pmw9nrLOJkvr",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{alt:"resume",className:"img-fluid w-100",src:"/images/resume.jpg"})))))},E=a(13),x=a.n(E),k=a(25),w=a(11);var j=function(){var e=Object(w.c)({from:{display:"inline-block",position:"absolute",right:"50%",bottom:"50%",opacity:"0"},to:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({right:"60%",opacity:"1"});case 3:return e.next=5,t({right:"70%",opacity:"0"});case 5:e.next=0;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),config:{duration:1e4}}),t=Object(w.c)({from:{display:"inline-block",position:"absolute",left:"50%",bottom:"30%",opacity:"0"},to:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({left:"60%",opacity:"1"});case 3:return e.next=5,t({left:"70%",opacity:"0"});case 5:e.next=0;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),config:{duration:1e4}}),a=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},n=Object(w.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),r=Object(l.a)(n,2),i=r[0],c=r[1];return o.a.createElement("div",{className:"container-fluid p-0 row m-0 justify-content-center"},o.a.createElement(h.a,{in:!0,timeout:{appear:1e3,enter:1e3,exit:1e3}},o.a.createElement(g.a,{className:"home row col-11 justify-content-center m-4 shadow-lg",style:{backgroundColor:"#dbe2ef"},elevation:2},o.a.createElement("div",{className:"top-container container-fluid text-center",style:{backgroundColor:"#dbe2ef",position:"relative",paddingTop:"100px"}},o.a.createElement("h1",null,"I am Sam."),o.a.createElement("h2",null,"Software Developer"),o.a.createElement(w.a.div,{style:e},o.a.createElement("img",{className:"d-inline top-cloud img-fluid",src:"/images/cloud.png",alt:"cloud-png"})),o.a.createElement(w.a.div,{style:t},o.a.createElement("img",{className:"bottom-cloud img-fluid",src:"/images/cloud.png",alt:"cloud-png"})),o.a.createElement("img",{className:"mountain img-fluid mx-auto",src:"/images/mountain.png",alt:"mountain"})),o.a.createElement("div",{className:"middle-container text-center mt-2 mb-5",style:{backgroundColor:"#FFFF",padding:"50px"}},o.a.createElement("div",{className:"profile mb-5"},o.a.createElement("div",null,o.a.createElement(w.a.div,{onMouseMove:function(e){var t=e.clientX,n=e.clientY;return c({xys:a(t,n)})},onMouseLeave:function(){return c({xys:[0,0,1]})},style:{transform:i.xys.interpolate((function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")}))}},o.a.createElement("img",{className:"profile-image mt-2",src:"/images/profile.jpg",alt:"profile",style:{height:"200px",width:"200px",marginTop:"35px",marginBottom:"50px",borderRadius:"50%",boxShadow:"10px 10px 30px #8dc6ff"}}))),o.a.createElement("h2",null,"Hello. \u4f60\u597d. \u3053\u3093\u306b\u3061\u308f. Bonjour."),o.a.createElement("p",null,"I am a builder and a problem solver.")),o.a.createElement("hr",null),o.a.createElement("div",{className:"skills mt-5"},o.a.createElement("h2",null,"My Skills."),o.a.createElement("div",{className:"skill-one container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4"},o.a.createElement("img",{src:"/images/coding.gif",alt:"coding",style:{width:"250px",height:"200px",borderRadius:"15%"}}),o.a.createElement("div",{className:"col-lg-8 col-md-7"},o.a.createElement("h3",null,"Software Development"),o.a.createElement("p",{className:"text-left"},"\u2002 I personally enjoy building tools and games, squash annoying bugs, and fixing things. I have built a restaurant randomizer android app, co-oped in building an NBA player stats app with my software engineering buddy, started a website for coders to record their solutions to bugs, and deployed a mobile app that records and reminds the user of expired and expiring items. Hoping to build my own accounting software suite one day(with VR or AR)!"))),o.a.createElement("div",{className:"skill-two container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4"},o.a.createElement("div",{className:"col-lg-8 col-md-7"},o.a.createElement("h3",null,"Hook Shot"),o.a.createElement("p",{className:"text-left"},"\u2002 I am proficient in doing hook shots from either left or right hand. I have been practicing this shot since I was 13 years old. I am known as Kareem by my peers. Though I am also working on my stepback threes and other range games, but my hoopshot has proven to be my go to move."," ")),o.a.createElement("img",{src:"/images/hookshot.gif",alt:"hookshot",style:{width:"250px",height:"200px",borderRadius:"15%"}}))),o.a.createElement("hr",null),o.a.createElement("div",{className:"contact-me mt-5"},o.a.createElement("h2",null,"Get In Touch."),o.a.createElement("a",{href:"mailto:samaudacity2@gmail.com",style:{textDecoration:"none"}},o.a.createElement(m.a,{variant:"contained",style:{backgroundColor:"#3f72af",color:"#FFFF"}},"CONTACT ME")),o.a.createElement("br",null))))))},O=a(18),N=a(84),C=a(8);var S=Object(C.a)({colorPrimary:{backgroundColor:"#e1f2fb"},barColorPrimary:{backgroundColor:"#f3dfe3"}})(N.a),F=function(){var e=Object(n.useRef)(),t=Object(w.c)({from:{position:"absolute",bottom:"50%",left:"0%",transform:"rotate(0deg)"},to:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({left:"43%",transform:"rotate(360deg)"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ref:e,config:{mass:5}}),a=Object(n.useRef)(),r=Object(w.c)({from:{display:"inline-block",position:"fixed",bottom:"60%",opacity:"0"},to:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:"1"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ref:a});return Object(w.b)([e,a],[0,1.5]),o.a.createElement("div",{style:{marginRight:"2rem"}},o.a.createElement(S,null),o.a.createElement(w.a.div,{style:t},o.a.createElement("img",{className:"loading-image",src:"/images/SXG.png",alt:"logo",style:{display:"inline-block",borderRadius:"50%",boxShadow:"10px 10px 10px black"}}),o.a.createElement(w.a.div,{style:r},o.a.createElement("img",{className:"loading-image",src:"/images/finishspeechbubble.png",alt:"speech bubble"}))))};var I=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),3200)}),[]),a?o.a.createElement(F,null):o.a.createElement(u.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(O.c,null,o.a.createElement(O.a,{exact:!0,path:"/",render:function(){return o.a.createElement(j,null)}}),o.a.createElement(O.a,{exact:!0,path:"/Portfolio",render:function(){return o.a.createElement(y,null)}}),o.a.createElement(O.a,{exact:!0,path:"/Resume",render:function(){return o.a.createElement(v,null)}})),o.a.createElement(p,null)))};i.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0f58b968.chunk.js.map