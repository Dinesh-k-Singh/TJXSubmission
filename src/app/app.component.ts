import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Product } from './Data-type';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TJX.Portal';
  productList:undefined | Product[];

  constructor(private productService:ProductService){
    this.productService.getProducts('USA').subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList = result;
      }
    })
  }
  
  // ngOnInit(): void{
  //   this.productService.getProducts('USA').subscribe((result)=>{
  //     console.warn(result);
  //     if(result){
  //       this.productList = result;
  //     }
  //   })
  // }

  loadGrid(data:string){
    this.productService.getProducts(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList = result;
      }
    })
  }
}
