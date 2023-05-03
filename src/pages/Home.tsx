import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="p-5">
        <div id="sidebar">
          <h2>GovBr - Showcase componentes em Reactjs</h2>
          <nav>
            <ul>
              <li>
                <a href={`/datepicker`}>DatePicker</a>
              </li>
              <li>
                <a href={`/select`}>Select</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </div>
    );
  }
}
