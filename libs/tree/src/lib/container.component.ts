import { Component, ViewChild } from '@angular/core';
import { TreeComponent } from './tree/tree.component';
import { SummaryComponent } from './summary/summary.component';
import { TodoItemFlatNode } from './tree.model';

@Component({
  selector: 'learn-container',
  standalone: true,
  imports: [TreeComponent, SummaryComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class TreeContainerComponent {
  @ViewChild(TreeComponent) tree!: TreeComponent;
  data: TodoItemFlatNode[] = [];

  selectionChanged(data: TodoItemFlatNode[]) {
    this.data = data;
  }

  removeItem(item: TodoItemFlatNode) {
    item.parent === undefined
      ? this.tree.todoItemSelectionToggle(item)
      : this.tree.todoLeafItemSelectionToggle(item);
  }
}
