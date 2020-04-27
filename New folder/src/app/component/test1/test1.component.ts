import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  private gridApi;
  private columnDefs;
  private sortingOrder;
  private searchValue;
  private selectValue;

  constructor(private http: HttpClient) { 

    
  }

  ngOnInit() {
    this.columnDefs=[
      {
        headerName:"Athlete",
        field:"athlete",
        width:150,
        sortingOrder:["asc","desc",null]
  },
  {
    headerName:"Age",
    field:"age",
    width:90,
    sortingOrder:["desc","asc",null]
},
{
  headerName:"Country",
  field:"country",
  width:90,
  sortingOrder:["desc","asc",null]
},
{
  headerName:"Gold",
  field:"gold",
  width:90,
  sortingOrder:["desc","asc",null]
},
{
  headerName:"Silver",
  field:"silver",
  width:90,
  sortingOrder:["desc","asc",null]
},
{
  headerName:"Bronze",
  field:"bronze",
  width:90,
  sortingOrder:["desc","asc",null]
},
{
  headerName:"Year",
  field:"year",
  width:90,
  sortingOrder:["desc","asc",null]
},
{
  headerName:"Sport",
  field:"sport",
  width:90,
  sortingOrder:["desc","asc",null]
},
{
  headerName:"Date",
  field:"date ",
  width:90,
  sortingOrder:["desc","asc",null]
},

];
this.sortingOrder =["asc","desc",null];
  }
  onGridReady(params)
  {
   this.gridApi = params.api;
    //this.gridColumnApi =params.columnApi;
    this.http.get(
     "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
     .subscribe(data =>
      {
        params.api.setRowData(data); 
      }
      )   
 }
 quickSearch(searchValue)
 {
   console.log(searchValue);
   this.gridApi.setQuickFilter(searchValue);
 }
}