import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeVideo.css';

function HomeVideo() {

	const [video, setVideo] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => setVideo(data));
	}, []);

	return (
		<>
			<section className={`homevideo-content`}>
			
					<ul className='homevideo-content__list'>
						{video &&
							video.map((video) => (
								
									<li
									
									className='homevideo-content__item'
									key={video.id}>
										<NavLink to='/video'>
										<img
											className='homevideo-content__image'
											src={video.thumbnailUrl}
											alt='Videos list img'
											width='250'
											height='150'
										/>
										</NavLink>
										<div className="homevideo-content__images">
										<NavLink to='/channel'>
										<img
											className='homevideo-content__image'
											src={video.url}
											alt='Videos list img'
											width='20'
											height='20'
										/>

										<h4 className='homevideo-content__title'>
											{video.title
												.split(' ')
												.slice(0, 2)
												.join(' ')}
										</h4>
										</NavLink>
										</div>
										
								</li>
									
							))}
					</ul>
			
			</section>
		</>
	);
}

export default HomeVideo;
