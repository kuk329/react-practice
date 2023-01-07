function MovieDetail({ title, image, rating, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h5>{rating}</h5>
      <div>{description}</div>
    </div>
  );
}

export default MovieDetail;
