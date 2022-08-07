export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type PokemonWhere = {
  _and?: Maybe<Array<PokemonWhere>>
  name?: Maybe<StringComparison>
}

export type StringComparison = {
  _in?: Maybe<Array<Scalars['String']>>
}

export type Pokemon = {
  id: Scalars['Int']
  name: Scalars['String']
}

export type Types = {
  id: Scalars['Int']
  name: Scalars['String']
}

export type PokemonType = {
  type?: Maybe<{
    name: Scalars['String']
  }>
}
