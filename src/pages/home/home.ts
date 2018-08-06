import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  // item: firebase.database.ThenableReference;
  name;
  items=[];  
  cuisine={
    name:''
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.items = afDB.list('cuisines').valueChanges();
    // this.item =this.afDB.list('cuisine').push(this.name);
    //Retrieve The List
      firebase.database().ref('/cuisine/').on("value", (snapshot) => {
      snapshot.forEach((snap) => {

        console.log(snap.val());
        //append To Item List
        this.items.push(snap.val());

        return false;
      });
    });

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  //write to database
  writeCuisine(){
    // this.afDB.list('cuisine').push(this.name);
    console.log(this.name);
    this.cuisine.name = this.name;
    var databese = firebase.database();
    databese.ref('/cuisine/').push(this.cuisine);
  }


update(i){

    i.name = "sweets";
    var database = firebase.database();
    database.ref('/cuisine/'+i.key).set({name:i.name});
 }


  delete(i){
    var database = firebase.database();
    database.ref('/cuisine/'+i.key).remove();
  }
}
  
