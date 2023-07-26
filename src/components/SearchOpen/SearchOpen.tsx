import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchProps } from './TypeSearchOpen';

import SearchIcon from '@mui/icons-material/Search';

import styles from './SearchOpen.module.scss';

export const SearchOpen: FC<SearchProps> = ({ setIsClicked }) => {
	const sneakersData = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);

	const [searchValue, setSearchValue] = useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const searchClear = () => {
		setSearchValue('');
		inputRef.current?.focus();
	};

	const filteredSneakers = sneakersData.filter((sneaker) => {
		const title = sneaker.title.toLowerCase().includes(searchValue.toLowerCase());
		const brand = sneaker.brand.toLowerCase().includes(searchValue.toLowerCase());
		return title || brand;
	});

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.wrapSearch}>
					<SearchIcon className={styles.icon} />
					<input
						type='search'
						ref={inputRef}
						value={searchValue}
						placeholder='Search'
						className={styles.search}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					{searchValue && (
						<button className={styles.buttonClear} onClick={() => searchClear()}>
							Clear
						</button>
					)}
					<div className={styles.line}></div>
					<button className={styles.buttonClose} onClick={() => setIsClicked(false)}>
						Close
					</button>
				</div>

				<div className={styles.wrapSearchBottom}>
					<div className={styles.left}>
						{filteredSneakers.length > 0 ? <p className={styles.title}>Popular</p> : <p className={styles.title}>No Result</p>}
						<ul className={styles.previewGroupe}>
							{filteredSneakers &&
								filteredSneakers.slice(0, 8).map((sneaker) => (
									<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
										<img className={styles.img} src={sneaker.images[0]} alt='image' />
										<p className={styles.text}>{sneaker.title}</p>
									</Link>
								))}
						</ul>
					</div>
					<div className={styles.right}>
						<p className={styles.title}>Categories</p>
						<div className={styles.wrap}>
							<div className={styles.brand}>
								<Link to={'/air-jordan'}>
									<button className={styles.button}>Air jordan</button>
								</Link>
								<Link to={'/new-balance'}>
									<button className={styles.button}>New Balance</button>
								</Link>
								<Link to={'/nike'}>
									<button className={styles.button}>Nike</button>
								</Link>
								<Link to={'/off-white'}>
									<button className={styles.button}>Off white</button>
								</Link>
								<Link to={'/yeezy'}>
									<button className={styles.button}>Yeezy</button>
								</Link>
								<Link to={'/sneakers'}>
									<button className={styles.button}>More Brands</button>
								</Link>
							</div>
							<div className={styles.recommended}>
								<Link to={'/top-sellers'}>
									<button className={styles.button}>Top sellers</button>
								</Link>
								<Link to={'/lowest-price'}>
									<button className={styles.button}>Lowest price</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.overlay} onClick={() => setIsClicked(false)}></div>
		</>
	);
};