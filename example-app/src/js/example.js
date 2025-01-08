import { IOSPrinterPlugin } from 'ios-printer-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    IOSPrinterPlugin.echo({ value: inputValue })
}
