import './App.css';
import Expenses from "./components/Expenses";

const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14)
    }, {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2020, 7, 14)
    }, {
        id: 'e3',
        title: 'Car Insurance',
        amount: 115,
        date: new Date(1996, 4, 23)
    }, {
        id: 'e4',
        title: 'New Desk(Wooden)',
        amount: 450,
        date: new Date(1994, 8, 6)
    }];

function App() {
    return (
        <div className="App">
            <h2>Let's gets started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
