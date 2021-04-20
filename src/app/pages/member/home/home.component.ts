import { Component, OnInit } from '@angular/core';
import { ApiService } from '@shared/services';
import { PageTable } from '@shared/models/pageTable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // ngx-datatable
  rows = [];
  page = new PageTable();

  curDate: Date = new Date();

  constructor(private api: ApiService) {
    this.page.pageNumber = 0;

    // row size
    this.page.size = 10;
  }

  ngOnInit(): void {
    this.getData();
  }

  // GET DATA MOCK CLIENT SIDE

  getData() {
    this.rows = [
      { id: 1, name: 'Hello im Dummy', created_at: this.curDate },
      { id: 2, name: 'Hello im Dummy', created_at: this.curDate },
      { id: 3, name: 'Hello im Dummy', created_at: this.curDate },
      { id: 4, name: 'Hello im Dummy', created_at: this.curDate },
      { id: 5, name: 'Hello im Dummy', created_at: this.curDate },
      { id: 6, name: 'Hello im Dummy', created_at: this.curDate },
    ];
  }

  // GET DATA FROM SERVER SIDE
  /*   getData(pageInfo = { offset: 0 }) {
    console.log(pageInfo);
    this.page.pageNumber = pageInfo.offset + 1;
    this.api
      .getData(
        'api-path?pagination=true',
        { page: this.page.pageNumber, row: this.page.size },
        { order_by: 'created_at', order_type: 'DESC' }
      )
      .subscribe(
        (res) => {
          this.rows = res.response.rows;
          this.page.totalElements = res.response.count;
          console.log('res', res);
          this.loader.stop();
        },
        (err) => {
          this.loader.stop();
          console.log('err', err);
        }
      );
  } */
}
