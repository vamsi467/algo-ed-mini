import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-domain-analysis',
  templateUrl: './domain-analysis.component.html',
  styleUrls: ['./domain-analysis.component.scss']
})
export class DomainAnalysisComponent {
  @Input() domainScores: any[] = [];
}
