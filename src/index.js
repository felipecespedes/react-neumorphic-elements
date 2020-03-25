import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import NmrphcButton from './button/Button'
import NmrphcInput from './input/Input'
import NmrphcSearch from './search/Search'
import NmrphcRoundButton from './round-button/RoundButton'
import NmrphcItem from './item/Item'
import NmrphcIcon from './icon/Icon'

library.add(fas, fab)

export const NeumorphicButton = NmrphcButton
export const NeumorphicInput = NmrphcInput
export const NeumorphicSearch = NmrphcSearch
export const NeumorphicRoundButton = NmrphcRoundButton
export const NeumorphicItem = NmrphcItem
export const NeumorphicIcon = NmrphcIcon
