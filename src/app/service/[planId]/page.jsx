import Headline from "@/components/elements/title/Headline";
import { servicecontent } from "@/features/service/constants/servicecontent";
import "../../../app/rotateCard.css";
import RelatedServices from "@/features/service/RelatedServices";
import PageTransitionButton from "@/components/elements/button/PageTransitionButton";
import ServiceDetailContent from "@/features/service/ServiceDetailContent";
import ServiceDetailOption from "@/features/service/ServiceDetailOption";
import ServiceMV from "@/features/service/ServiceMV";
import ServiceTitle from "@/features/service/ServiceTitle";

async function PlanDetail({ params }) {
  const { planId } = await params;

  const plan = servicecontent.find((plan) => plan.id == planId);
  if (!plan) {
    notFound();
  }

  // 現在のサービスを取得するロジック
  const currentService = servicecontent.find(service => service.id === parseInt(planId));

  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse items-start mb-12">
          <Headline title={plan.catch} subtitle={plan.subcatch} />
        </div>
        <div className="flex flex-col gap-20 mb-40">
          <div className="flex flex-col lg:flex-row gap-x-20 gap-y-5 items-center lg:items-start">
            <ServiceMV plan={plan} />
            <ServiceTitle plan={plan} />
          </div>
          <ServiceDetailContent plan={plan} />
          <ServiceDetailOption plan={plan} />
        </div>
        <div className="mb-20">
          <RelatedServices currentService={currentService} />
        </div>
        <div className="flex justify-center">
          <PageTransitionButton
            page={"service"}
            textcolor={"black"}
            bgcolor={"white"}
            text={"一覧に戻る"}
          />
        </div>
      </div>
    </section>
  );
}

export default PlanDetail;
