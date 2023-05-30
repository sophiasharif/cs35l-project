import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Matches.css';

function Match (props) {

  if (props.compscore != 0) {
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
  else {
    return(
      <tr>
        <td colSpan={3}>
          No match found.  Check back later!
        </td>
      </tr>
    );
  }
}

export default Match;