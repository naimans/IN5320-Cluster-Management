import React, { useContext, useState } from 'react'
import { Menu, MenuItem } from '@dhis2/ui'
import style from '../style.css'
import {ProgramContext} from '../../../context/ProgramContext'
import {ProgramDetails} from './ProgramDetails'

export const Programs = () => {

	const [values, setValues] = useState({id:'', name:'', create:''})

	const programList = useContext(ProgramContext)
	if (!programList || !programList.organisationUnits) return null;

	const handleClick = (id,name,created) => () => {
	
		setValues({id : id, name : name, created: created});
	}

	return (
		 <div className="main-container">

				 <div id="leftbox" data-test-id="program-list">
					 <h1>List</h1>
						 <Menu>
						 		{programList.organisationUnits.map (
									({ id,  name, created }) => (
						 				<MenuItem
						 					label={name}
											dataTest={"list-program-"+id}
											onClick={handleClick(id,name,created)}
						 				/>
						 		)
							)}
						 </Menu>
				 </div>

				 <div id="rightbox" data-test-id="program-details">
					 <h1>Details</h1>
					 	{values.id && <ProgramDetails selected={values}/>}
				 </div>

		 </div>
	 );
}
