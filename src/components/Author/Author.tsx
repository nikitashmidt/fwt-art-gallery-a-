import './Author.scss';
import authorImg from '../../resources/author-image.png';
import { Link } from 'react-router-dom';
import Content from '../Content';
import  cn  from 'classnames';



const Author = () => {
	return (
		<section className={cn("author")}>
			<Link to={'/'} className={cn('author-back')}>
				<span>
					<svg
						width="16"
						height="10"
						viewBox="0 0 16 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M16 5C16 4.85268 15.9398 4.71139 15.8326 4.60722C15.7255 4.50305 15.5802 4.44452 15.4286 4.44452L1.95175 4.44452L5.5481 0.949457C5.65539 0.845154 5.71566 0.703687 5.71566 0.556179C5.71566 0.408671 5.65539 0.267204 5.5481 0.162901C5.4408 0.0585966 5.29528 0 5.14355 0C4.99182 0 4.8463 0.0585966 4.739 0.162901L0.167867 4.60672C0.114655 4.65832 0.0724382 4.71962 0.0436325 4.7871C0.0148268 4.85459 0 4.92694 0 5C0 5.07306 0.0148268 5.14541 0.0436325 5.2129C0.0724382 5.28038 0.114655 5.34168 0.167867 5.39328L4.739 9.8371C4.8463 9.9414 4.99182 10 5.14355 10C5.29528 10 5.4408 9.9414 5.5481 9.8371C5.65539 9.7328 5.71566 9.59133 5.71566 9.44382C5.71566 9.29631 5.65539 9.15485 5.5481 9.05054L1.95175 5.55548L15.4286 5.55548C15.5802 5.55548 15.7255 5.49695 15.8326 5.39278C15.9398 5.28861 16 5.14732 16 5Z"
							fill="#575757"
						/>
					</svg>
				</span>
				<span>Back</span>
			</Link>
			<div className={cn("author-block")}>
				<div className={cn("author-block__info")}>
					<div className={cn("author-block__header")}>
						<time className={cn("author-block__date")}>
							29 july 1817 – 2 may 1900
						</time>
						<div className={cn("author-block__country")}>
							Feodosia, Russian Empire
						</div>
					</div>
					<h1 className={cn("author-block__title")}>Ivan Aivazovsky</h1>
					<div className={cn("author-block__divider")}></div>
					<p className={cn("author-block__description")}>
						Ivan Konstantinovich Aivazovsky was a Russian Romantic painter who
						is considered one of the greatest masters of marine art. Baptized as
						Hovhannes Aivazian, he was born into an Armenian family in the Black
						Sea port of Feodosia in Crimea and was mostly based there...
					</p>
                    <div className={cn("author-block__readmore")}>
                        <span>Read more </span>
						<svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z" fill="#575757"/>
						</svg>
                    </div>
                    <div className={cn("author-block__genres")}>
                        <span className={cn('author-block__genre')}>Romanticism</span>
                        <span className={cn('author-block__genre')}>Art</span>
                        <span className={cn('author-block__genre')}>Nature</span>
                        <span className={cn('author-block__genre')}>Bataille</span>
                        <span className={cn('author-block__genre')}>Realistic</span>
                    </div>
				</div>
				<div className={cn("author-block__image")}>
					<img src={authorImg} alt="author img" />
				</div>
			</div>
			<h2 className={cn("author-title")}>Artworks</h2>
			<Content/>
		</section>
	);
};
export default Author;
