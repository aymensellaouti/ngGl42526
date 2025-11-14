import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BaseNodeComponent } from '../base-node.component';
import { ThreeComponent } from "../three.component";
import { TwoComponent } from '../two.component';

@Component({
  selector: 'app-start-cd',
  imports: [TwoComponent, ThreeComponent],
  templateUrl: './start-cd.component.html',
  styleUrl: './start-cd.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class StartCdComponent extends BaseNodeComponent{}
