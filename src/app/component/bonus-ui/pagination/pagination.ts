import { Component } from '@angular/core';

import { DefaultPagination } from './default-pagination/default-pagination';
import { PaginationAlignment } from './pagination-alignment/pagination-alignment';
import { PaginationSizing } from './pagination-sizing/pagination-sizing';
import { PaginationWithActive } from './pagination-with-active/pagination-with-active';
import { PaginationWithIcons } from './pagination-with-icons/pagination-with-icons';
import { RoundedPagination } from './rounded-pagination/rounded-pagination';

@Component({
  selector: 'app-pagination',
  imports: [
    DefaultPagination,
    PaginationAlignment,
    PaginationSizing,
    PaginationWithActive,
    PaginationWithIcons,
    RoundedPagination,
  ],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss'],
})
export class Pagination {}
