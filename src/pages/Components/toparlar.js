import React from 'react'
import { Link } from 'react-router-dom';

class Toparlar extends React.Component{
    constructor(props){
            super(props)
             this.state={
                isActive:true,
                list:[]
             } 
             this.callAPI = this.callAPI.bind(this)
             this.callAPI();
        }
        callAPI(){
            fetch('http://192.168.12.206:8000/auditorium/').then((response)=> response.json()
            ).then((gelmedi)=>{
               
                console.log(gelmedi)
                this.setState({list:gelmedi})
            })}
    render(){
        let tb_data = this.state.list.map((item)=>{
             return(
                
                <tr key={item.id}>
                   <Link to="/Mugallym/Toparlar/Gatnashyk" className={'group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md'}>
                     <td>{item.group.name}</td>
                      <td>{item.subject.name}</td>
                    </Link>
                </tr>
                
             )
         }) 
             
        return(
            <div className="container">
            <div className="HeaderText1">
                <h3 className="HeaderText1">Toparlar</h3>
                <table className="table  table-striped bg-[#F8F8FA]">
                    <thead>
                        <tr>
                            <th>Group Number</th>
                            <th>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data} 
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}


export default Toparlar