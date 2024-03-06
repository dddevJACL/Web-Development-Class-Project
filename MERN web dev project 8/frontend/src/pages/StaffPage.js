import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";

function StaffPage() {
  const [results, implementResults] = useState([]);
  const getRandomStaffResults = () => {
    fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((response) => {
      implementResults(response.results);
    })
    .catch(() => {
      alert("Uh-Oh! It seems like the Random User Generator Server is not working. Please try again.")
    }) 
  }
  return (
    <>
      <h2>Staff</h2>
      <article>
                <p id="staffHeadP">
                    This page randomly generates "staff" members using the <a href="https://randomuser.me/">Random User Generator API</a> 
                </p>
                <button id="fromAPIServer" onClick={getRandomStaffResults} value="add">Add 10 Random Staff</button>
                <h3>Here are the results:</h3>
                <table id="staffTable">
                    <caption id="staffTableHead">Name, email, phone, and location</caption>
                    <thead id="staffTableHead">
                        <tr id="staffTableHead">
                            <th>Portrait</th>
                            <th>Name and Email</th>
                            <th>Phone #</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="fromRandomJS">
                    {results.map((onePerson, indexOf) => <StaffRow randomIndividual={onePerson} key={indexOf} />)}
                    </tbody>
                </table>
            </article>
    </>
  );
}

export default StaffPage;