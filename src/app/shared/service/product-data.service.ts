import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { Products } from '../modal/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private http = inject(HttpClient);

  public products(): Observable<Products[]> {
    return this.http.get<Products[]>('assets/data/product.json').pipe(
      map(res => {
        return res;
      }),
    );
  }

  public getProduct(id: number): Observable<Products | undefined> {
    return this.products().pipe(
      map(items => {
        return items.find((item: Products) => {
          return item.id === id;
        });
      }),
    );
  }
}
