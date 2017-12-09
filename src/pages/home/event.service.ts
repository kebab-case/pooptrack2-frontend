import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface PoopEvent {
  name: string;
  comment: string;
  date: string;
  img: string;
  like: string;
}

@Injectable()
export class EventService {
  private apiUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  get(): Observable<PoopEvent[]> {
    return this.http.get<PoopEvent[]>(this.apiUrl);
  }
}