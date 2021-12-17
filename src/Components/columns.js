import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
  {
    Header: "",
    Footer: "TOTAL",
    accessor: "class",
    Filter: ColumnFilter,
  },
  {
    Header: "BOOK NAMES",
    Footer: "",
    accessor: "Name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "PUBLISHER",
    Footer: "",
    accessor: "Publisher",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "(#)PRICES",
    Footer: "",
    accessor: "Price",
    Filter: ColumnFilter,
    disableFilters: true,
  },
]
