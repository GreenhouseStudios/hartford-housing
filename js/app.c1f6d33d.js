(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hartford-housing/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("8a23"),i=a.n(n);i.a},"0580":function(e,t,a){"use strict";var n=a("eac8"),i=a.n(n);i.a},"3e08":function(e,t,a){"use strict";var n=a("c870"),i=a.n(n);i.a},"407a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"myFont"},[a("v-app-bar",{attrs:{app:"",color:"darkBlack",dark:""}},[a("v-toolbar-title",[e._v("Making Hartford Home")]),a("v-spacer"),a("v-toolbar-items",e._l(e.sections,(function(t,n){return a("v-menu",{key:t.title,attrs:{"open-on-hover":!0,"offset-y":!0},scopedSlots:e._u([{key:"activator",fn:function(i){var r=i.on;return[a("v-btn",e._g({attrs:{text:"",dark:""},on:{click:function(t){return e.$refs.fullpage.api.moveTo(n+1)}}},r),[e._v(e._s(t.title))])]}}],null,!0)},[e.sections[n].slides.length?a("v-list",e._l(t.slides,(function(t,i){return a("v-list-item",{key:i,on:{click:function(t){return e.$refs.fullpage.api.moveTo(n+1,i)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1):e._e()],1)})),1)],1),a("v-content",[a("full-page",{ref:"fullpage",attrs:{options:e.options,id:"fullpage"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("About"),a("Introduction"),a("Maps"),a("Settlement"),a("Housing"),a("Profiles")],1)],1)],1)],1)],1),a("v-footer",{staticClass:"font-weight-bold",attrs:{app:"",color:"darkBlack"}},[a("v-col",[a("a",{staticClass:"pr-4",attrs:{href:""}},[e._v("Funders")]),a("a",{staticClass:"pr-4",attrs:{href:""}},[e._v("Contact")])]),a("v-spacer"),e._v(" © "+e._s((new Date).getFullYear())+" ")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("v-img",{attrs:{src:a("67fd"),gradient:"rgba(255,255,255,1),rgba(255,255,255,0.05)"}},[n("div",{attrs:{id:"subtitle"}},[n("h1",{staticClass:"display-2 font-weight-bold"},[e._v(e._s(e._f("allCaps")(e.subtitle)))]),n("h1",{staticClass:"display-2 font-weight-bold"},[e._v("HOUSING STRUGGLES")]),n("h3",[e._v("IN HARTFORD COUNTY, CONNECTICUT")])]),n("Card",{attrs:{heading:e.heading,body:e.body}})],1)],1)},s=[],l=(a("fb6a"),a("d3b7"),a("25f0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"outline"},[a("v-card",{attrs:{flat:"",tile:"",color:"darkBlack",width:"520",height:"520"}},[a("v-card",{staticClass:"pa-5 innercard",attrs:{flat:"",tile:"",color:"lightBlack",width:"700",height:"500"}},[a("v-card-title",{staticClass:"white--text display-3 font-weight-bold"},[e._v(e._s(e.heading))]),a("v-card-text",{staticClass:"white--text body-1"},[e._v(e._s(e.body))])],1)],1)],1)}),c=[],d={name:"Card",data:function(){return{}},props:["heading","body"]},u=d,h=(a("0580"),a("2877")),p=a("6544"),f=a.n(p),m=a("b0af"),g=a("99d9"),v=Object(h["a"])(u,l,c,!1,null,"e04ad3b4",null),b=v.exports;f()(v,{VCard:m["a"],VCardText:g["a"],VCardTitle:g["b"]});var y={name:"About",components:{Card:b},data:function(){return{subtitle:"African Amerian, Puerto Rican and West Indian",heading:"About",body:"Hartford, Connecticut attracted three waves of internal and transnational migrations of African American, Puerto Rican, and West Indian communities that transformed the city’s racial and ethnic landscape. These monumental shifts in mobilities unfolded in many other metropolitan areas in the United States like Chicago and Philadelphia, Harlem and San Francisco in the twentieth century. This project explores the history of migration, housing, settlement, community formation, and succession through the lens of Hartford, one of America’s wealthiest cities at the end of the Civil War.  "}},filters:{capitalize:function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""},allCaps:function(e){return e.toUpperCase()}}},w=y,C=(a("3e08"),a("adda")),_=Object(h["a"])(w,o,s,!1,null,"2854427e",null),S=_.exports;f()(_,{VImg:C["a"]});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},e._l(e.sections,(function(t,n){return a("div",{key:n,staticClass:"slide"},[a("h1",[e._v(e._s(t.heading))]),a("p",[e._v(e._s(t.body))])])})),0)},A=[],H={name:"Introduction",components:{},data:function(){return{sections:[{heading:"Introduction: “And the Migrants Kept Coming”",body:"Jacob Lawrence concluded his magisterial 60-panel mosaic, The Migration Series, with a defiant and hopeful scene of African American men, women, and children on a railway platform. Bound for destinations like Harlem, San Francisco, Philadelphia, Chicago, and Hartford, migrants voted with their feet to pursue a better life.  “And the migrants kept coming,” panel 60, was the 1941 coda to Lawrence’s profound visual statement about the Great Migration of African Americans from the South. Yet panel 60 can conjure any epoch in American history. Lawrence’s visual panorama resonates with the generation of West Indians and Puerto Ricans who would undertake their own journeys—both epic and mundane—to find employment and make a new home in American cities. Hartford was one terminus for several generations of these migrants."},{heading:"African American Settlement",body:"In what journalist Isabel Wilkerson calls a “silent pilgrimage” and others harken to a Biblical exodus, African Americans left the South. By foot, train, cars, and buses, they fled violence, poverty, the suppression of their vote, political disenfranchisement, and the stunted life chances of their children. By 1970, six million African Americans had embarked on the Great Migration to major urban centers, the largest mass movement of peoples of African descent after the trans-Atlantic slave trade. Like the centuries of involuntary migration that preceded it, the Great Migration would reshape American cities. By 1920, forty percent of the African American population in Hartford identified their original home as Georgia, outpacing the local population. Fifteen percent originated from the Carolinas and Virginia. Americus, Plains, Ellaville, and other Georgian locales kindled a long pattern of chain migration to Hartford that would register profoundly in the residential makeup of the North End of Hartford."},{heading:"Puerto Rican Settlement",body:"Between 1950 and 1960, 470,000 people, or approximately one-fifth of Puerto Rico’s population, relocated to the United States. The Jones Act of 1917 granted Puerto Ricans U.S. citizenship, making relocation to the mainland far easier in principle than other groups impacted by the restrictive immigration policies that closed US borders for the next four decades. New York attracted the vast majority of these sojourners. Some embarked on a secondary migration to explore other residential and employment opportunities and to join family members. Farm labor programs offering employment also played an important role in facilitating the initial transportation to the United States. These programs recruited 421,238 Puerto Ricans workers between 1948 and 1990, the second largest mobilization of seasonal laborers after the Mexican Bracero program. These migratory and labor flows have transformed Hartford into a Puerto Rican city, with shifting concentrations in the North and South End."},{heading:"West Indian Settlement",body:"Caribbean residents participated in a long tradition of what scholars call circum-Caribbean migration that brought them to Costa Rica, Cuba, and Panama between the 1870-1920s. New York featured prominently as the primary port of entry and residence for the first major enclave of West Indian migrants in the United States in the twentieth-century. When World War II ushered in new opportunities to hire foreign guest workers, twenty-four states recruited British West Indians for industrial and agricultural work. New York, Florida, and Connecticut drew the most recruits and relied consistently on them throughout and after the war, while other states used them intermittently. These diasporas established post-emancipation traditions of mobility and created new spaces for black men and women to recast and renegotiate their labor and their identities. From a few hundred people in the 1950s, West Indians became the largest population of foreign-born immigrants in Connecticut in 2010, a demographic profile that shaped Hartford as a Caribbean city."}]}}},P=H,I=Object(h["a"])(P,k,A,!1,null,null,null),T=I.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h1",[e._v("Maps")]),a("div",{staticClass:"ma-5"},[a("div",{staticClass:"slide"},[a("h2",{staticClass:"ma-5"},[e._v("Hartford")]),a("Map")],1),a("div",{staticClass:"slide"},[a("h2",{staticClass:"ma-5"},[e._v("Bloomfield")]),a("Map",{attrs:{coordinates:[40.8,-74.18],id:"Bloomfield"}})],1)])])},j=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{height:"800px"},attrs:{id:e.mapid}})])},M=[],F=(a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("a9e3"),a("159b"),a("e11e")),B=a.n(F),R=a("fb66");a("6cc5"),a("9eb3");delete B.a.Icon.Default.prototype._getIconUrl,B.a.Icon.Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var E={name:"Map",props:{coordinates:{type:Array,default:function(){return[41.78,-72.67]}},zoomLevel:{type:Number,default:14},id:{type:String,default:"mapid"}},data:function(){return{map:null,tileLayer:null,mapid:this.id,layers:[{id:0,name:"Restaurants",active:!1,features:[{id:0,name:"Hartford",type:"marker",coords:this.coordinates}]}]}},mounted:function(){this.initMap(),this.initLayers()},methods:{initMap:function(){B.a.Map.addInitHook("addHandler","gestureHandling",R["GestureHandling"]),this.map=B.a.map(this.mapid,{center:this.coordinates,zoom:this.zoomLevel,gestureHandling:!0}),this.tileLayer=B.a.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'}),this.tileLayer.addTo(this.map)},initLayers:function(){var e=this;this.layers.forEach((function(t){var a=t.features.filter((function(e){return"marker"===e.type}));a.forEach((function(t){t.leafletObject=B.a.marker(t.coords).bindPopup(t.name),t.leafletObject.addTo(e.map)}))}))}}},V=E,L=(a("e27c"),Object(h["a"])(V,O,M,!1,null,"70cdae98",null)),W=L.exports,N={name:"Maps",components:{Map:W},data:function(){return{}}},U=N,G=Object(h["a"])(U,x,j,!1,null,"5e51769a",null),$=G.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h1",[e._v("Settlement")]),e._l(e.slides,(function(t){return a("div",{key:t,staticClass:"slide"},[a("h1",[e._v(e._s(t))])])}))],2)},D=[],J={name:"Settlement",data:function(){return{slides:["Journeys","Georgia,Puerto Rico, Jamaica","African American Settlement","West Indian Settlement","Puerto Rican Settlement","Headlines"]}}},Y=J,K=(a("6d24"),Object(h["a"])(Y,z,D,!1,null,"17d3a1c3",null)),q=K.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h1",[e._v("Housing")]),e._l(e.slides,(function(t){return a("div",{key:t,staticClass:"slide"},[a("h1",[e._v(e._s(t))])])}))],2)},Z=[],X={name:"Housing",data:function(){return{slides:["Post WWII Housing Crisis","Public Housing","Charter House Terrace","Bellevue Square","Redlining","Home Ownership","Slumlords Now, Slumlords Then","Housing Code Violations","The No More Slumlords Campaign"],desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]}}},ee=X,te=Object(h["a"])(ee,Q,Z,!1,null,null,null),ae=te.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h1",[e._v("Profiles")]),e._l(e.slides,(function(t){return a("div",{key:t,staticClass:"slide"},[a("h1",[e._v(e._s(t))])])}))],2)},ie=[],re={name:"Profiles",data:function(){return{slides:["Tenant Activists Profiles","Historic Firsts"]}}},oe=re,se=Object(h["a"])(oe,ne,ie,!1,null,null,null),le=se.exports,ce={name:"App",components:{About:S,Introduction:T,Maps:$,Settlement:q,Housing:ae,Profiles:le},data:function(){return{fillerText:"Challenges and opportunities; collective impact incubator energize natural resources. Shared value; circular innovate social entrepreneur impact investing change-makers challenges and opportunities B-corp outcomes. Disrupt fairness empower, blended value framework. Boots on the ground; move the needle global, leverage improve the world milestones benefit corporation greenwashing ideate. But; save the world, her body her rights LGBTQ+ a efficient storytelling empower external partners. Framework society circular thought leadership expose the truth strategy strategy big data save the world. Replicable shared value mass incarceration, thought partnership, big data paradigm engaging granular. Grit change-makers triple bottom line energize LGBTQ+ low-hanging fruit thought leadership. Replicable overcome injustice thought partnership empathetic rubric when blended value synergy uplift. Thought provoking innovation thought provoking academic, effective altruism collaborative consumption indicators movements replicable. Shared unit of analysis empower communities innovate youth social enterprise expose the truth. Communities technology; compelling; communities inspiring transparent; social entrepreneurship. Inspirational framework collective impact efficient.",tagPrefix:"#",sections:[{title:"About",slides:[]},{title:"Introduction",slides:["Introduction: “And the Migrants Kept Coming”","African American Settlement","Puerto Rican Settlement","West Indian Settlement"]},{title:"Maps",slides:[]},{title:"Settlement",slides:["Journeys","Georgia,Puerto Rico, Jamaica","African American Settlement","West Indian Settlement","Puerto Rican Settlement","Headlines"]},{title:"Housing",slides:["Post WWII Housing Crisis","Public Housing","Charter House Terrace","Bellevue Square","Redlining","Home Ownership","Slumlords Now, Slumlords Then","Housing Code Violations","The No More Slumlords Campaign"]},{title:"Profiles",slides:["Tenant Activists Profiles","Historic Firsts"]}],menuItems:[{title:"Home",path:"/Home"},{title:"About",path:"/About"},{title:"Maps",path:"/Maps"},{title:"Settlement",path:"/Settlement"},{title:"Housing",path:"/Housing"},{title:"Profiles",path:"/Profiles"}],options:{licenseKey:"5040F97D-84574F59-952CE4FC-EAD7E65C",navigation:!1,navigationPosition:"right",autoScrolling:!1,slidesNavigation:!0,slidesNavPosition:"bottom",controlArrows:!1,anchors:["About","Introduction","Maps","Settlement","Housing","Profiles"],sectionsColor:["#FFFFFF"]}}},methods:{moveDown:function(){this.$refs.fullpage.api.moveSectionDown()}}},de=ce,ue=(a("034f"),a("7496")),he=a("40dc"),pe=a("8336"),fe=a("62ad"),me=a("a523"),ge=a("a75b"),ve=a("553a"),be=a("8860"),ye=a("da13"),we=a("5d23"),Ce=a("e449"),_e=a("0fd9"),Se=a("2fa4"),ke=a("2a7f"),Ae=Object(h["a"])(de,i,r,!1,null,null,null),He=Ae.exports;f()(Ae,{VApp:ue["a"],VAppBar:he["a"],VBtn:pe["a"],VCol:fe["a"],VContainer:me["a"],VContent:ge["a"],VFooter:ve["a"],VList:be["a"],VListItem:ye["a"],VListItemTitle:we["a"],VMenu:Ce["a"],VRow:_e["a"],VSpacer:Se["a"],VToolbarItems:ke["a"],VToolbarTitle:ke["b"]});var Pe=a("a45e"),Ie=a.n(Pe),Te=a("f309");n["a"].use(Te["a"]);var xe=new Te["a"]({theme:{themes:{light:{primary:"#34b4ad",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c",darkBlack:"#1a1919",lightBlack:"#414240",green:"#d1d35e",teal:"#72b591",blue:"#519ec8",white:"#FFFFFF"}}}}),je=a("8c4f"),Oe=(a("bf40"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),Me=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h1",[e._v("Home")])])}],Fe={name:"Home",data:function(){return{}}},Be=Fe,Re=Object(h["a"])(Be,Oe,Me,!1,null,null,null),Ee=Re.exports;n["a"].use(je["a"]);var Ve=new je["a"]({routes:[{path:"/Home",name:"Home",component:Ee}]});n["a"].config.productionTip=!1,n["a"].use(Ie.a),new n["a"]({vuetify:xe,router:Ve,render:function(e){return e(He)}}).$mount("#app")},"67fd":function(e,t,a){e.exports=a.p+"img/pubhousingmap.6360dab5.jpg"},"6d24":function(e,t,a){"use strict";var n=a("ddc2"),i=a.n(n);i.a},"8a23":function(e,t,a){},c870:function(e,t,a){},ddc2:function(e,t,a){},e27c:function(e,t,a){"use strict";var n=a("407a"),i=a.n(n);i.a},eac8:function(e,t,a){}});
//# sourceMappingURL=app.c1f6d33d.js.map