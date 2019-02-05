import { Component, Input, ɵmarkDirty as markDirty } from '@angular/core';
import { Counter } from '../services/counter';
import { Items } from '../models/Items';
import { InitialData } from '../lib/photon/initial-data';

@Component({
  template: `
  <button (click)="onClick()">Press</button>
  <div *ngIf="nameInternal.startsWith('ivy')">
    <div *ngFor="let s of strings">
      <h3 *ngIf="s.startsWith('I')">Hello</h3>{{s}}
    </div>
  </div>
  <div *ngIf="list">
    <div *ngFor="let item of list.items">
      {{item.name}} : {{item.value}}
    </div>
  </div>
  <greeting-cmp [name]="nameInternal"></greeting-cmp>
  `,
})
export class LinkHeader {
  @Input('name')
  nameInternal: string;

  @InitialData('/assets/ivy.json')
  @Input()
  list: Items;

  strings = ['Ivy', 'is', 'good'];

  constructor(private readonly counter: Counter) {}

  onClick() {
    this.strings.push('!!!');
    this.counter.increment();
    if (this.counter.current() > 2) {
      // After 2 clicks change the binding on the child component which causes
      // it to get fetched and rendered.
      this.nameInternal = `ivy${this.counter.current()}`;
    }
    // Tell Ivy that this component state has changed.
    markDirty(this);
  }
}
