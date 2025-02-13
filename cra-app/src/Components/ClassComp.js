import React from 'react';

class ClassComp extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        count : 100
    }
   }

   componentDidMount(){
    console.log("first time when component mounting...");
   }

   handelClick(){
    this.setState({count : this.state.count + 1})
   }

   componentDidUpdate(){
    console.log("when component is update");
   }

   render(){
    return(
        <div>
            <h2>class Components : {this.props.name}</h2>
            <h3>count : {this.state.count}</h3>
            <p>Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.</p>
            <button onClick={()=>this.handelClick()}>Click me</button>
        </div>
    )
   }
}
export default ClassComp;
