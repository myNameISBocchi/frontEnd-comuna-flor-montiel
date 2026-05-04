import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-form',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css',
})
export class PersonForm implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  personForm!: FormGroup;

  cities:any[] = []
  comunities:any[]= [];
  committees:any[]=[];
  councils:any[]= [];

  ngOnInit() {
    this.initForm();
    this.loadSelectData();
  }

  initForm(){
    this.personForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      identification:['', Validators.required],
      email:['',Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],
      cityId:['', Validators.required],
      date:['', Validators.required],
      comunityId:['', Validators.required],
      committeeId:['', Validators.required],
      councilId:['', Validators.required],
      roleId:['[]']
    })
  }

  loadSelectData(){
    this.http.get<any>('api/cities').subscribe(res => this.cities = res.results);
    this.http.get<any>('api/comunities').subscribe(res => this.comunities = res.results);
    this.http.get<any>('api/committees').subscribe(res => this.committees = res.results);
    this.http.get<any>('api/councils').subscribe(res => this.councils = res.results);
  }

  onSubmit(){
    if(this.personForm.valid){
      const payload = {...this.personForm.value}
      
      this.http.post('api/peoples', payload).subscribe({
        next:(res) => alert('Registro con exito!'),
        error:(err) => console.error('error al registrar', err)
      })
    }
  }

}
