import React from "react";
import Laptop from "../assets/laptop.jpg";
import grad from "../assets/grad.jpg";

const Analytics = () => {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img className='w-[500px] mx-auto my-4' src={grad} alt='/' />
				<div className='flex flex-col justify-center'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]'>
						Welcome to Immaculada Concepcion College !
					</h1>
					<p>
						Our commitment here at ICC is to provide a safe and intellectually
						challenging environment that will empower students to become
						innovative thinkers, creative problem solvers and inspired learners
						prepared to thrive in the twenty-first century. High standards and
						expectations for each student in regard to academic performance,
						co-curricular participation, and responsible citizenship are the
						foundation of our school. It is with pride that we hold these high
						standards and ask each of our students to commit to maintaining the
						extraordinary record of achievement and contribution that has been
						the legacy of ICC students. It is the contribution of our students
						to our school community that makes Immaculada Concepcion College an
						extraordinary learning community. Full participation in academic and
						co-curricular programs and a willingness to act responsibly as an
						individual within our educational environment are the factors that
						enable all to have a successful and enjoyable year. It gives me
						great pleasure, as Principal of Immaculada Concepcion College, to
						welcome you to the official ICC website. This website has been
						prepared as a valuable source of school news and timely information
						for parents, students, and visitors. This website has been developed
						to enable everyone to become familiar with our school, its policies,
						and other procedures that are basic for the smooth functioning of
						our school, as well as to provide you with updated school news,
						schedules and events. Our school has a very long tradition and our
						staff takes great pride in providing a safe and secure learning
						environment, while at the same time offering a wide array of
						exciting and challenging academic programs. Our extensive menu of
						extracurricular activities, both academic and recreational, is
						unsurpassed. Our entire staff is committed to establishing a school
						environment that allows our students to flourish and to grow
						intellectually, emotionally, and socially. Our website will be
						updated regularly so as to provide visitors to it with updated
						notices and bulletins and other news on a variety of subjects. I
						hope you will find this site both helpful and easy to navigate.
						Mabuhay Immaculadians! Marcelino V. Agana, ICC President
					</p>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
