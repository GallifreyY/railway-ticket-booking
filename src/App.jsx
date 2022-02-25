const initialTravelers = [
];

class Instructions extends React.Component {
  render() { //render is a constructor
    return (
      <div>Please input your name and phone number to complete the ticket booking.</div>
    );
  }
}

class TravellerRow extends React.Component {
  render() {
    const traveller = this.props.traveller;
    return (
      <tr>
        <td>{traveller.id}</td>
        <td>{traveller.status}</td>
        <td>{traveller.name}</td>
        <td>{traveller.created.toDateString()}</td>
        <td>{traveller.number}</td>
      </tr>
    );
  }
}

class DisplayTraveller extends React.Component {
  render() {
    const travellerRows = this.props.travellers.map(traveller =>
      <TravellerRow key={traveller.id} traveller={traveller} />
    );

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Name</th>
            <th>Created</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {travellerRows}
        </tbody>
      </table>
    );
  }
}

class AddTraveller extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.addTraveller;
    const traveller = {
      name: form.name.value, number: form.number.value, status: 'New',
    }
    this.props.createTraveller(traveller);
    form.name.value = ""; form.number.value = "";
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="number" placeholder="number" />
        <button>Add</button>
      </form>
    );
  }
}

class DeleteTraveller extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const form = document.forms.deleteTraveller;
    const traveller = {
      id: form.id.value
    }
    this.props.deleteTraveller(traveller);
    form.id.value = "";
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleDelete}>
        <input type="text" name="id" placeholder="id" />
        <button>Delete</button>
      </form>
    );
  }
}

class TravellerList extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [] };
    this.createTraveller = this.createTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravelers });
    }, 500);
  }

  createTraveller(traveller) {
    if (this.state.travellers.length < 25) {
      traveller.id = this.state.travellers.length + 1;
      traveller.created = new Date();
      const newTravellerList = this.state.travellers.slice();
      newTravellerList.push(traveller);
      this.setState({ travellers: newTravellerList });
    }
  }

  deleteTraveller(traveller) {
    //copy array
    var newAray = this.state.travellers.slice();
    //delete element by index
    newAray.splice(traveller.id - 1, 1);
    for (var i = traveller.id - 1; i < newAray.length; i++) {
      newAray[i].id = newAray[i].id - 1;
    }
    this.setState({travellers: newAray});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Railway Ticket System</h1>
        <Instructions />
        <hr />
        <DisplayTraveller travellers={this.state.travellers} />
        <hr />
        <AddTraveller createTraveller={this.createTraveller} />
        <hr />
        <DeleteTraveller deleteTraveller={this.deleteTraveller}/>

      </React.Fragment>
    );
  }
}

const element = <TravellerList />;

ReactDOM.render(element, document.getElementById('contents'));
