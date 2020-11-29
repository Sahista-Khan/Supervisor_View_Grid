import './App.css';
import Header from './Component/Header/Header';
import PaginationHeader from './Component/Pagination/PaginationHeader';

import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './Container/DataTable/DataTable';
import Table from './Component/Table/Table';



function App() {
  return (
    <div className="App">
      <Header />

      <div className="tableBG">
        <DataTable />
      </div>
    </div>
  );
}

export default App;
