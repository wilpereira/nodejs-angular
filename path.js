import { basename, dirname } from "path";

let nameFile = basename('./teste.txt');
let fileName = basename('/teste/something');

let dir = dirname('/teste/something');
let diretorio = dirname('/teste/something/file.txt');

console.log('nome do arquivo -> ' + nameFile)
console.log('filename -> ' + fileName)
console.log('dir -> ' + dir)
console.log('diretório -> ' + diretorio)