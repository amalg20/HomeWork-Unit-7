import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiUrl = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  getCoffeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  postCoffee(body: any): Observable<any> {
    console.log(body);
    return this.http.post<any>(`${this.apiUrl}/new`, body);
  }

  getRandomCoffee(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/random');
  }
  search(queryName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?q=${queryName}`);
  }

}
