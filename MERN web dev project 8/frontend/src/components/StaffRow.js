import React from 'react';

function StaffRow({randomIndividual}){

    return (
        <tr>
            <td><img src={randomIndividual.picture.thumbnail} alt="A random person's portrait."/> </td>
            <td>
            <a href={`mailto:${randomIndividual.email}`}>
            {randomIndividual.name.first} {randomIndividual.name.last}
            </a>
            </td>
            <td>{randomIndividual.phone}</td>
            <td>{randomIndividual.location.city}</td>
        </tr>
    )

}

export default StaffRow;