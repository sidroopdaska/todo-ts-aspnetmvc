import * as React from 'react';
import { ITodoItem } from './models/todoItem';
import * as TodoApi from './api/todoApi';
import './styles/app.css';

interface IAppProps { }

interface IAppState {
    todoItems: Array<ITodoItem>;
    isLoading: boolean;
    textInputValue: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        // Initial default App state
        this.state = {
            todoItems: [],
            isLoading: true,
            textInputValue: ''
        };
    }

    public componentWillMount() {
        // Perform a GET request to fetch all the Todo Items from the server
        TodoApi.getAllTodoItems()
            .then((items) => {
                // Update the App State
                this.setState({
                    ...this.state,
                    todoItems: items,
                    isLoading: false
                });
            });
    }

    public renderTodoItems = () => {
        let items: JSX.Element[] = [];

        this.state.todoItems.forEach((item, idx) => {
            items.push(<li key={idx}>{item.name}</li>);
        });

        return (
            <div>
                <h2>Your Todo Items:</h2>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }

    public submitOnClick = () => {
        // Perform a POST request to add a new todo item in the database
        this.setState({
            ...this.state,
            isLoading: true
        });

        TodoApi.postNewTodoItem(this.state.textInputValue)
            .then((item) => {
                let newTodoItems = this.state.todoItems;
                newTodoItems.push(item);
                // Update the App State
                this.setState({
                    ...this.state,
                    todoItems: newTodoItems,
                    isLoading: false,
                    textInputValue: ''
                });
            });
    }

    public textFieldOnChange = (event: any) => {
        this.setState({
            ...this.state,
            textInputValue: event.target.value
        })
    }

    public renderFormToCreateNewItem = () => {
        return (
            <div>
                <h2>Create  item:</h2>
                <input
                    type="text"
                    name="firstname"
                    onChange={this.textFieldOnChange}
                    value={this.state.textInputValue}
                />
                <button
                    onClick={this.submitOnClick}
                    disabled={this.state.isLoading}
                >
                    Submit
                </button>
            </div>
        );
    }

    public render() {
        return (
            <div className='container'>
                <div>
                    {this.state.isLoading && "Loading, please wait..."}
                </div>
                {
                    this.renderFormToCreateNewItem()
                }
                {
                    this.state.todoItems.length > 0
                    && this.renderTodoItems()
                }

                <br />
                <br />

            </div>
        );
    }
}