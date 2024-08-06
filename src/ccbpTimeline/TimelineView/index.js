import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView=(props)=>{
    const {timelineItemsList} = props
    console.log("timelineItemsListtttt", timelineItemsList)
    const renderTimelineCard = item => {
        if (item.categoryId === 'PROJECT') {
          return <ProjectTimelineCard key={item.id} projectDetails={item} />
        }
        return <CourseTimelineCard key={item.id} courseDetails={item} />
      }
    return(
        <div>
            <p>MY JOURNY OF</p>
            <h1>CCBP 4.0</h1>

            <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>

        </div>
    )
}
export default TimelineView