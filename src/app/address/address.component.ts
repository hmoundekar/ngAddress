import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { distinctUntilChanged, switchMap, startWith, tap } from 'rxjs/operators';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  title = 'ngAddress';
  addressForm:FormGroup=null
  currAddr:any;
  permAddr:any;
  checked:boolean = false;
  public isSameAddressControl: FormControl = new FormControl(false);
 
  public addresses: FormGroup = this.fb.group({
    sendingAddress: this.fb.group({
      street: '',
      city: '',
      country: ''
    }),
    billingAddress: this.fb.group({
      street: '',
      city: '',
      country: ''
    })
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.multiGroupAddress();
  }
  createForm(){
    this.addressForm=new FormGroup({
      addrCheck: new FormControl(null),
      current:new FormControl(null),
      permanent:new FormControl(null)
    });
  }
  onCheckSelected(check){
    this.permAddr=null;
    if(check){
      this.addrChanged(true);
    }else{
      this.permAddr=null;
      this.addrChanged(false);
    }
  }
  addrChanged(checkState){
    console.log(this.addressForm.value);
    if(checkState){
      this.permAddr=this.addressForm.value.current;
    }
  }
  multiGroupAddress(){
    this.isSameAddressControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(isSameAddress => {
          if (isSameAddress) {
            return this.addresses
              .get('sendingAddress')
              .valueChanges
              .pipe(
                // at the beginning fill the form with the current values
                startWith(this.addresses.get('sendingAddress').value),
                tap(value =>
                  // every time the sending address changes, update the billing address 
                  this.addresses
                    .get('billingAddress')
                    .setValue(value)
                )
              )
          } else {
            this.addresses
              .get('billingAddress')
              .reset();
 
            return EMPTY;
          }
        })
        // don't forget to unsubscribe when component's destroyed
      )
      .subscribe();
  }
}
