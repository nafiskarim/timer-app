var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink activeClassName='active-ink' to="/">Timer</IndexLink>
            </li>
            <li>
              <Link activeClassName='active-link' to="/countdown">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="" target="_blank">newBorn</a></li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
