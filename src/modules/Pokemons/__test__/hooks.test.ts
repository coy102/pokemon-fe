import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useRef } from 'react'

import { NetworkStatus } from '@apollo/client'

import {
  mockedUseGetAllPokemonLazyQuery,
  useGetAllPokemonLazyQuery,
} from '~/tests/mocks'

import useHooks from '../hooks'

import {
  resulQueryFilterByWater,
  resulQueryFirstTime,
  resulQueryLoadMore,
  resultFilterByWater,
  resultFirstTimeState,
  resultLoadMOreState,
} from './dummy.data'

const expectedMethod = {
  handleClickTypes: expect.any(Function),
  handleLoadMore: expect.any(Function),
  handleToggleDialog: expect.any(Function),
}

const mockedUseRef = useRef as jest.Mock
const mockedFetchMore = jest.fn()

jest.mock('react', () => {
  const originReact = jest.requireActual('react')
  const mUseRef = jest.fn()
  return {
    ...originReact,
    useRef: mUseRef,
  }
})

describe('pokemons module hooks test', () => {
  afterEach(jest.clearAllMocks)
  test('should return pokemons at the first time', () => {
    useGetAllPokemonLazyQuery.mockImplementation(() => [
      mockedUseGetAllPokemonLazyQuery,
      resulQueryFirstTime,
    ])

    const { result } = renderHook(() => useHooks())

    expect(mockedUseGetAllPokemonLazyQuery).toHaveBeenCalledWith({
      variables: {
        limit: 10,
        offset: 0,
        where: {},
      },
    })
    expect(result.current).toEqual({
      ...expectedMethod,
      ...resultFirstTimeState,
    })
  })

  test('should return pokemons on scroll using handleLoadMore', async () => {
    mockedUseRef.mockReturnValue({
      current: 0,
    })

    useGetAllPokemonLazyQuery.mockImplementation(() => [
      mockedUseGetAllPokemonLazyQuery,
      {
        data: resulQueryLoadMore.data,
        fetchMore: mockedFetchMore,
        networkStatus: NetworkStatus.fetchMore,
      },
    ])

    const { result } = renderHook(() => useHooks())
    act(() => {
      result.current.handleLoadMore()
    })

    expect(mockedUseGetAllPokemonLazyQuery).toHaveBeenCalledWith({
      variables: {
        limit: 10,
        offset: 0,
        where: {},
      },
    })

    expect(mockedFetchMore).toHaveBeenCalledWith({
      variables: {
        limit: 10,
        offset: 10,
      },
      updateQuery: expect.any(Function),
    })

    expect(result.current).toEqual({
      ...expectedMethod,
      ...resultLoadMOreState,
    })
  })

  test('should handle filter by type water and unselected', () => {
    useGetAllPokemonLazyQuery.mockImplementation(() => [
      mockedUseGetAllPokemonLazyQuery,
      resulQueryFilterByWater,
    ])

    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleToggleDialog()
      result.current.handleClickTypes(3)()
    })

    expect(mockedUseGetAllPokemonLazyQuery).toBeCalledTimes(2)
    expect(mockedUseGetAllPokemonLazyQuery).toHaveBeenNthCalledWith(1, {
      variables: {
        limit: 10,
        offset: 0,
        where: {},
      },
    })
    expect(mockedUseGetAllPokemonLazyQuery).toHaveBeenNthCalledWith(2, {
      variables: {
        limit: 10,
        offset: 0,
        where: {
          _and: [
            {
              pokemon_v2_pokemontypes: {
                pokemon_v2_type: {
                  id: {
                    _in: [3],
                  },
                },
              },
            },
          ],
        },
      },
    })

    expect(result.current).toEqual({
      ...expectedMethod,
      ...resultFilterByWater,
    })

    act(() => {
      result.current.handleClickTypes(3)()
    })

    expect(result.current.types).toEqual([])
  })
})
