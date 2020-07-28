import React from 'react';

class ProjectDescription extends React.Component {
  render = () => {
    return <div className="project-description">
      <h1>{this.props.name}</h1>
      <h2>{this.props.technologies}</h2>
      <h3><a target="_blank" href={this.props.liveLink}>Live Link</a></h3>
      <h3><a target="_blank" href={this.props.gitHubLink}>GitHub Repo</a></h3>
      <p>{this.props.projectInfo}</p>
    </div>
  }
}


export default ProjectDescription
