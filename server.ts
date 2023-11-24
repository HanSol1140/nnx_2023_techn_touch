import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8888;

const server = app.listen(PORT, () => {
    console.log("서버시작 PORT : " + PORT);
});


import * as PLC from "./controller/plcController";

// PLC연결
PLC.connect("192.168.100.2", 502); // 모드버스시 502로 접속, XGT 2004
setInterval(async () => {    
    var inputVoltage = await PLC.readAddress(350);
    console.log(inputVoltage);
    PLC.writeAddress(351,  100);
}, 1000);
 

// 여기이후로 모두 connect가 완료된후 동작
