import { Routes } from '@angular/router';
import { ActivePlanComponent } from './active-plan/active-plan.component';
import { UpcomingPlansComponent } from './upcoming-plans/upcoming-plans.component';
import { ExpiredPlansComponent  } from './expired-plans/expired-plans.component';




export const routes: Routes = [
    {'path': '', 'title':'activePlan', component:ActivePlanComponent},
    {'path': '', children:[
        {'path': 'active-plan', 'title': 'activePlan', component:ActivePlanComponent},
        {'path': 'upcoming-plans', 'title': 'activePlan | upcomingPlan', component:UpcomingPlansComponent},
        {'path': 'expired-plans' , 'title': 'activePlans | expiredPlans', component:ExpiredPlansComponent}
    ]}

];
