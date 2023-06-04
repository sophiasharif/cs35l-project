import React from 'react';
import '../styles/Matches.css';

function NoMatch () {
  return(
    <tr>
      <td colSpan={3}>
        Looking for matches. . . 
      </td>
    </tr>
  );
}

export default NoMatch;