```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15 if you try to access it directly using a client-side fetch request
  const data = await fetch('/api/data');  
  return (
    <div>
      <h1>About Page</h1>
      <p>{/*This will not render if data is not available*/}</p>
    </div>
  );
}
```