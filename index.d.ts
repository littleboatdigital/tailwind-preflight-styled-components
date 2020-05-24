import { InterpolationValue, GlobalStyleComponent, DefaultTheme } from 'styled-components'

declare const tailwindPreflight: InterpolationValue
declare const TailwindPreflight: GlobalStyleComponent<{}, DefaultTheme>

export { tailwindPreflight, TailwindPreflight }
export default TailwindPreflight