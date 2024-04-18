import express from 'express';
import path from 'node:path';

const app = express()
const PORT = 80;

const frontDir = path.join(__dirname, "..", "..", "frontend");

app.use(express.static(frontDir));

app.use('*', async (request, response) => {
    response.sendFile(path.join(frontDir, "index.html"));
})

app.listen(PORT, () => {
    console.log(`\x1b[47m` + `\x1b[30m` + `
            .SX;8 ::X         8 X@8@8@@@
    .  . . %XS  S@@@8;@ .  . .;: S8@@8@8@@
     .  :X8;8@X@8@8@8;@   .  @ X@@@8@8@@@@
       %8S888@@8@8@88;@ .   .SS@8@@8@@88@@
   . .S S8@8@8@8@@@XS.S     .S@@@@@@8@@@@X
    tXS@@8@8@@@.@ @Xt;  . .  SX@@@8@8@@ .%
   .%X8@8@8@8X@@      .     .S@@@8@8@@8X  
   %;88@8@@@ @:   .      .   X%%%%%%%%;   
  8 88@8@8X@;  .    .  .   .    .  .    . 
   @@8@@8@ % .   .   .       %88888888888t
  8@8@8@8S.    .   .    . . .@SSSSSSSSSSS8
   @@8@8@t@  .        .      8@@@8@@8@@8@ 
   8@8@88S8.    . . .   .  . 8@8@8@8@8@@@ 
   S8@8@8S%   .           . .8@@8@8@8@8@@X
  ;@@8@8@@ :.    .  . .      @  t;88@8@8X 
  8 8@8@8XSX  .         .  .   .t@8@8@8@ 8
  :%@@@8@88%;;  . .  .   .    t:t88@@8@X;:
   t8X8@8888@  S.     .    .X  @88@8@8XX; 
    %X@@8@8@@@@.S8:.    .:8S.@@888@8@@8t .
     X8S@8@88@88@%;%8888S %@88@@8@8@S8S   
      .XXX@@8@8@888@@8@@8@8@@8@8@@SX8. .  
   .    ::.@8@@8@8@8@8@8@8@8@8@@@ ;: .   .
     .  ..S:8.X8@8@8@@8@8@@8@X.8;%     .  
            .;8%;8   .:. S8;%@; . . .     
    ` + `\x1b[0m`);
    console.log("GRAFF-INTERACTIVE TEST TASK");


    console.log("SERVER IS SERVING: https://localhost:" + PORT);
});