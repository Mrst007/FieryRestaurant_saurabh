import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Garlic sezaami',
        cookTime:'10-20',
        price:"₹ 2099",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-1.jpg',
        tags:['Fast food']
      },
      {
        id:2,
        name:'Butter Nan',
        cookTime:'10-20',
        price:"₹ 1099",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-2.jpg',
        tags:['Fast food']
      },
      {
        id:3,
        name:'Steak green onion',
        cookTime:'10-20',
        price:"₹ 9237",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-4.jpg',
        tags:['Fast food']
      },
      {
        id:4,
        name:'Roated Pineapple smokey steak',
        cookTime:'10-20',
        price:"₹ 1299",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-5.jpg',
        tags:['Fast food']
      },
      {
        id:4,
        name:'Bread coated fruits sezami',
        cookTime:'10-20',
        price:"₹ 1299",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-6.jpg',
        tags:['Fast food']
      },
      {
        id:6,
        name:'Cheese buffet',
        cookTime:'10-20',
        price:"₹ 650",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-7.jpg',
        tags:['Fast food']
      },
      {
        id:7,
        name:'Garlic toast',
        cookTime:'10-20',
        price:"₹ 1123",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-8.jpg',
        tags:['Fast food']
      },
      {
        id:8,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:"₹ 1234",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-9.jpg',
        tags:['Fast food']
      },
      {
        id:9,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:"₹ 9876",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-10.jpg',
        tags:['Fast food']
      },
      {
        id:10,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:"₹ 9876",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-11.jpg',
        tags:['Fast food']
      },
      {
        id:11,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:"₹ 1234",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-12.jpg',
        tags:['Fast food']
      },
      {
        id:12,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:"₹ 9999",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-13.jpg',
        tags:['Fast food']
      },
      {
        id:13,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:"₹ 1299",
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'../assets/food-14.jpg',
        tags:['Fast food']
      },
    ]
  }
}
