// Link API
import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about">
            <a style={{ fontSize: 20 }}>About page</a>
        </Link>

        {/* Link with a button */}
        <Link href="/about">
            <button>Go to about page</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index