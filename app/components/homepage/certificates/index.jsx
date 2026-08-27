// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { BsCheckCircleFill } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/development.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certificates() {
  const certificateHighlights = [
    {
      id: 1,
      title: "AI, Machine Learning & Deep Learning",
      issuer: "Verified Credentials & Certifications",
      badge: "Verified",
      desc: "Specialized credentials in Generative AI, LLM applications, RAG architecture, Deep Learning, and Machine Learning engineering."
    },
    {
      id: 2,
      title: "Full Stack & Web Development",
      issuer: "Verified Credentials & Certifications",
      badge: "Verified",
      desc: "Certifications in modern full-stack development, Next.js, React, Node.js, REST API architecture, and database engineering."
    },
    {
      id: 3,
      title: "Cloud Computing, DevOps & Problem Solving",
      issuer: "Verified Credentials & Certifications",
      badge: "Verified",
      desc: "Cloud infrastructure, Docker, Git workflows, and Data Structures & Algorithms problem-solving accomplishments."
    }
  ];

  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-medium">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 h-3/4 max-w-[420px]">
              <AnimationLottie animationPath={lottieFile} />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm text-center mt-4 px-4 max-w-md">
              Access all my verified certificates, course completion credentials, and achievements stored on Google Drive.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {certificateHighlights.map((cert) => (
                <GlowCard key={cert.id} identifier={`cert-${cert.id}`}>
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-between items-center px-3 pt-1">
                      <span className="text-xs text-[#16f2b3] flex items-center gap-1 font-mono">
                        <BsCheckCircleFill className="text-[#16f2b3]" size={12} />
                        {cert.badge}
                      </span>
                      <p className="text-xs text-violet-300 font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-5 px-3 py-4">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                        <PiCertificateBold size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg mb-1 font-medium uppercase text-white">
                          {cert.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-300">
                          {cert.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:mt-10">
        <Link
          className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 md:px-10 py-3.5 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out hover:text-white hover:no-underline hover:scale-105 shadow-lg shadow-pink-500/20 md:font-semibold"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href={personalData.certificates}
        >
          <FaGoogleDrive size={18} />
          <span>View All Certificates on Google Drive</span>
          <FaExternalLinkAlt size={13} />
        </Link>
      </div>
    </div>
  );
}

export default Certificates;
