import { Component, OnInit } from '@angular/core';
import { Sudoku } from '../models/sudoku.model';



@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  sudoku: Sudoku | undefined;

  isSolved = false;

  constructor() {

  }

  ngOnInit(): void {
    this.sudoku = new Sudoku();
    this.sudoku.generate();
    this.sudoku.printBoard();
  }



}