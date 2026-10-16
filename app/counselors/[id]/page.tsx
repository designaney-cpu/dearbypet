import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dummyCounselors } from "@/components/CounselorList";
import CounselorDetail from "@/components/CounselorDetail";
import type { CounselorDetailData } from "@/components/CounselorDetail";

// 시안 확인용 공통 상세 데이터입니다.
// 실제 운영 시에는 상담사별 API 데이터로 교체합니다.
const demoDetails = {
  certificates: [
    "임상심리사1급 (보건복지부)",
    "상담심리사 1급",
    "전문상담교사2급 (교육부)",
    "사회복지사1급 (보건복지부)",
  ],
  careers: [
    "현재) 심리상담센터 소장",
    "현재) 온라인상담 전문상담사",
    "이전) 서울시교육청 순회상담사",
    "이전) 심바 대표코치",
  ],
  topics: [
    "펫로스 상담",
    "연애",
    "대인관계/따돌림",
    "자아/성격",
    "정신건강",
    "직장",
  ],
  symptoms: [
    "우울",
    "스트레스",
    "불안",
    "자존감",
    "외로움",
    "번아웃/무기력",
  ],
  advice: [
    "펫로스 상담은 꼭 일상생활이 어려울 만큼 큰 상실감이나 심각한 우울을 겪는 분들만 받는 것은 아닙니다.",
    "반려동물과의 이별을 앞두고 마음이 복잡하거나, 이별 이후 문득문득 밀려오는 그리움과 죄책감, 허전함을 혼자 정리하기 어려울 때에도 상담의 도움을 받을 수 있습니다. 오히려 감정이 크게 무너지기 전에 자신의 마음을 천천히 살펴보는 것이 회복에 도움이 될 수 있습니다.",
    "마음도 주기적으로 돌봄이 필요합니다. 함께했던 시간을 떠올리며 여러 감정이 뒤섞일 때, 상담은 그 감정을 억누르거나 빨리 잊게 만드는 것이 아니라 지금의 마음을 있는 그대로 바라보고 정리할 수 있도록 돕습니다.",
    "펫로스 상담에서 다루는 주제는 생각보다 다양합니다. 이별을 앞둔 불안, 상실감, 죄책감, 후회, 가족 간의 애도 방식 차이, 일상으로 돌아가는 어려움, 새로운 반려동물을 맞이하는 것에 대한 고민 등 보호자가 겪는 여러 감정을 함께 살펴볼 수 있습니다.",
  ],
};

export default async function CounselorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const counselor = dummyCounselors.find(
    (item) => item.id === id
  );

  if (!counselor) {
    notFound();
  }

  const detail: CounselorDetailData = {
    ...counselor,
    ...demoDetails,
  };

  return (
    <>
      <Header />

      <main className="bg-white">
        <CounselorDetail
          key={counselor.id}
          counselor={detail}
        />
      </main>

      <Footer />
    </>
  );
}