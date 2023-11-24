import * as PLCService from './service/plcService';

export const connect = (ip:string, port:number) => {
    try {
        PLCService.connectToPLC(ip, port);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const readAddress = async (readAddress:number) => {
    try {
        var data = await PLCService.readAddressData(readAddress);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
export const writeAddress = (inputAddress:number, inputValue:number) => {
    try {
        PLCService.writeAddressData(inputAddress, inputValue);
        return;
    } catch (error) {
        console.error('Error:', error);
    }
}
