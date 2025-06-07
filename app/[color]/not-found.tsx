import ColorSearchForm from "@/components/ColorSearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="not-found container my-4">
      <h1 className="mb-4">
        <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
        404 - Không tìm thấy màu
      </h1>
      <div className="not-found-content">
        <p>Mã màu sai hoặc không hỗ trợ.</p>
        <ColorSearchForm />
      </div>
    </div>
  );
}
