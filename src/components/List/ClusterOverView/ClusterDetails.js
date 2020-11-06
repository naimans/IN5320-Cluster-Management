import React, {useState, useEffect} from 'react'
import { Card} from '@dhis2/ui-core'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import {
    Table,
    TableCell,
    TableHead,
    TableRowHead,
    TableCellHead,
    TableBody,
    TableRow,
    TableFoot,
    AlertBar,
    Modal
} from "@dhis2/ui";

const query = {
	contacts: {
				resource: 'relationships',
				params: ({tei})=> ({
					tei:`${tei}`,
					trackedEntityType:"MCPQUTHX1Ze",
				})
		},
}

export const ClusterDetails = ({tei}) => {

  //console.log(tei);
  const tableFields = ["First Name", "Surname", "Age", "National ID number"];
  let values = [];

  const { loading, data, error } = useDataQuery(query, {
        variables: {
            tei: tei,
        }
    });
    //console.log(data);

  const contactFields = ["sB1IHYu2xQT", "ENRjVGxVL6l", "Rv8WM2mTuS5", "ZSt07qyq6Pt"];

  const contactTable = (items, index) => {
      if(items){
      items.from.trackedEntityInstance.attributes.map((contact) => {
        contactFields.map((field) => {
            if (contact.attribute == field) {
                const p = { [contact.displayName]: contact.value }
                values = { ...values, ...p }
            }
        })
      })
    }

    return(
        <TableRow dataTest="dhis2-uicore-tablerow" key={index}>
                {tableFields.map((field, j) => (
                   <TableCell dataTest="dhis2-uicore-tablecell" key={j}>{values[field]?.toString()}</TableCell>
                   //contactTableCell(field,j)
                   //console.log(values[field])
                ))}
        </TableRow>
      )
  }

  return (
  <div>
      <Table dataTest="dhis2-uicore-table">
          <TableHead dataTest="dhis2-uicore-tablehead">
              <TableRowHead dataTest="dhis2-uicore-tablerowhead">
                  {data && tableFields.map((m, n) => (
                      <TableCellHead dataTest="dhis2-uicore-tablecellhead" key={n}>
                          {m}
                      </TableCellHead>
                  ))}
              </TableRowHead>
          </TableHead>
          <TableBody dataTest="dhis2-uicore-tablebody">
            { data && data.contacts.map((items,index) => (
              contactTable(items, index)
            ))}
          </TableBody>
        </Table>
    </div>
  )
}
