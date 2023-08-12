import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
  inject,
} from '@angular/core';
import {
  NgClass,
  NgForOf,
  NgTemplateOutlet,
  TitleCasePipe,
} from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'learn-tabs',
  standalone: true,
  imports: [TitleCasePipe, NgClass, NgForOf, NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  readonly #cdr = inject(ChangeDetectorRef);

  currentTab: any;
  activeTabIndex!: number;

  ngAfterViewInit(): void {
    this.activeTabIndex = 0;
    this.selectTab(this.activeTabIndex);
    this.#cdr.detectChanges();
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    this.currentTab = (this.tabs.get(index) as TabComponent).template;
  }
}
