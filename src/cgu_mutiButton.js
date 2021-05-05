import Button from '@material-ui/core/Button'
import React from 'react';
import ReactDOM from 'react-dom';

const styleArgument = { fontsize: '100px', color: 'red' };

const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
        output.push(<CounterButton/>)
        return output;
}

class CounterButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {counter:0};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({ counter: this.state.counter+1 });
        console.log(this.state);
    }

    render() {
        var text = this.state.counter;
        return (
        <Button onClick = {this.handleClick}>
        你點了{text}次.</Button>);
    }
}

  ReactDOM.render(
    <CounterButton/>,
    document.getElementById('root')
  );

export default multiButton;