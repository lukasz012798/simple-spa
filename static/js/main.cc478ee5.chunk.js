(this.webpackJsonpproj2=this.webpackJsonpproj2||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/road-1209369_1280.f1eb474b.jpg"},function(e,t,a){e.exports=a.p+"static/media/taxi-cab-381233_1280.879a50bb.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/traffic-3612474_1280.e6935393.jpg"},,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=(a(29),a(9)),m=a(10),i=a(12),u=a(11),s=(a(30),a(2)),p=a(6),E=(a(31),a(14)),d=a.n(E),h=a(15),f=a.n(h),g=a(21),b=a.n(g),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/products",render:function(){return r.a.createElement("img",{src:b.a,alt:"road"})}}),r.a.createElement(p.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:f.a,alt:"road"})}}),r.a.createElement(p.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:d.a,alt:"road"})}}),r.a.createElement(p.c,{exact:!0,path:"/",render:function(){return r.a.createElement("img",{src:d.a,alt:"road"})}}),r.a.createElement(p.c,{render:function(){return r.a.createElement("img",{src:f.a,alt:"road"})}})))},y=(a(37),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"admin",path:"/admin"}]),x=function(){var e=y.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},j=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{marginBottom:10,display:"block",fontSize:17}},"Autor: ",a),r.a.createElement("p",{style:{fontSize:18}},n),r.a.createElement("br",null))},k=[{id:1,title:"Czym jest teoria strun?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ratione, numquam doloremque laboriosam libero, sapiente aut qui, esse magni omnis? Ab dolorum, illum nesciunt obcaecati quam optio iure distinctio."},{id:2,title:"Czym jest paradoks Fermiego?",author:"Krzysztof Kowalski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ratione, numquam doloremque laboriosam libero, sapiente aut qui, esse magni omnis? Ab dolorum, illum nesciunt obcaecati quam optio iure distinctio."},{id:3,title:"Ciemna materia i ciemnia energia?",author:"Piotr S\u0142awek",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ratione, numquam doloremque laboriosam libero, sapiente aut qui, esse magni omnis? Ab dolorum, illum nesciunt obcaecati quam optio iure distinctio."}],w=function(){var e=k.map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},z=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},S=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Strona produktu"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},N=(a(38),["car","bike","motorcycle"]),q=function(){var e=N.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},J=(a(39),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isSent:!1},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.value.length<10?alert("Wiadomo\u015b\u0107 musi mie\u0107 co najmniej 10 znak\xf3w"):(e.setState({value:"",isSent:!0}),setTimeout((function(){e.setState({isSent:!1})}),3e3))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.value,placeholder:"Wpisz wiadomo\u015b\u0107"}),r.a.createElement("button",null,"Wy\u015blij"),this.state.isSent&&r.a.createElement("p",null,"Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana. Dzi\u0119kujemy!")),r.a.createElement(p.a,{when:""!==this.state.value,message:"Masz uzupe\u0142niony formularz. Czy napewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),a}(n.Component)),C=function(){return r.a.createElement(p.c,{render:function(){return r.a.createElement(p.b,{to:"/login"})}})},O=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("br",null),r.a.createElement("button",null,"Zaloguj"))},F=function(){return r.a.createElement("strong",null,"Nie ma takiej strony!")},A=function(){return r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,component:w}),r.a.createElement(p.c,{path:"/products",exact:!0,component:q}),r.a.createElement(p.c,{path:"/product/:id",component:S}),r.a.createElement(p.c,{path:"/contact",exact:!0,component:J}),r.a.createElement(p.c,{path:"/admin",exact:!0,component:C}),r.a.createElement(p.c,{path:"/login",component:O}),r.a.createElement(p.c,{component:F}))},P=(a(40),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(p.c,{path:"/",exact:!0,render:function(){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(p.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(p.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na"," ",r.a.createElement("span",null,e.match.params.page," - ",e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,{basename:"/simple-spa"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(x,null)),r.a.createElement("section",{className:"page"},r.a.createElement(A,null))),r.a.createElement("footer",null,r.a.createElement(P,null))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.cc478ee5.chunk.js.map