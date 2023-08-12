import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'learn-tab-display',
  standalone: true,
  imports: [TabsComponent, TabComponent],
  templateUrl: './tab-display.component.html',
  styleUrls: ['./tab-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabDisplayComponent {}
