import React from 'react'
import './Project.css'
export default function Project(props) {
  return (
    <div>
            
          

            <table>

           <thead>
                <tr>
                    <th colSpan={2}>Project : {props.projectName}</th>
                    
                    
                    </tr>
            </thead>
           <tbody>
            <tr>
                    <th>Challenge</th>
                    <td>{props.challenge}</td>
                
                </tr>
                <tr>
                <th>Solution</th>
                    <td>{props.solution}</td>
                    
                </tr>
           </tbody>
           <tfoot>
                <tr>
                    <th>Results</th>
                        <td>{props.results}</td>
                    
                    </tr>
           </tfoot>
            </table>
    </div>
  )
}
