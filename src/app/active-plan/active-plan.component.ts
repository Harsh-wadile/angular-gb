import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-active-plan',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './active-plan.component.html',
  styleUrl: './active-plan.component.css'
})
export class ActivePlanComponent {

}
