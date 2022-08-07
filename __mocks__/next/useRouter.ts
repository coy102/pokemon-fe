const mockedPush = jest.fn()

const mockedUseRouter = jest.fn().mockImplementation(() => ({
  push: mockedPush,
  query: undefined,
}))

export { mockedPush, mockedUseRouter }
