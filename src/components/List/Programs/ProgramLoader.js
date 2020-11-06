import React, {useState, useEffect} from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader} from '@dhis2/ui-core'
import {ProgramContext} from '../../../context/ProgramContext'

const query = {
		organisationUnits: {
				resource: 'organisationUnits',
				params: {
						paging: 'false',
            fields: ['id', 'name', 'created'],
				},
		},
}

export const ProgramLoader = ({children}) => {
	   const { data, loading, error } = useDataQuery(query)
		 const [programList, setProgramList] = useState()
		 //console.log(data)

     useEffect(()=> {
        if (data) {
            setProgramList({
                organisationUnits: data.organisationUnits.organisationUnits
            })
        }
     }, [data])

	   if (error) {
	        return <p>Error</p>
	    }

    if (loading)
        return (
            <CircularLoader/>
        )
    console.log(programList);
    return (

            <ProgramContext.Provider value={programList}>
                {children}
            </ProgramContext.Provider>
        )
	}
