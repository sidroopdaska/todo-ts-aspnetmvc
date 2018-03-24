import * as React from 'react';
import { ITodoItem } from './models/todoItem';
import * as TodoApi from  './api/todoApi';

interface IAppProps { }

interface IAppState {
    todoItems: Array<ITodoItem>;
    isLoading: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        // Initial default App state
        this.state = {
            todoItems: [],
            isLoading: true
        };
    }

    public componentWillMount() {
        TodoApi.getAllTodoItems()
            .then((items) => {
                this.setState({
                    ...this.state,
                    todoItems: items,
                    isLoading: false
                });
            });
    }

    public renderTodoItems = () => {
        return this.state.todoItems.map((item, idx) => {
            return <div key={idx}>{item.name}</div>;
        });
    }

    public render() {
        return (
            <div>
                <div>
                    {this.state.isLoading && "Loading, please wait..."}
                </div>

                {this.state.todoItems.length > 0 && this.renderTodoItems()}
            </div>
        );
    }
}