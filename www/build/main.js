webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mark_attendance_mark_attendance__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
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
        this.user = this.navParams.get('role');
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        console.log("calling getKids");
        this.getKidList();
    };
    AttendanceComponent.prototype.getKids = function () {
        var _this = this;
        console.log("in getKids");
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidsList = data.kidList;
            //this.selectedKid= data.kidList[0];
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
        this.selectedKid = item.kidName;
        this.springData.viewAttendanceForKid(item).subscribe(function (data) {
            _this.attendanceList = data.attendance;
        }, function (err) { return console.error(err); }, function () { return console.log('viewAttendanceKid completed'); });
    };
    AttendanceComponent.prototype.getAttendanceForKidGroup = function (item) {
        var _this = this;
        this.selectedKid = item.kidName;
        console.log("groupID = " + item.groupID);
        this.groupName = item.groupName;
        this.springData.viewAttendanceForKidGroup(item).subscribe(function (data) {
            _this.attendanceList = data.attendance;
        }, function (err) { return console.error(err); }, function () { return console.log('viewAttendanceKidGroup completed'); });
    };
    AttendanceComponent.prototype.getKidList = function () {
        var _this = this;
        console.log("getKidList");
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidList = data.kidList;
        }, function (err) { return console.error(err); }, function () { return console.log('getGroupList completed'); });
    };
    AttendanceComponent.prototype.goToShowDatesForClass = function (selectedGroup) {
        var _this = this;
        console.log("goToShowClassAttendance");
        this.groupName = selectedGroup.groupName;
        this.groupID = selectedGroup.groupID;
        this.springData.getScheduleForGroup(this.coach, selectedGroup.groupID).subscribe(function (data) {
            _this.scheduleList = data.Schedule;
            // this.selectedKid= data.kidList[0];
        }, function (err) { return console.error(err); }, function () { return console.log('getSchedule for Group completed'); });
    };
    AttendanceComponent.prototype.goBackHome = function () {
        console.log("going back to home page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { parent: this.parent, role: this.user });
    };
    AttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'attendance',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/attendance/attendance.html"*/'<!-- Generated template for the AttendanceComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <img float-left alt="logo" height="30" src="assets/imgs/axar.png"> Attendance\n                    </ion-col>\n                    <ion-col>\n                        <img float-right height="30" src="assets/imgs/home.png" (click)="goBackHome()">\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div padding>\n        <div id="group-name">\n            <div padding>\n                Click Group to see Attendance\n            </div>\n            <ion-row *ngIf="kidList; else loading">\n                <button ion-button block id="list-row" *ngFor="let item of kidList let odd=odd; let even=even" [ngClass]="{ odd: odd, even:even}" (click)="getAttendanceForKidGroup(item)">\n                  <div >{{item.kidName}} - {{ item.groupName }}</div>\n\n                </button>\n\n\n            </ion-row>\n        </div>\n\n        <div>\n            <ng-template #loading>\n                <ion-spinner name="bubbles">Loading Groups...</ion-spinner>\n            </ng-template>\n        </div>\n\n\n    </div>\n\n    <div padding>\n\n        <div padding *ngIf="attendanceList">\n            Showing Attendace for {{selectedKid}} -  {{groupName}}\n        </div>\n\n        <div *ngIf="attendanceList" class="scroll-list">\n\n\n\n            <button id="list-row" *ngFor="let item of attendanceList let odd=odd; let even=even" [ngClass]="{ odd: odd, even:even}">\n              <div id="class-date">{{ item.date | date: \'fullDate\' }}</div>\n                <div padding> {{item.presentAbsent}} </div>\n\n            </button>\n\n        </div>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/attendance/attendance.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object])
    ], AttendanceComponent);
    return AttendanceComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=attendance.js.map

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
    GetDataFromSpringProvider.prototype.getScheduleAll = function (myDate) {
        console.log("in show schedule");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {};
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getCalendarKidDate", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getSchedule = function (myDate, kidID) {
        console.log("in show schedule");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': kidID,
            'strDate': myDate
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        console.log("sending date as : " + body.date);
        console.log("sending kidID as " + body.kidID);
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getCalendarKidDate", body, { headers: headers })
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
    GetDataFromSpringProvider.prototype.viewAttendanceForKidGroup = function (item) {
        console.log(" in view attendance for kid, kidID = " + item.kidID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'kidID': item.kidID,
            'groupID': item.groupID
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/viewAttendanceKidGroup", body, { headers: headers })
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
    GetDataFromSpringProvider.prototype.getKidsFeeParent = function (parent) {
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
        return this.http.post("/getKidsFeeParent", body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    GetDataFromSpringProvider.prototype.getKidInfoParentToday = function (parent, date) {
        console.log("In get Kids InfoParent");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            'parentID': parent[0].parentID,
            'date': date
        };
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        console.log("sending parent id as " + parent[0].parentID);
        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
        return this.http.post("/getKidInfoParentToday", body, { headers: headers })
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], GetDataFromSpringProvider);
    return GetDataFromSpringProvider;
    var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(31);
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
            selector: 'login',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/login/login.html"*/'<ion-content padding>\n    <h1>Welcome to CoachKids for Parents\n            and please login here</h1>\n    <div>Lets do amazing things together</div>\n\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>User </ion-label>\n            <ion-input [(ngModel)]="credentials.username" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>Password </ion-label>\n            <ion-input [(ngModel)]="credentials.password" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div padding>\n        <button ion-button block color="primary" (click)="login()">LOGIN</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/login/login.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(52);
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
            selector: 'add-schedule',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-schedule/add-schedule.html"*/'<!-- Generated template for the AddScheduleComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ADD SCHEDULE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>Choose Date </ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label class="select-label" fixed>Choose Group </ion-label>\n            <ion-select [(ngModel)]="selectedGroup" (ionChange)=onItemSelection(selectedGroup)>\n                <ion-option [value]="item" *ngFor="let item of groupList">{{item.groupName}} ({{item.groupID}})\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>Enter Time For New Class </ion-label>\n            <ion-input [(ngModel)]="myTime" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n\n    <div padding>\n        <button ion-button block color="primary" (click)="addSchedule()">Add Schedule</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-schedule/add-schedule.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddScheduleComponent);
    return AddScheduleComponent;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScheduleDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(52);
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
            selector: 'edit-schedule-details',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/edit-schedule-details/edit-schedule-details.html"*/'<!-- Generated template for the EditScheduleDetailsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> EDIT SCHEDULE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            {{ groupName }}\n        </ion-card-header>\n        <ion-card-content>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-card-content>\n        <ion-card-content>\n            {{ myTime }}\n        </ion-card-content>\n\n    </ion-card>\n    <div padding>\n        <button ion-button block (click)="saveSchedule()">Save Schedule</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/edit-schedule-details/edit-schedule-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]])
    ], EditScheduleDetailsComponent);
    return EditScheduleDetailsComponent;
}());

//# sourceMappingURL=edit-schedule-details.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkAttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mark_attendance_for_group_mark_attendance_for_group__ = __webpack_require__(208);
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
        this.springData.getScheduleAll(this.myDate).subscribe(function (data) {
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
            selector: 'mark-attendance',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/mark-attendance/mark-attendance.html"*/'<!-- Generated template for the MarkAttendanceComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> MARK ATTENDANCE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n\n    <ion-card *ngFor="let item of scheduleList" (click)="getKidsInGroup(item)">\n        <ion-card-header>\n            DATE {{ item.date }}\n        </ion-card-header>\n        <ion-card-content>\n            TIME {{ item.time }}\n\n        </ion-card-content>\n        <ion-card-content>\n            GROUP {{ item.groupName }} {{item.groupID}}\n        </ion-card-content>\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/mark-attendance/mark-attendance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], MarkAttendanceComponent);
    return MarkAttendanceComponent;
}());

//# sourceMappingURL=mark-attendance.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkAttendanceForGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(105);
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
            selector: 'mark-attendance-for-group',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/mark-attendance-for-group/mark-attendance-for-group.html"*/'<!-- Generated template for the MarkAttendanceForGroupComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> MARK ATTENDANCE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let item of kidsList; let i=index">\n        <ion-card-header>\n            KID ID {{item.kidID}}\n        </ion-card-header>\n        <ion-card-content>\n            DATE {{myDate}}\n        </ion-card-content>\n        <ion-card-content>\n            KID {{item.kidName}}\n        </ion-card-content>\n        <ion-card-content>\n            <ion-checkbox [(ngModel)]="checkedItems[i]"></ion-checkbox>\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-item>\n        <button padding ion-button (click)="saveAttendance()" icon-right>Save\n        <ion-icon name="add" ></ion-icon>\n    </button>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/mark-attendance-for-group/mark-attendance-for-group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], MarkAttendanceForGroupComponent);
    return MarkAttendanceForGroupComponent;
}());

//# sourceMappingURL=mark-attendance-for-group.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_fees_pay_fees__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
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
        this.user = this.navParams.get('role');
    }
    FeesComponent.prototype.ngOnInit = function () {
        console.log("calling getKids");
        this.getKids();
    };
    FeesComponent.prototype.getKids = function () {
        var _this = this;
        console.log("in getKids");
        this.springData.getKidsFeeParent(this.parent).subscribe(function (data) {
            _this.kidsList = data.kidsList;
            //this.selectedKid= data.kidList[0];
        }, function (err) { return console.error(err); }, function () { return console.log('getKidsFeeParent completed'); });
    };
    FeesComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedKid;
        if (selection != undefined) {
            console.log("item selected: " + item.kidName);
        }
    };
    FeesComponent.prototype.getFeesForKid = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pay_fees_pay_fees__["a" /* PayFeesComponent */], { item: item, parent: this.parent, role: this.user });
    };
    FeesComponent.prototype.goBackHome = function () {
        console.log("going back to home page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { parent: this.parent, role: this.user });
    };
    FeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fees',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/fees/fees.html"*/'<!-- Generated template for the FeesComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <img float-left alt="logo" height="30" src="assets/imgs/axar.png"> Fees\n                    </ion-col>\n                    <ion-col>\n                        <img float-right height="30" src="assets/imgs/home.png" (click)="goBackHome()">\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n\n\n\n    <div padding>\n        <div *ngIf="kidsList">\n\n            <div>\n                <ion-row id="group-name">\n                    <ion-col >\n                        <div padding float-left>\n                            Kids - Groups\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <div padding float-right> Fee Due </div>\n                    </ion-col>\n                </ion-row>\n\n\n                    \n\n\n            </div>\n\n\n            <button ion-button block id="list-row" *ngFor="let item of kidsList let odd=odd; let even=even" [ngClass]="{ odd: odd, even:even}" (click)="getFeesForKid(item)">\n              <ion-col col-8><div float-left >{{ item.kidName }} {{item.groupName}}</div></ion-col>\n              <ion-col><div float-right id="fee-amount">{{ item.invoiceAmount}}</div></ion-col>\n              <ion-col><div float-right id ="invoice-due">{{ item.invoiceDue}}</div></ion-col>\n\n            </button>\n\n        </div>\n    </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/fees/fees.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object])
    ], FeesComponent);
    return FeesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=fees.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayFeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(31);
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
        this.kid = this.navParams.get('item');
        this.parent = navParams.get('parent');
        this.user = navParams.get('role');
    }
    PayFeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(" get fees for kid - " + this.kid.kidName);
        this.springData.viewFeesForKid(this.kid).subscribe(function (data) {
            _this.feeList = data.feeList;
        }, function (err) { return console.error(err); }, function () { return console.log('viewFeesKid completed'); });
    };
    PayFeesComponent.prototype.viewFeePaid = function () {
        var _this = this;
        this.selectedKid = item.kidName;
        this.springData.viewFeesForKid(item).subscribe(function (data) {
            _this.feeList = data.feeList;
        }, function (err) { return console.error(err); }, function () { return console.log('viewFeesKid completed'); });
    };
    PayFeesComponent.prototype.goBackHome = function () {
        console.log("going back to home page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], { parent: this.parent, role: this.user });
    };
    PayFeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pay-fees',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/pay-fees/pay-fees.html"*/'<!-- Generated template for the PayFeesComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <img float-left alt="logo" height="30" src="assets/imgs/axar.png"> PAY FEES\n                    </ion-col>\n                    <ion-col>\n                        <img float-right height="30" src="assets/imgs/home.png" (click)="goBackHome()">\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n{{kidsList}}\n\n\n<ion-content padding>\n\n    <div padding>\n        <div>\n\n            <ion-row *ngIf="feeList; else loading">\n\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-5>\n                            Date\n                        </ion-col>\n                        <ion-col>\n                            Present\n                        </ion-col>\n                        <ion-col>\n                            Fee Paid\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n                <button id="button-text" ion-button block id="list-row" *ngFor="let item of feeList; let i=index let odd=odd; let even=even" [ngClass]="{ odd: odd, even:even}">\n\n                    <ion-grid>\n                    <ion-row no-padding>\n                      <ion-col  col-5 id="name-col">\n                        {{item.dateOfAttendance | date}}\n                      </ion-col>\n                      <ion-col id="cb-col">\n                        {{item.present}}\n                      </ion-col>\n                      <ion-col id="cb-fee">\n                        {{item.feePaid}}\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n\n\n                </button>\n\n\n            </ion-row>\n        </div>\n\n        <div>\n            <ng-template #loading>\n                <ion-spinner name="bubbles">Loading Groups...</ion-spinner>\n            </ng-template>\n        </div>\n\n\n    </div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/pay-fees/pay-fees.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddKidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kids_kids__ = __webpack_require__(53);
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
            selector: 'add-kid',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-kid/add-kid.html"*/'<!-- Generated template for the AddKidComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ADD KID\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-list>\n        <ion-item>\n            <ion-label class="select-label" fixed>Choose Group </ion-label>\n            <ion-select [(ngModel)]="selectedGroup" (ionChange)=onItemSelection(selectedGroup)>\n                <ion-option [value]="item" *ngFor="let item of groupList">{{item.groupName}} ({{item.groupID}})\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label class="select-label" fixed>Choose Package </ion-label>\n            <ion-select [(ngModel)]="selectedPackage" (ionChange)=onItemSelection(selectedPackage)>\n                <ion-option [value]="item" *ngFor="let item of packageList">{{item.packageName}} ({{item.packageID}})\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label fixed>Kid Name </ion-label>\n            <ion-input [(ngModel)]="kidName" type="text" value=""></ion-input>\n        </ion-item>\n    </ion-list>\n\n\n\n    <div padding>\n        <button ion-button block color="primary" (click)="addKid()">Add Kid</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-kid/add-kid.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddKidComponent);
    return AddKidComponent;
}());

//# sourceMappingURL=add-kid.js.map

/***/ }),

/***/ 212:
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
            selector: 'performance',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/performance/performance.html"*/'<!-- Generated template for the Progress2Component component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n           \n        </ion-title>\n    </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/performance/performance.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceComponent);
    return PerformanceComponent;
}());

//# sourceMappingURL=performance.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_groups_groups__ = __webpack_require__(54);
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
            selector: 'edit-groups',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/edit-groups/edit-groups.html"*/'<!-- Generated template for the EditGroupsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> EDIT GROUPS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card text-wrap>\n        <ion-card-header>\n            GROUP NAME {{group.groupName}}\n        </ion-card-header>\n        <ion-card-content>\n            GROUP ID {{group.groupID}}\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <ion-item>\n                <ion-label>Group Name</ion-label>\n                <ion-input [(ngModel)]="group.groupName" type="text" value="">\n                </ion-input>\n\n\n            </ion-item>\n        </ion-card-content>\n\n        <ion-card-content>\n            <button padding ion-button (click)="saveGroupInfo()" icon-right>Save\n            <ion-icon name="add" ></ion-icon>\n        </button>\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/edit-groups/edit-groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], EditGroupsComponent);
    return EditGroupsComponent;
}());

//# sourceMappingURL=edit-groups.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups__ = __webpack_require__(54);
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
            selector: 'add-groups',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-groups/add-groups.html"*/'<!-- Generated template for the AddGroupsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> ADD GROUP\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <ion-card text-wrap>\n        <ion-card-header>\n            GROUP NAME\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-item>\n                <ion-input [(ngModel)]="groupName" type="text" value="">\n                </ion-input>\n            </ion-item>\n        </ion-card-content>\n\n        <ion-card-content>\n            <button padding ion-button (click)="addGroup()" icon-right>Save\n            <ion-icon name="add" ></ion-icon>\n        </button>\n        </ion-card-content>\n\n    </ion-card>\n    <ion-card *ngFor="let item of groupList">\n        <ion-card-header>\n            Group ID {{ item.groupID }}\n        </ion-card-header>\n        <ion-card-content>\n            GROUP NAME {{ item.groupName }}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-groups/add-groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddGroupsComponent);
    return AddGroupsComponent;
}());

//# sourceMappingURL=add-groups.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowClassInfoKidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kids_kids__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
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
var ShowClassInfoKidComponent = /** @class */ (function () {
    /*monthNames[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";*/
    function ShowClassInfoKidComponent(springData, navCtrl, navParams) {
        var _this = this;
        this.springData = springData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate = new Date();
        this.date = new Date();
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        console.log('Hello ShowClassInfoKid Component');
        this.text = 'Hello World';
        this.kid = this.navParams.get('selectedKid');
        this.parent = this.navParams.get('parent');
        this.user = this.navParams.get('role');
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
        console.log("calling getCurrMonthYear");
        this.getCurrentMonthYear();
        console.log("getting schedule for today");
        this.springData.getSchedule(this.myDate, this.kid.kidID).subscribe(function (data) {
            _this.scheduleForDate = data.returnSchedule;
            console.log("schedule for date list has come as: " +
                data.returnSchedule);
            //console.log("data received = " + this.scheduleForDate[0].time);
            //this.navCtrl.push(KidsComponent, {parent:this.parent});
        }, function (err) { return console.error(err); }, function () { return console.log('getScheduleForDate completed'); });
    }
    ShowClassInfoKidComponent.prototype.onItemSelection = function (selection) {
        var item = this.selectedGroup;
        if (selection != undefined) {
            console.log("item selected: " + item.groupName);
        }
    };
    ShowClassInfoKidComponent.prototype.saveKidInfo = function () {
        //console.log("save kid info, selectedGroup ID = " + this.selectedGroup.groupID);
        var _this = this;
        this.springData.updateKid(this.kid).subscribe(function (data) {
            _this.result = data.result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kids_kids__["a" /* KidsComponent */], { parent: _this.parent });
        }, function (err) { return console.error(err); }, function () { return console.log('saveKidInfo completed'); });
    };
    ShowClassInfoKidComponent.prototype.getDaysOfMonth = function () {
        console.log("getDaysOfMonth");
        console.log("month = " + this.date.getDay());
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        console.log("month name  " + this.currentMonth);
        if (this.date.getMonth() === new Date().getMonth()) {
            console.log("here 1");
            this.currentDate = new Date().getDate();
        }
        else {
            console.log("here 2");
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            console.log("here**");
            for (i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    ShowClassInfoKidComponent.prototype.getCurrentMonthYear = function () {
        console.log("getCurrentMonthYear");
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.getDaysOfMonth();
    };
    ShowClassInfoKidComponent.prototype.goToLastMonth = function () {
        console.log("goToLastMonth");
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    ShowClassInfoKidComponent.prototype.goToNextMonth = function () {
        console.log("in goToNextMonth");
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    ShowClassInfoKidComponent.prototype.clearHighlightedDate = function () {
        //implement to clear dates
        for (var index = 1; index < 32; index++) {
            try {
                var withSpan = document.getElementById("col-" + index).innerHTML;
                //console.log("1 withspan index " + withSpan);
                if (withSpan.startsWith('<span')) {
                    console.log("withspan index " + withSpan.indexOf("selectedDate\">"));
                    withSpan = withSpan.substring(withSpan.indexOf("selectedDate\">") + 14, withSpan.indexOf("</span>"));
                    //withSpan = withSpan.substring(withSpan.indexOf("</span>"), withSpan.length);
                    console.log("withspan cleared " + withSpan);
                    document.getElementById("col-" + index).innerHTML = withSpan;
                }
            }
            catch (error) {
                console.log("error in clearHighlightedDate " + error);
            }
        }
    };
    ShowClassInfoKidComponent.prototype.clickedDate = function (day) {
        var _this = this;
        console.log("clicked date = " + day + this.currentMonth + this.currentYear);
        console.log("this.date  = " + this.date);
        console.log("get element by id for col id = " + document.getElementById("col-" + day).innerHTML);
        var toSpan = document.getElementById("col-" + day).innerHTML;
        this.clearHighlightedDate();
        toSpan = "<span class='selectedDate'>" + toSpan + "</span>";
        document.getElementById("col-" + day).innerHTML = toSpan;
        this.monthNum = this.date.getMonth() + 1;
        this.selectedDate = this.currentYear + "-" + this.monthNum + "-" + day;
        console.log("selected date = " + this.selectedDate);
        //this.dateToSend = new Date(this.selectedDate).toISOString();
        this.dateToSend = '2018-7-5';
        this.springData.getSchedule(this.selectedDate, this.kid.kidID).subscribe(function (data) {
            _this.scheduleForDate = data.returnSchedule;
            console.log("schedule for date list has come as: " +
                data.returnSchedule);
            //console.log("data received = " + this.scheduleForDate[0].time);
            //this.navCtrl.push(KidsComponent, {parent:this.parent});
        }, function (err) { return console.error(err); }, function () { return console.log('getScheduleForDate completed'); });
    };
    ShowClassInfoKidComponent.prototype.goBackHome = function () {
        console.log("going back to home page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { parent: this.parent, role: this.user });
    };
    ShowClassInfoKidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'show-class-info-kid',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/show-class-info-kid/show-class-info-kid.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <img float-left alt="logo" height="30" src="assets/imgs/axar.png"> DETAILS\n                    </ion-col>\n                    <ion-col>\n                        <img float-right height="30" src="assets/imgs/home.png" (click)="goBackHome()">\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n        <div class="calendar-header">\n            <ion-row class="calendar-month">\n                <ion-col col-2 (click)="goToLastMonth()">\n                    <ion-icon name="arrow-back"></ion-icon>\n                </ion-col>\n                <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n                <ion-col col-2 (click)="goToNextMonth()">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class="calendar-body">\n            <ion-grid>\n                <ion-row class="calendar-weekday">\n                    <ion-col>Su</ion-col>\n                    <ion-col>Mo</ion-col>\n                    <ion-col>Tu</ion-col>\n                    <ion-col>We</ion-col>\n                    <ion-col>Th</ion-col>\n                    <ion-col>Fr</ion-col>\n                    <ion-col>Sa</ion-col>\n                </ion-row>\n                <ion-row class="calendar-date">\n                    <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n                    <ion-col col-1 id="col-{{day}}" *ngFor="let day of daysInThisMonth" (click)="clickedDate(day)">\n                        <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n                        <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n                    </ion-col>\n                    <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n    </ion-card>\n\n\n    <ion-card id="card-background">\n        <ion-card-header id="schedule-header">\n            Schedule for\n            <div *ngIf="selectedDate; else originalDate">{{selectedDate | date}}, </div>\n            <ng-template #originalDate>{{myDate | date}}, </ng-template>\n            {{kid.kidName}}\n        </ion-card-header>\n\n        <ion-card-content padding id="group-name">\n\n            GROUP {{kid.groupName}} ({{kid.groupID}})\n        </ion-card-content>\n\n        <ion-card-content id="schedule-details">\n            <div *ngIf="scheduleForDate?.length>0 ; else noClassToday">\n                <ion-list *ngFor="let item of scheduleForDate">\n\n                    At : {{item.time}} <br> GROUP: {{item.groupName}}<br> DATE: {{item.date | date}}\n\n                </ion-list>\n            </div>\n            <ng-template #noClassToday>No Class Today</ng-template>\n        </ion-card-content>\n\n\n\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/show-class-info-kid/show-class-info-kid.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object])
    ], ShowClassInfoKidComponent);
    return ShowClassInfoKidComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=show-class-info-kid.js.map

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
            selector: 'progress2',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/progress2/progress2.html"*/'<!-- Generated template for the Progress2Component component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/axar.png"> PROGRESS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card id="coming-soon">\n        <ion-card-header id="coming-soon-header">\n            Fantastic stuff coming soon\n        </ion-card-header>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/progress2/progress2.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_schedule_add_schedule__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_get_schedule_get_schedule__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_schedule_details_edit_schedule_details__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_attendance_attendance__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_mark_attendance_mark_attendance__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_mark_attendance_for_group_mark_attendance_for_group__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_fees_fees__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pay_fees_pay_fees__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manage_classes_manage_classes__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_kids_kids__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_add_kid_add_kid__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_classes_classes__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_add_classes_add_classes__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_groups_groups__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_add_groups_add_groups__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_edit_groups_edit_groups__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_performance_performance__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_progress2_progress2__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_show_class_info_kid_show_class_info_kid__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import { EditKidComponent } from '../components/edit-kid/edit-kid';









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
                //EditKidComponent,
                __WEBPACK_IMPORTED_MODULE_22__components_add_kid_add_kid__["a" /* AddKidComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_classes_classes__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_classes_add_classes__["a" /* AddClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_groups_groups__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_add_groups_add_groups__["a" /* AddGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_edit_groups_edit_groups__["a" /* EditGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_show_class_info_kid_show_class_info_kid__["a" /* ShowClassInfoKidComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_performance_performance__["a" /* PerformanceComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_progress2_progress2__["a" /* Progress2Component */]
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
                //EditKidComponent,
                __WEBPACK_IMPORTED_MODULE_22__components_add_kid_add_kid__["a" /* AddKidComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_classes_classes__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_classes_add_classes__["a" /* AddClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_groups_groups__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_add_groups_add_groups__["a" /* AddGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_edit_groups_edit_groups__["a" /* EditGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_show_class_info_kid_show_class_info_kid__["a" /* ShowClassInfoKidComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_performance_performance__["a" /* PerformanceComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_progress2_progress2__["a" /* Progress2Component */]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/app/app.html"*/
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
            selector: 'get-schedule',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/get-schedule/get-schedule.html"*/'<!-- Generated template for the GetScheduleComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/get-schedule/get-schedule.html"*/
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
            selector: 'manage-classes',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/manage-classes/manage-classes.html"*/'<!-- Generated template for the ManageClassesComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/manage-classes/manage-classes.html"*/
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
            selector: 'classes',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/classes/classes.html"*/'<!-- Generated template for the ClassesComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> CLASSES\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <button ion-button (click)="getKidsList()">List Kids</button>\n        <button ion-button icon-right (click)="addKids()">Add Kids\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>\n    </div>\n\n    <ion-card *ngFor="let item of kidList" (click)="goToEditKidDetails(item)">\n        <ion-card-header>\n            KID ID {{ item.kidID }}\n        </ion-card-header>\n        <ion-card-content>\n            KID NAME {{ item.kidName }}\n\n        </ion-card-content>\n        <ion-card-content>\n            GROUP {{ item.groupName }} {{item.groupID}}\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/classes/classes.html"*/
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
            selector: 'add-classes',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-classes/add-classes.html"*/'<!-- Generated template for the AddClassesComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/add-classes/add-classes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], AddClassesComponent);
    return AddClassesComponent;
}());

//# sourceMappingURL=add-classes.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_schedule_schedule__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_attendance_attendance__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fees_fees__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_kids_kids__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_performance_performance__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_groups_groups__ = __webpack_require__(54);
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
        this.avatar_src = "assets/imgs/geeta.jpg";
        this.myDate = new Date();
        this.user = navParams.get('role');
        this.parent = navParams.get('parent');
        console.log('received on home page, username = ' + this.user);
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("will call get parentID");
        this.springData.getParentID(this.user).subscribe(function (data) {
            console.log("in subscribe to data of getParentID");
            _this.parent = data.parent;
            _this.parentAvatar = data.parent[0].parentAvatar;
            console.log("parent avatar received as: " + data.parent[0].parentAvatar);
            console.log("parent = " + _this.parent[0].parentID);
            console.log("now get kids list");
            _this.getKidsListForToday();
        }, function (err) { return console.error(err); }, function () {
            return console.log('getParentID   completed');
        });
    };
    HomePage.prototype.goToSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components_schedule_schedule__["a" /* ScheduleComponent */], { parent: this.parent });
    };
    HomePage.prototype.goToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__components_attendance_attendance__["a" /* AttendanceComponent */], { parent: this.parent, role: this.user });
    };
    HomePage.prototype.goToFees = function () {
        console.log("calling FeeComponent");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__components_fees_fees__["a" /* FeesComponent */], { parent: this.parent, role: this.user });
    };
    HomePage.prototype.getKids = function () {
        console.log("in kids");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__components_kids_kids__["a" /* KidsComponent */], { parent: this.parent, role: this.user });
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
    HomePage.prototype.getKidsList = function () {
        var _this = this;
        //get all the kids list from DB first
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidList = data.kidList;
        }, function (err) { return console.error(err); }, function () { return console.log('getKidsList   completed'); });
    };
    HomePage.prototype.getKidsListForToday = function () {
        var _this = this;
        console.log("getKidsListForToday");
        //get all the kids list from DB first
        this.springData.getKidInfoParentToday(this.parent, this.myDate).subscribe(function (data) {
            _this.kidList = data.Schedule;
        }, function (err) { return console.error(err); }, function () { return console.log('getKidsListForToday   completed'); });
    };
    HomePage.prototype.goToGroups = function () {
        console.log(" groups");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__components_groups_groups__["a" /* GroupsComponent */], { parent: this.parent, role: this.user });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/axar.png"> Parent App\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div padding id="top-row">\n        <ion-grid>\n            <ion-row>\n                <ion-col no-padding col-2 ion-item no-lines>\n                    <div>\n                        <ion-avatar item-left>\n                            <img src="{{parentAvatar}}" alt="parent picture">\n                        </ion-avatar>\n                    </div>\n                </ion-col>\n                <ion-col col-5>\n                    <div padding>\n                        <div>\n                            <ion-img src="assets/imgs/groups.png" (click)="goToGroups()">\n                            </ion-img>\n                        </div>\n                        <br>\n                        <div>\n                            All Classes\n                        </div>\n                    </div>\n\n\n                </ion-col>\n                <ion-col col id="kids-pic">\n                    <div padding id="activities-image">\n                        <img src="assets/imgs/activities.png">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <ion-content>\n        <ion-card id="card-background">\n\n            <div padding id="class-for-today">\n                Classes for Today\n            </div>\n\n            <div padding>\n                <ion-row *ngIf="kidList; else loading">\n                    <button ion-button block id="list-row" *ngFor="let item of kidList let odd=odd; let even=even" [ngClass]="{ odd: odd, even:even}" >\n                      <div >\n                        {{item.kidName }} - {{ item.groupName }} AT {{item.time}}\n                      </div>\n                    </button> {{kidList.length}}  class(es) today\n\n                </ion-row>\n            </div>\n\n\n\n            <div>\n                <ng-template #noResult>\n                    No Result {{kidList.length}}\n                </ng-template>\n                <ng-template #loading>\n                    <ion-spinner name="bubbles">Loading Groups...</ion-spinner>\n                </ng-template>\n            </div>\n\n        </ion-card>\n\n        <ion-card id="card-background">\n\n            <div padding id="menu">\n                Menu\n            </div>\n            <div>\n                <ion-grid>\n                    <ion-row>\n                   \n                        <ion-col>\n                            <div padding>\n                                <div>\n                                    <ion-img src="assets/imgs/attendance.png" (click)="goToAttendance()">\n                                    </ion-img>\n                                </div>\n                                <br>\n                                <div>\n                                    Attendance\n                                </div>\n                            </div>\n\n                        </ion-col>\n                        <ion-col>\n                            <div padding>\n                                <div>\n                                    <ion-img src="assets/imgs/fee.png" (click)="goToFees()">\n                                    </ion-img>\n                                </div>\n                                <br>\n                                <div>\n                                    Fees\n                                </div>\n                            </div>\n\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n\n                     \n                        <ion-col>\n                            <div padding>\n                                <div>\n                                    <ion-img src="assets/imgs/events.png" (click)="goToEvents()">\n                                    </ion-img>\n                                </div>\n                                <br>\n                                <div>\n                                    Events\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <div padding>\n                                <div>\n                                    <ion-img src="assets/imgs/performance.png" (click)="goToPerformance()">\n                                    </ion-img>\n                                </div>\n                                <br>\n                                <div>\n                                    Performance\n                                </div>\n                            </div>\n\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </div>\n\n        </ion-card>\n\n    </ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_schedule_add_schedule__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_schedule_details_edit_schedule_details__ = __webpack_require__(206);
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
            selector: 'schedule',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/schedule/schedule.html"*/'<!-- Generated template for the ScheduleComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> CLASS SCHEDULE\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n    \n\n    <ion-item >\n    Click on Kid Name to see the scheduled class list\n\n\n    </ion-item>\n\n    <ion-card style="background:light" >\n\n    <ion-grid padding>\n        <ion-row style="background:#488aff">\n            <ion-col col-2>\n                KID ID\n            </ion-col>\n            <ion-col col-10>\n                KID NAME\n            </ion-col>\n            \n        </ion-row>\n    \n        <ion-row *ngFor="let item of kidsList" (click)="getSchedule(item)">\n            <ion-col col-2>\n                \n                \n                        {{ item.kidID }}\n                           \n            </ion-col>\n            <ion-col col-10>  \n                 \n                        {{ item.kidName }}\n                                 \n            </ion-col>\n                \n        </ion-row>\n        \n    </ion-grid>\n\n    \n</ion-card>\n\n\n\n    \n\n\n     <ion-card style="background:light" *ngIf="clickedGetSchedule">\n\n    <ion-grid padding>\n        <ion-row style="background:#488aff">\n            <ion-col col-2>\n                DATE\n            </ion-col>\n            <ion-col col-2>\n                TIME\n            </ion-col>\n            <ion-col col-3>\n                KID NAME\n            </ion-col>\n            <ion-col col-5>\n                GROUP GROUPID\n            </ion-col>\n            \n        </ion-row>\n    \n        <ion-row *ngFor="let item of scheduleList" >\n            <ion-col col-2>\n                \n                \n                        {{ item.date }}\n                           \n            </ion-col>\n            <ion-col col-2>  \n                 \n                        {{ item.time }}\n                                 \n            </ion-col>\n\n            <ion-col col-3>\n                {{showKidName}}\n            </ion-col>\n\n            <ion-col col-5>  \n                 \n                        {{ item.groupName }} {{item.groupID}}\n                                 \n            </ion-col>\n                \n        </ion-row>\n        \n    </ion-grid>\n\n    \n</ion-card>\n\n    <div padding>\n\n\n    </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_kid_add_kid__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EditKidComponent } from '../edit-kid/edit-kid';

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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_kid_add_kid__["a" /* AddKidComponent */], { parent: this.parent });
    };
    KidsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'kids',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/kids/kids.html"*/'<!-- Generated template for the KidsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img alt="logo" height="40" src="assets/imgs/parent.png"> KIDS\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        \n        <button ion-button icon-right (click)="addKids()">Add Kids\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>\n    </div>\n\n    <ion-card style="background:light">\n\n    <ion-grid padding>\n        <ion-row style="background:#488aff">\n            <ion-col col-2>\n                KID ID\n            </ion-col>\n            <ion-col col-5>\n                KID NAME\n            </ion-col>\n            <ion-col col-5>\n                GROUP NAME ID\n            </ion-col>\n        </ion-row>\n    \n        <ion-row *ngFor="let item of kidList" (click)="goToEditKidDetails(item)">\n            <ion-col col-2>\n                \n                \n                        {{ item.kidID }}\n                           \n            </ion-col>\n            <ion-col col-5>  \n                 \n                        {{ item.kidName }}\n                                 \n            </ion-col>\n            <ion-col col-5> \n                 \n                        {{ item.groupName }} {{item.groupID}}\n        \n            </ion-col>        \n        </ion-row>\n        \n    </ion-grid>\n\n    \n</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/kids/kids.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], KidsComponent);
    return KidsComponent;
}());

//# sourceMappingURL=kids.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_edit_groups_edit_groups__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_groups_add_groups__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_show_class_info_kid_show_class_info_kid__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(31);
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
        this.parent = this.navParams.get('parent');
        this.user = this.navParams.get('role');
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getKidList();
    };
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
    GroupsComponent.prototype.goBackHome = function () {
        console.log("going back to home page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], { parent: this.parent, role: this.user });
    };
    GroupsComponent.prototype.getKidList = function () {
        var _this = this;
        console.log("getKidList");
        this.springData.getKidInfoParent(this.parent).subscribe(function (data) {
            _this.kidList = data.kidList;
        }, function (err) { return console.error(err); }, function () { return console.log('getGroupList completed'); });
    };
    GroupsComponent.prototype.goToShowKidClasses = function (selectedKid) {
        console.log("Show kid Classes, calling ShowClassInfoComponent now");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__components_show_class_info_kid_show_class_info_kid__["a" /* ShowClassInfoKidComponent */], { selectedKid: selectedKid, parent: this.parent, role: this.user });
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'groups',template:/*ion-inline-start:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/groups/groups.html"*/'<!-- Generated template for the GroupsComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <img float-left alt="logo" height="30" src="assets/imgs/axar.png"> Groups\n                    </ion-col>\n                    <ion-col>\n                        <img float-right height="30" src="assets/imgs/home.png" (click)="goBackHome()">\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div padding>\n        <div>\n            <div padding>\n                Click Child to see Calendar\n            </div>\n            <ion-row *ngIf="kidList; else loading">\n                <button ion-button block id="list-row" *ngFor="let item of kidList let odd=odd; let even=even" [ngClass]="{ odd: odd, even:even}" (click)="goToShowKidClasses(item)">\n                  <div >{{ item.kidName }} - {{ item.groupName}} </div>\n\n                </button>\n\n\n            </ion-row>\n        </div>\n\n        <div>\n            <ng-template #loading>\n                <ion-spinner name="bubbles">Loading Groups...</ion-spinner>\n            </ng-template>\n        </div>\n\n\n    </div>\n\n\n\n\n    \n\n\n\n</ion-content>'/*ion-inline-end:"/Users/geetapuri/Technology/IonicCLI/CoachAppForParentMobile/src/components/groups/groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_get_data_from_spring_get_data_from_spring__["a" /* GetDataFromSpringProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
    ], GroupsComponent);
    return GroupsComponent;
}());

//# sourceMappingURL=groups.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map