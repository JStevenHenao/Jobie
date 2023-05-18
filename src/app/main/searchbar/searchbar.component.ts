import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchResults: string[] = [];
  searchTerm: string = '';
  selectItem: string = '';


  onSearchInput() {
    // Aquí puedes realizar la lógica para buscar las coincidencias basadas en el término actual
    // Por simplicidad, utilizaremos un conjunto de datos predefinido
    this.searchResults = this.getSearchResults(this.searchTerm);
  }

  getSearchResults(searchTerm: string): string[] {
    // Simulación de la lógica de búsqueda y obtención de resultados
    const data = ['Accurex', 'Jobie 2', 'Taller 3'];
    return data.filter(result => result.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  clearSearch() {
    this.searchResults = [];
  }

 selectResult(result: string) {
  this.searchTerm = result;
  this.clearSearch();
}

  onInputBlur() {
    if (!this.searchTerm) {
      this.clearSearch();
    }
  }
}
