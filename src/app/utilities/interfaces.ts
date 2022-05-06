export interface ICharacter {
  id: number
  name: string
  image: string
  species: string
}

export interface ICharacterProps {
  character: ICharacter
  titleButton: string
  handleClick: any
}

export interface IHeroDetailProps {
  character: ICharacter
}

export interface BreadcrumbsProps {
  title: string
}

export interface EmptyProps {
  title: string
  message: string
}

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface ICharacterState {
  bookmarks: ICharacter[]
  character: any
}
