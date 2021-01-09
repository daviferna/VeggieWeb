import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  commentForm!: FormGroup;
  @ViewChild('formDirective') formDirective!: NgForm;

  constructor( private translateService: TranslateService, private titleService: Title ) {
  }

  ngOnInit(): void {
    this.translateService.get('contactPage.tabTitle').subscribe((translated: string) => {
      this.titleService.setTitle(translated);
    }),
    this.commentForm = new FormGroup({
      name: this.nameFormControl,
      email: this.emailFormControl,
      type: this.typeFormControl,
      comment: this.commentFormControl
    });
  }

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  typeFormControl = new FormControl('', [
    Validators.required,
  ]);

  commentFormControl = new FormControl('', [
    Validators.required,
  ]);

  submitForm() {
    if (this.commentForm.valid) {
      alert(this.translateService.instant('contactPage.submitFormValid'));
      this.formDirective.resetForm();
    } else {
      alert(this.translateService.instant('contactPage.submitFormInvalid'));
    }
  }

}
