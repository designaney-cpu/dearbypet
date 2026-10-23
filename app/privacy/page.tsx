import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | Dear By Pet",
  description: "DearByPet 개인정보 처리방침",
};

const retentionItems = [
  {
    category: "일반 문의 및 상담 요청",
    period: "문의 처리 완료 후 1년",
  },
  {
    category: "상담사·전문가 지원 정보",
    period: "지원 절차 종료 후 1년",
  },
  {
    category: "파트너 계약 관련 정보",
    period: "계약 종료 후 관련 법령에서 정한 기간",
  },
  {
    category: "서비스 이용 및 거래 관련 정보",
    period: "관련 법령에서 정한 기간",
  },
];

// 공개 전 실제 이용 업체와 업무 내용으로 교체해 주세요.
const processors = [
  {
    company: "가비아",
    task: "웹사이트 운영 및 호스팅",
  },
  {
    company: "디어바이펫",
    task: "문의·지원 접수",
  },
  {
    company: "디어바이펫",
    task: "이메일 발송 및 고객 문의 관리",
  },
];

// 공개 전 담당자 정보와 날짜를 확정해 주세요.
const privacyContact = {
  name: "[담당자명]",
  position: "[직책]",
  email: "[담당 이메일]",
  phone: "[대표 연락처]",
};

const announcementDate = "[2026년 ○월 ○일]";
const effectiveDate = "[2026년 ○월 ○일]";

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <h2
        id={id}
        className="text-[20px] font-semibold leading-[30px] lg:text-[24px] lg:leading-[36px]"
      >
        {title}
      </h2>

      <div className="space-y-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="w-full bg-white text-[#5c4b42]">
        <article
          aria-labelledby="privacy-title"
          className="mx-auto max-w-[1356px] px-6 py-14 lg:px-[50px] lg:py-20"
        >
          <h1
            id="privacy-title"
            className="font-gowun break-keep text-[32px] font-normal leading-[44px] tracking-[-0.5px] lg:text-[42px] lg:leading-[61px]"
          >
            개인정보 처리방침
          </h1>

          <div className="font-pretendard mt-10 space-y-10 break-words text-[16px] leading-[27px] tracking-[-0.5px] lg:px-[30px] lg:text-[18px]">
            {/* 소개 */}
            <div className="space-y-4">
              <p>
                <strong className="font-semibold">
                  DearByPet(이하 “디어바이펫” 또는 “회사”)
                </strong>
                은 「개인정보 보호법」 등 관련 법령을 준수하며,
                이용자의 개인정보와 권익을 보호하기 위해 다음과 같이
                개인정보 처리방침을 수립·공개합니다.
              </p>

              <p>
                본 개인정보 처리방침은 디어바이펫이 운영하는 웹사이트
                및 관련 서비스에 적용됩니다.
              </p>

              <p>
                디어바이펫은 관계 법령의 개정, 서비스 내용의 변경 또는
                내부 운영 정책의 변경 등에 따라 개인정보 처리방침을
                변경할 수 있습니다. 개인정보 처리방침이 변경되는 경우
                웹사이트를 통해 변경 내용을 안내합니다.
              </p>
            </div>

            <PolicySection
              id="privacy-purpose"
              title="1. 개인정보의 처리 목적"
            >
              <p>
                디어바이펫은 다음의 목적을 위하여 개인정보를 처리합니다.
                수집된 개인정보는 아래 목적 이외의 용도로 이용하지
                않으며, 이용 목적이 변경되는 경우 관련 법령에 따라
                필요한 조치를 진행합니다.
              </p>

              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold">
                    서비스 문의 및 상담 안내
                  </dt>
                  <dd className="mt-1">
                    서비스 이용 문의 확인, 문의 내용에 대한 답변 및
                    안내를 위해 개인정보를 처리합니다.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">
                    전문가·상담사 지원 및 파트너 제휴
                  </dt>
                  <dd className="mt-1">
                    상담사 및 전문가 지원자의 자격·경력 확인,
                    지원 검토, 인터뷰 및 결과 안내, 파트너십 협의를
                    위해 개인정보를 처리합니다.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">
                    서비스 신청 및 고객 지원
                  </dt>
                  <dd className="mt-1">
                    향후 제공되는 상담, 메모리얼, 이별 준비 관련
                    서비스 신청 확인 및 고객 지원을 위해 개인정보를
                    처리할 수 있습니다.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">
                    서비스 개선 및 안정적인 운영
                  </dt>
                  <dd className="mt-1">
                    서비스 이용 현황 분석, 서비스 품질 개선,
                    보안 및 부정 이용 방지 등을 위해 필요한 범위에서
                    정보를 처리할 수 있습니다.
                  </dd>
                </div>
              </dl>
            </PolicySection>

            <PolicySection
              id="privacy-items"
              title="2. 처리하는 개인정보의 항목"
            >
              <p>
                디어바이펫은 서비스 이용 과정에서 필요한 최소한의
                개인정보만을 수집합니다.
              </p>

              <div className="space-y-2">
                <h3 className="font-semibold">일반 문의</h3>
                <BulletList
                  items={[
                    "이름",
                    "연락처 또는 이메일 주소",
                    "문의 내용",
                  ]}
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">상담사·전문가 지원</h3>
                <BulletList
                  items={[
                    "이름",
                    "연락처",
                    "이메일 주소",
                    "전문 분야",
                    "보유 자격",
                    "주요 경력 및 상담 경험",
                    "지원자가 직접 제출하는 이력·경력 관련 자료",
                  ]}
                />
              </div>

              <p>
                지원 과정에서 주민등록번호 등 고유식별정보는
                원칙적으로 수집하지 않습니다.
              </p>

              <p>
                향후 실제 계약 체결 또는 정산 과정에서 법령상 필요한
                정보가 발생하는 경우 별도의 안내 및 적법한 절차에 따라
                처리합니다.
              </p>

              {/* 실제 수집 정보와 분석 도구 사용 여부에 맞춰 수정 */}
              <div className="space-y-2">
                <h3 className="font-semibold">
                  자동으로 생성될 수 있는 정보
                </h3>
                <p>
                  웹사이트 이용 과정에서 다음 정보가 자동으로
                  생성·수집될 수 있습니다.
                </p>
                <BulletList
                  items={[
                    "접속 기록",
                    "IP 주소",
                    "브라우저 및 기기 정보",
                    "쿠키 등 서비스 이용 기록",
                  ]}
                />
              </div>
            </PolicySection>

            <PolicySection
              id="privacy-retention"
              title="3. 개인정보의 처리 및 보유기간"
            >
              <p>
                디어바이펫은 개인정보의 처리 목적이 달성되거나
                보유기간이 종료된 경우 지체 없이 개인정보를 파기합니다.
              </p>

              {/* 시안의 보유기간입니다. 실제 운영 기준 확인 필요 */}
              <div className="overflow-hidden rounded-lg border border-[#dbdadd]">
                <table className="w-full table-fixed border-collapse text-left text-[14px] leading-6 sm:text-[16px]">
                  <caption className="sr-only">
                    개인정보 구분별 보유기간
                  </caption>
                  <thead className="bg-[#f4f0ed]">
                    <tr>
                      <th
                        scope="col"
                        className="w-1/2 px-4 py-3 font-semibold sm:px-5"
                      >
                        구분
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 font-semibold sm:px-5"
                      >
                        보유기간
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {retentionItems.map((item) => (
                      <tr
                        key={item.category}
                        className="border-t border-[#dbdadd]"
                      >
                        <th
                          scope="row"
                          className="px-4 py-4 align-top font-normal sm:px-5"
                        >
                          {item.category}
                        </th>
                        <td className="px-4 py-4 align-top sm:px-5">
                          {item.period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                다만 관계 법령에 따라 일정 기간 보존할 의무가 있는
                경우에는 해당 기간 동안 안전하게 보관합니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-third-party"
              title="4. 개인정보의 제3자 제공"
            >
              <p>
                디어바이펫은 원칙적으로 이용자의 개인정보를
                제3자에게 제공하지 않습니다.
              </p>
              <p>다만 다음의 경우에는 예외로 합니다.</p>

              <BulletList
                items={[
                  "정보주체가 사전에 동의한 경우",
                  "법령에 특별한 규정이 있는 경우",
                  "서비스 제공을 위해 전문가 또는 파트너 연결이 필요하고, 이에 대해 이용자의 동의를 받은 경우",
                ]}
              />

              <p>
                향후 상담사, 장례 관련 전문가 등에게
                개인정보를 제공할 필요가 발생하는 경우에는 제공받는 자,
                제공 목적, 제공 항목 및 보유기간을 사전에 명확하게
                안내하고 필요한 동의를 받습니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-processors"
              title="5. 개인정보 처리업무의 위탁"
            >
              <p>
                디어바이펫은 원활한 서비스 제공을 위하여 필요한 경우
                개인정보 처리 업무의 일부를 외부 전문업체에
                위탁할 수 있습니다.
              </p>

              <div className="overflow-hidden rounded-lg border border-[#dbdadd]">
                <table className="w-full table-fixed border-collapse text-left text-[14px] leading-6 sm:text-[16px]">
                  <caption className="sr-only">
                    개인정보 처리 수탁업체 및 위탁 업무
                  </caption>
                  <thead className="bg-[#f4f0ed]">
                    <tr>
                      <th
                        scope="col"
                        className="w-2/5 px-4 py-3 font-semibold sm:px-5"
                      >
                        수탁업체
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 font-semibold sm:px-5"
                      >
                        위탁 업무
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {processors.map((item) => (
                      <tr
                        key={item.task}
                        className="border-t border-[#dbdadd]"
                      >
                        <th
                          scope="row"
                          className="px-4 py-4 align-top font-normal sm:px-5"
                        >
                          {item.company}
                        </th>
                        <td className="px-4 py-4 align-top sm:px-5">
                          {item.task}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                수탁업체 또는 위탁 내용이 변경되는 경우
                본 개인정보 처리방침을 통해 공개합니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-overseas"
              title="6. 개인정보의 국외 이전"
            >
              {/* 실제 사용하는 호스팅·문의 접수·이메일 서비스 확인 후
                  이전받는 자, 국가, 항목, 목적, 방법, 보유기간 등을 확정 */}
              <p>
                디어바이펫이 사용하는 웹사이트 호스팅, 이메일,
                분석 또는 문의 접수 서비스의 서버가 대한민국 외
                지역에 위치하는 경우 개인정보가 국외에서
                처리될 수 있습니다.
              </p>

              <p>
                해당 사항이 발생하는 경우 관련 법령에 따라
                이전받는 자, 이전 국가, 이전 항목, 이전 목적,
                이전 방법 및 보유기간 등을 이용자에게 안내합니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-destruction"
              title="7. 개인정보의 파기절차 및 방법"
            >
              <p>
                디어바이펫은 개인정보 보유기간의 경과 또는 처리 목적
                달성 등 개인정보가 불필요하게 되었을 때 지체 없이
                해당 개인정보를 파기합니다.
              </p>

              <p>
                전자적 파일 형태의 개인정보는 복구 또는 재생되지 않도록
                안전한 방법으로 삭제하며, 종이 문서 형태의 개인정보는
                분쇄하거나 소각하는 등의 방법으로 파기합니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-rights"
              title="8. 정보주체의 권리 및 행사방법"
            >
              <p>
                이용자는 언제든지 자신의 개인정보에 대해 다음과 같은
                권리를 행사할 수 있습니다.
              </p>

              <BulletList
                items={[
                  "개인정보 열람 요구",
                  "개인정보 정정·삭제 요구",
                  "개인정보 처리정지 요구",
                  "동의 철회",
                  "관련 법령에 따른 개인정보 전송 요구",
                ]}
              />

              <p>
                권리 행사는 디어바이펫의 개인정보 보호 담당자에게
                이메일 등을 통해 요청할 수 있으며, 회사는 관련 법령에
                따라 지체 없이 필요한 조치를 취합니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-security"
              title="9. 개인정보의 안전성 확보조치"
            >
              <p>
                디어바이펫은 개인정보가 분실·도난·유출·변조 또는
                훼손되지 않도록 다음과 같은 보호조치를 취합니다.
              </p>

              <BulletList
                items={[
                  "개인정보 접근 권한 최소화",
                  "개인정보 접근 통제",
                  "개인정보를 취급하는 계정의 안전한 관리",
                  "개인정보 보관기간 최소화",
                  "개인정보의 안전한 삭제 및 파기",
                  "개인정보 관련 사고 예방을 위한 내부 관리",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="privacy-cookies"
              title="10. 쿠키 및 이용정보"
            >
              <p>
                디어바이펫은 이용자에게 보다 나은 웹사이트 경험을
                제공하기 위해 쿠키 또는 유사한 기술을
                사용할 수 있습니다.
              </p>

              <p>
                이용자는 웹브라우저 설정을 통해 쿠키의 저장을
                허용하거나 거부할 수 있습니다.
              </p>

              <p>
                향후 Google Analytics 등 웹 분석 서비스를 사용하는
                경우 해당 서비스의 개인정보 처리 방식 및 거부 방법을
                추가로 안내합니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-contact"
              title="11. 개인정보 보호책임자"
            >
              <p>
                디어바이펫은 개인정보 처리와 관련한 문의와 권리 행사를
                지원하기 위해 개인정보 보호책임자를 지정합니다.
              </p>

              <div className="rounded-lg bg-[#f4f0ed] p-5 sm:p-6">
                <h3 className="mb-3 font-semibold">
                  개인정보 보호책임자
                </h3>

                <dl className="space-y-2">
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0">성명</dt>
                    <dd>이화신</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0">직책</dt>
                    <dd>대표</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0">이메일</dt>
                    <dd className="min-w-0 break-all">
                      dearbypet@naver.com
                    </dd>
                  </div>
                </dl>
              </div>

              <p>
                개인정보 침해와 관련한 상담이 필요한 경우
                개인정보침해신고센터 또는 개인정보분쟁조정위원회 등
                관계 기관에 문의할 수 있습니다.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-changes"
              title="12. 개인정보 처리방침의 변경"
            >
              <p>
                본 개인정보 처리방침은 시행일로부터 적용됩니다.
              </p>

              <p>
                내용이 변경되는 경우 변경 사항 및 시행일을
                웹사이트를 통해 안내합니다.
              </p>

              <div className="border-t border-[#dbdadd] pt-5">
                <p>공고일: 2026년 10월 20일</p>
                <p>시행일: 2026년 10월 20일</p>
              </div>
            </PolicySection>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}