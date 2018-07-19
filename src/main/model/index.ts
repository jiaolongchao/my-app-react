import { observable, action } from 'mobx';
export class Store {
    constructor() {
        console.log("Store>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>init")
    }

   
    public unonload = window.onunload

    
    @action reset(){
       
    }

}
let storeIntance = new Store();
export default storeIntance
