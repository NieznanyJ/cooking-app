import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RecepiespageComponent } from './pages/recepiespage/recepiespage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { RecepiePageComponent } from './pages/recepie-page/recepie-page.component';
export const routes: Routes = [
    {title: 'home', path: '', component: HomepageComponent},
    {title: 'recepies', path: 'recepies', component: RecepiespageComponent},
    {title: 'login', path: 'login', component: LoginpageComponent},
    {title: 'register', path: 'register', component: RegisterpageComponent},
    {title: 'recepie', path: 'recepie', component: RecepiePageComponent},
];
