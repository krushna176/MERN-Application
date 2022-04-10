import React from "react";

export default class FetchUser extends React.Component {
  state = {
    loading: true,
    user: null
  };

  async componentDidMount() {
    const response = await fetch('/user');
    
    const data = await response.json();
    console.log(data);
    this.setState({ user: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.user) {
      return <div>didn't get a person</div>;
    }
    const listItems = this.state.user.map((d) => <li key={d.name}>{d.name}</li>)
    return (
      <div>
        <div>{listItems}</div>
        {/* <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} /> */}
      </div>
    );
  }
}