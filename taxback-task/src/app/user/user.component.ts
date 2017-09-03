import { Component, OnInit } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { CustomHttpService } from "../httpService/custom.sevice";
import { User } from "./user.model";
import {Message} from 'primeng/primeng';


@Component({
selector : 'user',
templateUrl : './user.html'
})

export class UserComponent implements OnInit {
    displayDialog: boolean;
    userData: User;
    userList : User[];
    msgs: Message[] =[];
    constructor(private serviceInstance : CustomHttpService) {}

onRowSelect(event: any){
        this.userData = this.cloneCar(event.data);
        this.displayDialog = true;
}

cloneCar(c: any): any { 
        return c;
}

ngOnInit() {
        this.serviceInstance.getCall<User[]>(null).then(user => this.userList = user);
 }

save() {
        debugger
        this.serviceInstance.postCall<User>(this.userData)
        .then(user => this.saveUpdate(user) )
}

saveUpdate(data:any){
    this.userData = data;
    this.displayDialog = false;
    this.msgs.push({severity:'success', summary:'Success : ', detail:'User Updated Successfully'});
}
    
    
 delete() {
      this.serviceInstance.deleteCall<boolean>(this.userData.id).then(show => this.deleteUser(show));  
 }

deleteUser(data : any){
   this.displayDialog = false;
   this.msgs.push({severity:'success', summary:'Delete : ', detail:'User deleted Successfully'});
}


}