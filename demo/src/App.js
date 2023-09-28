
import "./App.css";
import Expenses from './components/Expenses';

function App(){
    let expenses=[
        {
            id:'e1',
            title:"school fees",
            amount:250,
            date:new Date(2021,5,12)

        },
        {
            id:'e2',
            title:"book",
            amount:300,
            date:new Date(2021,2,22)
        },
        {
            id:'e3',
            title:"house rent",
            amount:700,
            date:new Date(2021,4,2)
        },
        {
            id:'e4',
            title:"food",
            amount:540,
            date:new Date(2021,5,5)
        }
      
    ];

    return(
        <div>
            <h1>let starts</h1>
            <Expenses item={expenses}></Expenses>
         </div>
         
    )
}
export default App;