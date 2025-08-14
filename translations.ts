interface MetadataPage {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  ogImageAlt: string;
}

interface Translations {
  colorCard: { header: string };
  imageColorPicker: {
    formLabel: string;
    resetButton: string;
    pickColorButton: string;
    selectedColor: string;
    browserNotSupported: string;
    imageAlt: string;
  };
  screenColorPicker: {
    pickColorButton: string;
    resetButton: string;
    selectedColor: string;
    browserNotSupported: string;
  };
  colorFormats: {
    header: string;
    hex: string;
    rgb: string;
    hsl: string;
  };
  colorSearchForm: {
    placeholder: string;
  };
  home: {
    title: string;
    description: string;
    instructionsTitle: string;
    instruction1: string;
    instruction2: string;
    instruction3: string;
    pickerTitle: string;
    popularColorsTitle: string;
    red: string;
    green: string;
    blue: string;
    yellow: string;
    viewDetails: string;
    youtubeCode: string;
  };
  colorPage: {
    title: string;
    description: string;
    siteName: string;
    imageAlt: string;
    header: string;
    unnamedColor: string;
    shades: string;
    tints: string;
    complementary: string;
    triadic: string;
    analogous: string;
    splitComplement: string;
    backToHome: string;
  };
  metadata: Metadata;
}

interface Metadata {
  home: MetadataPage;
  colorPage: MetadataPage;
}

export const translations: { [key: string]: Translations } = {
  vi: {
    colorCard: {
      header: "Màu sắc",
    },
    imageColorPicker: {
      formLabel: "Tải ảnh lên hoặc dán từ clipboard (Ctrl+V / Cmd+V):",
      resetButton: "Đặt lại",
      pickColorButton: "Chọn màu từ ảnh",
      selectedColor: "Màu đã chọn:",
      browserNotSupported: "Trình duyệt của bạn không hỗ trợ EyeDropper API",
      imageAlt: "Uploaded or pasted image",
    },
    screenColorPicker: {
      pickColorButton: "Chọn màu từ màn hình",
      resetButton: "Đặt lại",
      selectedColor: "Màu đã chọn:",
      browserNotSupported: "Trình duyệt của bạn không hỗ trợ EyeDropper API",
    },
    colorFormats: {
      header: "Định dạng",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
    },
    colorSearchForm: {
      placeholder: "Nhập tên màu (v.d. red, #00edc3)",
    },
    home: {
      title: "Tra cứu mã màu",
      description:
        "Chào mừng bạn đến với công cụ tra cứu mã màu. Hãy nhập tên màu hoặc mã HEX để tìm kiếm màu sắc yêu thích của bạn!",
      instructionsTitle: "Hướng dẫn sử dụng",
      instruction1:
        "Nhập tên màu (ví dụ: <code>red</code>, <code>blue</code>) hoặc mã màu HEX (ví dụ: <code>#FF5733</code>).",
      instruction2: "Nhấn nút “Tìm kiếm” để xem thông tin chi tiết.",
      instruction3: "Công cụ hỗ trợ chọn màu từ màn hình hoặc ảnh tải lên.",
      pickerTitle: "Chọn màu từ màn hình hoặc ảnh",
      popularColorsTitle: "Một số màu sắc phổ biến",
      red: "Đỏ",
      green: "Xanh lá",
      blue: "Xanh dương",
      yellow: "Vàng",
      viewDetails: "Xem chi tiết",
      youtubeCode: "ULDRwd5dLLg",
    },
    colorPage: {
      title: "<hex> - Tra cứu mã màu",
      description: "Tổng hợp các biến thể của màu <hex>",
      siteName: "Tra cứu mã màu",
      imageAlt: "Xem trước <hex> - Tra cứu mã màu",
      header: "Tra cứu mã màu cho <hex>",
      unnamedColor: "Màu không tên",
      shades: "Sắc độ tối",
      tints: "Sắc độ sáng",
      complementary: "Màu bổ sung",
      triadic: "Bộ ba màu",
      analogous: "Màu tương tự",
      splitComplement: "Màu bổ sung tách đôi",
      backToHome: "Quay về trang chủ",
    },
    metadata: {
      home: {
        title: "Tra cứu mã màu | Trang chủ",
        description:
          "Tra cứu mã màu nhanh chóng và chính xác. Hỗ trợ các định dạng màu sắc như HEX, RGB, HSL và cung cấp các biến thể màu sắc.",
        keywords: ["mã màu", "tra cứu màu sắc", "màu sắc", "hex", "rgb", "hsl"],
        ogTitle: "Tra cứu mã màu | Trang chủ",
        ogDescription:
          "Tra cứu mã màu nhanh chóng và chính xác. Hỗ trợ các định dạng màu sắc như HEX, RGB, HSL và cung cấp các biến thể màu sắc.",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Tra cứu mã màu",
      },
      colorPage: {
        title: "<hex> - Tra cứu mã màu",
        description: "Tổng hợp các biến thể của màu <hex>",
        keywords: ["mã màu", "<hex>", "tra cứu màu sắc", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - Tra cứu mã màu",
        ogDescription: "Tổng hợp các biến thể của màu <hex>",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Xem trước <hex> - Tra cứu mã màu",
      },
    },
  },
  en: {
    colorCard: {
      header: "Color",
    },
    imageColorPicker: {
      formLabel: "Upload an image or paste from clipboard (Ctrl+V / Cmd+V):",
      resetButton: "Reset",
      pickColorButton: "Pick color from image",
      selectedColor: "Selected color:",
      browserNotSupported: "Your browser does not support the EyeDropper API",
      imageAlt: "Uploaded or pasted image",
    },
    screenColorPicker: {
      pickColorButton: "Pick color from screen",
      resetButton: "Reset",
      selectedColor: "Selected color:",
      browserNotSupported: "Your browser does not support the EyeDropper API",
    },
    colorFormats: {
      header: "Formats",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
    },
    colorSearchForm: {
      placeholder: "Enter color name (e.g., red, #00edc3)",
    },
    home: {
      title: "Color Lookup",
      description:
        "Welcome to the color lookup tool. Enter a color name or HEX code to find your favorite color!",
      instructionsTitle: "How to Use",
      instruction1:
        "Enter a color name (e.g., <code>red</code>, <code>blue</code>) or HEX color code (e.g., <code>#FF5733</code>).",
      instruction2: "Click the “Search” button to view detailed information.",
      instruction3:
        "The tool supports picking colors from the screen or uploaded images.",
      pickerTitle: "Pick Color from Screen or Image",
      popularColorsTitle: "Some Popular Colors",
      red: "Red",
      green: "Lime",
      blue: "Blue",
      yellow: "Yellow",
      viewDetails: "View Details",
      youtubeCode: "XohC9ZTDPbo",
    },
    colorPage: {
      title: "<hex> - Color Lookup",
      description: "Collection of variations for the color <hex>",
      siteName: "Color Lookup",
      imageAlt: "Preview <hex> - Color Lookup",
      header: "Color Lookup for <hex>",
      unnamedColor: "Unnamed Color",
      shades: "Shades",
      tints: "Tints",
      complementary: "Complementary",
      triadic: "Triadic",
      analogous: "Analogous",
      splitComplement: "Split Complement",
      backToHome: "Back to Home",
    },
    metadata: {
      home: {
        title: "Color Lookup | Home",
        description:
          "Quickly and accurately look up colors. Supports color formats like HEX, RGB, HSL, and provides color variations.",
        keywords: ["color code", "color lookup", "color", "hex", "rgb", "hsl"],
        ogTitle: "Color Lookup | Home",
        ogDescription:
          "Quickly and accurately look up colors. Supports color formats like HEX, RGB, HSL, and provides color variations.",
        siteName: "Color Lookup",
        ogImageAlt: "Color Lookup",
      },
      colorPage: {
        title: "<hex> - Color Lookup",
        description: "Collection of variations for the color <hex>",
        keywords: ["color code", "<hex>", "color lookup", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - Color Lookup",
        ogDescription: "Collection of variations for the color <hex>",
        siteName: "Color Lookup",
        ogImageAlt: "Preview <hex> - Color Lookup",
      },
    },
  },
};

export const getTranslation = (
  language: string,
  key: string
): string | string[] => {
  const keys = key.split(".");
  let value: unknown = translations[language] || translations["vi"]; // Fallback to Vietnamese
  for (const k of keys) {
    if (typeof value === "object" && value !== null) {
      value = (value as { [key: string]: unknown })[k] as
        | string
        | { [key: string]: unknown };
    } else {
      return key; // Fallback to key if translation not found
    }
    if (!value) return key; // Fallback to key if translation not found
  }
  return typeof value === "string" || Array.isArray(value) ? value : key;
};
