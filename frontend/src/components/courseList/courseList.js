import React from "react";

export default class FetchCourse extends React.Component {
  state = {
    loading: true,
    course: null
  };

  async componentDidMount() {
    const response = await fetch('/showCourse');
    
    const data = await response.json();
    console.log(data);
    this.setState({ course: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.course) {
      return <div>didn't get a person</div>;
    }
    const listItems = this.state.course.map((d) => <li key={d.title}>{d.title}</li>)
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