import { renderHook } from '@testing-library/react-hooks'

import {
  mockedUseGetAllTypesLazyQuery,
  useGetAllTypesLazyQuery,
} from '~/tests/mocks'

import useHooks from '../hooks'

import { defaultState, resultQueryTypes, resultState } from './dummy.data'

describe('filter hooks test', () => {
  afterEach(jest.clearAllMocks)

  test('should not return types when the drawer is not open', () => {
    const { result } = renderHook(() => useHooks({ open: false }))

    expect(mockedUseGetAllTypesLazyQuery).not.toHaveBeenCalled()
    expect(result.current).toEqual(defaultState)
  })

  test('should return types when the drawer is open', () => {
    useGetAllTypesLazyQuery.mockImplementation(() => [
      mockedUseGetAllTypesLazyQuery,
      resultQueryTypes,
    ])

    const { result } = renderHook(() => useHooks({ open: true }))

    expect(mockedUseGetAllTypesLazyQuery).toHaveBeenCalled()
    expect(result.current).toEqual(resultState)
  })
})

describe('filter hooks test - empty data', () => {
  afterEach(jest.clearAllMocks)

  test('should return empty types when the data is undefined', () => {
    useGetAllTypesLazyQuery.mockImplementation(() => [
      mockedUseGetAllTypesLazyQuery,
      undefined,
    ])

    const { result } = renderHook(() => useHooks({ open: true }))

    expect(mockedUseGetAllTypesLazyQuery).toHaveBeenCalledWith()
    expect(result.current).toEqual(defaultState)
  })
})
