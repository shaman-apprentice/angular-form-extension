type IsAny<T> = unknown extends T
  ? T extends {} ? T : never
  : never;

type NotAny<T> = T extends IsAny<T> ? never : T;

export function tsErrorWhenAny<T>(x: NotAny<T>) { }
