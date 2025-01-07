export default function FaqComp() {
  return (
    <div className="max-w-[85rem] mx-4 md:mx-12 lg:mx-24 xl:mx-48 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              What is a coworking space?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              A coworking space is a shared workspace where individuals and
              teams can work in a professional environment with access to
              amenities like high-speed internet, meeting rooms, and networking
              opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Who can use your coworking space?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              We serve a diverse community, including freelancers, solopreneurs,
              small teams, startups, corporate remote workers, consultants, and
              client-facing professionals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              How does Preline's pricing work?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Our subscriptions are tiered. Understanding the task at hand and
              ironing out the wrinkles is key.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              What are the working hours?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Our coworking space is open from [insert hours, e.g., 9:00 AM to
              8:00 PM] on weekdays. Extended hours or 24/7 access can be
              arranged for premium members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
