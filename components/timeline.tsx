"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const workExperiences = [
	{
		title: "Coding Instructor",
		company: "Toronto District School Board",
		period: "Septemeber 2023 - June 2024",
		description:
			"Taught basic programming to students. Developed curriculum and hands-on projects to enhance learning. Lead and developed a coding club for students interested in programming. Creating projects to showcase throughout the school and refine their passions",
	},
	{
		title: "Lifeguard",
		company: "City Of Brampton",
		period: "October 2022 - August 2023",
		description:
			"Ensured the safety of swimmers at public pools. Conducted swimming lessons and maintained pool facilities. Developed strong communication and leadership skills while working with diverse groups.",
	},
	{
		title: "Flight Sergeant Air Cadet",
		company: "Royal Canadian Air Cadets - 132 Spitfire Squadron",
		period: "October 2018 - June 2024",
		description:
			"Led a team of cadets in various activities, including drill, leadership training, and community service. Organized events and participated in national competitions. Developed leadership, teamwork, and organizational skills.",
	},
]

const educationExperiences = [
	{
		title: "Bachelor of Engineering",
		company: "McMaster University",
		period: "September 2024 - Present",
		description:
			"Currently pursuing a degree in Engineering. Focusing on software development, algorithms, system design, Embedded Systems. Participating in various coding projects and hackathons.",
	},
	{
		title: "High School Diploma",
		company: "Brampton Centennial Secondary School",
		period: "September 2020 - June 2024",
		description:
			"Graduated with honors. Active participant in coding club and robotics team. Led multiple technology-focused initiatives and projects.",
	},
	
]

const TimelineContent = ({
	experiences,
	isMobile,
}: {
	experiences: any[]
	isMobile: boolean
}) => (
	<div
		className={`space-y-12 relative ${
			!isMobile
				? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
				: ""
		}`}
	>
		{experiences.map((experience, index) => (
			<div
				key={index}
				className={`relative z-10 flex items-center ${
					index % 2 === 0
						? "md:flex-row-reverse"
						: "md:flex-row"
				}`}
			>
				<motion.div
					className={`w-full md:w-1/2 ${
						index % 2 === 0 ? "md:pl-10" : "md:pr-10"
					}`}
					initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
						<div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

						<div className="relative">
							<h3 className="text-xl font-bold">{experience.title}</h3>
							<div className="text-zinc-400 mb-4">
								{experience.company} | {experience.period}
							</div>
							<p className="text-zinc-300">{experience.description}</p>
						</div>
					</div>
				</motion.div>

				{!isMobile && (
					<div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
						<motion.div
							className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							viewport={{ once: true }}
						>
							<div className="w-2 h-2 rounded-full bg-white"></div>
						</motion.div>
					</div>
				)}
			</div>
		))}
	</div>
)

export function Timeline() {
	const isMobile = useMobile()

	return (
		<Tabs defaultValue="experience" className="w-full">
			<div className="flex justify-center mb-8">
				<TabsList className="bg-zinc-800/50 border border-zinc-700/50">
					<TabsTrigger
						value="experience"
						className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
					>
						Work Experience
					</TabsTrigger>
					<TabsTrigger
						value="education"
						className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
					>
						Education & Certifications
					</TabsTrigger>
				</TabsList>
			</div>

			<TabsContent value="experience">
				<TimelineContent
					experiences={workExperiences}
					isMobile={isMobile}
				/>
			</TabsContent>

			<TabsContent value="education">
				<TimelineContent
					experiences={educationExperiences}
					isMobile={isMobile}
				/>
			</TabsContent>
		</Tabs>
	)
}
