import React from 'react'

const SVGIcon = ({ name }) => {
  return <img src={require(`../../../../images/${name}.svg`)} alt={`${name}Img`} />
}

export default SVGIcon
