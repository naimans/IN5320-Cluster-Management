import React, {useState, useEffect} from 'react'
import { Card} from '@dhis2/ui-core'

export const ProgramDetails = ({selected}) => {

    return (
      <Card className="card-box" >
        <table>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>

          <tr>
            <td>id</td>
            <td><p data-test= {"details-id"} >{selected.id}</p></td>
          </tr>
          <tr>
            <td>name</td>
            <td><p data-test= {"details-name"} >{selected.name}</p></td>
          </tr>
          <tr>
            <td>created</td>
            <td><p data-test= {"details-created"} >{selected.created}</p></td>
          </tr>
        </table>
      </Card>
    )
}
