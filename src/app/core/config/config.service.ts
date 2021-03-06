import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable()
export class ConfigService {
  extendHeader: any;
  constructor(private http: HttpClient) {}
  get(
    url: string,
    formData?: any,
    additionalHeaders = {},
    jsonOutput = false
  ): Observable<any> {
    let params = new HttpParams();
    try {
      Object.keys(formData).forEach(function(key) {
        params = params.append(key, formData[key]);
      });
    } catch (e) {}
    // console.log(params);
    let tempHeaders = {
      "Content-type": "application/json"
    };
    tempHeaders = this.extendHeader(tempHeaders, additionalHeaders);
    let headers = new HttpHeaders(tempHeaders);
    let options = {
      params: params,
      withCredentials: true,
      headers: headers
    };
    if (!jsonOutput) {
      return this.http.get(url, options).pipe(map(response => response));
    } else {
      return this.http
        .get(url, options)
        .pipe(map(response => JSON.stringify(response)));
    }
  }

  post(
    url: string,
    formData?: any,
    withCredentials = true,
    isStringify = true
  ): Observable<any> {
    let headers = new HttpHeaders({ "Content-type": "application/json" });
    let options = {
      headers: headers
    };

    if (url.indexOf("InsertSingleNotification") < 0) {
      options["withCredentials"] = withCredentials;
    }

    let body = isStringify ? JSON.stringify(formData) : formData;
    return this.http.post(url, body, options).pipe(map(response => response));
  }

  put(url: string, formData?: any): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers, withCredentials: true };
    let body = JSON.stringify(formData);

    return this.http.put(url, body, options).pipe(map(response => response));
  }

  delete(url: string, formData?: any): Observable<any> {
    let params: HttpParams = new HttpParams();
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    for (var i in formData) {
      params.set(i, formData[i]);
    }
    let options = {
      headers: headers,
      search: params
    };
    return this.http.delete(url, options).pipe(map(response => response));
  }
}
