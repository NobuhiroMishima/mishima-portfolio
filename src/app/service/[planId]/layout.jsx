import { servicecontent } from "@/features/service/constants/servicecontent";

export async function generateMetadata({ params }) {
    const { planId } = await params;
    const plan = servicecontent.find((plan) => plan.id == planId);

    return {
    title: `${plan.name} | mishima's portfolio`,
    description: plan.catch,
  };
}

function ServiceDetailLayout({ children }) {
  return <>{children}</>;
}

export default ServiceDetailLayout;
