import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
    };
      this.handleAmountDue = this.handleAmountDue.bind(this)
      this.handleAmountReceived = this.handleAmountReceived.bind(this)
      this.calculate = this.calculate.bind(this)
  }

  handleAmountDue(event) {
    this.setState({amountDue: event.target.value})
    }

  handleAmountReceived(event) {
    this.setState({amountReceived: event.target.value})
    }
    
  calculate() {
    let amountDue = (this.state.amountDue);
    let amountReceived = (this.state.amountReceived)
    let changeDue = (amountReceived - amountDue).toFixed(2)
    // let changeDue = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    console.log(changeDue)
    this.setState ({

      twenty: (Math.floor(changeDue / 20).toFixed(2)),
      
      tens: (Math.floor((changeDue / 10) % 2).toFixed(2)),
      // fives: (Math.floor((changeDue / 5) % 2).toFixed(2)),
      // ones: (Math.floor(changeDue % 5).toFixed(2)),
      // quarters: (Math.floor((changeDue * 100) / .25).toFixed(2)),
      // dimes: (Math.floor((changeDue * 100) / .10).toFixed(2)),
      // nickels: (Math.floor((changeDue * 100) / .5).toFixed(2)),
      // pennies: (Math.floor(changeDue * 100) / 0.01).toFixed(2)
})
}

  render() {
    return (
  <div>
    <div className='container-fluid'>
      <h1 className='text-center'>Change Calculator</h1>

        <div className='row'></div>
        <div className='col-sm-4'></div>
        <div className='panel panel-default'></div>
      
        <div className='panel-body'> How much is due?</div>
          <input className='amountDue'
            type='number'
            onChange={this.handleAmountDue}
            value={this.state.amountDue}
            />
      <br/>
        <div className='panel-body'> How much was received?</div>
          <input className='amountReceived'
            type='number'
            onChange={this.handleAmountReceived}
            value={this.state.amountReceived}
            />        
      <br/><br/>
        <div className='panel-footer'>
          <button className='btn btn-default btn-block' 
            type='button' name='calculate' onClick={this.calculate}>
              Calculate!
          </button>
        </div>
      </div>
      
  <div className='container'>
    <div className="row">
        <label>
          Your total change due is..
        </label>
            <p 
              className='changeDue' 
              onChange={this.handleChangeDue}
              value={this.state.changeDue}>
                {this.state.changeDue}
                </p>
        <hr/>
    </div>

    <div className='row'>
        <div className='col-md-2'>
          <h3>Twenties</h3>
            <p type='number' className='twenties'>{this.setState.twenties}</p>
        </div>

        <div className='col-md-2'>
          <h3>Tens</h3>
            <p type='number' className='tens'>{this.setState.tens}</p>
        </div>

        <div className='col-md-2'>
          <h3>Fives</h3>
            <p type='number' className='fives'>{this.setState.fives}</p>
        </div>

        <div className='col-md-2'>
          <h3>Ones</h3>
            <p type='number' className='ones'>{this.setState.ones}</p>
        </div>
    </div>

    <div className='row'>
    <div className='col-md-2'>
          <h3>Quarters</h3>
            <p type='number' className='quarters'>{this.setState.quarters}</p>
        </div>

        <div className='col-md-2'>
          <h3>Dimes</h3>
            <p type='number' className='dimes'>{this.setState.dimes}</p>
        </div>

        <div className='col-md-2'>
          <h3>Nickels</h3>
            <p type='number' className='nickels'>{this.setState.nickels}</p>
        </div>

        <div className='col-md-2'>
          <h3>Pennies</h3>
            <p type='number' className='pennies'>{this.setState.pennies}</p>
        </div>
    </div>
  </div>
</div>
     )
  }
}

export default App;
