import React from "react";
import AddTodo from "./AddTodo";

class ListTodos extends React.Component {
    state = {
        listtodos: [],
        todoeditobj: [],
        todoedit: "",
    };

    addnewtodo = (todo) => {
        this.setState({
            listtodos: [...this.state.listtodos, todo],
        });
    };

    handleDelete = (id) => {
        let newlisttodos = this.state.listtodos.filter((item) => item.id !== id);
        this.setState({
            listtodos: newlisttodos,
        });
    };

    handleEdit = (id, index) => {
        let objedit = this.state.listtodos.filter((item) => item.id === id);
        let textedit = objedit[0].text;
        this.setState({
            todoeditobj: objedit,
            todoedit: textedit,
        });

        let isEmpty = Object.keys(this.state.todoedit).length === 0;
        if (isEmpty === false && objedit[0].id === id) {
            let todoafter = {
                id: id,
                text: this.state.todoedit,
            };
            let list = [...this.state.listtodos];
            list.splice(index, 1, todoafter);
            this.setState({
                listtodos: list,
                todoedit: {},
            });
            // return;
        }
    };

    handlechangeedit = (event, index) => {
        let textedit = event.target.value;
        if (!textedit) {
            alert("Nhập công việc");
        } else {
            this.setState({
                todoedit: textedit,
            });
        }
    };
    render() {
        console.log(this.state);
        let { listtodos, todoeditobj, todoedit } = this.state;
        let isEmpty = Object.keys(todoedit).length === 0;
        return ( <
            div >
            <
            AddTodo Addnewtodo = { this.addnewtodo }
            />{" "} <
            div > { " " } {
                listtodos &&
                    listtodos.length > 0 &&
                    listtodos.map((item, index) => {
                        return ( <
                            div key = { item.id } > { " " } {
                                isEmpty === false && todoeditobj[0].id === item.id ? ( <
                                    span > { " " } { index + 1 } -
                                    <
                                    input value = { todoedit }
                                    onChange = {
                                        (event) => {
                                            this.handlechangeedit(event, index);
                                        }
                                    }
                                    />{" "} <
                                    /span>
                                ) : ( <
                                    >
                                    <
                                    span > { " " } { index + 1 } - { item.text } { " " } <
                                    /span>{" "} <
                                    />
                                )
                            } { " " } <
                            button onClick = {
                                () => {
                                    this.handleEdit(item.id, index);
                                }
                            } >
                            {
                                isEmpty === false && todoeditobj[0].id === item.id ?
                                "Save" :
                                    "Edit"
                            } { " " } <
                            /button>{" "} <
                            button onClick = {
                                () => {
                                    this.handleDelete(item.id);
                                }
                            } >
                            Delete { " " } <
                            /button>{" "} <
                            /div>
                        );
                    })
            } { " " } <
            /div>{" "} <
            /div>
        );
    }
}

export default ListTodos;