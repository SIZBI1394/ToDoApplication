import Todorowitems from './components/Todorowitems';
import './App.css';

function App() {

  const Todos = [
    {rowNumber : 1, rowDescription : 'Read book', rowStatus : 'done'},
    {rowNumber : 2, rowDescription : 'Drink water', rowStatus : 'not done'},
    {rowNumber : 3, rowDescription : 'water plants', rowStatus : 'not done'},
  ]

  return (

    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
      </div>
      <div className='card-body'></div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>S. No</th>
            <th scope='col'> Description</th>
            <th scope='col'> Status</th>
          </tr>
        </thead>
        <tbody>
      <Todorowitems 
         rowNumber = {Todos[0].rowNumber}
         rowDescription = {Todos[0].rowDescription}
         rowStatus = {Todos[0].rowStatus}
         />
         <Todorowitems 
         rowNumber = {Todos[1].rowNumber}
         rowDescription = {Todos[1].rowDescription}
         rowStatus = {Todos[1].rowStatus}
         />
         <Todorowitems 
         rowNumber = {Todos[2].rowNumber}
         rowDescription = {Todos[2].rowDescription}
         rowStatus = {Todos[2].rowStatus}
         />
        </tbody>
      </table>


    </div>
  );
}

export default App;
