import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';

import { Observable } from 'rxjs/Rx';
import { ScheduleComponent } from '../../components/schedule/schedule';
import { AttendanceComponent } from '../../components/attendance/attendance';
import { FeesComponent } from '../../components/fees/fees';
import { KidsComponent } from '../../components/kids/kids';
import { PerformanceComponent } from '../../components/performance/performance';
import { EventsComponent } from '../../components/events/events';
import { ManageClassesComponent } from '../../components/manage-classes/manage-classes';
import { ClassesComponent} from '../../components/classes/classes';
import { GroupsComponent} from '../../components/groups/groups';
import { Progress2Component} from '../../components/progress2/progress2';
import { ShowClassInfoKidComponent} from '../../components/show-class-info-kid/show-class-info-kid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  ngOnInit(){
    console.log("will call get parentID");
    this.springData.getParentID(this.user).subscribe(
      data => {
        console.log("in subscribe to data of getParentID");

        this.parent= data.parent;
        this.parentAvatar= data.parent[0].parentAvatar;
        console.log("parent avatar received as: " + data.parent[0].parentAvatar);
        console.log("parent = " + this.parent[0].parentID);
        console.log("now get kids list");
        this.getKidsListForToday();
      },
      err => console.error(err),
      () =>
        console.log('getParentID   completed'),
    );



  }

  public user;
  public parent;
  public kidList;
  public avatar_src="assets/imgs/geeta.jpg";
  public parentAvatar;
  public myDate = new Date();


  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('role');
    this.parent= navParams.get('parent');
    console.log('received on home page, username = ' + this.user);
  }
  goToSchedule(){

    this.navCtrl.push(ScheduleComponent, {parent:this.parent});
  }
  goToAttendance(){

    this.navCtrl.push(AttendanceComponent, {parent:this.parent, role:this.user});

  }
  goToFees(){
    console.log("calling FeeComponent");

    this.navCtrl.push(FeesComponent, {parent:this.parent, role:this.user});
  }
  getKids(){
    console.log("in kids");
    this.navCtrl.push(KidsComponent, {parent:this.parent});
  }

  goToManageGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsComponent);
  }
  goToPerformance(){
    console.log("in performance");
    this.navCtrl.push(PerformanceComponent);
  }
  goToEvents(){
    console.log("in events");
    //this.navCtrl.push(EventsComponent);
  }
  goToProgress(){
    console.log("in progress");
    this.navCtrl.push(Progress2Component);
  }

  getKidsList(){
    //get all the kids list from DB first
    this.springData.getKidInfoParent(this.parent).subscribe(
      data => {


        this.kidList= data.kidList;
        

      },
      err => console.error(err),
      () => console.log('getKidsList   completed')
    );


  }
  
  getKidsListForToday(){
    console.log("getKidsListForToday");
    //get all the kids list from DB first
    this.springData.getKidInfoParentToday(this.parent, this.myDate).subscribe(
      data => {


        this.kidList= data.Schedule;
        

      },
      err => console.error(err),
      () => console.log('getKidsListForToday   completed')
    );


  }

  
  
  goToGroups(){
    console.log(" groups");
    this.navCtrl.push(GroupsComponent, {parent:this.parent, role:this.user});
  }
  



}
