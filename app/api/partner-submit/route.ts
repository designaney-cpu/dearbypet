// app/api/partner-submit/route.ts
// FormSubmit은 서버사이드 요청을 차단합니다.
// 이 파일은 더 이상 사용되지 않으며, 폼은 브라우저에서 직접 FormSubmit으로 요청합니다.
export async function POST() {
  return Response.json({ success: false, error: "Not used" }, { status: 410 });
}
