var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav\" *ngIf=\"isAuthenticated | async\">\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/profile\"]' title=\"Manage\">Hello {{ userName | async }}</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/logout\"]' [state]='{ local: true }' title=\"Logout\">Logout</a>\r\n    </li>\r\n</ul>\r\n<ul class=\"navbar-nav\" *ngIf=\"!(isAuthenticated | async)\">\r\n  <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/register\"]'>Register</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/login\"]'>Login</a>\r\n    </li>\r\n</ul>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">WebUI</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <app-login-menu></app-login-menu>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/api-authorization/api-authorization.constants.ts": 
        /*!**************************************************************!*\
          !*** ./src/api-authorization/api-authorization.constants.ts ***!
          \**************************************************************/
        /*! exports provided: ApplicationName, ReturnUrlType, QueryParameterNames, LogoutActions, LoginActions, ApplicationPaths */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function () { return ApplicationName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnUrlType", function () { return ReturnUrlType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameterNames", function () { return QueryParameterNames; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutActions", function () { return LogoutActions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActions", function () { return LoginActions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPaths", function () { return ApplicationPaths; });
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var ApplicationName = 'WebUI';
            var ReturnUrlType = 'returnUrl';
            var QueryParameterNames = {
                ReturnUrl: ReturnUrlType,
                Message: 'message'
            };
            var LogoutActions = {
                LogoutCallback: 'logout-callback',
                Logout: 'logout',
                LoggedOut: 'logged-out'
            };
            var LoginActions = {
                Login: 'login',
                LoginCallback: 'login-callback',
                LoginFailed: 'login-failed',
                Profile: 'profile',
                Register: 'register'
            };
            var applicationPaths = {
                DefaultLoginRedirectPath: '/',
                ApiAuthorizationClientConfigurationUrl: "/_configuration/" + ApplicationName,
                Login: "authentication/" + LoginActions.Login,
                LoginFailed: "authentication/" + LoginActions.LoginFailed,
                LoginCallback: "authentication/" + LoginActions.LoginCallback,
                Register: "authentication/" + LoginActions.Register,
                Profile: "authentication/" + LoginActions.Profile,
                LogOut: "authentication/" + LogoutActions.Logout,
                LoggedOut: "authentication/" + LogoutActions.LoggedOut,
                LogOutCallback: "authentication/" + LogoutActions.LogoutCallback,
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
            var ApplicationPaths = applicationPaths;
            /***/ 
        }),
        /***/ "./src/api-authorization/api-authorization.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/api-authorization/api-authorization.module.ts ***!
          \***********************************************************/
        /*! exports provided: ApiAuthorizationModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAuthorizationModule", function () { return ApiAuthorizationModule; });
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var ApiAuthorizationModule = /** @class */ (function () {
                function ApiAuthorizationModule() {
                }
                return ApiAuthorizationModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/api-authorization/authorize.interceptor.ts": 
        /*!********************************************************!*\
          !*** ./src/api-authorization/authorize.interceptor.ts ***!
          \********************************************************/
        /*! exports provided: AuthorizeInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function () { return AuthorizeInterceptor; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize.service */ "./src/api-authorization/authorize.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AuthorizeInterceptor = /** @class */ (function () {
                function AuthorizeInterceptor(authorize) {
                    this.authorize = authorize;
                }
                AuthorizeInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    return this.authorize.getAccessToken()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (token) { return _this.processRequestWithToken(token, req, next); }));
                };
                // Checks if there is an access_token available in the authorize service
                // and adds it to the request in case it's targeted at the same origin as the
                // single page application.
                AuthorizeInterceptor.prototype.processRequestWithToken = function (token, req, next) {
                    if (!!token && this.isSameOriginUrl(req)) {
                        req = req.clone({
                            setHeaders: {
                                Authorization: "Bearer " + token
                            }
                        });
                    }
                    return next.handle(req);
                };
                AuthorizeInterceptor.prototype.isSameOriginUrl = function (req) {
                    // It's an absolute url with the same origin.
                    if (req.url.startsWith(window.location.origin + "/")) {
                        return true;
                    }
                    // It's a protocol relative url with the same origin.
                    // For example: //www.example.com/api/Products
                    if (req.url.startsWith("//" + window.location.host + "/")) {
                        return true;
                    }
                    // It's a relative url like /api/Products
                    if (/^\/[^\/].*/.test(req.url)) {
                        return true;
                    }
                    // It's an absolute or protocol relative url that
                    // doesn't have the same origin.
                    return false;
                };
                return AuthorizeInterceptor;
            }());
            AuthorizeInterceptor.ctorParameters = function () { return [
                { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
            ]; };
            AuthorizeInterceptor = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                    providedIn: 'root'
                }),
                __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
            ], AuthorizeInterceptor);
            /***/ 
        }),
        /***/ "./src/api-authorization/authorize.service.ts": 
        /*!****************************************************!*\
          !*** ./src/api-authorization/authorize.service.ts ***!
          \****************************************************/
        /*! exports provided: AuthenticationResultStatus, AuthorizeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResultStatus", function () { return AuthenticationResultStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeService", function () { return AuthorizeService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
            /* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
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
            var AuthorizeService = /** @class */ (function () {
                function AuthorizeService() {
                    // By default pop ups are disabled because they don't work properly on Edge.
                    // If you want to enable pop up authentication simply set this flag to false.
                    this.popUpDisabled = true;
                    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
                }
                AuthorizeService.prototype.isAuthenticated = function () {
                    return this.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (u) { return !!u; }));
                };
                AuthorizeService.prototype.getUser = function () {
                    var _this = this;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.userSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (u) { return !!u; })), this.getUserFromStorage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (u) { return !!u; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (u) { return _this.userSubject.next(u); })), this.userSubject.asObservable());
                };
                AuthorizeService.prototype.getAccessToken = function () {
                    var _this = this;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this.userManager.getUser()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user && user.access_token; }));
                };
                // We try to authenticate the user in three different ways:
                // 1) We try to see if we can authenticate the user silently. This happens
                //    when the user is already logged in on the IdP and is done using a hidden iframe
                //    on the client.
                // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
                //    Pop-Up blocker or the user has disabled PopUps.
                // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
                //    redirect flow.
                AuthorizeService.prototype.signIn = function (state) {
                    return __awaiter(this, void 0, void 0, function () {
                        var user, silentError_1, popupError_1, redirectError_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.ensureUserManagerInitialized()];
                                case 1:
                                    _a.sent();
                                    user = null;
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 13]);
                                    return [4 /*yield*/, this.userManager.signinSilent(this.createArguments())];
                                case 3:
                                    user = _a.sent();
                                    this.userSubject.next(user.profile);
                                    return [2 /*return*/, this.success(state)];
                                case 4:
                                    silentError_1 = _a.sent();
                                    // User might not be authenticated, fallback to popup authentication
                                    console.log('Silent authentication error: ', silentError_1);
                                    _a.label = 5;
                                case 5:
                                    _a.trys.push([5, 7, , 12]);
                                    if (this.popUpDisabled) {
                                        throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                                    }
                                    return [4 /*yield*/, this.userManager.signinPopup(this.createArguments())];
                                case 6:
                                    user = _a.sent();
                                    this.userSubject.next(user.profile);
                                    return [2 /*return*/, this.success(state)];
                                case 7:
                                    popupError_1 = _a.sent();
                                    if (popupError_1.message === 'Popup window closed') {
                                        // The user explicitly cancelled the login action by closing an opened popup.
                                        return [2 /*return*/, this.error('The user closed the window.')];
                                    }
                                    else if (!this.popUpDisabled) {
                                        console.log('Popup authentication error: ', popupError_1);
                                    }
                                    _a.label = 8;
                                case 8:
                                    _a.trys.push([8, 10, , 11]);
                                    return [4 /*yield*/, this.userManager.signinRedirect(this.createArguments(state))];
                                case 9:
                                    _a.sent();
                                    return [2 /*return*/, this.redirect()];
                                case 10:
                                    redirectError_1 = _a.sent();
                                    console.log('Redirect authentication error: ', redirectError_1);
                                    return [2 /*return*/, this.error(redirectError_1)];
                                case 11: return [3 /*break*/, 12];
                                case 12: return [3 /*break*/, 13];
                                case 13: return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthorizeService.prototype.completeSignIn = function (url) {
                    return __awaiter(this, void 0, void 0, function () {
                        var user, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, this.ensureUserManagerInitialized()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.userManager.signinCallback(url)];
                                case 2:
                                    user = _a.sent();
                                    this.userSubject.next(user && user.profile);
                                    return [2 /*return*/, this.success(user && user.state)];
                                case 3:
                                    error_1 = _a.sent();
                                    console.log('There was an error signing in: ', error_1);
                                    return [2 /*return*/, this.error('There was an error signing in.')];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthorizeService.prototype.signOut = function (state) {
                    return __awaiter(this, void 0, void 0, function () {
                        var popupSignOutError_1, redirectSignOutError_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 8]);
                                    if (this.popUpDisabled) {
                                        throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                                    }
                                    return [4 /*yield*/, this.ensureUserManagerInitialized()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.userManager.signoutPopup(this.createArguments())];
                                case 2:
                                    _a.sent();
                                    this.userSubject.next(null);
                                    return [2 /*return*/, this.success(state)];
                                case 3:
                                    popupSignOutError_1 = _a.sent();
                                    console.log('Popup signout error: ', popupSignOutError_1);
                                    _a.label = 4;
                                case 4:
                                    _a.trys.push([4, 6, , 7]);
                                    return [4 /*yield*/, this.userManager.signoutRedirect(this.createArguments(state))];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/, this.redirect()];
                                case 6:
                                    redirectSignOutError_1 = _a.sent();
                                    console.log('Redirect signout error: ', popupSignOutError_1);
                                    return [2 /*return*/, this.error(redirectSignOutError_1)];
                                case 7: return [3 /*break*/, 8];
                                case 8: return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthorizeService.prototype.completeSignOut = function (url) {
                    return __awaiter(this, void 0, void 0, function () {
                        var state, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.ensureUserManagerInitialized()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, this.userManager.signoutCallback(url)];
                                case 3:
                                    state = _a.sent();
                                    this.userSubject.next(null);
                                    return [2 /*return*/, this.success(state && state.data)];
                                case 4:
                                    error_2 = _a.sent();
                                    console.log("There was an error trying to log out '" + error_2 + "'.");
                                    return [2 /*return*/, this.error(error_2)];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthorizeService.prototype.createArguments = function (state) {
                    return { useReplaceToNavigate: true, data: state };
                };
                AuthorizeService.prototype.error = function (message) {
                    return { status: AuthenticationResultStatus.Fail, message: message };
                };
                AuthorizeService.prototype.success = function (state) {
                    return { status: AuthenticationResultStatus.Success, state: state };
                };
                AuthorizeService.prototype.redirect = function () {
                    return { status: AuthenticationResultStatus.Redirect };
                };
                AuthorizeService.prototype.ensureUserManagerInitialized = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var response, settings;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.userManager !== undefined) {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, fetch(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].ApiAuthorizationClientConfigurationUrl)];
                                case 1:
                                    response = _a.sent();
                                    if (!response.ok) {
                                        throw new Error("Could not load settings for '" + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationName"] + "'");
                                    }
                                    return [4 /*yield*/, response.json()];
                                case 2:
                                    settings = _a.sent();
                                    settings.automaticSilentRenew = true;
                                    settings.includeIdTokenInSilentRenew = true;
                                    this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](settings);
                                    this.userManager.events.addUserSignedOut(function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.userManager.removeUser()];
                                                case 1:
                                                    _a.sent();
                                                    this.userSubject.next(null);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthorizeService.prototype.getUserFromStorage = function () {
                    var _this = this;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.userManager.getUser(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (u) { return u && u.profile; }));
                };
                return AuthorizeService;
            }());
            AuthorizeService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthorizeService);
            /***/ 
        }),
        /***/ "./src/api-authorization/login-menu/login-menu.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/api-authorization/login-menu/login-menu.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9naW4tbWVudS9sb2dpbi1tZW51LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/api-authorization/login-menu/login-menu.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/api-authorization/login-menu/login-menu.component.ts ***!
          \******************************************************************/
        /*! exports provided: LoginMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMenuComponent", function () { return LoginMenuComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var LoginMenuComponent = /** @class */ (function () {
                function LoginMenuComponent(authorizeService) {
                    this.authorizeService = authorizeService;
                }
                LoginMenuComponent.prototype.ngOnInit = function () {
                    this.isAuthenticated = this.authorizeService.isAuthenticated();
                    this.userName = this.authorizeService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) { return u && u.name; }));
                };
                return LoginMenuComponent;
            }());
            LoginMenuComponent.ctorParameters = function () { return [
                { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
            ]; };
            LoginMenuComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-login-menu',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./login-menu.component.css */ "./src/api-authorization/login-menu/login-menu.component.css")).default]
                }),
                __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
            ], LoginMenuComponent);
            /***/ 
        }),
        /***/ "./src/api-authorization/login/login.component.css": 
        /*!*********************************************************!*\
          !*** ./src/api-authorization/login/login.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/api-authorization/login/login.component.ts": 
        /*!********************************************************!*\
          !*** ./src/api-authorization/login/login.component.ts ***!
          \********************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
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
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authorizeService, activatedRoute, router) {
                    this.authorizeService = authorizeService;
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
                }
                LoginComponent.prototype.ngOnInit = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var action, _a, message;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    action = this.activatedRoute.snapshot.url[1];
                                    _a = action.path;
                                    switch (_a) {
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Login: return [3 /*break*/, 1];
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginCallback: return [3 /*break*/, 3];
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginFailed: return [3 /*break*/, 5];
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Profile: return [3 /*break*/, 6];
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Register: return [3 /*break*/, 7];
                                    }
                                    return [3 /*break*/, 8];
                                case 1: return [4 /*yield*/, this.login(this.getReturnUrl())];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 3: return [4 /*yield*/, this.processLoginCallback()];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 5:
                                    message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message);
                                    this.message.next(message);
                                    return [3 /*break*/, 9];
                                case 6:
                                    this.redirectToProfile();
                                    return [3 /*break*/, 9];
                                case 7:
                                    this.redirectToRegister();
                                    return [3 /*break*/, 9];
                                case 8: throw new Error("Invalid action '" + action + "'");
                                case 9: return [2 /*return*/];
                            }
                        });
                    });
                };
                LoginComponent.prototype.login = function (returnUrl) {
                    return __awaiter(this, void 0, void 0, function () {
                        var state, result, _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    state = { returnUrl: returnUrl };
                                    return [4 /*yield*/, this.authorizeService.signIn(state)];
                                case 1:
                                    result = _c.sent();
                                    this.message.next(undefined);
                                    _a = result.status;
                                    switch (_a) {
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect: return [3 /*break*/, 2];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success: return [3 /*break*/, 3];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail: return [3 /*break*/, 5];
                                    }
                                    return [3 /*break*/, 7];
                                case 2: return [3 /*break*/, 8];
                                case 3: return [4 /*yield*/, this.navigateToReturnUrl(returnUrl)];
                                case 4:
                                    _c.sent();
                                    return [3 /*break*/, 8];
                                case 5: return [4 /*yield*/, this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginFailedPathComponents, {
                                        queryParams: (_b = {}, _b[_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message] = result.message, _b)
                                    })];
                                case 6:
                                    _c.sent();
                                    return [3 /*break*/, 8];
                                case 7: throw new Error("Invalid status result " + result.status + ".");
                                case 8: return [2 /*return*/];
                            }
                        });
                    });
                };
                LoginComponent.prototype.processLoginCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var url, result, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    url = window.location.href;
                                    return [4 /*yield*/, this.authorizeService.completeSignIn(url)];
                                case 1:
                                    result = _b.sent();
                                    _a = result.status;
                                    switch (_a) {
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect: return [3 /*break*/, 2];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success: return [3 /*break*/, 3];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail: return [3 /*break*/, 5];
                                    }
                                    return [3 /*break*/, 6];
                                case 2: 
                                // There should not be any redirects as completeSignIn never redirects.
                                throw new Error('Should not redirect.');
                                case 3: return [4 /*yield*/, this.navigateToReturnUrl(this.getReturnUrl(result.state))];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 6];
                                case 5:
                                    this.message.next(result.message);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                };
                LoginComponent.prototype.redirectToRegister = function () {
                    this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityRegisterPath + "?returnUrl=" + encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].Login));
                };
                LoginComponent.prototype.redirectToProfile = function () {
                    this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityManagePath);
                };
                LoginComponent.prototype.navigateToReturnUrl = function (returnUrl) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                // It's important that we do a replace here so that we remove the callback uri with the
                                // fragment containing the tokens from the browser history.
                                return [4 /*yield*/, this.router.navigateByUrl(returnUrl, {
                                        replaceUrl: true
                                    })];
                                case 1:
                                    // It's important that we do a replace here so that we remove the callback uri with the
                                    // fragment containing the tokens from the browser history.
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                LoginComponent.prototype.getReturnUrl = function (state) {
                    var fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
                    // If the url is comming from the query string, check that is either
                    // a relative url or an absolute url
                    if (fromQuery &&
                        !(fromQuery.startsWith(window.location.origin + "/") ||
                            /\/[^\/].*/.test(fromQuery))) {
                        // This is an extra check to prevent open redirects.
                        throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
                    }
                    return (state && state.returnUrl) ||
                        fromQuery ||
                        _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].DefaultLoginRedirectPath;
                };
                LoginComponent.prototype.redirectToApiAuthorizationPath = function (apiAuthorizationPath) {
                    // It's important that we do a replace here so that when the user hits the back arrow on the
                    // browser they get sent back to where it was on the app instead of to an endpoint on this
                    // component.
                    var redirectUrl = "" + window.location.origin + apiAuthorizationPath;
                    window.location.replace(redirectUrl);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/api-authorization/logout/logout.component.css": 
        /*!***********************************************************!*\
          !*** ./src/api-authorization/logout/logout.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/api-authorization/logout/logout.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/api-authorization/logout/logout.component.ts ***!
          \**********************************************************/
        /*! exports provided: LogoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () { return LogoutComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
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
            var LogoutComponent = /** @class */ (function () {
                function LogoutComponent(authorizeService, activatedRoute, router) {
                    this.authorizeService = authorizeService;
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
                }
                LogoutComponent.prototype.ngOnInit = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var action, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    action = this.activatedRoute.snapshot.url[1];
                                    _a = action.path;
                                    switch (_a) {
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].Logout: return [3 /*break*/, 1];
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LogoutCallback: return [3 /*break*/, 5];
                                        case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LoggedOut: return [3 /*break*/, 7];
                                    }
                                    return [3 /*break*/, 8];
                                case 1:
                                    if (!!!window.history.state.local) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.logout(this.getReturnUrl())];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    // This prevents regular links to <app>/authentication/logout from triggering a logout
                                    this.message.next('The logout was not initiated from within the page.');
                                    _b.label = 4;
                                case 4: return [3 /*break*/, 9];
                                case 5: return [4 /*yield*/, this.processLogoutCallback()];
                                case 6:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 7:
                                    this.message.next('You successfully logged out!');
                                    return [3 /*break*/, 9];
                                case 8: throw new Error("Invalid action '" + action + "'");
                                case 9: return [2 /*return*/];
                            }
                        });
                    });
                };
                LogoutComponent.prototype.logout = function (returnUrl) {
                    return __awaiter(this, void 0, void 0, function () {
                        var state, isauthenticated, result, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    state = { returnUrl: returnUrl };
                                    return [4 /*yield*/, this.authorizeService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise()];
                                case 1:
                                    isauthenticated = _b.sent();
                                    if (!isauthenticated) return [3 /*break*/, 9];
                                    return [4 /*yield*/, this.authorizeService.signOut(state)];
                                case 2:
                                    result = _b.sent();
                                    _a = result.status;
                                    switch (_a) {
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect: return [3 /*break*/, 3];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success: return [3 /*break*/, 4];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail: return [3 /*break*/, 6];
                                    }
                                    return [3 /*break*/, 7];
                                case 3: return [3 /*break*/, 8];
                                case 4: return [4 /*yield*/, this.navigateToReturnUrl(returnUrl)];
                                case 5:
                                    _b.sent();
                                    return [3 /*break*/, 8];
                                case 6:
                                    this.message.next(result.message);
                                    return [3 /*break*/, 8];
                                case 7: throw new Error('Invalid authentication result status.');
                                case 8: return [3 /*break*/, 10];
                                case 9:
                                    this.message.next('You successfully logged out!');
                                    _b.label = 10;
                                case 10: return [2 /*return*/];
                            }
                        });
                    });
                };
                LogoutComponent.prototype.processLogoutCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var url, result, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    url = window.location.href;
                                    return [4 /*yield*/, this.authorizeService.completeSignOut(url)];
                                case 1:
                                    result = _b.sent();
                                    _a = result.status;
                                    switch (_a) {
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect: return [3 /*break*/, 2];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success: return [3 /*break*/, 3];
                                        case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail: return [3 /*break*/, 5];
                                    }
                                    return [3 /*break*/, 6];
                                case 2: 
                                // There should not be any redirects as the only time completeAuthentication finishes
                                // is when we are doing a redirect sign in flow.
                                throw new Error('Should not redirect.');
                                case 3: return [4 /*yield*/, this.navigateToReturnUrl(this.getReturnUrl(result.state))];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 5:
                                    this.message.next(result.message);
                                    return [3 /*break*/, 7];
                                case 6: throw new Error('Invalid authentication result status.');
                                case 7: return [2 /*return*/];
                            }
                        });
                    });
                };
                LogoutComponent.prototype.navigateToReturnUrl = function (returnUrl) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.router.navigateByUrl(returnUrl, {
                                        replaceUrl: true
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                LogoutComponent.prototype.getReturnUrl = function (state) {
                    var fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
                    // If the url is comming from the query string, check that is either
                    // a relative url or an absolute url
                    if (fromQuery &&
                        !(fromQuery.startsWith(window.location.origin + "/") ||
                            /\/[^\/].*/.test(fromQuery))) {
                        // This is an extra check to prevent open redirects.
                        throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
                    }
                    return (state && state.returnUrl) ||
                        fromQuery ||
                        _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["ApplicationPaths"].LoggedOut;
                };
                return LogoutComponent;
            }());
            LogoutComponent.ctorParameters = function () { return [
                { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'app';
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-root',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/carehub-api.ts": 
        /*!********************************!*\
          !*** ./src/app/carehub-api.ts ***!
          \********************************/
        /*! exports provided: API_BASE_URL, CompaniesClient, OidcConfigurationClient, CompanyLookUpDto, ApiException */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function () { return API_BASE_URL; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesClient", function () { return CompaniesClient; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OidcConfigurationClient", function () { return OidcConfigurationClient; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLookUpDto", function () { return CompanyLookUpDto; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiException", function () { return ApiException; });
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');
            var CompaniesClient = /** @class */ (function () {
                function CompaniesClient(http, baseUrl) {
                    this.jsonParseReviver = undefined;
                    this.http = http;
                    this.baseUrl = baseUrl ? baseUrl : "https://localhost:44318";
                }
                CompaniesClient.prototype.getAll = function () {
                    var _this = this;
                    var url_ = this.baseUrl + "/api/Companies/GetAll";
                    url_ = url_.replace(/[?&]$/, "");
                    var options_ = {
                        observe: "response",
                        responseType: "blob",
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            "Accept": "application/json"
                        })
                    };
                    return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
                        return _this.processGetAll(response_);
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
                        if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                            try {
                                return _this.processGetAll(response_);
                            }
                            catch (e) {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                            }
                        }
                        else
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
                    }));
                };
                CompaniesClient.prototype.processGetAll = function (response) {
                    var _this = this;
                    var status = response.status;
                    var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
                        response.error instanceof Blob ? response.error : undefined;
                    var _headers = {};
                    if (response.headers) {
                        for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                            var key = _a[_i];
                            _headers[key] = response.headers.get(key);
                        }
                    }
                    ;
                    if (status === 200) {
                        return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                            var result200 = null;
                            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                            if (Array.isArray(resultData200)) {
                                result200 = [];
                                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                                    var item = resultData200_1[_i];
                                    result200.push(CompanyLookUpDto.fromJS(item));
                                }
                            }
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
                        }));
                    }
                    else if (status !== 200 && status !== 204) {
                        return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                        }));
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                };
                return CompaniesClient;
            }());
            CompaniesClient.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [API_BASE_URL,] }] }
            ]; };
            CompaniesClient = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
                __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
            ], CompaniesClient);
            var OidcConfigurationClient = /** @class */ (function () {
                function OidcConfigurationClient(http, baseUrl) {
                    this.jsonParseReviver = undefined;
                    this.http = http;
                    this.baseUrl = baseUrl ? baseUrl : "https://localhost:44318";
                }
                OidcConfigurationClient.prototype.getClientRequestParameters = function (clientId) {
                    var _this = this;
                    var url_ = this.baseUrl + "/_configuration/{clientId}";
                    if (clientId === undefined || clientId === null)
                        throw new Error("The parameter 'clientId' must be defined.");
                    url_ = url_.replace("{clientId}", encodeURIComponent("" + clientId));
                    url_ = url_.replace(/[?&]$/, "");
                    var options_ = {
                        observe: "response",
                        responseType: "blob",
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            "Accept": "application/octet-stream"
                        })
                    };
                    return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
                        return _this.processGetClientRequestParameters(response_);
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
                        if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                            try {
                                return _this.processGetClientRequestParameters(response_);
                            }
                            catch (e) {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                            }
                        }
                        else
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
                    }));
                };
                OidcConfigurationClient.prototype.processGetClientRequestParameters = function (response) {
                    var status = response.status;
                    var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
                        response.error instanceof Blob ? response.error : undefined;
                    var _headers = {};
                    if (response.headers) {
                        for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                            var key = _a[_i];
                            _headers[key] = response.headers.get(key);
                        }
                    }
                    ;
                    if (status === 200 || status === 206) {
                        var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
                        var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                        var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
                    }
                    else if (status !== 200 && status !== 204) {
                        return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                        }));
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                };
                return OidcConfigurationClient;
            }());
            OidcConfigurationClient.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [API_BASE_URL,] }] }
            ]; };
            OidcConfigurationClient = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
                __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
            ], OidcConfigurationClient);
            var CompanyLookUpDto = /** @class */ (function () {
                function CompanyLookUpDto(data) {
                    if (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property))
                                this[property] = data[property];
                        }
                    }
                }
                CompanyLookUpDto.prototype.init = function (_data) {
                    if (_data) {
                        this.id = _data["id"];
                        this.name = _data["name"];
                        this.address = _data["address"];
                        this.province = _data["province"];
                        this.vat = _data["vat"];
                        this.taxOffice = _data["taxOffice"];
                    }
                };
                CompanyLookUpDto.fromJS = function (data) {
                    data = typeof data === 'object' ? data : {};
                    var result = new CompanyLookUpDto();
                    result.init(data);
                    return result;
                };
                CompanyLookUpDto.prototype.toJSON = function (data) {
                    data = typeof data === 'object' ? data : {};
                    data["id"] = this.id;
                    data["name"] = this.name;
                    data["address"] = this.address;
                    data["province"] = this.province;
                    data["vat"] = this.vat;
                    data["taxOffice"] = this.taxOffice;
                    return data;
                };
                return CompanyLookUpDto;
            }());
            var ApiException = /** @class */ (function (_super) {
                __extends(ApiException, _super);
                function ApiException(message, status, response, headers, result) {
                    var _this = _super.call(this) || this;
                    _this.isApiException = true;
                    _this.message = message;
                    _this.status = status;
                    _this.response = response;
                    _this.headers = headers;
                    _this.result = result;
                    return _this;
                }
                ApiException.isApiException = function (obj) {
                    return obj.isApiException === true;
                };
                return ApiException;
            }(Error));
            function throwException(message, status, response, headers, result) {
                if (result !== null && result !== undefined)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);
                else
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
            }
            function blobToText(blob) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    if (!blob) {
                        observer.next("");
                        observer.complete();
                    }
                    else {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            observer.next(event.target.result);
                            observer.complete();
                        };
                        reader.readAsText(blob);
                    }
                });
            }
            /***/ 
        }),
        /***/ "./src/app/counter/counter.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/counter/counter.component.ts ***!
          \**********************************************/
        /*! exports provided: CounterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function () { return CounterComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var CounterComponent = /** @class */ (function () {
                function CounterComponent() {
                    this.currentCount = 0;
                }
                CounterComponent.prototype.incrementCounter = function () {
                    this.currentCount++;
                };
                return CounterComponent;
            }());
            CounterComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-counter-component',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
                })
            ], CounterComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-home',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/nav-menu/nav-menu.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/nav-menu/nav-menu.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/nav-menu/nav-menu.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/nav-menu/nav-menu.component.ts ***!
          \************************************************/
        /*! exports provided: NavMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () { return NavMenuComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var NavMenuComponent = /** @class */ (function () {
                function NavMenuComponent() {
                    this.isExpanded = false;
                }
                NavMenuComponent.prototype.collapse = function () {
                    this.isExpanded = false;
                };
                NavMenuComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                return NavMenuComponent;
            }());
            NavMenuComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-nav-menu',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
                })
            ], NavMenuComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! exports provided: getBaseUrl */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () { return getBaseUrl; });
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
            var providers = [
                { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
            ];
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(function (err) { return console.log(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Projects\CareHub\CareHub\Src\WebUI\ClientApp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map