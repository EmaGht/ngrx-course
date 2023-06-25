import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { tap } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AppState } from './reducers';
import { AuthActions } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(private router: Router, private auth: AuthService, private store: Store<AppState>) {

  }

  ngOnInit() {

    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

  }

  logout() {
    this.auth.logout().pipe(
      tap(_ => this.store.dispatch(AuthActions.logout()))
    ).subscribe(logoutRes => {
      if (!logoutRes)
        alert("Logout error");
    });
  }

}
