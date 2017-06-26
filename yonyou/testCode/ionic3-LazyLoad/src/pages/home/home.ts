import {Component, OnInit}from '@angular/core';
import {NavController }from 'ionic-angular';

@Component( {
selector:'page-home',
templateUrl:'home.html'
})
export class HomePage implements OnInit {
 currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
constructor(public navCtrl:NavController) {

}
ngOnInit() {

}


goPageWhere() {
    this.navCtrl.push('page-test');
}


fnClaim($event) {
    console.log('为啥不居中')
}
ionViewDidLoad() {
    console.log('homme  will come  ionViewDidLoad');

}
ionViewLoaded() {
    console.log('homme  will come  ionViewLoaded');
}

ionViewWillEnter() {
    console.log('homme  will come  ionViewWillEnter');

}
ionViewDidEnter() {
    console.log('homme  will come  ionViewDidEnter');

}
ionViewWillLeave() {
    console.log('homme  will come  ionViewWillLeave');

}
ionViewDidLeave() {
    console.log('homme  will come  ionViewDidLeave');

}
ionViewWillUnload() {
    console.log('homme  will come  ionViewWillUnload');

}
ionViewDidUnload() {
    console.log('homme  will come  ionViewDidUnload');

}

}

