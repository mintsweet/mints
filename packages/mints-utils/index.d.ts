export namespace env {
  function device(): string;
  function app(): string;
}

export namespace format {
  function date(): string;
  function money(): string;
}

export class Http {
  constructor(host: string, opts?: object);
  get(url: string, data?: object, opts?: object): any;
  post(url: string, data?: object, opts?: object): any;
  put(url: string, data?: object, opts?: object): any;
  patch(url: string, data?: object, opts?: object): any;
  del(url: string, data?: object, opts?: object): any;
}

export namespace storage {
  function set(key: string, data: any): void;
  function get(key: string): any;
  function del(key: string): void;
  function clear(): void;
}

export namespace tool {
  function title(): void;
}

export namespace url {
  function get(): object;
  function set(): string;
}
