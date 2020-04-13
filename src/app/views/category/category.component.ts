import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_core/_service/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalComponent } from '../modal/add-modal/add-modal.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  model: any;
  constructor(
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }
  getAll() {}
  create() {}
  update() {}
  delete() {}
  openAddLangModal() {
    const modalRef = this.modalService.open(AddModalComponent, { size: 'xl' });
    modalRef.componentInstance.title = 'Add Category Languages';
    modalRef.componentInstance.model = this.model;
    modalRef.result.then((result) => {
      console.log('openAddLangModal', result );
    }, (reason) => {
    });
  }
}
