import "./../../styles/styles.css";

const ProjectTwo = ({title, img, link}) => {
    return (
      // <div className="carousel-item">
      //   <br/>
      //   {title}<br/>
      //   <img src={img} className="image-w-90" alt="..." />
      //   <br/>
      //   <a target="_blank" href={link} rel="noreferrer">{link}</a>
      //   <br/><br/>
      // </div>
      <div className="wrapper">
	<div className="card">
		<div className="poster"><img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Location Unknown"/></div>
		<div className="details">
			<h1>Location Unknown</h1>
			<h2>2021 • PG • 1hr 38min</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span>4.2/5</span>
			</div>
			<div className="tags">
				<span className="tag">Italian</span>
				<span className="tag">Drama</span>
				<span className="tag">Indie</span>
			</div>
			<p className="desc">
				Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews"/></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd"/></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg
" alt="Antonio Herrera" title="Antonio Herrera"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="card">
		<div className="poster"><img src="https://i.postimg.cc/GtxLYS7q/poster2-img.jpg" alt="Location Unknown"/></div>
		<div className="details">
			<h1>Air</h1>
			<h2>2020 • PG • 24min</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span>4/5</span>
			</div>
			<div className="tags">
				<span className="tag">Romance</span>
				<span className="tag">Comedy</span>
				<span className="tag">Short</span>
			</div>
			<p className="desc">
				Two strangers meet together on a plane flying to the alps.
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src="https://i.postimg.cc/yY2QcYRp/cast-21.jpg" alt="Angelina Whyte" title="Angelina Whyte"/></li>
					<li><img src="https://i.postimg.cc/R0BgpsXc/cast-22.jpg" alt="Ivan Benson" title="Ivan Benson"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="card">
		<div className="poster"><img src="https://i.postimg.cc/yxH6DzPD/poster3-img.jpg" alt="Location Unknown"/></div>
		<div className="details">
			<h1>End Credits</h1>
			<h2>2021 • R • 1hr 41min</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star-half-alt"></i>
				<span>4.7/5</span>
			</div>
			<div className="tags">
				<span className="tag yellow">Teen</span>
				<span className="tag">Comedy</span>
				<span className="tag blue">Drama</span>
			</div>
			<p className="desc">
				Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src="https://i.postimg.cc/xd3twv4B/cast-31.jpg" alt="Jessica Enduro" title="Jessica Enduro"/></li>
					<li><img src="https://i.postimg.cc/C1MmSZy5/cast-32.jpg" alt="Charles Garcia" title="Charles Garcia"/></li>
				</ul>
			</div>
		</div>
	</div>
</div>
    );
}
 
export default ProjectTwo;