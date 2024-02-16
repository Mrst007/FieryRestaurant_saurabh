import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  standalone: true,
  imports: [RouterLink,RouterOutlet, HttpClientModule],
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent {
  foodName="";
  price=0;
  shipping="Free";
  posteddata:any;
  constructor(private http:HttpClient){}
  getFood(){
    return this.posteddata.foodName;
  }
  getPrice(){
    return this.posteddata.totalPrice;
  }
  getQuantity(){
    return this.posteddata.quantity;
  }
  addOrder(fname:string,address:string,city:string,state:string,zipcode:string,phone:string,email:string,foodname:string,quantity:string){
    let order = {
      "FirstName":fname,
      "address":address,
      "city":city,
      "state":state,
      "zipcode": zipcode,
      "phone":phone,
      "email":email,
      "foodName":foodname,
      "quantity":quantity,
      "totalPrice":Number(quantity) * 12.5
    }

    this.http.post("http://localhost:3000/order",order).subscribe((data)=>{
      this.posteddata=data;
    });
    
  }

}
