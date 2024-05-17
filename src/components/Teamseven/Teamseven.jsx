import Section from "../Section";
import Heading from "../Heading";
import { team7,check } from "../../assets";
import { Gradient } from "../design/Gradient";
import { teamSeven } from "../../constants";


const Teamseven = () => {
  return (
    <Section id="teamseven">
        <div className="container">
          <Heading
            title="Unveil the Hidden Leaf Village"
            text="Uncover the secrets of the Hidden Leaf Village through the eyes of its iconic teams. Each team brings unique strengths and unforgettable stories that continue to inspire shinobi around the world."
          />
          <div className="relative">
            <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-5/5 xl:w-auto">
                <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Team 7"
                height={730}
                src={team7}
                />
              </div>

              
            <div className="relative z-1 max-w-[17rem] mr-auto">
              <h4 className="h4 mb-1 text-color-4">Team 7: The Power of Bonds</h4>
              <p className="body-2 mb-[3rem] text-n-1">
              Witness the growth, trials, and triumphs of Team 7 as they strive to protect their village and each other.
              </p>
              
              <ul className="body-2">
                {teamSeven.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-color-4 text-color-3"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>

            </div>
            </div>

            <div>

            </div>
            <Gradient />
          </div>
        </div>
    </Section>
  )
}

export default Teamseven