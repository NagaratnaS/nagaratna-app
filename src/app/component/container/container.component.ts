import { Component, OnInit } from '@angular/core';
import { NameSortPipe } from 'src/app/pipes/name-sort.pipe';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  principle = "";
  rate = "";
  time = "";
  students = [
    {
      "id": 1,
      "name": "Shampoo",
      "color": "red",
      "price": 100,
      "qty": 10
    },
    {
        "id": 2,
        "name": "Oil",
        "color": "yellow",
        "price": 250,
        "qty": 70

    },
    {
        "id": 4,
        "name": "Water bottle",
        "color": "green",
        "price": 150,
        "qty": 20

    },
    {
        "id": 5,
        "name": "Laptop",
        "color": "grey",
        "price": 45000,
        "qty": 40

    }
  ]

 // sortedEmployees = this.employees.sort((a, b) => (a.username > b.username) ? 1 : -1)

  //  sortedEmployees = {{this.employees | nameSort}}

  // public tableSort = false;

  // public sortStatus: string = "SORT TABLE"


  // toggleSort():any{
  //   this.tableSort = !this.tableSort;
  //   if(this.sortStatus == "SORT TABLE"){
  //     this.sortStatus = "UNSORT TABLE";
  //     return this.sortedEmployees;
  //   }
  //   else{
  //     this.sortStatus = "SORT TABLE";
  //     return this.employees
  //   }

  // }




  // public sortByName(): lis{

  // }

  // sortedEmployees =this.employees.sort(this.sortByName);

  public tableStatus: string = "HIDE TABLE"

  public tableShow = true;


  toggleTable(){
    this.tableShow = !this.tableShow;
    if(this.tableStatus == "SHOW TABLE"){
      this.tableStatus = "HIDE TABLE";
    }
    else
      this.tableStatus = "SHOW TABLE";


  }

  public role:string;

  public selectRole(event):void{
    this.role=event.target.value;
  }

  simpleInterest = 0;
  public calculateSI() {
    this.simpleInterest = (parseInt(this.principle) * parseInt(this.rate) * parseInt(this.time)) / 100;
    console.log(this.simpleInterest);
  }

  ngOnInit(): void {
  }

}
