(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},34:function(e,t,a){e.exports=a(86)},39:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),c=a.n(l),r=(a(39),a(3)),i=a(4),s=a(6),m=a(5),u=a(2),g=a(7),h=(a(12),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Info"},o.a.createElement("h1",null,"About me"),o.a.createElement("p",null,"Currently a second year student at JAMK."),o.a.createElement("p",null,"Formerly a printing press operator and now pursuing a career in software engineering."),o.a.createElement("p",null,"On my spare time I do some woodworking, PC modding and work on my speaker setup."))}}]),t}(n.Component)),p=a(31),b=a(33),d=a.n(b),E=[{src:"1.jpg",width:4,height:3},{src:"2.jpg",width:1,height:1},{src:"3.jpg",width:3,height:4},{src:"4.jpg",width:3,height:4}],f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={currentImage:0},e.closeLightbox=e.closeLightbox.bind(Object(u.a)(e)),e.openLightbox=e.openLightbox.bind(Object(u.a)(e)),e.gotoNext=e.gotoNext.bind(Object(u.a)(e)),e.gotoPrevious=e.gotoPrevious.bind(Object(u.a)(e)),e}return Object(g.a)(t,e),Object(i.a)(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Info"},o.a.createElement("h2",null,"Most of my projects are at my ",o.a.createElement("a",{href:"https://github.com/atarvainen",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."),o.a.createElement("h3",null,"Custom watercooling loop."),o.a.createElement(p.a,{photos:E,onClick:this.openLightbox}),o.a.createElement(d.a,{images:E,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen}))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Info"},o.a.createElement("div",{class:"textbox2"},o.a.createElement("h2",null,"Contact me:"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Phone:"),o.a.createElement("td",null,"045 896 8690")),o.a.createElement("tr",null,o.a.createElement("td",null,"E-mail:"),o.a.createElement("td",null,"anttigt@gmail.com"))))),o.a.createElement("h2",null,"Or use this form:"),o.a.createElement("div",{id:"lomake",class:"textbox"},o.a.createElement("div",{class:"container"},o.a.createElement("form",{action:"https://formspree.io/anttigt@gmail.com",method:"POST"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-75"},o.a.createElement("input",{type:"text",id:"nimi",name:"name",placeholder:"Nimesi.."}))),o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-75"},o.a.createElement("textarea",{id:"viesti",name:"nimi",placeholder:"Kirjoita jotain.."}))),o.a.createElement("div",{class:"row"},o.a.createElement("input",{type:"submit",value:"Send"}))))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showInfo:!0,showProjects:!1,showContact:!1},a.toggleInfo=a.toggleInfo.bind(Object(u.a)(a)),a.toggleProjects=a.toggleProjects.bind(Object(u.a)(a)),a.toggleContact=a.toggleContact.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"toggleInfo",value:function(){this.setState({showInfo:!0,showProjects:!1,showContact:!1})}},{key:"toggleProjects",value:function(){this.setState({showProjects:!0,showInfo:!1,showContact:!1})}},{key:"toggleContact",value:function(){this.setState({showContact:!0,showProjects:!1,showInfo:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:"face.png",className:"App-logo",alt:"logo"}),o.a.createElement("div",{className:"links"},o.a.createElement("button",{className:"Site-links",onClick:this.toggleInfo},"Info",o.a.createElement("img",{src:"info.png",className:"Button-logo",alt:"logo"})),o.a.createElement("button",{className:"Site-links",onClick:this.toggleProjects},"Projects",o.a.createElement("img",{src:"info.png",className:"Button-logo",alt:"logo"})),o.a.createElement("button",{className:"Site-links",onClick:this.toggleContact},"Contact",o.a.createElement("img",{src:"contact.png",className:"Button-logo",alt:"logo"})),o.a.createElement("a",{href:"https://github.com/atarvainen",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"Social-logo"},o.a.createElement("img",{src:"GitHub-Mark-64px.png",className:"social",alt:"GH"}))),o.a.createElement("a",{href:"https://www.linkedin.com/in/antti-tarvainen/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"Social-logo"},o.a.createElement("img",{src:"linkedin.png",className:"social",alt:"LI"}))))),this.state.showInfo?o.a.createElement(h,null):null,this.state.showProjects?o.a.createElement(f,null):null,this.state.showContact?o.a.createElement(j,null):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.033af47d.chunk.js.map