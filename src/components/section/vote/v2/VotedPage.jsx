// src/components/VotedPage.jsx
import React from 'react';

const VotedPage = ({ votedProjects }) => {
  return (
    <div>
      <h2>Voted Projects</h2>
      <ul>
        {votedProjects.map((votedProject, index) => (
          <li key={index}>
            Project ID: {votedProject.projectId}, Vote: {votedProject.vote}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotedPage;
