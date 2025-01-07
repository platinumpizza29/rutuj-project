export default function PricingComp() {
  return (
    <div className="max-w-screen mx-4 md:mx-12 lg:mx-24 xl:mx-48 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-center">
        Our Pricing
      </h1>
      <div className="grid grid-cols-1 my-10 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Starter
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Best for individuals who need occasional workspace access.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ₹1,000
              </strong>

              <span className="text-sm font-medium text-gray-700">/day</span>
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ₹5,000
              </strong>

              <span className="text-sm font-medium text-gray-700">/week</span>
            </p>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Flexible Open Seating </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> High-speed Wi-Fi </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  basic refreshments (tea/coffee)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Pro
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Ideal for small teams or individuals who need regular workspace
              access.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ₹12,500
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ₹40,000
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Flexible Open Seating </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Private Cabins </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Dedicated desk </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> mail handling </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  access to networking events
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Premium
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Designed for businesses needing dedicated space and premium
              amenities.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ₹40,000
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  12-Seater:
                  <strong className="font-bold text-gray-900"> ₹1,200</strong>
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  8-Seater:
                  <strong className="font-bold text-gray-900"> ₹1,000</strong>
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Private Cabins </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Conference Rooms </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> priority booking </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  printing/scanning facilities
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">premium refreshments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
