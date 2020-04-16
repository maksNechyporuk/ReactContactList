import "bootstrap/dist/css/bootstrap.css";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  Link,
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AddContact from "./AddContact/AddContact";
import EditContact from "./EditContact/EditContact";

import Header from "./Header/Header";
import uuid from "react-uuid";
import NotFound from "./NotFound/NotFound";
import ContactList from "./ContactList/ContactList";
import SearchPanel from "./search-panel/search-panel";
const createHistory = require("history").createBrowserHistory;
class App extends Component {
  state = {
    list: [
      {
        id: uuid(),
        name: "Scott Stevens",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "scott.stevens@example.com",
        gender: "men",
        avatar: 49,
        favorite: false
      },
      {
        id: uuid(),
        name: "Jon Stevens",
        address: "Vidinska 5v",
        phone: "(870) 238-8949",
        email: "Jon.stevens@gmail.com",
        gender: "men",
        avatar: 2,
        favorite: false
      },
      {
        id: uuid(),
        name: "Jon Snow",
        address: "4542 Soborna ",
        phone: "(870) 788-4549",
        email: "Jon.Snow@mail.com",
        gender: "men",
        avatar: 15,
        favorite: true
      }
    ],
    currentContact: "",
    term: ""
  };
  findItem = (list, label) => {
    if (label.length === 0) return list;
    return list.filter(item => {
      return item.name.toLowerCase().indexOf(label.toLowerCase()) > -1;
    });
  };
  onDeleteContact = id => {
    this.setState(({ list }) => {
      let idx = list.findIndex(el => el.id === id);

      let beforeArr = list.slice(0, idx);
      let afterArr = list.slice(idx + 1);

      let newArr = [...beforeArr, ...afterArr];
      return {
        list: newArr
      };
    });
  };
  onGetEditContact = id => {
    const index = this.state.list.findIndex(elem => elem.id === id);
    const currentContact = this.state.list[index];
    console.log(currentContact);
    this.setState({
      currentContact: currentContact
    });
  };
  onEditContact = (
    name,
    address,
    phone,
    avatar,
    email,
    gender,
    favorite,
    id
  ) => {
    const editContact = {
      id: id,
      name: name,
      address: address,
      phone: phone,
      avatar: avatar,
      email: email,
      gender: gender,
      favorite: favorite
    };
    let idx = this.state.list.findIndex(el => el.id === id);
    console.log(this.state.list);
    let beforeArr = this.state.list.slice(0, idx);
    let afterArr = this.state.list.slice(idx + 1);
    let newArr = [...beforeArr, editContact, ...afterArr];
    this.setState({
      list: newArr
    });
  };
  onAddContact = (name, address, phone, avatar, email, gender, favorite) => {
    console.log(name);
    const newContact = {
      id: uuid(),
      name: name,
      address: address,
      phone: phone,
      avatar: avatar,
      email: email,
      gender: gender,
      favorite: favorite
    };
    let list = [...this.state.list, newContact];
    this.setState({
      list: list
    });
  };
  onStar = id => {
    const index = this.state.list.findIndex(elem => elem.id === id);
    let temList = this.state.list.slice();
    temList[index].favorite = !temList[index].favorite;
    this.setState(state => {
      return {
        favorite: !this.temList
      };
    });
  };
  onSetFindText = label => {
    this.setState(({ term }) => {
      return {
        term: label
      };
    });
  };
  render() {
    let { list, term } = this.state;
    const visibleItems = this.findItem(list, term);
    return (
      <Router>
        <Header />
        <div className="container">
          <div className="">
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Fragment>
                    <SearchPanel onSearch={this.onSetFindText} />

                    <ContactList
                      list={visibleItems}
                      onStar={this.onStar}
                      onDeleteContact={this.onDeleteContact}
                      onGetEditContact={this.onGetEditContact}
                    />
                  </Fragment>
                )}
              />
              <Route
                path="/addcontact"
                exact
                render={() => <AddContact onAddContact={this.onAddContact} />}
              ></Route>
              <Route
                path="/editcontact"
                render={() => (
                  <EditContact
                    currentContact={this.state.currentContact}
                    onEditContact={this.onEditContact}
                  />
                )}
              ></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
