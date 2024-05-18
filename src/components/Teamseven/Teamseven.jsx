import Section from "../Section";
import Heading from "../Heading";
import {
  team7,
  check,
  kakashi,
  narutopic,
  sasuke,
  sakura,
  arrow,
} from "../../assets";
import { Gradient } from "../design/Gradient";
import { teamSeven } from "../../constants";
import { BackgroundCircles } from "../design/Hero";

const Teamseven = () => {
  const onClickEvent = () => {
    const kakashiElement = document.getElementById("kakashi");
    if (kakashiElement) {
      kakashiElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <h4 className="h4 mb-1 text-color-4">
                Team 7: The Power of Bonds
              </h4>
              <p className="body-2 mb-[3rem] text-n-1">
                Witness the growth, trials, and triumphs of Team 7 as they
                strive to protect their village and each other.
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

            <button
              onClick={onClickEvent}
              className="flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 text-n-1"
            >
              <img className="w-5 h-5 mr-4" src={arrow} alt="Loading" />
              Check them out!
            </button>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-[1rem]">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0" id="kakashi">
                <img
                  src={kakashi}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="kakashi"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4 text-color-6">Kakashi Hatake</h4>
                <p className="body-2 mb-[3rem] text-n-1">
                  The Copy Ninja, is the seasoned leader of Team 7. Known for
                  his Sharingan eye and ability to copy any jutsu, Kakashi's
                  wisdom and combat prowess are invaluable to Naruto, Sasuke,
                  and Sakura as they grow into their roles as ninjas.
                </p>
              </div>
            </div>

            <div className="p-4 bg-color-9 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-color-6">Naruto Uzumaki</h4>
                <p className="body-2 mb-[2rem] text-n-1">
                  Naruto Uzumaki, a spirited and determined ninja, dreams of
                  becoming the Hokage. Despite his rough start as an orphaned
                  outcast, his boundless energy, never-give-up attitude, and the
                  power of the Nine-Tails fox spirit make him a true hero of
                  Konoha.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={narutopic}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Naruto"
                />
              </div>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mt-2">
            <div className="p-4 bg-color-9 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] mb-[2rem] mt-[4rem]">
                <img
                  src={sakura}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-color-6">Sakura Haruno</h4>
                <p className="body-2  text-n-1">
                  Sakura Haruno, an intelligent and strong-willed kunoichi,
                  transforms into a formidable medical ninja and powerful
                  combatant under Tsunade's guidance. Her exceptional chakra
                  control and healing abilities make her an indispensable member
                  of Team 7.
                </p>
              </div>
            </div>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={sasuke}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Sasuke"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4 text-color-6">Sasuke Uchiha</h4>
                <p className="body-2 mb-[3rem] text-n-1">
                  Sasuke Uchiha, the last surviving member of the prestigious
                  Uchiha clan, seeks to avenge his clan's massacre by his
                  brother Itachi. A prodigy with exceptional skills, Sasuke's
                  journey from darkness to redemption defines his complex
                  character.
                </p>
              </div>
            </div>
          </div>

          <BackgroundCircles />
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Teamseven;
