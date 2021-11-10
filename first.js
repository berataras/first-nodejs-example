
const arguments = process.argv.slice(2);

function Calc(radius){
    const area = Math.PI * (radius * radius);

    console.log(`Radius ${radius} - Area ${area}`);
}

Calc(arguments[0])