(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nRWD:function(e,t,c){"use strict";c.r(t),c.d(t,"NomenclatorModule",function(){return _});var n=c("Yj9t"),o=c("s7LF"),r=c("ofXK"),i=c("ahUO"),a=c("fY1a"),b=c("fXoL"),l=c("Ltw2"),s=c("yx6F"),d=c("tyNb"),g=c("K9ho");function m(e,t){if(1&e&&b.Lb(0,"app-ayuda",34),2&e){b.bc();const e=b.oc(22);b.gc("errors",e.errors)}}function f(e,t){if(1&e&&(b.Pb(0,"option"),b.vc(1),b.Ob()),2&e){const e=b.bc();b.yb(1),b.xc(" ",e.nomenclatorService.selectedNomenclator.fathername," ")}}function u(e,t){if(1&e){const e=b.Qb();b.Pb(0,"option",35),b.Zb("click",function(){b.pc(e);const c=t.$implicit;return b.bc().saveFather(c._id,c.order)}),b.vc(1),b.Ob()}if(2&e){const e=t.$implicit;b.yb(1),b.xc(" ",e.name," ")}}function p(e,t){if(1&e&&(b.Pb(0,"a",36),b.vc(1),b.Ob()),2&e){const e=b.bc();b.yb(1),b.wc(e.error)}}let v=(()=>{class e{constructor(e,t,c){this.nomenclatorService=e,this.helpService=t,this.route=c}ngOnInit(){this.getNom()}Add(e){if(e.value.active=!0,e.value._id){if(this.idfather)e.value.fatherid=this.idfather,e.value.order=this.orderfather+1;else for(let t=0;t<this.nomenclators.length;t++){const c=this.nomenclators[t];c._id==this.nomenclatorService.selectedNomenclator.fatherid&&(e.value.fatherid=c._id,e.value.order=c.order+1,t=this.nomenclators.length)}this.nomenclatorService.updateNomenclator(e.value).subscribe(e=>{this.nomenclatorService.selectedNomenclator=new a.a,this.helpService.showNotif("Se Guardaron los Cambios."),this.route.navigate(["/nomenclator/list"])},e=>this.error=e)}else e.value.fatherid=this.idfather,e.value.order=this.orderfather+1,this.nomenclatorService.postNomenclator(e.value).subscribe(e=>{this.nomenclatorService.selectedNomenclator=new a.a,this.helpService.showNotif("Nomenclador Guardado. Puede crear nuevos nomencladores.")},e=>this.error=e[0])}getNom(){this.nomenclatorService.getNomenclators().subscribe(e=>{this.nomenclators=e},e=>{console.log(e)})}saveFather(e,t){this.idfather=e,this.orderfather=t}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(l.a),b.Kb(s.a),b.Kb(d.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-create-nomenclator"]],decls:40,vars:10,consts:[[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"tab-content","p-0"],["id","revenue-chart1",1,"chart","tab-pane","active",2,"position","relative","height","auto"],[1,"row"],[1,"col-lg-5","d-none","d-lg-block"],["src","../../../../assets/img/nomen1.png","alt","",1,"img-fluid"],[1,"col-lg-7"],[1,"p-5"],[1,"text-center"],[1,"h4","text-gray-900","mb-4"],[1,"user",3,"ngSubmit"],["form","ngForm"],[1,"form-group","row"],[1,"col-sm-6","mb-3","mb-sm-0"],["type","text","hidden","","name","_id","id","_id",3,"ngModel","ngModelChange"],["_id","ngModel"],["type","text","placeholder","Nombre","name","name","id","name","required","",1,"form-control","form-control-user",3,"ngModel","ngModelChange"],["name","ngModel"],[3,"errors",4,"ngIf"],[1,"col-sm-6"],["type","text","placeholder","Acr\xf3nimo","name","acronym","id","acronym",1,"form-control","form-control-user",3,"ngModel","ngModelChange"],["acronym","ngModel"],[1,"form-group"],["name","fathername",1,"custom-select",3,"ngModel","ngModelChange"],["fathername","ngModel"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["type","text","placeholder","Descripci\xf3n","name","description","id","description",1,"form-control","form-control-user",3,"ngModel","ngModelChange"],["description","ngModel"],["style","color: red;",4,"ngIf"],["type","submit",1,"btn","btn-primary","btn-user","btn-block",3,"disabled"],[3,"errors"],[3,"click"],[2,"color","red"]],template:function(e,t){if(1&e){const e=b.Qb();b.Pb(0,"div",0),b.Pb(1,"div",1),b.Pb(2,"h4",2),b.vc(3," Nuevo Nomenclador "),b.Ob(),b.Ob(),b.Pb(4,"div",3),b.Pb(5,"div",4),b.Pb(6,"div",5),b.Pb(7,"div",6),b.Pb(8,"div",7),b.Lb(9,"img",8),b.Ob(),b.Pb(10,"div",9),b.Pb(11,"div",10),b.Pb(12,"div",11),b.Pb(13,"h1",12),b.vc(14,"Crear Nomenclador!"),b.Ob(),b.Ob(),b.Pb(15,"form",13,14),b.Zb("ngSubmit",function(){b.pc(e);const c=b.oc(16);return t.Add(c)}),b.Pb(17,"div",15),b.Pb(18,"div",16),b.Pb(19,"input",17,18),b.Zb("ngModelChange",function(e){return t.nomenclatorService.selectedNomenclator._id=e}),b.Ob(),b.Pb(21,"input",19,20),b.Zb("ngModelChange",function(e){return t.nomenclatorService.selectedNomenclator.name=e}),b.Ob(),b.tc(23,m,1,1,"app-ayuda",21),b.Ob(),b.Pb(24,"div",22),b.Pb(25,"input",23,24),b.Zb("ngModelChange",function(e){return t.nomenclatorService.selectedNomenclator.acronym=e}),b.Ob(),b.Ob(),b.Ob(),b.Pb(27,"div",25),b.Pb(28,"select",26,27),b.Zb("ngModelChange",function(e){return t.nomenclatorService.selectedNomenclator.fathername=e}),b.Pb(30,"option"),b.vc(31,"---Nomenclador Padre---"),b.Ob(),b.tc(32,f,2,1,"option",28),b.tc(33,u,2,1,"option",29),b.Ob(),b.Ob(),b.Pb(34,"div",25),b.Pb(35,"textarea",30,31),b.Zb("ngModelChange",function(e){return t.nomenclatorService.selectedNomenclator.description=e}),b.Ob(),b.Ob(),b.tc(37,p,2,1,"a",32),b.Pb(38,"button",33),b.vc(39," A\xf1adir Producto "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=b.oc(16),c=b.oc(22);b.yb(19),b.gc("ngModel",t.nomenclatorService.selectedNomenclator._id),b.yb(2),b.gc("ngModel",t.nomenclatorService.selectedNomenclator.name),b.yb(2),b.gc("ngIf",c.invalid&&c.touched),b.yb(2),b.gc("ngModel",t.nomenclatorService.selectedNomenclator.acronym),b.yb(3),b.gc("ngModel",t.nomenclatorService.selectedNomenclator.fathername),b.yb(4),b.gc("ngIf",t.nomenclatorService.selectedNomenclator.fathername),b.yb(1),b.gc("ngForOf",t.nomenclators),b.yb(2),b.gc("ngModel",t.nomenclatorService.selectedNomenclator.description),b.yb(2),b.gc("ngIf",t.error),b.yb(1),b.gc("disabled",e.invalid)}},directives:[o.u,o.l,o.m,o.b,o.k,o.n,o.r,r.j,o.s,o.o,o.t,r.i,g.a],styles:[""]}),e})();var h=c("G0yt");function P(e,t){1&e&&(b.Pb(0,"div"),b.vc(1," No hay elementos que mostrar. "),b.Ob())}function O(e,t){if(1&e){const e=b.Qb();b.Pb(0,"span",20),b.Zb("click",function(){b.pc(e);const t=b.bc().$implicit,c=b.oc(15),n=b.bc(2);return c.click(),n.desactivarNom(t)}),b.vc(1,"Activo"),b.Ob()}}function y(e,t){if(1&e){const e=b.Qb();b.Pb(0,"span",21),b.Zb("click",function(){b.pc(e);const t=b.bc().$implicit,c=b.oc(15),n=b.bc(2);return c.click(),n.activarNom(t)}),b.vc(1,"Inactivo"),b.Ob()}}function N(e,t){if(1&e){const e=b.Qb();b.Pb(0,"p",22),b.vc(1,"Est\xe1s seguro de eliminar el elemento?"),b.Ob(),b.Pb(2,"button",23),b.Zb("click",function(){b.pc(e);const t=b.bc().$implicit;return b.bc(2).deleteNom(t._id)}),b.vc(3,"Eliminar"),b.Ob(),b.Pb(4,"button",24),b.vc(5,"Cancelar"),b.Ob()}}function k(e,t){if(1&e){const e=b.Qb();b.Pb(0,"tr"),b.Pb(1,"td"),b.vc(2),b.Ob(),b.Pb(3,"td"),b.vc(4),b.Ob(),b.Pb(5,"td"),b.vc(6),b.Ob(),b.Pb(7,"td"),b.vc(8),b.Ob(),b.Pb(9,"td"),b.vc(10),b.Ob(),b.Pb(11,"td"),b.tc(12,O,2,0,"span",12),b.tc(13,y,2,0,"span",13),b.Pb(14,"input",14,15),b.Zb("ngModelChange",function(e){return t.$implicit.active=e}),b.Ob(),b.Pb(16,"i",16),b.Zb("click",function(){b.pc(e);const c=t.$implicit;return b.bc(2).edit(c)}),b.Ob(),b.Pb(17,"a",17),b.Lb(18,"i",18),b.Ob(),b.tc(19,N,6,0,"ng-template",null,19,b.uc),b.Ob(),b.Ob()}if(2&e){const e=t.$implicit,c=b.oc(20);b.yb(2),b.wc(e.name),b.yb(2),b.wc(e.acronym),b.yb(2),b.wc(e.description),b.yb(2),b.wc(e.fathername),b.yb(2),b.wc(e.order),b.yb(2),b.gc("ngIf",e.active),b.yb(1),b.gc("ngIf",!e.active),b.yb(1),b.gc("ngModel",e.active),b.yb(3),b.gc("ngbPopover",c)}}function M(e,t){if(1&e&&(b.Pb(0,"table",10),b.Pb(1,"thead"),b.Pb(2,"tr"),b.Pb(3,"th"),b.vc(4,"Nombre"),b.Ob(),b.Pb(5,"th"),b.vc(6,"Acr\xf3nimo"),b.Ob(),b.Pb(7,"th"),b.vc(8,"Descripci\xf3n"),b.Ob(),b.Pb(9,"th"),b.vc(10,"Padre"),b.Ob(),b.Pb(11,"th"),b.vc(12,"Orden"),b.Ob(),b.Pb(13,"th"),b.vc(14,"Acciones"),b.Ob(),b.Ob(),b.Ob(),b.Pb(15,"tbody"),b.tc(16,k,21,9,"tr",11),b.Ob(),b.Pb(17,"tfoot"),b.Pb(18,"tr"),b.Pb(19,"th"),b.vc(20,"Nombre"),b.Ob(),b.Pb(21,"th"),b.vc(22,"Acr\xf3nimo"),b.Ob(),b.Pb(23,"th"),b.vc(24,"Descripci\xf3n"),b.Ob(),b.Pb(25,"th"),b.vc(26,"Padre"),b.Ob(),b.Pb(27,"th"),b.vc(28,"Orden"),b.Ob(),b.Pb(29,"th"),b.vc(30,"Acciones"),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&e){const e=b.bc();b.yb(16),b.gc("ngForOf",e.nomenclators)}}function S(e,t){1&e&&(b.Pb(0,"li",27),b.Pb(1,"a",32),b.vc(2,"..."),b.Ob(),b.Ob())}function I(e,t){if(1&e){const e=b.Qb();b.Pb(0,"li",33),b.Zb("click",function(){b.pc(e);const t=b.bc(2);return t.getNomenclators(t.beforepage-1)}),b.Pb(1,"a",32),b.vc(2),b.Ob(),b.Ob()}if(2&e){const e=b.bc(2);b.yb(2),b.wc(e.beforepage-1)}}function w(e,t){if(1&e){const e=b.Qb();b.Pb(0,"li",33),b.Zb("click",function(){b.pc(e);const t=b.bc(2);return t.getNomenclators(t.beforepage)}),b.Pb(1,"a",32),b.vc(2),b.Ob(),b.Ob()}if(2&e){const e=b.bc(2);b.yb(2),b.wc(e.beforepage)}}function x(e,t){if(1&e){const e=b.Qb();b.Pb(0,"li",33),b.Zb("click",function(){b.pc(e);const t=b.bc(2);return t.getNomenclators(t.nextpage)}),b.Pb(1,"a",32),b.vc(2),b.Ob(),b.Ob()}if(2&e){const e=b.bc(2);b.yb(2),b.wc(e.nextpage)}}function Z(e,t){if(1&e){const e=b.Qb();b.Pb(0,"li",33),b.Zb("click",function(){b.pc(e);const t=b.bc(2);return t.getNomenclators(t.nextpage+1)}),b.Pb(1,"a",32),b.vc(2),b.Ob(),b.Ob()}if(2&e){const e=b.bc(2);b.yb(2),b.wc(e.nextpage+1)}}function C(e,t){1&e&&(b.Pb(0,"li",27),b.Pb(1,"a",32),b.vc(2,"..."),b.Ob(),b.Ob())}function A(e,t){if(1&e){const e=b.Qb();b.Pb(0,"div",25),b.Pb(1,"ul",26),b.Pb(2,"li",27),b.Pb(3,"a",28),b.Zb("click",function(){return b.pc(e),b.bc().getNomenclators(1)}),b.vc(4,"\xab"),b.Ob(),b.Ob(),b.tc(5,S,3,0,"li",29),b.tc(6,I,3,1,"li",30),b.tc(7,w,3,1,"li",30),b.Pb(8,"li",31),b.Pb(9,"a",32),b.vc(10),b.Ob(),b.Ob(),b.tc(11,x,3,1,"li",30),b.tc(12,Z,3,1,"li",30),b.tc(13,C,3,0,"li",29),b.Pb(14,"li",27),b.Pb(15,"a",28),b.Zb("click",function(){b.pc(e);const t=b.bc();return t.getNomenclators(t.pages)}),b.vc(16,"\xbb"),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=b.bc();b.yb(5),b.gc("ngIf",e.currentPage>3),b.yb(1),b.gc("ngIf",e.currentPage>2),b.yb(1),b.gc("ngIf",e.currentPage>1),b.yb(3),b.wc(e.currentPage),b.yb(1),b.gc("ngIf",e.currentPage<e.pages),b.yb(1),b.gc("ngIf",e.currentPage<e.pages-1),b.yb(1),b.gc("ngIf",e.currentPage<e.pages-2)}}const F=function(){return["/nomenclator/create"]},L=[{path:"",pathMatch:"full",redirectTo:"list"},{path:"create",component:v,canActivate:[i.a]},{path:"list",component:(()=>{class e{constructor(e,t){this.nomenclatorService=e,this.route=t}ngOnInit(){this.getNomenclators()}getNomenclators(e){e||(e=1),this.nomenclatorService.getNomenclatorsPaginated(e).subscribe(e=>{this.nomenclators=e.nomenclator,this.pages=e.pages,this.currentPage=e.current,this.beforepage=this.currentPage-1,this.nextpage=this.beforepage+2})}edit(e){console.log(e),this.nomenclatorService.selectedNomenclator=e,this.route.navigate(["/nomenclator/create"])}activarNom(e){e.active=!0,this.nomenclatorService.updateNomenclator(e).subscribe(e=>{console.log(e)},e=>console.log(e))}desactivarNom(e){e.active=!1,this.nomenclatorService.updateNomenclator(e).subscribe(e=>{console.log(e)},e=>console.log(e))}deleteNom(e){console.log(e),this.nomenclatorService.deleteNomenclator(e).subscribe(e=>{console.log(e),this.getNomenclators(this.currentPage)},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(l.a),b.Kb(d.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-list-nomenclators"]],features:[b.xb([h.d])],decls:12,vars:5,consts:[[1,"card"],[1,"card-header"],[1,"card-title"],[1,"fas","fa-stream","mr-1"],[1,"btn","btn-primary",2,"float","right",3,"routerLink"],[1,"nav-icon","fas","fa-plus","mr-1"],[1,"card-body"],[4,"ngIf"],["id","example1","class","table table-bordered table-striped",4,"ngIf"],["class","card-footer",4,"ngIf"],["id","example1",1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],["data-toggle","tooltip","style","font-size:15px; cursor: pointer;","title","Nomenclador disponible","class","badge badge-primary",3,"click",4,"ngIf"],["data-toggle","tooltip","style","font-size:15px; cursor: pointer;","title","Nomenclador no disponible","class","badge badge-danger",3,"click",4,"ngIf"],["type","checkbox",1,"checkbox","d-none",3,"ngModel","ngModelChange"],["checkbox",""],[1,"far","fa-edit",2,"font-size","18px","cursor","pointer","margin-left","5%","margin-right","5%",3,"click"],["popoverTitle","Alerta!",3,"ngbPopover"],[1,"far","fa-trash-alt",2,"font-size","18px","cursor","pointer"],["imagen",""],["data-toggle","tooltip","title","Nomenclador disponible",1,"badge","badge-primary",2,"font-size","15px","cursor","pointer",3,"click"],["data-toggle","tooltip","title","Nomenclador no disponible",1,"badge","badge-danger",2,"font-size","15px","cursor","pointer",3,"click"],[2,"text-align","center"],[1,"btn","btn-danger","mr-3","ml-3",3,"click"],[1,"btn","btn-dark"],[1,"card-footer"],[1,"pagination","pagination-md",2,"float","right"],[1,"page-item"],[1,"page-link",3,"click"],["class","page-item",4,"ngIf"],["class","page-item",3,"click",4,"ngIf"],[1,"page-item","active"],[1,"page-link"],[1,"page-item",3,"click"]],template:function(e,t){1&e&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.Pb(2,"h3",2),b.Lb(3,"i",3),b.vc(4,"Listado de Nomencladores"),b.Ob(),b.Pb(5,"button",4),b.Lb(6,"i",5),b.vc(7,"Nuevo Nomenclador"),b.Ob(),b.Ob(),b.Pb(8,"div",6),b.tc(9,P,2,0,"div",7),b.tc(10,M,31,1,"table",8),b.Ob(),b.tc(11,A,17,7,"div",9),b.Ob()),2&e&&(b.yb(5),b.gc("routerLink",b.jc(4,F)),b.yb(4),b.gc("ngIf",t.nomenclators.length<1),b.yb(1),b.gc("ngIf",t.nomenclators.length>0),b.yb(1),b.gc("ngIf",t.nomenclators.length>0))},directives:[d.b,r.j,r.i,o.a,o.k,o.n,h.c],styles:[".page-item[_ngcontent-%COMP%]{cursor:pointer}"]}),e})(),canActivate:[i.a]}];let Q=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[d.d.forChild(L)],d.d]}),e})(),_=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[r.b,Q,o.g,n.AuthModule,h.a]]}),e})()}}]);