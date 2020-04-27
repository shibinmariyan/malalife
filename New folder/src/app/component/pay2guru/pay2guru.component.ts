import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay2guru',
  templateUrl: './pay2guru.component.html',
  styleUrls: ['./pay2guru.component.scss']
})
export class Pay2guruComponent implements OnInit {
  private gridApi;
  //private columnDefs;
  private sortingOrder;

  constructor(private http: HttpClient) { }

    columnDefs=[
      {headerName: 'Name', field: 'name', editable : true, width:130, suppressSizeToFit: true,},
    {headerName: 'Oct Payment Amount', field: 'lastmnth',editable : true, width:110},
    {headerName: 'Last Payed', field: 'lastpayed',editable : true, width:110},
    {headerName: 'Status', field: 'status',editable : true, width:120},
    {headerName: 'State', field: 'state',editable : true, width:110},
    {headerName: 'Dist', field: 'Dist',editable : true, width:110},
    {headerName: 'Quality Factor', field: 'qlty',editable : true, width:110},
    {headerName: 'Number', field: 'number',editable : true, width:110, filter:'agNumberColumnFilter'},

];

    rowData=[ {name: 'Nadeer', 
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    ];

  ngOnInit() {
  }

}
