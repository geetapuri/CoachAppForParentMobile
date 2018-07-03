webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mark_attendance_mark_attendance__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello AttendanceComponent Component');
        this.text = 'Hello World';
        this.parent = this.navParams.get('parent');
    }
    AttendanceComponent.prototype.getKids = function () {
        var _this = this;
        //Get Kids list in a dropdown
        console.log("in getKids");
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidsList = data.kidList;
            _this.selectedKid = data.kidList[0];
        }, function (err) { return console.error(err); }, function () { return console.log('getKidInfoParent completed'); });
    };
    AttendanceComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedKid;
        if (selection != undefined) {
            console.log("item selected: " + item.kidName);
        }
    };
    AttendanceComponent.prototype.markAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mark_attendance_mark_attendance__["a" /* MarkAttendanceComponent */]);
    };
    AttendanceComponent.prototype.getAttendanceForKid = function (item) {
        var _this = this;
        this.springData.viewAttendanceForKid(item).subscribe(function (data) {
            _this.attendanceList = data.attendance;
        }, function (err) { return console.error(err); }, function () { return console.log('viewAttendanceKid completed'); });
    };
    AttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'attendance',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/attendance/attendance.html"*/'<!-- Generated template for the AttendanceComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ATTENDANCE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div padding>\n        <button ion-button (click)="getKids()">Show Kids </button>\n\n\n\n\n    </div>\n    <ion-item *ngIf="selectedKid">\n\n        <ion-select [(ngModel)]="selectedKid" (ionChange)=onItemSelection(selectedKid)>\n            <ion-option [value]="item" *ngFor="let item of kidsList">{{item.kidName}} ({{item.kidID}})\n            </ion-option>\n        </ion-select>\n\n\n    </ion-item>\n\n    <ion-item *ngIf="selectedKid">\n\n        <button ion-button (click)="getAttendanceForKid(selectedKid)" icon-right>Show\n              <ion-icon name="stats"></ion-icon>\n          </button>\n\n\n    </ion-item>\n\n    <ion-card *ngFor="let item of attendanceList">\n        <ion-card-header>\n            DATE {{ item.date }}\n        </ion-card-header>\n        <ion-card-content>\n            ATTENDANCE : {{ item.presentAbsent }}\n\n        </ion-card-content>\n    </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/attendance/attendance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_fees_pay_fees__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FeesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FeesComponent = /** @class */ (function () {
    function FeesComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello FeesComponent Component');
        this.text = 'Hello World';
        this.parent = this.navParams.get('parent');
    }
    FeesComponent.prototype.getKids = function () {
        var _this = this;
        console.log("in getKids");
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidsList = data.kidList;
            _this.selectedKid = data.kidList[0];
        }, function (err) { return console.error(err); }, function () { return console.log('getKidInfoParent completed'); });
    };
    FeesComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedKid;
        if (selection != undefined) {
            console.log("item selected: " + item.kidName);
        }
    };
    FeesComponent.prototype.getFeesForKid = function (item) {
        var _this = this;
        this.springData.viewFeesForKid(item).subscribe(function (data) {
            _this.feeList = data.feeList;
        }, function (err) { return console.error(err); }, function () { return console.log('viewFeesKid completed'); });
    };
    FeesComponent.prototype.payFees = function (selectedFeeItem) {
        console.log("payFees for selectedFeeItem = " + selectedFeeItem.dateOfAttendance);
        console.log("child id is with me or no? " + this.selectedKid.kidName);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pay_fees_pay_fees__["a" /* PayFeesComponent */], { selectedFeeItem: selectedFeeItem, selectedKid: this.selectedKid });
    };
    FeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fees',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/fees/fees.html"*/'<!-- Generated template for the FeesComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> FEES\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div padding>\n        <button ion-button (click)="getKids()">Show Kids</button>\n\n    </div>\n\n    <ion-item *ngIf="selectedKid">\n\n        <ion-select [(ngModel)]="selectedKid" (ionChange)=onItemSelection(selectedKid)>\n            <ion-option [value]="item" *ngFor="let item of kidsList">{{item.kidName}} ({{item.kidID}})\n            </ion-option>\n        </ion-select>\n\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="selectedKid">\n\n        <button ion-button (click)="getFeesForKid(selectedKid)" icon-right>Show Fees\n              <ion-icon name="stats"></ion-icon>\n          </button>\n    </ion-item>\n\n    <ion-card *ngFor="let item of feeList">\n        <ion-card-header>\n            Date {{ item.dateOfAttendance }}\n        </ion-card-header>\n        <ion-card-content>\n            Attendance {{ item.present }}\n\n        </ion-card-content>\n        <ion-card-content >\n            Fee Paid {{ item.feePaid }}\n\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/fees/fees.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], FeesComponent);
    return FeesComponent;
}());

//# sourceMappingURL=fees.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDataFromSpringProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GetDataFromSpringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GetDataFromSpringProvider = /** @class */ (function () {
    function GetDataFromSpringProvider(http) {
        this.http = http;
        this.authenticated = false;
        console.log('Hello GetDataFromSpringProvider Provider');
    }
    GetDataFromSpringProvider.prototype.authenticate = function (credentials) {
        console.log("in authenticate");
        /* let headers = new Headers(credentials ? {
             authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
         } : {});*/
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Basic ' + btoa(credentials.username + ':' + credentials.password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'test': 'test'
        };
        //return this.http.post(`http://172.20.10.2:8080/resourceLogin`,body, {headers: headers})
        return this.http.post("/resourceLogin", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getGroups = function (myDate) {
        console.log("in getGroups");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'test': "test"
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getGroups", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getPackages = function (myDate) {
        console.log("in getPackages");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'test': "test"
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getPackages", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.addSchedule = function (myDate, groupID, myTime) {
        console.log("in add Schedule");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'date': myDate,
            'groupID': groupID,
            'time': myTime
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/addSchedule", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.addKid = function (kidName, groupID, packageID) {
        console.log("in add Kid");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidName': kidName,
            'groupID': groupID,
            'packageID': packageID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/addKid", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.addGroup = function (groupName) {
        console.log("in add Group");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'groupName': groupName
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/addGroup", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getSchedule = function (myDate) {
        console.log("in show schedule");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'parentID': '1'
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getCalendarAll", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getScheduleKid = function (kidID) {
        console.log("in getScheduleKid, kidID = " + kidID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': kidID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getCalendarAllKid", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.saveSchedule = function (item, myDate) {
        console.log("in save Schedule");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'date': myDate,
            'groupID': item.groupID,
            'calendarID': item.calendarID,
            'groupName': item.groupName,
            'time': item.time
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/updateSchedule", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getKids = function () {
        console.log("in get Kids");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'date': 'myDate'
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getKids", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.viewAttendanceForKid = function (item) {
        console.log(" in view attendance for kid, kidID = " + item.kidID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': item.kidID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/viewAttendanceKid", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.checkAttendance = function (item) {
        console.log(" in check attendance for kid, groupID = " + item.groupID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'date': item.date,
            'groupID': item.groupID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/checkAttendance", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getKidsInGroup = function (item) {
        console.log(" in getKidsInGroup, groupID = " + item.groupID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'groupID': item.groupID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getKidsInGroup", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.markAttendance = function (item, kidsList) {
        console.log(" in markAttendance, groupID = " + item.groupID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'groupID': item.groupID,
            'kidsList': kidsList,
            'date': item.date
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/markAttendance", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.viewFeesForKid = function (item) {
        console.log(" in view Fee for kid, kidID = " + item.kidID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': item.kidID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/viewFees", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.payFees = function (kidID, myDate) {
        console.log(" in payFees for kid, kidID = " + kidID);
        console.log(" in payFees, date received =  " + myDate);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': kidID,
            'dateOfAttendance': myDate
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/payFees", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getKidInfoParent = function (parent) {
        console.log("In get Kids InfoParent");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'parentID': parent[0].parentID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        console.log("sending parent id as " + parent[0].parentID);
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getKidInfoParent", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.updateKid = function (kid) {
        console.log("In update Kid Info");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': kid.kidID,
            'kidName': kid.kidName,
            'groupID': kid.groupID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/updateKid", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.updateGroup = function (group) {
        console.log("In update Group ");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'groupID': group.groupID,
            'groupName': group.groupName
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/updateGroup", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getParentID = function (user) {
        console.log("In getParentID ");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'parentName': user
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        console.log("sending parent name as : " + user);
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getParentID", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GetDataFromSpringProvider);
    return GetDataFromSpringProvider;
}());

//# sourceMappingURL=get-data-from-spring.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(springData, http, navCtrl, navParams) {
        this.springData = springData;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credentials = { username: 'geeta', password: 'geeta' };
        console.log('Hello LoginComponent Component');
        this.text = 'Hello Geeta s World';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        //alert("calling login fn");
        this.springData.authenticate(this.credentials).subscribe(function (data) {
            _this.user = data.user;
            console.log('user name received = ' + data.user.name);
            _this.springData.authenticated = true;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */], { role: data.user.name });
        }, function (err) { return console.error(err); }, function () { return console.log('login completed'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/login/login.html"*/'<ion-content padding>\n    <h1>Welcome to CoachKids for Parents\n            and please login here</h1>\n    <div>Lets do amazing things together</div>\n\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>User </ion-label>\n            <ion-input [(ngModel)]="credentials.username" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>Password </ion-label>\n            <ion-input [(ngModel)]="credentials.password" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div padding>\n        <button ion-button block color="primary" (click)="login()">LOGIN</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_schedule_schedule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_attendance_attendance__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fees_fees__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_kids_kids__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_performance_performance__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_groups_groups__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_progress2_progress2__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = navParams.get('role');
        console.log('received on home page, username = ' + this.user);
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("will call get parentID");
        this.springData.getParentID(this.user).subscribe(function (data) {
            console.log("in subscribe to data of getParentID");
            _this.parent = data.parent;
            console.log("parent id received as : " + data.parent[0].parentID);
            console.log("parent = " + _this.parent[0].parentID);
        }, function (err) { return console.error(err); }, function () {
            return console.log('getParentID completed');
        });
    };
    HomePage.prototype.goToSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components_schedule_schedule__["a" /* ScheduleComponent */], { parent: this.parent });
    };
    HomePage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__components_attendance_attendance__["a" /* AttendanceComponent */], { parent: this.parent });
    };
    HomePage.prototype.goToFees = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__components_fees_fees__["a" /* FeesComponent */], { parent: this.parent });
    };
    HomePage.prototype.getKids = function () {
        console.log("in kids");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__components_kids_kids__["a" /* KidsComponent */], { parent: this.parent });
    };
    HomePage.prototype.goToManageGroups = function () {
        console.log("manage groups");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__components_groups_groups__["a" /* GroupsComponent */]);
    };
    HomePage.prototype.goToPerformance = function () {
        console.log("in performance");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__components_performance_performance__["a" /* PerformanceComponent */]);
    };
    HomePage.prototype.goToEvents = function () {
        console.log("in events");
        //this.navCtrl.push(EventsComponent);
    };
    HomePage.prototype.goToProgress = function () {
        console.log("in progress");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__components_progress2_progress2__["a" /* Progress2Component */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            CoachKids For Parents\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-auto>\n                <img src="assets/imgs/parent.png" class="logo">\n            </ion-col>\n            <ion-col>\n                <ion-row>\n                    <ion-col></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-auto>\n                        \n                        <button ion-item block >\n                            <ion-avatar item-left>\n                                <img src="assets/imgs/geeta.jpg">\n                            </ion-avatar>\n                            WELCOME {{user}} \n                        \n                        </button>\n                    </ion-col>\n\n                </ion-row>\n\n\n            </ion-col>\n            <ion-col>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n    <div padding>\n        <button ion-button block (click)="getKids()">Kids</button>\n    </div>\n\n    <div padding>\n        <button ion-button block (click)="goToSchedule()">Classes {{user}}</button>\n    </div>\n\n\n    <div padding>\n        <button ion-button block (click)="goToAttendance()">Attendance</button>\n    </div>\n\n    <div padding>\n        <button ion-button block (click)="goToProgress()">Progress</button>\n    </div>\n\n    <div padding>\n        <button ion-button block (click)="goToPerformance()">Performance</button>\n    </div>\n\n\n    <div padding>\n        <button ion-button block (click)="goToFees()">Fees</button>\n    </div>\n\n    \n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddScheduleComponent = /** @class */ (function () {
    function AddScheduleComponent(springData, navCtrl) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.myDate = new Date().toISOString();
        this.groupList = [];
        console.log('Hello AddScheduleComponent Component');
        this.text = 'Hello World Add Schedule';
    }
    AddScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        alert("will call get Groups");
        this.springData.getGroups(this.myDate).subscribe(function (data) {
            alert("in subscribe to data of getGroups");
            _this.groupList = data.groupList;
            _this.selectedGroup = data.groupList[0];
            alert("groupList seems like " + _this.groupList.entries().next().value[1]);
        }, function (err) { return console.error(err); }, function () { return console.log('getGroups completed'); });
    };
    AddScheduleComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedGroup;
        if (selection != undefined) {
            console.log("item selected: " + item.groupName);
        }
    };
    AddScheduleComponent.prototype.addSchedule = function () {
        var _this = this;
        alert("will call add Schedule");
        this.springData.addSchedule(this.myDate, this.selectedGroup.groupID, this.myTime).subscribe(function (data) {
            alert("in subscribe to data of getGroups");
            _this.groupList = data.groupList;
        }, function (err) { return console.error(err); }, function () {
            console.log('add schedule completed');
            alert("added schedule, taking you back to Schedules page");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* ScheduleComponent */]);
        });
    };
    AddScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-schedule',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-schedule/add-schedule.html"*/'<!-- Generated template for the AddScheduleComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ADD SCHEDULE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>Choose Date </ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label class="select-label" fixed>Choose Group </ion-label>\n            <ion-select [(ngModel)]="selectedGroup" (ionChange)=onItemSelection(selectedGroup)>\n                <ion-option [value]="item" *ngFor="let item of groupList">{{item.groupName}} ({{item.groupID}})\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>Enter Time For New Class </ion-label>\n            <ion-input [(ngModel)]="myTime" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n\n    <div padding>\n        <button ion-button block color="primary" (click)="addSchedule()">Add Schedule</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-schedule/add-schedule.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddScheduleComponent);
    return AddScheduleComponent;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScheduleDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditScheduleDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EditScheduleDetailsComponent = /** @class */ (function () {
    function EditScheduleDetailsComponent(navCtrl, navParams, springData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.springData = springData;
        console.log('Hello EditScheduleDetailsComponent Component');
        this.text = "Hello how r u ?";
        this.item = navParams.get('item');
        this.myDate = this.item.date;
        console.log(" date received as : " + this.item.date);
        this.groupName = this.item.groupName;
        this.myTime = this.item.time;
        this.groupID = this.item.groupID;
    }
    EditScheduleDetailsComponent.prototype.saveSchedule = function () {
        var _this = this;
        alert("to send this for saving , new date = " + this.myDate);
        this.springData.saveSchedule(this.item, this.myDate).subscribe(function (data) {
            alert("in subscribe to data of getGroups");
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* ScheduleComponent */]);
        }, function (err) { return console.error(err); }, function () {
            return console.log('show schedule completed');
        });
    };
    EditScheduleDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-schedule-details',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/edit-schedule-details/edit-schedule-details.html"*/'<!-- Generated template for the EditScheduleDetailsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> EDIT SCHEDULE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            {{ groupName }}\n        </ion-card-header>\n        <ion-card-content>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-card-content>\n        <ion-card-content>\n            {{ myTime }}\n        </ion-card-content>\n\n    </ion-card>\n    <div padding>\n        <button ion-button block (click)="saveSchedule()">Save Schedule</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/edit-schedule-details/edit-schedule-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]])
    ], EditScheduleDetailsComponent);
    return EditScheduleDetailsComponent;
}());

//# sourceMappingURL=edit-schedule-details.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkAttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mark_attendance_for_group_mark_attendance_for_group__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MarkAttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MarkAttendanceComponent = /** @class */ (function () {
    function MarkAttendanceComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate = new Date().toISOString();
        this.groupList = [];
        console.log('Hello MarkAttendanceComponent Component');
        this.text = 'Hello World of Mark Attendance';
    }
    MarkAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("will call get Schedule");
        this.springData.getSchedule(this.myDate).subscribe(function (data) {
            console.log("in subscribe to data of getGroups");
            _this.scheduleList = data.Schedule;
        }, function (err) { return console.error(err); }, function () {
            return console.log('get schedule completed');
        });
    };
    MarkAttendanceComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedGroup;
        if (selection != undefined) {
            console.log("item selected: " + item.groupName);
        }
    };
    MarkAttendanceComponent.prototype.getKidsInGroup = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mark_attendance_for_group_mark_attendance_for_group__["a" /* MarkAttendanceForGroupComponent */], { item: item });
    };
    MarkAttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mark-attendance',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/mark-attendance/mark-attendance.html"*/'<!-- Generated template for the MarkAttendanceComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> MARK ATTENDANCE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n\n    <ion-card *ngFor="let item of scheduleList" (click)="getKidsInGroup(item)">\n        <ion-card-header>\n            DATE {{ item.date }}\n        </ion-card-header>\n        <ion-card-content>\n            TIME {{ item.time }}\n\n        </ion-card-content>\n        <ion-card-content>\n            GROUP {{ item.groupName }} {{item.groupID}}\n        </ion-card-content>\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/mark-attendance/mark-attendance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], MarkAttendanceComponent);
    return MarkAttendanceComponent;
}());

//# sourceMappingURL=mark-attendance.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkAttendanceForGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MarkAttendanceForGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MarkAttendanceForGroupComponent = /** @class */ (function () {
    function MarkAttendanceForGroupComponent(springData, navCtrl, navParams) {
        var _this = this;
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello MarkAttendanceForGroupComponent Component');
        this.text = 'Hello World';
        this.item = navParams.get('item');
        this.myDate = this.item.date;
        this.springData.checkAttendance(this.item).subscribe(function (data) {
            _this.attendanceList = data.attendanceList;
            if (_this.attendanceList != undefined) {
                console.log(" attendance for this date previously marked");
                _this.springData.getKidsInGroup(_this.item).subscribe(function (data) {
                    _this.kidsList = data.kidsList;
                    _this.checkedItems = new Array(_this.kidsList.length);
                    _this.attendanceList.forEach(function (item, index) {
                        console.log(item);
                        console.log(index);
                        if (item.presentAbsent == "P") {
                            console.log("found a check at index = " + index);
                            _this.checkedItems[index] = true;
                        }
                        else {
                            _this.checkedItems[index] = false;
                        }
                    });
                }, function (err) { return console.error(err); }, function () {
                    return console.log('get kids in group completed');
                });
            }
            else {
                //in else of attendanceList undefined
                _this.springData.getKidsInGroup(_this.item).subscribe(function (data) {
                    _this.kidsList = data.kidsList;
                    _this.checkedItems = new Array(_this.kidsList.length);
                }, function (err) { return console.error(err); }, function () {
                    return console.log('get kids in group completed');
                });
            }
        }, function (err) { return console.error(err); }, function () {
            return console.log('check attendance completed');
        });
    }
    MarkAttendanceForGroupComponent.prototype.saveAttendance = function () {
        var _this = this;
        console.log("saving attendance for kids");
        this.checkedItems.forEach(function (item, index) {
            console.log(item);
            console.log(index);
            console.log("checked Items length = " + _this.checkedItems.length);
            if (item) {
                console.log("found a check at index = " + index);
                _this.kidsList[index].present = "P";
            }
            else {
                _this.kidsList[index].present = "A";
            }
        });
        //send this kids list for marking attendance now
        this.springData.markAttendance(this.item, this.kidsList).subscribe(function (data) {
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attendance_attendance__["a" /* AttendanceComponent */]);
        }, function (err) { return console.error(err); }, function () {
            return console.log('mark Attendance completed');
        });
    };
    MarkAttendanceForGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mark-attendance-for-group',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/mark-attendance-for-group/mark-attendance-for-group.html"*/'<!-- Generated template for the MarkAttendanceForGroupComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> MARK ATTENDANCE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let item of kidsList; let i=index">\n        <ion-card-header>\n            KID ID {{item.kidID}}\n        </ion-card-header>\n        <ion-card-content>\n            DATE {{myDate}}\n        </ion-card-content>\n        <ion-card-content>\n            KID {{item.kidName}}\n        </ion-card-content>\n        <ion-card-content>\n            <ion-checkbox [(ngModel)]="checkedItems[i]"></ion-checkbox>\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-item>\n        <button padding ion-button (click)="saveAttendance()" icon-right>Save\n        <ion-icon name="add" ></ion-icon>\n    </button>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/mark-attendance-for-group/mark-attendance-for-group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], MarkAttendanceForGroupComponent);
    return MarkAttendanceForGroupComponent;
}());

//# sourceMappingURL=mark-attendance-for-group.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayFeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fees_fees__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PayFeesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PayFeesComponent = /** @class */ (function () {
    function PayFeesComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello PayFeesComponent Component');
        this.text = 'Hello World';
        this.selectedKid = navParams.get('selectedKid');
        this.selectedFeeItem = navParams.get('selectedFeeItem');
        console.log("date = " + this.selectedFeeItem.dateOfAttendance + ", kidID = " + this.selectedKid.kidID);
    }
    PayFeesComponent.prototype.saveFeePaid = function () {
        var _this = this;
        console.log("Now ill go and save the fee status");
        console.log("kidID = " + this.selectedKid.kidID);
        console.log("date = " + this.selectedFeeItem.dateOfAttendance);
        this.springData.payFees(this.selectedKid.kidID, this.selectedFeeItem.dateOfAttendance).subscribe(function (data) {
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fees_fees__["a" /* FeesComponent */]);
        }, function (err) { return console.error(err); }, function () {
            return console.log('save Fee Paid completed');
        });
    };
    PayFeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pay-fees',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/pay-fees/pay-fees.html"*/'<!-- Generated template for the PayFeesComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> PAY FEES\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n{{kidsList}}\n<ion-content padding>\n\n    <ion-card>\n        <ion-card-header>\n            DATE {{selectedFeeItem.dateOfAttendance}}\n        </ion-card-header>\n        <ion-card-content>\n            KID ID {{selectedKid.kidID}}\n        </ion-card-content>\n        <ion-card-content>\n            KID {{selectedKid.kidName}}\n        </ion-card-content>\n        <ion-card-content>\n            <ion-item>\n                <ion-label>Paid Fees? Y/N </ion-label>\n                <ion-input [(ngModel)]="selectedFeeItem.feePaid" type="text" value=""></ion-input>\n            </ion-item>\n        </ion-card-content>\n\n        <ion-card-content>\n            <button padding ion-button (click)="saveFeePaid()" icon-right>Save\n            <ion-icon name="add" ></ion-icon>\n        </button>\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/pay-fees/pay-fees.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], PayFeesComponent);
    return PayFeesComponent;
}());

//# sourceMappingURL=pay-fees.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditKidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kids_kids__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditKidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EditKidComponent = /** @class */ (function () {
    function EditKidComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate = new Date().toISOString();
        console.log('Hello EditKidComponent Component');
        this.text = 'Hello World';
        this.kid = this.navParams.get('selectedKid');
        this.parent = this.navParams.get('parent');
        //this.selectedGroup.groupID= this.kid.groupID;
        var groupName = this.kid.groupName;
        var kidName = this.kid.kidName;
        console.log("kidName = " + kidName);
        //get groups - removing this option of editing groups for parents
        /*this.springData.getGroups(this.myDate).subscribe(
          data => {
    
            this.groupList= data.groupList;
            this.selectedGroup= data.groupList[0];
    
          },
          err => console.error(err),
          () => console.log('getKids completed')
        );*/
    }
    EditKidComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedGroup;
        if (selection != undefined) {
            console.log("item selected: " + item.groupName);
        }
    };
    EditKidComponent.prototype.saveKidInfo = function () {
        //console.log("save kid info, selectedGroup ID = " + this.selectedGroup.groupID);
        var _this = this;
        this.springData.updateKid(this.kid).subscribe(function (data) {
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kids_kids__["a" /* KidsComponent */], { parent: _this.parent });
        }, function (err) { return console.error(err); }, function () { return console.log('saveKidInfo completed'); });
    };
    EditKidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-kid',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/edit-kid/edit-kid.html"*/'<!-- Generated template for the EditKidComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> EDIT KIDS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card text-wrap>\n        <ion-card-header>\n            <ion-label fixed>Kid Name </ion-label>\n            <ion-input [(ngModel)]="kid.kidName" type="text" value=""></ion-input>\n        </ion-card-header>\n        <ion-card-content>\n            KID ID {{kid.kidID}}\n        </ion-card-content>\n        <ion-card-content>\n            GROUP {{kid.groupName}} ({{kid.groupID}})\n        </ion-card-content>\n       \n\n        <ion-card-content>\n            <button padding ion-button (click)="saveKidInfo()" icon-right>Save\n            <ion-icon name="add" ></ion-icon>\n        </button>\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/edit-kid/edit-kid.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], EditKidComponent);
    return EditKidComponent;
}());

//# sourceMappingURL=edit-kid.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddKidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kids_kids__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddKidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddKidComponent = /** @class */ (function () {
    function AddKidComponent(springData, navCtrl) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.myDate = new Date().toISOString();
        this.groupList = [];
        this.packageList = [];
        console.log('Hello AddKidComponent Component');
        this.text = 'Hello World';
    }
    AddKidComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("will call get Groups");
        this.springData.getGroups(this.myDate).subscribe(function (data) {
            console.log("in subscribe to data of getGroups");
            _this.groupList = data.groupList;
            _this.selectedGroup = data.groupList[0];
            console.log("groupList seems like " + _this.groupList.entries().next().value[1]);
        }, function (err) { return console.error(err); }, function () { return console.log('getGroups completed'); });
        console.log("will call get packages");
        this.springData.getPackages(this.myDate).subscribe(function (data) {
            console.log("in subscribe to data of getPackages");
            _this.packageList = data.packageList;
            _this.selectedPackage = data.packageList[0];
            //alert("groupList seems like " + this.groupList.entries().next().value[1]);
        }, function (err) { return console.error(err); }, function () { return console.log('getPackages completed'); });
    };
    AddKidComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedGroup;
        if (selection != undefined) {
            console.log("item selected: " + item.groupName);
        }
    };
    AddKidComponent.prototype.addKid = function () {
        var _this = this;
        console.log("Add kid");
        this.springData.addKid(this.kidName, this.selectedGroup.groupID, this.selectedPackage.packageID).subscribe(function (data) {
            console.log("in subscribe to data of addKid");
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kids_kids__["a" /* KidsComponent */]);
        }, function (err) { return console.error(err); }, function () { return console.log('addKid completed'); });
    };
    AddKidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-kid',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-kid/add-kid.html"*/'<!-- Generated template for the AddKidComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ADD KID\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-list>\n        <ion-item>\n            <ion-label class="select-label" fixed>Choose Group </ion-label>\n            <ion-select [(ngModel)]="selectedGroup" (ionChange)=onItemSelection(selectedGroup)>\n                <ion-option [value]="item" *ngFor="let item of groupList">{{item.groupName}} ({{item.groupID}})\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label class="select-label" fixed>Choose Package </ion-label>\n            <ion-select [(ngModel)]="selectedPackage" (ionChange)=onItemSelection(selectedPackage)>\n                <ion-option [value]="item" *ngFor="let item of packageList">{{item.packageName}} ({{item.packageID}})\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>Kid Name </ion-label>\n            <ion-input [(ngModel)]="kidName" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n\n\n    <div padding>\n        <button ion-button block color="primary" (click)="addKid()">Add Kid</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-kid/add-kid.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddKidComponent);
    return AddKidComponent;
}());

//# sourceMappingURL=add-kid.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PerformanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent() {
        console.log('Hello PerformanceComponent Component');
        this.text = 'Hello World';
    }
    PerformanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'performance',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/performance/performance.html"*/'<!-- Generated template for the Progress2Component component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> PERFORMANCE\n        </ion-title>\n    </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/performance/performance.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceComponent);
    return PerformanceComponent;
}());

//# sourceMappingURL=performance.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_groups_groups__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EditGroupsComponent = /** @class */ (function () {
    function EditGroupsComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello EditGroupsComponent Component');
        this.text = 'Hello World';
        this.group = this.navParams.get('selectedGroup');
        console.log("group name now =" + this.group.groupName);
    }
    EditGroupsComponent.prototype.saveGroupInfo = function () {
        var _this = this;
        console.log("save group Info");
        this.springData.updateGroup(this.group).subscribe(function (data) {
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components_groups_groups__["a" /* GroupsComponent */]);
        }, function (err) { return console.error(err); }, function () { return console.log('saveKidInfo completed'); });
    };
    EditGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-groups',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/edit-groups/edit-groups.html"*/'<!-- Generated template for the EditGroupsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> EDIT GROUPS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card text-wrap>\n        <ion-card-header>\n            GROUP NAME {{group.groupName}}\n        </ion-card-header>\n        <ion-card-content>\n            GROUP ID {{group.groupID}}\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <ion-item>\n                <ion-label>Group Name</ion-label>\n                <ion-input [(ngModel)]="group.groupName" type="text" value="">\n                </ion-input>\n\n\n            </ion-item>\n        </ion-card-content>\n\n        <ion-card-content>\n            <button padding ion-button (click)="saveGroupInfo()" icon-right>Save\n            <ion-icon name="add" ></ion-icon>\n        </button>\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/edit-groups/edit-groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], EditGroupsComponent);
    return EditGroupsComponent;
}());

//# sourceMappingURL=edit-groups.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddGroupsComponent = /** @class */ (function () {
    function AddGroupsComponent(springData, navCtrl) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        console.log('Hello AddGroupsComponent Component');
        this.text = 'Hello World';
    }
    AddGroupsComponent.prototype.addGroup = function () {
        var _this = this;
        console.log("Add Group ");
        this.springData.addGroup(this.groupName).subscribe(function (data) {
            console.log("in subscribe to data of add Group");
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__groups_groups__["a" /* GroupsComponent */]);
        }, function (err) { return console.error(err); }, function () { return console.log('add Group completed'); });
    };
    AddGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-groups',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-groups/add-groups.html"*/'<!-- Generated template for the AddGroupsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ADD GROUP\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <ion-card text-wrap>\n        <ion-card-header>\n            GROUP NAME\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-item>\n                <ion-input [(ngModel)]="groupName" type="text" value="">\n                </ion-input>\n            </ion-item>\n        </ion-card-content>\n\n        <ion-card-content>\n            <button padding ion-button (click)="addGroup()" icon-right>Save\n            <ion-icon name="add" ></ion-icon>\n        </button>\n        </ion-card-content>\n\n    </ion-card>\n    <ion-card *ngFor="let item of groupList">\n        <ion-card-header>\n            Group ID {{ item.groupID }}\n        </ion-card-header>\n        <ion-card-content>\n            GROUP NAME {{ item.groupName }}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-groups/add-groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddGroupsComponent);
    return AddGroupsComponent;
}());

//# sourceMappingURL=add-groups.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Progress2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the Progress2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Progress2Component = /** @class */ (function () {
    function Progress2Component() {
        console.log('Hello Progress2Component Component');
        this.text = 'Hello World';
    }
    Progress2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress2',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/progress2/progress2.html"*/'<!-- Generated template for the Progress2Component component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> PROGRESS\n        </ion-title>\n    </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/progress2/progress2.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Progress2Component);
    return Progress2Component;
}());

//# sourceMappingURL=progress2.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export XhrInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_schedule_add_schedule__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_get_schedule_get_schedule__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_schedule_details_edit_schedule_details__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_attendance_attendance__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_mark_attendance_mark_attendance__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_mark_attendance_for_group_mark_attendance_for_group__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_fees_fees__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pay_fees_pay_fees__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manage_classes_manage_classes__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_kids_kids__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_edit_kid_edit_kid__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_add_kid_add_kid__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_classes_classes__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_add_classes_add_classes__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_groups_groups__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_add_groups_add_groups__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_groups_edit_groups__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_performance_performance__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_progress2_progress2__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_add_schedule_add_schedule__["a" /* AddScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_get_schedule_get_schedule__["a" /* GetScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_schedule_details_edit_schedule_details__["a" /* EditScheduleDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_attendance_attendance__["a" /* AttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_mark_attendance_mark_attendance__["a" /* MarkAttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_mark_attendance_for_group_mark_attendance_for_group__["a" /* MarkAttendanceForGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_fees_fees__["a" /* FeesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_pay_fees_pay_fees__["a" /* PayFeesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_manage_classes_manage_classes__["a" /* ManageClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_kids_kids__["a" /* KidsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_edit_kid_edit_kid__["a" /* EditKidComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_add_kid_add_kid__["a" /* AddKidComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_classes_classes__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_add_classes_add_classes__["a" /* AddClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_groups_groups__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_add_groups_add_groups__["a" /* AddGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_edit_groups_edit_groups__["a" /* EditGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_performance_performance__["a" /* PerformanceComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_progress2_progress2__["a" /* Progress2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_add_schedule_add_schedule__["a" /* AddScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_get_schedule_get_schedule__["a" /* GetScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_schedule_details_edit_schedule_details__["a" /* EditScheduleDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_attendance_attendance__["a" /* AttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_mark_attendance_mark_attendance__["a" /* MarkAttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_mark_attendance_for_group_mark_attendance_for_group__["a" /* MarkAttendanceForGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_fees_fees__["a" /* FeesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_pay_fees_pay_fees__["a" /* PayFeesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_manage_classes_manage_classes__["a" /* ManageClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_kids_kids__["a" /* KidsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_edit_kid_edit_kid__["a" /* EditKidComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_add_kid_add_kid__["a" /* AddKidComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_classes_classes__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_add_classes_add_classes__["a" /* AddClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_groups_groups__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_add_groups_add_groups__["a" /* AddGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_edit_groups_edit_groups__["a" /* EditGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_performance_performance__["a" /* PerformanceComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_progress2_progress2__["a" /* Progress2Component */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: XhrInterceptor, multi: true }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ProgressComponent } from '../components/progress/progress';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__components_login_login__["a" /* LoginComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the GetScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GetScheduleComponent = /** @class */ (function () {
    function GetScheduleComponent() {
        console.log('Hello GetScheduleComponent Component');
        this.text = 'Hello World';
    }
    GetScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'get-schedule',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/get-schedule/get-schedule.html"*/'<!-- Generated template for the GetScheduleComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/get-schedule/get-schedule.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GetScheduleComponent);
    return GetScheduleComponent;
}());

//# sourceMappingURL=get-schedule.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ManageClassesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ManageClassesComponent = /** @class */ (function () {
    function ManageClassesComponent() {
        console.log('Hello ManageClassesComponent Component');
        this.text = 'Hello World';
    }
    ManageClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'manage-classes',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/manage-classes/manage-classes.html"*/'<!-- Generated template for the ManageClassesComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/manage-classes/manage-classes.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ManageClassesComponent);
    return ManageClassesComponent;
}());

//# sourceMappingURL=manage-classes.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClassesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ClassesComponent = /** @class */ (function () {
    function ClassesComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello ClassesComponent Component');
        this.text = 'Hello World';
    }
    ClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'classes',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/classes/classes.html"*/'<!-- Generated template for the ClassesComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> CLASSES\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <button ion-button (click)="getKidsList()">List Kids</button>\n        <button ion-button icon-right (click)="addKids()">Add Kids\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>\n    </div>\n\n    <ion-card *ngFor="let item of kidList" (click)="goToEditKidDetails(item)">\n        <ion-card-header>\n            KID ID {{ item.kidID }}\n        </ion-card-header>\n        <ion-card-content>\n            KID NAME {{ item.kidName }}\n\n        </ion-card-content>\n        <ion-card-content>\n            GROUP {{ item.groupName }} {{item.groupID}}\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/classes/classes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], ClassesComponent);
    return ClassesComponent;
}());

//# sourceMappingURL=classes.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddClassesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddClassesComponent = /** @class */ (function () {
    function AddClassesComponent(springData, navCtrl) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        console.log('Hello AddClassesComponent Component');
        this.text = 'Hello World';
    }
    AddClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-classes',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-classes/add-classes.html"*/'<!-- Generated template for the AddClassesComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/add-classes/add-classes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddClassesComponent);
    return AddClassesComponent;
}());

//# sourceMappingURL=add-classes.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_schedule_add_schedule__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_schedule_details_edit_schedule_details__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scheduleList = [];
        this.myDate = new Date().toISOString();
        this.groupList = [];
        this.clickedGetSchedule = false;
        console.log('Hello ScheduleComponent Component');
        this.text = 'Hello World Schedule Component';
        this.parent = this.navParams.get('parent');
        console.log("in construct of scheduleComponent, parent ID = " + this.parent[0].parentID);
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getKids();
    };
    ScheduleComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedKid;
        if (selection != undefined) {
            console.log("item selected: " + item.kidName);
        }
    };
    ScheduleComponent.prototype.getKids = function () {
        var _this = this;
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidsList = data.kidList;
            //this.selectedKid= data.kidList[0];
        }, function (err) { return console.error(err); }, function () { return console.log('getKidInfoParent completed'); });
    };
    ScheduleComponent.prototype.getSchedule = function (selectedKid) {
        var _this = this;
        this.showKidName = selectedKid.kidName;
        this.clickedGetSchedule = true;
        this.springData.getScheduleKid(selectedKid.kidID).subscribe(function (data) {
            _this.scheduleList = data.Schedule;
        }, function (err) { return console.error(err); }, function () {
            return console.log('get schedule Kid completed');
        });
    };
    ScheduleComponent.prototype.addSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__add_schedule_add_schedule__["a" /* AddScheduleComponent */], {});
    };
    ScheduleComponent.prototype.goToEditScheduleDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_schedule_details_edit_schedule_details__["a" /* EditScheduleDetailsComponent */], { item: item });
    };
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'schedule',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/schedule/schedule.html"*/'<!-- Generated template for the ScheduleComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> CLASS SCHEDULE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n    \n\n    <ion-item >\n    Click on Kid Name to see the scheduled class list\n\n\n    </ion-item>\n\n    <ion-card style="background:light" >\n\n    <ion-grid padding>\n        <ion-row style="background:#488aff">\n            <ion-col col-2>\n                KID ID\n            </ion-col>\n            <ion-col col-10>\n                KID NAME\n            </ion-col>\n            \n        </ion-row>\n    \n        <ion-row *ngFor="let item of kidsList" (click)="getSchedule(item)">\n            <ion-col col-2>\n                \n                \n                        {{ item.kidID }}\n                           \n            </ion-col>\n            <ion-col col-10>  \n                 \n                        {{ item.kidName }}\n                                 \n            </ion-col>\n                \n        </ion-row>\n        \n    </ion-grid>\n\n    \n</ion-card>\n\n\n\n    \n\n\n     <ion-card style="background:light" *ngIf="clickedGetSchedule">\n\n    <ion-grid padding>\n        <ion-row style="background:#488aff">\n            <ion-col col-2>\n                DATE\n            </ion-col>\n            <ion-col col-2>\n                TIME\n            </ion-col>\n            <ion-col col-3>\n                KID NAME\n            </ion-col>\n            <ion-col col-5>\n                GROUP GROUPID\n            </ion-col>\n            \n        </ion-row>\n    \n        <ion-row *ngFor="let item of scheduleList" >\n            <ion-col col-2>\n                \n                \n                        {{ item.date }}\n                           \n            </ion-col>\n            <ion-col col-2>  \n                 \n                        {{ item.time }}\n                                 \n            </ion-col>\n\n            <ion-col col-3>\n                {{showKidName}}\n            </ion-col>\n\n            <ion-col col-5>  \n                 \n                        {{ item.groupName }} {{item.groupID}}\n                                 \n            </ion-col>\n                \n        </ion-row>\n        \n    </ion-grid>\n\n    \n</ion-card>\n\n    <div padding>\n\n\n    </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_kid_edit_kid__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_kid_add_kid__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the KidsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var KidsComponent = /** @class */ (function () {
    function KidsComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello KidsComponent Component');
        this.text = 'Hello World';
        this.parent = this.navParams.get('parent');
        console.log("in construct of KidsComponent, parentID = " + this.parent[0].parentID);
    }
    KidsComponent.prototype.ngOnInit = function () {
        this.getKidsList();
    };
    KidsComponent.prototype.getKidsList = function () {
        var _this = this;
        //get all the kids list from DB first
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidList = data.kidList;
        }, function (err) { return console.error(err); }, function () { return console.log('getKidsList completed'); });
    };
    KidsComponent.prototype.addKids = function () {
        console.log("add kid");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_kid_add_kid__["a" /* AddKidComponent */], { parent: this.parent });
    };
    KidsComponent.prototype.goToEditKidDetails = function (selectedKid) {
        console.log("edit kid");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_kid_edit_kid__["a" /* EditKidComponent */], { selectedKid: selectedKid, parent: this.parent });
    };
    KidsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'kids',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/kids/kids.html"*/'<!-- Generated template for the KidsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> KIDS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        \n        <button ion-button icon-right (click)="addKids()">Add Kids\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>\n    </div>\n\n    <ion-card style="background:light">\n\n    <ion-grid padding>\n        <ion-row style="background:#488aff">\n            <ion-col col-2>\n                KID ID\n            </ion-col>\n            <ion-col col-5>\n                KID NAME\n            </ion-col>\n            <ion-col col-5>\n                GROUP NAME ID\n            </ion-col>\n        </ion-row>\n    \n        <ion-row *ngFor="let item of kidList" (click)="goToEditKidDetails(item)">\n            <ion-col col-2>\n                \n                \n                        {{ item.kidID }}\n                           \n            </ion-col>\n            <ion-col col-5>  \n                 \n                        {{ item.kidName }}\n                                 \n            </ion-col>\n            <ion-col col-5> \n                 \n                        {{ item.groupName }} {{item.groupID}}\n        \n            </ion-col>        \n        </ion-row>\n        \n    </ion-grid>\n\n    \n</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/kids/kids.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], KidsComponent);
    return KidsComponent;
}());

//# sourceMappingURL=kids.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_edit_groups_edit_groups__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_groups_add_groups__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(springData, navCtrl, navParams) {
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate = new Date().toISOString();
        console.log('Hello GroupsComponent Component');
        this.text = 'Hello World';
    }
    GroupsComponent.prototype.getGroupList = function () {
        var _this = this;
        //get all the kids list from DB first
        this.springData.getGroups(this.myDate).subscribe(function (data) {
            _this.groupList = data.groupList;
        }, function (err) { return console.error(err); }, function () { return console.log('getGroupList completed'); });
    };
    GroupsComponent.prototype.goToEditGroupDetails = function (selectedGroup) {
        console.log("edit group");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components_edit_groups_edit_groups__["a" /* EditGroupsComponent */], { selectedGroup: selectedGroup });
    };
    GroupsComponent.prototype.addGroup = function () {
        console.log("add Group");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__components_add_groups_add_groups__["a" /* AddGroupsComponent */]);
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'groups',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/groups/groups.html"*/'<!-- Generated template for the GroupsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> GROUPS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <button ion-button (click)="getGroupList()">List Groups</button>\n        <button ion-button icon-right (click)="addGroup()">Add Group\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>\n    </div>\n\n    <ion-card *ngFor="let item of groupList" (click)="goToEditGroupDetails(item)">\n        <ion-card-header>\n            Group ID {{ item.groupID }}\n        </ion-card-header>\n        <ion-card-content>\n            GROUP NAME {{ item.groupName }}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParent/src/components/groups/groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], GroupsComponent);
    return GroupsComponent;
}());

//# sourceMappingURL=groups.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map