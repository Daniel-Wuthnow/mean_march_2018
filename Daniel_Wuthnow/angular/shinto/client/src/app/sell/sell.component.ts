import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service'


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
	error: String;
	val: number;
	own: number;
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
  	this.val = this._coinService.val;
    this.own = this._coinService.own;
  }

  onSell(){
  	if (this.own!=0) {
  		this.own-=1;
  		this.val-=1;
  		this._coinService.sellShinto(this.val, this.own)
  	} else {
  		this.error = "You Do not have any ShintoCoins to sell."
  		console.log(this.error)
  	}
  }

}
