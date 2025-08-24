import LanguageToggle from "./LanguageToggle";
import ToolsDropdown from "./ToolsDropdown";

export default function TopMenu() {
  return (
    <div className="d-flex justify-content-end gap-3 mb-3">
      <ToolsDropdown />
      <LanguageToggle />
    </div>
  );
}
