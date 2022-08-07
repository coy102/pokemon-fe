export const ENV = {
  graphqlHost: process.env.NEXT_PUBLIC_BASE_URL_API,
  imageDomain: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
}

export const POKEMON_IMAGE_URL = `${ENV.imageDomain}/PokeAPI/sprites/master/sprites/pokemon/`

export const DEFAULT_LIST_PARAMETER = {
  limit: 10,
}

const META = {
  image: '',
  title: 'Pokemon',
  description: 'Default description',
}

export const META_TAGS = {
  ...META,
  metaTags: [
    { name: 'og:title', content: META.title },
    { name: 'og:image', content: '' },
    {
      name: 'og:site_name',
      content: META.title,
    },
  ],
}
