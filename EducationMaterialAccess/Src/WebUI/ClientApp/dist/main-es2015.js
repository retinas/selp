(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav\" *ngIf=\"isAuthenticated | async\">\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/profile\"]' title=\"Manage\">Hello {{ userName | async }}</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/logout\"]' [state]='{ local: true }' title=\"Logout\">Logout</a>\r\n    </li>\r\n</ul>\r\n<ul class=\"navbar-nav\" *ngIf=\"!(isAuthenticated | async)\">\r\n  <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/register\"]'>Register</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/login\"]'>Login</a>\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">WebUI</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <app-login-menu></app-login-menu>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api-authorization/api-authorization.constants.ts":
/*!**************************************************************!*\
  !*** ./src/api-authorization/api-authorization.constants.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationName, ReturnUrlType, QueryParameterNames, LogoutActions, LoginActions, ApplicationPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return ApplicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnUrlType", function() { return ReturnUrlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameterNames", function() { return QueryParameterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutActions", function() { return LogoutActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActions", function() { return LoginActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPaths", function() { return ApplicationPaths; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ApplicationName = 'WebUI';
const ReturnUrlType = 'returnUrl';
const QueryParameterNames = {
    ReturnUrl: ReturnUrlType,
    Message: 'message'
};
const LogoutActions = {
    LogoutCallback: 'logout-callback',
    Logout: 'logout',
    LoggedOut: 'logged-out'
};
const LoginActions = {
    Login: 'login',
    LoginCallback: 'login-callback',
    LoginFailed: 'login-failed',
    Profile: 'profile',
    Register: 'register'
};
let applicationPaths = {
    DefaultLoginRedirectPath: '/',
    ApiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
    Login: `authentication/${LoginActions.Login}`,
    LoginFailed: `authentication/${LoginActions.LoginFailed}`,
    LoginCallback: `authentication/${LoginActions.LoginCallback}`,
    Register: `authentication/${LoginActions.Register}`,
    Profile: `authentication/${LoginActions.Profile}`,
    LogOut: `authentication/${LogoutActions.Logout}`,
    LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
    LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
    LoginPathComponents: [],
    LoginFailedPathComponents: [],
    LoginCallbackPathComponents: [],
    RegisterPathComponents: [],
    ProfilePathComponents: [],
    LogOutPathComponents: [],
    LoggedOutPathComponents: [],
    LogOutCallbackPathComponents: [],
    IdentityRegisterPath: '/Identity/Account/Register',
    IdentityManagePath: '/Identity/Account/Manage'
};
applicationPaths = Object.assign({}, applicationPaths, { LoginPathComponents: applicationPaths.Login.split('/'), LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'), RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/'), LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'), LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/') });
const ApplicationPaths = applicationPaths;


/***/ }),

/***/ "./src/api-authorization/api-authorization.module.ts":
/*!***********************************************************!*\
  !*** ./src/api-authorization/api-authorization.module.ts ***!
  \***********************************************************/
/*! exports provided: ApiAuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAuthorizationModule", function() { return ApiAuthorizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-menu/login-menu.component */ "./src/api-authorization/login-menu/login-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/api-authorization/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/api-authorization/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ApiAuthorizationModule = class ApiAuthorizationModule {
};
ApiAuthorizationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Register, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Profile, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginFailed, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginCallback, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoggedOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOutCallback, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] }
            ])
        ],
        declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]],
        exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]]
    })
], ApiAuthorizationModule);



/***/ }),

/***/ "./src/api-authorization/authorize.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/api-authorization/authorize.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthorizeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function() { return AuthorizeInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthorizeInterceptor = class AuthorizeInterceptor {
    constructor(authorize) {
        this.authorize = authorize;
    }
    intercept(req, next) {
        return this.authorize.getAccessToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(token => this.processRequestWithToken(token, req, next)));
    }
    // Checks if there is an access_token available in the authorize service
    // and adds it to the request in case it's targeted at the same origin as the
    // single page application.
    processRequestWithToken(token, req, next) {
        if (!!token && this.isSameOriginUrl(req)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    isSameOriginUrl(req) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }
        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }
        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }
        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
};
AuthorizeInterceptor.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
AuthorizeInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], AuthorizeInterceptor);



/***/ }),

/***/ "./src/api-authorization/authorize.service.ts":
/*!****************************************************!*\
  !*** ./src/api-authorization/authorize.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationResultStatus, AuthorizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResultStatus", function() { return AuthenticationResultStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeService", function() { return AuthorizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthenticationResultStatus;
(function (AuthenticationResultStatus) {
    AuthenticationResultStatus[AuthenticationResultStatus["Success"] = 0] = "Success";
    AuthenticationResultStatus[AuthenticationResultStatus["Redirect"] = 1] = "Redirect";
    AuthenticationResultStatus[AuthenticationResultStatus["Fail"] = 2] = "Fail";
})(AuthenticationResultStatus || (AuthenticationResultStatus = {}));
let AuthorizeService = class AuthorizeService {
    constructor() {
        // By default pop ups are disabled because they don't work properly on Edge.
        // If you want to enable pop up authentication simply set this flag to false.
        this.popUpDisabled = true;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    isAuthenticated() {
        return this.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => !!u));
    }
    getUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.userSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(u => !!u)), this.getUserFromStorage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(u => !!u), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(u => this.userSubject.next(u))), this.userSubject.asObservable());
    }
    getAccessToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.userManager.getUser())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => user && user.access_token));
    }
    // We try to authenticate the user in three different ways:
    // 1) We try to see if we can authenticate the user silently. This happens
    //    when the user is already logged in on the IdP and is done using a hidden iframe
    //    on the client.
    // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
    //    Pop-Up blocker or the user has disabled PopUps.
    // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
    //    redirect flow.
    signIn(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            let user = null;
            try {
                user = yield this.userManager.signinSilent(this.createArguments());
                this.userSubject.next(user.profile);
                return this.success(state);
            }
            catch (silentError) {
                // User might not be authenticated, fallback to popup authentication
                console.log('Silent authentication error: ', silentError);
                try {
                    if (this.popUpDisabled) {
                        throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                    }
                    user = yield this.userManager.signinPopup(this.createArguments());
                    this.userSubject.next(user.profile);
                    return this.success(state);
                }
                catch (popupError) {
                    if (popupError.message === 'Popup window closed') {
                        // The user explicitly cancelled the login action by closing an opened popup.
                        return this.error('The user closed the window.');
                    }
                    else if (!this.popUpDisabled) {
                        console.log('Popup authentication error: ', popupError);
                    }
                    // PopUps might be blocked by the user, fallback to redirect
                    try {
                        yield this.userManager.signinRedirect(this.createArguments(state));
                        return this.redirect();
                    }
                    catch (redirectError) {
                        console.log('Redirect authentication error: ', redirectError);
                        return this.error(redirectError);
                    }
                }
            }
        });
    }
    completeSignIn(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ensureUserManagerInitialized();
                const user = yield this.userManager.signinCallback(url);
                this.userSubject.next(user && user.profile);
                return this.success(user && user.state);
            }
            catch (error) {
                console.log('There was an error signing in: ', error);
                return this.error('There was an error signing in.');
            }
        });
    }
    signOut(state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.popUpDisabled) {
                    throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                }
                yield this.ensureUserManagerInitialized();
                yield this.userManager.signoutPopup(this.createArguments());
                this.userSubject.next(null);
                return this.success(state);
            }
            catch (popupSignOutError) {
                console.log('Popup signout error: ', popupSignOutError);
                try {
                    yield this.userManager.signoutRedirect(this.createArguments(state));
                    return this.redirect();
                }
                catch (redirectSignOutError) {
                    console.log('Redirect signout error: ', popupSignOutError);
                    return this.error(redirectSignOutError);
                }
            }
        });
    }
    completeSignOut(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            try {
                const state = yield this.userManager.signoutCallback(url);
                this.userSubject.next(null);
                return this.success(state && state.data);
            }
            catch (error) {
                console.log(`There was an error trying to log out '${error}'.`);
                return this.error(error);
            }
        });
    }
    createArguments(state) {
        return { useReplaceToNavigate: true, data: state };
    }
    error(message) {
        return { status: AuthenticationResultStatus.Fail, message };
    }
    success(state) {
        return { status: AuthenticationResultStatus.Success, state };
    }
    redirect() {
        return { status: AuthenticationResultStatus.Redirect };
    }
    ensureUserManagerInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userManager !== undefined) {
                return;
            }
            const response = yield fetch(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].ApiAuthorizationClientConfigurationUrl);
            if (!response.ok) {
                throw new Error(`Could not load settings for '${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationName"]}'`);
            }
            const settings = yield response.json();
            settings.automaticSilentRenew = true;
            settings.includeIdTokenInSilentRenew = true;
            this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](settings);
            this.userManager.events.addUserSignedOut(() => __awaiter(this, void 0, void 0, function* () {
                yield this.userManager.removeUser();
                this.userSubject.next(null);
            }));
        });
    }
    getUserFromStorage() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.userManager.getUser()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => u && u.profile));
    }
};
AuthorizeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], AuthorizeService);



/***/ }),

/***/ "./src/api-authorization/login-menu/login-menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9naW4tbWVudS9sb2dpbi1tZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/api-authorization/login-menu/login-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMenuComponent", function() { return LoginMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginMenuComponent = class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(u => u && u.name));
    }
};
LoginMenuComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
LoginMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login-menu.component.css */ "./src/api-authorization/login-menu/login-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], LoginMenuComponent);



/***/ }),

/***/ "./src/api-authorization/login/login.component.css":
/*!*********************************************************!*\
  !*** ./src/api-authorization/login/login.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/api-authorization/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/api-authorization/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
let LoginComponent = class LoginComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Login:
                    yield this.login(this.getReturnUrl());
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginCallback:
                    yield this.processLoginCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginFailed:
                    const message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message);
                    this.message.next(message);
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Profile:
                    this.redirectToProfile();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Register:
                    this.redirectToRegister();
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    login(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const result = yield this.authorizeService.signIn(state);
            this.message.next(undefined);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(returnUrl);
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    yield this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginFailedPathComponents, {
                        queryParams: { [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message]: result.message }
                    });
                    break;
                default:
                    throw new Error(`Invalid status result ${result.status}.`);
            }
        });
    }
    processLoginCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignIn(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as completeSignIn never redirects.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
            }
        });
    }
    redirectToRegister() {
        this.redirectToApiAuthorizationPath(`${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityRegisterPath}?returnUrl=${encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].Login)}`);
    }
    redirectToProfile() {
        this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityManagePath);
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // It's important that we do a replace here so that we remove the callback uri with the
            // fragment containing the tokens from the browser history.
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].DefaultLoginRedirectPath;
    }
    redirectToApiAuthorizationPath(apiAuthorizationPath) {
        // It's important that we do a replace here so that when the user hits the back arrow on the
        // browser they get sent back to where it was on the app instead of to an endpoint on this
        // component.
        const redirectUrl = `${window.location.origin}${apiAuthorizationPath}`;
        window.location.replace(redirectUrl);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/api-authorization/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/api-authorization/logout/logout.component.css":
/*!***********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/api-authorization/logout/logout.component.ts":
/*!**********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
let LogoutComponent = class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].Logout:
                    if (!!window.history.state.local) {
                        yield this.logout(this.getReturnUrl());
                    }
                    else {
                        // This prevents regular links to <app>/authentication/logout from triggering a logout
                        this.message.next('The logout was not initiated from within the page.');
                    }
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LogoutCallback:
                    yield this.processLogoutCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LoggedOut:
                    this.message.next('You successfully logged out!');
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    logout(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const isauthenticated = yield this.authorizeService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
            if (isauthenticated) {
                const result = yield this.authorizeService.signOut(state);
                switch (result.status) {
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                        yield this.navigateToReturnUrl(returnUrl);
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                        this.message.next(result.message);
                        break;
                    default:
                        throw new Error('Invalid authentication result status.');
                }
            }
            else {
                this.message.next('You successfully logged out!');
            }
        });
    }
    processLogoutCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignOut(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as the only time completeAuthentication finishes
                    // is when we are doing a redirect sign in flow.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
                default:
                    throw new Error('Invalid authentication result status.');
            }
        });
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["ApplicationPaths"].LoggedOut;
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-logout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./logout.component.css */ "./src/api-authorization/logout/logout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _carehub_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carehub-api */ "./src/app/carehub-api.ts");
/* harmony import */ var src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/api-authorization/api-authorization.module */ "./src/api-authorization/api-authorization.module.ts");
/* harmony import */ var src_api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/api-authorization/authorize.interceptor */ "./src/api-authorization/authorize.interceptor.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_10__["ApiAuthorizationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
            ])
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: src_api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthorizeInterceptor"], multi: true },
            { provide: _carehub_api__WEBPACK_IMPORTED_MODULE_9__["API_BASE_URL"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiBaseUrl },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carehub-api.ts":
/*!********************************!*\
  !*** ./src/app/carehub-api.ts ***!
  \********************************/
/*! exports provided: API_BASE_URL, CompaniesClient, OidcConfigurationClient, CompanyLookUpDto, ApiException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesClient", function() { return CompaniesClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OidcConfigurationClient", function() { return OidcConfigurationClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLookUpDto", function() { return CompanyLookUpDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiException", function() { return ApiException; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.1.6.0 (NJsonSchema v10.0.28.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




const API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');
let CompaniesClient = class CompaniesClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:44318";
    }
    getAll() {
        let url_ = this.baseUrl + "/api/Companies/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetAll(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(CompanyLookUpDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
};
CompaniesClient.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [API_BASE_URL,] }] }
];
CompaniesClient = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
], CompaniesClient);

let OidcConfigurationClient = class OidcConfigurationClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:44318";
    }
    getClientRequestParameters(clientId) {
        let url_ = this.baseUrl + "/_configuration/{clientId}";
        if (clientId === undefined || clientId === null)
            throw new Error("The parameter 'clientId' must be defined.");
        url_ = url_.replace("{clientId}", encodeURIComponent("" + clientId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetClientRequestParameters(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetClientRequestParameters(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetClientRequestParameters(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
};
OidcConfigurationClient.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [API_BASE_URL,] }] }
];
OidcConfigurationClient = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
], OidcConfigurationClient);

class CompanyLookUpDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.address = _data["address"];
            this.province = _data["province"];
            this.vat = _data["vat"];
            this.taxOffice = _data["taxOffice"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyLookUpDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["address"] = this.address;
        data["province"] = this.province;
        data["vat"] = this.vat;
        data["taxOffice"] = this.taxOffice;
        return data;
    }
}
class ApiException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isApiException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isApiException(obj) {
        return obj.isApiException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    apiBaseUrl: "https://localhost:44318"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\CareHub\CareHub\Src\WebUI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map