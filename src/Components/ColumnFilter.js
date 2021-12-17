import React from "react"

export const ColumnFilter = ({ column }) => {
  const { filter, setFilter } = column
  return (
    <span>
      <select
        className="form-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option defaultValue="Class">CLASS</option>
        <option value="Pre-Nursery">Pre-nursery</option>
        <option value="Nursery 1">Nursery 1</option>
        <option value="Nursery 2">Nursery 2</option>
        <option value="Grade 1">Grade 1</option>
        <option value="Grade 2">Grade 2</option>
        <option value="Grade 3">Grade 3</option>
        <option value="Grade 4">Grade 4</option>
        <option value="Grade 5">Grade 5</option>
        <option value="Grade 6">Grade 6</option>
        <option value="JSS 1">JSS 1 </option>
        <option value="JSS 2">JSS 2</option>
        <option value="JSS 3">JSS 3</option>
        <option value="SSS">Senior Secondary</option>
      </select>
    </span>
  )
}
