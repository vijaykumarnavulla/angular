import { MyUnsafePipe } from './my-unsafe.pipe';

describe('MyUnsafePipe', () => {
  it('create an instance', () => {
    const pipe = new MyUnsafePipe();
    expect(pipe).toBeTruthy();
  });
});
