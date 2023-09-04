import type { LoaderFunctionArgs } from 'react-router-dom';
import { Loader as postDetailsLoader } from '../index';

describe('postDetailsLoader', () => {
  it('throws an error if no id is provided', () => {
    expect(() =>
      postDetailsLoader({ params: {} } as LoaderFunctionArgs),
    ).toThrowError('An ID is required');
  });
});
