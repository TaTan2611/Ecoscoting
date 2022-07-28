import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../models/pais';
@Injectable({
  providedIn: 'root',
})
export class PaisService {
  paisURL = environment.paistoURL;
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Pais[]> {
    return this.httpClient.get<Pais[]>(`${this.paisURL}`);
  }

  public detail(id: number): Observable<Pais> {
    return this.httpClient.get<Pais>(`${this.paisURL}${id}`);
  }


/*
  public save(producto: Pais): Observable<any> {
    return this.httpClient.post<any>(this.paisURL + 'create', producto);
  }

  public update(id: number, producto: Pais): Observable<any> {
    return this.httpClient.put<any>(
      this.paisURL + `update/${id}`,
      producto
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.paisURL + `delete/${id}`);
  }*/
}
