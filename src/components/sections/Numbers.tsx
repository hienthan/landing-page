import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex flex-col items-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 w-full rounded-3xl bg-box-bg
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              1.4B
            </h2>
            <p className="mt-2 text-heading-3">People Over 40 Globally</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              625M+
            </h2>
            <p className="mt-2 text-heading-3"> Active Knowledge Workers</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              60%
            </h2>
            <p className="mt-2 text-heading-3">
              {" "}
              Uncomfortable With Current Tools
            </p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              50%+
            </h2>
            <p className="mt-2 text-heading-3">
              {" "}
              Workforce In Need Of Reskilling​
            </p>
          </div>
        </div>
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border
         shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-2 mt-6"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              $11B → $30B
            </h2>
            <p className="mt-2 text-heading-3">
              Voice AI market by 2030 (Statista)​
            </p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              $76B → $93B
            </h2>
            <p className="mt-2 text-heading-3">
              {" "}
              Productivity software market by 2032 (CAGR 2.3%)​
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
