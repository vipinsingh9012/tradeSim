import { saveAs } from 'file-saver';

export const exportCSV = (data: Array<{ [key: string]: any }>, filename: string) => {
    const csvRows: string[] = [];

    // Get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // Format the data
    for (const row of data) {
        const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }

    // Create a Blob from the CSV string
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    // Use FileSaver.js to save the file
    saveAs(blob, filename);
};