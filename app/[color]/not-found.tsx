import ColorSearchForm from "@/components/ColorSearchForm";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h2>Color Not Found</h2>
        <p>The color you entered is invalid or unsupported.</p>
        <ColorSearchForm />
      </div>
    </div>
  );
}
