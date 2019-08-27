import React from 'react';
import styles from './hero.module.scss';

export default ({ data, title }) => {
	return (
		<div className={styles.hero}>
			<img
				alt="TrueHome hero"
				className={styles.heroImage}
				src={data.file.url}
			/>
			<div className={styles.heroDetails}>
				<h3 className={styles.heroHeadline}>{title}</h3>
				<p className={styles.heroTitle}>{data.title}</p>
			</div>
		</div>
	);
};
