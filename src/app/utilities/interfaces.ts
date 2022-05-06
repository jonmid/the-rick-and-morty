export interface ICharacter {
  id: number
  name: string
  image: string
}

export interface ICharacterProps {
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
