'use client'

import React from 'react'
import Image from 'next/image'

// Author Info
const author = {
  name: 'Isaac Chukwumeze',
  date: 'May 8, 2025',
  image: '/issaca.jpg',
}

const workouts = [
  {
    title: 'Gentle Warm-Up & Strength Routine',
    steps: [
      {
        title: '1️⃣ Seated or Standing March (3-5 mins)',
        items: [
          'Lift knees slowly while seated or standing',
          'Swing arms gently for balance',
          'Modification: If standing, hold onto a chair',
        ],
      },
      {
        title: '2️⃣ Shoulder Rolls (30 seconds forward, 30 seconds backward)',
        items: [
          'Roll shoulders forward in circles',
          'Roll shoulders backward in circles',
        ],
      },
      {
        title: '3️⃣ Seated or Standing Leg Swings (10 per leg)',
        items: [
          'Hold onto a wall or chair',
          'Gently swing one leg forward and back',
        ],
      },
      {
        title: '4️⃣ Arm Circles (10 small, 10 large in each direction)',
        items: [
          'Extend arms to the sides',
          'Make small circles, then larger ones',
        ],
      },
      {
        title: '5️⃣ Gentle Torso Twists (10 per side)',
        items: [
          'Keep movements slow and controlled',
          'Avoid excessive twisting if you have back pain',
        ],
      },
      {
        title: '6️⃣ Wall Push-Ups (10 reps)',
        items: [
          'Stand facing a wall, hands at shoulder height',
          'Lean in and push away slowly',
        ],
      },
      {
        title: '7️⃣ Seated or Standing Calf Raises (10 reps)',
        items: [
          'Lift heels off the ground, then lower slowly',
          'Modification: Hold onto a chair for support',
        ],
      },
    ],
  },
];

const cooldownWorkout = {
  title: 'Gentle Cooldown & Stretch Routine',
  steps: [
    {
      title: '1️⃣ Seated or Standing Forward Reach (30 seconds)',
      items: [
        'Extend arms forward to stretch the lower back & hamstrings',
        'Modification: Do it seated if standing hurts your back',
      ],
    },
    {
      title: '2️⃣ Seated or Standing Quadriceps Stretch (30 seconds per leg)',
      items: [
        'Hold onto a chair for balance',
        'Pull one foot towards your buttocks to stretch the front thigh',
        'Modification: Lie on your side and pull your leg back',
      ],
    },
    {
      title: '3️⃣ Seated or Standing Hamstring Stretch (30 seconds per leg)',
      items: [
        'Extend one leg straight and reach toward your toes',
      ],
    },
    {
      title: '4️⃣ Seated or Standing Chest Stretch (30 seconds)',
      items: [
        'Clasp hands behind your back and gently pull shoulders back',
      ],
    },
    {
      title: '5️⃣ Seated or Standing Side Stretch (30 seconds per side)',
      items: [
        'Reach one arm overhead and lean slightly to the side',
      ],
    },
    {
      title: '6️⃣ Deep Breathing (1-2 mins)',
      items: [
        'Inhale deeply through your nose, exhale slowly through your mouth',
        'Helps relax muscles and regulate heart rate',
      ],
    },
  ],
};


const warmup = () => {
  return (
    <section className=''>
        <div className='p-10 bg-black flex flex-col items-center text-white space-y-5'>
                <h1 className='text-center text-xl lg:text-3xl font-bold'>
                   Warm-Up & Stretching Guide <br /> for Obese Individuals with Joint or Heart Concerns
                </h1>
                <div className='flex items-center gap-5'>
                  <div className='border-2 rounded-full border-white'>
                    <Image
                      src={author.image}
                      alt='Author'
                      width={130}
                      height={130}
                      className='rounded-full h-[130px] w-[130px] object-cover max-sm:h-[90px] max-sm:w-[112px]'
                    />
                  </div>
                  <div>
                    <p>
                      Written by: <span className='font-semibold'>{author.name}</span>
                    </p>
                    <p>
                      Last updated: <span className='font-semibold'>{author.date}</span>
                    </p>
                  </div>
                </div>
              </div>

               <p className='mt-6 py-3 px-6 lg:px-10 text-center text-md lg:text-xl font-sans'>
                A proper <span className='font-bold'>warm-up (10-15 mins) prevents injuries, reduces joint pain, and improves workout performance </span>. A <span className='font-bold'>cool-down & stretching routine (5-10 mins)</span> helps with <span className='font-bold'>muscle recovery and flexibility</span>.
                </p>

                <div className='mt-6 w-full flex flex-col items-center'>
                   <h2 className='text-3xl max-lg:text-2xl font-bold font-sans text-center'>🏋️‍♂️ Pre-Workout Warm-Up (10-15 Minutes)</h2>
                   <p className='mt-4 text-center'>🎯 Goal: Increase blood flow, warm up muscles, and prepare joints for exercise.</p>
                </div>

              {workouts.map((workout, workoutIdx) => (
  <div key={workoutIdx} className="mt-6 w-full flex flex-col items-center">
    <h2 className="text-xl lg:text-3xl font-bold font-sans text-center">{workout.title}</h2>

    {workout.steps.map((step, stepIdx) => (
      <div key={stepIdx} className="mt-6 w-full flex flex-col items-center">
        <h3 className="text-xl lg:text-2xl font-semibold text-center">{step.title}</h3>
        <ul className="mt-4 space-y-2 list-disc text-left px-6">
          {step.items.map((item, itemIdx) => (
            <li key={itemIdx}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
))}


    <div className='mt-6 w-full flex flex-col items-center'>
                   <h2 className='text-3xl max-lg:text-2xl font-bold font-sans text-center'>🧘‍♂️ Post-Workout Cool-Down & Stretching (5-10 Minutes)</h2>
                   <p className='mt-4 text-center'>🎯 Goal: Prevent stiffness, reduce soreness, and improve flexibility.</p>
                </div>

              <div className='mt-6'>
        <h2 className='text-2xl lg:text-3xl font-bold text-center mb-6'>
    {cooldownWorkout.title}
  </h2>

  {cooldownWorkout.steps.map((step, stepIdx) => (
    <div key={stepIdx} className='mt-6 w-full flex flex-col items-center'>
      <h3 className='text-xl lg:text-2xl font-bold font-sans text-center'>
        {step.title}
      </h3>
      <ul className='mt-4 space-y-3 list-disc text-left px-6'>
        {step.items.map((item, itemIdx) => (
          <li key={itemIdx}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

<div className='p-6 mt-6 flex flex-col justify-center items-center'>
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Safety Tips</h1>
        <div className='space-y-2 font-sans mt-4 '>
          <p>✅ Move slowly and smoothly to prevent strain</p>
          <p>✅ Hold stretches gently—no bouncing!</p>
          <p> ✅ Breathe deeply to improve flexibility and recovery</p>
          
        </div>
        </div>

        <div className='mt-6 flex flex-col justify-center items-center'>
            <button className='text-center flex justify-center items-center text-2xl font-bold tracking-wide font-sans bg-black text-white py-3.5 px-4 rounded-full'>Check out some videos</button>

        </div>

  
    </section>
  )
}

export default warmup