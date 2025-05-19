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

const keyFeatures = [
  '✅ Low-impact, high-calorie burn exercises (safe for joints)',
  '✅ Strength training to boost metabolism (muscle burns more fat)',
  '✅ Progressive overload (gradually increasing difficulty)',
  '✅ Combination of cardio & weight training (best for fat loss)',
]

const planOverview = [
  { label: 'Days per week', value: '4-6' },
  { label: 'Workout time', value: '~60 minutes' },
  { label: 'Calories burned per session', value: '400-800' },
]

const gymWorkouts = [
  {
    title: 'Day 1 & Day 4 – Strength & Cardio (Full Body)',
    calories: '500-700',
    goal: 'Build muscle while burning fat',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Treadmill Walk (Incline 3-5%) – 5-10 mins',
          'Dynamic Stretches – Arm circles, leg swings, hip rotations',
        ],
      },
      {
        title: '2️⃣ Strength Training (40 mins)',
        items: [
          'Leg Press Machine – 3 sets x 10 reps',
          'Seated Lat Pulldown Machine – 3 sets x 10 reps',
          'Seated Dumbbell Shoulder Press – 3 sets x 10 reps',
          'Leg Extensions – 3 sets x 12 reps',
          'Seated Hamstring Curl Machine – 3 sets x 12 reps',
          'Cable Woodchopper – 3 sets x 10 reps per side',
        ],
      },
      {
        title: '3️⃣ Cardio Finisher (10 mins)',
        items: [
          'Stationary Bike (Moderate-High Intensity) – 10 mins',
        ],
      },
    ],
  },
  {
    title: 'Day 2 & Day 5 – Low-Impact High-Calorie Burn Cardio',
    calories: '600-800',
    goal: 'Maximize fat burn while protecting joints',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Elliptical (Low Resistance, Fast Pace) – 10 mins',
        ],
      },
      {
        title: '2️⃣ Cardio Routine (40 mins)',
        items: [
          'Rowing Machine – 10 mins (steady pace)',
          'Treadmill Incline Walk (5-7%) – 10 mins',
          'Seated Cycling (Moderate Resistance) – 10 mins',
          'Elliptical Intervals (30 sec sprint / 1 min slow pace) – 10 mins',
        ],
      },
      {
        title: '3️⃣ Core Work (10 mins)',
        items: [
          'Seated Russian Twists (with light medicine ball) – 3 sets x 12 reps',
          'Plank Hold (on knees if needed) – 3 sets x 30 seconds',
        ],
      },
    ],
  },
  {
    title: 'Day 3 & Day 6 – Strength & Cardio Mix',
    calories: '500-700',
    goal: 'Build endurance and strength',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Stairmaster (Low Speed) – 5 mins',
          'Arm Circles, Hip Openers – 5 mins',
        ],
      },
      {
        title: '2️⃣ Strength Circuit (40 mins)',
        items: [
          'Dumbbell Goblet Squats (Use a Bench for Support) – 3 sets x 10 reps',
          'Seated Row Machine – 3 sets x 10 reps',
          'Dumbbell Bicep Curls – 3 sets x 12 reps',
          'Leg Press (Light Weight) – 3 sets x 12 reps',
          'Glute Bridges – 3 sets x 12 reps',
        ],
      },
      {
        title: '3️⃣ Cardio Finisher (10 mins)',
        items: [
          'Jump Rope (Low-Impact, Slow Speed) or Rowing Machine – 10 mins',
        ],
      },
    ],
  },
];

const workouts = [
  {
    title: 'Day 1 & Day 4 – Strength & Low-Impact Cardio',
    calories: '400-600',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Seated Cycling (Low Resistance) – 5 mins',
          'Gentle Stretching – Arm circles, seated leg swings',
        ],
      },
      {
        title: '2️⃣ Strength Training (40 mins)',
        items: [
          'Seated Leg Press (Low Weight, No Deep Bend) – 3 sets x 10 reps',
          'Lat Pulldown Machine (Supports Spine) – 3 sets x 10 reps',
          'Seated Shoulder Press (Use Machines for Stability) – 3 sets x 10 reps',
          'Seated Leg Extensions (Strengthens Knees) – 3 sets x 12 reps',
          'Glute Bridges (Supports Lower Back, Optional Mat Work) – 3 sets x 12 reps',
        ],
      },
      {
        title: '3️⃣ Low-Impact Cardio Finisher (10 mins)',
        items: [
          'Treadmill Walk (Flat Surface, Slow Pace) – 10 mins',
        ],
      },
    ],
  },
  {
    title: 'Day 2 & Day 5 – Gentle Cardio & Core Strength',
    calories: '500-700',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Recumbent Bike (Back-Supported Cycling, Low Impact) – 10 mins',
        ],
      },
      {
        title: '2️⃣ Cardio Routine (30 mins)',
        items: [
          'Rowing Machine (Low Resistance, Smooth Movements) – 10 mins',
          'Treadmill Walk (No Incline, Comfortable Pace) – 10 mins',
          'Elliptical (Low Resistance, Steady Pace) – 10 mins',
        ],
      },
      {
        title: '3️⃣ Core Strengthening (10 mins)',
        items: [
          'Seated Russian Twists (Use Light Medicine Ball, No Twisting if Back Pain) – 3 sets x 12 reps',
          'Plank Hold (Modify to Knees or Against Wall) – 3 sets x 30 seconds',
        ],
      },
    ],
  },
  {
    title: 'Day 3 & Day 6 – Strength & Low-Impact Cardio Mix',
    calories: '450-650',
    steps: [
      {
        title: '1️⃣ Warm-Up (10 mins)',
        items: [
          'Elliptical or Recumbent Bike – 10 mins',
        ],
      },
      {
        title: '2️⃣ Strength Training (40 mins)',
        items: [
          'Seated Row Machine (Supports Spine) – 3 sets x 10 reps',
          'Dumbbell Bicep Curls (Seated If Needed) – 3 sets x 12 reps',
          'Leg Press (Low Weight, No Deep Knee Bend) – 3 sets x 12 reps',
          'Wall Sit (Short Duration, Safe for Knees) – 3 sets x 20 seconds',
          'Bird-Dog (Great for Core & Back Pain Prevention) – 3 sets x 10 reps',
        ],
      },
      {
        title: '3️⃣ Cool-Down & Stretching (10 mins)',
        items: [
          'Gentle Seated Stretches',
        ],
      },
    ],
  },
]



const Gym = () => {
  return (
    <section className=''>
        {/* Header Section */}
              <div className='p-10 bg-black flex flex-col items-center text-white space-y-5'>
                <h1 className='text-center text-xl lg:text-3xl font-bold'>
                  Gym Workout Plan<br /> for Obese Individuals (Weight Loss Focused)
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
                  This plan is <span className='font-bold'>designed for fat loss, strength building, and endurance</span>, while being <span className='font-bold'>joint-friendly and scalable</span>. It includes <span className='font-bold'>strength training and cardio</span> to maximize calorie burn while minimizing the risk of injury.
                </p>

                {/* Key Features */}
          <div className='p-6 mt-6 flex flex-col items-center'>
           <h2 className='text-3xl font-bold font-sans'>📌 Key Focus Areas:</h2>
           <ul className='mt-4 space-y-2  text-left px-6'>
          {keyFeatures.map((feature, idx) => (
            <li key={idx} className=' mx-auto'>{feature}</li>
          ))}
        </ul>
      </div>

      <div className='mt-6 w-full flex flex-col items-center'>
        <h2 className='text-2xl font-bold font-sans text-center'>🏋️‍♂️ 4-6 Day Gym Workout Plan (1 Hour Per Session)</h2>
        <ul className='mt-4 space-y-2 list-disc text-center px-6 max-w-2xl'>
          {planOverview.map((item, idx) => (
            <li key={idx} className='list-disc text-left'>{item.label}: {item.value}</li>
          ))}
        </ul>
      </div>

       {gymWorkouts.map((day, dayIdx) => (
        <div key={dayIdx} className='p-6 mt-7 flex flex-col items-center'>
          <h2 className='text-2xl font-bold font-sans text-center'>🗓️ {day.title}</h2>
          <p className='mt-2'>🔥 Calories Burned: {day.calories}</p>
          <p className='mt-2'>🎯 Goal: {day.goal}</p>

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
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Important Tips for Success</h1>
        <div className='space-y-2 font-sans mt-4 '>
          <p>✅ Start with Light Weights & Increase Gradually – Focus on proper form</p>
          <p>✅ Use Machines if Free Weights Feel Unstable – Machines provide support</p>
          <p> ✅ Rest as Needed Between Sets – 30-60 seconds rest between exercises</p>
          <p> ✅ Stay Hydrated & Stretch Post-Workout</p>
        </div>
        </div>

        <div className='p-10 bg-black flex flex-col items-center text-white space-y-5 mt-10'>
                <h1 className='text-center text-xl lg:text-3xl font-bold'>
                 Modified Gym Workout Plan <br /> for Obese Individuals with Knee Pain, Back Pain, or Heart Issues
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
              This version of the plan <span className='font-bold'>reduces joint stress, minimizes back strain</span>, and <span  className='font-bold'>keeps workouts heart-safe</span> while still promoting <span  className='font-bold'>weight loss and muscle building</span>.
              </p>

              <div className='p-6 mt-7 flex flex-col justify-start items-center'>
        <h1 className='text-center text-3xl  font-bold font-sans'>🛑 Modifications for Common Conditions</h1>
        <div className='mt-6'>
          <h1 className='text-2xl font-bold font-sans '>1️⃣ Knee Pain (Arthritis, Joint Issues)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: Squats, lunges, stair climbing, high-impact movements</p>
            <p>✅ Do Instead: Seated leg exercises, low-resistance cycling, water workouts</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center'>
          <h1 className='text-2xl font-bold font-sans  '>2️⃣ Back Pain (Lower Back Strain, Herniated Disc, Sciatica)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: Heavy lifting, forward bending, unsupported core exercises</p>
            <p>✅ Do Instead: Machines over free weights, core-strengthening exercises</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center'>
          <h1 className='text-2xl font-bold font-sans '>3️⃣ Heart Issues (High Blood Pressure, Heart Disease)</h1>
          <div className='mt-4 space-y-2.5 text-left'>
            <p>❌ Avoid: High-intensity cardio, excessive heavy lifting, breath-holding during lifts</p>
            <p>✅ Do Instead: Light to moderate resistance, low-impact cardio, controlled breathing</p>
          </div>
        </div>
        <h2 className='text-2xl font-bold font-sans text-center mt-8'>🏋️‍♂️ 4-6 Day Indoor Workout Plan (Modified for Safety & Effectiveness)</h2>
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
          <p>✅ Use Machines for Stability – Protects joints & back</p>
          <p>✅ Avoid Sudden Movements – Slow, controlled exercises</p>
          <p> ✅ Stay Hydrated – Reduces risk of dizziness, overheating</p>
          <p> ✅ Monitor Heart Rate – Stay in a safe range, take breaks</p>
        </div>
        </div>

        <div className='mt-6 flex flex-col justify-center items-center'>
          <Link href="/gym-videos">
            <button className='text-center flex justify-center items-center text-2xl font-bold tracking-wide font-sans bg-black text-white py-3.5 px-4 rounded-full'>Check out some videos</button>
            </Link>

        </div>
    </section>
  )
}

export default Gym