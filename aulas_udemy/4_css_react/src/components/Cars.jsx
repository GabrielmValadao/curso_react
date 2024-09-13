import styles from './Cars.module.css'

const Cars = ({car}) => {
  return (
    <div className={styles.card}>
        <h1>{car.name}</h1>
        <p>KM: {car.km}</p>
        <p>color: {car.color}</p>
    </div>
  )
}

export default Cars