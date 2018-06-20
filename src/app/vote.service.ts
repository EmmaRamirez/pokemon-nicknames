import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiUrl = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }
}
