// src/components/VotePage.jsx
import React, { useState } from 'react';
import VotedPage from './VotedPage';
import Button from '../../../../common/button';
import { styles, buttonStyles } from './VotePage.style';

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' },
];

const VotePage = () => {
  const [currentPage, setCurrentPage] = useState('vote');
  const [votedProjects, setVotedProjects] = useState([]);

  const voteHandler = (projectId, vote) => {
    const updatedVotedProjects = [...votedProjects, { projectId, vote }];
    setVotedProjects(updatedVotedProjects);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{currentPage === 'vote' ? 'Vote for Projects' : 'Voted Projects'}</h2>
      {currentPage === 'vote' && (
        <div>
          <ul style={styles.projectList}>
            {projects.map((project) => (
              <li key={project.id} style={styles.projectListItem}>
                {project.name} -{' '}
                <div style={styles.voteButtons}>
                <Button style={buttonStyles.customButton} onClick={() => voteHandler(project.id, 'yes')}>Yes</Button>{' '}
                <Button style={buttonStyles.customButton} onClick={() => voteHandler(project.id, 'no')}>No</Button>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.voteButtons}>
            <Button style={buttonStyles.customButton} onClick={() => setCurrentPage('voted')}>Go to Voted Page</Button>
          </div>
        </div>
      )}
      {currentPage === 'voted' && <VotedPage votedProjects={votedProjects} />}
      <div style={styles.radioButtons}>
        <label>
          <input
            type="radio"
            value="vote"
            checked={currentPage === 'vote'}
            onChange={() => setCurrentPage('vote')}
          />
          Vote
        </label>
        <label>
          <input
            type="radio"
            value="voted"
            checked={currentPage === 'voted'}
            onChange={() => setCurrentPage('voted')}
          />
          Voted
        </label>
      </div>
    </div>
  );
};

export default VotePage;
