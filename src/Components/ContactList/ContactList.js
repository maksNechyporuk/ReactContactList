import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";

import ContactItem from "./ContactItem/ContactItem";
export default function ContactList({
  list,
  onStar,
  onDeleteContact,
  onGetEditContact
}) {
  const singleContact = list.map(item => {
    return (
      <ContactItem
        id={item.id}
        key={item.id}
        contact={item}
        name={item.name}
        phone={item.phone}
        email={item.email}
        address={item.address}
        gender={item.gender}
        avatar={item.avatar}
        favorite={item.favorite}
        onStar={() => onStar(item.id)}
        onDeleteContact={() => onDeleteContact(item.id)}
        onGetEditContact={() => onGetEditContact(item.id)}
      />
    );
  });
  return (
    <Fragment>
      <div className="panel panel-default">
        <div className="panel-heading c-list">
          <span className="title">Contacts</span>
          <ul className="pull-right c-controls">
            <li>
              <Link
                to="/addcontact"
                data-toggle="tooltip"
                data-placement="top"
                title="Add Contact"
              >
                <i className="glyphicon glyphicon-plus"></i>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hide-search"
                data-command="toggle-search"
                data-toggle="tooltip"
                data-placement="top"
                title="Toggle Search"
              >
                <i className="fa fa-ellipsis-v"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="list-group" id="contact-list">
          {singleContact}
        </ul>
      </div>
    </Fragment>
  );
}
