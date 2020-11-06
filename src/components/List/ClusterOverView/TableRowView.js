import React, {useState, useEffect, useContext} from 'react'
import { CircularLoader } from '@dhis2/ui-core'
import { TableCell, TableRow, Button } from "@dhis2/ui"
import {ClusterDetails} from './ClusterDetails'

export const TableRowView = ({item,index,fields}) => {
  //console.log(item.trackedEntityInstance)
	let tei = item.trackedEntityInstance;

	const clusterFields = ["VcWvMNRxMnd", "M8LzOFPS1ch", "gvF18KGRwBr", "UlhcQscPhh2", "mV60gIKncoW", "w7FgWsliy6e", "XzdupY8xPqG", "BNMdqHrKze4"];
	let event = [];

	const [details,setDetails] = useState("");

	const handleClick = () => () => {
			setDetails(<ClusterDetails tei={tei}/>);
		}

  if(item) {
    item.attributes.map((cluster) => {
      clusterFields.map((field) => {
          if (cluster.attribute == field) {
              const p = { [cluster.displayName]: cluster.value }
              event = { ...event, ...p }
              //console.log(event);
          }
      })
    })
  }
	//console.log(event);

		const renderTableCell = (field, j) => {
      switch (field) {
                case "Show Details":
                return (
                    <TableCell dataTest="dhis2-uicore-tablecll" key={j}>
                        {
													<Button
                                dataTest="dhis2-uicore-button"
                                name="Basic button"
                                onClick={handleClick()}
                                type="button"
                                value="default">
                                Details
                            </Button>}
                        {details}
                    </TableCell>
                )
            default:
                return <TableCell dataTest="dhis2-uicore-tablecell" key={j}>{event[field]?.toString()}</TableCell>
        }
    }

	return (
    <TableRow dataTest="dhis2-uicore-tablerow">
            {fields.map((field, j) => (
                renderTableCell(field, j)
            ))}
    </TableRow>
	)
}
