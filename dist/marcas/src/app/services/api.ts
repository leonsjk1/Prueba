import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'https://api.viveplus.com.mx/v1/?key=';
  constructor(private http: HttpClient) { }

  public getMarcas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
