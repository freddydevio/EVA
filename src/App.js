import React, {Component} from 'react';
import FrontendRouter from './routes/frontend/FrontendRouter';
import './styles/app/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FrontendRouter/>
            </div>
        );
    }
}

export default App;
