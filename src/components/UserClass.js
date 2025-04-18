import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      user: {
        name: "dummy",
        login: "dummy",
        bio: "dummy",
      },

      count: 0,
      // countTwo: 1,
    };
    // console.log(this.props.name + "child construtor");
  }
  // this is called only first time when component is rendered
  async componentDidMount() {
    // first consturctor then render is called and after component is rendered the componentdidmount is called
    // console.log(this.props.name + "child didmount");
    const response = await fetch("https://api.github.com/users/sangeethalaxmi");
    const data = await response.json();
    console.log(data);

    this.setState({
      user: data,
    });
  }
  // this is called after each time the component is re-rendered i.e each time some data is updated in component through state
  componentDidUpdate(prevProps, prevState) {
    // if we need to perform some action only if particular state is changed then we can add those logics here
    if (this.state.count != prevState.count) {
      console.log("state count changed so call another api");
    }
    // what if we need to do some other api call if we change user state again we will write if else here and do it

    console.log("component did update");
  }

  // this is called after user leave the component and navigate to another component
  componentWillUnmount() {
    console.log("component uncomount");
  }

  render() {
    // console.log(this.props.name + "child render");
    const { name, login, bio } = this.state?.user;
    console.log(this.state?.user?.login);
    console.log(this.state);
    // const { count } = this.state;
    // const { countTwo } = this.state;

    return (
      <div className="res-card">
        <h2>Name: {name}</h2>
        <h3>Location:{login}</h3>
        <h3>username:{bio}</h3>
        <h4>Count : {this.state.count}</h4>
        <button
          onClick={() =>
            // never update the state directly
            // this.state.count + 1

            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          increment
        </button>
      </div>
    );
  }
}

export default UserClass;

/**
 * component life cycle
 * ----Mounting cycle
 * Constructor (dummy data)
 * render(dummy data)
 *    Render html with dummy data
 * Component Did mount     --> called only once after first time component is rendered -->similar to useEffect with [] dependcy array
 *    <Api clls)
 *    <this.setState-->updates state>
 * ------Update cycle
 * render  (api data)
 * update html with api data
 * componentDidUpdate is called and then ->this is called when ever there is change in state variable and components re-render again -->similar to useEffect without dependency array or useEffect with particular dependency 
 * componentDidunmount --> once we move out from one component to another -->event listerner removing in component,data clean to prevennt memory leaks -->similar to clean up function in useEffect

 */
