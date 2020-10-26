import React,{useEffect, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'title', headerName: 'Title', width: 70 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'location', headerName: 'Location', width: 130 },
  {
    field: 'company',
    headerName: 'Company',
    // type: 'number',
    width: 90,
  },
  {
    field: 'apply',
    headerName: 'Apply',
    // type: 'number',
    width: 90,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue('firstName') || ''} ${
  //       params.getValue('lastName') || ''
  //     }`,
  // },
];

const rows = [
  { id:1,title: 'ok', type: 'Snow', location: 'Jon', company: 'hi', apply: 'apply' },
 
];

export default function DataTable() {
  const [currentSearch, setCurrentSearch]=([])
  useEffect(() => {
    componentDidMount();
    },[]);

  function componentDidMount() {
    let api_url = 'https://jobs.github.com/positions.json';
  // Now, use JavaScript's native Fetch API to get
  // users list from Github API
  fetch('https://cors-anywhere.herokuapp.com/' + api_url)
  .then(res => {
    // Unfortunately, fetch doesn't send (404 error) into the cache itself
    // You have to send it, as I have done below
    if(res.status >= 400) {
        throw new Error("Server responds with error!");
    }
    return res.json();
  })
  .then(data => {
    console.log(data)
  
  },
  // Note: it's important to handle errors here 
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components
  err => {
  
  }
  );
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
