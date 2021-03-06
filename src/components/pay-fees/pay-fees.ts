import { Component , OnInit} from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { FeesComponent } from '../fees/fees';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the PayFeesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pay-fees',
  templateUrl: 'pay-fees.html'
})
export class PayFeesComponent implements OnInit{

    ngOnInit(){
    console.log(" get fees for kid - "+ this.kid.kidName);
    this.springData.viewFeesForKid(this.kid).subscribe(
    data => {


      this.feeList= data.feeList;
      
    },
    err => console.error(err),
    () => console.log('viewFeesKid completed')
  );
}

  text: string;
  public kidID;
  public feeList;
  public selectedKid;
  public kidsList;
  public myDate;
  public selectedFeeItem;
  public result;
  public parent;
  public user;
  public kid;
  

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello PayFeesComponent Component');
    this.text = 'Hello World';
    this.kid = this.navParams.get('item');
    this.parent = navParams.get('parent');
    this.user = navParams.get('role');
    

  }

  
  viewFeePaid(item){
      this.selectedKid= item.kidName;
      this.springData.viewFeesForKid(item).subscribe(
        data => {


          this.feeList= data.feeList;

        },
        err => console.error(err),
        () => console.log('viewFeesKid completed')
      );

  }
  
  goBackHome(){
  console.log("going back to home page");
  this.navCtrl.push(HomePage, {parent:this.parent, role:this.user});
}


}
