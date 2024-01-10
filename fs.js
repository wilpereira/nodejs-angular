import { readFile } from "fs";
import { createServer } from "http";

createServer((req, res) => {
    readFile('demo-readFile.html', (err, data) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end()
    })
}
).listen(8080)