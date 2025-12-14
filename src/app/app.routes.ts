import { Routes } from '@angular/router';
import { Contact } from './Pages/contact/contact';
import { Card } from './card/card';
import { Home } from './home/home';
import { Business } from './page/business/business';
import { Aerospace } from './page/aerospace/aerospace';
import { Locomotive } from './page/locomotive/locomotive';
import { Insurance } from './page/insurance/insurance';
import { Health } from './page/health/health';
import { Banking } from './page/banking/banking';

export const routes: Routes = [
    {path:'contact',component:Contact},
    {path:'models',component:Card},
    {path:'Home',component:Home},
    {path:'Business',component:Business},
    {path:'aerospace',component:Aerospace},
    {path:'locomotive',component:Locomotive},
    {path:'insurance',component:Insurance},
    {path:'healthcare',component:Health},
    {path:'banking',component:Banking}

];

