import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private gridColumnApi;
  private gridApi;
  private columnDefs;
  private defaultColDef;
  private rowSelection;

  private rowData;
  private profiles: any;
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Name', field: 'name', editable: true, width: 130, suppressSizeToFit: true, pinned: "left" },
      { headerName: 'Joined', field: 'created', editable: true, width: 110 },
      { headerName: 'Active', field: 'active', editable: true, width: 110 },
      { headerName: 'Matchings', field: 'matchings', editable: true, width: 110 },
      { headerName: 'Points bought', field: 'points', editable: true, width: 120 },
      { headerName: 'M/F', field: 'sex', editable: true, width: 70 },
      { headerName: 'Age', field: 'dob', editable: true, width: 65, filter: 'agNumberColumnFilter' },
      { headerName: 'State', field: 'state', editable: true, width: 110 },
      { headerName: 'Dist', field: 'district', editable: true, width: 110 },
      { headerName: 'Jat ID', field: 'mala_id', editable: true, width: 110 },
      { headerName: 'Number', field: 'mobile', editable: true, width: 110, filter: 'agNumberColumnFilter' },

    ];
    this.defaultColDef = {
      width: 100,
      headerCheckboxSelection: this.isFirstColumn,
      checkboxSelection: this.isFirstColumn
    };
    this.rowSelection = "multiple";
  }


  onGridReady(params: { api: any; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.dataService.userprofile().subscribe((data: any) => {
      let profile: any[] = data.profiles;
      for (let index = 0; index < profile.length; index++) {
        const element = profile[index];
        console.log(element);
        const today: number = Date.now();
        var b = Math.abs(today - Date.parse(element["dob"]));
        element["dob"] = Math.floor(b / (1000 * 3600 * 24 * 365.25));
      }
      this.rowData = profile;
    })
  }
  isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }
}
  // quickSearch(params) {
  //   return this.gridApi.setQuickFilter(params);
  // }


