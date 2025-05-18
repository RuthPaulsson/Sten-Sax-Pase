const val = ["sten", "sax", "påse"];

let användarVal = prompt("Välj: sten, sax eller påse") ;

let datorVal = val[Math.floor(Math.random() * val.length)];

console.log("Du valde:", användarVal);
console.log("Datorn valde:", datorVal);

if (användarVal === datorVal) {
    console.log("Oavgjort!");
} else if (
    (användarVal === "sten" && datorVal === "sax") ||
    (användarVal === "sax" && datorVal === "påse") ||
    (användarVal === "påse" && datorVal === "sten")
) {
    console.log("Du vann!");
} else {
    console.log("Du förlorade!");
}