export type NavLinksProps = {
  name: string
  link: string
  icon?: JSX.Element
}
export type FloatingNavProps = {
  navItems: NavLinksProps[]
  className?: string
}
