import axios from 'axios';
import React from 'react';
import Nav from '../NavBar/Nav';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            collapsed: true,
            total: [],
            single: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`)
        .then((response) => {
            console.log(response.data.coins)
            this.setState({
                total: response.data.coins,
                single: response.data.coins[0]
                
            })
            console.log(response.data.coins[0])
        })
  }
        
        toggleNav() {
            this.setState({
                collapsed: !this.state.collapsed
            });
        }
    
    render () {
    
    return (
        <div>
            <Nav  onClick={this.toggleNav}/>
        </div>
    );
}
}
export default Header;