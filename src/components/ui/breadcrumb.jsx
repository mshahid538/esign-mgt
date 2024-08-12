export default function Breadcrumb({ title, description }) {
  return (
    <section className="py-sm px-xs">
      <h4 className="font-light pb-1">{title || "Title"}</h4>
      <small className="text-dark/50">{description || "Description"}</small>
    </section>
  );
}
