import { Component, Input ,OnInit} from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbDialogService } from '@nebular/theme';
import {DialogUserComponent} from '../../dialog-user/dialog-user.component'
import { NbToastrService } from '@nebular/theme';
import {UserService} from '../user/user.service'
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}
 

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  implements OnInit  {
  ngOnInit(): void {
    this.getUserList();
   }
   
//   customColumn = 'name';
// defaultColumns = [ 'email', 'mobileNo', 'city','state','country' ];
// allColumns = [ this.customColumn, ...this.defaultColumns ];
// header=[{
//   name:"Name",
//   key:'name',width:15
// },{
//   name:"Email",
//   key:'email',width:25
// },{
//   name:"Mobile No",
//   key:'mobileNo',width:15
// },{
//   name:"City",
//   key:'city',width:15
// },{
//   name:"State",
//   key:'state',width:15
// },{
//   name:"Country",
//   key:'country',width:15
// }]
// dataSource: NbTreeGridDataSource< any>;

// sortColumn: string;
// sortDirection: NbSortDirection = NbSortDirection.NONE;
page:any = 0;
size:any = 10;
constructor( 
  private  Service:UserService,
  private dialogService:NbDialogService,
  private toastrService: NbToastrService) {
  // this.dataSource = this.dataSourceBuilder.create(this.data);
}

// updateSort(sortRequest: NbSortRequest): void {
//   this.sortColumn = sortRequest.column;
//   this.sortDirection = sortRequest.direction;
// }
open(){
this.dialogService.open(DialogUserComponent).onClose.subscribe(name => {
  if(name){
 
 if(name.status){ 
  this.toastrService.show('Success',name.message)
 }else{
  this.toastrService.show('danger',name.message)

 }
  }
});
}
openDevice(){
  
}

 
 private   ndata: TreeNode<any>[] = []

getUserList(){
  this.Service.GetUser(this.page,this.size).subscribe(res=>{
    console.log(JSON.stringify(res))
    // for(let i=0;i< res.data.length;i++){
    //     this.ndata.push({
    //       data:res.data[i]
    //    })
    // }
    this.data  =res.data;
  
    })
}
private data: any ;
  

 
}
 
 