import NavbarComp from "../components/navbar";

export default function AboutUs() {
  return (
    <div className="">
      <NavbarComp />
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto space-y-6">
        <h1 className="text-2xl font-bold md:text-3xl dark:text-white">
          About Us
        </h1>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
          At CoWorks, we provide flexible, dynamic workspaces designed for
          productivity, collaboration, and community. Whether you’re a
          freelancer, startup, or established business, our modern,
          fully-equipped workstations, private offices, and meeting rooms offer
          a perfect setting for growth. With high-speed internet, seamless
          technology, and an inspiring atmosphere, we support your business
          needs in an environment tailored to inspire creativity and efficiency.
          Join us for a workspace that adapts to you, promotes networking
          opportunities, and builds a community of motivated professionals.
        </p>
        <figure>
          <img
            className="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image"
          />
          <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
            A woman sitting at a table.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
