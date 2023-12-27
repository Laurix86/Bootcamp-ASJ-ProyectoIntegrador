import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-display-proveedores',
  templateUrl: './display-proveedores.component.html',
  styleUrls: ['./display-proveedores.component.css']
})
export class DisplayProveedoresComponent implements OnInit{

  providerList: any=[];

  constructor(private proveedoresService:ProveedoresService){}

  ngOnInit(): void {
      this.getProviders();
  }

  getProviders(){
    this.proveedoresService.getProveedores().subscribe((res)=>{
      this.providerList = res.data;
    }

    )
  }

  
}

