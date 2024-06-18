import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
       // canActivateChild: [() => inject(AuthService).isAuthenticated(), authGuard],
        children: [
            {
                path: "",     
                canDeactivate: [checkGuard],
                component: HomeComponent
            },
            {
                path: "about",                
                component: HomeComponent
            },
            {
                path: "contact",                
                component: HomeComponent
            },
            {
                path: "personels",                
                component: HomeComponent
            },
        ]
    },   
    {
        path: "login",
        component: LoginComponent
    }
];
