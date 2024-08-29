import { Routes } from '@angular/router';
import { AboutComponent } from './shared/components/main/about/about.component';
import { PageNotFoundComponent } from './shared/components/main/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/components/main/home/home.component';
import { ToolBarComponent } from './shared/components/Toolbar/tool-bar/tool-bar.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'toolbar', component: ToolBarComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
];
