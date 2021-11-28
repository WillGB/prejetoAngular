import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha= '';
  caminho = 'apiUsuarios.php';

  constructor(private provider: ApiService, private router: Router ) { }

  ngOnInit(): void {

  }

  login(usuario:string, senha:string) {
    
    return new Promise(resolve => {
      const dados = {
        requisicao : 'login',
        
        usuario: this.usuario,
        senha: this.senha
      };
      this.provider.Api(dados, this.caminho)
      .subscribe(data => {

        if(data['success']){
          
            this.router.navigate(['/usuarios']);
        }else{
          alert('Dados Incorretos!!');
        }

      });
    });
  }

}
