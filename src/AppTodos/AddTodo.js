import React from "react";

class AddTodo extends React.Component {
    state = {
        text: "",
    };

    handleinputadd = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    handleclickbutton = () => {
        if (!this.state.text) {
            alert("Nhập công việc");
        }
        if (this.state.text) {
            let todo = {
                id: Math.floor(Math.random() * 100),
                text: this.state.text,
            };
            this.props.Addnewtodo(todo);
            this.setState({
                text: "",
            });
        }
    };

    onKeyUp = (event) => {
        if (event.key === "Enter") {
            if (!this.state.text) {
                alert("Nhập công việc");
            }
            if (this.state.text) {
                let todo = {
                    id: Math.floor(Math.random() * 100),
                    text: this.state.text,
                };
                this.props.Addnewtodo(todo);
                this.setState({
                    text: "",
                });
            }
        }
    };

    render() {
        let { text } = this.state;
        return ( <
            div >
            <
            input value = { text }
            onChange = {
                (event) => {
                    this.handleinputadd(event);
                }
            }
            onKeyPress = { this.onKeyUp }
            />{" "} <
            button onClick = {
                () => {
                    this.handleclickbutton();
                }
            } >
            { " " }
            Add { " " } <
            /button>{" "} <
            /div>
        );
    }
}

export default AddTodo;