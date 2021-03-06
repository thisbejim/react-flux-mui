var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var RaisedButton = mui.RaisedButton;

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'css-framework', text: 'CSS Framework' },
  { route: 'components', text: 'Components' },
];


var LeftNavComponent = React.createClass({
  render: function() {  
    return (
      <div className="left-nav-example">
    <RaisedButton label="Menu" onClick={this._toggle}/>
    <LeftNav ref="nav" docked={false} menuItems={menuItems} />
    </div>
    );
  },
   _toggle: function() {
    this.refs.nav.toggle();
  }
});

module.exports = LeftNavComponent;