import { Component, OnInit } from '@angular/core';
import { Section} from '../section';
import { SECTIONS } from '../mock-sections';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: Section[] = SECTIONS;
  constructor() { }

  ngOnInit() {
  }

}
