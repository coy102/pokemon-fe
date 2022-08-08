export const resulQueryFirstTime = {
  data: {
    pokemons: [
      {
        id: '1',
        name: 'Bulbarsaur',
        types: {
          type: [
            {
              id: 1,
              name: 'Normal',
            },
            {
              id: 2,
              name: 'Grass',
            },
          ],
        },
      },
      {
        id: '2',
        name: 'Bulbarsaur',
        types: {
          type: [
            {
              id: 3,
              name: 'Water',
            },
          ],
        },
      },
    ],
  },
  networkStatus: 1,
}

export const resultFirstTimeState = {
  memoPokemon: resulQueryFirstTime.data.pokemons,
  networkStatus: 1,
  toggleDialog: false,
  types: [],
}

export const resulQueryLoadMore = {
  data: {
    pokemons: [
      {
        id: '1',
        name: 'Bulbarsaur',
        types: {
          type: [
            {
              id: 1,
              name: 'Normal',
            },
            {
              id: 2,
              name: 'Grass',
            },
          ],
        },
      },
      {
        id: '2',
        name: 'Bulbarsaur',
        types: {
          type: [
            {
              id: 3,
              name: 'Water',
            },
          ],
        },
      },
      {
        id: '3',
        name: 'Ven',
        types: {
          type: [
            {
              id: 1,
              name: 'Normal',
            },
          ],
        },
      },
      {
        id: '4',
        name: 'Any poke',
        types: {
          type: [
            {
              id: 3,
              name: 'Water',
            },
          ],
        },
      },
    ],
  },
}

export const resultLoadMOreState = {
  memoPokemon: resulQueryLoadMore.data.pokemons,
  networkStatus: 3,
  toggleDialog: false,
  types: [],
}

export const resultOpenDrawer = {
  memoPokemon: resulQueryLoadMore.data.pokemons,
  networkStatus: 3,
  toggleDialog: true,
  types: [],
}

export const resulQueryFilterByWater = {
  data: {
    pokemons: [
      {
        id: '2',
        name: 'Bulbarsaur',
        types: {
          type: [
            {
              id: 3,
              name: 'Water',
            },
          ],
        },
      },
    ],
  },
  networkStatus: 1,
}

export const resultFilterByWater = {
  memoPokemon: resulQueryFilterByWater.data.pokemons,
  networkStatus: 1,
  toggleDialog: true,
  types: [3],
}
