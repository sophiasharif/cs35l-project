import React, {useState} from 'react';
import '../styles/Matches.css';

function compatibilityColor (score) {
  if (score >= (8.0/8.0))
    return "#00FF00"
  else if (score >= (7.0/8.0))
    return "#22DD00"
  else if (score >= (6.0/8.0))
    return "#44CC00"
  else if (score >= (5.0/8.0))
    return "#66AA00"
  else if (score >= (4.0/8.0))
    return "#888800"
  else if (score >= (3.0/8.0))
    return "#AA6600"
  else if (score >= (2.0/8.0))
    return "#CC4400"
  else if (score >= (1.0/8.0))
    return "#DD2200"
  else
    return "#FF0000";
}

function Match (props) {
  // Props: name, email, compscore, maxscore, mykey
  const compPercent = (parseInt(props.compscore))/(parseInt(props.maxscore));
  const backgroundcolor = compatibilityColor(compPercent);
  const compatibilityStyle = {
    "background-color": backgroundcolor,
  };

  const friendly = [" pal", " buddy", " friend", "n acquaintance", "n associate"]
  const lazyhash = props.mykey * parseInt(props.name.length*parseInt(props.compscore)+props.email.length*parseInt(props.compscore));

  if (props.compscore != 0) {
    return(
      <tr>
        <td colSpan={2}>
          Need a{friendly[lazyhash % friendly.length]}? Reach out to <span className="name">{props.name}</span> at <span className="email">{props.email}</span>
        </td>
        <td style={compatibilityStyle}>
          You and {props.name} are {(Math.round(compPercent * 100))}% compatible!
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