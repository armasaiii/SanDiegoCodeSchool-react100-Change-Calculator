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
    let dollars = Math.floor(changeDue)
    let cents = Math.round((changeDue-dollars)*100)
    let quarter = Math.floor(cents/25)    
    let dime = Math.floor(cents/10)
    let nickel = Math.floor(cents/5)
    let penny = Math.floor(cents/1)
    console.log(changeDue, cents, quarter, dime, nickel, penny)
    this.setState ({
      changeDue: changeDue,
      twenties: (Math.floor(changeDue / 20).toFixed(2)),
      tens: (Math.floor((changeDue / 10) % 2).toFixed(2)),
      fives: (Math.floor((changeDue / 5) % 2).toFixed(2)),
      ones: (Math.floor(changeDue % 5).toFixed(2)),
      quarters: quarter,
      dimes: cents - dime * 10,
      nickels: cents - nickel * 5,
      pennies: cents - penny * 1,
})
// console.log(twenties)
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
        <label className='cd'>
          Your total change due is ${this.state.changeDue}
        </label>
        <hr/>
    </div>

    <div className='row'>
        <div className='col-md-2'>
          <h4>Twenties</h4>
            <p type='number' className='twenties'>{this.state.twenties}</p>
        </div>

        <div className='col-md-2'>
          <h4>Tens</h4>
            <p type='number' className='tens'>{this.state.tens}</p>
        </div>

        <div className='col-md-2'>
          <h4>Fives</h4>
            <p type='number' className='fives'>{this.state.fives}</p>
        </div>

        <div className='col-md-2'>
          <h4>Ones</h4>
            <p type='number' className='ones'>{this.state.ones}</p>
        </div>
    </div>

    <div className='row'>
    <div className='col-md-2'>
          <h4>Quarters</h4>
            <p type='number' className='quarters'>{this.state.quarters}</p>
        </div>

        <div className='col-md-2'>
          <h4>Dimes</h4>
            <p type='number' className='dimes'>{this.state.dimes}</p>
        </div>

        <div className='col-md-2'>
          <h4>Nickels</h4>
            <p type='number' className='nickels'>{this.state.nickels}</p>
        </div>

        <div className='col-md-2'>
          <h4>Pennies</h4>
            <p type='number' className='pennies'>{this.state.pennies}</p>
        </div>
    </div>
  </div>
</div>
     )
  }
}

export default App;
