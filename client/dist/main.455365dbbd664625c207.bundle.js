webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},1:function(e,t){},L0bZ:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"/* users */button.user{min-width:80%;padding:10px 10px;margin-top:8px ;margin-bottom:8px }.messages{padding:10px;height:280px;overflow-y:auto}.users{height:370px;overflow-y:auto}\n\n\n\n/* parent of all msg */.messages .msg-parent{width:70%;margin-bottom:15px}\n/* all msg */.messages .msg-parent .msg{background:#424242;color:#fff;font-size:15px;border-radius:8px;padding:10px 15px;word-break:break-all;margin-bottom:0}\n/* the chap af all msg */.messages .msg-parent .crop{background:#424242;width:3%;height:11px;margin-left:3%;-webkit-clip-path:polygon(100% 0,0 0,0 100%);clip-path:polygon(100% 0,0 0,0 100%)}\n/* parent my msg */.messages .msg-parent.me{margin-left:30%;text-align:right}\n/* chap of my msg */.messages .msg-parent.me .crop{background:#424242;width:3%;height:11px;margin-left:94%;-webkit-clip-path:polygon(100% 0,0 0,100% 100%);clip-path:polygon(100% 0,0 0,100% 100%)}\n\n\n\n/* date */.messages .date{color:hsla(0,0%,100%,.4);font-size:10px;padding-top:7px;width:100%;display:inline-block;text-align:right}.messages .msg-parent.me .date{text-align:left}",""]),e.exports=e.exports.toString()},X8cT:function(e,t){e.exports='\n\x3c!-- show error in signup --\x3e\n<div *ngIf="ErrorAlert"  class="alert alert-danger">\n  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n  <strong>Signin Fail</strong> Pleace Ckeck Your Date ... \n</div>\n\n\n<form  role="form" [formGroup]=\'myform\' (submit)=\'onSubmit()\'>\n  \x3c!-- \n    set class error if formControlName us invalid\n    set class success if formControlName us valid\n\n    Validator [email , required] in html only\n  --\x3e\n  <div class="form-group has-feedback" \n    [ngClass]="{\n      \'has-error\' : myform.controls.email.invalid && myform.controls.email.touched ,\n      \'has-success\' : myform.controls.email.valid\n    }" \n  >\n    <label for="" class="control-label">Email</label>\n    <input \n      type="email" \n      class="form-control" \n      placeholder="Email"\n      formControlName=\'email\'\n      required   \n      email\n    >\n    <small *ngIf="myform.controls.email.invalid && myform.controls.email.touched"  class="text-danger"> Must be 5-30 characters long</small>  \n  </div>\n\n  \x3c!-- \n    set class error if formControlName us invalid\n    set class success if formControlName us valid\n\n    Validator [required] in html only\n  --\x3e\n  <div class="form-group has-feedback" \n    [ngClass]="{\n      \'has-error\' : myform.controls.password.invalid && myform.controls.password.touched ,\n      \'has-success\' : myform.controls.password.valid\n    }"\n  >\n    <label for="" class="control-label">Password</label>\n    <input \n      type="password" \n      class="form-control" \n      placeholder="Password"\n      formControlName=\'password\'\n      required  \n    >\n    <small *ngIf="myform.controls.password.invalid && myform.controls.password.touched"  class="text-danger"> Must be 8-30 characters long</small>  \n  </div>\n  \x3c!-- \n    submit is disabled if form invalid\n  --\x3e\n\n  <button type="submit" [disabled]=\'myform.invalid\'  class=" hvr-buzz-out  btn btn-primary" style="padding:10px">Submit</button>\n</form>\n'},YuZA:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="YuZA"},aeEO:function(e,t){e.exports="<nav class=\" col-md-12\">\n  <ul class=\" nav nav-tabs \">\n      \x3c!--\n        isLogin()\n          return true or false\n          check if user is login with token\n      --\x3e\n    <li><a  routerLinkActive='active' routerLink='signin' *ngIf=\"!isLogin()\" > signin</a></li>\n    <li><a routerLinkActive='active' routerLink='signup' *ngIf=\"!isLogin()\" > signup</a></li>\n    <li><a routerLinkActive='active' routerLink='logout' *ngIf=\"isLogin()\" > logout</a></li>\n  </ul>\n\n  <br>\n  <router-outlet></router-outlet>\n</nav>"},aoli:function(e,t){e.exports='<h1 class="text-center hidden-xs">Real Time Chat</h1>\n<h3 class="text-center visible-xs ">Real Time Chat</h3>\n<hr>\n\n\x3c!-- panel-default --\x3e\n<div class="panel panel-default chat">\n  <div class="panel-body">\n\n    <div class="row">\n\n      \x3c!-- users block--\x3e\n      <div class="col-md-3"  >\n        \x3c!-- check if users to display users --\x3e\n        <div *ngIf="users" class="users" >\n          \x3c!-- for loop users --\x3e\n          <div *ngFor="let user of users" >\n            \n            \x3c!-- \n              onclick check if caller == user\n              if caller if user\n              clearCaller\n              else\n              set this user in caller\n              and set class success remove default\n\n              if click anther btn \n              set anther user in caller\n              set class default remove success\n              \n             --\x3e\n            <button \n              [ngClass]=\n              "{\n                \'btn-success\' : user._id == caller?._id, \n                \'btn-default\' : user._id != caller?._id  \n              }"\n              class="btn  center-block user hvr-buzz-out " \n              title=\'{{user.email}}\' \n              (click)=\'user._id == caller?._id ? clearCaller() : call(user);\'\n            >\n              {{user.name}}\n           \n              \x3c!-- if user online --\x3e\n              <span *ngIf="user.online" style="margin-left:5px" class="glyphicon glyphicon-send text-success"></span>\n              <span *ngIf="!user.online" style="margin-left:5px"  class="glyphicon glyphicon-send"></span>\n            </button>\n\n          </div>\n          \x3c!-- end for loop users --\x3e\n          \n\n          \x3c!-- check if users to display no users --\x3e\n          <div *ngIf="!users.length" >\n            <button class="btn btn-danger center-block hvr-buzz-out user">No Users</button>\n          </div>\n          \x3c!-- end check if users to display no users --\x3e\n        \n        </div>\n        \x3c!-- end for loop users --\x3e\n      </div>\n      \x3c!-- end users block --\x3e\n      \n\n      \x3c!-- message body block --\x3e\n      <div class="col-md-9 panel-body"   *ngIf=\'caller\'>\n\n        \x3c!-- messages --\x3e\n        <div class="messages"  #scrollMe [scrollTop]="scrollMe.scrollHeight">\n          <div *ngFor="let message of messages" >\n            \n\n            \x3c!-- start msg parent --\x3e\n            <div class="msg-parent"\n              [ngClass]="{\n                \'me\' : message.user._id == _id \n              }"\n            >\n              \x3c!-- message.user._id == _id  -> this user if owner this msg --\x3e\n              <p class="msg ">\n\n                {{message.content}}\n\n                <br>\n\n                <span class="date" >\n                    {{message.created | timeAgo}}\n                </span>\n              </p>\n              <p class="crop"></p>\n            </div>\n            \x3c!-- end start msg parent --\x3e\n\n\n          </div>\n        </div>\n        \x3c!-- end messages --\x3e\n\n        <br>\n        \n        \x3c!-- form sent message --\x3e\n        <form method="post" (submit)=\'content.value ? sent(content.value) : false; content.value=""; content.focus();\'>\n          <div class="input-group">\n            <input type="text" class="form-control" placeholder="Message...." #content >\n            <div class="input-group-btn">\n              <button class="btn btn-primary " type="submit">Sent</button>\n            </div>\n          </div>\n        </form>\n        \x3c!-- end form sent message --\x3e\n\n      </div>\n      \x3c!-- end message body block --\x3e\n\n    </div>\n  </div>\n\n</div> \n\x3c!-- panel-default --\x3e\n\n'},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("LMZF"),r=n("x8Hs"),s=n("UHIZ"),a=n("RyBE"),i=n("TMwh"),c=n("0nO6"),l={production:!0,url:""},u=n("MjLF"),f=(n("GQSG"),n("AP4T")),p=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(e){this._http=e,this.io=u(l.url)}return e.prototype.socketIO_login=function(e){var t=this;return this.io.emit("login",e),new f.a(function(e){t.io.on("login",function(t){e.next(t.user)})})},e.prototype.socketIO_refresh=function(){var e=this;return new f.a(function(t){e.io.on("refresh",function(e){t.next(e.users.filter(function(e){return e._id!=localStorage.getItem("_id")}))})})},e.prototype.SocketIo_GetMsg=function(){var e=this;return new f.a(function(t){e.io.on("msg",function(e){t.next(e)})})},e.prototype.SocketIo_SentMsg=function(e){this.io.emit("msg",e)},e.prototype.SocketIO_error=function(){var e=this;return new f.a(function(t){e.io.on("err",function(e){t.next(e)})})},e.prototype.getMessages=function(e,t){return this._http.get(l.url+"/api/messages?userId="+e+"&&callerId="+t).map(function(e){return e.json()})},e=p([Object(o.Injectable)(),d("design:paramtypes",[i.b])],e)}(),h=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(e,t,n){this._http=e,this._router=t,this._chatService=n}return e.prototype.isLogin=function(){return null!=localStorage.getItem("token")&&null!=localStorage.getItem("_id")},e.prototype.ckeckAuth=function(){var e=this,t=new i.a;t.append("Content-Type","application/json"),this._http.get(l.url+"/users/ckeckAuth?token="+localStorage.getItem("token")+"&&_id="+localStorage.getItem("_id"),{headers:t}).map(function(e){return e.json()}).subscribe(function(t){0==t.auth&&e.Logout()},function(t){console.log(t),e.Logout()})},e.prototype.Login=function(e,t){localStorage.setItem("token",e),localStorage.setItem("_id",t),this._chatService.io.connect(),this._router.navigate(["/chat"])},e.prototype.Logout=function(){localStorage.clear(),this._chatService.io.disconnect(),this._router.navigate(["/user","signin"])},e.prototype.signupUser=function(e){var t=new i.a;return t.append("Content-Type","application/json"),this._http.post(l.url+"/users/signup",e,{headers:t}).map(function(e){return e.json()})},e.prototype.signinUser=function(e){var t=new i.a;return t.append("Content-Type","application/json"),this._http.post(l.url+"/users/signin",e,{headers:t}).map(function(e){return e.json()})},e=h([Object(o.Injectable)(),g("design:paramtypes",[i.b,s.a,m])],e)}(),v=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},y=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(){function e(e){this._authService=e,this._authService.isLogin()&&this._authService.ckeckAuth()}return e.prototype.isLogin=function(){return this._authService.isLogin()},e=v([Object(o.Component)({selector:"app-root",template:n("efyd")}),y("design:paramtypes",[b])],e)}(),_=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},w=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(){function e(e){this._authService=e}return e.prototype.isLogin=function(){return this._authService.isLogin()},e.prototype.ngOnInit=function(){},e=_([Object(o.Component)({selector:"app-user",template:n("aeEO")}),w("design:paramtypes",[b])],e)}(),j=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},R=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(){function e(e,t){this._router=e,this._authService=t,this.myform=new c.b({name:new c.a("",[c.e.required,c.e.minLength(5),c.e.maxLength(30)]),email:new c.a("",[c.e.required,c.e.email]),password:new c.a("",[c.e.required,c.e.minLength(8),c.e.maxLength(30)])}),this.ErrorAlert=!1}return e.prototype.onSubmit=function(){var e=this;this._authService.signupUser({name:this.myform.controls.name.value,email:this.myform.controls.email.value,password:this.myform.controls.password.value}).subscribe(function(t){e._authService.Login(t.token,t._id),e.myform.reset()},function(t){e.ErrorAlert=!0,console.log(t)})},e.prototype.ngOnInit=function(){},e=j([Object(o.Component)({selector:"app-signup",template:n("sx2t")}),R("design:paramtypes",[s.a,b])],e)}(),S=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},I=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(){function e(e,t){this._router=e,this._authService=t,this.myform=new c.b({email:new c.a("",[c.e.required,c.e.email]),password:new c.a("",[c.e.required,c.e.minLength(8),c.e.maxLength(30)])}),this.ErrorAlert=!1}return e.prototype.onSubmit=function(){var e=this;this._authService.signinUser({email:this.myform.controls.email.value,password:this.myform.controls.password.value}).subscribe(function(t){e._authService.Login(t.token,t._id),e.myform.reset()},function(t){e.ErrorAlert=!0,console.log(t)})},e.prototype.ngOnInit=function(){},e=S([Object(o.Component)({selector:"app-signin",template:n("X8cT")}),I("design:paramtypes",[s.a,b])],e)}(),C=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},P=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(){function e(e){this._authService=e}return e.prototype.logout=function(){this._authService.Logout()},e.prototype.ngOnInit=function(){},e=C([Object(o.Component)({selector:"app-logout",template:'\n    <button type="button" class=" hvr-buzz-out  btn btn-danger" style="padding:10px" (click)="logout()">Logout</button>\n  '}),P("design:paramtypes",[b])],e)}(),M=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},N=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},E=function(){function e(e,t){var n=this;this._chatService=e,this._authService=t,this._id=localStorage.getItem("_id"),this.users=[],this.messages=[],this._chatService.socketIO_login(localStorage.getItem("token")).subscribe(function(e){n.user=e}),this._chatService.socketIO_refresh().subscribe(function(e){n.users=e}),this._chatService.SocketIo_GetMsg().subscribe(function(e){n.caller&&n.caller._id==e.user._id&&n.messages.push(e)}),this._chatService.SocketIO_error().subscribe(function(e){console.log(e),n._authService.Logout()})}return e.prototype.sent=function(e){var t={content:e,user:this.user,caller:this.caller,created:(new Date).toISOString()};this._chatService.io.emit("msg",t),this.messages.push(t)},e.prototype.call=function(e){var t=this;this.caller=e,this._chatService.getMessages(this._id,e._id).subscribe(function(e){t.messages=e})},e.prototype.clearCaller=function(){this.caller=null,this.messages=[]},e.prototype.ngOnInit=function(){},e=M([Object(o.Component)({selector:"app-chat",template:n("aoli"),styles:[n("L0bZ")]}),N("design:paramtypes",[m,b])],e)}(),q=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},D=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(){function e(e,t){this._authService=e,this._router=t}return e.prototype.canActivate=function(){return!!this._authService.isLogin()||(this._router.navigate(["/user","signin"]),!1)},e=q([Object(o.Injectable)(),D("design:paramtypes",[b,s.a])],e)}(),z=function(){function e(e,t){this._authService=e,this._router=t}return e.prototype.canActivate=function(){return!this._authService.isLogin()||(this._router.navigate(["/user","logout"]),!1)},e=q([Object(o.Injectable)(),D("design:paramtypes",[b,s.a])],e)}(),G=[{path:"",redirectTo:"user",pathMatch:"full"},{path:"user",component:k,children:[{path:"",pathMatch:"full",redirectTo:"signin"},{path:"signin",component:L,canActivate:[z]},{path:"signup",component:O,canActivate:[z]},{path:"logout",component:A,canActivate:[T]}]},{path:"chat",component:E,canActivate:[T]}],U=n("vGUT"),Z=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},F=function(){function e(){}return e=Z([Object(o.NgModule)({declarations:[x,k,E,L,O,A,U.TimeAgoPipe],imports:[a.a,c.c,i.c,s.b.forRoot(G),c.d],providers:[T,z,m,b],bootstrap:[x]})],e)}();l.production&&Object(o.enableProdMode)(),Object(r.a)().bootstrapModule(F).catch(function(e){return console.log(e)})},efyd:function(e,t){e.exports='\n<nav class="navbar navbar-default navbar-inverse" role="navigation">\n  \x3c!-- Brand and toggle get grouped for better mobile display --\x3e\n  <div class="container">  \n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" >Ahmed</a>\n    </div>\n\n    <div class="collapse navbar-collapse navbar-ex1-collapse">\n      <ul class="nav navbar-nav">\n        <li><a  routerLinkActive=\'active\' routerLink="user">user</a></li>\n        \x3c!-- hide chat is user is not login --\x3e\n        <li><a  routerLinkActive=\'active\' routerLink="chat" *ngIf="isLogin()" >chat</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class="container" >\n  <router-outlet></router-outlet>\n</div>\n '},sx2t:function(e,t){e.exports='\n\x3c!-- show error in signup --\x3e\n<div *ngIf="ErrorAlert"  class="alert alert-danger">\n  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n  <strong>Error</strong> Pleace Ckeck Your Date ... \n</div>\n\n<form  role="form" [formGroup]=\'myform\' (submit)=\'onSubmit()\'>\n  \x3c!-- \n    set class error if formControlName us invalid\n    set class success if formControlName us valid\n\n    Validator [required] in html only\n  --\x3e\n  <div \n    class="form-group has-feedback" \n    [ngClass]=\'{\n      "has-error" : myform.controls.name.invalid && myform.controls.name.touched ,\n      "has-success" : myform.controls.name.valid\n      }\'\n  >\n    <label for="" class="control-label">Name</label>\n    <input \n      type="text" \n      class="form-control" \n      placeholder="name"\n      formControlName=\'name\'\n      required   \n    >\n    \x3c!-- danger message --\x3e\n    <small *ngIf="myform.controls.name.invalid && myform.controls.name.touched"  class="text-danger"> Must be 5-30 characters long</small>  \n  </div>\n\n\n\n\n  \x3c!-- \n    set class error if formControlName us invalid\n    set class success if formControlName us valid\n\n    Validator [required , email] in html only\n  --\x3e\n  <div \n    class="form-group has-feedback" \n    [ngClass]=\'{\n      "has-error" : myform.controls.email.invalid && myform.controls.email.touched ,\n      "has-success" : myform.controls.email.valid\n      }\'\n  >    \n    <label for="" class="control-label">Email</label>\n    <input \n      type="email" \n      class="form-control" \n      placeholder="Email"\n      formControlName=\'email\'\n      required   \n      email\n    >\n    \x3c!-- danger message --\x3e\n    <small *ngIf="myform.controls.email.invalid && myform.controls.email.touched"  class="text-danger"> Must be Email</small> \n  </div>\n\n  \x3c!-- \n    set class error if formControlName us invalid\n    set class success if formControlName us valid\n\n    Validator [required] in html only\n  --\x3e\n  <div \n    class="form-group has-feedback" \n    [ngClass]=\'{\n      "has-error" : myform.controls.password.invalid && myform.controls.password.touched ,\n      "has-success" : myform.controls.password.valid\n      }\'\n  >\n    \n    <label for="" class="control-label">Password</label>\n    <input \n      type="password" \n      class="form-control" \n      placeholder="Password"\n      formControlName=\'password\'\n      required\n    >\n    \x3c!-- danger message --\x3e\n    <small *ngIf="myform.controls.password.invalid && myform.controls.password.touched"  class="text-danger"> Must be 8-30 characters long</small> \n  </div>\n\n  <button type="submit" [disabled]=\'myform.invalid\'   class=" hvr-buzz-out  btn btn-primary" style="padding:10px">Submit</button>\n</form>\n'}},[0]);