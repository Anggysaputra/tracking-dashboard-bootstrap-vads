import * as XLSX from "xlsx";

const exportToExcel = (data, file_name) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${file_name}.xlsx`);
};

export { exportToExcel };
