'use client';

import React, { useState } from 'react';

const videos = [
  { name: 'Arm Circles', src: '/indoor/video1.mp4', reference: 'sworkit.com', referenceLink: 'https://www.sworkit.com/' },
  { name: 'Arm Swing', src: '/indoor/video2.mp4', reference: 'watch itnowentertainment.com', referenceLink: 'https://www.watchitnowentertainment.com/' },
  { name: 'Chair assisted jumping jacks', src: '/indoor/video3.mp4', reference: 'chairacise.com', referenceLink: 'https://www.chairacise.com/' },
  { name: 'Chair assisted squats', src: '/indoor/video4.mp4', reference: 'youtube.com/@AskDoctorJo', referenceLink: 'https://www.youtube.com/@AskDoctorJo' },
  { name: 'Gentle side bends', src: '/indoor/video5.mp4', reference: 'yoursportstrainer.com', referenceLink: 'https://www.yoursportstrainer.com/' },
  { name: 'March in place', src: '/indoor/video6.mp4', reference: 'DiTuroproductions.com', referenceLink: 'https://www.dituroproductions.com/' },
  { name: 'Seated bicep curl', src: '/indoor/video7.mp4', reference: 'vivehealth.com', referenceLink: 'https://www.vivehealth.com/' },
  { name: 'Seated dips', src: '/indoor/video8.mp4', reference: 'youtube.com/@howcast', referenceLink: 'https://www.youtube.com/@howcast' },
  { name: 'Seated foward bend', src: '/indoor/video9.mp4', reference: 'youtube.com/@sweatGreen', referenceLink: 'https://www.youtube.com/@sweatGreen' },
  { name: 'Seated knee lift', src: '/indoor/video10.mp4', reference: 'vivehealth.com', referenceLink: 'https://www.vivehealth.com/' },
  { name: 'Seated leg lifts', src: '/indoor/video11.mp4', reference: 'hmdiabetes.com', referenceLink: 'https://www.hmdiabetes.com/' },
  { name: 'Seated march', src: '/indoor/video12.mp4', reference: 'Gonzaba.com', referenceLink: 'https://www.gonzaba.com/' },
  { name: 'Seated quad stretch', src: '/indoor/video13.mp4', reference: 'sportsinjuryclinic.com', referenceLink: 'https://www.sportsinjuryclinic.com/' },
  { name: 'Seated toe taps', src: '/indoor/video14.mp4', reference: 'youtube.com/@teamfashafitness', referenceLink: 'https://www.youtube.com/@teamfashafitness' },
  { name: 'Seated wall push', src: '/indoor/video15.mp4', reference: 'youtube.com/@Ohfitness', referenceLink: 'https://www.youtube.com/@Ohfitness' },
  { name: 'Shoulder rolls', src: '/indoor/video16.mp4', reference: 'vivehealth.com', referenceLink: 'https://www.vivehealth.com/' },
  { name: 'Slow bodyweight squat', src: '/indoor/video17.mp4', reference: 'bupahealth.co.uk', referenceLink: 'https://www.bupa.co.uk/' },
  { name: 'Slow side lunges', src: '/indoor/video18.mp4', reference: 'childrenscolorado.org', referenceLink: 'https://www.childrenscolorado.org/' },
  { name: 'Standing bicep curl', src: '/indoor/video19.mp4', reference: 'healthwalafitness.com', referenceLink: 'https://www.healthwalafitness.com/' },
  { name: 'Standing leg lifts', src: '/indoor/video20.mp4', reference: 'youtube.com/@openfit', referenceLink: 'https://www.youtube.com/@openfit' },
  { name: 'Standing march', src: '/indoor/video21.mp4', reference: 'muhealth.org', referenceLink: 'https://www.muhealth.org/' },
  { name: 'Standing modified jumping jacks', src: '/indoor/video22.mp4', reference: 'hasfit.com', referenceLink: 'https://www.hasfit.com/' },
  { name: 'Standing quad stretch', src: '/indoor/video23.mp4', reference: 'youtube.com/ehow.com/fitness', referenceLink: 'https://www.youtube.com/ehow.com/fitness' },
  { name: 'Standing side bend', src: '/indoor/video24.mp4', reference: 'youtube.com/@LeapFitnessofficial', referenceLink: 'https://www.youtube.com/@LeapFitnessofficial' },
  { name: 'Standing toe taps', src: '/indoor/video25.mp4', reference: 'kyfitness.com', referenceLink: 'https://www.kyfitness.com/' },
  { name: 'Step up side to side', src: '/indoor/video26.mp4', reference: 'watch itnowentertainment.com', referenceLink: 'https://www.watchitnowentertainment.com/' },
  { name: 'Step ups', src: '/indoor/video27.mp4', reference: 'cornerstonephysiotherapy.com', referenceLink: 'https://www.cornerstonephysiotherapy.com/' },
  { name: 'Wall plank hold', src: '/indoor/video28.mp4', reference: 'onlinephysioexpert.com', referenceLink: 'https://www.onlinephysioexpert.com/' },
  { name: 'Wall push ups', src: '/indoor/video29.mp4', reference: 'youtube.com/@CISROTotalwellbeing', referenceLink: 'https://www.youtube.com/@CISROTotalwellbeing' },
];

const IndoorVideos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter((video) =>
    video.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8 px-5">
      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-4 w-full max-w-xl pr-4 rounded-md border-2 border-gray-700">
          <input
            type="text"
            placeholder="Search for workouts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-sm font-sans font-semibold outline-none text-gray-700 "
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-center text-2xl font-sans font-bold">
        Check out some indoor exercises videos
      </h1>

      {/* Video List - Always 1 per row */}
      <div className="mt-8 grid grid-cols-1 gap-6 max-w-3xl mx-auto">
        {filteredVideos.map((video, index) => (
          <div key={index} className="rounded-md border border-[#bbb9b9] shadow-md py-4 px-3 bg-white">
            <h2 className="text-lg font-semibold mb-2 text-center font-sans">{video.name}</h2>
            <video controls className="w-full h-64 lg:h-72 rounded-md object-cover">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-lg font-semibold mt-2 text-left font-sans">
              <span className=''>Reference</span>:{" "}
              <a 
                href={video.referenceLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-bold"
              >
                {video.reference}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoorVideos;