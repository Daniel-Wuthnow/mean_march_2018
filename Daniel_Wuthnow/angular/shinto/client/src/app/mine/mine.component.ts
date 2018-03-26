import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
	awnsers: Number;
  constructor(private _coinServer: CoinService) {
  	
  }


  ngOnInit() {
  }

  mineCoin(event){
  	event.preventDefault();
  	if (this.awnsers == 13) {
  		this._coinServer.mineCoins();
  		this.awnsers = 0
  	} else {
  		this.awnsers = 0
  	}
  }

}
