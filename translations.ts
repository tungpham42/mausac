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
  paletteDescriptions: {
    shades: string;
    tints: string;
    triadic: string;
    splitComplement: string;
    analogous: string;
    monochromatic: string;
    complementary: string;
    tetradic: string;
  };
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
    cmyk: string;
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
    orange: string;
    purple: string;
    pink: string;
    black: string;
    white: string;
    grey: string;
    cyan: string;
    brown: string;
    magenta: string;
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
    monochromatic: string;
    tetradic: string;
    backToHome: string;
    shareLabel: string;
    shareText: string;
  };
  metadata: Metadata;
}

interface Metadata {
  home: MetadataPage;
  colorPage: MetadataPage;
}

export const translations: { [key: string]: Translations } = {
  vi: {
    paletteDescriptions: {
      shades:
        "Sắc đậm được tạo ra bằng cách thêm màu đen vào màu gốc, làm cho nó tối hơn.",
      tints:
        "Sắc nhạt được tạo ra bằng cách thêm màu trắng vào màu gốc, làm cho nó sáng hơn.",
      triadic:
        "Bảng màu tam giác sử dụng ba màu cách đều nhau trên vòng tròn màu, mang lại sự tương phản và cân bằng mạnh mẽ.",
      splitComplement:
        "Bảng màu bổ sung chia đôi sử dụng một màu gốc và hai màu liền kề của màu bổ sung, tạo sự tương phản nhưng không quá gắt.",
      analogous:
        "Bảng màu tương đồng sử dụng các màu nằm cạnh nhau trên vòng tròn màu, tạo sự hài hòa và tự nhiên.",
      monochromatic:
        "Bảng màu đơn sắc sử dụng sự thay đổi độ sáng và độ bão hòa của một màu duy nhất để tạo sự thống nhất.",
      complementary:
        "Bảng màu bổ sung sử dụng hai màu đối diện nhau trên vòng tròn màu, mang lại sự tương phản cao và sống động.",
      tetradic:
        "Phối hợp bốn màu gồm hai cặp màu bổ sung. Tạo bảng màu đa dạng nhưng cần chọn một màu chủ đạo để tránh rối mắt.",
    },
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
      cmyk: "CMYK",
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
      orange: "Cam",
      purple: "Tím",
      pink: "Hồng",
      black: "Đen",
      white: "Trắng",
      grey: "Xám",
      cyan: "Xanh lơ",
      brown: "Nâu",
      magenta: "Cánh sen",
      viewDetails: "Xem chi tiết",
      youtubeCode: "ULDRwd5dLLg",
    },
    colorPage: {
      title: "<hex> - Tra cứu mã màu",
      description:
        "Khám phá biến thể màu <hex> với HEX, RGB, HSL, sắc độ, và màu bổ sung. Tìm mã màu hoàn hảo ngay!",
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
      monochromatic: "Đơn sắc",
      tetradic: "Bộ bốn màu",
      backToHome: "Quay về trang chủ",
      shareLabel: "Chia sẻ màu này:",
      shareText: "Tra cứu mã màu này",
    },
    metadata: {
      home: {
        title: "Tra cứu mã màu - Trang chủ",
        description:
          "Tìm mã màu nhanh với công cụ tra cứu! Nhập tên hoặc mã HEX để khám phá HEX, RGB, HSL và biến thể màu. Bắt đầu ngay!",
        keywords: [
          "mã màu",
          "tra cứu màu sắc",
          "tra cứu mã màu",
          "màu sắc",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Tra cứu mã màu - Trang chủ",
        ogDescription:
          "Tìm mã màu nhanh với công cụ tra cứu! Nhập tên hoặc mã HEX để khám phá HEX, RGB, HSL và biến thể màu. Bắt đầu ngay!",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Tra cứu mã màu",
      },
      colorPage: {
        title: "<hex> - Tra cứu mã màu",
        description:
          "Khám phá biến thể màu <hex> với HEX, RGB, HSL, sắc độ, và màu bổ sung. Tìm mã màu hoàn hảo ngay!",
        keywords: [
          "mã màu",
          "<hex>",
          "tra cứu màu sắc",
          "tra cứu mã màu",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "<hex> - Tra cứu mã màu",
        ogDescription:
          "Khám phá biến thể màu <hex> với HEX, RGB, HSL, sắc độ, và màu bổ sung. Tìm mã màu hoàn hảo ngay!",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Xem trước <hex> - Tra cứu mã màu",
      },
    },
  },
  en: {
    paletteDescriptions: {
      shades:
        "Shades are created by adding black to the base color, making it darker.",
      tints:
        "Tints are created by adding white to the base color, making it lighter.",
      triadic:
        "Triadic palettes use three colors evenly spaced around the color wheel, offering strong contrast and balance.",
      splitComplement:
        "Split complementary palettes use a base color and two adjacent complementary colors, providing contrast without harshness.",
      analogous:
        "Analogous palettes use colors next to each other on the color wheel, creating harmony and a natural feel.",
      monochromatic:
        "Monochromatic palettes use variations in lightness and saturation of a single color for a unified look.",
      complementary:
        "Complementary palettes use two colors opposite each other on the color wheel, giving high contrast and vibrancy.",
      tetradic:
        "A four-color scheme using two complementary pairs. Provides rich color variety but requires careful balance by choosing one dominant color.",
    },
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
      cmyk: "CMYK",
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
      orange: "Orange",
      purple: "Purple",
      pink: "Pink",
      black: "Black",
      white: "White",
      grey: "Grey",
      cyan: "Cyan",
      brown: "Brown",
      magenta: "Magenta",
      viewDetails: "View Details",
      youtubeCode: "ULDRwd5dLLg",
    },
    colorPage: {
      title: "<hex> - Color Lookup",
      description:
        "Explore color <hex> variations with HEX, RGB, HSL, shades, and complements. Find your perfect color now!",
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
      monochromatic: "Monochromatic",
      tetradic: "Tetradic",
      backToHome: "Back to Home",
      shareLabel: "Share this color:",
      shareText: "Look up this color",
    },
    metadata: {
      home: {
        title: "Color Lookup - Home",
        description:
          "Find colors fast with our lookup tool! Enter a name or HEX code to explore HEX, RGB, HSL, and variations. Start now!",
        keywords: ["color code", "color lookup", "color", "hex", "rgb", "hsl"],
        ogTitle: "Color Lookup | Home",
        ogDescription:
          "Find colors fast with our lookup tool! Enter a name or HEX code to explore HEX, RGB, HSL, and variations. Start now!",
        siteName: "Color Lookup",
        ogImageAlt: "Color Lookup",
      },
      colorPage: {
        title: "<hex> - Color Lookup",
        description:
          "Explore color <hex> variations with HEX, RGB, HSL, shades, and complements. Find your perfect color now!",
        keywords: ["color code", "<hex>", "color lookup", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - Color Lookup",
        ogDescription:
          "Explore color <hex> variations with HEX, RGB, HSL, shades, and complements. Find your perfect color now!",
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
  let value: unknown = translations[language] || translations["en"]; // Fallback to Vietnamese
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
