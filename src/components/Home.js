import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../img/logo.png';
import Menu from './Menu';
import FBLoginButton from './FBLoginButton';
import PublicGameList from './PublicGameList';
import ActiveGames from './ActiveGames';

class Home extends Component {

    render() {
        return (
            <div>
                <h2>Dots and Squares </h2>
                <p className="subtitle has-text-grey">
                   click below to get started
                </p>
                 <div className="subtitle has-text-grey">
                    Hello, {this.props.user.name}
                    <br/>
                    <br/>
                    <FBLoginButton />
                </div>

                <Menu
                    gameStatus={this.props.gameStatus}
                    gameId={this.props.gameId}
                    userId={this.props.user.id}
                />
                <PublicGameList games={this.props.availableGames} />
                <ActiveGames />
        
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gameStatus: state.gameStatus,
    gameId: state.gameId,
    availableGames: state.availableGames,
    user: state.user,
});

export default connect(mapStateToProps)(Home);
