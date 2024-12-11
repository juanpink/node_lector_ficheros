import fs from 'node:fs';//Require package.json

try {
    const data = fs.readFileSync('./quijote.txt', 'utf8');
    console.log(data);
    let nombre = new String();
    console.log(nombre);
    console.log(typeof nombre);
} catch (err) {
    console.error(err);
}
