import React, { useState, Component } from 'react';
import '../App.css';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'write your guess here'
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event_) {
        event_.preventDefault();
    };

    Render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Answer:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    };
};

export default MainForm;