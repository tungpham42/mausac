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
  colorMixer: {
    colorMixerTitle: string;
    color1: string;
    color2: string;
    mixRatio: string;
    moreColor1: string;
    moreColor2: string;
    blendMode: string;
    showAdvanced: string;
    hideAdvanced: string;
    swapColors: string;
    swap: string;
    randomColors: string;
    randomize: string;
    copyColor: string;
    blendModes: {
      normal: string;
      multiply: string;
      screen: string;
      overlay: string;
      darken: string;
      lighten: string;
      colorDodge: string;
      colorBurn: string;
      hardLight: string;
      softLight: string;
      difference: string;
      exclusion: string;
      hue: string;
      saturation: string;
      color: string;
      luminosity: string;
    };
  };
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
    colorMixerTitle: string;
    mixColor1: string;
    mixColor2: string;
    mixButton: string;
    mixedColor: string;
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
  tools: {
    toolsLabel: string;
    colorPicker: string;
    colorMixer: string;
  };
  metadata: Metadata;
}

interface Metadata {
  home: MetadataPage;
  colorPage: MetadataPage;
  colorMixer: MetadataPage;
}

export const translations: { [key: string]: Translations } = {
  vi: {
    colorMixer: {
      colorMixerTitle: "Trộn màu",
      color1: "Màu thứ nhất",
      color2: "Màu thứ hai",
      mixRatio: "Tỷ lệ trộn",
      moreColor1: "Màu 1",
      moreColor2: "Màu 2",
      blendMode: "Chế độ pha trộn",
      showAdvanced: "Hiện tùy chọn nâng cao",
      hideAdvanced: "Ẩn tùy chọn nâng cao",
      swapColors: "Đổi màu",
      swap: "Đổi",
      randomColors: "Màu ngẫu nhiên",
      randomize: "Ngẫu nhiên",
      copyColor: "Sao chép màu",
      blendModes: {
        normal: "Bình thường",
        multiply: "Nhân",
        screen: "Màn hình",
        overlay: "Phủ lên",
        darken: "Tối hơn",
        lighten: "Sáng hơn",
        colorDodge: "Làm sáng màu",
        colorBurn: "Làm tối màu",
        hardLight: "Ánh sáng mạnh",
        softLight: "Ánh sáng mềm",
        difference: "Khác biệt",
        exclusion: "Loại trừ",
        hue: "Màu sắc",
        saturation: "Độ bão hòa",
        color: "Màu",
        luminosity: "Độ sáng",
      },
    },
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
      colorMixerTitle: "Trộn màu",
      mixColor1: "Màu thứ nhất",
      mixColor2: "Màu thứ hai",
      mixButton: "Trộn màu",
      mixedColor: "Màu đã trộn",
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
    tools: {
      toolsLabel: "Công cụ",
      colorPicker: "Chọn màu",
      colorMixer: "Trộn màu",
    },
    metadata: {
      home: {
        title: "Tra cứu mã màu - color.soft.io.vn",
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
        ogTitle: "Tra cứu mã màu - color.soft.io.vn",
        ogDescription:
          "Tìm mã màu nhanh với công cụ tra cứu! Nhập tên hoặc mã HEX để khám phá HEX, RGB, HSL và biến thể màu. Bắt đầu ngay!",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Tra cứu mã màu",
      },
      colorPage: {
        title: "<hex> - Tra cứu mã màu - color.soft.io.vn",
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
        ogTitle: "<hex> - Tra cứu mã màu - color.soft.io.vn",
        ogDescription:
          "Khám phá biến thể màu <hex> với HEX, RGB, HSL, sắc độ, và màu bổ sung. Tìm mã màu hoàn hảo ngay!",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Xem trước <hex> - Tra cứu mã màu",
      },
      colorMixer: {
        title: "Trộn màu - color.soft.io.vn",
        description:
          "Trộn hai màu với tỷ lệ và chế độ pha trộn tùy chọn. Tạo màu sắc độc đáo và khám phá các biến thể ngay!",
        keywords: [
          "trộn màu",
          "màu sắc",
          "tỷ lệ trộn",
          "chế độ pha trộn",
          "mã màu",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Trộn màu - color.soft.io.vn",
        ogDescription:
          "Trộn hai màu với tỷ lệ và chế độ pha trộn tùy chọn. Tạo màu sắc độc đáo và khám phá các biến thể ngay!",
        siteName: "Tra cứu mã màu",
        ogImageAlt: "Trộn màu - color.soft.io.vn",
      },
    },
  },
  en: {
    colorMixer: {
      colorMixerTitle: "Color Mixer",
      color1: "First Color",
      color2: "Second Color",
      mixRatio: "Mix Ratio",
      moreColor1: "More Color 1",
      moreColor2: "More Color 2",
      blendMode: "Blend Mode",
      showAdvanced: "Show Advanced Options",
      hideAdvanced: "Hide Advanced Options",
      swapColors: "Swap Colors",
      swap: "Swap",
      randomColors: "Random Colors",
      randomize: "Randomize",
      copyColor: "Copy Color",
      blendModes: {
        normal: "Normal",
        multiply: "Multiply",
        screen: "Screen",
        overlay: "Overlay",
        darken: "Darken",
        lighten: "Lighten",
        colorDodge: "Color Dodge",
        colorBurn: "Color Burn",
        hardLight: "Hard Light",
        softLight: "Soft Light",
        difference: "Difference",
        exclusion: "Exclusion",
        hue: "Hue",
        saturation: "Saturation",
        color: "Color",
        luminosity: "Luminosity",
      },
    },
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
      colorMixerTitle: "Color Mixer",
      mixColor1: "First Color",
      mixColor2: "Second Color",
      mixButton: "Mix Colors",
      mixedColor: "Mixed Color",
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
    tools: {
      toolsLabel: "Tools",
      colorPicker: "Color Picker",
      colorMixer: "Color Mixer",
    },
    metadata: {
      home: {
        title: "Color Lookup - color.soft.io.vn",
        description:
          "Find colors fast with our lookup tool! Enter a name or HEX code to explore HEX, RGB, HSL, and variations. Start now!",
        keywords: ["color code", "color lookup", "color", "hex", "rgb", "hsl"],
        ogTitle: "Color Lookup - color.soft.io.vn",
        ogDescription:
          "Find colors fast with our lookup tool! Enter a name or HEX code to explore HEX, RGB, HSL, and variations. Start now!",
        siteName: "Color Lookup",
        ogImageAlt: "Color Lookup",
      },
      colorPage: {
        title: "<hex> - Color Lookup - color.soft.io.vn",
        description:
          "Explore color <hex> variations with HEX, RGB, HSL, shades, and complements. Find your perfect color now!",
        keywords: ["color code", "<hex>", "color lookup", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - Color Lookup - color.soft.io.vn",
        ogDescription:
          "Explore color <hex> variations with HEX, RGB, HSL, shades, and complements. Find your perfect color now!",
        siteName: "Color Lookup",
        ogImageAlt: "Preview <hex> - Color Lookup",
      },
      colorMixer: {
        title: "Color Mixer - color.soft.io.vn",
        description:
          "Mix two colors with customizable ratio and blend mode. Create unique colors and explore variations now!",
        keywords: [
          "color mixer",
          "colors",
          "mix ratio",
          "blend mode",
          "color code",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Color Mixer - color.soft.io.vn",
        ogDescription:
          "Mix two colors with customizable ratio and blend mode. Create unique colors and explore variations now!",
        siteName: "Color Lookup",
        ogImageAlt: "Color Mixer - color.soft.io.vn",
      },
    },
  },
  zh: {
    colorMixer: {
      colorMixerTitle: "颜色混合器",
      color1: "第一种颜色",
      color2: "第二种颜色",
      mixRatio: "混合比例",
      moreColor1: "更多颜色1",
      moreColor2: "更多颜色2",
      blendMode: "混合模式",
      showAdvanced: "显示高级选项",
      hideAdvanced: "隐藏高级选项",
      swapColors: "交换颜色",
      swap: "交换",
      randomColors: "随机颜色",
      randomize: "随机化",
      copyColor: "复制颜色",
      blendModes: {
        normal: "正常",
        multiply: "正片叠底",
        screen: "滤色",
        overlay: "叠加",
        darken: "变暗",
        lighten: "变亮",
        colorDodge: "颜色减淡",
        colorBurn: "颜色加深",
        hardLight: "强光",
        softLight: "柔光",
        difference: "差值",
        exclusion: "排除",
        hue: "色相",
        saturation: "饱和度",
        color: "颜色",
        luminosity: "明度",
      },
    },
    paletteDescriptions: {
      shades: "色调通过向基础颜色添加黑色，使其更深。",
      tints: "色调通过向基础颜色添加白色，使其更浅。",
      triadic: "三色调色板使用色轮上均匀分布的三个颜色，提供强烈的对比和平衡。",
      splitComplement:
        "分裂互补色板使用一种基础颜色和其互补色的两个相邻颜色，提供对比但不刺眼。",
      analogous: "类似色调色板使用色轮上相邻的颜色，创造和谐和自然的感觉。",
      monochromatic:
        "单色调色板使用单一颜色的亮度和饱和度变化，创造统一的外观。",
      complementary:
        "互补色调色板使用色轮上相对的两种颜色，提供高对比度和鲜艳度。",
      tetradic:
        "四色调色板使用两对互补色，提供丰富的颜色多样性，但需选择一种主色以避免杂乱。",
    },
    colorCard: {
      header: "颜色",
    },
    imageColorPicker: {
      formLabel: "上传图片或从剪贴板粘贴（Ctrl+V / Cmd+V）：",
      resetButton: "重置",
      pickColorButton: "从图片中选择颜色",
      selectedColor: "已选颜色：",
      browserNotSupported: "您的浏览器不支持 EyeDropper API",
      imageAlt: "已上传或粘贴的图片",
    },
    screenColorPicker: {
      pickColorButton: "从屏幕选择颜色",
      resetButton: "重置",
      selectedColor: "已选颜色：",
      browserNotSupported: "您的浏览器不支持 EyeDropper API",
    },
    colorFormats: {
      header: "格式",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "输入颜色名称（例如：red, #00edc3）",
    },
    home: {
      title: "颜色查询",
      description:
        "欢迎使用颜色查询工具。输入颜色名称或HEX代码，找到您喜欢的颜色！",
      instructionsTitle: "使用方法",
      instruction1:
        "输入颜色名称（例如：<code>red</code>, <code>blue</code>）或HEX颜色代码（例如：<code>#FF5733</code>）。",
      instruction2: "点击“搜索”按钮查看详细信息。",
      instruction3: "该工具支持从屏幕或上传的图片中选择颜色。",
      pickerTitle: "从屏幕或图片中选择颜色",
      popularColorsTitle: "一些流行颜色",
      red: "红色",
      green: "绿色",
      blue: "蓝色",
      yellow: "黄色",
      orange: "橙色",
      purple: "紫色",
      pink: "粉红色",
      black: "黑色",
      white: "白色",
      grey: "灰色",
      cyan: "青色",
      brown: "棕色",
      magenta: "品红色",
      viewDetails: "查看详情",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "颜色混合器",
      mixColor1: "第一种颜色",
      mixColor2: "第二种颜色",
      mixButton: "混合颜色",
      mixedColor: "混合后的颜色",
    },
    colorPage: {
      title: "<hex> - 颜色查询",
      description:
        "探索 <hex> 颜色的变化，包括 HEX、RGB、HSL、色调和互补色。现在就找到您的完美颜色！",
      siteName: "颜色查询",
      imageAlt: "预览 <hex> - 颜色查询",
      header: "<hex> 颜色查询",
      unnamedColor: "未命名颜色",
      shades: "深色调",
      tints: "浅色调",
      complementary: "互补色",
      triadic: "三色调",
      analogous: "类似色",
      splitComplement: "分裂互补色",
      monochromatic: "单色",
      tetradic: "四色调",
      backToHome: "返回主页",
      shareLabel: "分享此颜色：",
      shareText: "查询此颜色",
    },
    tools: {
      toolsLabel: "工具",
      colorPicker: "颜色选择器",
      colorMixer: "颜色混合器",
    },
    metadata: {
      home: {
        title: "颜色查询 - color.soft.io.vn",
        description:
          "使用我们的查询工具快速查找颜色！输入名称或HEX代码，探索HEX、RGB、HSL及颜色变化。现在开始！",
        keywords: ["颜色代码", "颜色查询", "颜色", "hex", "rgb", "hsl"],
        ogTitle: "颜色查询 - color.soft.io.vn",
        ogDescription:
          "使用我们的查询工具快速查找颜色！输入名称或HEX代码，探索HEX、RGB、HSL及颜色变化。现在开始！",
        siteName: "颜色查询",
        ogImageAlt: "颜色查询",
      },
      colorPage: {
        title: "<hex> - 颜色查询 - color.soft.io.vn",
        description:
          "探索 <hex> 颜色的变化，包括 HEX、RGB、HSL、色调和互补色。现在就找到您的完美颜色！",
        keywords: ["颜色代码", "<hex>", "颜色查询", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - 颜色查询 - color.soft.io.vn",
        ogDescription:
          "探索 <hex> 颜色的变化，包括 HEX、RGB、HSL、色调和互补色。现在就找到您的完美颜色！",
        siteName: "颜色查询",
        ogImageAlt: "预览 <hex> - 颜色查询",
      },
      colorMixer: {
        title: "颜色混合器 - color.soft.io.vn",
        description:
          "使用可自定义的比例和混合模式混合两种颜色。创建独特的颜色并立即探索变化！",
        keywords: [
          "颜色混合器",
          "颜色",
          "混合比例",
          "混合模式",
          "颜色代码",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "颜色混合器 - color.soft.io.vn",
        ogDescription:
          "使用可自定义的比例和混合模式混合两种颜色。创建独特的颜色并立即探索变化！",
        siteName: "颜色查询",
        ogImageAlt: "颜色混合器 - color.soft.io.vn",
      },
    },
  },
  fr: {
    colorMixer: {
      colorMixerTitle: "Mélangeur de couleurs",
      color1: "Première couleur",
      color2: "Deuxième couleur",
      mixRatio: "Ratio de mélange",
      moreColor1: "Plus de couleur 1",
      moreColor2: "Plus de couleur 2",
      blendMode: "Mode de fusion",
      showAdvanced: "Afficher les options avancées",
      hideAdvanced: "Masquer les options avancées",
      swapColors: "Inverser les couleurs",
      swap: "Inverser",
      randomColors: "Couleurs aléatoires",
      randomize: "Aléatoire",
      copyColor: "Copier la couleur",
      blendModes: {
        normal: "Normal",
        multiply: "Produit",
        screen: "Écran",
        overlay: "Superposition",
        darken: "Assombrir",
        lighten: "Éclaircir",
        colorDodge: "Densité couleur - éclaircir",
        colorBurn: "Densité couleur - assombrir",
        hardLight: "Lumière crue",
        softLight: "Lumière tamisée",
        difference: "Différence",
        exclusion: "Exclusion",
        hue: "Teinte",
        saturation: "Saturation",
        color: "Couleur",
        luminosity: "Luminosité",
      },
    },
    paletteDescriptions: {
      shades:
        "Les teintes sont créées en ajoutant du noir à la couleur de base, la rendant plus sombre.",
      tints:
        "Les tons sont créés en ajoutant du blanc à la couleur de base, la rendant plus claire.",
      triadic:
        "Les palettes triadiques utilisent trois couleurs équidistantes sur la roue des couleurs, offrant un contraste fort et équilibré.",
      splitComplement:
        "Les palettes complémentaires divisées utilisent une couleur de base et deux couleurs adjacentes à sa complémentaire, offrant un contraste sans dureté.",
      analogous:
        "Les palettes analogues utilisent des couleurs adjacentes sur la roue des couleurs, créant une harmonie et une sensation naturelle.",
      monochromatic:
        "Les palettes monochromatiques utilisent des variations de luminosité et de saturation d'une seule couleur pour un aspect unifié.",
      complementary:
        "Les palettes complémentaires utilisent deux couleurs opposées sur la roue des couleurs, offrant un contraste élevé et vibrant.",
      tetradic:
        "Un schéma à quatre couleurs utilisant deux paires complémentaires. Offre une grande variété de couleurs mais nécessite un équilibre soigneux en choisissant une couleur dominante.",
    },
    colorCard: {
      header: "Couleur",
    },
    imageColorPicker: {
      formLabel:
        "Téléchargez une image ou collez depuis le presse-papiers (Ctrl+V / Cmd+V) :",
      resetButton: "Réinitialiser",
      pickColorButton: "Choisir une couleur dans l'image",
      selectedColor: "Couleur sélectionnée :",
      browserNotSupported:
        "Votre navigateur ne prend pas en charge l'API EyeDropper",
      imageAlt: "Image téléchargée ou collée",
    },
    screenColorPicker: {
      pickColorButton: "Choisir une couleur à l'écran",
      resetButton: "Réinitialiser",
      selectedColor: "Couleur sélectionnée :",
      browserNotSupported:
        "Votre navigateur ne prend pas en charge l'API EyeDropper",
    },
    colorFormats: {
      header: "Formats",
      hex: "HEX",
      rgb: "RVB",
      hsl: "TSL",
      cmyk: "CMJN",
    },
    colorSearchForm: {
      placeholder: "Entrez le nom de la couleur (ex. : red, #00edc3)",
    },
    home: {
      title: "Recherche de couleur",
      description:
        "Bienvenue dans l'outil de recherche de couleur. Entrez un nom de couleur ou un code HEX pour trouver votre couleur préférée !",
      instructionsTitle: "Comment utiliser",
      instruction1:
        "Entrez un nom de couleur (ex. : <code>red</code>, <code>blue</code>) ou un code couleur HEX (ex. : <code>#FF5733</code>).",
      instruction2:
        "Cliquez sur le bouton « Rechercher » pour voir les détails.",
      instruction3:
        "L'outil permet de choisir des couleurs depuis l'écran ou des images téléchargées.",
      pickerTitle: "Choisir une couleur depuis l'écran ou une image",
      popularColorsTitle: "Quelques couleurs populaires",
      red: "Rouge",
      green: "Vert",
      blue: "Bleu",
      yellow: "Jaune",
      orange: "Orange",
      purple: "Violet",
      pink: "Rose",
      black: "Noir",
      white: "Blanc",
      grey: "Gris",
      cyan: "Cyan",
      brown: "Marron",
      magenta: "Magenta",
      viewDetails: "Voir les détails",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "Mélangeur de couleurs",
      mixColor1: "Première couleur",
      mixColor2: "Deuxième couleur",
      mixButton: "Mélanger les couleurs",
      mixedColor: "Couleur mélangée",
    },
    colorPage: {
      title: "<hex> - Recherche de couleur",
      description:
        "Explorez les variations de la couleur <hex> avec HEX, RVB, TSL, teintes et complémentaires. Trouvez votre couleur parfaite maintenant !",
      siteName: "Recherche de couleur",
      imageAlt: "Aperçu <hex> - Recherche de couleur",
      header: "Recherche de couleur pour <hex>",
      unnamedColor: "Couleur sans nom",
      shades: "Teintes sombres",
      tints: "Teintes claires",
      complementary: "Complémentaire",
      triadic: "Triadique",
      analogous: "Analogue",
      splitComplement: "Complémentaire divisé",
      monochromatic: "Monochromatique",
      tetradic: "Tétradique",
      backToHome: "Retour à l'accueil",
      shareLabel: "Partager cette couleur :",
      shareText: "Rechercher cette couleur",
    },
    tools: {
      toolsLabel: "Outils",
      colorPicker: "Sélecteur de couleur",
      colorMixer: "Mélangeur de couleurs",
    },
    metadata: {
      home: {
        title: "Recherche de couleur - color.soft.io.vn",
        description:
          "Trouvez des couleurs rapidement avec notre outil de recherche ! Entrez un nom ou un code HEX pour explorer HEX, RVB, TSL et variations. Commencez maintenant !",
        keywords: [
          "code couleur",
          "recherche couleur",
          "couleur",
          "hex",
          "rvb",
          "tsl",
        ],
        ogTitle: "Recherche de couleur - color.soft.io.vn",
        ogDescription:
          "Trouvez des couleurs rapidement avec notre outil de recherche ! Entrez un nom ou un code HEX pour explorer HEX, RVB, TSL et variations. Commencez maintenant !",
        siteName: "Recherche de couleur",
        ogImageAlt: "Recherche de couleur",
      },
      colorPage: {
        title: "<hex> - Recherche de couleur - color.soft.io.vn",
        description:
          "Explorez les variations de la couleur <hex> avec HEX, RVB, TSL, teintes et complémentaires. Trouvez votre couleur parfaite maintenant !",
        keywords: [
          "code couleur",
          "<hex>",
          "recherche couleur",
          "hex",
          "rvb",
          "tsl",
        ],
        ogTitle: "<hex> - Recherche de couleur - color.soft.io.vn",
        ogDescription:
          "Explorez les variations de la couleur <hex> avec HEX, RVB, TSL, teintes et complémentaires. Trouvez votre couleur parfaite maintenant !",
        siteName: "Recherche de couleur",
        ogImageAlt: "Aperçu <hex> - Recherche de couleur",
      },
      colorMixer: {
        title: "Mélangeur de couleurs - color.soft.io.vn",
        description:
          "Mélangez deux couleurs avec un ratio et un mode de fusion personnalisables. Créez des couleurs uniques et explorez les variations maintenant !",
        keywords: [
          "mélangeur de couleurs",
          "couleurs",
          "ratio de mélange",
          "mode de fusion",
          "code couleur",
          "hex",
          "rvb",
          "tsl",
        ],
        ogTitle: "Mélangeur de couleurs - color.soft.io.vn",
        ogDescription:
          "Mélangez deux couleurs avec un ratio et un mode de fusion personnalisables. Créez des couleurs uniques et explorez les variations maintenant !",
        siteName: "Recherche de couleur",
        ogImageAlt: "Mélangeur de couleurs - color.soft.io.vn",
      },
    },
  },
  de: {
    colorMixer: {
      colorMixerTitle: "Farbmixer",
      color1: "Erste Farbe",
      color2: "Zweite Farbe",
      mixRatio: "Mischverhältnis",
      moreColor1: "Mehr Farbe 1",
      moreColor2: "Mehr Farbe 2",
      blendMode: "Mischmodus",
      showAdvanced: "Erweiterte Optionen anzeigen",
      hideAdvanced: "Erweiterte Optionen ausblenden",
      swapColors: "Farben tauschen",
      swap: "Tauschen",
      randomColors: "Zufällige Farben",
      randomize: "Zufällig",
      copyColor: "Farbe kopieren",
      blendModes: {
        normal: "Normal",
        multiply: "Multiplizieren",
        screen: "Negativ multiplizieren",
        overlay: "Überlagern",
        darken: "Abdunkeln",
        lighten: "Aufhellen",
        colorDodge: "Farbig abwedeln",
        colorBurn: "Farbig nachbelichten",
        hardLight: "Hartes Licht",
        softLight: "Weiches Licht",
        difference: "Differenz",
        exclusion: "Ausschluss",
        hue: "Farbton",
        saturation: "Sättigung",
        color: "Farbe",
        luminosity: "Luminanz",
      },
    },
    paletteDescriptions: {
      shades:
        "Schattierungen entstehen durch Hinzufügen von Schwarz zur Grundfarbe, wodurch sie dunkler wird.",
      tints:
        "Tönungen entstehen durch Hinzufügen von Weiß zur Grundfarbe, wodurch sie heller wird.",
      triadic:
        "Triadische Paletten verwenden drei gleichmäßig auf dem Farbkreis verteilte Farben, die starken Kontrast und Ausgewogenheit bieten.",
      splitComplement:
        "Geteilte Komplementärpaletten verwenden eine Grundfarbe und zwei benachbarte Komplementärfarben, die Kontrast ohne Härte bieten.",
      analogous:
        "Analoge Paletten verwenden Farben, die nebeneinander auf dem Farbkreis liegen, und schaffen Harmonie und ein natürliches Gefühl.",
      monochromatic:
        "Monochromatische Paletten verwenden Variationen in Helligkeit und Sättigung einer einzigen Farbe für ein einheitliches Erscheinungsbild.",
      complementary:
        "Komplementärpaletten verwenden zwei Farben, die sich auf dem Farbkreis gegenüberliegen, und bieten hohen Kontrast und Lebendigkeit.",
      tetradic:
        "Ein Vier-Farben-Schema mit zwei komplementären Paaren. Bietet eine reiche Farbvielfalt, erfordert aber eine sorgfältige Balance durch die Wahl einer dominanten Farbe.",
    },
    colorCard: {
      header: "Farbe",
    },
    imageColorPicker: {
      formLabel:
        "Bild hochladen oder aus der Zwischenablage einfügen (Strg+V / Cmd+V):",
      resetButton: "Zurücksetzen",
      pickColorButton: "Farbe aus Bild auswählen",
      selectedColor: "Ausgewählte Farbe:",
      browserNotSupported: "Ihr Browser unterstützt die EyeDropper-API nicht",
      imageAlt: "Hochgeladenes oder eingefügtes Bild",
    },
    screenColorPicker: {
      pickColorButton: "Farbe vom Bildschirm auswählen",
      resetButton: "Zurücksetzen",
      selectedColor: "Ausgewählte Farbe:",
      browserNotSupported: "Ihr Browser unterstützt die EyeDropper-API nicht",
    },
    colorFormats: {
      header: "Formate",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "Farbenname eingeben (z.B. red, #00edc3)",
    },
    home: {
      title: "Farbsuche",
      description:
        "Willkommen beim Farbsuchtool. Geben Sie einen Farbnamen oder HEX-Code ein, um Ihre Lieblingsfarbe zu finden!",
      instructionsTitle: "Anleitung",
      instruction1:
        "Geben Sie einen Farbnamen (z.B. <code>red</code>, <code>blue</code>) oder einen HEX-Farbcode (z.B. <code>#FF5733</code>) ein.",
      instruction2:
        "Klicken Sie auf die Schaltfläche „Suchen“, um Details anzuzeigen.",
      instruction3:
        "Das Tool unterstützt das Auswählen von Farben vom Bildschirm oder hochgeladenen Bildern.",
      pickerTitle: "Farbe vom Bildschirm oder Bild auswählen",
      popularColorsTitle: "Einige beliebte Farben",
      red: "Rot",
      green: "Grün",
      blue: "Blau",
      yellow: "Gelb",
      orange: "Orange",
      purple: "Violett",
      pink: "Rosa",
      black: "Schwarz",
      white: "Weiß",
      grey: "Grau",
      cyan: "Cyan",
      brown: "Braun",
      magenta: "Magenta",
      viewDetails: "Details anzeigen",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "Farbmixer",
      mixColor1: "Erste Farbe",
      mixColor2: "Zweite Farbe",
      mixButton: "Farben mischen",
      mixedColor: "Gemischte Farbe",
    },
    colorPage: {
      title: "<hex> - Farbsuche",
      description:
        "Entdecken Sie Farbvariationen von <hex> mit HEX, RGB, HSL, Schattierungen und Komplementärfarben. Finden Sie jetzt Ihre perfekte Farbe!",
      siteName: "Farbsuche",
      imageAlt: "Vorschau <hex> - Farbsuche",
      header: "Farbsuche für <hex>",
      unnamedColor: "Unbenannte Farbe",
      shades: "Schattierungen",
      tints: "Tönungen",
      complementary: "Komplementär",
      triadic: "Triadisch",
      analogous: "Analog",
      splitComplement: "Geteilt komplementär",
      monochromatic: "Monochromatisch",
      tetradic: "Tetradisch",
      backToHome: "Zurück zur Startseite",
      shareLabel: "Diese Farbe teilen:",
      shareText: "Diese Farbe nachschlagen",
    },
    tools: {
      toolsLabel: "Werkzeuge",
      colorPicker: "Farbwähler",
      colorMixer: "Farbmixer",
    },
    metadata: {
      home: {
        title: "Farbsuche - color.soft.io.vn",
        description:
          "Finden Sie Farben schnell mit unserem Suchtool! Geben Sie einen Namen oder HEX-Code ein, um HEX, RGB, HSL und Variationen zu erkunden. Jetzt starten!",
        keywords: ["Farbcode", "Farbsuche", "Farbe", "hex", "rgb", "hsl"],
        ogTitle: "Farbsuche - color.soft.io.vn",
        ogDescription:
          "Finden Sie Farben schnell mit unserem Suchtool! Geben Sie einen Namen oder HEX-Code ein, um HEX, RGB, HSL und Variationen zu erkunden. Jetzt starten!",
        siteName: "Farbsuche",
        ogImageAlt: "Farbsuche",
      },
      colorPage: {
        title: "<hex> - Farbsuche - color.soft.io.vn",
        description:
          "Entdecken Sie Farbvariationen von <hex> mit HEX, RGB, HSL, Schattierungen und Komplementärfarben. Finden Sie jetzt Ihre perfekte Farbe!",
        keywords: ["Farbcode", "<hex>", "Farbsuche", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - Farbsuche - color.soft.io.vn",
        ogDescription:
          "Entdecken Sie Farbvariationen von <hex> mit HEX, RGB, HSL, Schattierungen und Komplementärfarben. Finden Sie jetzt Ihre perfekte Farbe!",
        siteName: "Farbsuche",
        ogImageAlt: "Vorschau <hex> - Farbsuche",
      },
      colorMixer: {
        title: "Farbmixer - color.soft.io.vn",
        description:
          "Mischen Sie zwei Farben mit anpassbarem Verhältnis und Mischmodus. Erstellen Sie einzigartige Farben und erkunden Sie jetzt Variationen!",
        keywords: [
          "Farbmixer",
          "Farben",
          "Mischverhältnis",
          "Mischmodus",
          "Farbcode",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Farbmixer - color.soft.io.vn",
        ogDescription:
          "Mischen Sie zwei Farben mit anpassbarem Verhältnis und Mischmodus. Erstellen Sie einzigartige Farben und erkunden Sie jetzt Variationen!",
        siteName: "Farbsuche",
        ogImageAlt: "Farbmixer - color.soft.io.vn",
      },
    },
  },
  it: {
    colorMixer: {
      colorMixerTitle: "Miscelatore di colori",
      color1: "Primo colore",
      color2: "Secondo colore",
      mixRatio: "Rapporto di miscelazione",
      moreColor1: "Più colore 1",
      moreColor2: "Più colore 2",
      blendMode: "Modalità di fusione",
      showAdvanced: "Mostra opzioni avanzate",
      hideAdvanced: "Nascondi opzioni avanzate",
      swapColors: "Scambia colori",
      swap: "Scambia",
      randomColors: "Colori casuali",
      randomize: "Casualizza",
      copyColor: "Copia colore",
      blendModes: {
        normal: "Normale",
        multiply: "Moltiplica",
        screen: "Schermo",
        overlay: "Sovrapponi",
        darken: "Scurisci",
        lighten: "Schiarisci",
        colorDodge: "Scherma colore",
        colorBurn: "Brucia colore",
        hardLight: "Luce intensa",
        softLight: "Luce soffusa",
        difference: "Differenza",
        exclusion: "Esclusione",
        hue: "Tonalità",
        saturation: "Saturazione",
        color: "Colore",
        luminosity: "Luminosità",
      },
    },
    paletteDescriptions: {
      shades:
        "Le sfumature si creano aggiungendo nero al colore di base, rendendolo più scuro.",
      tints:
        "Le tinte si creano aggiungendo bianco al colore di base, rendendolo più chiaro.",
      triadic:
        "Le tavolozze triadiche utilizzano tre colori equidistanti sulla ruota dei colori, offrendo un forte contrasto ed equilibrio.",
      splitComplement:
        "Le tavolozze complementari divise utilizzano un colore di base e due colori adiacenti al suo complementare, fornendo contrasto senza durezza.",
      analogous:
        "Le tavolozze analoghe utilizzano colori vicini tra loro sulla ruota dei colori, creando armonia e una sensazione naturale.",
      monochromatic:
        "Le tavolozze monocromatiche utilizzano variazioni di luminosità e saturazione di un singolo colore per un aspetto uniforme.",
      complementary:
        "Le tavolozze complementari utilizzano due colori opposti sulla ruota dei colori, offrendo un alto contrasto e vivacità.",
      tetradic:
        "Uno schema a quattro colori che utilizza due coppie complementari. Offre una ricca varietà di colori ma richiede un attento bilanciamento scegliendo un colore dominante.",
    },
    colorCard: {
      header: "Colore",
    },
    imageColorPicker: {
      formLabel: "Carica un'immagine o incolla dagli appunti (Ctrl+V / Cmd+V):",
      resetButton: "Ripristina",
      pickColorButton: "Scegli colore dall'immagine",
      selectedColor: "Colore selezionato:",
      browserNotSupported: "Il tuo browser non supporta l'API EyeDropper",
      imageAlt: "Immagine caricata o incollata",
    },
    screenColorPicker: {
      pickColorButton: "Scegli colore dallo schermo",
      resetButton: "Ripristina",
      selectedColor: "Colore selezionato:",
      browserNotSupported: "Il tuo browser non supporta l'API EyeDropper",
    },
    colorFormats: {
      header: "Formati",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "Inserisci il nome del colore (es. red, #00edc3)",
    },
    home: {
      title: "Ricerca colore",
      description:
        "Benvenuto nello strumento di ricerca colore. Inserisci un nome di colore o un codice HEX per trovare il tuo colore preferito!",
      instructionsTitle: "Come utilizzare",
      instruction1:
        "Inserisci un nome di colore (es. <code>red</code>, <code>blue</code>) o un codice colore HEX (es. <code>#FF5733</code>).",
      instruction2: "Clicca sul pulsante “Cerca” per visualizzare i dettagli.",
      instruction3:
        "Lo strumento supporta la scelta di colori dallo schermo o da immagini caricate.",
      pickerTitle: "Scegli colore dallo schermo o da un'immagine",
      popularColorsTitle: "Alcuni colori popolari",
      red: "Rosso",
      green: "Verde",
      blue: "Blu",
      yellow: "Giallo",
      orange: "Arancione",
      purple: "Viola",
      pink: "Rosa",
      black: "Nero",
      white: "Bianco",
      grey: "Grigio",
      cyan: "Ciano",
      brown: "Marrone",
      magenta: "Magenta",
      viewDetails: "Visualizza dettagli",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "Miscelatore di colori",
      mixColor1: "Primo colore",
      mixColor2: "Secondo colore",
      mixButton: "Mischia colori",
      mixedColor: "Colore miscelato",
    },
    colorPage: {
      title: "<hex> - Ricerca colore",
      description:
        "Esplora le variazioni del colore <hex> con HEX, RGB, HSL, sfumature e complementari. Trova il tuo colore perfetto ora!",
      siteName: "Ricerca colore",
      imageAlt: "Anteprima <hex> - Ricerca colore",
      header: "Ricerca colore per <hex>",
      unnamedColor: "Colore senza nome",
      shades: "Sfumature",
      tints: "Tinte",
      complementary: "Complementare",
      triadic: "Triadico",
      analogous: "Analogo",
      splitComplement: "Complementare diviso",
      monochromatic: "Monocromatico",
      tetradic: "Tetradico",
      backToHome: "Torna alla home",
      shareLabel: "Condividi questo colore:",
      shareText: "Cerca questo colore",
    },
    tools: {
      toolsLabel: "Strumenti",
      colorPicker: "Selettore di colori",
      colorMixer: "Miscelatore di colori",
    },
    metadata: {
      home: {
        title: "Ricerca colore - color.soft.io.vn",
        description:
          "Trova colori rapidamente con il nostro strumento di ricerca! Inserisci un nome o un codice HEX per esplorare HEX, RGB, HSL e variazioni. Inizia ora!",
        keywords: [
          "codice colore",
          "ricerca colore",
          "colore",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Ricerca colore - color.soft.io.vn",
        ogDescription:
          "Trova colori rapidamente con il nostro strumento di ricerca! Inserisci un nome o un codice HEX per esplorare HEX, RGB, HSL e variazioni. Inizia ora!",
        siteName: "Ricerca colore",
        ogImageAlt: "Ricerca colore",
      },
      colorPage: {
        title: "<hex> - Ricerca colore - color.soft.io.vn",
        description:
          "Esplora le variazioni del colore <hex> con HEX, RGB, HSL, sfumature e complementari. Trova il tuo colore perfetto ora!",
        keywords: [
          "codice colore",
          "<hex>",
          "ricerca colore",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "<hex> - Ricerca colore - color.soft.io.vn",
        ogDescription:
          "Esplora le variazioni del colore <hex> con HEX, RGB, HSL, sfumature e complementari. Trova il tuo colore perfetto ora!",
        siteName: "Ricerca colore",
        ogImageAlt: "Anteprima <hex> - Ricerca colore",
      },
      colorMixer: {
        title: "Miscelatore di colori - color.soft.io.vn",
        description:
          "Miscela due colori con un rapporto e una modalità di fusione personalizzabili. Crea colori unici ed esplora le variazioni ora!",
        keywords: [
          "miscelatore di colori",
          "colori",
          "rapporto di miscelazione",
          "modalità di fusione",
          "codice colore",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Miscelatore di colori - color.soft.io.vn",
        ogDescription:
          "Miscela due colori con un rapporto e una modalità di fusione personalizzabili. Crea colori unici ed esplora le variazioni ora!",
        siteName: "Ricerca colore",
        ogImageAlt: "Miscelatore di colori - color.soft.io.vn",
      },
    },
  },
  ja: {
    colorMixer: {
      colorMixerTitle: "カラーミキサー",
      color1: "最初の色",
      color2: "2番目の色",
      mixRatio: "混合比率",
      moreColor1: "もっと色1",
      moreColor2: "もっと色2",
      blendMode: "ブレンドモード",
      showAdvanced: "高度なオプションを表示",
      hideAdvanced: "高度なオプションを非表示",
      swapColors: "色を交換",
      swap: "交換",
      randomColors: "ランダムカラー",
      randomize: "ランダム化",
      copyColor: "色をコピー",
      blendModes: {
        normal: "通常",
        multiply: "乗算",
        screen: "スクリーン",
        overlay: "オーバーレイ",
        darken: "暗くする",
        lighten: "明るくする",
        colorDodge: "カラー・ドッジ",
        colorBurn: "カラー・バーン",
        hardLight: "ハードライト",
        softLight: "ソフトライト",
        difference: "差分",
        exclusion: "除外",
        hue: "色相",
        saturation: "彩度",
        color: "カラー",
        luminosity: "輝度",
      },
    },
    paletteDescriptions: {
      shades: "シェードは、基本色に黒を加えることで作られ、暗くなります。",
      tints: "ティントは、基本色に白を加えることで作られ、明るくなります。",
      triadic:
        "トライアディックパレットは、色相環上で均等に配置された3色を使用し、強いコントラストとバランスを提供します。",
      splitComplement:
        "スプリットコンプリメンタリーパレットは、基本色とその補色の隣にある2色を使用し、強すぎないコントラストを提供します。",
      analogous:
        "アナタスカラーパレットは、色相環上で隣り合った色を使用し、調和と自然な雰囲気を作り出します。",
      monochromatic:
        "モノクロマチックパレットは、単一の色の明度と彩度の変化を使用し、統一感のある外観を作ります。",
      complementary:
        "コンプリメンタリーパレットは、色相環上で対向する2色を使用し、高いコントラストと鮮やかさを提供します。",
      tetradic:
        "2つの補色ペアを使用した4色スキーム。豊富な色の多様性を提供しますが、1つの主色を選ぶことでバランスを慎重に保つ必要があります。",
    },
    colorCard: {
      header: "色",
    },
    imageColorPicker: {
      formLabel:
        "画像をアップロードするか、クリップボードから貼り付けます（Ctrl+V / Cmd+V）：",
      resetButton: "リセット",
      pickColorButton: "画像から色を選択",
      selectedColor: "選択した色：",
      browserNotSupported:
        "お使いのブラウザはEyeDropper APIをサポートしていません",
      imageAlt: "アップロードまたは貼り付けられた画像",
    },
    screenColorPicker: {
      pickColorButton: "画面から色を選択",
      resetButton: "リセット",
      selectedColor: "選択した色：",
      browserNotSupported:
        "お使いのブラウザはEyeDropper APIをサポートしていません",
    },
    colorFormats: {
      header: "フォーマット",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "色の名前を入力（例：red, #00edc3）",
    },
    home: {
      title: "カラー検索",
      description:
        "カラー検索ツールへようこそ。色の名前またはHEXコードを入力して、お気に入りの色を見つけてください！",
      instructionsTitle: "使用方法",
      instruction1:
        "色の名前（例：<code>red</code>, <code>blue</code>）またはHEXカラーコード（例：<code>#FF5733</code>）を入力します。",
      instruction2: "「検索」ボタンをクリックして詳細を表示します。",
      instruction3:
        "このツールは、画面またはアップロードされた画像から色を選択する機能をサポートしています。",
      pickerTitle: "画面または画像から色を選択",
      popularColorsTitle: "人気の色",
      red: "赤",
      green: "緑",
      blue: "青",
      yellow: "黄",
      orange: "オレンジ",
      purple: "紫",
      pink: "ピンク",
      black: "黒",
      white: "白",
      grey: "グレー",
      cyan: "シアン",
      brown: "茶",
      magenta: "マゼンタ",
      viewDetails: "詳細を表示",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "カラー混合器",
      mixColor1: "最初の色",
      mixColor2: "2番目の色",
      mixButton: "色を混合",
      mixedColor: "混合された色",
    },
    colorPage: {
      title: "<hex> - カラー検索",
      description:
        "<hex> の色のバリエーションをHEX、RGB、HSL、シェード、補色で探索してください。今すぐ完璧な色を見つけてください！",
      siteName: "カラー検索",
      imageAlt: "<hex> のプレビュー - カラー検索",
      header: "<hex> のカラー検索",
      unnamedColor: "名前のない色",
      shades: "シェード",
      tints: "ティント",
      complementary: "補色",
      triadic: "トライアディック",
      analogous: "アナタス",
      splitComplement: "スプリットコンプリメンタリー",
      monochromatic: "モノクロマチック",
      tetradic: "テトラディック",
      backToHome: "ホームに戻る",
      shareLabel: "この色を共有：",
      shareText: "この色を検索",
    },
    tools: {
      toolsLabel: "ツール",
      colorPicker: "カラーピッカー",
      colorMixer: "カラー混合器",
    },
    metadata: {
      home: {
        title: "カラー検索 - color.soft.io.vn",
        description:
          "私たちの検索ツールで素早く色を見つけてください！名前またはHEXコードを入力して、HEX、RGB、HSL、色のバリエーションを探索します。今すぐ開始！",
        keywords: ["カラーコード", "カラー検索", "色", "hex", "rgb", "hsl"],
        ogTitle: "カラー検索 - color.soft.io.vn",
        ogDescription:
          "私たちの検索ツールで素早く色を見つけてください！名前またはHEXコードを入力して、HEX、RGB、HSL、色のバリエーションを探索します。今すぐ開始！",
        siteName: "カラー検索",
        ogImageAlt: "カラー検索",
      },
      colorPage: {
        title: "<hex> - カラー検索 - color.soft.io.vn",
        description:
          "<hex> の色のバリエーションをHEX、RGB、HSL、シェード、補色で探索してください。今すぐ完璧な色を見つけてください！",
        keywords: ["カラーコード", "<hex>", "カラー検索", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - カラー検索 - color.soft.io.vn",
        ogDescription:
          "<hex> の色のバリエーションをHEX、RGB、HSL、シェード、補色で探索してください。今すぐ完璧な色を見つけてください！",
        siteName: "カラー検索",
        ogImageAlt: "<hex> のプレビュー - カラー検索",
      },
      colorMixer: {
        title: "カラー混合器 - color.soft.io.vn",
        description:
          "カスタマイズ可能な比率とブレンドモードで2つの色を混合します。ユニークな色を作成し、今すぐバリエーションを探索してください！",
        keywords: [
          "カラー混合器",
          "色",
          "混合比率",
          "ブレンドモード",
          "カラーコード",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "カラー混合器 - color.soft.io.vn",
        ogDescription:
          "カスタマイズ可能な比率とブレンドモードで2つの色を混合します。ユニークな色を作成し、今すぐバリエーションを探索してください！",
        siteName: "カラー検索",
        ogImageAlt: "カラー混合器 - color.soft.io.vn",
      },
    },
  },
  ko: {
    colorMixer: {
      colorMixerTitle: "색상 혼합기",
      color1: "첫 번째 색상",
      color2: "두 번째 색상",
      mixRatio: "혼합 비율",
      moreColor1: "첫 번째 색상 더하기",
      moreColor2: "두 번째 색상 더하기",
      blendMode: "블렌드 모드",
      showAdvanced: "고급 옵션 표시",
      hideAdvanced: "고급 옵션 숨기기",
      swapColors: "색상 교체",
      swap: "교체",
      randomColors: "랜덤 색상",
      randomize: "랜덤화",
      copyColor: "색상 복사",
      blendModes: {
        normal: "일반",
        multiply: "곱하기",
        screen: "스크린",
        overlay: "오버레이",
        darken: "어둡게",
        lighten: "밝게",
        colorDodge: "컬러 닷지",
        colorBurn: "컬러 번",
        hardLight: "하드 라이트",
        softLight: "소프트 라이트",
        difference: "차이",
        exclusion: "제외",
        hue: "색조",
        saturation: "채도",
        color: "색상",
        luminosity: "명도",
      },
    },
    paletteDescriptions: {
      shades: "셰이드는 기본 색상에 검은색을 추가하여 더 어두워집니다.",
      tints: "틴트는 기본 색상에 흰색을 추가하여 더 밝아집니다.",
      triadic:
        "삼색 팔레트는 색상환에서 균등하게 배치된 세 가지 색상을 사용하여 강한 대비와 균형을 제공합니다.",
      splitComplement:
        "분할 보색 팔레트는 기본 색상과 그 보색의 인접한 두 색상을 사용하여 강하지 않은 대비를 제공합니다.",
      analogous:
        "유사 색상 팔레트는 색상환에서 서로 옆에 있는 색상을 사용하여 조화와 자연스러운 느낌을 만듭니다.",
      monochromatic:
        "단색 팔레트는 단일 색상의 밝기와 채도 변화를 사용하여 통일된 모습을 만듭니다.",
      complementary:
        "보색 팔레트는 색상환에서 서로 반대에 있는 두 색상을 사용하여 높은 대비와 생동감을 제공합니다.",
      tetradic:
        "두 쌍의 보색을 사용하는 4색 구성. 풍부한 색상 다양성을 제공하지만 한 가지 주도 색상을 선택하여 균형을 신중히 유지해야 합니다.",
    },
    colorCard: {
      header: "색상",
    },
    imageColorPicker: {
      formLabel:
        "이미지를 업로드하거나 클립보드에서 붙여넣기 (Ctrl+V / Cmd+V):",
      resetButton: "초기화",
      pickColorButton: "이미지에서 색상 선택",
      selectedColor: "선택한 색상:",
      browserNotSupported: "브라우저가 EyeDropper API를 지원하지 않습니다",
      imageAlt: "업로드되거나 붙여넣은 이미지",
    },
    screenColorPicker: {
      pickColorButton: "화면에서 색상 선택",
      resetButton: "초기화",
      selectedColor: "선택한 색상:",
      browserNotSupported: "브라우저가 EyeDropper API를 지원하지 않습니다",
    },
    colorFormats: {
      header: "형식",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "색상 이름 입력 (예: red, #00edc3)",
    },
    home: {
      title: "색상 검색",
      description:
        "색상 검색 도구에 오신 것을 환영합니다. 색상 이름 또는 HEX 코드를 입력하여 원하는 색상을 찾아보세요!",
      instructionsTitle: "사용 방법",
      instruction1:
        "색상 이름(예: <code>red</code>, <code>blue</code>) 또는 HEX 색상 코드(예: <code>#FF5733</code>)를 입력하세요.",
      instruction2: "‘검색’ 버튼을 클릭하여 자세한 정보를 확인하세요.",
      instruction3:
        "이 도구는 화면 또는 업로드된 이미지에서 색상을 선택하는 기능을 지원합니다.",
      pickerTitle: "화면 또는 이미지에서 색상 선택",
      popularColorsTitle: "인기 있는 색상",
      red: "빨강",
      green: "녹색",
      blue: "파랑",
      yellow: "노랑",
      orange: "주황",
      purple: "보라",
      pink: "핑크",
      black: "검정",
      white: "흰색",
      grey: "회색",
      cyan: "청록",
      brown: "갈색",
      magenta: "마젠타",
      viewDetails: "자세히 보기",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "색상 혼합기",
      mixColor1: "첫 번째 색상",
      mixColor2: "두 번째 색상",
      mixButton: "색상 혼합",
      mixedColor: "혼합된 색상",
    },
    colorPage: {
      title: "<hex> - 색상 검색",
      description:
        "<hex> 색상의 HEX, RGB, HSL, 셰이드, 보색 변화를 탐색하세요. 지금 완벽한 색상을 찾아보세요!",
      siteName: "색상 검색",
      imageAlt: "<hex> 미리보기 - 색상 검색",
      header: "<hex> 색상 검색",
      unnamedColor: "이름 없는 색상",
      shades: "셰이드",
      tints: "틴트",
      complementary: "보색",
      triadic: "삼색",
      analogous: "유사 색상",
      splitComplement: "분할 보색",
      monochromatic: "단색",
      tetradic: "사색",
      backToHome: "홈으로 돌아가기",
      shareLabel: "이 색상 공유:",
      shareText: "이 색상 검색",
    },
    tools: {
      toolsLabel: "도구",
      colorPicker: "색상 선택기",
      colorMixer: "색상 혼합기",
    },
    metadata: {
      home: {
        title: "색상 검색 - color.soft.io.vn",
        description:
          "저희 검색 도구로 빠르게 색상을 찾아보세요! 이름 또는 HEX 코드를 입력하여 HEX, RGB, HSL 및 변화를 탐색하세요. 지금 시작하세요!",
        keywords: ["색상 코드", "색상 검색", "색상", "hex", "rgb", "hsl"],
        ogTitle: "색상 검색 - color.soft.io.vn",
        ogDescription:
          "저희 검색 도구로 빠르게 색상을 찾아보세요! 이름 또는 HEX 코드를 입력하여 HEX, RGB, HSL 및 변화를 탐색하세요. 지금 시작하세요!",
        siteName: "색상 검색",
        ogImageAlt: "색상 검색",
      },
      colorPage: {
        title: "<hex> - 색상 검색 - color.soft.io.vn",
        description:
          "<hex> 색상의 HEX, RGB, HSL, 셰이드, 보색 변화를 탐색하세요. 지금 완벽한 색상을 찾아보세요!",
        keywords: ["색상 코드", "<hex>", "색상 검색", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - 색상 검색 - color.soft.io.vn",
        ogDescription:
          "<hex> 색상의 HEX, RGB, HSL, 셰이드, 보색 변화를 탐색하세요. 지금 완벽한 색상을 찾아보세요!",
        siteName: "색상 검색",
        ogImageAlt: "<hex> 미리보기 - 색상 검색",
      },
      colorMixer: {
        title: "색상 혼합기 - color.soft.io.vn",
        description:
          "사용자 정의 가능한 비율과 블렌드 모드로 두 가지 색상을 혼합하세요. 독특한 색상을 만들고 지금 변화를 탐색하세요!",
        keywords: [
          "색상 혼합기",
          "색상",
          "혼합 비율",
          "블렌드 모드",
          "색상 코드",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "색상 혼합기 - color.soft.io.vn",
        ogDescription:
          "사용자 정의 가능한 비율과 블렌드 모드로 두 가지 색상을 혼합하세요. 독특한 색상을 만들고 지금 변화를 탐색하세요!",
        siteName: "색상 검색",
        ogImageAlt: "색상 혼합기 - color.soft.io.vn",
      },
    },
  },
  pt: {
    colorMixer: {
      colorMixerTitle: "Misturador de cores",
      color1: "Primeira cor",
      color2: "Segunda cor",
      mixRatio: "Proporção de mistura",
      moreColor1: "Mais cor 1",
      moreColor2: "Mais cor 2",
      blendMode: "Modo de mesclagem",
      showAdvanced: "Mostrar opções avançadas",
      hideAdvanced: "Ocultar opções avançadas",
      swapColors: "Trocar cores",
      swap: "Trocar",
      randomColors: "Cores aleatórias",
      randomize: "Aleatorizar",
      copyColor: "Copiar cor",
      blendModes: {
        normal: "Normal",
        multiply: "Multiplicar",
        screen: "Tela",
        overlay: "Sobreposição",
        darken: "Escurecer",
        lighten: "Clarear",
        colorDodge: "Esquivar cor",
        colorBurn: "Queimar cor",
        hardLight: "Luz intensa",
        softLight: "Luz suave",
        difference: "Diferença",
        exclusion: "Exclusão",
        hue: "Matiz",
        saturation: "Saturação",
        color: "Cor",
        luminosity: "Luminosidade",
      },
    },
    paletteDescriptions: {
      shades:
        "Tons são criados ao adicionar preto à cor base, tornando-a mais escura.",
      tints:
        "Matizes são criados ao adicionar branco à cor base, tornando-a mais clara.",
      triadic:
        "Paletas triádicas usam três cores equidistantes na roda de cores, oferecendo forte contraste e equilíbrio.",
      splitComplement:
        "Paletas complementares divididas usam uma cor base e duas cores adjacentes à sua complementar, proporcionando contraste sem aspereza.",
      analogous:
        "Paletas análogas usam cores próximas umas das outras na roda de cores, criando harmonia e uma sensação natural.",
      monochromatic:
        "Paletas monocromáticas usam variações de brilho e saturação de uma única cor para um visual unificado.",
      complementary:
        "Paletas complementares usam duas cores opostas na roda de cores, proporcionando alto contraste e vivacidade.",
      tetradic:
        "Um esquema de quatro cores usando dois pares complementares. Oferece uma rica variedade de cores, mas requer equilíbrio cuidadoso ao escolher uma cor dominante.",
    },
    colorCard: {
      header: "Cor",
    },
    imageColorPicker: {
      formLabel:
        "Faça upload de uma imagem ou cole da área de transferência (Ctrl+V / Cmd+V):",
      resetButton: "Redefinir",
      pickColorButton: "Escolher cor da imagem",
      selectedColor: "Cor selecionada:",
      browserNotSupported: "Seu navegador não suporta a API EyeDropper",
      imageAlt: "Imagem carregada ou colada",
    },
    screenColorPicker: {
      pickColorButton: "Escolher cor da tela",
      resetButton: "Redefinir",
      selectedColor: "Cor selecionada:",
      browserNotSupported: "Seu navegador não suporta a API EyeDropper",
    },
    colorFormats: {
      header: "Formatos",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "Digite o nome da cor (ex.: red, #00edc3)",
    },
    home: {
      title: "Pesquisa de cores",
      description:
        "Bem-vindo à ferramenta de pesquisa de cores. Digite um nome de cor ou código HEX para encontrar sua cor favorita!",
      instructionsTitle: "Como usar",
      instruction1:
        "Digite um nome de cor (ex.: <code>red</code>, <code>blue</code>) ou um código de cor HEX (ex.: <code>#FF5733</code>).",
      instruction2:
        "Clique no botão “Pesquisar” para ver informações detalhadas.",
      instruction3:
        "A ferramenta suporta a escolha de cores da tela ou de imagens carregadas.",
      pickerTitle: "Escolher cor da tela ou imagem",
      popularColorsTitle: "Algumas cores populares",
      red: "Vermelho",
      green: "Verde",
      blue: "Azul",
      yellow: "Amarelo",
      orange: "Laranja",
      purple: "Roxo",
      pink: "Rosa",
      black: "Preto",
      white: "Branco",
      grey: "Cinza",
      cyan: "Ciano",
      brown: "Marrom",
      magenta: "Magenta",
      viewDetails: "Ver detalhes",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "Misturador de cores",
      mixColor1: "Primeira cor",
      mixColor2: "Segunda cor",
      mixButton: "Misturar cores",
      mixedColor: "Cor misturada",
    },
    colorPage: {
      title: "<hex> - Pesquisa de cores",
      description:
        "Explore variações da cor <hex> com HEX, RGB, HSL, tons e complementares. Encontre sua cor perfeita agora!",
      siteName: "Pesquisa de cores",
      imageAlt: "Visualização <hex> - Pesquisa de cores",
      header: "Pesquisa de cores para <hex>",
      unnamedColor: "Cor sem nome",
      shades: "Tons",
      tints: "Matizes",
      complementary: "Complementar",
      triadic: "Triádico",
      analogous: "Análogo",
      splitComplement: "Complementar dividido",
      monochromatic: "Monocromático",
      tetradic: "Tetrádico",
      backToHome: "Voltar para a página inicial",
      shareLabel: "Compartilhar esta cor:",
      shareText: "Pesquisar esta cor",
    },
    tools: {
      toolsLabel: "Ferramentas",
      colorPicker: "Seletor de cores",
      colorMixer: "Misturador de cores",
    },
    metadata: {
      home: {
        title: "Pesquisa de cores - color.soft.io.vn",
        description:
          "Encontre cores rapidamente com nossa ferramenta de pesquisa! Digite um nome ou código HEX para explorar HEX, RGB, HSL e variações. Comece agora!",
        keywords: [
          "código de cor",
          "pesquisa de cor",
          "cor",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Pesquisa de cores - color.soft.io.vn",
        ogDescription:
          "Encontre cores rapidamente com nossa ferramenta de pesquisa! Digite um nome ou código HEX para explorar HEX, RGB, HSL e variações. Comece agora!",
        siteName: "Pesquisa de cores",
        ogImageAlt: "Pesquisa de cores",
      },
      colorPage: {
        title: "<hex> - Pesquisa de cores - color.soft.io.vn",
        description:
          "Explore variações da cor <hex> com HEX, RGB, HSL, tons e complementares. Encontre sua cor perfeita agora!",
        keywords: [
          "código de cor",
          "<hex>",
          "pesquisa de cor",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "<hex> - Pesquisa de cores - color.soft.io.vn",
        ogDescription:
          "Explore variações da cor <hex> com HEX, RGB, HSL, tons e complementares. Encontre sua cor perfeita agora!",
        siteName: "Pesquisa de cores",
        ogImageAlt: "Visualização <hex> - Pesquisa de cores",
      },
      colorMixer: {
        title: "Misturador de cores - color.soft.io.vn",
        description:
          "Misture duas cores com uma proporção e modo de mesclagem personalizáveis. Crie cores únicas e explore variações agora!",
        keywords: [
          "misturador de cores",
          "cores",
          "proporção de mistura",
          "modo de mesclagem",
          "código de cor",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Misturador de cores - color.soft.io.vn",
        ogDescription:
          "Misture duas cores com uma proporção e modo de mesclagem personalizáveis. Crie cores únicas e explore variações agora!",
        siteName: "Pesquisa de cores",
        ogImageAlt: "Misturador de cores - color.soft.io.vn",
      },
    },
  },
  ru: {
    colorMixer: {
      colorMixerTitle: "Смеситель цветов",
      color1: "Первый цвет",
      color2: "Второй цвет",
      mixRatio: "Соотношение смешивания",
      moreColor1: "Больше цвета 1",
      moreColor2: "Больше цвета 2",
      blendMode: "Режим смешивания",
      showAdvanced: "Показать расширенные параметры",
      hideAdvanced: "Скрыть расширенные параметры",
      swapColors: "Поменять цвета местами",
      swap: "Поменять",
      randomColors: "Случайные цвета",
      randomize: "Случайный выбор",
      copyColor: "Копировать цвет",
      blendModes: {
        normal: "Нормальный",
        multiply: "Умножение",
        screen: "Экран",
        overlay: "Перекрытие",
        darken: "Затемнение",
        lighten: "Осветление",
        colorDodge: "Осветление цвета",
        colorBurn: "Затемнение цвета",
        hardLight: "Жесткий свет",
        softLight: "Мягкий свет",
        difference: "Разница",
        exclusion: "Исключение",
        hue: "Оттенок",
        saturation: "Насыщенность",
        color: "Цвет",
        luminosity: "Яркость",
      },
    },
    paletteDescriptions: {
      shades:
        "Оттенки создаются добавлением черного к базовому цвету, что делает его темнее.",
      tints:
        "Тона создаются добавлением белого к базовому цвету, что делает его светлее.",
      triadic:
        "Триадные палитры используют три цвета, равномерно распределенные по цветовому кругу, обеспечивая сильный контраст и баланс.",
      splitComplement:
        "Разделенные комплементарные палитры используют базовый цвет и два соседних комплементарных цвета, обеспечивая контраст без резкости.",
      analogous:
        "Аналоговые палитры используют цвета, расположенные рядом на цветовом круге, создавая гармонию и естественное ощущение.",
      monochromatic:
        "Монохромные палитры используют вариации яркости и насыщенности одного цвета для единого вида.",
      complementary:
        "Комплементарные палитры используют два цвета, противоположных друг другу на цветовом круге, обеспечивая высокий контраст и яркость.",
      tetradic:
        "Схема из четырех цветов, использующая две комплементарные пары. Обеспечивает богатое разнообразие цветов, но требует осторожного баланса с выбором доминирующего цвета.",
    },
    colorCard: {
      header: "Цвет",
    },
    imageColorPicker: {
      formLabel:
        "Загрузите изображение или вставьте из буфера обмена (Ctrl+V / Cmd+V):",
      resetButton: "Сбросить",
      pickColorButton: "Выбрать цвет из изображения",
      selectedColor: "Выбранный цвет:",
      browserNotSupported: "Ваш браузер не поддерживает API EyeDropper",
      imageAlt: "Загруженное или вставленное изображение",
    },
    screenColorPicker: {
      pickColorButton: "Выбрать цвет с экрана",
      resetButton: "Сбросить",
      selectedColor: "Выбранный цвет:",
      browserNotSupported: "Ваш браузер не поддерживает API EyeDropper",
    },
    colorFormats: {
      header: "Форматы",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "Введите название цвета (например, red, #00edc3)",
    },
    home: {
      title: "Поиск цвета",
      description:
        "Добро пожаловать в инструмент поиска цвета. Введите название цвета или HEX-код, чтобы найти ваш любимый цвет!",
      instructionsTitle: "Как использовать",
      instruction1:
        "Введите название цвета (например, <code>red</code>, <code>blue</code>) или HEX-код цвета (например, <code>#FF5733</code>).",
      instruction2:
        "Нажмите кнопку «Поиск», чтобы просмотреть подробную информацию.",
      instruction3:
        "Инструмент поддерживает выбор цвета с экрана или загруженных изображений.",
      pickerTitle: "Выбрать цвет с экрана или изображения",
      popularColorsTitle: "Некоторые популярные цвета",
      red: "Красный",
      green: "Зеленый",
      blue: "Синий",
      yellow: "Желтый",
      orange: "Оранжевый",
      purple: "Фиолетовый",
      pink: "Розовый",
      black: "Черный",
      white: "Белый",
      grey: "Серый",
      cyan: "Голубой",
      brown: "Коричневый",
      magenta: "Маджента",
      viewDetails: "Посмотреть подробности",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "Смеситель цветов",
      mixColor1: "Первый цвет",
      mixColor2: "Второй цвет",
      mixButton: "Смешать цвета",
      mixedColor: "Смешанный цвет",
    },
    colorPage: {
      title: "<hex> - Поиск цвета",
      description:
        "Исследуйте вариации цвета <hex> с HEX, RGB, HSL, оттенками и комплементарными цветами. Найдите свой идеальный цвет прямо сейчас!",
      siteName: "Поиск цвета",
      imageAlt: "Предпросмотр <hex> - Поиск цвета",
      header: "Поиск цвета для <hex>",
      unnamedColor: "Безымянный цвет",
      shades: "Оттенки",
      tints: "Тона",
      complementary: "Комплементарный",
      triadic: "Триадный",
      analogous: "Аналоговый",
      splitComplement: "Разделенный комплементарный",
      monochromatic: "Монохромный",
      tetradic: "Тетрадный",
      backToHome: "Вернуться на главную",
      shareLabel: "Поделиться этим цветом:",
      shareText: "Найти этот цвет",
    },
    tools: {
      toolsLabel: "Инструменты",
      colorPicker: "Пипетка",
      colorMixer: "Смеситель цветов",
    },
    metadata: {
      home: {
        title: "Поиск цвета - color.soft.io.vn",
        description:
          "Быстро находите цвета с помощью нашего инструмента поиска! Введите название или HEX-код, чтобы исследовать HEX, RGB, HSL и вариации. Начните сейчас!",
        keywords: ["код цвета", "поиск цвета", "цвет", "hex", "rgb", "hsl"],
        ogTitle: "Поиск цвета - color.soft.io.vn",
        ogDescription:
          "Быстро находите цвета с помощью нашего инструмента поиска! Введите название или HEX-код, чтобы исследовать HEX, RGB, HSL и вариации. Начните сейчас!",
        siteName: "Поиск цвета",
        ogImageAlt: "Поиск цвета",
      },
      colorPage: {
        title: "<hex> - Поиск цвета - color.soft.io.vn",
        description:
          "Исследуйте вариации цвета <hex> с HEX, RGB, HSL, оттенками и комплементарными цветами. Найдите свой идеальный цвет прямо сейчас!",
        keywords: ["код цвета", "<hex>", "поиск цвета", "hex", "rgb", "hsl"],
        ogTitle: "<hex> - Поиск цвета - color.soft.io.vn",
        ogDescription:
          "Исследуйте вариации цвета <hex> с HEX, RGB, HSL, оттенками и комплементарными цветами. Найдите свой идеальный цвет прямо сейчас!",
        siteName: "Поиск цвета",
        ogImageAlt: "Предпросмотр <hex> - Поиск цвета",
      },
      colorMixer: {
        title: "Смеситель цветов - color.soft.io.vn",
        description:
          "Смешивайте два цвета с настраиваемым соотношением и режимом смешивания. Создавайте уникальные цвета и исследуйте вариации прямо сейчас!",
        keywords: [
          "смеситель цветов",
          "цвета",
          "соотношение смешивания",
          "режим смешивания",
          "код цвета",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Смеситель цветов - color.soft.io.vn",
        ogDescription:
          "Смешивайте два цвета с настраиваемым соотношением и режимом смешивания. Создавайте уникальные цвета и исследуйте вариации прямо сейчас!",
        siteName: "Поиск цвета",
        ogImageAlt: "Смеситель цветов - color.soft.io.vn",
      },
    },
  },
  es: {
    colorMixer: {
      colorMixerTitle: "Mezclador de colores",
      color1: "Primer color",
      color2: "Segundo color",
      mixRatio: "Proporción de mezcla",
      moreColor1: "Más color 1",
      moreColor2: "Más color 2",
      blendMode: "Modo de mezcla",
      showAdvanced: "Mostrar opciones avanzadas",
      hideAdvanced: "Ocultar opciones avanzadas",
      swapColors: "Intercambiar colores",
      swap: "Intercambiar",
      randomColors: "Colores aleatorios",
      randomize: "Aleatorizar",
      copyColor: "Copiar color",
      blendModes: {
        normal: "Normal",
        multiply: "Multiplicar",
        screen: "Pantalla",
        overlay: "Superposición",
        darken: "Oscurecer",
        lighten: "Aclarar",
        colorDodge: "Esquivar color",
        colorBurn: "Quemar color",
        hardLight: "Luz intensa",
        softLight: "Luz suave",
        difference: "Diferencia",
        exclusion: "Exclusión",
        hue: "Tono",
        saturation: "Saturación",
        color: "Color",
        luminosity: "Luminosidad",
      },
    },
    paletteDescriptions: {
      shades:
        "Las sombras se crean añadiendo negro al color base, haciéndolo más oscuro.",
      tints:
        "Los tintes se crean añadiendo blanco al color base, haciéndolo más claro.",
      triadic:
        "Las paletas triádicas utilizan tres colores equidistantes en la rueda de colores, ofreciendo un fuerte contraste y equilibrio.",
      splitComplement:
        "Las paletas complementarias divididas utilizan un color base y dos colores adyacentes a su complementario, proporcionando contraste sin dureza.",
      analogous:
        "Las paletas análogas utilizan colores cercanos entre sí en la rueda de colores, creando armonía y una sensación natural.",
      monochromatic:
        "Las paletas monocromáticas utilizan variaciones de brillo y saturación de un solo color para un aspecto unificado.",
      complementary:
        "Las paletas complementarias utilizan dos colores opuestos en la rueda de colores, proporcionando un alto contraste y vivacidad.",
      tetradic:
        "Un esquema de cuatro colores que utiliza dos pares complementarios. Ofrece una rica variedad de colores, pero requiere un equilibrio cuidadoso al elegir un color dominante.",
    },
    colorCard: {
      header: "Color",
    },
    imageColorPicker: {
      formLabel:
        "Sube una imagen o pega desde el portapapeles (Ctrl+V / Cmd+V):",
      resetButton: "Restablecer",
      pickColorButton: "Elegir color de la imagen",
      selectedColor: "Color seleccionado:",
      browserNotSupported: "Tu navegador no soporta la API EyeDropper",
      imageAlt: "Imagen subida o pegada",
    },
    screenColorPicker: {
      pickColorButton: "Elegir color de la pantalla",
      resetButton: "Restablecer",
      selectedColor: "Color seleccionado:",
      browserNotSupported: "Tu navegador no soporta la API EyeDropper",
    },
    colorFormats: {
      header: "Formatos",
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
    },
    colorSearchForm: {
      placeholder: "Introduce el nombre del color (ej.: red, #00edc3)",
    },
    home: {
      title: "Búsqueda de colores",
      description:
        "Bienvenido a la herramienta de búsqueda de colores. ¡Introduce un nombre de color o código HEX para encontrar tu color favorito!",
      instructionsTitle: "Cómo usar",
      instruction1:
        "Introduce un nombre de color (ej.: <code>red</code>, <code>blue</code>) o un código de color HEX (ej.: <code>#FF5733</code>).",
      instruction2:
        "Haz clic en el botón “Buscar” para ver información detallada.",
      instruction3:
        "La herramienta permite elegir colores desde la pantalla o imágenes subidas.",
      pickerTitle: "Elegir color desde la pantalla o imagen",
      popularColorsTitle: "Algunos colores populares",
      red: "Rojo",
      green: "Verde",
      blue: "Azul",
      yellow: "Amarillo",
      orange: "Naranja",
      purple: "Morado",
      pink: "Rosa",
      black: "Negro",
      white: "Blanco",
      grey: "Gris",
      cyan: "Cian",
      brown: "Marrón",
      magenta: "Magenta",
      viewDetails: "Ver detalles",
      youtubeCode: "ULDRwd5dLLg",
      colorMixerTitle: "Mezclador de colores",
      mixColor1: "Primer color",
      mixColor2: "Segundo color",
      mixButton: "Mezclar colores",
      mixedColor: "Color mezclado",
    },
    colorPage: {
      title: "<hex> - Búsqueda de colores",
      description:
        "Explora las variaciones del color <hex> con HEX, RGB, HSL, sombras y complementarios. ¡Encuentra tu color perfecto ahora!",
      siteName: "Búsqueda de colores",
      imageAlt: "Vista previa <hex> - Búsqueda de colores",
      header: "Búsqueda de colores para <hex>",
      unnamedColor: "Color sin nombre",
      shades: "Sombras",
      tints: "Tintes",
      complementary: "Complementario",
      triadic: "Triádico",
      analogous: "Análogo",
      splitComplement: "Complementario dividido",
      monochromatic: "Monocromático",
      tetradic: "Tetrádico",
      backToHome: "Volver a la página principal",
      shareLabel: "Compartir este color:",
      shareText: "Buscar este color",
    },
    tools: {
      toolsLabel: "Herramientas",
      colorPicker: "Selector de color",
      colorMixer: "Mezclador de colores",
    },
    metadata: {
      home: {
        title: "Búsqueda de colores - color.soft.io.vn",
        description:
          "¡Encuentra colores rápidamente con nuestra herramienta de búsqueda! Introduce un nombre o código HEX para explorar HEX, RGB, HSL y variaciones. ¡Empieza ahora!",
        keywords: [
          "código de color",
          "búsqueda de color",
          "color",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Búsqueda de colores - color.soft.io.vn",
        ogDescription:
          "¡Encuentra colores rápidamente con nuestra herramienta de búsqueda! Introduce un nombre o código HEX para explorar HEX, RGB, HSL y variaciones. ¡Empieza ahora!",
        siteName: "Búsqueda de colores",
        ogImageAlt: "Búsqueda de colores",
      },
      colorPage: {
        title: "<hex> - Búsqueda de colores - color.soft.io.vn",
        description:
          "Explora las variaciones del color <hex> con HEX, RGB, HSL, sombras y complementarios. ¡Encuentra tu color perfecto ahora!",
        keywords: [
          "código de color",
          "<hex>",
          "búsqueda de color",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "<hex> - Búsqueda de colores - color.soft.io.vn",
        ogDescription:
          "Explora las variaciones del color <hex> con HEX, RGB, HSL, sombras y complementarios. ¡Encuentra tu color perfecto ahora!",
        siteName: "Búsqueda de colores",
        ogImageAlt: "Vista previa <hex> - Búsqueda de colores",
      },
      colorMixer: {
        title: "Mezclador de colores - color.soft.io.vn",
        description:
          "Mezcla dos colores con una proporción y modo de mezcla personalizables. ¡Crea colores únicos y explora variaciones ahora!",
        keywords: [
          "mezclador de colores",
          "colores",
          "proporción de mezcla",
          "modo de mezcla",
          "código de color",
          "hex",
          "rgb",
          "hsl",
        ],
        ogTitle: "Mezclador de colores - color.soft.io.vn",
        ogDescription:
          "Mezcla dos colores con una proporción y modo de mezcla personalizables. ¡Crea colores únicos y explora variaciones ahora!",
        siteName: "Búsqueda de colores",
        ogImageAlt: "Mezclador de colores - color.soft.io.vn",
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
