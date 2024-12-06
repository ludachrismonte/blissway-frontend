import { Routes } from '@angular/router';
import {ViolationsComponent} from "./violations/violations.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
    { path: 'violations', component: ViolationsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'violations' },
];
