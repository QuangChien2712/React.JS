import React from "react";
import AddTodo from "./AddTodo";

class ListTodos extends React.Component {
    state = {
        listtodos: [
            { id: 3, text: "Chien" },
            { id: 4, text: "Quỳnh" },
        ],
        todoeditobj: [],
        todoedit: "",
        hiddenbtn: false,
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

    handleEdit = (idb) => {
        let objedit = this.state.listtodos.filter((item) => item.id === idb);
        let textedit = objedit[0].text;
        this.setState({
            todoeditobj: objedit,
            todoedit: textedit,
            hiddenbtn: true,
        });
    };

    handlechangeedit = (event) => {
        let textedit = event.target.value;
        if (!textedit) {
            alert("Nhập công việc");
        }
        if (textedit) {
            this.setState({
                todoedit: textedit,
            });
        }
    };

    handlesave = (index) => {
        let todoafter = {
            id: this.state.listtodos[index].id,
            text: this.state.todoedit,
        };
        let list = this.state.listtodos;
        list.splice(index, 1, todoafter);
        this.setState({
            listtodos: list,
            hiddenbtn: false,
        });
    };

    render() {
        console.log(this.state);
        let { listtodos, todoeditobj, todoedit, hiddenbtn } = this.state;
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
                                isEmpty === false &&
                                    todoeditobj[0].id === item.id &&
                                    hiddenbtn === true ? ( <
                                        span > { " " } { index + 1 } - { " " } <
                                        input value = { todoedit }
                                        onChange = {
                                            (event) => {
                                                this.handlechangeedit(event);
                                            }
                                        }
                                        />{" "} <
                                        /span>
                                    ) : ( <
                                        > { " " } <
                                        span > { " " } { index + 1 } - { item.text } { " " } <
                                        /span>{" "} <
                                        />
                                    )
                            } { " " } <
                            button hidden = {!this.state.hiddenbtn }
                            onClick = {
                                () => {
                                    this.handlesave(index);
                                }
                            } >
                            { " " }
                            Save { " " } <
                            /button>{" "} <
                            button onClick = {
                                () => {
                                    this.handleEdit(item.id);
                                }
                            }
                            hidden = { this.state.hiddenbtn } >
                            Edit { " " } <
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