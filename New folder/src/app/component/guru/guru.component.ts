import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.component.html',
  styleUrls: ['./guru.component.scss']
})
export class GuruComponent implements OnInit {
  private gridColumnApi;
  private gridApi;
  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowData;
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: '#',
        width: 40,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned:"left"


      },
      { headerName: 'Name', field: 'name', editable: true, width: 130, sortingOrder: ['asc', 'desc'],pinned:"left"},
      { headerName: 'Status', field: 'active', editable: true, width: 110, sortingOrder: ['asc', 'desc'] },
      { headerName: 'Joined', field: 'joined', editable: true, width: 110 },
      { headerName: 'Matchings', field: 'matchings', editable: true, width: 110 },
      { headerName: 'ART', field: 'art', editable: true, width: 100 },
      { headerName: 'Total Points', field: 'tp', editable: true, width: 100 },
      { headerName: 'Per Point', field: 'pp', editable: true, width: 100 },
      { headerName: 'M/F', field: 'gender', editable: true, width: 65 },
      { headerName: 'EXP', field: 'dob', editable: true, width: 65, filter: 'agNumberColumnFilter' },
      { headerName: 'EXP', field: 'exp', editable: true, width: 65, filter: 'agNumberColumnFilter' },
      { headerName: 'State', field: 'state', editable: true, width: 100 },
      { headerName: 'Dist', field: 'Dist', editable: true, width: 100 },
      { headerName: 'PIN', field: 'homePincode', editable: true, width: 100 },
      { headerName: 'Number', field: 'mobile', editable: true, width: 110, filter: 'agNumberColumnFilter' },
    ];
    this.defaultColDef = {
      width: 100,
      headerCheckboxSelection: this.isFirstColumn,
      enableValue: true,
      enableRowGroup:true,
      enablePivot:true,
      checkboxSelection: this.isFirstColumn
    };
    this.rowSelection = "multiple";
   
  }
  onGridReady(params: { api: any; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.dataService.guruprofile().subscribe((data: any) => {
      let array: any[] = data.profiles;
      console.log(array);
      // let ms = Date.parse(new Date());
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const today: number = Date.now();
        var b = Math.abs(today - Date.parse(element["dob"]));
        element["dob"] = Math.ceil(b / (1000 * 3600 * 24 * 365.25));
        console.log(element["dob"]);
      }
      this.rowData = array;
    })
  }
  isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }

}
