import { memo } from 'react'

import Head from 'next/head'

import { META_TAGS } from '~/config/constants'

interface Props {
  description?: string
  title?: string
}

const CustomHead = ({
  description = META_TAGS.description,
  title = META_TAGS.title,
}: Props) => (
  <Head>
    <title>{title || META_TAGS.title}</title>
    <meta name="description" content={description || META_TAGS.description} />
    <meta itemProp="name" content={title || META_TAGS.title} />
    {META_TAGS.metaTags.map((m) => (
      <meta key={m.name} property={m.name} content={m.content} />
    ))}
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
  </Head>
)

export default memo(CustomHead)
