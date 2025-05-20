'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Author Info
const author = {
  name: 'Isaac Chukwumeze',
  date: 'May 8, 2025',
  image: '/issaca.jpg',
}

// Key Features
const keyFeatures = [
  'No equipment needed (or minimal, like a chair or resistance band)',
  'Low-impact cardio (joint-friendly)',
  'Bodyweight strength training (builds muscle to boost fat loss)',
  'Core & flexibility work (prevents injuries and supports mobility)',
]

// Plan Overview
const planOverview = [
  { label: 'Days per week', value: '4-6' },
  { label: 'Workout time', value: '~60 minutes' },
  { label: 'Calories burned per session', value: '400-800' },
]

// Workouts
const workouts = [
  {
    title: 'Day 1 & Day 4 – Full Body Strength & Cardio',
    calories: '500-700',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          'Seated or standing march (3 mins)',
          'Arm circles & shoulder rolls (30 sec each)',
          'Seated or standing toe taps (2 mins)',
          'Slow bodyweight squats (hold onto a chair if needed, 10 reps)',
        ],
      },
      {
        title: '2️⃣ Low-Impact Cardio (20-30 mins)',
        items: [
          'Step touch side-to-side (2 mins)',
          'Seated knee lifts (2 mins)',
          'March in place (2 mins)',
          'Modified jumping jacks (low impact, 2 mins)',
        ],
      },
      {
        title: '3️⃣ Strength Training (20 mins, No Equipment Needed)',
        items: [
          'Seated or standing wall push-ups – 3 sets x 10 reps',
          'Seated or standing bicep curls – 3 sets x 12 reps',
          'Chair-assisted squats – 3 sets x 10 reps',
          'Glute bridges – 3 sets x 12 reps',
        ],
      },
    ],
  },
  {
    title: 'Day 2 & Day 5 – Low-Impact Cardio & Core',
    calories: '500-800',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          'Gentle side bends (30 sec per side)',
          'March in place (2 mins)',
          'Arm swings & torso rotations (30 sec each)',
        ],
      },
      {
        title: '2️⃣ Cardio Routine (30-40 mins, Modify as Needed)',
        items: [
          'March in place (5 mins, steady pace)',
          'Step-ups (use a low step or stairs, 5 mins)',
          'Slow side lunges (no deep bending, 5 mins)',
          'Chair or wall-assisted modified jumping jacks (5 mins)',
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
    title: 'Day 3 & Day 6 – Strength & Mobility',
    calories: '450-650',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Gentle Movements)',
        items: [
          'Brisk march in place (5 mins, slow pace)',
          'Gentle stretches (5 mins, slow & steady)',
        ],
      },
      {
        title: '2️⃣ Strength Routine (30 mins, Low-Impact)',
        items: [
          'Seated or standing push-ups against a wall – 3 sets x 10 reps',
          'Step-ups – 3 sets x 8 reps per leg',
          'Seated or standing leg lifts – 3 sets x 12 reps per leg',
          'Seated dips – 3 sets x 10 reps',
        ],
      },
      {
        title: '3️⃣ Flexibility & Mobility (10-15 mins)',
        items: [
          'Forward bend (30 sec)',
          'Chest opener stretch (30 sec)',
          'Seated twist (30 sec each side)',
        ],
      },
    ],
  },
]

const workout = [
  {
    title: 'Day 1 & Day 4 – Low-Impact Strength & Cardio',
    calories: '400-600',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          'Seated or standing march (3 mins)',
          'Seated or standing leg swings (10 per leg, gentle motion)',
          'Arm circles & shoulder rolls (30 sec each)',
        ],
      },
      {
        title: '2️⃣ Low-Impact Cardio (20 mins, Modify as Needed)',
        items: [
          'March in place (slow pace, 5 mins)',
          'Step-ups on a low step (use a sturdy chair for support, 5 mins)',
          'Seated or standing knee lifts (slow & controlled, 5 mins)',
          'Cool-down march (slow, 5 mins)',
        ],
      },
      {
        title: '3️⃣ Strength Training (20 mins, Joint & Heart-Safe)',
        items: [
          'Seated or standing wall push-ups – 3 sets x 10 reps',
          'Seated or standing bicep curls (use light resistance) – 3 sets x 12 reps',
          'Chair-assisted squats (shallow depth, hold onto support) – 3 sets x 10 reps',
          'Glute bridges (on floor, knee-friendly) – 3 sets x 12 reps',
        ],
      },
    ],
  },
  {
    title: 'Day 2 & Day 5 – Endurance Cardio & Core Workout',
    calories: '500-700',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Joint-Friendly)',
        items: [
          'Gentle side bends (30 sec per side)',
          'March in place (2 mins, slow pace)',
        ],
      },
      {
        title: '2️⃣ Cardio Routine (30-40 mins, Modify as Needed)',
        items: [
          'Steady-paced march (5 mins, no jumping)',
          'Slow side steps (5 mins, avoid quick movements)',
          'Seated or standing step-ups (5 mins, slow pace)',
          'Seated or wall-assisted modified jumping jacks (5 mins, if comfortable)',
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
    title: 'Day 3 & Day 6 – Strength & Mobility',
    calories: '450-650',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins, Gentle Movements)',
        items: [
          'Brisk march in place (5 mins, moderate pace)',
          'Gentle stretching (5 mins, slow & steady)',
        ],
      },
      {
        title: '2️⃣ Strength Routine (30 mins, Low-Impact)',
        items: [
          'Seated or standing push-ups against a wall – 3 sets x 10 reps',
          'Step-ups (on a low step, slow & steady) – 3 sets x 8 reps per leg',
          'Seated or standing leg lifts – 3 sets x 12 reps per leg',
          'Seated dips (on a chair, slow & controlled) – 3 sets x 10 reps',
        ],
      },
      {
        title: '3️⃣ Flexibility & Mobility (10-15 mins, Cool Down & Stretching)',
        items: [
          'Seated forward bend (30 sec, stretches back & legs)',
          'Seated or standing quad stretch (30 sec per leg, knee-friendly)',
          'Neck and shoulder stretches (30 sec each)',
        ],
      },
    ],
  },
];


// Component
const Indoor = () => {
  return (
    <section className=''>
      {/* Header Section */}
      <div className='p-10 bg-black flex flex-col items-center text-white space-y-5'>
        <h1 className='text-center text-xl lg:text-3xl font-bold'>
          The Indoor Workout Plan <br /> for Weight Loss (Obese & Joint-Friendly)
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

      {/* Introduction */}
      <p className='mt-6 py-3 px-6 lg:px-10 text-center text-md lg:text-xl font-sans'>
        This plan helps <span className='font-bold'>burn fat, strengthen muscles, and improve endurance</span>—all{' '}
        <span className='font-bold'>without needing a gym</span>. It’s{' '}
        <span className='font-bold'>low-impact, back-friendly, and knee-friendly</span>, making it ideal for{' '}
        <span className='font-bold'>home workouts</span>.
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

      {/* Daily Workouts */}
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
          <p>✅ Modify exercises as needed—avoid pain or discomfort</p>
          <p>✅ Keep movements slow & controlled—prevents strain</p>
          <p> ✅ Use a sturdy chair or wall for support if needed</p>
          <p> ✅ Stay hydrated & listen to your body</p>
        </div>
        </div>

        <div className='p-10 bg-black flex flex-col items-center text-white space-y-5 mt-10'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold'>
          The Indoor Workout Plan <br />  (Modified for Knee Pain, Back Pain, or Heart Issues)
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
      This version <span className='font-bold'>burns fat while being safe for joints, back, and heart health</span>. It’s <span className='font-bold'>low-impact, beginner-friendly, and easy to do at home</span> with minimal equipment (chair, resistance bands, or household items).
      </p>
      <div className='p-6 mt-7 flex flex-col justify-start items-center'>
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Modifications for Common Conditions</h1>
        <div className='mt-6'>
          <h1 className='text-2xl font-bold font-sans '>1️⃣ The Knee Pain (Arthritis, Joint Pain)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: Deep squats, lunges, high-impact moves</p>
            <p>✅ Do Instead: Seated exercises, chair-assisted movements, slow step-ups</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center'>
          <h1 className='text-2xl font-bold font-sans  '>2️⃣ Back Pain (Lower Back Strain, Herniated Disc, Sciatica)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: Bending forward, unsupported core exercises, excessive twisting</p>
            <p>✅ Do Instead: Seated core work, standing exercises, wall support</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center'>
          <h1 className='text-2xl font-bold font-sans '>3️⃣ Heart Issues (High Blood Pressure, Heart Disease)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: High-intensity cardio, sudden movement changes, holding breath during exercises</p>
            <p>✅ Do Instead: Steady-paced movements, controlled breathing, moderate intensity</p>
          </div>
        </div>
        <h2 className='text-2xl font-bold font-sans text-center mt-8'>🏋️‍♂️ 4-6 Day Indoor Workout Plan (Modified for Safety & Effectiveness)</h2>
        </div>

        {workout.map((day, dayIdx) => (
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
          <p>✅ Modify exercises as needed—avoid pain or discomfort</p>
          <p>✅ Keep movements slow & controlled—prevents strain</p>
          <p> ✅ Use a sturdy chair or wall for support if needed</p>
          <p> ✅ Stay hydrated & listen to your body</p>
        </div>
        </div>

        <div className='mt-6 flex flex-col justify-center items-center'>
           <Link href="/indoor-videos">
            <button className='text-center flex justify-center items-center text-2xl font-bold tracking-wide font-sans bg-black text-white py-3.5 px-4 rounded-full'>Check out some videos</button>
           </Link>
        </div>
    </section>
  )
}

export default Indoor
