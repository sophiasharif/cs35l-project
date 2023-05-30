import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Matches.css';

function Match (props) {
  return(
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.email}
      </td>
      <td>
        {props.compscore}
      </td>
    </tr>
  );
}

export default Match;