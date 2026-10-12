import { Component } from '@angular/core';
import { RAW_PROJECT_STACK } from '../../data/projects.data'
import { ProjectCard } from '../project-card/project-card';
import { createSignalList} from '../../utils/create-signal-list'


@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  // We get the raw data stack from a data file and with createSignalList (found in utils) we finish assigning values to it
    readonly projectstack = createSignalList(RAW_PROJECT_STACK);
}