import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  token = "V5BXJFW-X59M372-G183BWZ-76DWGHM"
  imageUrl = '';
  constructor(private captureService: NgxCaptureService,
    private http: HttpClient
  ) { }
  title = 'UrlProof';


  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    this.http.get<any>('https://shot.screenshotapi.net/screenshot?token=' + this.token + '&url=' + form.value.url)

      .subscribe((res: any) => {
        console.log("hh");
        console.log(res.screenshot);
        this.imageUrl = res.screenshot


      })
  }

}