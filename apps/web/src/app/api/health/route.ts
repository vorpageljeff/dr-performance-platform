export function GET() {
  return Response.json({
    status: "ok",
    service: "dr-performance-web",
    timestamp: new Date().toISOString(),
  });
}
