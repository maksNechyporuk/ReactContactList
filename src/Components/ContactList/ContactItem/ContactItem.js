import React, { Fragment, Component } from "react";
import "./ContactItem.css";
import FontAwesome from "react-fontawesome";
import { NavLink, withRouter } from "react-router-dom";
// import faStyles from "react-fontawesome";
class ContactItem extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    address: this.props.address,
    phone: this.props.phone,
    email: this.props.email,
    gender: this.props.gender,
    avatar: this.props.avatar,
    favorite: this.props.favorite,
  };
  randomInteger = (min, max) => {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  };
  onRandomAvata = () => {
    let randomAvatar = this.randomInteger(1, 99);
    this.setState({
      avatar: randomAvatar,
    });
  };

  render() {
    let {
      name,
      address,
      phone,
      email,
      gender,
      avatar,
      favorite,
      id,
    } = this.state;
    let favoriteClass = ["fa-star-o", "star"];
    if (this.props.favorite) {
      favoriteClass = ["fa-star", "star"];
    }
    const URL = `http://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <img src={URL} alt={name} className="img-responsive img-circle" />
          </div>
          <div className="col-xs-12 col-sm-9">
            <span className="name">
              {name}
              <FontAwesome
                className="fa-trash-o trash"
                name="trash"
                size="2x"
                onClick={this.props.onDeleteContact}
              />
              <FontAwesome
                className={favoriteClass.join(" ")}
                name="star"
                size="2x"
                onClick={this.props.onStar}
              />
              <NavLink
                to={{
                  pathname: `/editcontact`,
                }}
              >
                <FontAwesome
                  className="fa-pencil pencil"
                  name="pencil"
                  size="2x"
                  onClick={this.props.onGetEditContact}
                ></FontAwesome>
              </NavLink>
            </span>
            <span
              className="glyphicon glyphicon-map-marker text-muted c-info"
              data-toggle="tooltip"
              title={address}
            ></span>
            <span>
              <span className="text-muted">{address}</span>
              <br />
            </span>
            <span
              className="glyphicon glyphicon-earphone text-muted c-info"
              data-toggle="tooltip"
              title={phone}
            ></span>
            <span>
              <span className="text-muted">{phone}</span>
              <br />
            </span>
            <span
              className="fa fa-comments text-muted c-info"
              data-toggle="tooltip"
              title={email}
            ></span>
            <span>
              <span className="text-muted">{email}</span>
              <br />
            </span>
            <button className="btn btn-success" onClick={this.onRandomAvata}>
              Random avatar
            </button>
          </div>
          <div className="clearfix"></div>
        </div>
      </li>
    );
  }
}
export default withRouter(ContactItem);
