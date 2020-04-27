import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {

  constructor() { }
  @Input() name: string;
  @Input() age: number;
  @Input() food: string;


  ngOnInit(): void {
  }

}
