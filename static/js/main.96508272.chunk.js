(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},42:function(e,t,n){e.exports=n(98)},47:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(12),r=n.n(s),i=(n(47),n(3)),l=n(4),c=n(6),u=n(5),g=n(2),h=n(7),m=(n(14),n(8)),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"menu"},a.a.createElement("div",{className:"menuClose"},a.a.createElement(m.a,{onClick:this.props.toggleMenu})),a.a.createElement("p",{onClick:this.props.showHome},"Home"),a.a.createElement("p",{onClick:this.props.showProjects},"Projects"),a.a.createElement("p",{onClick:this.props.showContact},"Contact"))}}]),t}(o.Component),w=n(13),d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleMenu=function(){n.setState({showMenu:!n.state.showMenu})},n.state={showMenu:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Info"},a.a.createElement(w.CSSTransitionGroup,{transitionName:"menu",transitionAppear:!1,transitionEnterTimeout:200,transitionLeaveTimeout:200,transitionEnter:!0,transitionLeave:!0},this.state.showMenu?a.a.createElement(p,{toggleMenu:this.toggleMenu,showHome:this.props.toggleInfo,showProjects:this.props.toggleProjects,showContact:this.props.toggleContact}):null),a.a.createElement("div",{className:"Title"},"About me",this.state.showMenu?null:a.a.createElement(m.b,{onClick:this.toggleMenu})),a.a.createElement("div",{className:"textBox"},a.a.createElement("p",null,"Currently a second year student at JAMK."),a.a.createElement("p",null,"Formerly a printing press operator and now pursuing a career in software engineering."),a.a.createElement("p",null,"On my spare time I would do woodworking, PC modding or work on my speaker setup but currently schoolwork is taking most of my time.")))}}]),t}(o.Component),E=n(39),b=n(41),f=n.n(b),j=[{src:"1.jpg",width:1,height:1},{src:"2.jpg",width:1,height:2},{src:"3.jpg",width:2,height:1},{src:"4.jpg",width:2,height:1}],v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).toggleMenu=function(){e.setState({showMenu:!e.state.showMenu})},e.state={currentImage:0,showMenu:!1},e.closeLightbox=e.closeLightbox.bind(Object(g.a)(e)),e.openLightbox=e.openLightbox.bind(Object(g.a)(e)),e.gotoNext=e.gotoNext.bind(Object(g.a)(e)),e.gotoPrevious=e.gotoPrevious.bind(Object(g.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0,showMenu:!1})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"Info"},a.a.createElement(w.CSSTransitionGroup,{transitionName:"menu",transitionAppear:!1,transitionEnterTimeout:200,transitionLeaveTimeout:200,transitionEnter:!0,transitionLeave:!0},this.state.showMenu?a.a.createElement(p,{toggleMenu:this.toggleMenu,showHome:this.props.toggleInfo,showProjects:this.props.toggleProjects,showContact:this.props.toggleContact}):null),a.a.createElement("div",{className:"Title"},"Projects",this.state.showMenu?null:a.a.createElement(m.b,{onClick:this.toggleMenu})),a.a.createElement("div",{className:"textBox"},a.a.createElement("p",null,"Most of my projects are at my ",a.a.createElement("a",{href:"https://github.com/atarvainen",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."),a.a.createElement("p",null,"But here is my old watercooling loop for you."),a.a.createElement(E.a,{photos:j,onClick:this.openLightbox}),a.a.createElement(f.a,{images:j,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen,width:1024})))}}]),t}(o.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleMenu=function(){n.setState({showMenu:!n.state.showMenu})},n.state={showMenu:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Info"},a.a.createElement(w.CSSTransitionGroup,{transitionName:"menu",transitionAppear:!1,transitionEnterTimeout:200,transitionLeaveTimeout:200,transitionEnter:!0,transitionLeave:!0},this.state.showMenu?a.a.createElement(p,{toggleMenu:this.toggleMenu,showHome:this.props.toggleInfo,showProjects:this.props.toggleProjects,showContact:this.props.toggleContact}):null),a.a.createElement("div",{className:"Title"},"Contact me",this.state.showMenu?null:a.a.createElement(m.b,{onClick:this.toggleMenu})),a.a.createElement("div",{className:"textBox"},a.a.createElement("div",{class:"textbox2"},a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Phone:"),a.a.createElement("td",null,"045 896 8690")),a.a.createElement("tr",null,a.a.createElement("td",null,"E-mail:"),a.a.createElement("td",null,"anttigt@gmail.com"))))),a.a.createElement("p",null,"Or use this form"),a.a.createElement("div",{className:"formContainer"},a.a.createElement("form",{action:"https://formspree.io/anttigt@gmail.com",method:"POST"},a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-75"},a.a.createElement("input",{type:"text",id:"nimi",name:"Name",placeholder:"Your name"}))),a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-75"},a.a.createElement("textarea",{id:"viesti",name:"Message",placeholder:"Write something"}))),a.a.createElement("div",{class:"row"},a.a.createElement("input",{type:"submit",value:"Send"}))))))}}]),t}(o.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showInfo:!0,showProjects:!1,showContact:!1},n.toggleInfo=n.toggleInfo.bind(Object(g.a)(n)),n.toggleProjects=n.toggleProjects.bind(Object(g.a)(n)),n.toggleContact=n.toggleContact.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggleInfo",value:function(){this.setState({showInfo:!0,showProjects:!1,showContact:!1})}},{key:"toggleProjects",value:function(){this.setState({showProjects:!0,showInfo:!1,showContact:!1})}},{key:"toggleContact",value:function(){this.setState({showContact:!0,showProjects:!1,showInfo:!1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.showInfo?a.a.createElement(d,{toggleInfo:this.toggleInfo,toggleProjects:this.toggleProjects,toggleContact:this.toggleContact}):null,this.state.showProjects?a.a.createElement(v,{toggleInfo:this.toggleInfo,toggleProjects:this.toggleProjects,toggleContact:this.toggleContact}):null,this.state.showContact?a.a.createElement(C,{toggleInfo:this.toggleInfo,toggleProjects:this.toggleProjects,toggleContact:this.toggleContact}):null)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.96508272.chunk.js.map