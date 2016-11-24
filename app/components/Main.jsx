var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render(){
//     return(
//       <div>
//         <Nav />
//         <h2>main component</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// });

var Main = (props) => {
  return(
    <div>
      <Nav />
      <div className="row">
        <div className="columns small-12">
          <p>Main.jsx rendered here</p>
          {props.children}
        </div>
      </div>
    </div>
  )
};

module.exports = Main;
