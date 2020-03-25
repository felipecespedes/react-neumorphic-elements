import React, { Component } from 'react'
import axios from 'axios'
import {
  NeumorphicSearch,
  NeumorphicRoundButton,
  NeumorphicItem,
} from 'react-neumorphic-elements'

export default class App extends Component {

  state = {
    pokemons: [],
    filteredPokemons: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => {
      if (response.status === 200) {
        const pokemons = response.data.results.map((pokemon, index) => {
          return {
            id: `${index}`,
            ...pokemon
          }
        })
        this.setState({ pokemons, filteredPokemons: pokemons })
      }
    })
  }

  render () {
    const { filteredPokemons } = this.state

    return (
      <div className='app'>
        <div className='search-container'>
          <NeumorphicSearch
            placeholder='What pokemon are you searching for?'
            onValueChange={this.handleSearchValueChanged}
          />
        </div>
        <div className='pokemon-list'>
          { filteredPokemons.map(this.renderPokemon.bind(this)) }
        </div>
        <div className="fab-button">
          <NeumorphicRoundButton
            icon={['fab', 'github']}
            iconColor='#333'
            iconSize='2x'
            title='Github Repository'
            style={{
              backgroundColor: '#fff'
            }}
            link='https://github.com/felipecespedes/react-neumorphic-elements'
          />
        </div>
      </div>
    )
  }

  renderPokemon(pokemon) {
    const { name, id } = pokemon

    return (
      <NeumorphicItem
        key={id}
        title={name}
        icon={`https://pokeres.bastionbot.org/images/pokemon/${parseInt(id, 10) + 1}.png`}
        rightContent={this.renderRightContent(pokemon)}
      />
    )
  }

  renderRightContent(pokemon) {
    const { isFavorite } = pokemon
    let iconColor = isFavorite ? '#d50000' : '#9E9E9E'

    return <NeumorphicRoundButton
      icon='heart'
      iconColor={iconColor}
      isActive={isFavorite}
      size={40}
      onClick={this.handleFavoriteButtonClicked.bind(this, pokemon)}
    />
  }

  handleFavoriteButtonClicked = (pokemon) => {
    const pokemons = this.state.pokemons.map(iPokemon => {
      if (pokemon.id === iPokemon.id) {
        iPokemon.isFavorite = !iPokemon.isFavorite
      }
      return iPokemon
    })
    this.setState({ pokemons })
  }

  handleSearchValueChanged = (searchTerm) => {
    const { pokemons } = this.state
    let filteredPokemons = pokemons
    if (searchTerm != null && searchTerm !== '') {
      filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }
    this.setState({ filteredPokemons })
  }

}
