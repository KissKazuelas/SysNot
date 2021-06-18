import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate, CanLoad {
  

  constructor(private authService : AuthService,
    private router : Router){}

  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
  //   if(this.authService.auth.id){
  //     return true;
  //   }
  //   console.log('Bloqueado por CanActivate');
  // return false;
  return this.authService.getRole('USER').pipe(
    tap(estaAutenticado => {
      if(!estaAutenticado){
        this.router.navigate(['./auth/login']);
      }
    })
  );
  }
        canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean>  | boolean {
        return this.authService.getRole('USER').pipe(
        tap(estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigate(['./auth/login']);
        }
        })
        );

        //   if(this.authService.auth.id){
        //     return true;
        //   }
        //   console.log('Bloqueado por CanLoad');
        // return false;
        }

}


