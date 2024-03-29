import { Component, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Dropdown } from '../Data-type';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  dropdownList:undefined | string[];
  
  constructor(private productService: ProductService,private router:Router,private appcom:AppComponent){

  }
  changeCurrency(e:any){
    this.appcom.loadGrid(e.target.value);
    
    
  }
  ngOnInit():void{
    this.productService.getCountry().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.dropdownList = result;
      }
    })
  }

}
