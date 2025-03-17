import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaVuejs, FaDatabase, FaDocker, FaJenkins, FaLinux, FaAws, FaCloud, FaCogs } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, percentage: 85 },
    { name: "Vue.js", icon: <FaVuejs className="text-green-400 text-3xl" />, percentage: 50 },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-3xl" />, percentage: 75 },
    { name: "Java & Spring Boot", icon: <FaCogs className="text-blue-600 text-3xl" />, percentage: 75 },
    { name: "Hibernate", icon: <FaCogs className="text-green-600 text-3xl" />, percentage: 90 },
    { name: "MySQL & PostgreSQL", icon: <FaDatabase className="text-yellow-600 text-3xl" />, percentage: 60 },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" />, percentage: 70 },
    { name: "Jenkins", icon: <FaJenkins className="text-red-400 text-3xl" />, percentage: 70 },
    { name: "Linux", icon: <FaLinux className="text-gray-400 text-3xl" />, percentage: 90 },
    { name: "Kubernetes", icon: <FaCloud className="text-blue-500 text-3xl" />, percentage: 40 },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-3xl" />, percentage: 40 },
    { name: "Kafka", icon: <FaCogs className="text-purple-500 text-3xl" />, percentage: 60 },
    { name: "Roles & Drols", icon: <FaCogs className="text-pink-500 text-3xl" />, percentage: 50 }
  ];

function Skill() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="mt-10 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">My Skill Set</h2>
        <p className="text-base text-gray-300 mb-6">
          As a backend developer with expertise in Java, Spring Boot, and DevOps, I also have proficiency in modern frontend technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="p-2 bg-black rounded-lg shadow-md w-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center gap-1"
              >
                {skill.icon}
                <p className="text-white text-xs font-medium ">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="bg-blue-400 h-1.5 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-gray-400 text-xs">{skill.percentage}%</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
