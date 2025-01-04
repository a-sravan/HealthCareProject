import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private baseURL = 'http://54.169.176.105:4000';
  constructor(private http: HttpClient) {}

  public saveCallRequest(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/enquiry/callRequests`, data);
    // `${this.baseURL}/enquiry/careerApply
  }

  public careerRequest(carrerdata: any): Observable<any> {
    return this.http.post(`${this.baseURL}/enquiry/careerApply`, carrerdata);
  }
}
