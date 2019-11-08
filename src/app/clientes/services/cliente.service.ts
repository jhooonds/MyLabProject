import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClienteI } from "../models/cliente-i";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private _apiUrl = '10.10.10.173/8080/api';

  constructor(private http: HttpClient) { }

  insertCliente(Cliente: ClienteI) {
    return this.http.post(this._apiUrl, Cliente);
  }

  getClienteById(id: Number){
    return this.http.get<ClienteI>(this._apiUrl + '/' + id);
  }
}
