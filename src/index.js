import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import NmrphcButton from './button/Button'
import NmrphcInput from './input/Input'
import NmrphcSearch from './search/Search'
import NmrphcRoundButton from './round-button/RoundButton'

library.add(faSearch)

export const NeumorphicButton = NmrphcButton
export const NeumorphicInput = NmrphcInput
export const NeumorphicSearch = NmrphcSearch
export const NeumorphicRoundButton = NmrphcRoundButton
