import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Injectable()
export class UsersService {

  constructor(
    private af: AngularFire,
    private router: Router) { }

  registerUser(firstname: string, lastname: string, email: string, password: string) {
    this.af.auth.createUser({
      email: email,
      password: password
    }).then(success => console.log(success));
    this.router.navigate(['/login'])
      .catch(err => {
        console.log(err);
        this.router.navigate(['/login'])
      });
    //firebase.auth().createUserWithEmailAndPassword(email, password);
    this.addUserInfosToDb(firstname, lastname, email, password);
  }

  loginUser(email: string, password: string) {
    this.af.auth.login({
      email: email,
      password: password
    }).then(success => console.log(success));
    this.router.navigate(['/home']);
    //firebase.auth().signInWithEmailAndPassword(email,password);
    this.userStateChanged();
  }

  private userStateChanged() {
    this.af.auth.getAuth();
    // firebase.auth().onAuthStateChanged(firebaseUser => {
    //   if(firebaseUser) {
    //     console.log('user logged in');
    //   } else {
    //     console.log('not logged in');
    //   }
    // });
  }

  logoutUser() {
    this.af.auth.logout();
    // firebase.auth().signOut()
    //   .then(() => console.log('user logged out'));
  }

  // getUserInfosFromDb() {
  //   let userId = firebase.auth().currentUser.uid;
  //   let ref = firebase.database().ref('/users');
  //   let oneUser$;
  //   ref.orderByChild('userId').equalTo(userId).once('value')
  //     .then(snapshot => {
  //       oneUser$ = snapshot.val();
  //     });
  //   return oneUser$;
  // }

  private addUserInfosToDb(firstname: string, lastname: string, email: string, password: string) {
    this.af.database.list('/users').push({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    });
    //firebase.database().ref('/users').push({firstname: firstname, lastname: lastname, email: email, password: password});
  }

}
