import React, { useMemo } from "react"
import { useFilters, useRowSelect, useTable } from "react-table"
import BOOKLIST from "./BOOKLIST.json"
import { COLUMNS } from "./columns"
import "./table.css"
import CheckBox from "./CheckBox"

export var Sum

const BooksTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => BOOKLIST, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ]
      })
    }
  )

  Sum = selectedFlatRows
    .map((row) => row.original["Price"])
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

  return (
    <div className="my-5 container">
      <h1 className="row text-center">
        SPRINGFIELD BOOKS LIST
        <span>
          <h3 className="text-end">
            Cart
            <span>
              <button type="button" className="btn btn-primary">
                {Sum}
                <span className="badge bg-secondary">
                  {selectedFlatRows.length}
                </span>
              </button>
            </span>
          </h3>
        </span>
      </h1>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="m-4">
        <h2>
          You have selected {selectedFlatRows.length} books and Total is #{Sum}
        </h2>
      </div>
    </div>
  )
}

export default BooksTable
