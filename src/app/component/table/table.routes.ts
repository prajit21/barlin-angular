import { Routes } from "@angular/router";

import { BasicTable } from "./basic-table/basic-table";
import { DataTables } from "./data-tables/data-tables";
import { TableComponents } from "./table-components/table-components";

export default [
  {
    path: "bootstrap-tables/basic",
    component: BasicTable,
    data: {
      title: "Bootstrap Basic Tables",
      breadcrumb: "Bootstrap Basic Tables",
    },
  },
  {
    path: "bootstrap-tables/table-components",
    component: TableComponents,
    data: {
      title: "Table Components",
      breadcrumb: "Table Components",
    },
  },
  {
    path: "datatable",
    component: DataTables,
    data: {
      title: "Basic DataTables",
      breadcrumb: "Basic DataTables",
    },
  },
] as Routes;
