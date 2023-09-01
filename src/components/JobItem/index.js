import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItem  = props => {
  const {item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = item
  return (
    <>
      <Link to={`/jobs/${id}`} className="link">
        <li className="job-item-container">
          <div className="part-container">
            <div className="second-container">
              <img 
                className="company-logo"
                src={companyLogoUrl}
                alt="company logo"
              />
              <div className="title-rating-container">
                <h className="title-heading">{title}</h>
                <div className="star-rating-container">
                  <AiFillStar className="star-icon" />
                  <p className="rating-text">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-container">
              <div className="job-type-container">
                <div className="icon-container">
                  <MdLocationOn className="location-icon" />
                  <p className="location">{location}</p>
                </div>
                <div className="employment-type-container">
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>
              <div>
                <p className="job-type">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr className="item-hr-line" />
          <div className="second-part-container">
            <h1 className="description-heading">Description</h1>
            <p className="description-para">{jobDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobItem
