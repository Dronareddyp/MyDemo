
// import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
    const {projectDetails} = props
    const {
      imageUrl,
      projectTitle,
      description,
      projectUrl,
      duration,
    } = projectDetails

    return(
        <div>
            <img src={imageUrl} alt="project" name="project"/>
            <div>
                <p>{projectTitle}</p>
                <div>
                {/* <AiFillCalendar color="#171f46" /> */}
                <p>{duration}</p>
                </div>
            </div>
            <p>{description}</p>
            <a href={projectUrl}>Visit</a>
        </div>

    )
}

export default ProjectTimelineCard