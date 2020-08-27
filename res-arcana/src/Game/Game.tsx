import React, { useState } from 'react'
import { ARTIFACTS } from '../consts/artifacts'
import { Item } from '../components/Item/Item'

import './Game.css'

export const Game = () => {
  const [artifactIndex, SetArtifactIndex] = useState(0)

  return (
    <div className='card-display'>
      <button
        onClick={() => SetArtifactIndex(artifactIndex - 1)}
        disabled={artifactIndex < 1}
      >
        Prev
      </button>

      <Item value={ARTIFACTS[artifactIndex]} />

      <button
        onClick={() => SetArtifactIndex(artifactIndex + 1)}
        disabled={artifactIndex >= ARTIFACTS.length - 1}
      >
        Next
      </button>
    </div>
  )
}
