import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { ProductService } from '../../components/product/product.service'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private produtosrc: ProductService) { }

  dataProdutos = []

  ngOnInit(): void {
    this.produtosrc.list().subscribe(res => {
      res.forEach(element => {
        this.dataProdutos.push(element)
      });
    })
  }

  navigateToProductCreate() : void{
    this.router.navigate(['/products/create']);
  }

  

}
