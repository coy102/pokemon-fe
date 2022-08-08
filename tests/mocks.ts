const mockedUseGetAllTypesLazyQuery = jest.fn()
const mockedUseGetAllPokemonLazyQuery = jest.fn()

const useGetAllTypesLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedUseGetAllTypesLazyQuery, undefined])

const useGetAllPokemonLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedUseGetAllPokemonLazyQuery, undefined])

jest.mock('~/gqlservices/hooks/pokemon', () => ({
  useGetAllTypesLazyQuery,
  useGetAllPokemonLazyQuery,
}))

export {
  mockedUseGetAllPokemonLazyQuery,
  mockedUseGetAllTypesLazyQuery,
  useGetAllPokemonLazyQuery,
  useGetAllTypesLazyQuery,
}
