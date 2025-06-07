import ColorSearchForm from "@/components/ColorSearchForm";

export default function NotFound() {
  return (
    <div className="not-found container my-4">
      <h1 className="mb-4">404 - Không tìm thấy màu</h1>
      <div className="not-found-content">
        <p>Mã màu sai hoặc không hỗ trợ.</p>
        <ColorSearchForm />
      </div>
    </div>
  );
}
