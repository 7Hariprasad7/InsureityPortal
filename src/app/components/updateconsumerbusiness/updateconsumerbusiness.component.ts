import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-updateconsumerbusiness',
  templateUrl: './updateconsumerbusiness.component.html',
  styleUrls: ['./updateconsumerbusiness.component.css']
})
export class UpdateconsumerbusinessComponent implements OnInit {

  private readonly notifier: NotifierService
  constructor(private consumerService: ConsumerService,private _router: Router, private businessService: BusinessService, notifierService: NotifierService) { 
    this.notifier = notifierService
  }

  errorMessage = ""

  ShowCustomerToast = false
  CustomerToastText = ""
  ShowPropertyToast = false
  PropertyToastText = ""


  response: any = {
    success: false,
    message: "",
    data: {
      id: 0
    }
  }

  businessess =  [
    {
      value: 0, text: "SoleProprietorship"
    },
    {
      value: 1, text: "Partnership"
    },
    {
      value: 2, text: "LimitedPartnership"
    },
    {
      value: 3, text: "LimitedLiabilityCompany"
    },
    {
      value: 4, text: "Corporation"
    },
    {
      value: 5, text: "NonProfit"
    },
    {
      value: 6, text: "Cooperative"
    }
  ]

  cb: any = {
    "consumerName": "",
    "consumerId": "",
    "consumerEmail": "",
    "consumerPan": "",
    "agentId": 0,
    "agentName":"",
    "business": {
     // "businessName": "",
     "businessId":"",
     "validityOfConsumer":0,
     "businessOverview":"",
     "businessType":"",
     "annualTurnOver":0,
     "totalEmployees":0,
     "capitalInvested":0,
      // "businessType": 0,
      // "annualTurnOver": 0,
      // "capitalInvested": 0,
      // "businesIncorporation": "",
      // "totalEmployees": 0
    }
  }

  bp: any = {
    "businesssId": 0,
    "propertyType": 0,
    "buildingSqFt": 0,
    "storeys": 0,
    "propertyAge": 0,
    "costOfAsset": 0,
    "salvageValue": 0
  }

  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  UpdateConsumer() {
    this.cb.business.businessType = parseInt(this.cb.business.businessType)
    this.consumerService.CreateCustomer(this.cb)
      .subscribe(
        res => {
          this.response = res
         if(this.response)
         {
           //alert("Consumer Business has been successfully updated")
           swal.fire(
            'Good job!',
            'Consumer Business has been successfully updated',
            'success'
          )
           this._router.navigate([''])
         }
          console.log(this.response)
        },
        err => {
          alert(err.error.message)
          this.response = err
          alert(this.response.message)
          console.log(err)
        }
      )
  }

}


