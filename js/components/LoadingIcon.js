var React = require('react');

var LoadingIcon = React.createClass({
  render: function(){
    return (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    )
  }
});

module.exports = LoadingIcon;