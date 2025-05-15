'use client'

import React from 'react'
import Image from 'next/image'

// Author Info
const author = {
  name: 'Isaac Chukwumeze',
  date: 'May 8, 2025',
  image: '/issaca.jpg',
}

const meals = [
  {
    title: '🍳 Day 1',
    meals: {
      breakfast: 'Oatmeal with chia seeds, berries, and almond butter',
      lunch: 'Grilled salmon, quinoa, steamed broccoli, and olive oil dressing',
      snack: 'Greek yogurt with walnuts and honey',
      dinner: 'Grilled chicken, roasted sweet potatoes, and sautéed spinach',
    },
  },
  {
    title: '🥑 Day 2',
    meals: {
      breakfast: 'Scrambled eggs with avocado & whole wheat toast',
      lunch: 'Tuna salad with mixed greens, chickpeas, and balsamic vinaigrette',
      snack: 'Handful of almonds + an apple',
      dinner: 'Turkey meatballs with zucchini noodles & marinara sauce',
    },
  },
  {
    title: '🐟 Day 3',
    meals: {
      breakfast: 'Chia pudding with coconut milk & blueberries',
      lunch: 'Grilled shrimp with brown rice and roasted asparagus',
      snack: 'Hard-boiled egg + cucumber slices with hummus',
      dinner: 'Baked salmon with roasted Brussels sprouts and quinoa',
    },
  },
  {
    title: '🍠 Day 4',
    meals: {
      breakfast: 'Greek yogurt with flaxseeds and strawberries',
      lunch: 'Lentil soup with a side of whole wheat bread',
      snack: 'Cottage cheese with pineapple',
      dinner: 'Baked chicken breast, mashed cauliflower, and sautéed green beans',
    },
  },
  {
    title: '🥕 Day 5',
    meals: {
      breakfast: 'Whole wheat toast with peanut butter & banana',
      lunch: 'Quinoa & black bean salad with avocado dressing',
      snack: 'Carrot sticks + guacamole',
      dinner: 'Stir-fried tofu with mixed veggies and brown rice',
    },
  },
  {
    title: '🌿 Day 6',
    meals: {
      breakfast: 'Smoothie (spinach, banana, almond milk, chia seeds)',
      lunch: 'Grilled turkey breast with a side of roasted sweet potatoes',
      snack: 'Greek yogurt + pumpkin seeds',
      dinner: 'Baked cod with sautéed kale and roasted carrots',
    },
  },
  {
    title: '🥗 Day 7',
    meals: {
      breakfast: 'Scrambled eggs with spinach & whole grain toast',
      lunch: 'Chicken and avocado wrap (whole wheat tortilla)',
      snack: 'Dark chocolate square + mixed nuts',
      dinner: 'Grilled steak with roasted cauliflower & quinoa',
    },
  },
];


const Nutrition = () => {
  return (
    <section className=''>
       <div className='p-10 bg-black flex flex-col items-center text-white space-y-5'>
              <h1 className='text-center text-xl lg:text-3xl font-bold'>
               Beginner-Friendly Meal Plan<br /> for Weight Loss & Joint/Heart Health
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
              This <span className='font-bold'>7-day meal plan</span> is designed to <span className='font-bold'>reduce inflammation, support weight loss</span>, and <span className='font-bold'>boost energy</span> while being <span className='font-bold'>heart-friendly</span> and <span className='font-bold'>joint-friendly</span>. It focuses on <span className='font-bold'>lean proteins, healthy fats, fiber-rich carbs, and anti-inflammatory foods</span> like <span className='font-bold'>omega-3s, turmeric, and leafy greens</span>.
             </p>

             <div className='p-6 mt-6 flex flex-col justify-center items-center'>
             <h1 className='text-center text-2xl lg:text-3xl  font-bold font-sans'>🛑 Foods to Limit:</h1>
             <div className='space-y-3 font-sans mt-4 '>
             <p>❌ Fried foods & processed meats (worsen inflammation, bad for heart health)</p>
             <p>❌ Sugary drinks & refined carbs (spike blood sugar, promote fat storage)</p>
             <p> ❌ Excess salt (increases blood pressure, water retention)</p>
        </div>
        </div>

        
             <div className='p-6 mt-6 flex flex-col justify-center items-center'>
             <h1 className='text-center text-2xl lg:text-3xl  font-bold font-sans'>✅ Best Foods for Weight Loss & Joint/Heart Health:</h1>
             <div className='space-y-3  font-sans mt-4 '>
             <p>✔ Lean proteins: Chicken, fish, tofu, beans</p>
             <p>✔ Anti-inflammatory fats: Olive oil, avocado, nuts</p>
             <p> ✔ High-fiber carbs: Oats, quinoa, sweet potatoes</p>
                <p> ✔ Hydrating foods: Cucumbers, watermelon, berries</p>
        </div>
        </div>

        <h2 className='lg:text-3xl text-xl font-bold font-sans text-center mt-8'>🗓️ 7-Day Meal Plan (1,500-1,800 Calories/day)</h2>
        <p className='mt-6 py-3 px-6 lg:px-10 text-center text-md lg:text-xl font-sans'>
          Balanced for <span className='font-bold'>steady weight loss</span> while keeping energy levels high.
        </p>

         <div className='p-6 mt-6 flex flex-col items-center'>
  {meals.map((meal, mealIdx) => (
    <div key={mealIdx} className='mb-8  '>
      <h1 className='text-center text-2xl lg:text-3xl font-bold font-sans'>
        {meal.title}
      </h1>
      <div className='space-y-2 font-sans mt-4 text-base lg:text-lg flex flex-col items-center'>
        <p className=''><strong>Breakfast:</strong> {meal.meals.breakfast}</p>
        <p className='text-l'><strong>Lunch:</strong> {meal.meals.lunch}</p>
        <p className='text-le'><strong>Snack:</strong> {meal.meals.snack}</p>
        <p className='text-le'><strong>Dinner:</strong> {meal.meals.dinner}</p>
      </div>
    </div>
  ))}
</div>

<div className='p-10 bg-black flex flex-col items-center text-white space-y-5 mt-10'>
        <h1 className='text-center text-xl lg:text-3xl font-bold'>
          Vegan Meal Plan <br />  for Weight Loss & Joint/Heart Health
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

    </section>
  )
}

export default Nutrition