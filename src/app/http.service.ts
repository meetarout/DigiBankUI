import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payee } from './add-payee/payee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  body :any;

  constructor(private http: HttpClient) { }

  getPayeeByCid(cid:string) {
    return this.http.get('http://localhost:8080/payee/'+cid)
  }

  addPayee(p: Payee){
    console.log('Inside Add payee method in Service',p);
    return this.http.post<Payee>('http://localhost:8080/payee/',p).subscribe(data => {
      console.log(data)
      console.log(data['name'])
      alert('Successfully added the Payee: '+ data['name'])
   },err =>
    {console.log(err)
    console.log('inside error method')
    })
  }

  activatePayee(pid:number) {
    return this.http.put('http://localhost:8080/payee/activate/'+pid, this.body)
  }

  getPayeeByPID (pid){
    console.log('Inside getPayeeByPID of Service Class'+pid)
    return this.http.get('http://localhost:8080/payee/',{params : {'pid':pid}})
  }

  updatePayee(pId : number , p: Payee){
    console.log('Inside Update payee method in Service',p);
    return this.http.put<Payee>('http://localhost:8080/payee/'+pId,p);
  }

  deletePayee(pid:number) {
    return this.http.delete('http://localhost:8080/payee/'+pid)
  }
}
