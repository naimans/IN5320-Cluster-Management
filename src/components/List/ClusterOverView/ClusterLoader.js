import React, {useState, useEffect} from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import {ClusterContext } from '../../../context/ClusterContext'

const query = {
	clusters: {
				resource: 'trackedEntityInstances',
				params: ({ou, program})=> ({
					program:"plTOwEXJrb6",
					ou:"vndrcEWlSnP",
					order:"created:desc",
				})
		},
}

export const ClusterLoader = ({children}) => {
	   const { data, loading, error } = useDataQuery(query)
		 const [clusterList, setClusterList] = useState()

		useEffect(()=> {
				 if (data) {
						 setClusterList({
								 clusters: data.clusters.trackedEntityInstances
						 })
				 }
			}, [data])
		//console.log(clusterList)
	   if (error) {
	        return <p>Error</p>
	    }

    if (loading)
        return (
            <CircularLoader/>
        )

    return (
            <ClusterContext.Provider value={clusterList}>
                {children}
            </ClusterContext.Provider>
        )
	}
