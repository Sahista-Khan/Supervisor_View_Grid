import React from 'react'
import TableRow from './TableRow';
import TableHeader from '../TableHeader/TableHeader'

export default function Table({itemsPerPage, data}) {
    let allrow=[]
    
   
    for(let i=0;i<itemsPerPage && i<data.length ;i++){
         allrow.push(<TableRow data={data[i]} 
         duedateColor="rgba(244, 175, 100, 0.5);" ></TableRow>   )
       
    }
    return (

        <table className="tableTR">
            <tbody>
                <TableHeader/>
              {allrow}
                {/* <TableRow lobname="MEDICARE" lobcolor="purple"
                    duedate="09/04/2020 @ 9:00 AM" duedateColor="rgba(244, 175, 100, 0.5);" /> */}

                {/* <TableRow lobname="COMMERCIAL" lobcolor="#707683"
                    duedate="09/09/2020 @ 5:00 PM" duedateColor="rgba(244, 175, 100, 0.5);" />

                <TableRow lobname="EXCHANGE" lobcolor="#F4AF64"
                    duedate="09/18/2020 @ 10:30 AM" duedateColor="rgba(244, 175, 100, 0.5);" />

                <TableRow lobname="MEDICAID" lobcolor="#F89090"
                    duedate="No due date" duedateColor="rgba(244, 175, 100, 0.5);" /> */}

            </tbody>
        </table>

    )
}
