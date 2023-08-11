import { useDispatch } from 'react-redux';
import { Search } from '../Search/Search';
import { useAuth } from '../../hooks/useAuth';
import { SearchOpen } from '../SearchOpen/SearchOpen';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { setRemoveUser } from '../../redux/userSlice/userSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import backgroundImg from '../../images/backgroundImg.jpg';

import styles from './Header.module.scss';

export const Header: FC = () => {
	const { isAuth } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [scroll, setScroll] = useState(0);
	const handleScroll = () => setScroll(window.scrollY);

	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const styleHeaderIMG: CSSProperties = {
		backgroundImage: `url(${backgroundImg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		position: 'relative',
	};

	const scrollBack =
		pathname === '/' && scroll < document.documentElement.clientHeight ? { backgroundColor: '#ffffff00' } : { backgroundColor: '#fff' };

	const accountClick = () => (isAuth ? navigate('/my-account') : navigate('/login'));
	const singOutClick = () => {
		dispatch(setRemoveUser());
		navigate('/');
	};

	return (
		<header style={pathname === '/' ? styleHeaderIMG : { height: '100px' }}>
			<div style={scrollBack} className={styles.headerTop}>
				{isClicked ? <SearchOpen setIsClicked={setIsClicked} /> : <Search setIsClicked={setIsClicked} />}

				{!isClicked && (
					<Link className={styles.logo} to={'/'}>
						FLIGHT CLUB
					</Link>
				)}

				{!isClicked && (
					<div className={styles.listing}>
						<Link className={styles.item} to={'/sneakers'}>
							Sneakers
						</Link>
						<Link className={styles.item} to={'/store-location'}>
							Store
						</Link>

						<div onMouseLeave={() => setIsHovered(false)} className={styles.accountWrap}>
							<button style={isHovered ? { color: '#0000009c' } : {}} className={styles.item} onMouseEnter={() => setIsHovered(true)}>
								Account
							</button>
							{isHovered && (
								<div style={scrollBack} className={styles.wrap}>
									<button className={styles.item} onClick={accountClick}>
										My Account
									</button>

									<Link className={styles.item} to={'/my-cart'}>
										My Cart
									</Link>

									{isAuth ? (
										<button className={styles.item} onClick={singOutClick}>
											Sing Out
										</button>
									) : (
										<Link className={styles.item} to={'/login'}>
											Sing Up
										</Link>
									)}
								</div>
							)}
						</div>
					</div>
				)}
			</div>

			{pathname === '/' && (
				<div className={styles.previewWrapper}>
					<h1 className={styles.previewName}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</h1>
					<Link to={'details/30'} className={styles.previewShow}>
						Shop Now
					</Link>
				</div>
			)}
		</header>
	);
};
