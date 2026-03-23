
Goal Months Calculator

I built this calculator using React, TypeScript, and Tailwind CSS v4 with a focus on clean structure, performance, and a smooth user experience. The goal wasn’t just to get the functionality working, but to keep the codebase easy to scale and maintain.

##Architecture and Component Structure

I structured the project in a modular way so that logic and UI are clearly separated. All the TypeScript types are centralized, which helped keep things consistent across the app. The calculation logic and formatting functions are kept in a utils layer as pure functions, so they’re easy to test and reuse.

For handling state and logic, I used a custom hook that encapsulates the entire calculator behavior. This keeps the components clean and focused only on rendering. The components themselves are small, reusable, and designed to do just one thing, which made the overall structure much easier to manage as the project grew.

##Performance Optimizations

Since the app involves frequent calculations based on user input, performance was something I paid close attention to.

I used React.memo to prevent unnecessary re-renders in components that don’t need to update often. I also used useCallback to stabilize function references and useMemo to make sure the calculation logic only runs when the actual input values change.

Another important improvement was debouncing user input. Without it, calculations would trigger on every keystroke, which can feel laggy. Adding a small delay made the interactions much smoother.

##Accessibility

I tried to make the app accessible from the start. I used proper semantic HTML elements and made sure all inputs are correctly associated with labels. I also added support for screen readers using aria-live so that updates to the results are announced.

Keyboard navigation is fully supported, including using arrow keys for the slider, and I made sure focus states are clearly visible for better usability.

##User Experience

From a UX perspective, I kept things simple and clean. The UI uses a minimal theme and is fully responsive, so it works well on both mobile and desktop. The results update in real time as users interact with the inputs, which makes the tool feel more interactive.

I also handled edge cases, like when the goal isn’t realistically achievable with the given inputs, and made sure the output is always formatted in INR for better clarity.
