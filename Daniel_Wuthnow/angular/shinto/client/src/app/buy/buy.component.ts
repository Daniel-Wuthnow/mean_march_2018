import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
	val: number;
	own: number;
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
  	this.val = this._coinService.val;
    this.own = this._coinService.own;
  }

  onBuy(){
  	this.val+= 1;
  	this.own+= 1;
    this._coinService.buyShinto(this.val, this.own);
  }

}
