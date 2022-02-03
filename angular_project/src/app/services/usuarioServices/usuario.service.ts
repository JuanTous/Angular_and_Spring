import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  url: string = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  save(u: usuario) { return this.http.post<boolean>(this.url, u) }

  getAll() { return this.http.get<usuario[]>(this.url) };

  getById(id: number) { return this.http.get<usuario>(`${this.url}/${id}`) }

  edit(u: usuario) { return this.http.put<boolean>(`${this.url}/${u.id}`, u) }

  delete(id: number) { return this.http.delete<boolean>(`${this.url}/${id}`) }

}
