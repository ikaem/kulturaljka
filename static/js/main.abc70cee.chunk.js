(this.webpackJsonpkulturaljkav2=this.webpackJsonpkulturaljkav2||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=(a(14),a(1)),l=a(2),u=a(3),c=a(5),m=a(4),p=a(6),d=(a(15),function(e){var t=e.currentArtist,a=e.onSetStateProperty,n=t.image,o=t.alt,s=t.name,i=t.genre;return r.a.createElement("div",null,r.a.createElement("h1",null,s),r.a.createElement("img",{src:n,alt:o,style:{width:"500px",height:"auto"}}),r.a.createElement("p",null,"\u017danr: ",r.a.createElement("strong",null,i)),r.a.createElement("input",{type:"button",value:"Detaljnije",onClick:function(){a("currentRoute","band"),a("currentArtist",t),console.log(t)}}))}),g=function(e){var t=e.artists,a=(e.currentArtist,e.onSetStateProperty),n=t.map((function(e){return r.a.createElement(d,{key:e.id,image:e.image,alt:e.alt,name:e.name,genre:e.genre,web:e.web,onSetStateProperty:a,currentArtist:e})}));return r.a.createElement("div",null,n)},h=function(e){var t=e.currentArtist,a=e.onSetStateProperty,n=e.loggedUser,o=t.name,s=t.image,i=t.alt,l=t.genre,u=t.city,c=t.web,m=t.submittedby,p=t.submittedon;return r.a.createElement("div",null,r.a.createElement("img",{src:s,alt:i,style:{width:"1000px",height:"auto"}}),r.a.createElement("h1",null,o),r.a.createElement("p",null,"\u017danr: ",r.a.createElement("strong",null,l)),r.a.createElement("p",null,"Dolaze iz : ",r.a.createElement("strong",null,u)),r.a.createElement("p",null,r.a.createElement("a",{href:"http://www."+c},c)),r.a.createElement("p",null,"Postavio ",m," dana ",new Date(p).toLocaleString()),r.a.createElement("input",{onClick:function(){n.name?a("currentRoute","updateartist"):(a("currentRoute","signin"),a("message","Molimo prijavite se"))},type:"button",value:"Uredi izvo\u0111a\u010da"}))},v=function(e){e.setCurrentRoute;var t=e.loggedUser,a=(e.setInitialState,e.onSetStateProperty);return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return a("currentRoute","home")}},"Po\u010detna"),r.a.createElement("li",{onClick:function(){return t.name?a("currentRoute","addartist"):a("currentRoute","signin")}},"Dodaj izvo\u0111a\u010da"),t.name?r.a.createElement("div",null,r.a.createElement("li",{onClick:function(){a("loggedUser"),a("currentArtist"),a("currentRoute","home")}},"Odjava"),r.a.createElement("li",{style:{listStyleType:"none"}},"Dobar dan, ",r.a.createElement("strong",null,t.name.charAt(0).toUpperCase()+t.name.slice(1)),".")):r.a.createElement("div",null,r.a.createElement("li",{onClick:function(){return a("currentRoute","signin")}},"Prijava"),r.a.createElement("li",{onClick:function(){return a("currentRoute","register")}},"Registracija"))))},S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onArtistChangeHandler=function(e){a.setState({artist:Object.assign(a.state.artist,Object(i.a)({},e.target.name,e.target.value))})},a.onSubmitForm=function(e){return e.preventDefault(),"addartist"===a.state.currentRoute?a.state.artist:Object.assign({},a.state.obsoleteArtist,a.state.artist)},a.fetchArtist=function(e){"addartist"===a.state.currentRoute?a.props.onEndpointFetch("post","/addartist",e).then((function(e){"new artist successfully added"===e.message?(console.log(e),a.props.onSetStateProperty("artists",e.data),a.props.onSetStateProperty("currentArtist"),a.props.onSetStateProperty("currentRoute","home")):"Please fill all fields"===e.message?a.props.onSetStateProperty("message","Ispunite sva polja"):a.props.onSetStateProperty("message","Umjetnik s tim imenom ve\u0107 postoji u bai podataka")})).catch((function(e){return console.log(e)})):a.props.onEndpointFetch("put","/updateartist",e).then((function(e){"the artist was successfully updated"===e.message?(a.props.onSetStateProperty("artists",e.data.artists),a.props.onSetStateProperty("currentArtist",e.data.currentArtist),a.props.onSetStateProperty("currentRoute","band")):"data retrieval failed"===e.message?a.props.onSetStateProperty("message","Pojavio se problem s u\u010ditavanjem podataka, ali a\u017euriranje je uspjelo. Poku\u0161ajte osvje\u017eiti stranicu."):a.props.onSetStateProperty("message","A\u017euriranje nije uspjelo")})).catch((function(e){return console.log(e)}))},a.state={artist:{alt:"i ovo ce trebati namjestiti - mozda cak staviti opis slike input.. ili maknuti skroz",city:"",genre:"",image:"",name:"",submittedby:"Kako ovo",submittedon:new Date,lastupdatedon:new Date,lastupdatedby:a.props.loggedUser.name,web:" "},currentRoute:"",obsoleteArtist:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){"addartist"===this.props.currentRoute?this.setState({currentRoute:this.props.currentRoute}):this.setState({artist:Object.assign({},this.props.currentArtist),obsoleteArtist:Object.assign({},this.props.currentArtist),currentRoute:this.props.currentRoute}),console.log(this.state)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{name:"form",onSubmit:function(t){return e.fetchArtist(e.onSubmitForm(t))}},r.a.createElement("legend",null,"addartist"===this.state.currentRoute?"Dodaj izvo\u0111a\u010da":"Uredi izvo\u0111a\u010da"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Ime izvo\u0111a\u010da"),r.a.createElement("input",{required:!0,value:this.state.artist.name,onChange:this.onArtistChangeHandler,type:"text",name:"name"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"image"},"Poveznica na sliku"),r.a.createElement("input",{required:!0,value:this.state.artist.image,onChange:this.onArtistChangeHandler,type:"text",name:"image"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"genre"},"\u017danr"),r.a.createElement("input",{required:!0,value:this.state.artist.genre,onChange:this.onArtistChangeHandler,type:"text",name:"genre"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"city"},"Izvo\u0111a\u010d dolazi iz:"),r.a.createElement("input",{required:!0,value:this.state.artist.city,onChange:this.onArtistChangeHandler,type:"text",name:"city"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"web"},"Poveznica na stranicu"),r.a.createElement("input",{required:!0,value:this.state.artist.web,onChange:this.onArtistChangeHandler,type:"text",name:"web"})),r.a.createElement("input",{type:"submit",value:"Po\u0161alji"}),r.a.createElement("div",null,this.props.message))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChangeHandler=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSubmitForm=function(e){return e.preventDefault(),"signin"===a.props.currentRoute?{email:a.state.email,password:a.state.password}:{email:a.state.email,password:a.state.password,name:a.state.name}},a.fetchUser=function(e){"signin"===a.state.currentRoute?a.props.onEndpointFetch("post","/login",e).then((function(e){"Login success"===e.message?(a.props.onSetStateProperty("loggedUser",e.data),a.props.onSetStateProperty("currentRoute","home")):a.props.onSetStateProperty("message","Nepostoje\u0107i korisnik ili neto\u010dna lozinka. Poku\u0161ajte ponovno")})).catch(console.log):a.props.onEndpointFetch("post","/register",e).then((function(e){"registration success"===e.message?(a.props.onSetStateProperty("loggedUser",e.data),a.props.onSetStateProperty("currentRoute","home")):"email already in use"===e.message?a.props.onSetStateProperty("message","Une\u0161eni email se ve\u0107 koristi"):a.props.onSetStateProperty("message","molimo ispunite sva polja")})).catch(console.log)},a.state={name:"",password:"",email:"",currentRoute:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentRoute:this.props.currentRoute})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{name:"form",onSubmit:function(t){return e.fetchUser(e.onSubmitForm(t))}},r.a.createElement("legend",null,"signin"===this.props.currentRoute?"Prijava":"Registracija"),"signin"!==this.props.currentRoute?r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Ime"),r.a.createElement("input",{required:!0,value:this.state.name,onChange:this.onChangeHandler,type:"text",name:"name",id:"name"})):"",r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Lozinka"),r.a.createElement("input",{required:!0,value:this.state.password,onChange:this.onChangeHandler,type:"password",name:"password",id:"password"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,value:this.state.email,onChange:this.onChangeHandler,type:"email",name:"email",id:"email"})),"signin"===this.props.currentRoute?r.a.createElement("input",{type:"submit",value:"Po\u0161alji"}):r.a.createElement("input",{type:"submit",value:"Register"}),r.a.createElement("div",null,this.props.message))}}]),t}(r.a.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).onEndpointFetch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0;return fetch("https://kulturaljka-server.herokuapp.com".concat(t),{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},e.setLoggedUser=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({loggedUser:t})},e.setCurrentArtist=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({currentArtist:t})},e.setInitialState=function(){e.setState({artists:[],currentRoute:"home",currentArtist:{alt:"",city:"",genre:"",id:"",image:"",name:"",submittedBy:"",submittedOn:"",lastUpdatedOn:"",lastUpdatedBy:"",web:""},loggedUser:{},message:""})},e.setMessage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({message:t})},e.onSetStateProperty=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.setState(Object(i.a)({},t,a)),console.log(a)},e.routeSwitcher=function(){switch(e.state.currentRoute){case"home":return r.a.createElement("div",null,r.a.createElement(g,{artists:e.state.artists,onSetStateProperty:e.onSetStateProperty,key:e.state.currentRoute,currentArtist:e.currentArtist}));case"band":return r.a.createElement("div",null,r.a.createElement(h,{currentArtist:e.state.currentArtist,loggedUser:e.state.loggedUser,onSetStateProperty:e.onSetStateProperty}));case"addartist":case"updateartist":return r.a.createElement("div",null,r.a.createElement(S,{currentArtist:e.state.currentArtist,currentRoute:e.state.currentRoute,key:e.state.currentRoute,onEndpointFetch:e.onEndpointFetch,onSetStateProperty:e.onSetStateProperty,loggedUser:e.state.loggedUser,message:e.state.message}));case"signin":case"register":return r.a.createElement("div",null,r.a.createElement(E,{currentRoute:e.state.currentRoute,currentArtist:e.state.currentArtist,onEndpointFetch:e.onEndpointFetch,loggedUser:e.state.loggedUser,onSetStateProperty:e.onSetStateProperty,message:e.state.message,key:e.state.currentRoute}));default:return null}},e.state={artists:[],currentRoute:"home",currentArtist:{alt:"",city:"",genre:"",id:"",image:"",name:"",submittedBy:"",submittedOn:"",lastUpdatedOn:"",lastUpdatedBy:"",web:""},loggedUser:{},message:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.onEndpointFetch("get","/").then((function(t){return e.onSetStateProperty("artists",t||[{alt:"",city:"",genre:"",id:"",image:"",name:"",submittedBy:"",submittedOn:"",lastUpdatedOn:"",lastUpdatedBy:"",web:""}])}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Kulturaljka"),r.a.createElement(v,{setCurrentRoute:this.setCurrentRoute,loggedUser:this.state.loggedUser,setInitialState:this.setInitialState,onSetStateProperty:this.onSetStateProperty}),this.routeSwitcher(),r.a.createElement("h6",null,"Za\u0161ti\u0107en sadr\u017eaj se koristi za samoedukaciju i nije odobren od strane autora"))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);s.a.render(r.a.createElement(y,{className:"App"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.abc70cee.chunk.js.map