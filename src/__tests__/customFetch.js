import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import useFetch from '../components/useFetch';

test('useFetch performs GET request', async () => {
  const mock = new MockAdapter(axios);

  const mockData = 'response';
  const url = 'http://mock';
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

  expect(result.current.data).toEqual([]);

  await waitForNextUpdate();

  expect(result.current.data).toEqual('response');
});
