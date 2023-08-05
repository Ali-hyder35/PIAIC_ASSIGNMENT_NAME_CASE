
let personName = "John Doe";

console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(`Titlecase: ${toTitleCase(personName)}`);
