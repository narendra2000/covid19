import React,{ useState ,Component }from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css';
// import ReactDOM from "react-dom";

class Contact extends Component
{

    constructor()
    {
        super()
        this.state={
            loding:false,
            char:[],
            cont:{},
            notf:{},
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.rootnet.in/covid19-in/contacts")
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({
            loading:false,char:data.data.contacts.regional,cont:data.data.contacts.primary})
        console.log("abc",this.state.cont);
    })
    }
    // componentDidMount(){
    //     this.setState({loading:true})
    //     fetch("https://api.rootnet.in/covid19-in/notifications")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         this.setState({
    //         loading:false,notf:data.data.notificationsy})
    //     console.log("abc",this.state.notf);
    // })
    // }
    // const attr = this.state.char.map(data => <div>{data.loc}</div>)
    //     const num = this.state.char.map(data => <div>{data.loc}</div>)
    render(){
        
        return(
            <div className="but">
            
            <div className="container">
            
            <table className="table table-striped">
            <thead className="thead-dark">
        

            <tr>
                <th scope="col">S.No</th>
                <th scope="col">State</th>
                <th scope="col">Contact</th>
            </tr>
        </thead>
        <tbody>
        {this.state.char.map((data,index) => (<tr>
            <th scope="row">
                {index+1}
            </th>
            <td>
                {data.loc}
            </td>
            <td>
                {data.number}
            </td>
        </tr>))}
        
        </tbody>
      </table>
           
      </div>
            </div>
          )
    }
        
}

 
export default Contact;