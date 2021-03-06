export class Http {

  static _onReadyStateChange({xhr, resolve}) {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        resolve(xhr.responseText);
      }
    }
  }

  get(url) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      const props = {
        xhr,
        resolve
      };

      xhr.onreadystatechange = Http._onReadyStateChange.bind(this, props);
      xhr.open('get', url);
      xhr.send(null);
    });
  }

}
