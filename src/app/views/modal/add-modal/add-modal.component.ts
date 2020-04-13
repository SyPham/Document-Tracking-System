import { Component, OnInit, Input } from '@angular/core';
import { AlertifyService } from 'src/app/_core/_service/alertify.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
@Input() title: string;
@Input() createLang: any;
@Input() model: any;
langs = [
  {
  langID: 0,
  name: this.model.vi,
  languageID: 'vi'
  },
  {
    langID: 0,
    name: this.model.en,
    languageID: 'en'
  },
  {
    langID: 0,
    name: this.model.tw,
    languageID: 'tw'
  },
];
  constructor(
    public activeModal: NgbActiveModal,
    private alertify: AlertifyService,
  ) { }

  ngOnInit() {
   this.initialProperty();
  }
  initialProperty() {
    this.model = {
      vi: '',
      en: '',
      tw: ''
    };
  }
  create() {
    this.createLang = {
      id: this.model.id,
      langs: [
        {
        langID: this.model.id,
        name: this.model.vi,
        languageID: 'vi'
        },
        {
          langID: this.model.id,
          name: this.model.en,
          languageID: 'en'
        },
        {
          langID: this.model.id,
          name: this.model.tw,
          languageID: 'tw'
        },
      ]
    };
  }
}
