export default function Info({ title, info }) {
  return (
    <div className="text-sm flex flex-col ">
      <h1 className="text-purple-secondary ">{title}</h1>
      <p className="text-purple-primary font-bold">{info}</p>
    </div>
  );
}
