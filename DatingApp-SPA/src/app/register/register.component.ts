import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successfull');
      console.log('registration done');
    }, error => {
    this.alertify.error(error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }




}
