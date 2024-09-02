import image from "../assets/img.jpg"

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-4 mx-5 px-2 py-2" style={{maxWidth:"280px"}}>
  <img src={src?src:image}  style={{height:"215px",width:"260px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"for more news click on read more"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
