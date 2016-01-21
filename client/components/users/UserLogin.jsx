/* global UserLogin */
UserLogin = React.createClass({
  displayName: "UserLogin",
  mixins: [],
  propTypes: {},
  getDefaultProps(){
    return {};
  },
  statics: {
    returnFalse(){
      return false;
    }
  },
  getInitialState(){
    return {};
  },
  componentWillMount(){
  },
  componentDidMount(){
  },
  componentWillReceiveProps(nextProps){
  },
  shouldComponentUpdate(nextProps, nextState){
    return true;
  },
  componentWillUpdate(nextProps, nextState){
  },
  componentDidUpdate(prevProps, prevState){
  },
  componentWillUnmount(){
  },
  onSubmit(event){
    event.preventDefault();
    var self=this;
    var email = $(event.target).find("[name=email]").val();
    var pass = $(event.target).find("[name=password]").val();
    Meteor.loginWithPassword(email,pass, function(err){
      if (err) {
        console.log(err.reason);
      }else{
        FlowRouter.go('Home');
      }
    });
  },
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Login</h1>
            <form onSubmit={ this.onSubmit }>
              <input type="text" name="email" placeholder="Enter email..." className="form-control"/>
              <input type="password" name="password" placeholder="Enter password..." className="form-control"/>
              <input type="submit" value="Login" className="btn btn-default"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
