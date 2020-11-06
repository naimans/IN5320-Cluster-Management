import React, { useContext, useState } from 'react'
import style from '../style.css'
import {
  Table,
  TableCell,
  TableHead,
  TableRowHead,
  TableCellHead,
  TableBody,
  TableRow,
  TableFoot,
	Button,
} from "@dhis2/ui";
import {ClusterContext} from '../../../context/ClusterContext'
import {TableRowView} from './TableRowView'


export const ClusterOverView = () => {

	const clusterList = useContext(ClusterContext)
	if (!clusterList || !clusterList.clusters) return null;
	//console.log(clusterList.clusters.length);
  //console.log(clusterList.clusters);

	const tableFields = ["Unique ID", "Cluster name", "Cluster description", "Cluster - Start date and time of cluster", "Show Details"];

	return (
      <div>
  			<Table dataTest="dhis2-uicore-table">
  			<TableHead dataTest="dhis2-uicore-tablehead">
  				<TableRowHead dataTest="dhis2-uicore-tablerowhead">
  					{clusterList &&
  						tableFields.map((item, index) => (
  							<TableCellHead dataTest="dhis2-uicore-tablecellhead" key={index}>
  								{item}
  							</TableCellHead>
  						))}
  				</TableRowHead>
  			</TableHead>
  				<TableBody dataTest="dhis2-uicore-tablebody">
  				{
  					clusterList.clusters.map((item,index) => (
  							<TableRowView
  								item={item}
  								index={index}
                  fields={tableFields}/>
  				))}
  				</TableBody>
  			</Table>
      </div>
	)
}
