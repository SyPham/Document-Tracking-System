import { Injectable } from '@angular/core';
import { PaginatedResult } from '../_model/pagination';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IEditLangParams } from '../_model/edit-lang-param';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getCategories(lang = 'en'): Observable<object> {
    const paginatedResult: PaginatedResult<object> = new PaginatedResult<object>();
    return this.http.get<object>(`${this.baseUrl}Category/GetCategories/${lang}`).pipe(
      map((response: any) => {
        paginatedResult.result = response.body;
        console.log('getCategories: ', response);
        return response;
      })
    );
  }
  update(update: IEditLangParams[]) {
    return this.http.put(
      this.baseUrl + 'Category/Update',
      update
    );
  }
  create(create) {
    return this.http.post(
      this.baseUrl + 'Category/create',
      create
    );
  }
  delete(id: any) {
    return this.http.delete(
      this.baseUrl + 'Category/delete/' + id
    );
  }
}
