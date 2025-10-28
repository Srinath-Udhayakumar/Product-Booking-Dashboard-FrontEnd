function createTableFromObjects(arr) {
    // Create table
    const table = document.createElement("table");

    // Extract column headers from keys of first object
    const headers = Object.keys(arr[0]);
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
        const thd = document.createElement("th");
        thd.textContent = header.toUpperCase();
        headerRow.appendChild(thd);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    arr.forEach(obj => {
        const bodyRow = document.createElement("tr");
        headers.forEach(header => {
            const tbd = document.createElement("td");
            tbd.textContent = obj[header];
            bodyRow.appendChild(tbd);
        });
        tbody.appendChild(bodyRow);
    });
    table.appendChild(tbody);

    return table;
}