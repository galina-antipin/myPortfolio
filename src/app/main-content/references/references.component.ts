import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  references = [
    {
      name: 'Patrick Schlieker',
      project: 'Join',
      reference: '"Galina was a fantastic colleague. Her ambition and her independent and confident approach to tackling and overcoming challenges drove our project forward and played a significant role in delivering well-functioning results by the deadline. I would be happy to work with Galina again."'
    },
    {
      name: 'Maximilian Stigler',
      project: 'Join',
      reference: '"Galina was always fully committed to our project. She completed her tasks very carefully and independently and had good time management. With her attention to detail, she ensured that nothing was overlooked. Even in stressful phases, she was always positive and radiated a good mood. Because of her empathy and willingness to help, she was also important for the morale of the team. Her great determination contributed significantly to the success of the project."'
    },
    {
      name: 'Alice Johnson',
      project: 'Marketing Strategy',
      reference: 'Alice’s strategies boosted our outreach significantly, and her creativity is unmatched.'
    }
  ];

}
