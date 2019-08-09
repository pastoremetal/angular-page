import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.less']
})
export class BannerFormComponent implements OnInit {
  ida_volta = new FormControl('');
  origem = new FormControl('');
  destino = new FormControl('');
  data_ida = new FormControl('');
  data_volta = new FormControl('');
  adultos = new FormControl('');
  criancas = new FormControl('');
  bebes = new FormControl('');

  filteredOrigemOptions: Observable<string[]>;

  origemOptions = [
    'São Paulo',
    'Rio de Janeiro'
  ];
  constructor() { }

  ngOnInit() {
    this.filteredOrigemOptions = this.origem.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value, this.origemOptions))
    );
  }
  private _filter(value: string, options: string[]): string[] {
    if (value.length < 3) {
      return [];
    }
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
