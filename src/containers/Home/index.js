import React from 'react';
import {connect} from 'react-redux';
import {set_data} from '../../store/action'
class Home extends React.Component{
    render(){
        console.log('props===>',this.props);
        return(
            <div>
                <h2>Home</h2>
                <button onClick={()=>this.props.set_data()}>Set Data</button>
            </div>
        );
    };
};

//----------------- get data from global state
const mapStateToProps = (state)=>({
    usr: state.users
})
//----------------- set data in global state
const mapDispatchToProps = (dispatch) => ({
    set_data: ()=> dispatch(set_data())
})


export default connect(mapStateToProps,mapDispatchToProps)(Home) ;