'use client'

import React from 'react'
import Image from 'next/image'

// Author Info
const author = {
  name: 'Isaac Chukwumeze',
  date: 'May 8, 2025',
  image: '/issaca.jpg',
}

const keyFeatures = [
  'Low-impact cardio (joint-friendly)',
  'Bodyweight strength training (no equipment needed)',
  'Flexibility & core work (prevents injury)',
  'Scalable for different fitness levels',
]

// Plan Overview
const planOverview = [
  { label: 'Days per week', value: '4-6' },
  { label: 'Workout time', value: '~60 minutes' },
  { label: 'Calories burned per session', value: '400-800' },
]


const updatedWorkout = [
  {
    title: 'Day 1 & Day 4 – Low-Impact Cardio & Bodyweight Strength',
    calories: '500-700',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          '5-minute brisk walk (flat surface or slight incline)',
          'Arm circles (10 forward, 10 backward)',
          'Leg swings (10 per leg, side-to-side & forward-back)',
          'Seated or standing calf raises (10 reps)',
        ],
      },
      {
        title: '2️⃣ Low-Impact Cardio (30 mins)',
        items: [
          'Power walk (Fast pace, 10 mins)',
          'Uphill walking or stair climbing (5 mins, slow pace)',
          'Walking lunges (Modify by reducing depth, 10 reps per leg)',
          'Slow jogging or fast-paced walking (10 mins, choose based on ability)',
          'Cool-down walk (5 mins)',
        ],
      },
      {
        title: '3️⃣ Strength Training (20 mins, Bodyweight Exercises)',
        items: [
          'Modified Squats (Use a bench for support) – 3 sets x 10 reps',
          'Push-ups (Against a wall, bench, or knees) – 3 sets x 10 reps',
          'Step-ups (Use a low step or curb) – 3 sets x 10 reps per leg',
          'Standing side leg lifts – 3 sets x 12 reps per side',
        ],
      },
    ],
  },
  {
    title: 'Day 2 & Day 5 – Endurance Walk + Core Workout',
    calories: '600-800',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Gentle arm circles & torso twists (30 seconds each)',
          'March in place (2 mins, slow pace)',
          'Dynamic stretching (leg swings, side lunges)',
        ],
      },
      {
        title: '2️⃣ Long Walk or Hike (40-50 mins, Moderate Pace)',
        items: [
          'Flat terrain: Walk faster',
          'Hilly terrain: Walk at a steady pace',
          'Modify: Shorten the walk if needed',
        ],
      },
      {
        title: '3️⃣ Core Strengthening (10 mins)',
        items: [
          'Standing side bends – 3 sets x 10 reps per side',
          'Seated knee lifts – 3 sets x 12 reps',
          'Wall plank hold – 3 sets x 30 seconds',
        ],
      },
    ],
  },
  {
    title: 'Day 3 & Day 6 – Cardio & Strength Combo',
    calories: '450-650',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Brisk walk (5 mins)',
          'Standing arm swings & torso rotations',
        ],
      },
      {
        title: '2️⃣ Interval Cardio (30 mins)',
        items: [
          '1 min power walk → 1 min slow walk (repeat 15 times)',
        ],
      },
      {
        title: '3️⃣ Outdoor Strength Workout (20 mins)',
        items: [
          'Bench push-ups – 3 sets x 10 reps',
          'Seated leg extensions (on a bench) – 3 sets x 12 reps',
          'Step-ups – 3 sets x 10 reps per leg',
          'Seated dips (use a park bench) – 3 sets x 10 reps',
        ],
      },
    ],
  },
];

const workouts = [
  {
    title: 'Day 1 & Day 4 – Low-Impact Walking & Strength',
    calories: '400-600',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins) – Joint-Friendly',
        items: [
          'Seated or standing march (2 mins)',
          'Seated or standing leg swings (10 per leg)',
          'Arm circles & shoulder rolls (30 sec each)',
        ],
      },
      {
        title: '2️⃣ Low-Impact Walk (30-40 mins, Adjust as Needed)',
        items: [
          'Flat surface walk (15 mins, slow pace)',
          'Incline walk or gentle step-ups (5-10 mins, slow pace)',
          'Cool-down walk (5 mins, slow pace)',
        ],
      },
      {
        title: '3️⃣ Strength Training (15 mins, Joint & Heart-Safe)',
        items: [
          'Seated leg lifts (use a bench) – 3 sets x 12 reps',
          'Wall push-ups (no floor pressure) – 3 sets x 10 reps',
          'Seated or standing bicep curls (use light resistance) – 3 sets x 12 reps',
        ],
      },
    ],
  },
  {
    title: 'Day 2 & Day 5 – Endurance Walk + Core Workout',
    calories: '500-700',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          'Slow shoulder rolls & side stretches (30 sec each)',
          'Seated or standing toe taps (1 min)',
        ],
      },
      {
        title: '2️⃣ Long Walk (30-50 mins, Modify as Needed)',
        items: [
          'Heart issues? Keep a steady, moderate pace',
          'Knee pain? Avoid steep inclines',
          'Back pain? Use a supportive belt or brace if needed',
        ],
      },
      {
        title: '3️⃣ Core Strengthening (10 mins, Back-Friendly)',
        items: [
          'Seated knee lifts – 3 sets x 10 reps',
          'Standing side bends – 3 sets x 12 reps per side',
          'Wall plank hold – 3 sets x 20 seconds',
        ],
      },
    ],
  },
  {
    title: 'Day 3 & Day 6 – Strength & Low-Impact Cardio Mix',
    calories: '450-650',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          'Brisk walk (5 mins, moderate pace)',
          'Gentle seated or standing stretching',
        ],
      },
      {
        title: '2️⃣ Interval Cardio (20 mins, Low-Impact)',
        items: [
          '1 min slow walk → 1 min slightly faster walk (repeat 10 times)',
        ],
      },
      {
        title: '3️⃣ Strength Routine (20 mins, Joint & Back-Friendly)',
        items: [
          'Bench-assisted squats (small depth) – 3 sets x 10 reps',
          'Step-ups (low curb, slow & steady) – 3 sets x 8 reps per leg',
          'Seated dips (use a bench) – 3 sets x 10 reps',
        ],
      },
    ],
  },
];




const Outdoor = () => {
  return (
    <section className='w-full'>
            
                  {/* Header Section */}
                  <div className='p-10 bg-black flex flex-col items-center text-white space-y-5'>
                    <h1 className='text-center text-xl lg:text-3xl font-bold'>
                       Outdoor Workout Plan <br /> for Weight Loss (Obese & Joint-Friendly)
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
                    This <span className='font-bold'>low-impact, fat-burning plan</span> is designed for <span className='font-bold'>obese individuals</span> looking to <span className='font-bold'>lose weight, improve endurance, and strengthen muscles</span>—all while <span className='font-bold'>exercising outdoors</span>.
                  </p>

                  {/* Key Features */}
      <div className='p-6 mt-6 flex flex-col items-center'>
           <h2 className='text-3xl font-bold font-sans'>📌 Key Features:</h2>
          <ul className='mt-4 space-y-2 list-disc text-left px-6'>
          {keyFeatures.map((feature, idx) => (
              <li key={idx} className=' mx-auto'>{feature}</li>
          ))}
        </ul>
      </div>

       {/* Plan Overview */}
      <div className='mt-6 w-full flex flex-col items-center'>
        <h2 className='text-2xl font-bold font-sans text-center'>🏋️‍♂️ 4-6 Day Indoor Workout Plan (1 Hour Per Session)</h2>
        <ul className='mt-4 space-y-2 list-disc text-center px-6 max-w-2xl'>
          {planOverview.map((item, idx) => (
            <li key={idx} className='list-disc text-left'>{item.label}: {item.value}</li>
          ))}
        </ul>
      </div>

      {updatedWorkout.map((day, dayIdx) => (
        <div key={dayIdx} className='p-6 mt-7 flex flex-col items-center'>
          <h2 className='text-2xl font-bold font-sans text-center'>🗓️ {day.title}</h2>
          <p className='mt-2'>🔥 Calories Burned: {day.calories}</p>

          {day.steps.map((step, stepIdx) => (
            <div key={stepIdx} className='mt-6 w-full flex flex-col items-center'>
              <h3 className='text-xl lg:text-2xl font-bold font-sans text-center'>{step.title}</h3>
              <ul className='mt-4 space-y-3 list-disc text-left px-6 '>
                {step.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <div className='p-6 mt-6 flex flex-col justify-center items-center'>
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Safety & Success Tips</h1>
        <div className='space-y-2 font-sans mt-4 '>
          <p>✅ Modify movements to avoid joint pain</p>
          <p>✅ Stay hydrated (especially in hot weather)</p>
          <p> ✅ Wear supportive shoes for stability</p>
          <p> ✅ Start slow & increase intensity gradually</p>
        </div>
        </div>

        <div className='p-10 bg-black flex flex-col items-center text-white space-y-5 mt-10'>
                <h1 className='text-center text-2xl lg:text-3xl font-bold'>
                  Outdoor Workout Plan <br />  for Weight Loss (Obese & Joint-Friendly)
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
                This plan <span className='font-bold'>burns fat safely</span> while being <span className='font-bold'>joint-friendly, back-friendly, and heart-safe</span>.
              </p>

              <div className='p-6 mt-7 flex flex-col justify-start items-center'>
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Modifications for Common Conditions</h1>
        <div className='mt-6'>
          <h1 className='text-2xl font-bold font-sans '>1️⃣ The Knee Pain (Arthritis, Joint Pain)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: Deep squats, lunges, jumping, high-impact movements</p>
            <p>✅ Do Instead: Seated exercises, step-ups, slow hill walking</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center'>
          <h1 className='text-2xl font-bold font-sans  '>2️⃣ Back Pain (Lower Back Strain, Herniated Disc, Sciatica)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: Bending forward, unsupported core exercises, carrying heavy loads</p>
            <p>✅ Do Instead: Seated core work, walking, gentle strength training</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center'>
          <h1 className='text-2xl font-bold font-sans '>3️⃣ Heart Issues (High Blood Pressure, Heart Disease)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: High-intensity cardio, sudden movement changes, overexertion</p>
            <p>✅ Do Instead: Steady-paced walking, controlled breathing, moderate intensity</p>
          </div>
        </div>
        <h2 className='text-2xl font-bold font-sans text-center mt-8'>🏋️‍♂️ 4-6 Day Outdoor Workout Plan (Modified for Safety & Effectiveness)</h2>
        </div>

        {workouts.map((day, dayIdx) => (
        <div key={dayIdx} className='p-6 mt-7 flex flex-col items-center'>
          <h2 className='text-2xl font-bold font-sans text-center'>🗓️ {day.title}</h2>
          <p className='mt-2'>🔥 Calories Burned: {day.calories}</p>

          {day.steps.map((step, stepIdx) => (
            <div key={stepIdx} className='mt-6 w-full flex flex-col items-center'>
              <h3 className='text-xl lg:text-2xl font-bold font-sans text-center'>{step.title}</h3>
              <ul className='mt-4 space-y-3 list-disc text-left px-6 '>
                {step.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <div className='p-6 mt-6 flex flex-col justify-center items-center'>
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Important Safety Tips</h1>
        <div className='space-y-2 font-sans mt-4 '>
          <p>✅ Listen to your body—stop if you feel pain</p>
          <p>✅ Keep breathing steady—avoid holding breath during exercises</p>
          <p> ✅ Stay hydrated & wear proper shoes for stability</p>
          <p>✅ Use a heart rate monitor if needed</p>
        </div>
        </div>

            
    </section>
  )
}

export default Outdoor