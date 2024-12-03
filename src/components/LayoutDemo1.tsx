const LayoutDemo1 = () => {
  return (
    <>
      <div className="flex-col p-5 bg-orange-400 gap">
        <div className="grid gap-10 p-5 auto-rows-min md:grid-cols-5 bg-fuchsia-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-red-500 aspect-square rounded-xl bg-muted/50 "
            >
              <h1>Hello</h1>
            </div>
          ))}
        </div>

        <section className="p-2 text-gray-600 bg-green-300 body-font">
          <div className="container px-5 py-24 mx-auto bg-yellow-400">
            <div className="flex flex-col w-full mb-20 text-center bg-blue-400">
              <h2 className="mb-1 text-xs font-medium tracking-widest text-yellow-500 title-font">
                ROOF PARTY POLAROID
              </h2>
              <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 p-4 bg-rose-200">
              <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60 bg-slate-700">
                <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                  Shooting Stars
                </h2>
                <p className="mb-4 text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="inline-flex items-center text-yellow-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <div className="px-8 py-6 border-l-2 border-gray-200 bg-violet-300 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
                <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                  The Catalyzer
                </h2>
                <p className="mb-4 text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="inline-flex items-center text-yellow-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
                <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                  Neptune
                </h2>
                <p className="mb-4 text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="inline-flex items-center text-yellow-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
                <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                  Melanchole
                </h2>
                <p className="mb-4 text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="inline-flex items-center text-yellow-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
              Button
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutDemo1;
