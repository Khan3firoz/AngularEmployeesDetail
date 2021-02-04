import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title: String;
  employee: any[] | undefined;
  constructor() {
    this.title = 'Our Empoloyees Details';
    this.getemployees();
   }
   getemployees() {
          this.employee = [
              {empId:'10001',fname:'Firoz',lname:'Khan',dep:'Web Devloper', city:'Bengaluru',email:'khan3firoz@gmail.com'},
              {empId:'10002',fname:'Akhlaque',lname:'Ahmad',dep:'Web Devloper', city:'Bengaluru',email:'akhlaquea01@gmail.com'},
              {empId:'10003',fname:'Ashfaque',lname:'Ahmad',dep:'Data Scientist', city:'Bengaluru',email:'ashfaque786@gmail.com'},
              {empId:'10004',fname:'Krishna',lname:'kumar',dep:'Mechanical', city:'Noida',email:'twariji@gmail.com'},

          ]
      }
}
// export class AppComponent{
//   title: String;// it's model
//   products: any[];

//   constructor() {
//       this.title = 'Amozon retail shop';
//       this.getProducts();
//   }
//   getProducts() {
//       this.products = [
//           {name:'iphone', price:5000, category:'mobile'},
//           {name:'iphone12', price:54000, category:'mobile'},
//           {name:'iphone15', price:50050, category:'mobile'}
//       ]
//   }
// }

