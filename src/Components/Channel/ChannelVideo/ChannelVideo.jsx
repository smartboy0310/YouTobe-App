import React from 'react';
import './ChannelVideo.css';
import { NavLink } from 'react-router-dom';
import backBtn from '../../../Assets/Images/back.svg';
import nextBtn from '../../../Assets/Images/next.svg'
function ChannelVideo() {

	const [video, setVideo] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => setVideo(data.slice(1, 50)));
	}, []);

	return (
		<>
			<div className={`channelvideo-content`}>
            <div className="channelvideo-contol">
            <h2 className="channelvideo-content-heading">
            Margaret Phelps videos
            </h2>
            <div className="channelvideo-contol-btn">
            <button className="back-btn">
                  <img className="back-btn-icon"
                  src={backBtn} 
                  alt="back-btn-icon"  />
            </button>
            <button className="next-btn">
                  <img className="next-btn-icon"
                  src={nextBtn} 
                  alt="next-btn-icon"  />
            </button>
            </div>
            </div>
					<ul className='channelvideo-content__list'>
						{video &&
							video.map((video) => (
								<li
									className='channelvideo-content__item'
									key={video.id}>
										<NavLink to='/video'>
										<img
											className='channelvideo-content__image'
											src={video.thumbnailUrl}
											alt='Videos list img'
											width='250'
											height='150'
										/>

										<h4 className='channelvideo-content__title'>
											{video.title
												.split(' ')
												.slice(0, 2)
												.join(' ')}
										</h4>
										</NavLink>
									
								</li>
							))}
					</ul>
			
			</div>
		</>
	);
}

export default ChannelVideo;