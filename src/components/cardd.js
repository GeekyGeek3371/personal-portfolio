import React from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cardd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            val: this.props.val,
            head: this.props.hd,
            im: this.props.im,
        }
    }
    render(){
        return(
            <Card style={{ width: '25rem', height: '800px',}}>
                <Card.Img variant="top" src={this.state.im} alt="lol"/>
                <Card.Body>
                <Card.Title>{this.state.head}</Card.Title>
                <Card.Text>
                    {this.state.val}
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Cardd;