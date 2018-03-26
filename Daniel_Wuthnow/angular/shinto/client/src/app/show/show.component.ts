import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	ledger: any;
	transaction: String;
	details: String;
	amount: number;
  constructor(
  	private _coinService: CoinService,
  	private _route: ActivatedRoute
  	) { }


	ngOnInit() {
    this.ledger = this._coinService.ledger;
    let observable =this._route.params;
    observable.subscribe( (params) => {
      // console.log(params['id']);
      this.findTransaction(params['id']);
    })
  }

  findTransaction(id){
  	for (var i = 0; i < this.ledger.length; i++) {
  		if (this.ledger[i].id == id) {
  			this.transaction = id;
  			this.details = this.ledger[i].status;
  			this.amount = this.ledger[i].amount;
  		}
  	}
  }



}
