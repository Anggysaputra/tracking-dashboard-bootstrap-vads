import React from "react";

export default function SelectOption({ listData = [], selected, setSelected }) {
  return (
    <div className="col-sm-2">
      <select
        className="form-select"
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option value="">Select value</option>
        {listData.map((v) => (
          <option
            key={v.id}
            value={v.id}
          >
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
}
