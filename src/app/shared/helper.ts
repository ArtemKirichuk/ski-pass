export function parseImg (file: File, typeRead: string | null, callback: Function){
    
    let fr = new FileReader();
    fr.onload = function (e) {
      callback(e.target!.result, file);
    };
    switch (typeRead) {
      case 'URL':
        fr.readAsDataURL(file);
        break;
      case 'Buffer':
        fr.readAsArrayBuffer(file);
        break;
      default:
        fr.readAsBinaryString(file);
        break;
    }
  }