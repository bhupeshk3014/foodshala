import React, { Component } from "react";
import CardList from "../components/CardList/CardList";
import MenuList from "../components/Menu/MenuList";
import SearchBox from "../components/SearchBox/SearchBox";
import RLogin from "../components/RLogin/RLogin";
import Order from "../components/Order/Order";
import Scroll from "../components/Scroll/Scroll";
import ScrollMenu from "../components/Scroll/ScrollMenu";
import ViewOrderList from "../components/ViewOrder/ViewOrderList";
import Navigation from "../components/Navigation/Navigation";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import RegisterC from "../components/Register/RegisterC";
import RegisterR from "../components/Register/RegisterR";
import "./App.css";
import Logo from "../components/Logo/Logo";
import AddMenu from "../components/AddMenu/AddMenu";
import SigninC from "../components/Signin/SigninC";
import SigninR from "../components/Signin/SigninR";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      orderlist: [],
      searchfield: "",
      route: "home",
      isSignedIn: false,
      isSignedInR: false,
      customer: {
        id: "",
        name: "",
        email: "",
        address: "",
        pnumber: "",
        preference: "",
        joined: ""
      },
      restaurant: {
        id: "",
        name: "",
        email: "",
        rname: "",
        address: "",
        pnumber: "",
        cuisines: "",
        cf2: "",
        tfrom: "",
        tto: "",
        joined: ""
      },
      starterMenu: [],
      beveragesMenu: [],
      mainCourseMenu: []
    };
  }

  loadCustomer = customer => {
    this.setState({
      customer: {
        id: customer.customer_id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        pnumber: customer.pnumber,
        preference: customer.preference,
        joined: customer.joined
      }
    });
  };

  loadRestaurant = restaurant => {
    this.setState({
      restaurant: {
        id: restaurant.restaurant_id,
        name: restaurant.name,
        email: restaurant.email,
        rname: restaurant.rname,
        address: restaurant.address,
        pnumber: restaurant.pnumber,
        cuisines: restaurant.cuisines,
        cf2: restaurant.cf2,
        tfrom: restaurant.tfrom,
        tto: restaurant.tto,
        joined: restaurant.joined
      }
    });
  };

  loadStarter = starter => {
    this.setState({ starterMenu: starter });
  };

  loadMainCourse = maincourse => {
    this.setState({ mainCourseMenu: maincourse });
  };

  loadBeverages = beverages => {
    this.setState({ beveragesMenu: beverages });
  };

  loadOrderList = orderlist => {
    this.setState({ orderlist: orderlist });
  };

  componentDidMount() {
    fetch("http://localhost:3000/restaurant")
      .then(response => {
        return response.json();
      })
      .then(restaurant => {
        this.setState({ restaurants: restaurant });
      });

    // this.setState({ orderlist: orderlist });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  onRouteChange = (route, id) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false, isSignedInR: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "restauranthome") {
      this.setState({ isSignedInR: true });
    } else if (route === "menu") {
      this.setState({
        restaurant: {
          id: id
        }
      });
    }
    this.setState({ route: route });
  };

  render() {
    const {
      restaurants,
      searchfield,
      isSignedIn,
      isSignedInR,
      restaurant,
      orderlist,
      route,
      customer,
      mainCourseMenu,
      starterMenu,
      beveragesMenu
    } = this.state;
    const filteredRestaurants = restaurants.filter(restaurant => {
      return restaurant.rname.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !restaurants.length ? (
      <h1 className="ml4">Loading....</h1>
    ) : (
      <div>
        <div className="navigation">
          <Logo />
          <Navigation
            customername={this.state.customer.name}
            restownername={this.state.restaurant.name}
            isSignedIn={isSignedIn}
            isSignedInR={isSignedInR}
            onRouteChange={this.onRouteChange}
          />
        </div>
        {route === "home" ? (
          <div>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList
                loadBeverages={this.loadBeverages}
                loadMainCourse={this.loadMainCourse}
                loadStarter={this.loadStarter}
                restaurants={filteredRestaurants}
                onRouteChange={this.onRouteChange}
              />
            </Scroll>
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : route === "registerc" ? (
          <RegisterC
            loadCustomer={this.loadCustomer}
            onRouteChange={this.onRouteChange}
          />
        ) : route === "registerr" ? (
          <RegisterR
            loadRestaurant={this.loadRestaurant}
            onRouteChange={this.onRouteChange}
          />
        ) : route === "menu" ? (
          <div>
            <ScrollMenu
              rest_id={restaurant.id}
              cust_id={customer.id}
              name={customer.name}
              isSignedIn={isSignedIn}
              onRouteChange={this.onRouteChange}
            >
              <MenuList
                isSignedIn={isSignedIn}
                starterMenu={starterMenu}
                beveragesMenu={beveragesMenu}
                mainCourseMenu={mainCourseMenu}
                cust_id={customer.id}
                rest_id={restaurant.id}
              />
            </ScrollMenu>
          </div>
        ) : route === "order" ? (
          <Order />
        ) : route === "restauranthome" ? (
          <RLogin
            loadOrderList={this.loadOrderList}
            rname={restaurant.rname}
            rest_id={restaurant.id}
            onRouteChange={this.onRouteChange}
          />
        ) : route === "vieworder" ? (
          <Scroll>
            <ViewOrderList rest_id={restaurant.id} orderlist={orderlist} />
          </Scroll>
        ) : route === "addmenu" ? (
          <AddMenu rest_id={restaurant.id} onRouteChange={this.onRouteChange} />
        ) : route === "signinc" ? (
          <SigninC
            loadCustomer={this.loadCustomer}
            onRouteChange={this.onRouteChange}
          />
        ) : route === "signinr" ? (
          <SigninR
            loadRestaurant={this.loadRestaurant}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
