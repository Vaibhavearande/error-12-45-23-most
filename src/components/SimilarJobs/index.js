import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
    } = similarJobData

    console.log(similarJobData)

  return (
    <li className="similar-product-item">
      <div className="img-container">
        <img
          src={companyLogoUrl}
          className="similar-product-image"
          alt="similar job company logo"
        />
        <div className="similar-product-price-rating-container">
          <h1 className="similar-product-price">{title}</h1>
          <div className="similar-product-rating-container">
            <AiFillStar className="star-job-icon" />
            <p className="similar-product-rating">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-part-">
        <h1 className="job-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </div>
      <div className="location-job-contanier">
        <div className="loaction-type-container">
          <MdLocationOn className="location-job" />
          <p className="location-job">{location}</p>
        </div>
        <div className="employment-job-type-container">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
