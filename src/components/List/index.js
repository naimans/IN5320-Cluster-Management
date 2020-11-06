import React from 'react'
import './style.css'
import { Programs } from './Programs'
import { ProgramLoader } from './Programs/ProgramLoader'
import { ClusterOverView } from './ClusterOverView'
import { ClusterLoader } from './ClusterOverView/ClusterLoader'


export const List = ({selected}) => {
	//console.log({selected})

	if (selected === "map")
	{
		return (
			<ProgramLoader>
					<Programs/>
			</ProgramLoader>
		);
	}

	if (selected === "clusterList")
	{
		return (
			<ClusterLoader>
					<ClusterOverView/>
			</ClusterLoader>
		);
	}

	return null;
	}
