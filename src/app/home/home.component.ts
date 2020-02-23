import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

 @Input() backgroundImg: any;
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    let url = "../assets/home.json";
    let httpOptionsPlain = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      responseType: "json"
    };
    this._http.get(url, httpOptionsPlain).subscribe(response => {
      this.backgroundImg = response.backgroundImg;
      console.log("image", response);
    });
  }
}
