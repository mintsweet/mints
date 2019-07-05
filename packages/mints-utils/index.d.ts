export namespace env {
  function device(): string;
  function app(): string;
}

export namespace format {
  function date(): string;
  function money(): string;
}

export class Http {
  constructor(host: string);
}

export namespace storage {
  function set(): void;
  function get(): string | object;
  function del(): void;
  function clear(): void;
}

export namespace tool {
  function title(): void;
}

export namespace url {
  function get(): object;
  function set(): string;
}
