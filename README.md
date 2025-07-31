# Create the project
npm create vite@latest car-dealership-frontend -- --template react-ts
#Make dir first name car-dealership-frontend
cd car-dealership-frontend
npm install

# Install essential dependencies
npm install react-router-dom @tanstack/react-query axios react-hook-form @hookform/resolvers yup
npm install lucide-react react-hot-toast framer-motion swiper
npm install -D tailwindcss postcss autoprefixer @types/node
npm install -D @tailwindcss/forms @tailwindcss/aspect-ratio

# Initialize Tailwind CSS
npx tailwindcss init -p
