import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.html',
  styleUrl: './som.css',
})
export class Som {
  names = signal(['aymen', 'nouha', 'mohamed']);
  namesSize = computed(() => this.names().length);
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  dz = computed(() => {
    console.log('Nehseb fi DZ');

    return this.z() * 2;
  });

  addName() {
    this.names.update((names) => [...names, 'louay']);
  }
}
