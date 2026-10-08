// FormSubmit 제출 성공 후 리다이렉트되는 최소 페이지
// iframe 안에서 로드되며, postMessage로 부모에게 성공을 알립니다.
export default function PartnerSubmitted() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              window.parent.postMessage("formsubmit-success", "*");
            } catch(e) {}
          `,
        }}
      />
      <p style={{ fontFamily: "sans-serif", padding: "1rem" }}>제출 완료</p>
    </>
  );
}
