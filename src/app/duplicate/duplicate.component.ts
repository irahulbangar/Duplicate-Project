import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {
  array: number[] = [];
  num = 0;
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    for (var i = 0; i < this.array.length; i++) {
      if (this.num == this.array[i]) {
        alert('Duplicate number is not allowed');
        break;
      }
    }
    if (this.num != this.array[i]) {
      this.array.push(this.num);
      console.log(this.array);
    }
  }
}
