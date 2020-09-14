import React,{ useState ,Component }from 'react';
import  "./image.css"
import 'bootstrap/dist/css/bootstrap.css';



class Notifications extends Component
{

    constructor()
    {
        super()
        this.state={
            loding:false,
            cont:{},
            notf:[],
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.rootnet.in/covid19-in/notifications")
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({
            loading:false,notf:data.data.notifications})
        console.log("abc",this.state.notf);
    })
    }
    // const attr = this.state.char.map(data => <div>{data.loc}</div>)
    //     const num = this.state.char.map(data => <div>{data.loc}</div>)
    render(){
        
        return(
            <div className="but">
            
            <div className="container">
            
            <table className="table table-striped">
            <thead className="thead-dark">
        

            <tr>
                <th scope="col">Date</th>
                <th scope="col">Notification</th>
                <th scope="col">Title</th>
            </tr>
        </thead>
        <tbody>
        
        {this.state.notf.map((data,index) => (
       
            
            <tr>
            
            <th scope="row">
            {(data.title).split(" ",1)}
            </th>
            <td>
                {(data.title).substr(10)}
                
            </td>
            <td>
                <a href={data.link}>{data.link}</a>
            </td>
        </tr>))}
        
        </tbody>
      </table>
           
      </div>
            </div>
          )
    }
        
}

 
export default Notifications;