function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = "Sheet1"; // Replace with the actual name of your sheet
  var sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "message": "Sheet not found: " + sheetName}))
        .setMimeType(ContentService.MimeType.JSON);
  }

  var formData = e.postData.contents;
  var data = JSON.parse(formData);

  // Get the headers from the first row of the sheet
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var newRow = [];

  // Populate the new row based on the headers and submitted data
  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    if (data.hasOwnProperty(header)) {
      newRow.push(data[header]);
    } else {
      newRow.push(""); // If a field is missing, add an empty value
    }
  }

  sheet.appendRow(newRow);

  return ContentService.createTextOutput(JSON.stringify({"result": "success", "message": "Data submitted successfully!"}))
      .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return HtmlService.createHtmlOutput("This endpoint is for POST requests only.");
}
