import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
	ledger;
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
  	this.ledger = this._coinService.ledger;
  }

}
