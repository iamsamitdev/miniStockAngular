import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  // ตัวแปรรับค่าจาก API
  dataProduct:any = []

  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: {})=> {
     //  console.log(data)
      this.dataProduct = data
    })
  }

}
