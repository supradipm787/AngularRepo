import { Component } from '@angular/core';
import {Appointment} from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})

export class AppointmentListComponent {
  appointmentTitle : string = "";
  appointmentDate : Date = new Date();

 appointments : Appointment[] = []




 addAppointment(){
  alert ("Hello");
  if (this.appointmentTitle.trim().length && this.appointmentDate){
     let newAppointmnet : Appointment ={
       id : Date.now (),
       title: this.appointmentTitle,
       date: this.appointmentDate
     }
     
     this.appointments.push (newAppointmnet)
     this.appointmentTitle ="";
     this.appointmentDate = new Date();
     
  }
   alert (this.appointments.length);

 }



}


