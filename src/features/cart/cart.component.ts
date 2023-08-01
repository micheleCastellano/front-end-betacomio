import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  


  prodotti = [
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
    {
      urlImage: '../../assets/img/product/asp.jpg',
      nome: 'nome prodotto',
      quantita: 1,
      prezzoTotale: 30,
    },
  ];
  totale = 0;

  ngOnInit(): void {
    this.CalcolaTotale();
  }

  CalcolaTotale() {
    this.prodotti.forEach((p) => {
      this.totale = this.totale + p.prezzoTotale;
    });
  }
}
