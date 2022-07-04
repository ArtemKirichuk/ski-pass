import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{
    destroy$ : Subject<boolean> = new Subject<boolean>();

    constructor(public userService: UserService, private router:Router){
    }

    ngOnInit(): void {
        this.userService.singInGet()
        .pipe(
            takeUntil(this.destroy$))    
        .subscribe(val=>{
            if(val){
                this.userService.getUsers()
                .pipe(takeUntil(this.destroy$)) 
                .subscribe(resp => {
                    const user = resp.find( el => el.name === val);
                    if (user) {
                        this.userService.sendUser$(user);
                        this.router.navigate(['']);
                    }
                    else {
                        this.router.navigate(["/autorization"]);
                    }
                });
            }
            else{
                this.router.navigate(['/autorization']);
            }
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
