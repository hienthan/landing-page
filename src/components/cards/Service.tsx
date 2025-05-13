import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export const Service = ({
  title,
  description,
  icon,
  features,
}: ServiceProps) => {
  return (
    <div
      className="p-5 sm:p-4 lg:p-6 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden"
    >
      <div className="flex items-center gap-2">
        <span className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
          {icon}
        </span>
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {title}
        </h2>
      </div>
      <div className="space-y-4 relative">
        <Paragraph> {description}</Paragraph>
      </div>
      <ul className="mt-4 flex-1 space-y-3 text-left text-heading-3">
        {features.map((feature, keyFeatures) => (
          <li key={keyFeatures} className="flex items-center gap-2">
            <span className="text-primary">➖ </span>
            <span>{feature} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
