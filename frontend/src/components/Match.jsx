import React, {useState} from 'react';
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
          Looking for matches. . . 
        </td>
      </tr>
    );
  }
}

export default Match;