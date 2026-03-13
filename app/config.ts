const config = {
  siteName:
    process.env.SITE_NAME ||
    `Gia phả họ CHU
- Thôn Khúc Lộng - Xã Nghĩa Trụ - Tỉnh Hưng Yên (Xưa là Xóm Đọ-Thôn Vĩnh Khúc-Mỹ Văn-Văn Giang-Tỉnh Hưng Yên `,
  exampleEmail: process.env.EXAMPLE_EMAIL || "",
  examplePassword: process.env.EXAMPLE_PASSWORD || "",
  demoDomain:
    process.env.DEMO_DOMAIN || "https://giaphahochu.vercel.app/dashboard",
};

export default config;
