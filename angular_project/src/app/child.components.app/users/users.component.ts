import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/services/usuarioServices/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild("modalEdit") modalEdit!: ElementRef;
  userForEdit: usuario = new usuario;
  userForAdd: usuario = new usuario;
  users!: usuario[];

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    document.title = 'Usuarios | Angular&Spring';
    this.service.getAll().subscribe(res => this.users = res)
  }

  add(u: usuario): void {
    this.service.save(u).subscribe(res => {
      res ? alert("Usuario guardado") : alert("Error al crear usuario")
      this.userForAdd = new usuario;
      this.service.getAll().subscribe(res => this.users = res);
    })
  }

  buildUser(u: usuario): void {
    this.userForEdit = u
  }

  editUser(u: usuario): void {
    this.service.edit(u).subscribe(res => {
      if (res) {
        this.userForEdit = new usuario;
        this.service.getAll().subscribe(res => this.users = res);
      }
    })
  }

  delete(id: number): void {
    if (confirm(`¿Desea eliminar a ${this.users.find(u => id == u.id)?.nombres}?`)) {
      this.service.delete(id).subscribe(res => {
        if (res) {
          alert("Usuario eliminado")
          this.users = this.users.filter(u => u.id != id)
        } else {
          alert("Error al eliminar usuario")
        }
      });
    }
  }

}
