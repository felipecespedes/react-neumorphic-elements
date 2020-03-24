import React, { Component } from 'react'

import {
  NeumorphicButton,
  NeumorphicInput,
  NeumorphicSearch,
  NeumorphicRoundButton,
} from 'react-neumorphic-elements'

export default class App extends Component {
  render () {
    return (
      <div>
        <NeumorphicButton>
          Hello
        </NeumorphicButton>
        <NeumorphicRoundButton size={50}>X</NeumorphicRoundButton>
        <NeumorphicRoundButton isActive={true} size={50}>X</NeumorphicRoundButton>
        <NeumorphicInput />
        <NeumorphicSearch />
      </div>
    )
  }
}
