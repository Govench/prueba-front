import{a as U}from"./chunk-2AWEGMEM.js";import{A as M,D as I,F as E,L as S,N as T,b as A,j as _,n as $,u as R,v,w as F,x as k}from"./chunk-6HBBM4ZE.js";import{Ab as H,Bb as P,C as y,Jb as w,Pa as a,Qa as p,V as q,_ as G,cb as m,da as g,gb as l,kb as i,lb as r,ma as j,mb as u,na as z,nb as B,o as D,oc as b,pb as f,qc as x,rb as d,zb as s}from"./chunk-S36E2RBU.js";var C=class t{constructor(n){this.http=n}baseURL=`${$.baseURL}/email`;forgotPassword(n){return this.http.post(`${this.baseURL}/forgot-password/${n}`,{},{observe:"response",responseType:"text"}).pipe(y(this.handleError))}resetPassword(n,e){return this.http.post(`${this.baseURL}/reset-password/${n}/${e}`,{},{observe:"response",responseType:"text"}).pipe(y(this.handleError))}validateToken(n){return this.http.get(`${this.baseURL}/validate?token=${n}`,{observe:"response"}).pipe(y(this.handleError))}handleError(n){return D(n)}static \u0275fac=function(e){return new(e||t)(G(A))};static \u0275prov=q({token:t,factory:t.\u0275fac,providedIn:"root"})};function X(t,n){t&1&&(i(0,"span"),s(1,"La contrase\xF1a es obligatoria."),r())}function Z(t,n){t&1&&(i(0,"span"),s(1,"Debe tener al menos 8 caracteres."),r())}function ee(t,n){if(t&1&&(i(0,"div",19),m(1,X,2,0,"span",20)(2,Z,2,0,"span",20),r()),t&2){let e,o,c=d();a(),l("ngIf",(e=c.passwordRecoveryForm.get("newPassword"))==null||e.errors==null?null:e.errors.required),a(),l("ngIf",(o=c.passwordRecoveryForm.get("newPassword"))==null||o.errors==null?null:o.errors.minlength)}}function te(t,n){t&1&&(i(0,"span"),s(1,"La confirmaci\xF3n es obligatoria."),r())}function oe(t,n){t&1&&(i(0,"span"),s(1,"Las contrase\xF1as no coinciden."),r())}function ne(t,n){if(t&1&&(i(0,"div",19),m(1,te,2,0,"span",20)(2,oe,2,0,"span",20),r()),t&2){let e,o=d();a(),l("ngIf",(e=o.passwordRecoveryForm.get("confirmPassword"))==null||e.errors==null?null:e.errors.required),a(),l("ngIf",o.passwordRecoveryForm.hasError("mismatch"))}}function re(t,n){if(t&1&&(i(0,"div",21),s(1),r()),t&2){let e=d();a(),P(" ",e.errorMessage," ")}}var O=class t{constructor(n,e,o){this.fb=n;this.router=e;this.emailPasswordService=o;this.passwordRecoveryForm=this.fb.group({newPassword:["",[v.required,v.minLength(8)]],confirmPassword:["",[v.required]]})}passwordRecoveryForm;isLoading=!1;errorMessage="";goBack(){this.router.navigate(["/password/recovery"])}resetPassword(){if(this.passwordRecoveryForm.invalid)return;let n=this.passwordRecoveryForm.get("newPassword")?.value,e=this.passwordRecoveryForm.get("confirmPassword")?.value;if(n!==e){this.errorMessage="Las contrase\xF1as no coinciden.";return}let o=localStorage.getItem("recoveryToken");if(!o){this.errorMessage="No se encontr\xF3 el token de recuperaci\xF3n. Intente nuevamente desde el proceso de recuperaci\xF3n.";return}this.isLoading=!0,this.errorMessage="",this.emailPasswordService.resetPassword(o,n).subscribe(c=>{c.status===200?this.router.navigate(["/password/confirmation"]):this.errorMessage="Hubo un problema al restablecer la contrase\xF1a. Intente nuevamente.",this.isLoading=!1},c=>{c.status===409?this.errorMessage="La nueva contrase\xF1a no puede ser igual a la contrase\xF1a actual.":this.errorMessage="Error en la solicitud. Verifique su conexi\xF3n e intente nuevamente.",this.isLoading=!1})}static \u0275fac=function(e){return new(e||t)(p(S),p(_),p(C))};static \u0275cmp=g({type:t,selectors:[["app-new-password"]],standalone:!0,features:[w],decls:26,vars:6,consts:[[1,"p-3","espaciado"],[1,"container","mt-5","mb-5"],[1,"row","d-flex","justify-content-center","bg-1","text-light","subtitle","m-2","p-2"],[1,"caja","d-flex","align-items-center"],[1,"fa-solid","fa-angle-left","fs-3",3,"click"],[1,"col-8","text-center"],[1,"text-light"],[1,"caja"],[1,"container","col-md-6","col-lg-4",3,"formGroup"],[1,"form-group"],["for","newPassword"],["id","newPassword","formControlName","newPassword","type","password","placeholder","Nueva contrase\xF1a",1,"form-control"],["class","alert alert-danger mt-2",4,"ngIf"],[1,"form-group","mt-3"],["for","confirmPassword"],["id","confirmPassword","formControlName","confirmPassword","type","password","placeholder","Confirmar contrase\xF1a",1,"form-control"],[1,"text-center","mt-4"],["type","button",1,"btn","btn-primary","rounded-pill","p-2","w-100",3,"click","disabled"],["class","alert alert-danger mt-3",4,"ngIf"],[1,"alert","alert-danger","mt-2"],[4,"ngIf"],[1,"alert","alert-danger","mt-3"]],template:function(e,o){if(e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"i",4),f("click",function(){return o.goBack()}),r()(),i(5,"div",5)(6,"h1"),s(7,"Recuperaci\xF3n de Contrase\xF1a"),r(),i(8,"p",6),s(9,"Ingrese su nueva contrase\xF1a para restaurar su cuenta"),r()(),u(10,"div",7),r()(),i(11,"form",8)(12,"div",9)(13,"label",10),s(14,"Ingrese su nueva contrase\xF1a"),r(),u(15,"input",11),m(16,ee,3,2,"div",12),r(),i(17,"div",13)(18,"label",14),s(19,"Confirmar contrase\xF1a"),r(),u(20,"input",15),m(21,ne,3,2,"div",12),r(),i(22,"div",16)(23,"button",17),f("click",function(){return o.resetPassword()}),s(24),r()(),m(25,re,2,1,"div",18),r()()),e&2){let c,h;a(11),l("formGroup",o.passwordRecoveryForm),a(5),l("ngIf",((c=o.passwordRecoveryForm.get("newPassword"))==null?null:c.invalid)&&((c=o.passwordRecoveryForm.get("newPassword"))==null?null:c.touched)),a(5),l("ngIf",((h=o.passwordRecoveryForm.get("confirmPassword"))==null?null:h.invalid)&&((h=o.passwordRecoveryForm.get("confirmPassword"))==null?null:h.touched)),a(2),l("disabled",o.passwordRecoveryForm.invalid||o.isLoading),a(),P(" ",o.isLoading?"Procesando...":"Restaurar contrase\xF1a"," "),a(),l("ngIf",o.errorMessage)}},dependencies:[T,M,R,F,k,I,E,x,b],styles:['@charset "UTF-8";.espaciado[_ngcontent-%COMP%]{height:70vh;display:flex;align-items:center;align-content:center;flex-direction:column}.p-3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%]{padding:20px}.bg-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#084aaa,#010635)}.row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:19px}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;border:2px solid #084AAA;border-radius:93px;font-size:17px}.subtitle[_ngcontent-%COMP%]{border-radius:50px}.caja[_ngcontent-%COMP%]{width:10%}.caja[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}label[_ngcontent-%COMP%]{font-size:17px}.btn[_ngcontent-%COMP%]{background-color:#084aaa;color:#fff;font-size:1.2em;transition:background-color .3s;width:20%}.fa-solid[_ngcontent-%COMP%]{cursor:pointer;transition:transform .2s ease-in-out}.fa-solid[_ngcontent-%COMP%]:hover{transform:scale(2.2)}']})};var N=class t{constructor(n){this.router=n}onFinish(){this.router.navigate(["/auth/login"])}static \u0275fac=function(e){return new(e||t)(p(_))};static \u0275cmp=g({type:t,selectors:[["app-password-confirmation"]],standalone:!0,features:[w],decls:10,vars:0,consts:[[1,"p-3","espaciado"],[1,"container","text-center","mt-5","mb-5"],[1,"row","d-flex","justify-content-center","bg-1","text-light","subtitle","m-2","p-4"],[1,"col","text-center"],[1,"confirmation-content","text-center"],[1,"fas","fa-database","confirmation-icon"],[1,"btn","btn-primary","rounded-pill","mt-4",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),s(5,"Contrase\xF1a Recuperada"),r()()()(),i(6,"div",4),u(7,"i",5),i(8,"button",6),f("click",function(){return o.onFinish()}),s(9,"Finalizar"),r()()())},styles:[".espaciado[_ngcontent-%COMP%]{height:70vh;display:flex;align-items:center;flex-direction:column}.bg-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#084aaa,#010635)}.subtitle[_ngcontent-%COMP%]{border-radius:50px}.confirmation-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1.5rem;margin-top:2rem}.confirmation-content[_ngcontent-%COMP%]   .confirmation-icon[_ngcontent-%COMP%]{font-size:150px;color:#084aaa}.confirmation-content[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background:linear-gradient(90deg,#084aaa,#010635);color:#fff;font-size:1.2em;border:none;padding:.75rem 2rem;transition:background .3s;width:fit-content}.confirmation-content[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#010635,#084aaa)}"]})};function ie(t,n){t&1&&(i(0,"span"),s(1,"El correo es obligatorio."),r())}function ae(t,n){t&1&&(i(0,"span"),s(1,"Introduzca un correo v\xE1lido."),r())}function se(t,n){if(t&1&&(i(0,"div",15),m(1,ie,2,0,"span",16)(2,ae,2,0,"span",16),r()),t&2){let e,o,c=d(2);a(),l("ngIf",(e=c.passwordRecoveryForm.get("email"))==null||e.errors==null?null:e.errors.required),a(),l("ngIf",(o=c.passwordRecoveryForm.get("email"))==null||o.errors==null?null:o.errors.email)}}function ce(t,n){if(t&1&&(i(0,"div",11)(1,"label",12),s(2,"Correo:"),r(),u(3,"input",13),m(4,se,3,2,"div",14),r()),t&2){let e,o=d();a(4),l("ngIf",((e=o.passwordRecoveryForm.get("email"))==null?null:e.invalid)&&((e=o.passwordRecoveryForm.get("email"))==null?null:e.touched))}}function le(t,n){if(t&1){let e=B();i(0,"div",17)(1,"button",18),f("click",function(){j(e);let c=d();return z(c.initiatePasswordReset())}),s(2),r()()}if(t&2){let e,o=d();a(),l("disabled",((e=o.passwordRecoveryForm.get("email"))==null?null:e.invalid)||o.isLoading),a(),P(" ",o.isLoading?"Enviando...":"Enviar"," ")}}function de(t,n){if(t&1&&(i(0,"div",15),s(1),r()),t&2){let e=d(2);a(),H(e.errorMessage)}}function me(t,n){if(t&1&&(i(0,"div",17)(1,"label",19),s(2,"Token de Recuperaci\xF3n:"),r(),u(3,"input",20),m(4,de,2,1,"div",14),r()),t&2){let e=d();a(4),l("ngIf",e.errorMessage)}}function pe(t,n){if(t&1){let e=B();i(0,"div",17)(1,"button",18),f("click",function(){j(e);let c=d();return z(c.validateToken())}),s(2," Validar Token "),r()()}t&2&&(a(),l("disabled",!1))}var L=class t{constructor(n,e,o){this.fb=n;this.router=e;this.emailPasswordService=o;this.passwordRecoveryForm=this.fb.group({email:["",[v.required,v.email]],recoveryToken:["",v.required]})}passwordRecoveryForm;showRecoveryTokenInput=!1;errorMessage="";isLoading=!1;snackBar;goBack(){this.router.navigate(["/auth/login"])}initiatePasswordReset(){let n=this.passwordRecoveryForm.get("email")?.value;this.isLoading=!0,this.emailPasswordService.forgotPassword(n).subscribe(e=>{e.status===201?(this.showRecoveryTokenInput=!0,this.snackBar.open("Se ha enviado el token a su correo","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"})):e.status===404?this.snackBar.open("El correo no se encuentra registrado","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"}):e.status===409&&this.snackBar.open("Ya se envi\xF3 un correo de recuperaci\xF3n a esta cuenta. Verique nuevamente","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"}),this.isLoading=!1},e=>{this.snackBar.open("Ya se envi\xF3 un correo de recuperaci\xF3n a esta cuenta. Verique nuevamente","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"}),this.isLoading=!1})}validateToken(){let n=this.passwordRecoveryForm.get("recoveryToken")?.value;this.emailPasswordService.validateToken(n).subscribe(e=>{e.body===!0?(localStorage.setItem("recoveryToken",n),localStorage.removeItem("recoveryTokenRequested"),this.router.navigate(["/password/new"])):this.snackBar.open("El token es inv\xE1lido o ha expirado. Verifique e intente nuevamente","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"})},e=>{this.snackBar.open("Error al verificar el token. Intente nuevamente.","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"})})}static \u0275fac=function(e){return new(e||t)(p(S),p(_),p(C))};static \u0275cmp=g({type:t,selectors:[["app-password-recovery"]],standalone:!0,features:[w],decls:16,vars:5,consts:[[1,"p-3","espaciado"],[1,"container","mt-5","mb-5"],[1,"row","d-flex","justify-content-center","bg-1","text-light","subtitle","m-2","p-2"],[1,"caja","d-flex","align-items-center"],[1,"fa-solid","fa-angle-left","fs-3",2,"cursor","pointer",3,"click"],[1,"col-8","text-center"],[1,"text-light"],[1,"caja"],[1,"container","col-md-6","col-lg-4",3,"formGroup"],["class","row",4,"ngIf"],["class","row mt-4",4,"ngIf"],[1,"row"],["for","email"],["id","email","formControlName","email","type","email","placeholder","Ingrese su email",1,"form-control"],["class","alert alert-danger mt-2",4,"ngIf"],[1,"alert","alert-danger","mt-2"],[4,"ngIf"],[1,"row","mt-4"],["type","button",1,"btn","rounded-pill","p-2","w-100",3,"click","disabled"],["for","recoveryToken"],["id","recoveryToken","formControlName","recoveryToken","type","text","placeholder","Ingrese el token de recuperaci\xF3n",1,"form-control"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"i",4),f("click",function(){return o.goBack()}),r()(),i(5,"div",5)(6,"h1"),s(7,"Recuperaci\xF3n de Contrase\xF1a"),r(),i(8,"p",6),s(9,"Ingrese el correo asociado a su cuenta para restaurar su contrase\xF1a"),r()(),u(10,"div",7),r()(),i(11,"form",8),m(12,ce,5,1,"div",9)(13,le,3,2,"div",10)(14,me,5,1,"div",10)(15,pe,3,1,"div",10),r()()),e&2&&(a(11),l("formGroup",o.passwordRecoveryForm),a(),l("ngIf",!o.showRecoveryTokenInput),a(),l("ngIf",!o.showRecoveryTokenInput),a(),l("ngIf",o.showRecoveryTokenInput),a(),l("ngIf",o.showRecoveryTokenInput))},dependencies:[T,M,R,F,k,I,E,x,b],styles:['@charset "UTF-8";.espaciado[_ngcontent-%COMP%]{height:70vh;display:flex;align-items:center;align-content:center;flex-direction:column}.p-3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%]{padding:20px}.bg-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#084aaa,#010635)}.row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:19px}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;border:2px solid #084AAA;border-radius:93px;font-size:17px}.subtitle[_ngcontent-%COMP%]{border-radius:50px}.caja[_ngcontent-%COMP%]{width:10%}.caja[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}label[_ngcontent-%COMP%]{font-size:17px}.btn[_ngcontent-%COMP%]{background-color:#084aaa;color:#fff;font-size:1.2em;transition:background-color .3s;width:20%}.fa-solid[_ngcontent-%COMP%]{cursor:pointer;transition:transform .2s ease-in-out}.fa-solid[_ngcontent-%COMP%]:hover{transform:scale(2.2)}']})};var Oe=[{path:"",component:U,children:[{path:"new",component:O},{path:"confirmation",component:N},{path:"recovery",component:L}]}];export{Oe as passwordRoutes};
