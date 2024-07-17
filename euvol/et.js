// Example function to convert dates with default year 2012
function convertDateWithDefaultYear(dateString) {
    // Assuming dateString is something like '2024-06-23'
    // Split the date into year, month, and day parts
    const [year, month, day] = dateString.split('-');
    
    // Create a new date with default year 2012
    const convertedDate = new Date(`2012-${month}-${day}`);
    
    return convertedDate;
}

// Usage example
const originalDate = '2024-06-23';
const convertedDate = convertDateWithDefaultYear(originalDate);

console.log(convertedDate); // Output: Date object for '2012-06-23'
