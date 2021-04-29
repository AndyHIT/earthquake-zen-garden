import React from 'react';
import { Link } from 'react-router-dom';

const Row = (row) => {
  return (
    <Link to={{pathname:`/detail/${row.id}`}}>
      {row.place}
    </Link>
  )
}

export default Row;