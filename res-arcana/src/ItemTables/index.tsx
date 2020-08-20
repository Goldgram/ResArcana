import React from 'react'
import { MAGES } from '../consts/mages'
import { MONUMENTS } from '../consts/monuments'
import { ARTIFACTS } from '../consts/artifacts'
import { MAGIC_ITEMS } from '../consts/magic-items'
import { SCROLLS } from '../consts/scrolls'
import { PLACES_OF_POWER } from '../consts/places-of-power'

import './index.css'

const truthyTd = (object: any, value: any = undefined) => {
  return (
    <td style={{ backgroundColor: object ? 'lightgreen' : 'lightcoral' }}>
      {value}
    </td>
  )
}

export const ItemTables = () => {
  return (
    <div className='table-container'>
      <b>Mages: {MAGES.length}</b>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Collect</th>
            <th>Discount</th>
            <th>Actions</th>
            <th>Reactions</th>
            <th>Expansion</th>
          </tr>
        </thead>
        <tbody>
          {MAGES.map((m) => {
            return (
              <tr>
                <td>{m.id}</td>
                <td>{m.title}</td>
                {truthyTd(m.collect)}
                {truthyTd(m.discount)}
                {truthyTd(m.actions)}
                {truthyTd(m.reactions)}
                {truthyTd(m.expansion, m.expansion)}
              </tr>
            )
          })}
        </tbody>
      </table>

      <br />
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
