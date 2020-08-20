import React from 'react'
import { MAGES } from './consts/mages'
import { MONUMENTS } from './consts/monuments'
import { ARTIFACTS } from './consts/artifacts'
import { MAGIC_ITEMS } from './consts/magic-items'
import { SCROLLS } from './consts/scrolls'
import { PLACES_OF_POWER } from './consts/places-of-power'

export const POC = () => {
  return (
    <div style={{ padding: 32 }}>
      <b>Mages: {MAGES.length}</b>
      {MAGES.map((m) => {
        return (
          <div>
            {m.id} | {m.title}
          </div>
        )
      })}

      <br />

      <b>Monuments: {MONUMENTS.length}</b>
      {MONUMENTS.map((m) => {
        return (
          <div>
            {m.id} | {m.title}
          </div>
        )
      })}

      <br />

      <b>Artifacts: {ARTIFACTS.length}</b>
      {ARTIFACTS.map((m) => {
        return (
          <div>
            {m.id} | {m.title}
          </div>
        )
      })}

      <br />

      <b>Magic Items: {MAGIC_ITEMS.length}</b>
      {MAGIC_ITEMS.map((m) => {
        return (
          <div>
            {m.id} | {m.title}
          </div>
        )
      })}

      <br />

      <b>Scrolls: {SCROLLS.length}</b>
      {SCROLLS.map((m) => {
        return (
          <div>
            {m.id} | {m.title}
          </div>
        )
      })}

      <br />

      <b>Places of Power: {PLACES_OF_POWER.length}</b>
      {PLACES_OF_POWER.map((m) => {
        return (
          <div>
            {m.id} | {m.sideA.title} | {m.sideB.title}
          </div>
        )
      })}
    </div>
  )
}
