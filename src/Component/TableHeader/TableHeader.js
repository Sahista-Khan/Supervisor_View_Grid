import React, { Component } from 'react'
import './TableHeader.css'
import settingIcon from '../../assets/icon/setting_icon.PNG'
import sortingIcon from '../../assets/icon/sorting.PNG'
import sortingActive from '../../assets/icon/sortingactive.PNG'

export class TableHeader extends Component {
    render() {
        return (
                
                <tr className="thHeader">
                    <th><img src={settingIcon} alt=""/></th> 
                    <th><input type="checkbox" /></th>
                    <th>Task Name <img src={sortingIcon} alt=""/></th>
                    <th>LOB <img src={sortingIcon} alt=""/></th>
                    <th>SUBTASKS <img src={sortingIcon} alt=""/></th>
                    <th>ASSIGNED TO <img src={sortingIcon} alt=""/></th>
                    <th>STEP <img src={sortingIcon} alt=""/></th>
                    <th>DUE DATE <img src={sortingActive} alt=""/></th>
                    
                </tr>

           
            
           

        )
    }
}

export default TableHeader
