<nav>
                <ul>
                </ul>
                <li>
               <a href="/">Home</a>
                <Link to="/">Home</Link>
                
                </li>
                 <li>
                 <Link to="/login">Login</Link>
                 
                </li>
                 <li>
                 <Link to="/registration">Registration</Link>
                 
                </li>
     
                </nav>
                </div>
                <Switch>*/}
                {/*<Router path="/">
                <Home />
                </Router>*/}
                 <Router exact path="/login">
                <Login />
                </Router>
                 {/*<Router path="/registration" component= {Login} />*/}
                </Switch>
                </Router>



                <ul>
                </ul>
                <li>
               <a href="/">Home</a>
                <Link to="/">Home</Link>
                
                </li>
                 <li>
                 <Link to="/login">Login</Link>
                 
                </li>
                 <li>
                 <Link to="/registration">Registration</Link>
                 
                </li>




         Footer = () => {
            return{
                <div>
                <Row>
                <Col sm={4}>
                About Hotel,
                Location
                </Col>
                
                <Col sm={4}>Copyright</Col>
                
                <Col sm={4}>Map</Col>

                </Row></div>
            }
        }


        //for login render(){
    return(
        <div>
    <form>
    <label>
    Username:
    <input type="text" />
    </label>
    <label>
    Password:
    </label>
    <input type="password" / > 
    {/*<input type="submit" />*/}
    < Button label="Save" />
    </form>
    </div>
        )

