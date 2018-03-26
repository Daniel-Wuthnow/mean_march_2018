import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinService {

  constructor(private _http: HttpClient) { }
  val: number = 0;
  own: number = 0;
  ledger = [];


  mineCoins(){
  	this.val++;
  	this.coinLedger("Mined", 1, this.val);
  }

  coinLedger(status, amount, val){
  	const entry = {
  		id: Math.floor((Math.random()*9000) + 1),
  		status: status,
  		amount: amount,
  		val: val,
  	}
  	this.ledger.push(entry);
  }

  buyShinto(val, own){
  	this.val = val;
  	this.own = own;
  	this.coinLedger('Bought', 1, this.val);
  }

  sellShinto(val, own){
  	this.val = val;
  	this.own = own;
  	this.coinLedger('Sold', 1, this.val)
  }
  	

}
