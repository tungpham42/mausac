export async function getHostUrl(): Promise<string> {
  // For production, use the configured site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (siteUrl) {
    return siteUrl;
  }
  
  // Fallback to Vercel URL if available
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return vercelUrl.startsWith('http') ? vercelUrl : `https://${vercelUrl}`;
  }
  
  // Fallback for development
  return process.env.NEXT_PUBLIC_DEV_URL || "http://localhost:3000";
}
