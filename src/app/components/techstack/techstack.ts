import { Component, inject, signal } from '@angular/core';
import { RAW_TECH_STACK } from '../../data/tech-skills.data';
import { TechskillCard } from '../techskill-card/techskill-card';
import { createSignalList} from '../../utils/create-signal-list'

@Component({
  selector: 'app-techstack',
  imports: [TechskillCard],
  templateUrl: './techstack.html',
  styleUrl: './techstack.css',
})
export class Techstack {
  // We get the raw data stack from a data file and with createSignalList (found in utils) we finish assigning values to it
  readonly techstack = createSignalList(RAW_TECH_STACK);
}