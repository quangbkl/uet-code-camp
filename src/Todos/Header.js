import React, {Component} from 'react';
import '../css/Todo_Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Todo_Header">
                <h1>UET Coce Camp</h1>
                <from>
                    <input
                        placeholder="Enter text"
                        value={this.props.input_text}
                        onChange={this.handleOnChange.bind(this)}
                    />
                    <button onClick={this.handleOnClick.bind(this)}>Add</button>
                </from>
            </div>
        );
    }

    handleOnChange(e) {
        const input_text = e.target.value;
        this.props.onClick.onChangeInput(input_text);
    }

    handleOnClick() {
        this.props.onClick.onCreateTodo();
    }
}

export default Header;
