import React from 'react';
import './Videos.css';

function Videos() {

	const [video, setVideo] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => setVideo(data.slice(0, 10)));
			
	}, []);

	return (
		<>
			<div className={`videos-content`}>
            <div className="videos-contol">
            <h2 className="videos-content-heading">
            Next
            </h2>
            <button className="auto-play">
					<span className="auto-play__span">

					</span>
				</button>
         </div>
					<ul className='videos-content__list'>
						{video &&
							video.map((video) => (
								<li
									className='videos-content__item'
									key={video.id}>
										<img
											className='videos-content__image'
											src={video.thumbnailUrl}
											alt='Videos list img'
											width='250'
											height='150'
										/>

										<h4 className='videos-content__title'>
											{video.title
												.split(' ')
												.slice(0, 3)
												.join(' ')}
										</h4>
									
								</li>
							))}
					</ul>
			
			</div>
		</>
	);
}

export default Videos;