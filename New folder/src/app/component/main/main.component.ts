import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  columnDefs = [
    {
      headerName:'#',
      width: 40,
      checkboxSelection: true,
      suppressSorting: true,
      suppressMenu: true,
      
  },
    {headerName: 'Name', field: 'name', editable : true, width:130,},
    {headerName: 'Joined', field: 'joined',editable : true, width:110},
    {headerName: 'Matchings', field: 'matchings',editable : true, width:110},
    {headerName: 'Points bought', field: 'points',editable : true, width:120},
    {headerName: 'M/F', field: 'gender',editable : true, width:70},
    {headerName: 'Age', field: 'Age',editable : true, width:65,filter: 'agNumberColumnFilter'},
    {headerName: 'State', field: 'state',editable : true, width:110},
    {headerName: 'Dist', field: 'Dist',editable : true, width:110},
    {headerName: 'Jat ID', field: 'jatid',editable : true, width:110},
    {headerName: 'Number', field: 'number',editable : true, width:110, filter:'agNumberColumnFilter'},
    
    
    
];

rowData = [
    {name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},{name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},{name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},{name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},{name: 'Nadeer', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Shibin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'Roylin', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
    {name: 'PK', joined: '1hr back', matchings: '5 times',points:'200',gender:'M',Age:'27',
    state:'Kerala',Dist:'Malapuram',jatid:'NADE4534',number:'9916476600'},
];

  constructor() { }

  ngOnInit() {
  }

}
