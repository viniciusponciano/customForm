import React from 'react';
import SearchAppBar from './SearchAppBar';
import MiniDrawerMenu from './MiniDrawerMenu';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

class App extends React.Component {

  state = {
    open: false,
  };

	handleDrawerMenu = () => {
	  const open = !this.state.open;
    this.setState({ open });
  };

	render() {
		return (
			<div>
				<SearchAppBar
          title="Custom Form"
					handleDrawerMenu={this.handleDrawerMenu}
					drawerOpen={this.state.open}
        />
				<MiniDrawerMenu open={this.state.open} handleDrawerMenu={this.handleDrawerMenu}/>
				<div className="appContent">
					<Hello/>
					<Info/>
				</div>
			</div>
		);
	}
}

export default App;
