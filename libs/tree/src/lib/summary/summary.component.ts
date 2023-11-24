import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoItemFlatNode } from '../tree.model';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'learn-summary',
  standalone: true,
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnChanges {
  @Input() data!: TodoItemFlatNode[];
  @Output() itemRemoved = new EventEmitter<TodoItemFlatNode>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes :>> ', changes['data'].currentValue);
  }

  remove(item: TodoItemFlatNode) {
    this.itemRemoved.emit(item);
  }
}
