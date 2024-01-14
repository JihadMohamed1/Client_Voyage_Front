import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8081/Client';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getClients`);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`);
  }

  editItem(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, data);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/deleteClient/${id}`);
  }

  addItem(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/AddClient`, data);
  }
}

