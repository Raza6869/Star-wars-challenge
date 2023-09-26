export default function Card({ title, style }) {
  return (
    <div className={style}>
      <h1 className="card-text">{title}</h1>
    </div>
  );
}
