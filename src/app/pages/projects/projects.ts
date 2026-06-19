import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Data } from '../../services/projectService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  proyectosGithub: any[] = [];
  otrasExperiencias: any[] = [];

  constructor(private projectGit: Data) {
    this.projectGit.getProjectsGit().subscribe({
      next: (data: any) => {
        this.proyectosGithub = data;
      },
      error: (error) => console.error(error),
    });

    this.projectGit.getProjectsList().subscribe({
      next: (data: any) => {
        this.otrasExperiencias = data;
      },
      error: (error) => console.error(error),
    });
  }
}
