import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import data from './../api/data';
import Row from './row';
import dateAndTimeTransformer from './../helpers';

const Home = () => {
  const { data: { type, metadata, features } } = data;
  const tableData = features.map(feature => {
    let timeStamp = new Date(feature.properties.time);
    let dateAndTime = dateAndTimeTransformer(timeStamp);
    
    return {
      ...feature.properties,
      id: feature.id,
      time: dateAndTime
    }
  });
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
      cell: row => <Row {...row} />,
    },
    {
      name: 'Magnitude',
      selector: 'mag',
      sortable: true,
    },
    {
      name: 'Time',
      selector: 'time',
      sortable: true,
    },
  ];
  const customStyles = {
    table: {
      style: {
        width: '800px',
        margin: '0 auto'
      }
    },
    rows: {
      style: {
        '&:not(:last-of-type)': {
          borderBottomStyle: 'none',
        },
      }
    },
    headRow: {
      style: {
        borderBottomStyle: 'none',
        '&:nth-of-type(2)': {
          width: '150px'
        }
      },
    },
    headCells:{
      style: {
        justifyContent: 'center',
        '&:nth-of-type(2)': {
          width: '150px'
        }
      },
    },
    cells: {
      style: {
        justifyContent: 'center',
        '&:first-of-type': {
          justifyContent: 'flex-start'
        },
        '&:nth-of-type(2)': {
          width: '150px'
        }
      }
    }
  };
  
  return (
    <div className='content-container'>
      <div className='content-title'>{metadata.title}</div>
      <DataTable 
        data={tableData}
        columns={columns}
        customStyles={customStyles}
        noHeader
      />
    </div>
  )
}

export default Home;