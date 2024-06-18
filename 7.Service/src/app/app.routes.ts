import { Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

export const routes: Routes = [
    {
        path: "",
        component: AComponent
    },
    {
        path: "a",
        component: AComponent
    },
    {
        path: "b",
        component: BComponent
    }
];
