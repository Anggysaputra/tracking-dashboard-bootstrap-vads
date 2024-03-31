import jsPDF from "jspdf";
import "jspdf-autotable";

const exportToPDFListDataAgent = (data) => {
  const doc = new jsPDF({
    format: "a2",
    orientation: "landscape",
  });

  // Teks judul
  const title = "Data List";
  const titleFontSize = 18;
  const titleWidth =
    (doc.getStringUnitWidth(title) * titleFontSize) / doc.internal.scaleFactor;
  const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
  const titleY = 20;

  // Membuat teks judul
  doc.setFontSize(titleFontSize);
  doc.text(title, titleX, titleY);

  // Membuat tabel
  doc.autoTable({
    head: [
      [
        "No.",
        "WO CRM Received",
        "Customer ID",
        "BillingID",
        "Username",
        "Province",
        "City",
        "District",
        "Ward",
        "Postal Code",
        "Longtitude",
        "Latitude",
        "QoS",
        "Data1 Acs Username",
        "Data2 Customer Contact Number",
        "DeviceId",
        "Installation Date",
        "Sales Order",
        "Site Name",
      ],
    ],
    body: data.map((item, index) => [
      index + 1,
      item.woCrmReceivedDate || "-",
      item.customerId || "-",
      item.billingId || "-",
      item.username || "-",
      item.province || "-",
      item.city || "-",
      item.district || "-",
      item.Ward || "-",
      item.postalCode || "-",
      item.longtitude || "-",
      item.latitude || "-",
      item.qos || "-",
      item.data1AcsUsername || "-",
      item.data2CustomerContactNum || "-",
      item.deviceId || "-",
      item.installationDate || "-",
      item.salesOrder || "-",
      item.siteName || "-",
    ]),
  });

  // Simpan dokumen PDF
  doc.save("list_agent.pdf");
};

const exportToPDFListDataVendor = (data) => {
  const doc = new jsPDF({
    format: "a2",
    orientation: "landscape",
  });

  // Teks judul
  const title = "Data List";
  const titleFontSize = 18;
  const titleWidth =
    (doc.getStringUnitWidth(title) * titleFontSize) / doc.internal.scaleFactor;
  const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
  const titleY = 20;

  // Membuat teks judul
  doc.setFontSize(titleFontSize);
  doc.text(title, titleX, titleY);

  // Membuat tabel
  doc.autoTable({
    head: [
      [
        "No.",
        "Instalasi Status",
        "Region",
        "Category Date",
        "schedule Reschedule Date",
        "Reschedule By Amt Or Cust",
        "Reason For Reschedule2",
        "Actual Installtion",
        "Bast Upload Status",
        "Postal Code",
        "Balap FileName",
        "Balap Form Path",
        "Instalasi Report Balap Status",
        "Instalation Report And Balap Completion Date Hour",
        "Remarks",
        "Category",
        "Evidence Link",
        "RX ODP",
        "RX ONT",
      ],
    ],
    body: data.map((item, index) => [
      index + 1,
      item.instalasiStatus || "-",
      item.region || "-",
      item.categoryDate || "-",
      item.scheduleRescheduleDate || "-",
      item.rescheduleByAmtOrCust || "-",
      item.reasonForReschedule2 || "-",
      item.actualInstalltion || "-",
      item.bastUploadStatus || "-",
      item.balapFileName || "-",
      item.balapFormPath || "-",
      item.instalasiReportBalapStatus || "-",
      item.instalationReportAndBalapCompletionDateHour || "-",
      item.remark || "-",
      item.category || "-",
      item.evidenceLink || "-",
      item.rxOdp || "-",
      item.rxOnt || "-",
    ]),
  });

  // Simpan dokumen PDF
  doc.save("list_support_vendor.pdf");
};

export { exportToPDFListDataAgent, exportToPDFListDataVendor };
