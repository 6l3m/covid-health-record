import { Component, OnInit } from '@angular/core';

import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'chr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHandHoldingMedical = faHandHoldingMedical;

  title = 'Covid Health Record';

  constructor() {}

  ngOnInit(): void {}
}
