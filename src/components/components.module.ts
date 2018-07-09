import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule';
import { AttendanceComponent } from './attendance/attendance';
import { FeesComponent } from './fees/fees';
import { KidsComponent } from './kids/kids';
import { PerformanceComponent } from './performance/performance';
import { LoginComponent } from './login/login';
import { EventsComponent } from './events/events';
import { AddScheduleComponent } from './add-schedule/add-schedule';
import { GetScheduleComponent } from './get-schedule/get-schedule';
import { EditScheduleDetailsComponent } from './edit-schedule-details/edit-schedule-details';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance';
import { MarkAttendanceForGroupComponent } from './mark-attendance-for-group/mark-attendance-for-group';
import { PayFeesComponent } from './pay-fees/pay-fees';
import { ManageClassesComponent } from './manage-classes/manage-classes';
//import { EditKidComponent } from './edit-kid/edit-kid';
import { AddKidComponent } from './add-kid/add-kid';
import { ClassesComponent } from './classes/classes';
import { AddClassesComponent } from './add-classes/add-classes';
import { GroupsComponent } from './groups/groups';
import { AddGroupsComponent } from './add-groups/add-groups';
import { EditGroupsComponent } from './edit-groups/edit-groups';
//import { ShowClassInfoKidComponent } from './show-class-info-kid/show-class-info-kid';
import { Progress2Component } from './progress2/progress2';
import { ShowClassInfoKidComponent } from './show-class-info-kid/show-class-info-kid';
import { HomePage } from './../pages/home/home';
@NgModule({
	declarations: [ScheduleComponent,
    AttendanceComponent,
    FeesComponent,
    KidsComponent,
    PerformanceComponent,
    LoginComponent,
    EventsComponent,
    AddScheduleComponent,
    GetScheduleComponent,
    EditScheduleDetailsComponent,
    MarkAttendanceComponent,
    MarkAttendanceForGroupComponent,
    PayFeesComponent,
    ManageClassesComponent,
    //EditKidComponent,
    HomePage,
    AddKidComponent,
    ClassesComponent,
    AddClassesComponent,
    GroupsComponent,
    AddGroupsComponent,
    EditGroupsComponent,
    ShowClassInfoKidComponent,    
    Progress2Component],
	imports: [],
	exports: [ScheduleComponent,
    AttendanceComponent,
    FeesComponent,
    KidsComponent,
    PerformanceComponent,
    LoginComponent,
    EventsComponent,
    AddScheduleComponent,
    GetScheduleComponent,
    EditScheduleDetailsComponent,
    MarkAttendanceComponent,
    MarkAttendanceForGroupComponent,
    PayFeesComponent,
    ManageClassesComponent,
    //EditKidComponent,
    HomePage,
    AddKidComponent,
    ClassesComponent,
    AddClassesComponent,
    GroupsComponent,
    AddGroupsComponent,
    EditGroupsComponent,
    ShowClassInfoKidComponent,    
    Progress2Component]
})
export class ComponentsModule {}
