import type { MetadataRoute } from "next"

// 정적 내보내기를 위한 설정 추가
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://ttmloveai.com/sitemap.xml", // 실제 도메인으로 변경하세요
  }
}
