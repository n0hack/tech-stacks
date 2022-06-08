interface TypeArray<T> {
  readonly [index: number]: T;
}

const arr: TypeArray<string> = ['Thor', 'Hulk'];
// @ts-ignore
arr[0] = '1';
