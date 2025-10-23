import styles from './SafetCard.module.css';

const SafetCard = ({ title, author, year }) => {
  return (
    <div className={styles.safetCard}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default SafetCard