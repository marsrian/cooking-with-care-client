import CountUp, { useCountUp } from "react-countup";

const Summary = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
      <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <CountUp start={0} end={500} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex my-auto">
                <h5
                  ref={countUpRef}
                  className="font-bold text-[42px] mb-4"
                ></h5>
                <span className="font-bold text-[42px]">+</span>
              </div>
            )}
          </CountUp>
          <h3 className="text-lg font-medium">Happy Customer</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CountUp start={0} end={25} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex my-auto">
                <h5
                  ref={countUpRef}
                  className="font-bold text-[42px] mb-4"
                ></h5>
                <span className="font-bold text-[42px]">+</span>
              </div>
            )}
          </CountUp>
          <h3 className="text-lg font-medium">Foods</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CountUp start={0} end={12} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex my-auto">
                <h5
                  ref={countUpRef}
                  className="font-bold text-[42px] mb-4"
                ></h5>
                <span className="font-bold text-[42px]">+</span>
              </div>
            )}
          </CountUp>
          <h3 className="text-lg font-medium">Chefs</h3>
        </div>
      </div>
  );
};

export default Summary;
