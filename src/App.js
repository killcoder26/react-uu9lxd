import React from 'react';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  {
    field: 'login',
    headerName: 'Login',
    width: 150,
  },
  {
    field: 'node_id',
    headerName: 'Node ID',
    width: 150,
  },
  {
    field: 'avatar_url',
    headerName: 'Avatar',
    width: 40,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 50,
  },
];

export default function App() {
  const [fetch, setFetch] = useState([]);
  const [page, setPageSize] = useState(5);
  axios.get(`https://hiring.bajajfinservhealth.in/api/renderMe`).then((res) => {
    const data = res.data;
    console.log(res);
    setFetch(data);
  });
  console.log(fetch);
  //CORS ERROR IN API

  return;
  <div>
    <h1>BAJAJ FINSERV DETAILS</h1>
    <DataGrid
      rows={fetch}
      columns={columns}
      pageSize={5}
      pagination
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 15]}
    />
  </div>;
}
